var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function s(t){try{u(r.next(t))}catch(e){a(e)}}function o(t){try{u(r["throw"](t))}catch(e){a(e)}}function u(t){t.done?n(t.value):i(t.value).then(s,o)}u((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(e){return u([t,e])}}function u(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=s[0]&2?i["return"]:s[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;if(i=0,a)s=[s[0]&2,a.value];switch(s[0]){case 0:case 1:a=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(s[0]===6&&n.label<a[1]){n.label=a[1];a=s;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(s);break}if(a[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(o){s=[6,o];i=0}finally{r=a=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-ed7628e0.system.js","./p-65968490.system.js","./p-66045b99.system.js","./p-82eea1c5.system.js","./p-4656a75c.system.js","./p-fd7adb5b.system.js","./p-a18a19c7.system.js"],(function(t){"use strict";var e,n,r,i,a,s,o,u,c,l,d,f,p,h,v,m;return{setters:[function(t){e=t.r;n=t.e;r=t.k;i=t.h;a=t.H;s=t.c},function(t){o=t.g;u=t.c},function(){},function(){},function(t){c=t.i;l=t.p;d=t.a;f=t.d;p=t.e;h=t.s},function(t){v=t.s},function(t){m=t.c}],execute:function(){var b=function(t,e){var n=m();var r=m();var i=t.host||t;var a=t.querySelector(".toast-wrapper");var s="calc(-10px - var(--ion-safe-area-bottom, 0px))";var o="calc(10px + var(--ion-safe-area-top, 0px))";r.addElement(a);switch(e){case"top":r.fromTo("transform","translateY(-100%)","translateY("+o+")");break;case"middle":var u=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=u+"px";r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY("+s+")");break}return n.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)};var y=function(t,e){var n=m();var r=m();var i=t.host||t;var a=t.querySelector(".toast-wrapper");var s="calc(-10px - var(--ion-safe-area-bottom, 0px))";var o="calc(10px + var(--ion-safe-area-top, 0px))";r.addElement(a);switch(e){case"top":r.fromTo("transform","translateY("+o+")","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY("+s+")","translateY(100%)");break}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)};var g=function(t,e){var n=m();var r=m();var i=t.host||t;var a=t.querySelector(".toast-wrapper");var s="calc(8px + var(--ion-safe-area-bottom, 0px))";var o="calc(8px + var(--ion-safe-area-top, 0px))";r.addElement(a);switch(e){case"top":a.style.top=o;r.fromTo("opacity",.01,1);break;case"middle":var u=Math.floor(i.clientHeight/2-a.clientHeight/2);a.style.top=u+"px";r.fromTo("opacity",.01,1);break;default:a.style.bottom=s;r.fromTo("opacity",.01,1);break}return n.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)};var w=function(t){var e=m();var n=m();var r=t.host||t;var i=t.querySelector(".toast-wrapper");n.addElement(i).fromTo("opacity",.99,0);return e.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var x=t("ion_toast",function(){function t(t){var r=this;e(this,t);this.presented=false;this.duration=0;this.keyboardClose=false;this.position="bottom";this.translucent=false;this.animated=true;this.dispatchCancelHandler=function(t){var e=t.detail.role;if(c(e)){var n=r.getButtons().find((function(t){return t.role==="cancel"}));r.callButtonHandler(n)}};l(this.el);this.didPresent=n(this,"ionToastDidPresent",7);this.willPresent=n(this,"ionToastWillPresent",7);this.willDismiss=n(this,"ionToastWillDismiss",7);this.didDismiss=n(this,"ionToastDidDismiss",7)}t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:return[4,d(this,"toastEnter",b,g,this.position)];case 1:e.sent();if(this.duration>0){this.durationTimeout=setTimeout((function(){return t.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};t.prototype.dismiss=function(t,e){if(this.durationTimeout){clearTimeout(this.durationTimeout)}return f(this,t,e,"toastLeave",y,w,this.position)};t.prototype.onDidDismiss=function(){return p(this.el,"ionToastDidDismiss")};t.prototype.onWillDismiss=function(){return p(this.el,"ionToastWillDismiss")};t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];return t};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:e=t.role;if(c(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:n=r.sent();if(n){return[2,this.dismiss(undefined,e)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:if(!(t&&t.handler))return[3,4];r.label=1;case 1:r.trys.push([1,3,,4]);return[4,h(t.handler)];case 2:e=r.sent();if(e===false){return[2,false]}return[3,4];case 3:n=r.sent();console.error(n);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,e){var n;var a=this;if(t.length===0){return}var s=r(this);var o=(n={"toast-button-group":true},n["toast-button-group-"+e]=true,n);return i("div",{class:o},t.map((function(t){return i("button",{type:"button",class:T(t),tabIndex:0,onClick:function(){return a.buttonClick(t)},part:"button"},i("div",{class:"toast-button-inner"},t.icon&&i("ion-icon",{icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-icon"}),t.text),s==="md"&&i("ion-ripple-effect",{type:t.icon!==undefined&&t.text===undefined?"unbounded":"bounded"}))})))};t.prototype.render=function(){var t,e;var n=this.getButtons();var s=n.filter((function(t){return t.side==="start"}));var c=n.filter((function(t){return t.side!=="start"}));var l=r(this);var d=(t={"toast-wrapper":true},t["toast-"+this.position]=true,t);return i(a,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign((e={},e[l]=true,e),u(this.color)),o(this.cssClass)),{"toast-translucent":this.translucent}),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},i("div",{class:d},i("div",{class:"toast-container",part:"container"},this.renderButtons(s,"start"),i("div",{class:"toast-content"},this.header!==undefined&&i("div",{class:"toast-header",part:"header"},this.header),this.message!==undefined&&i("div",{class:"toast-message",part:"message",innerHTML:v(this.message)})),this.renderButtons(c,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:.4}\@media (any-hover:hover){.toast-button:hover{opacity:.6}}"},enumerable:true,configurable:true});return t}());var T=function(t){var e;return Object.assign((e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-"+t.role]=t.role!==undefined,e["ion-focusable"]=true,e["ion-activatable"]=true,e),o(t.cssClass))}}}}));