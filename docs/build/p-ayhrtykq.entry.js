import{r as e,h as t}from"./p-72181234.js";import{g as s,n as l,b as i}from"./p-2450325a.js";const a=class{constructor(t){e(this,t),this.hideReadOnly=!1,this.hideWriteOnly=!1,this.includeRootName=!1}getRootAcessorNode(){if(this.node)return this.node;let e=s(this.spec,this.path);return e?{schema:e,name:this.path.split("/").pop()}:null}renderProperty(e){if(!e.schema)return null;if(this.hideReadOnly&&e.schema.readOnly)return null;if(this.hideWriteOnly&&e.schema.writeOnly)return null;let s=i(e),l=(this.includeRootName?s:s.slice(1)).join("."),a=s.join(".")+"."+e.name,r=this.hasProperties(e);return t("li",{class:"Api-property-list-item",key:a},t("h3",{class:"Api-property-spec"},t("a",{class:"Api-property-name",href:`#${a}`,id:a},l?t("span",{class:"Api-property-name-ancestor"},l,"."):null,e.name),t("span",{class:"Api-flex-grow"}),this.buildObjectTypeLabel(e),this.buildDefaultLabel(e),this.buildEnumLabel(e),this.buildConstraintsLabel(e),this.buildIsRequiredLabel(e)),e.schema.description&&t("p",{class:"Api-property-description"},e.schema.description),r&&(e.schema.items&&e.schema.items.oneOf?e.schema.items.oneOf.map(s=>t("docs-openapi-schema-nested",{node:{name:"[]",parent:e.parent,schema:s},spec:this.spec})):t("docs-openapi-schema-nested",{node:e,spec:this.spec})))}renderPropertyList(e){let s=l(this.spec,e.schema);if(!s)return null;if("object"==s.type){let i=Object.entries(s.properties).map(([t,s])=>this.renderProperty({name:t,parent:e,schema:l(this.spec,s)}));return t("ul",{class:"Api-property-list",key:e.name},i)}}buildIsRequiredLabel(e){var s,l,i;if(null!=(i=null===(l=null===(s=e.parent)||void 0===s?void 0:s.schema.required)||void 0===l?void 0:l.includes(e.name))&&i)return t("span",{class:"Api-label Api-label-required"},"obrigatório")}hasProperties(e){return"array"==e.schema.type?this.hasProperties({name:"[]",schema:l(this.spec,e.schema.items)})||e.schema.items.oneOf:"object"==e.schema.type}buildEnumLabel(e){let s=e.schema.enum;return s?t("span",{class:"Api-label Api-label-option"},t("span",{class:"Api-label-tooltip"},s.map(e=>t("code",null,e))),"ENUM"):null}buildObjectTypeLabel(e,s){var i,a,r;let{type:n,nullable:o,title:p,items:c,externalDocs:u,format:h}=e.schema,d=Array.isArray(n)?n.map(e=>{var t,s;return this.camelCase(null!=(s=null!=(t=e)?t:h)?s:"")}):this.camelCase(null!=(a=null!=(i=n)?i:h)?a:"");if("object"==n&&p&&(d=p||d),"array"==n){let t={name:"[]",schema:l(this.spec,c),parent:e};return this.buildObjectTypeLabel(t,"[ ]")}return Array.isArray(d)?d.map(e=>e+(o?"?":"")):d+=(o?"?":"")+(null!=s?s:""),"object"==n&&(null===(r=u)||void 0===r?void 0:r.url)&&(d=t("stencil-route-link",{url:u.url},d)),Array.isArray(d)?t("span",{class:"Api-label Api-label-type"},d.reduceRight((e,t)=>e?t+" | "+e:e+t,"")):t("span",{class:"Api-label Api-label-type"},d)}buildDefaultLabel(e){let s=e.schema.default;return void 0===s?null:t("span",{class:"Api-label Api-label-option"},"DEFAULT",t("span",{class:"Api-label-tooltip"},t("code",null,String(s))))}buildConstraintsLabel({schema:e}){let s=[];return void 0!==e.minItems&&void 0!==e.maxItems?s.push(`De ${e.minItems} até ${e.maxItems} Itens`):void 0!==e.minItems?s.push(`Pelo menos ${e.minItems}' Itens`):void 0!==e.maxItems&&s.push(`Até ${e.maxItems} Itens`),void 0!==e.minLength&&void 0!==e.maxLength?s.push(`De ${e.minLength} até ${e.maxLength} caracteres`):void 0!==e.minLength?s.push(`Pelo menos ${e.minLength}' caracteres`):void 0!==e.maxLength&&s.push(`Até ${e.maxLength} caracteres`),void 0!==e.minimum&&s.push(`${e.exclusiveMinimum?">":">="} ${e.minItems}`),void 0!==e.maximum&&s.push(`${e.exclusiveMaximum?"<":"<="} ${e.maximum}`),void 0!==e.pattern&&s.push(`/${e.pattern}/`),e.uniqueItems&&s.push("Itens Únicos"),s.length?t("span",{class:"Api-label Api-label-option"},"REGRAS",t("span",{class:"Api-label-tooltip"},s.map(e=>t("code",null,e)))):null}camelCase(e){return e.charAt(0).toUpperCase()+e.slice(1)}render(){let e=this.getRootAcessorNode();return e?this.renderPropertyList(e):t("div",null,"Entity not found: ",this.path)}static get style(){return"docs-openapi-schema,docs-openapi-schema-nested{display:block}.Api-property-spec{margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline}.Api-property-name{color:var(--api-gray1000)!important;font-size:13px;font-family:var(--font-family);font-weight:600;letter-spacing:.04em;-webkit-transition:color .2s;transition:color .2s}.Api-property-name-ancestor{color:var(--api-gray400);font-weight:400}.Api-property-name:target{color:rgb(var(--api-purple))!important}.Api-property-name:target .Api-property-name-ancestor{color:inherit}.Api-property-description{font-size:12px;color:var(--api-gray500);margin:4px 0 0 0;line-height:1.2em}.Api-property-list{margin:0;padding:0;list-style:none}.Api-property-list-item{padding:12px 0}.Api-property-list-item:not(:first-child){border-top:1px solid var(--api-gray100)}.Api-label{position:relative;font-size:12px;font-weight:500;margin-left:6px}.Api-label-optional{color:var(--api-gray300)}.Api-label-required{color:rgb(var(--api-orange));font-weight:700}.Api-label-type{color:rgb(var(--api-gray400));font-weight:500}.Api-label-option{font-size:10px;border-bottom:1px dotted var(--api-gray300);font-weight:600;color:rgb(var(--api-purple));cursor:pointer}.Api-label-tooltip{display:none;position:absolute;bottom:calc(100% + 8px);left:50%;-webkit-transform:translateX(calc(-50%));transform:translateX(calc(-50%));padding:1em;background:#fff;border-radius:4px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.1),0 2px 6px rgba(0,0,0,.05);box-shadow:0 2px 4px rgba(0,0,0,.1),0 2px 6px rgba(0,0,0,.05);max-width:200px;word-break:break-word;width:-webkit-max-content;width:-moz-max-content;width:max-content;line-height:1.3em}.Api-label-tooltip>code{white-space:pre;color:rgb(var(--api-purple));background-color:rgba(var(--api-purple),.1);margin:2px;display:inline-block}.Api-label:hover>.Api-label-tooltip{display:block}.Api-flex-grow{-ms-flex:auto 1 0px;flex:auto 1 0}"}};export{a as docs_openapi_schema};