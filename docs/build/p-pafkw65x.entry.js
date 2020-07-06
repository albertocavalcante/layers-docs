import{r as t,e as s,l as i,w as e,k as n,h,H as o,c as a}from"./p-ce7c30ce.js";import{c as r,h as c}from"./p-984ee37a.js";import{p as l}from"./p-cb0e2acd.js";const d=class{constructor(i){t(this,i),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=t=>{const s=t.target,i=this.checked;this.value=s.value,i&&this.scrollable&&this.checkButton(i,s),this.checked=s},this.ionChange=s(this,"ionChange",7),this.ionSelect=s(this,"ionSelect",7),this.ionStyle=s(this,"ionStyle",7)}valueChanged(t,s){this.ionSelect.emit({value:t}),(""!==s||this.didInit)&&(this.activated?this.valueAfterGesture=t:this.ionChange.emit({value:t}))}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const s of t)s.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await __sc_import_app("./p-b5112729.js")).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const s=this.setNextIndex(t,!0);t.event.stopImmediatePropagation(),s&&this.addRipple(t);const i=this.valueAfterGesture;void 0!==i&&(this.ionChange.emit({value:i}),this.valueAfterGesture=void 0)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){if(!i.getBoolean("animated",!0)||!i.getBoolean("rippleEffect",!0))return;const s=this.getButtons().find(t=>t.value===this.value),e=(s.shadowRoot||s).querySelector("ion-ripple-effect");if(!e)return;const{x:n,y:h}=l(t.event);e.addRipple(n,h).then(t=>t())}setActivated(t){this.getButtons().forEach(s=>{t?s.classList.add("segment-button-activated"):s.classList.remove("segment-button-activated")}),this.activated=t}activate(t){const s=t.event.target,i=this.getButtons().find(t=>t.value===this.value);"ION-SEGMENT-BUTTON"===s.tagName&&(i||(this.value=s.value),this.value===s.value&&this.setActivated(!0))}getIndicator(t){return(t.shadowRoot||t).querySelector(".segment-button-indicator")}checkButton(t,s){const i=this.getIndicator(t),n=this.getIndicator(s);if(null===i||null===n)return;const h=i.getBoundingClientRect(),o=n.getBoundingClientRect(),a=`translate3d(${h.left-o.left}px, 0, 0) scaleX(${h.width/o.width})`;e(()=>{n.classList.remove("segment-button-indicator-animated"),n.style.setProperty("transform",a),n.getBoundingClientRect(),n.classList.add("segment-button-indicator-animated"),n.style.setProperty("transform","")}),this.value=s.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),s=t.findIndex(t=>t.value===this.value)+1;this.checked=t.find(t=>t.value===this.value);for(const i of t)i.classList.remove("segment-button-after-checked");s<t.length&&t[s].classList.add("segment-button-after-checked")}setNextIndex(t,s=!1){const i="rtl"===document.dir,e=this.activated,n=this.getButtons(),h=n.findIndex(t=>t.value===this.value),o=n[h];let a,r;if(-1===h)return;const c=o.getBoundingClientRect(),l=c.left,d=c.width,u=t.currentX,m=document.elementFromPoint(u,c.top+c.height/2);if(e&&!s){if(i?u>l+d:u<l){const t=h-1;t>=0&&(r=t)}else if((i?u<l:u>l+d)&&e&&!s){const t=h+1;t<n.length&&(r=t)}void 0===r||n[r].disabled||(a=n[r])}if(!e&&s&&(a=m),null!=a){if("ION-SEGMENT"===a.tagName)return!1;o!==a&&this.checkButton(o,a)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=n(this);return h(o,{onClick:this.onClick,class:Object.assign(Object.assign({},r(this.color)),{[t]:!0,"in-toolbar":c("ion-toolbar",this.el),"in-toolbar-color":c("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},h("slot",null))}get el(){return a(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"]}}static get style(){return":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family,inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:auto}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background,var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb),.11)}"}};export{d as ion_segment};