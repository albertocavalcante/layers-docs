import{r as t,e,k as s,h as i,H as n,c as h}from"./p-ce7c30ce.js";import{h as r}from"./p-984ee37a.js";import{f as a,r as o}from"./p-cb0e2acd.js";import"./p-ac24a1dc.js";import{f as l,g as c,h as d}from"./p-50d3de53.js";const u=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find(e=>e.value===t.value)},p=class{constructor(s){t(this,s),this.inputId=`ion-sel-${C++}`,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,e,s)=>{if("undefined"==typeof MutationObserver)return;const i=new MutationObserver(t=>{s(((t,e)=>{let s;t.forEach(t=>{for(let i=0;i<t.addedNodes.length;i++)s=u(t.addedNodes[i],e)||s})})(t,"ion-select-option"))});return i.observe(t,{childList:!0,subtree:!0}),i})(this.el,0,async()=>{this.updateOverlayOptions()})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts,s=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,s);break;case"popover":const i=t.querySelector("ion-select-popover");i&&(i.options=this.createPopoverOptions(e,s));break;case"alert":t.inputs=this.createAlertInputs(e,this.multiple?"checkbox":"radio",s)}}createActionSheetButtons(t,e){const s=t.map(t=>{const s=v(t);return{role:b(s,e,this.compareWith)?"selected":"",text:t.textContent,handler:()=>{this.value=s}}});return s.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),s}createAlertInputs(t,e,s){return t.map(t=>{const i=v(t);return{type:e,label:t.textContent||"",value:i,checked:b(i,s,this.compareWith),disabled:t.disabled}})}createPopoverOptions(t,e){return t.map(t=>{const s=v(t);return{text:t.textContent||"",value:s,checked:b(s,e,this.compareWith),disabled:t.disabled,handler:()=>{this.value=s,this.close()}}})}async openPopover(t){const e=this.interfaceOptions,i=s(this),n=this.value,h=Object.assign(Object.assign({mode:i},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:n,options:this.createPopoverOptions(this.childOpts,n)}});return l.create(h)}async openActionSheet(){const t=s(this),e=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return c.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,n=this.multiple?"checkbox":"radio",h=s(this),r=Object.assign(Object.assign({mode:h},i),{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,n,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return d.create(r)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return a(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:f(this.childOpts,this.value,this.compareWith)}setFocus(){this.buttonEl&&this.buttonEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{placeholder:t,name:e,disabled:h,isExpanded:l,value:c,el:d}=this,u=s(this),p=this.inputId+"-lbl",b=a(d);b&&(b.id=p);let v=!1,y=this.getText();""===y&&null!=t&&(y=t,v=!0),o(!0,d,e,m(c),h);const f={"select-text":!0,"select-placeholder":v},g=v?"placeholder":"text";return i(n,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":h?"true":null,"aria-expanded":`${l}`,"aria-labelledby":p,class:{[u]:!0,"in-item":r("ion-item",d),"select-disabled":h}},i("div",{class:f,part:g},y),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:h,ref:t=>this.buttonEl=t}))}get el(){return h(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}static get style(){return":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}"}},b=(t,e,s)=>void 0!==t&&(Array.isArray(t)?t.some(t=>y(t,e,s)):y(t,e,s)),v=t=>{const e=t.value;return void 0===e?t.textContent||"":e},m=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},y=(t,e,s)=>"function"==typeof s?s(t,e):"string"==typeof s?t[s]===e[s]:Array.isArray(e)?e.includes(t):t===e,f=(t,e,s)=>void 0===e?"":Array.isArray(e)?e.map(e=>g(t,e,s)).filter(t=>null!==t).join(", "):g(t,e,s)||"",g=(t,e,s)=>{const i=t.find(t=>y(v(t),e,s));return i?i.textContent:null};let C=0;export{p as ion_select};