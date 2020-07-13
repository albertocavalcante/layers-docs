System.register(["./p-556912ca.system.js","./p-06e5dae9.system.js"],(function(e){"use strict";var t,n,i,s,r;return{setters:[function(e){t=e.r;n=e.h},function(e){i=e.g;s=e.n;r=e.b}],execute:function(){var a=e("docs_openapi_schema",function(){function e(e){t(this,e);this.hideReadOnly=false;this.hideWriteOnly=false;this.includeRootName=false}e.prototype.getRootAcessorNode=function(){if(this.node){return this.node}var e=i(this.spec,this.path);if(!e){return null}return{schema:e,name:this.path.split("/").pop()}};e.prototype.renderProperty=function(e){if(!e.schema){return null}if(this.hideReadOnly&&e.schema.readOnly){return null}if(this.hideWriteOnly&&e.schema.writeOnly){return null}var t=r(e);var i=(this.includeRootName?t:t.slice(1)).join(".");var s=t.join(".")+"."+e.name;var a=this.hasProperties(e);return n("li",{class:"Api-property-list-item",key:s},n("h3",{class:"Api-property-spec"},n("a",{class:"Api-property-name",href:"#"+s,id:s},i?n("span",{class:"Api-property-name-ancestor"},i,"."):null,e.name),n("span",{class:"Api-flex-grow"}),this.buildObjectTypeLabel(e),this.buildDefaultLabel(e),this.buildEnumLabel(e),this.buildConstraintsLabel(e),this.buildIsRequiredLabel(e)),e.schema.description&&n("p",{class:"Api-property-description"},e.schema.description),a&&n("docs-openapi-schema-nested",{node:e,spec:this.spec}))};e.prototype.renderPropertyList=function(e){var t=this;var i=s(this.spec,e.schema);if(!i){return null}if(i.type=="object"){var r=Object.entries(i.properties).map((function(n){var i=n[0],r=n[1];return t.renderProperty({name:i,parent:e,schema:s(t.spec,r)})}));return n("ul",{class:"Api-property-list",key:e.name},r)}};e.prototype.buildIsRequiredLabel=function(e){var t,i,s;var r=(s=(i=(t=e.parent)===null||t===void 0?void 0:t.schema.required)===null||i===void 0?void 0:i.includes(e.name),s!==null&&s!==void 0?s:false);if(r){return n("span",{class:"Api-label Api-label-required"},"obrigatório")}};e.prototype.hasProperties=function(e){if(e.schema.type=="array"){return this.hasProperties({name:"[]",schema:s(this.spec,e.schema.items)})}if(e.schema.type=="object"){return true}return false};e.prototype.buildEnumLabel=function(e){var t=e.schema.enum;if(!t){return null}return n("span",{class:"Api-label Api-label-option"},n("span",{class:"Api-label-tooltip"},t.map((function(e){return n("code",null,e)}))),"ENUM")};e.prototype.buildObjectTypeLabel=function(e,t){var i,r;var a=e.schema,l=a.type,u=a.nullable,p=a.title,o=a.items,c=a.externalDocs,m=a.format;var d=this.camelCase((i=m!==null&&m!==void 0?m:l,i!==null&&i!==void 0?i:""));if(l=="object"&&p){d=p||d}if(l=="array"){var h={name:"[]",schema:s(this.spec,o),parent:e};return this.buildObjectTypeLabel(h,"[ ]")}d+=(u?"?":"")+(t!==null&&t!==void 0?t:"");if(l=="object"&&((r=c)===null||r===void 0?void 0:r.url)){d=n("stencil-route-link",{url:c.url},d)}return n("span",{class:"Api-label Api-label-type"},d)};e.prototype.buildDefaultLabel=function(e){var t=e.schema.default;if(t===undefined){return null}return n("span",{class:"Api-label Api-label-option"},"DEFAULT",n("span",{class:"Api-label-tooltip"},n("code",null,String(t))))};e.prototype.buildConstraintsLabel=function(e){var t=e.schema;var i=[];if(t.minItems!==undefined&&t.maxItems!==undefined)i.push("De "+t.minItems+" até "+t.maxItems+" Itens");else if(t.minItems!==undefined)i.push("Pelo menos "+t.minItems+"' Itens");else if(t.maxItems!==undefined)i.push("Até "+t.maxItems+" Itens");if(t.minLength!==undefined&&t.maxLength!==undefined)i.push("De "+t.minLength+" até "+t.maxLength+" caracteres");else if(t.minLength!==undefined)i.push("Pelo menos "+t.minLength+"' caracteres");else if(t.maxLength!==undefined)i.push("Até "+t.maxLength+" caracteres");if(t.minimum!==undefined)i.push((t.exclusiveMinimum?">":">=")+" "+t.minItems);if(t.maximum!==undefined)i.push((t.exclusiveMaximum?"<":"<=")+" "+t.maximum);if(t.pattern!==undefined)i.push("/"+t.pattern+"/");if(t.uniqueItems)i.push("Itens Únicos");if(!i.length)return null;return n("span",{class:"Api-label Api-label-option"},"REGRAS",n("span",{class:"Api-label-tooltip"},i.map((function(e){return n("code",null,e)}))))};e.prototype.camelCase=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};e.prototype.render=function(){var e=this.getRootAcessorNode();if(!e){return n("div",null,"Entity not found: ",this.path)}return this.renderPropertyList(e)};Object.defineProperty(e,"style",{get:function(){return"docs-openapi-schema,docs-openapi-schema-nested{display:block}.Api-property-spec{margin:0;padding:0;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:baseline;align-items:baseline}.Api-property-name{color:var(--api-gray1000)!important;font-size:13px;font-family:var(--font-family);font-weight:600;letter-spacing:.04em;-webkit-transition:color .2s;transition:color .2s}.Api-property-name-ancestor{color:var(--api-gray400);font-weight:400}.Api-property-name:target{color:rgb(var(--api-purple))!important}.Api-property-name:target .Api-property-name-ancestor{color:inherit}.Api-property-description{font-size:12px;color:var(--api-gray500);margin:4px 0 0 0;line-height:1.2em}.Api-property-list{margin:0;padding:0;list-style:none}.Api-property-list-item{padding:12px 0}.Api-property-list-item:not(:first-child){border-top:1px solid var(--api-gray100)}.Api-label{position:relative;font-size:12px;font-weight:500;margin-left:6px}.Api-label-optional{color:var(--api-gray300)}.Api-label-required{color:rgb(var(--api-orange));font-weight:700}.Api-label-type{color:rgb(var(--api-gray400));font-weight:500}.Api-label-option{font-size:10px;border-bottom:1px dotted var(--api-gray300);font-weight:600;color:rgb(var(--api-purple));cursor:pointer}.Api-label-tooltip{display:none;position:absolute;bottom:calc(100% + 8px);left:50%;-webkit-transform:translateX(calc(-50%));transform:translateX(calc(-50%));padding:1em;background:#fff;border-radius:4px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.1),0 2px 6px rgba(0,0,0,.05);box-shadow:0 2px 4px rgba(0,0,0,.1),0 2px 6px rgba(0,0,0,.05);max-width:200px;word-break:break-word;width:-webkit-max-content;width:-moz-max-content;width:max-content;line-height:1.3em}.Api-label-tooltip>code{white-space:pre;color:rgb(var(--api-purple));background-color:rgba(var(--api-purple),.1);margin:2px;display:inline-block}.Api-label:hover>.Api-label-tooltip{display:block}.Api-flex-grow{-ms-flex:auto 1 0px;flex:auto 1 0}"},enumerable:true,configurable:true});return e}())}}}));