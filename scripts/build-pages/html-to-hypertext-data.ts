import { createDocument } from '@stencil/core/mock-doc';


export function convertHtmlToHypertextData(html: string): any {
  const doc = createDocument();
  const div = doc.createElement('div');
  div.innerHTML = html;
  return convertElementToHypertextData(div);
}

function convertElementToHypertextData(node: any) {
  const data = [];

  if (node.nodeType === 1) {
    let tag = node.tagName.toLowerCase();

    if (tagBlacklist.includes(tag)) {
      tag = 'template';
    }

    data.push(tag);

    if (node.attributes.length > 0) {
      const attrs = {};
      for (let j = 0; j < node.attributes.length; j++) {
        const attr = node.attributes.item(j);
        attrs[attr.nodeName] = attr.nodeValue;
      }
      data.push(attrs);

    } else {
      data.push(null);
    }

    for (let i = 0; i < node.childNodes.length; i++) {
      data.push(convertElementToHypertextData(node.childNodes[i]));
    }

    return data;

  } else if (node.nodeType === 3) {
    return node.textContent;
  }

  return '';
}

const tagBlacklist = ['script', 'link', 'meta', 'object', 'head', 'html', 'body'];
