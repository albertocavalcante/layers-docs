import{r,h as s}from"./p-72181234.js";const a=class{constructor(s){r(this,s)}render(){return s("div",null,s("h3",null,"Parâmetros"),s("ul",{class:"parameters-container"},this.parameters.map(r=>r.name?s("li",{class:"parameter"},s("div",{class:"column-grow"},s("div",{class:"row-grow"},s("div",{class:"row parameter-name"},r.name),s("div",{class:"row"},"(",r.in,")"),r.required?s("div",{class:"row parameter-label-required"},"obrigatório"):null),s("div",{class:"row-grow parameter-description"},r.description))):null)))}static get style(){return"docs-openapi-parameters{display:block;font-family:var(--font-family)}.parameters-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:0}.parameter{list-style:none;margin:2px;border-bottom:1px solid var(--api-gray100)}.column-grow{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:column;flex-direction:column}.column{display:inline}.row-grow{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-ms-flex-direction:row;flex-direction:row}.row{display:inline;margin-right:.3em;padding-bottom:0}.parameter-label-required{color:rgb(var(--api-orange));font-weight:700}.parameter-name{color:var(--api-gray1000);font-weight:700}.parameter-description{color:var(--api-gray500)}"}};export{a as docs_openapi_parameters};