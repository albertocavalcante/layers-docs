import{r as o,e as t,i,h as e,H as s,c as r}from"./p-72181234.js";import"./p-ac24a1dc.js";import{B as p,p as n,a,d as c,e as l}from"./p-ebb13fe7.js";import{g as v}from"./p-984ee37a.js";import"./p-c50237ed.js";import{c as h}from"./p-81eeb5e4.js";import{a as d,d as m}from"./p-02af2d69.js";import{d as b}from"./p-eab030d6.js";const f=(o,t)=>{let i="top",e="left";const s=o.querySelector(".popover-content"),r=s.getBoundingClientRect(),p=r.width,n=r.height,a=o.ownerDocument.defaultView.innerWidth,c=o.ownerDocument.defaultView.innerHeight,l=t&&t.target&&t.target.getBoundingClientRect(),v=null!=l&&"top"in l?l.top:c/2-n/2,d=null!=l&&"left"in l?l.left:a/2,m=l&&l.width||0,b=l&&l.height||0,f=o.querySelector(".popover-arrow"),D=f.getBoundingClientRect(),P=D.width,w=D.height;null==l&&(f.style.display="none");const y={top:v+b,left:d+m/2-P/2},x={top:v+b+(w-1),left:d+m/2-p/2};let j=!1,k=!1;x.left<u+25?(j=!0,x.left=u):p+u+x.left+25>a&&(k=!0,x.left=a-p-u,e="right"),v+b+n>c&&v-n>0?(y.top=v-(w+1),x.top=v-n-(w-1),o.className=o.className+" popover-bottom",i="bottom"):v+b+n>c&&(s.style.bottom=u+"%"),f.style.top=y.top+"px",f.style.left=y.left+"px",s.style.top=x.top+"px",s.style.left=x.left+"px",j&&(s.style.left=`calc(${x.left}px + var(--ion-safe-area-left, 0px))`),k&&(s.style.left=`calc(${x.left}px - var(--ion-safe-area-right, 0px))`),s.style.transformOrigin=i+" "+e;const W=h(),E=h(),g=h();return E.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),g.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),W.addElement(o).easing("ease").duration(100).addAnimation([E,g])},u=5,D=o=>{const t=h(),i=h(),e=h();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(o).easing("ease").duration(500).addAnimation([i,e])},P=(o,t)=>{const i=o.ownerDocument,e="rtl"===i.dir;let s="top",r=e?"right":"left";const p=o.querySelector(".popover-content"),n=p.getBoundingClientRect(),a=n.width,c=n.height,l=i.defaultView.innerWidth,v=i.defaultView.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),m=null!=d&&"bottom"in d?d.bottom:v/2-c/2,b=d&&d.height||0,f={top:m,left:null!=d&&"left"in d?e?d.left-a+d.width:d.left:l/2-a/2};f.left<12?(f.left=12,r="left"):a+12+f.left>l&&(f.left=l-a-12,r="right"),m+b+c>v&&m-c>0?(f.top=m-c-b,o.className=o.className+" popover-bottom",s="bottom"):m+b+c>v&&(p.style.bottom="12px");const u=h(),D=h(),P=h(),w=h(),y=h();return D.addElement(o.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),P.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),w.addElement(p).beforeStyles({top:`${f.top}px`,left:`${f.left}px`,"transform-origin":`${s} ${r}`}).fromTo("transform","scale(0.001)","scale(1)"),y.addElement(o.querySelector(".popover-viewport")).fromTo("opacity",.01,1),u.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).addAnimation([D,P,w,y])},w=o=>{const t=h(),i=h(),e=h();return i.addElement(o.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(o.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),t.addElement(o).easing("ease").duration(500).addAnimation([i,e])},y=class{constructor(i){o(this,i),this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=o=>{o.stopPropagation(),o.preventDefault(),this.dismiss()},this.onBackdropTap=()=>{this.dismiss(void 0,p)},this.onLifecycle=o=>{const t=this.usersElement,i=x[o.type];if(t&&i){const e=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:o.detail});t.dispatchEvent(e)}},n(this.el),this.didPresent=t(this,"ionPopoverDidPresent",7),this.willPresent=t(this,"ionPopoverWillPresent",7),this.willDismiss=t(this,"ionPopoverWillDismiss",7),this.didDismiss=t(this,"ionPopoverDidDismiss",7)}async present(){if(this.presented)return;const o=this.el.querySelector(".popover-content");if(!o)throw new Error("container is undefined");const t=Object.assign(Object.assign({},this.componentProps),{popover:this.el});return this.usersElement=await d(this.delegate,o,this.component,["popover-viewport",this.el["s-sc"]],t),await b(this.usersElement),a(this,"popoverEnter",f,P,this.event)}async dismiss(o,t){const i=await c(this,o,t,"popoverLeave",D,w,this.event);return i&&await m(this.delegate,this.usersElement),i}onDidDismiss(){return l(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return l(this.el,"ionPopoverWillDismiss")}render(){const o=i(this),{onLifecycle:t}=this;return e(s,{"aria-modal":"true","no-router":!0,tabindex:"-1",style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign(Object.assign({},v(this.cssClass)),{[o]:!0,"popover-translucent":this.translucent}),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},e("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),e("div",{class:"popover-wrapper"},e("div",{class:"popover-arrow"}),e("div",{class:"popover-content"})))}get el(){return r(this)}static get style(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color,#000);z-index:1001}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity,0.08)}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}"}},x={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};export{y as ion_popover};