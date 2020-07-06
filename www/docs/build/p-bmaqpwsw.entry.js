import{r as i,e as s,i as t,j as o,h as a,H as e,c as n}from"./p-72181234.js";import"./p-ac24a1dc.js";import{B as r,p,a as c,d,e as l}from"./p-ebb13fe7.js";import{g as h}from"./p-984ee37a.js";import"./p-c50237ed.js";import{c as m}from"./p-81eeb5e4.js";import{s as f}from"./p-e1817168.js";const g=i=>{const s=m(),t=m(),o=m();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),s.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},u=i=>{const s=m(),t=m(),o=m();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),s.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},y=i=>{const s=m(),t=m(),o=m();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),s.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},b=i=>{const s=m(),t=m(),o=m();return t.addElement(i.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(i.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),s.addElement(i).easing("ease-in-out").duration(200).addAnimation([t,o])},v=class{constructor(t){i(this,t),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,r)},p(this.el),this.didPresent=s(this,"ionLoadingDidPresent",7),this.willPresent=s(this,"ionLoadingWillPresent",7),this.willDismiss=s(this,"ionLoadingWillDismiss",7),this.didDismiss=s(this,"ionLoadingDidDismiss",7)}componentWillLoad(){if(void 0===this.spinner){const i=t(this);this.spinner=o.get("loadingSpinner",o.get("spinner","ios"===i?"lines":"crescent"))}}async present(){await c(this,"loadingEnter",g,y,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(i,s){return this.durationTimeout&&clearTimeout(this.durationTimeout),d(this,i,s,"loadingLeave",u,b)}onDidDismiss(){return l(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return l(this.el,"ionLoadingWillDismiss")}render(){const{message:i,spinner:s}=this,o=t(this);return a(e,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign(Object.assign({},h(this.cssClass)),{[o]:!0,"loading-translucent":this.translucent})},a("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),a("div",{class:"loading-wrapper",role:"dialog"},s&&a("div",{class:"loading-spinner"},a("ion-spinner",{name:s,"aria-hidden":"true"})),i&&a("div",{class:"loading-content",innerHTML:f(i)})))}get el(){return n(this)}static get style(){return".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);--backdrop-opacity:var(--ion-backdrop-opacity,0.32);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}};export{v as ion_loading};