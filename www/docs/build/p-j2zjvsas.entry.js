import{r as t,i,j as s,h as o,H as n,c as e}from"./p-72181234.js";import"./p-ac24a1dc.js";import{c as a,h as r}from"./p-984ee37a.js";import"./p-c50237ed.js";import"./p-81eeb5e4.js";import{m as c}from"./p-549b9c9e.js";import{u as l}from"./p-241a323e.js";const u=class{constructor(i){t(this,i),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=async()=>c.toggle(this.menu)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await l(this.menu)}render(){const{color:t,disabled:e}=this,c=i(this),l=s.get("menuIcon","ios"===c?"menu-outline":"menu-sharp"),u=this.autoHide&&!this.visible,b={type:this.type};return o(n,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":u?"true":null,class:Object.assign(Object.assign({[c]:!0},a(t)),{button:!0,"menu-button-hidden":u,"menu-button-disabled":e,"in-toolbar":r("ion-toolbar",this.el),"in-toolbar-color":r("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},o("button",Object.assign({},b,{disabled:e,class:"button-native"}),o("span",{class:"button-inner"},o("slot",null,o("ion-icon",{icon:l,mode:c,lazy:!1}))),"md"===c&&o("ion-ripple-effect",{type:"unbounded"})))}get el(){return e(this)}static get style(){return":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}\@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity,0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}"}};export{u as ion_menu_button};