import{r as t,h as r}from"./p-72181234.js";const e=class{constructor(e){t(this,e),this.toItem=t=>{const e=this.keys,{Head:n}=e,l=function(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(t);l<n.length;l++)r.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(e[n[l]]=t[n[l]])}return e}(e,["Head"]);return[r("thead",null,r("tr",null,r("th",{colSpan:2},r("h3",null,n(t))))),r("tbody",null,Object.keys(l).map(e=>{const n=l[e](t);if(n)return r("tr",null,r("th",null,e),r("td",null,n))}))]}}render(){return r("table",null,this.data.map(this.toItem))}static get style(){return"docs-reference{display:block;margin:1rem 0}docs-reference h3{font-family:var(--code-font-family);font-size:1.25rem;margin:2rem 0 1rem;padding:0}docs-reference a{font-weight:inherit}docs-reference a:before{display:none}docs-reference thead tr{background-color:var(--offset-background)}docs-reference tbody tr{background-color:#fff!important}docs-reference tbody th{vertical-align:top}docs-reference tbody p{line-height:2}docs-reference p:first-child{margin-top:0}docs-reference p:last-child{margin-bottom:0}"}};export{e as docs_reference};