import{f as n}from"./p-72181234.js";let r;const i=n=>{let r=s(n.src);if(r)return r;if(r=t(n.name,n.icon,n.mode,n.ios,n.md),r)return e(r);if(n.icon){if(r=s(n.icon),r)return r;if(r=s(n.icon[n.mode]),r)return r}return null},e=i=>(()=>{if("undefined"==typeof window)return new Map;if(!r){const n=window;n.Ionicons=n.Ionicons||{},r=n.Ionicons.map=n.Ionicons.map||new Map}return r})().get(i)||n(`svg/${i}.svg`),t=(n,r,i,e,t)=>(i="ios"===(i&&u(i))?"ios":"md",e&&"ios"===i?n=u(e):t&&"md"===i?n=u(t):(n||!r||f(r)||(n=r),o(n)&&(n=u(n))),o(n)&&""!==n.trim()?""!==n.replace(/[a-z]|-|\d/gi,"")?null:n:null),s=n=>o(n)&&(n=n.trim(),f(n))?n:null,f=n=>n.length>0&&/(\/|\.)/.test(n),o=n=>"string"==typeof n,u=n=>n.toLowerCase();export{t as a,i as g,o as i};