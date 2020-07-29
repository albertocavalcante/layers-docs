function e(e){return e&&e.hasOwnProperty("$ref")}function t(r,n){if(n.startsWith("#/")){let u,i=n.replace("#/","").split("/"),a=i[i.length-1],l=r;for(;u=i.shift();){if(!(l&&u in l))return;l=l[u]}return e(l)?Object.assign({title:a},t(r,l.$ref)):Object.assign({title:a},l)}throw new Error("unsuporte path reference: "+n)}function r(r,n){if(n)return e(n)?t(r,n.$ref):n}function n(e,t=!1){let r=t?[e.name]:[];for(;e=e.parent;)r.unshift(e.name);return r}const u=new WeakMap;function i(e,t){if(!t)return{};if(u.has(t))return u.get(t);let n=r(e,t);return n?(n.allOf&&(n=n.allOf.reduce((t,n)=>{n.hasOwnProperty("$ref")&&(n=r(e,n));const u=Object.assign({},t.properties,n.properties),a=t.required+n.required,l=Object.assign(t,i(e,n));return l.properties=u,l.required=a,l},{})),function t(n,u){try{"object"==n.type&&Object.keys(n.properties).map(a=>{switch(n.properties[a].type){case"object":u.properties[a]=t(n.properties[a],n);break;case"array":n.properties[a].items.hasOwnProperty("$ref")&&(n.properties[a].items=r(e,n.properties[a].items)),n.properties[a].items.hasOwnProperty("allOf")&&(n.properties[a].items=i(e,n.properties[a].items))}}),"array"==n.type&&(n.items.$ref&&(n.items=r(e,n.items)),n.items.allOf&&(n.items=i(e,n.items)))}catch(a){}return n}(n)):n={},u.set(t,n),n}function a(e,t,r="READ"){var n,u;let o=i(e,t.schema),f=null!=(n=o.example)?n:null===(u=o.examples)||void 0===u?void 0:u[0];if(!(o.readOnly&&"WRITE"==r||o.writeOnly&&"READ"==r)){if(Array.isArray(f))return f;if("object"==o.type){let n="object"==typeof f?Object.assign({},f):{};for(let u in o.properties)n[u]=a(e,{name:u,parent:t,schema:o.properties[u]},r);return n}return f||("array"==o.type?[a(e,{name:"[]",parent:t,schema:o.items},r)]:function({schema:e}){var t,r,n,u,i,a,o,f,c;let b;try{b=null===(t=e.type)||void 0===t?void 0:t.toLowerCase()}catch(d){console.log(e)}if(!b)return;if(e.default)return e.default;if("boolean"==b)return!0;if("number"==b)return((null!=(r=e.minimum)?r:1)+(null!=(n=e.maximum)?n:10))/2;if("integer"==b)return Math.round((null!=(u=e.minimum)?u:1)+(null!=(i=e.maximum)?i:10))/2;if("integer"==b)return Math.round((null!=(a=e.minimum)?a:1)+(null!=(o=e.maximum)?o:10))/2;let s=null===(f=e.format)||void 0===f?void 0:f.toLowerCase();return"string"==b?(null===(c=e.enum)||void 0===c?void 0:c[0])?e.enum[0]:"byte"==s?"U3RyaW5nIGV4ZW1wbG8=":"date-time"==s?l.toISOString():"date"==s?l.toISOString().split("T")[0]:"time"==s?l.toISOString().split("T")[1].replace("Z",""):"password"==s?"********":"email"==s?"luke@starwars.com":"uuid"==s?"2f985f64-5720-4562-b310-2c963f66afa6":"objectid"==s?"5bb2575199d7179dfe85be02":"exemplo":void 0}(t))}}let l=new Date;export{a,n as b,t as g,i as n};