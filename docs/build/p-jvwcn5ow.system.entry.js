System.register(["./p-ed7628e0.system.js","./p-fd7adb5b.system.js"],(function(n){"use strict";var i,e,t,r,s,o;return{setters:[function(n){i=n.r;e=n.k;t=n.l;r=n.h;s=n.H},function(n){o=n.s}],execute:function(){var c=n("ion_infinite_scroll_content",function(){function n(n){i(this,n)}n.prototype.componentDidLoad=function(){if(this.loadingSpinner===undefined){var n=e(this);this.loadingSpinner=t.get("infiniteLoadingSpinner",t.get("spinner",n==="ios"?"lines":"crescent"))}};n.prototype.render=function(){var n;var i=e(this);return r(s,{class:(n={},n[i]=true,n["infinite-scroll-content-"+i]=true,n)},r("div",{class:"infinite-loading"},this.loadingSpinner&&r("div",{class:"infinite-loading-spinner"},r("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&r("div",{class:"infinite-loading-text",innerHTML:o(this.loadingText)})))};Object.defineProperty(n,"style",{get:function(){return"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line{stroke:var(--ion-color-step-600,#666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600,#666)}"},enumerable:true,configurable:true});return n}())}}}));