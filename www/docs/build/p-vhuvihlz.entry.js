import{r as t,e as s,i as e,h as a,H as i,c as r}from"./p-72181234.js";import{c as o}from"./p-984ee37a.js";const n=class{constructor(e){t(this,e),this.keyboardVisible=!1,this.translucent=!1,this.ionTabBarChanged=s(this,"ionTabBarChanged",7)}selectedTabChanged(){void 0!==this.selectedTab&&this.ionTabBarChanged.emit({tab:this.selectedTab})}onKeyboardWillHide(){setTimeout(()=>this.keyboardVisible=!1,50)}onKeyboardWillShow(){"top"!==this.el.getAttribute("slot")&&(this.keyboardVisible=!0)}componentWillLoad(){this.selectedTabChanged()}render(){const{color:t,translucent:s,keyboardVisible:r}=this,n=e(this);return a(i,{role:"tablist","aria-hidden":r?"true":null,class:Object.assign(Object.assign({},o(t)),{[n]:!0,"tab-bar-translucent":s,"tab-bar-hidden":r})},a("slot",null))}get el(){return r(this)}static get watchers(){return{selectedTab:["selectedTabChanged"]}}static get style(){return":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:1px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.07))));--color:var(--ion-tab-bar-color,var(--ion-color-step-600,#666));--color-selected:var(--ion-tab-bar-color-selected,var(--ion-color-primary,#3880ff));height:56px}"}};export{n as ion_tab_bar};