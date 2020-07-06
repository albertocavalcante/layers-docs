var __awaiter=this&&this.__awaiter||function(e,t,n,i){function r(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{u(i.next(e))}catch(t){o(t)}}function a(e){try{u(i["throw"](e))}catch(t){o(t)}}function u(e){e.done?n(e.value):r(e.value).then(s,a)}u((i=i.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return u([e,t])}}function u(s){if(i)throw new TypeError("Generator is already executing.");while(n)try{if(i=1,r&&(o=s[0]&2?r["return"]:s[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;if(r=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;r=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(a){s=[6,a];r=0}finally{i=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-ed7628e0.system.js","./p-65968490.system.js","./p-66045b99.system.js","./p-82eea1c5.system.js","./p-4656a75c.system.js"],(function(e){"use strict";var t,n,i,r,o,s,a,u,c,l,h,f;return{setters:[function(e){t=e.r;n=e.e;i=e.k;r=e.h;o=e.H;s=e.c},function(e){a=e.h},function(e){u=e.f;c=e.r},function(){},function(e){l=e.f;h=e.g;f=e.h}],execute:function(){var p=function(e,t,n){if(typeof MutationObserver==="undefined"){return}var i=new MutationObserver((function(e){n(d(e,t))}));i.observe(e,{childList:true,subtree:true});return i};var d=function(e,t){var n;e.forEach((function(e){for(var i=0;i<e.addedNodes.length;i++){n=v(e.addedNodes[i],t)||n}}));return n};var v=function(e,t){if(e.nodeType!==1){return undefined}var n=e.tagName===t.toUpperCase()?[e]:Array.from(e.querySelectorAll(t));return n.find((function(t){return t.value===e.value}))};var y=e("ion_select",function(){function e(e){var i=this;t(this,e);this.inputId="ion-sel-"+C++;this.didInit=false;this.isExpanded=false;this.disabled=false;this.cancelText="Cancel";this.okText="OK";this.name=this.inputId;this.multiple=false;this.interface="alert";this.interfaceOptions={};this.onClick=function(e){i.setFocus();i.open(e)};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()};this.ionChange=n(this,"ionChange",7);this.ionCancel=n(this,"ionCancel",7);this.ionFocus=n(this,"ionFocus",7);this.ionBlur=n(this,"ionBlur",7);this.ionStyle=n(this,"ionStyle",7)}e.prototype.disabledChanged=function(){this.emitStyle()};e.prototype.valueChanged=function(){this.emitStyle();if(this.didInit){this.ionChange.emit({value:this.value})}};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.updateOverlayOptions();this.emitStyle();this.mutationO=p(this.el,"ion-select-option",(function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){this.updateOverlayOptions();return[2]}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){if(this.mutationO){this.mutationO.disconnect();this.mutationO=undefined}};e.prototype.componentDidLoad=function(){this.didInit=true};e.prototype.open=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;var i=this;return __generator(this,(function(r){switch(r.label){case 0:if(this.disabled||this.isExpanded){return[2,undefined]}n=this;return[4,this.createOverlay(e)];case 1:t=n.overlay=r.sent();this.isExpanded=true;t.onDidDismiss().then((function(){i.overlay=undefined;i.isExpanded=false;i.setFocus()}));return[4,t.present()];case 2:r.sent();return[2,t]}}))}))};e.prototype.createOverlay=function(e){var t=this.interface;if((t==="action-sheet"||t==="popover")&&this.multiple){console.warn('Select interface cannot be "'+t+'" with a multi-value select. Using the "alert" interface instead.');t="alert"}if(t==="popover"&&!e){console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');t="alert"}if(t==="popover"){return this.openPopover(e)}if(t==="action-sheet"){return this.openActionSheet()}return this.openAlert()};e.prototype.updateOverlayOptions=function(){var e=this.overlay;if(!e){return}var t=this.childOpts;var n=this.value;switch(this.interface){case"action-sheet":e.buttons=this.createActionSheetButtons(t,n);break;case"popover":var i=e.querySelector("ion-select-popover");if(i){i.options=this.createPopoverOptions(t,n)}break;case"alert":var r=this.multiple?"checkbox":"radio";e.inputs=this.createAlertInputs(t,r,n);break}};e.prototype.createActionSheetButtons=function(e,t){var n=this;var i=e.map((function(e){var i=m(e);return{role:b(i,t,n.compareWith)?"selected":"",text:e.textContent,handler:function(){n.value=i}}}));i.push({text:this.cancelText,role:"cancel",handler:function(){n.ionCancel.emit()}});return i};e.prototype.createAlertInputs=function(e,t,n){var i=this;return e.map((function(e){var r=m(e);return{type:t,label:e.textContent||"",value:r,checked:b(r,n,i.compareWith),disabled:e.disabled}}))};e.prototype.createPopoverOptions=function(e,t){var n=this;return e.map((function(e){var i=m(e);return{text:e.textContent||"",value:i,checked:b(i,t,n.compareWith),disabled:e.disabled,handler:function(){n.value=i;n.close()}}}))};e.prototype.openPopover=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r,o;return __generator(this,(function(s){t=this.interfaceOptions;n=i(this);r=this.value;o=Object.assign(Object.assign({mode:n},t),{component:"ion-select-popover",cssClass:["select-popover",t.cssClass],event:e,componentProps:{header:t.header,subHeader:t.subHeader,message:t.message,value:r,options:this.createPopoverOptions(this.childOpts,r)}});return[2,l.create(o)]}))}))};e.prototype.openActionSheet=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){e=i(this);t=this.interfaceOptions;n=Object.assign(Object.assign({mode:e},t),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",t.cssClass]});return[2,h.create(n)]}))}))};e.prototype.openAlert=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n,r,o,s;var a=this;return __generator(this,(function(u){e=this.getLabel();t=e?e.textContent:null;n=this.interfaceOptions;r=this.multiple?"checkbox":"radio";o=i(this);s=Object.assign(Object.assign({mode:o},n),{header:n.header?n.header:t,inputs:this.createAlertInputs(this.childOpts,r,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function(){a.ionCancel.emit()}},{text:this.okText,handler:function(e){a.value=e}}],cssClass:["select-alert",n.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return[2,f.create(s)]}))}))};e.prototype.close=function(){if(!this.overlay){return Promise.resolve(false)}return this.overlay.dismiss()};e.prototype.getLabel=function(){return u(this.el)};e.prototype.hasValue=function(){return this.getText()!==""};Object.defineProperty(e.prototype,"childOpts",{get:function(){return Array.from(this.el.querySelectorAll("ion-select-option"))},enumerable:true,configurable:true});e.prototype.getText=function(){var e=this.selectedText;if(e!=null&&e!==""){return e}return x(this.childOpts,this.value,this.compareWith)};e.prototype.setFocus=function(){if(this.buttonEl){this.buttonEl.focus()}};e.prototype.emitStyle=function(){this.ionStyle.emit({interactive:true,select:true,"has-placeholder":this.placeholder!=null,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})};e.prototype.render=function(){var e;var t=this;var n=this,s=n.placeholder,l=n.name,h=n.disabled,f=n.isExpanded,p=n.value,d=n.el;var v=i(this);var y=this.inputId+"-lbl";var b=u(d);if(b){b.id=y}var m=false;var O=this.getText();if(O===""&&s!=null){O=s;m=true}c(true,d,l,g(p),h);var x={"select-text":true,"select-placeholder":m};var _=m?"placeholder":"text";return r(o,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":h?"true":null,"aria-expanded":""+f,"aria-labelledby":y,class:(e={},e[v]=true,e["in-item"]=a("ion-item",d),e["select-disabled"]=h,e)},r("div",{class:x,part:_},O),r("div",{class:"select-icon",role:"presentation",part:"icon"},r("div",{class:"select-icon-inner"})),r("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:h,ref:function(e){return t.buttonEl=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}"},enumerable:true,configurable:true});return e}());var b=function(e,t,n){if(e===undefined){return false}if(Array.isArray(e)){return e.some((function(e){return O(e,t,n)}))}else{return O(e,t,n)}};var m=function(e){var t=e.value;return t===undefined?e.textContent||"":t};var g=function(e){if(e==null){return undefined}if(Array.isArray(e)){return e.join(",")}return e.toString()};var O=function(e,t,n){if(typeof n==="function"){return n(e,t)}else if(typeof n==="string"){return e[n]===t[n]}else{return Array.isArray(t)?t.includes(e):e===t}};var x=function(e,t,n){if(t===undefined){return""}if(Array.isArray(t)){return t.map((function(t){return _(e,t,n)})).filter((function(e){return e!==null})).join(", ")}else{return _(e,t,n)||""}};var _=function(e,t,n){var i=e.find((function(e){return O(m(e),t,n)}));return i?i.textContent:null};var C=0}}}));