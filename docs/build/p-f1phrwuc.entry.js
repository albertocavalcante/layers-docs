import{r as t,h as s,H as o,c as e}from"./p-72181234.js";import{c}from"./p-00bea6bd.js";const i=class{constructor(s){t(this,s),this.language="",this.showCopyConfirmation=!1}copyCodeText(){this.showCopyConfirmation=!0;const t=this.el.querySelector("code").textContent||"",s=document.createElement("textarea");s.value=t,s.setAttribute("readonly",""),s.style.position="absolute",s.style.left="-9999px",document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),setTimeout(()=>{this.showCopyConfirmation=!1},2e3)}render(){return s(o,null,["shell","bash","sh"].includes(this.language)?"":s("div",{class:{"code-text__copy":!0,"show-confirmation":this.showCopyConfirmation}},s("a",{class:"code-text__copy-link",onClick:this.copyCodeText.bind(this)},"Copiar"),s("span",{class:"code-text__copy-confirmation"},c({height:"26px",width:"26px"}),"Copiado")))}get el(){return e(this)}static get style(){return"docs-code{display:block;position:relative}docs-code:before{color:#bdc5d1;content:attr(language);font-family:var(--code-font-family);font-size:10px;letter-spacing:.05em;line-height:1;padding:.75em;position:absolute;right:0;text-transform:uppercase;top:0}docs-code[language=shell] pre{white-space:pre-wrap}.code-text__copy{position:absolute;right:0;top:-1.6rem;height:20px}.code-text__copy-confirmation,.code-text__copy-link{padding:4px 5px;font-size:12px;line-height:12px;font-weight:600;position:absolute;right:0;top:0}.code-text__copy-link{-webkit-transition:opacity .2s,color .2s,-webkit-transform .2s;transition:opacity .2s,color .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s,color .2s;transition:transform .2s,opacity .2s,color .2s,-webkit-transform .2s;color:#70a4ff;background-color:#e0eeff;border-radius:4px;display:inline-block;cursor:pointer;opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:5}.code-text__copy-link:hover{color:var(--blue)}.code-text__copy-confirmation{-webkit-transition:opacity .2s,-webkit-transform .2s;transition:opacity .2s,-webkit-transform .2s;transition:transform .2s,opacity .2s;transition:transform .2s,opacity .2s,-webkit-transform .2s;color:#0ec254;opacity:0;-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0);z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding:0}.code-text__copy-confirmation svg{fill:#0ec254;margin-right:-4px}.show-confirmation .code-text__copy-link{opacity:0;-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0);pointer-events:none}.show-confirmation .code-text__copy-confirmation{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}docs-code[language=shell]>pre{background-color:var(--text-color--dark);border-radius:7px}docs-code[language=shell]:before{display:none}docs-code[language=shell] code{color:hsla(0,0%,100%,.7);font-size:13px}docs-code[language=shell] .token{color:inherit}docs-code[language=shell] .token.prompt{color:#fb96f9;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}docs-code[language=shell] .token.comment{color:hsla(0,0%,100%,.45)}docs-code[language=http]>pre{border-radius:7px;padding:0 2em 0 0;background:#fafafa;-webkit-box-shadow:0 2px 3px -2px rgba(0,0,0,.1),0 2px 16px 0 rgba(0,0,0,.1);box-shadow:0 2px 3px -2px rgba(0,0,0,.1),0 2px 16px 0 rgba(0,0,0,.1)}docs-code[language=http]:before{display:none}docs-code[language=http] code{color:rgba(0,0,0,.7);font-size:13px}docs-code[language=http] .token{color:inherit}docs-code[language=http] .method>.token{--color:119,161,250;display:inline-block;padding:1em;font-weight:700;color:rgb(var(--color));background-color:rgba(var(--color),.15);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}docs-code[language=http] .method .delete{--color:var(--api-red)}docs-code[language=http] .method .put{--color:var(--api-yellow)}docs-code[language=http] .method .post{--color:var(--api-blue)}docs-code[language=http] .method .get{--color:var(--api-green)}docs-code[language=http] .token.schema{color:rgba(0,0,0,.4)}docs-code[language=http] .token.host{color:rgba(0,0,0,.7)}docs-code[language=http] .token.path{color:#1e90ff}docs-code[language=http] .token.path .version{color:rgba(0,0,0,.7)}docs-code[language=http] .token.path .param{color:#42b983}docs-code[language=http] .token.query .separator{color:#a9a9a9}docs-code[language=http] .token.query .param{color:#8454ff}docs-code[language=http] .token.query .param .key{font-weight:700}docs-code[language=http] .token.query .param .value{color:#42b983}docs-code[language=http] .token.query .param .value .number{color:#4caf50;font-weight:700}code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;color:#90a4ae;background:#fafafa;font-family:Roboto Mono,monospace;font-size:1em;line-height:1.5em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-]::-moz-selection,code[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection{background:#cceae7;color:#263238}code[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-]::selection,pre[class*=language-] ::selection{background:#cceae7;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative;margin:.5em 0;padding:1.25em 1em}.language-css>code,.language-sass>code,.language-scss>code{color:#f76d47}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#7c4dff}.token.attr-name{color:#39adb5}.token.attr-value,.token.attribute{color:#f6a434}.token.boolean{color:#8d45d4}.token.builtin,.token.cdata,.token.char,.token.class{color:#39adb5}.token.class-name{color:#6182b8}.token.comment{color:#aabfc9}.token.constant{color:#7c4dff}.token.deleted{color:#e53935}.token.doctype{color:#aabfc9}.token.entity{color:#e53935}.token.function{color:#7c4dff}.token.hexcode{color:#f76d47}.token.id,.token.important{color:#7c4dff;font-weight:700}.token.inserted{color:#39adb5}.token.keyword{color:#7c4dff}.token.number{color:#f76d47}.token.operator{color:#39adb5}.token.prolog{color:#aabfc9}.token.property{color:#39adb5}.token.pseudo-class,.token.pseudo-element{color:#f6a434}.token.punctuation{color:#39adb5}.token.regex{color:#6182b8}.token.selector{color:#e53935}.token.string{color:#f6a434}.token.symbol{color:#7c4dff}.token.tag{color:#e53935}.token.unit{color:#f76d47}.token.url,.token.variable{color:#e53935}"}};export{i as docs_code};