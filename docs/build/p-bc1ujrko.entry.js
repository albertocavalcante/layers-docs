import{r as t,e as i,i as s,h as e,H as h,c as a}from"./p-72181234.js";import{c as o,h as c}from"./p-984ee37a.js";import{f as n,a as r}from"./p-c50237ed.js";import{d as l}from"./p-ba5ccf5c.js";const d=class{constructor(s){t(this,s),this.inputId=`ion-tg-${u++}`,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.lastDrag+300<Date.now()&&(this.checked=!this.checked)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=i(this,"ionChange",7),this.ionFocus=i(this,"ionFocus",7),this.ionBlur=i(this,"ionBlur",7),this.ionStyle=i(this,"ionStyle",7)}checkedChanged(t){this.ionChange.emit({checked:t,value:this.value})}disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}async connectedCallback(){this.gesture=(await __sc_import_app("./p-b5112729.js")).createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.disabledChanged()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}onStart(){this.activated=!0,this.setFocus()}onMove(t){g(document,this.checked,t.deltaX,-10)&&(this.checked=!this.checked,l())}onEnd(t){this.activated=!1,this.lastDrag=Date.now(),t.event.preventDefault(),t.event.stopImmediatePropagation()}getValue(){return this.value||""}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:t,disabled:i,checked:a,activated:l,color:d,el:g}=this,u=s(this),p=t+"-lbl",b=n(g),m=this.getValue();return b&&(b.id=p),r(!0,g,this.name,a?m:"",i),e(h,{onClick:this.onClick,role:"checkbox","aria-disabled":i?"true":null,"aria-checked":`${a}`,"aria-labelledby":p,class:Object.assign(Object.assign({},o(d)),{[u]:!0,"in-item":c("ion-item",g),"toggle-activated":l,"toggle-checked":a,"toggle-disabled":i,interactive:!0})},e("div",{class:"toggle-icon",part:"track"},e("div",{class:"toggle-icon-wrapper"},e("div",{class:"toggle-inner",part:"handle"}))),e("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:i,ref:t=>this.buttonEl=t,"aria-hidden":"true"}))}get el(){return a(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon,.toggle-icon-wrapper{position:relative;width:100%;height:100%}.toggle-icon{border-radius:var(--border-radius);display:block;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host-context([dir=rtl]) .toggle-inner,[dir=rtl] .toggle-inner{left:unset;right:unset;right:var(--handle-spacing)}:host(.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)),0,0);transform:translate3d(calc(100% - var(--handle-width)),0,0)}:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper,:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)),0,0);transform:translate3d(calc(-100% + var(--handle-width)),0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2),0,0);transform:translate3d(calc(var(--handle-spacing) * -2),0,0);background:var(--handle-background-checked)}:host-context([dir=rtl]).toggle-checked .toggle-inner,:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2),0,0);transform:translate3d(calc(var(--handle-spacing) * 2),0,0)}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.088);--background-checked:var(--ion-color-primary,#3880ff);--border-radius:16px;--handle-background:#fff;--handle-background-checked:#fff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0,0,0,0.16),0 3px 1px rgba(0,0,0,0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - (var(--handle-spacing) * 2));--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;width:51px;height:32px;contain:strict;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:background-color .3s;transition:background-color .3s}.toggle-inner{will-change:transform}:host(.toggle-activated) .toggle-icon:before,:host(.toggle-activated.toggle-checked) .toggle-inner:before,:host(.toggle-checked) .toggle-icon:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px),0,0);transform:translate3d(calc(100% - var(--handle-width) - 6px),0,0)}:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-icon-wrapper,:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px),0,0);transform:translate3d(calc(-100% + var(--handle-width) + 6px),0,0)}:host(.toggle-disabled){opacity:.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}"}},g=(t,i,s,e)=>{const h="rtl"===t.dir;return i?!h&&e>s||h&&-e<s:!h&&-e<s||h&&e>s};let u=0;export{d as ion_toggle};