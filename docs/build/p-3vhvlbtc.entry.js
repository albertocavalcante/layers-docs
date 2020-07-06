import{r as t,e as i,i as s,h as e,H as h,c as a}from"./p-72181234.js";import{c as o,h as c}from"./p-984ee37a.js";import{f as n,a as r}from"./p-c50237ed.js";import{d as l}from"./p-ba5ccf5c.js";const d=class{constructor(s){t(this,s),this.inputId=`ion-tg-${u++}`,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=i(this,"ionChange",7),this.ionFocus=i(this,"ionFocus",7),this.ionBlur=i(this,"ionBlur",7),this.ionStyle=i(this,"ionStyle",7)}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.gesture=(await __sc_import_app("./p-b5112729.js")).createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){g(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,l())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,disabled:i,checked:a,activated:l,color:d,el:g}=this,u=s(this),p=t+"-lbl",b=n(g),m=this.getValue();return b&&(b.id=p),r(!0,g,this.name,a?m:"",i),e(h,{onClick:this.onClick,role:"checkbox","aria-disabled":i?"true":null,"aria-checked":`${a}`,"aria-labelledby":p,class:Object.assign(Object.assign({},o(d)),{[u]:!0,"in-item":c("ion-item",g),"toggle-activated":l,"toggle-checked":a,"toggle-disabled":i,interactive:!0})},e("div",{class:"toggle-icon",part:"track"},e("div",{class:"toggle-icon-wrapper"},e("div",{class:"toggle-inner",part:"handle"}))),e("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:i,ref:t=>this.buttonEl=t,"aria-hidden":"true"}))}get el(){return a(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon,.toggle-icon-wrapper{position:relative;width:100%;height:100%}.toggle-icon{border-radius:var(--border-radius);display:block;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:var(--handle-spacing)}:host(.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)),0,0);transform:translate3d(calc(100% - var(--handle-width)),0,0)}:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper,:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)),0,0);transform:translate3d(calc(-100% + var(--handle-width)),0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2),0,0);transform:translate3d(calc(var(--handle-spacing) * -2),0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2),0,0);transform:translate3d(calc(var(--handle-spacing) * 2),0,0)}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.39);--background-checked:rgba(var(--ion-color-primary-rgb,56,128,255),0.5);--border-radius:14px;--handle-background:#fff;--handle-background-checked:var(--ion-color-primary,#3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4,0,0.2,1),background-color 160ms cubic-bezier(0.4,0,0.2,1);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb),.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{-webkit-transition:background-color .16s;transition:background-color .16s}.toggle-inner{will-change:background-color,transform}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}},g=(t,i,s,e)=>{const h="rtl"===t.dir;return i?!h&&e>s||h&&-e<s:!h&&-e<s||h&&e>s};let u=0;export{d as ion_toggle};