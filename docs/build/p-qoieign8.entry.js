import{r as t,h as e}from"./p-ce7c30ce.js";const r=class{constructor(r){t(this,r),this.toItem=t=>{const r=this.keys,{Head:n}=r,c=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(t);c<n.length;c++)e.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(t,n[c])&&(r[n[c]]=t[n[c]])}return r}(r,["Head"]);return[e("thead",null,e("tr",null,e("th",{colSpan:2},e("h3",null,n(t))))),e("tbody",null,Object.keys(c).map(r=>{const n=c[r](t);if(n)return e("tr",null,e("th",null,r),e("td",null,n))}))]}}render(){return e("table",null,this.data.map(this.toItem))}static get style(){return"docs-reference{display:block;margin:1rem 0}docs-reference h3{font-family:var(--code-font-family);font-size:1.25rem;margin:2rem 0 1rem;padding:0}docs-reference a{font-weight:inherit}docs-reference a:before{display:none}docs-reference thead tr{background-color:var(--offset-background)}docs-reference tbody tr{background-color:#fff!important}docs-reference tbody th{vertical-align:top}docs-reference tbody p{line-height:2}docs-reference p:first-child{margin-top:0}docs-reference p:last-child{margin-bottom:0}"}};export{r as docs_reference};