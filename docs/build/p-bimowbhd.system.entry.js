var __awaiter=this&&this.__awaiter||function(t,r,o,e){function n(t){return t instanceof o?t:new o((function(r){r(t)}))}return new(o||(o=Promise))((function(o,i){function l(t){try{c(e.next(t))}catch(r){i(r)}}function s(t){try{c(e["throw"](t))}catch(r){i(r)}}function c(t){t.done?o(t.value):n(t.value).then(l,s)}c((e=e.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var o={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(r){return c([t,r])}}function c(l){if(e)throw new TypeError("Generator is already executing.");while(o)try{if(e=1,n&&(i=l[0]&2?n["return"]:l[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,l[1])).done)return i;if(n=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:o.label++;return{value:l[1],done:false};case 5:o.label++;n=l[1];l=[0];continue;case 7:l=o.ops.pop();o.trys.pop();continue;default:if(!(i=o.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){o=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(l[0]===6&&o.label<i[1]){o.label=i[1];i=l;break}if(i&&o.label<i[2]){o.label=i[2];o.ops.push(l);break}if(i[2])o.ops.pop();o.trys.pop();continue}l=r.call(t,o)}catch(s){l=[6,s];n=0}finally{e=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-556912ca.system.js","./p-65968490.system.js"],(function(t){"use strict";var r,o,e,n,i,l,s,c,a,u,f,h;return{setters:[function(t){r=t.r;o=t.e;e=t.i;n=t.l;i=t.m;l=t.k;s=t.j;c=t.h;a=t.H;u=t.c},function(t){f=t.c;h=t.h}],execute:function(){var p=t("ion_content",function(){function t(t){r(this,t);this.isScrolling=false;this.lastScroll=0;this.queued=false;this.cTop=-1;this.cBottom=-1;this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:undefined,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:undefined,isScrolling:true};this.fullscreen=false;this.scrollX=false;this.scrollY=true;this.scrollEvents=false;this.ionScrollStart=o(this,"ionScrollStart",7);this.ionScroll=o(this,"ionScroll",7);this.ionScrollEnd=o(this,"ionScrollEnd",7)}t.prototype.disconnectedCallback=function(){this.onScrollEnd()};t.prototype.onAppLoad=function(){this.resize()};t.prototype.onClick=function(t){if(this.isScrolling){t.preventDefault();t.stopPropagation()}};t.prototype.shouldForceOverscroll=function(){var t=this.forceOverscroll;var r=e(this);return t===undefined?r==="ios"&&n("ios"):t};t.prototype.resize=function(){var t=this;if(this.fullscreen){i((function(){return t.readDimensions()}))}else if(this.cTop!==0||this.cBottom!==0){this.cTop=this.cBottom=0;l(this)}};t.prototype.readDimensions=function(){var t=d(this.el);var r=Math.max(this.el.offsetTop,0);var o=Math.max(t.offsetHeight-r-this.el.offsetHeight,0);var e=r!==this.cTop||o!==this.cBottom;if(e){this.cTop=r;this.cBottom=o;l(this)}};t.prototype.onScroll=function(t){var r=this;var o=Date.now();var e=!this.isScrolling;this.lastScroll=o;if(e){this.onScrollStart()}if(!this.queued&&this.scrollEvents){this.queued=true;i((function(o){r.queued=false;r.detail.event=t;y(r.detail,r.scrollEl,o,e);r.ionScroll.emit(r.detail)}))}};t.prototype.getScrollElement=function(){return Promise.resolve(this.scrollEl)};t.prototype.scrollToTop=function(t){if(t===void 0){t=0}return this.scrollToPoint(undefined,0,t)};t.prototype.scrollToBottom=function(t){if(t===void 0){t=0}var r=this.scrollEl.scrollHeight-this.scrollEl.clientHeight;return this.scrollToPoint(undefined,r,t)};t.prototype.scrollByPoint=function(t,r,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,r+this.scrollEl.scrollTop,o)};t.prototype.scrollToPoint=function(t,r,o){if(o===void 0){o=0}return __awaiter(this,void 0,void 0,(function(){var e,n,i,l,s,c,a,u,f;return __generator(this,(function(h){e=this.scrollEl;if(o<32){if(r!=null){e.scrollTop=r}if(t!=null){e.scrollLeft=t}return[2]}i=0;l=new Promise((function(t){return n=t}));s=e.scrollTop;c=e.scrollLeft;a=r!=null?r-s:0;u=t!=null?t-c:0;f=function(t){var r=Math.min(1,(t-i)/o)-1;var l=Math.pow(r,3)+1;if(a!==0){e.scrollTop=Math.floor(l*a+s)}if(u!==0){e.scrollLeft=Math.floor(l*u+c)}if(l<1){requestAnimationFrame(f)}else{n()}};requestAnimationFrame((function(t){i=t;f(t)}));return[2,l]}))}))};t.prototype.onScrollStart=function(){var t=this;this.isScrolling=true;this.ionScrollStart.emit({isScrolling:true});if(this.watchDog){clearInterval(this.watchDog)}this.watchDog=setInterval((function(){if(t.lastScroll<Date.now()-120){t.onScrollEnd()}}),100)};t.prototype.onScrollEnd=function(){clearInterval(this.watchDog);this.watchDog=null;if(this.isScrolling){this.isScrolling=false;this.ionScrollEnd.emit({isScrolling:false})}};t.prototype.render=function(){var t;var r=this;var o=this,n=o.scrollX,i=o.scrollY;var l=e(this);var u=this.shouldForceOverscroll();var p=l==="ios"&&s.getBoolean("experimentalTransitionShadow",true);this.resize();return c(a,{class:Object.assign(Object.assign({},f(this.color)),(t={},t[l]=true,t["content-sizing"]=h("ion-popover",this.el),t["overscroll"]=u,t)),style:{"--offset-top":this.cTop+"px","--offset-bottom":this.cBottom+"px"}},c("div",{id:"background-content",part:"background"}),c("main",{class:{"inner-scroll":true,"scroll-x":n,"scroll-y":i,overscroll:(n||i)&&u},ref:function(t){return r.scrollEl=t},onScroll:this.scrollEvents?function(t){return r.onScroll(t)}:undefined,part:"scroll"},c("slot",null)),p?c("div",{class:"transition-effect"},c("div",{class:"transition-cover"}),c("div",{class:"transition-shadow"})):null,c("slot",{name:"fixed"}))};Object.defineProperty(t.prototype,"el",{get:function(){return u(this)},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return":host{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50,#f2f2f2)}#background-content{background:var(--background)}#background-content,.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute}.inner-scroll{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position}.scroll-y{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{-ms-touch-action:auto;touch-action:auto}.overscroll:after,.overscroll:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll:before{bottom:-1px}.overscroll:after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{width:100%;background:#000;opacity:.1}.transition-cover,.transition-shadow{position:absolute;right:0;height:100%}.transition-shadow{display:block;width:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}"},enumerable:true,configurable:true});return t}());var v=function(t){if(t.parentElement){return t.parentElement}if(t.parentNode&&t.parentNode.host){return t.parentNode.host}return null};var d=function(t){var r=t.closest("ion-tabs");if(r){return r}var o=t.closest("ion-app,ion-page,.ion-page,page-inner");if(o){return o}return v(t)};var y=function(t,r,o,e){var n=t.currentX;var i=t.currentY;var l=t.currentTime;var s=r.scrollLeft;var c=r.scrollTop;var a=o-l;if(e){t.startTime=o;t.startX=s;t.startY=c;t.velocityX=t.velocityY=0}t.currentTime=o;t.currentX=t.scrollLeft=s;t.currentY=t.scrollTop=c;t.deltaX=s-t.startX;t.deltaY=c-t.startY;if(a>0&&a<100){var u=(s-n)/a;var f=(c-i)/a;t.velocityX=u*.7+t.velocityX*.3;t.velocityY=f*.7+t.velocityY*.3}}}}}));