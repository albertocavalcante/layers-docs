import {OpenAPIObject, SchemaObject} from 'openapi3-ts'
import { AcessorNode } from './schema';

export type OperationType = 'READ' | 'WRITE'

export function isReferenceObject(obj) {
  return obj && obj.hasOwnProperty("$ref");
}

export function isSchemaObject(schema) {
  return schema && !schema.hasOwnProperty('$ref');
}

export function getRefPath(spec: OpenAPIObject, path: string) {
  if (path.startsWith('#/')) {
    let paths = path.replace('#/', '').split('/')
    let title = paths[paths.length - 1]
    let obj = spec as any
    let next
    while (next = paths.shift()) {
      if (obj && next in obj) {
        obj = obj[next]
      } else {
        return undefined
      }
    }

    if (isReferenceObject(obj)) {
      return {title, ...getRefPath(spec, obj.$ref)}
    }

    return {title, ...obj}
  } else {
    throw new Error('unsuporte path reference: ' + path)
  }
}

export function getRef(spec: OpenAPIObject, obj: SchemaObject) {
  if (!obj) {
    return undefined
  }

  if (isReferenceObject(obj)) {
    return getRefPath(spec, obj.$ref)
  }

  return obj
}

export function getAcessorPathNames(node: AcessorNode, includeSelf: boolean = false) {
  let path = includeSelf ? [node.name]  : []
  while (node = node.parent) {
    path.unshift(node.name)
  }
  return path
}

export function normalizeObject(spec: OpenAPIObject, obj: SchemaObject): SchemaObject {
  obj = getRef(spec, obj)

  if (!obj) {
    return {}
  }

  if (obj.allOf) {
    return obj.allOf.reduce((prev, obj) => Object.assign(prev, normalizeObject(spec, obj)), {})
  }

  return obj
}

export function generateExample(spec: OpenAPIObject, node: AcessorNode, operation: OperationType = 'READ') {
  let schema = normalizeObject(spec, node.schema)
  let example = schema.example ?? schema.examples?.[0]

  // Check if can show property
  if (schema.readOnly && operation == 'WRITE') {
    return
  }

  if (schema.writeOnly && operation == 'READ') {
    return
  }

  if (example) {
    return example
  }

  if (schema.type == 'object') {
    let obj = {}
    for (let key in schema.properties) {
      let prop = schema.properties[key]
      obj[key] = generateExample(spec, {
        name: key,
        parent: node,
        schema: prop
      })
    }
    return obj
  }

  if (schema.type == 'array') {
    return [generateExample(spec, {
      name: '[]',
      parent: node,
      schema: schema.items,
    })]
  }

  return getDefaultTypeExample(node)
}

let EXAMPLE_DATE = new Date()
export function getDefaultTypeExample({schema}: AcessorNode) {
  let type = schema.type?.toLowerCase()
  if (!type) {
    return
  }

  if (schema.default) {
    return schema.default
  }
  
  if (type == 'boolean') {
    return true
  }

  if (type == 'number') {
    return ((schema.minimum ?? 1) + (schema.maximum ?? 10)) / 2
  }
  
  if (type == 'integer') {
    return Math.round((schema.minimum ?? 1) + (schema.maximum ?? 10)) / 2
  }

  if (type == 'integer') {
    return Math.round((schema.minimum ?? 1) + (schema.maximum ?? 10)) / 2
  }
  
  let format = schema.format?.toLowerCase()
  if (type == 'string') {
    if (schema.enum?.[0]) {
      return schema.enum[0]
    }

    if (format == 'byte')
      return 'U3RyaW5nIGV4ZW1wbG8='

    if (format == 'date-time') {
      return EXAMPLE_DATE.toISOString()
    }

    if (format == 'date') {     
      return EXAMPLE_DATE.toISOString().split('T')[0]
    }

    if (format == 'time') {
      return EXAMPLE_DATE.toISOString().split('T')[1].replace('Z', '')
    }

    if (format == 'password') {
      return '********'
    }

    if (format == 'email') {
      return 'luke@starwars.com'
    }

    if (format == 'uuid') {
      return '2f985f64-5720-4562-b310-2c963f66afa6'
    }

    if (format == 'objectid') {
      return '5bb2575199d7179dfe85be02'
    }

    return 'exemplo'
  }
}