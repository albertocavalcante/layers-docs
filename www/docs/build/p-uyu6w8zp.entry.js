import{r as t,i,e as s,j as a,h as e,c as n}from"./p-72181234.js";import{g as h}from"./p-adab866c.js";import{a as o,d as r}from"./p-02af2d69.js";import{t as c}from"./p-eab030d6.js";const l=class{constructor(a){t(this,a),this.animationEnabled=!0,this.mode=i(this),this.animated=!0,this.ionNavWillLoad=s(this,"ionNavWillLoad",7),this.ionNavWillChange=s(this,"ionNavWillChange",3),this.ionNavDidChange=s(this,"ionNavDidChange",3)}swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}async connectedCallback(){this.gesture=(await __sc_import_app("./p-3f37e864.js")).createSwipeBackGesture(this.el,()=>!!this.swipeHandler&&this.swipeHandler.canStart()&&this.animationEnabled,()=>this.swipeHandler&&this.swipeHandler.onStart(),t=>this.ani&&this.ani.progressStep(t),(t,i,s)=>{if(this.ani){this.animationEnabled=!1,this.ani.onFinish(()=>{this.animationEnabled=!0,this.swipeHandler&&this.swipeHandler.onEnd(t)},{oneTimeCallback:!0});let a=t?-.001:.001;t?a+=h([0,0],[.32,.72],[0,1],[1,1],i)[0]:(this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),a+=h([0,0],[1,0],[.68,.28],[1,1],i)[0]),this.ani.progressEnd(t?1:0,a,s)}}),this.swipeHandlerChanged()}componentWillLoad(){this.ionNavWillLoad.emit()}disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async commit(t,i,s){const a=await this.lock();let e=!1;try{e=await this.transition(t,i,s)}catch(n){console.error(n)}return a(),e}async setRouteId(t,i,s){return{changed:await this.setRoot(t,i,{duration:"root"===s?0:void 0,direction:"back"===s?"back":"forward"}),element:this.activeEl}}async getRouteId(){const t=this.activeEl;return t?{id:t.tagName,element:t}:void 0}async setRoot(t,i,s){if(this.activeComponent===t)return!1;const a=this.activeEl,e=await o(this.delegate,this.el,t,["ion-page","ion-page-invisible"],i);return this.activeComponent=t,this.activeEl=e,await this.commit(e,a,s),await r(this.delegate,a),!0}async transition(t,i,s={}){if(i===t)return!1;this.ionNavWillChange.emit();const{el:e,mode:n}=this,h=this.animated&&a.getBoolean("animated",!0),o=this.animation||s.animationBuilder||a.get("navAnimation");return await c(Object.assign({mode:n,animated:h,animationBuilder:o,enteringEl:t,leavingEl:i,baseEl:e,progressCallback:s.progressAnimation?t=>this.ani=t:void 0},s)),this.ionNavDidChange.emit(),!0}async lock(){const t=this.waitPromise;let i;return this.waitPromise=new Promise(t=>i=t),void 0!==t&&await t,i}render(){return e("slot",null)}get el(){return n(this)}static get watchers(){return{swipeHandler:["swipeHandlerChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}};export{l as ion_router_outlet};