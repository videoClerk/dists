!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VClerkWidget",[],e):"object"==typeof exports?exports.VClerkWidget=e():t.VClerkWidget=e()}(window,(function(){return function(t){function e(e){for(var n,s,o=e[0],r=e[1],a=0,l=[];a<o.length;a++)s=o[a],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&l.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(c&&c(e);l.length;)l.shift()()}var n={},i={1:0};function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,s){n=i[t]=[e,s]}));e.push(n[2]=o);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(t){return s.p+""+({2:"skylink",3:"vclerk-widget",4:"vendors~vclerk-widget"}[t]||t)+".chunk."+{0:"b5887f444af831ae6625",2:"01bf8accde10ec893369",3:"4f8d2755f658fb54d678",4:"32c45599c00000de5ffa",5:"ec2975a2947f2d1ee975",6:"405f2aaccc22003b4cdf",7:"0a1006b460dfd52ff318",8:"a20dde4982e6fbcbf1a8"}[t]+".js"}(t);var c=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+o+")",c.name="ChunkLoadError",c.type=s,c.request=o,n[1](c)}i[t]=void 0}};var l=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var o=window.webpackJsonpVClerkWidget=window.webpackJsonpVClerkWidget||[],r=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var c=r;return s(s.s=3)}([function(t,e,n){"use strict";const i={en:"en",no:"no",nb:"no",nn:"no","pt-br":"pt-br",pt:"pt-br"};let s;class o{static getBrowserLanguages(){const t=window.navigator,e=["language","browserLanguage","systemLanguage","userLanguage"],n=[];let i,s;if(Array.isArray(t.languages))for(s=0;s<t.languages.length;s+=1)i=t.languages[s],i&&i.length&&n.push(i);for(s=0;s<e.length;s+=1)i=t[e[s]],i&&i.length&&n.push(i);return n}static init(t,e){let r;const a=Object.keys(i);return t?t.length>2&&a.includes(t.toLowerCase())?r=t.toLowerCase():a.includes(t.substring(0,2).toLowerCase())&&(r=t.substring(0,2).toLowerCase()):o.getBrowserLanguages().some((t=>t.length>2&&a.includes(t.toLowerCase())?(r=t.toLowerCase(),!0):!!a.includes(t.substring(0,2).toLowerCase())&&(r=t.substring(0,2).toLowerCase(),!0))),r||e&&(e.length>2&&a.includes(e.toLowerCase())?r=e.toLowerCase():a.includes(e.substring(0,2).toLowerCase())&&(r=e.substring(0,2).toLowerCase())),r||(r="en"),n(5)(`./${i[r]}.json`).then((t=>(s=t,s)))}static t(t){if(!s)throw new Error("i18n has not been initialized");return t.split(".").reduce(((t,e)=>(null==t?void 0:t[e])||null),s)}}e.a=o},function(t,e){t.exports=/((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(13[_.]4|13[_.]([5-9]|\d{2,})|13[_.]7|13[_.]([8-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_.]\d+|14[_.]0|14[_.]([1-9]|\d{2,})|14[_.]4|14[_.]([5-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[_.]\d+)(?:[_.]\d+)?)|(Opera\/.+Opera Mobi.+Version\/(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+))|(Opera\/(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+))|(SamsungBrowser\/(12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+))|(Edge\/(88(?:\.0)?|88(?:\.([1-9]|\d{2,}))?|(89|9\d|\d{3,})(?:\.\d+)?))|((Chromium|Chrome)\/(87\.0|87\.([1-9]|\d{2,})|(8[8-9]|9\d|\d{3,})\.\d+)(?:\.\d+)?)|(Version\/(13\.1|13\.([2-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+|14\.0|14\.([1-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)? Safari\/)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|85\.0|85\.([1-9]|\d{2,})|(8[6-9]|9\d|\d{3,})\.\d+)\.\d+)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|85\.0|85\.([1-9]|\d{2,})|(8[6-9]|9\d|\d{3,})\.\d+)(pre|[ab]\d+[a-z]*)?)/},,function(t,e,n){"use strict";n.r(e),n.d(e,"init",(function(){return p})),n.d(e,"on",(function(){return g})),n.d(e,"open",(function(){return v}));n(4);var i=n(1),s=n.n(i),o=n(0);let r,a;const c={onAvailabilityChange:{trigger:(l="onAvailabilityChange",t=>{a.dispatchEvent(new CustomEvent(l,{detail:t}))}),onAttach:()=>r.getConfigPromise()}};var l;let d;const u=new Promise((t=>{d=t}));class h{constructor(t,e={},n){r=this,this.domElement=t,this.config=e,this.theme=n,this.isAvailable=void 0,this.isOpen=!1,this._container=null,this._reactAttachElement=null,this._buttonBase=null,this._isButtonBaseInjected=!1,this._buttonText=null,this._isButtonTextInjected=!1,this._buttonSpinner=null,this._isButtonSpinnerInjected=!1,this._webpackChunkPromise=void 0,this._configPromise=void 0,this.intervalCheckIfAvailable(),d()}setContainer(){return n.e(5).then(n.bind(null,7)),this._container=document.createElement("div"),this._container.setAttribute("class","vclerk-pw-container"),this._container.style.display="none",this._reactAttachElement=document.createElement("div"),this._reactAttachElement.setAttribute("class","vclerk-pw-container-wrapper"),this._container.appendChild(this._reactAttachElement),this.domElement.appendChild(this._container),this._container}get container(){return this._container||this.setContainer(),this._container}setButtonBase(){const t=document.createElement("div");return t.setAttribute("class","vclerk-pw-button-container"),t.addEventListener("click",(()=>r.openWidget(this.config))),this._buttonBase=t,this._buttonBase}get buttonBase(){return this._buttonBase||this.setButtonBase(),this._buttonBase}injectButtonBase(){this.container.appendChild(this.buttonBase),this._isButtonBaseInjected=!0}setButtonText(){const t=document.createElement("div");t.setAttribute("class","vclerk-pw-button"),t.innerHTML=`\n      <div class="vclerk-pw-button-wrapper">\n        <div class="vclerk-pw-button-text">\n          <div class="vclerk-pw-button-logo">\n              <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="36"\n              height="12"\n              viewBox="0 0 603.78 176.05"\n            >\n              <path\n                fill="#f4f4f4"\n                d="M345.75,200.09c-20.33,0-33.32-16-33.32-35.19,0-19.08,12.2-34.87,32.69-34.87,12.51,0,22.83,5.78,28.78,16.26l18.61-12.82c-9.7-16.27-25.34-25.5-46.29-25.5-36.13,0-57.09,27.69-57.09,58.65,0,29.25,18.77,55.83,54.11,55.83,25,0,43.64-13.13,52.71-35.65l-19.86-8.29C370.93,192.27,359.67,200.09,345.75,200.09ZM158.43,187.58l-27.84-77.1h-25L147.17,220h22.2l41.76-109.47h-25ZM666.49,177.1l37.85-37.54H674.15l-28.93,30.66V110.48H622.7V220h22.52V187l32.06,33h32.06ZM158,46.41v22a89.47,89.47,0,0,1,89.37,89.37h22A111.49,111.49,0,0,0,158,46.41Zm419.56,105.2V139.56h-21.9V220h22.52V178.19c0-12.19,7.66-18.92,18.14-18.92a31.37,31.37,0,0,1,10.32,1.88L609.88,140a38,38,0,0,0-11-1.56C589.55,138.47,580.79,142.38,577.51,151.61Zm-74.13-13.92c-25.18,0-41.6,18.3-41.6,42.22s16,41,41.13,41a44.74,44.74,0,0,0,33.78-14.55l-11.41-14.07a26.6,26.6,0,0,1-20,9.07c-11.57,0-18.77-6.72-20.18-14.39h54.11v-8.44C539.19,152.39,526.06,137.69,503.38,137.69Zm-18.77,33.15c1.72-9.07,8-14.7,17.21-14.7,9.85,0,15,6.41,15,14.7ZM442.7,200.72c-5.31,0-9.38-3.76-9.38-10.17V110.63H410.8V192.9c0,18.29,11.73,28,26.27,28a40,40,0,0,0,18.46-5l-5.32-17.36A15.87,15.87,0,0,1,442.7,200.72Z"\n                transform="translate(-105.57 -46.41)"\n              />\n            </svg>\n          </div>\n          ${o.a.t("widget_main_button.button_text")}\n          <div class="vclerk-pw-button-btn">\n            ${o.a.t("widget_main_button.button_btn_text")}\n          </div>\n        </div>\n        <div class="vclerk-pw-button-icon">\n          <svg width="92" height="92" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 866.1 805.31">\n          <defs><style>.cls-1{fill:#f4f3f2;}.cls-2{fill:#000c44;}.cls-3{fill:#fff;}</style></defs>\n          <rect class="cls-2" x="195.44" y="296.81" width="379.17" height="226.1" rx="34.69"/><path class="cls-2" d="M1242.14,450.52,1179.67,486a33.32,33.32,0,0,0-17,28.92v70.91a33.32,33.32,0,0,0,17,28.92l62.47,35.46a34.37,34.37,0,0,0,17,4.47V446.05A34.37,34.37,0,0,0,1242.14,450.52Z" transform="translate(-571.09 -139.19)"/><path class="cls-3" d="M929.1,570.85c-8.8,0-14.42-6.91-14.42-15.24s5.28-15.1,14.15-15.1a13.77,13.77,0,0,1,12.45,7l8.06-5.55c-4.2-7-11-11-20-11-15.64,0-24.71,12-24.71,25.39,0,12.66,8.12,24.17,23.42,24.17,10.84,0,18.89-5.69,22.82-15.44l-8.6-3.59C940,567.46,935.12,570.85,929.1,570.85ZM848,565.43l-12-33.38H825.12l18,47.39h9.61l18.08-47.39H860Zm220-4.54,16.39-16.25h-13.07l-12.52,13.27V532.05H1049v47.39h9.75V565.16l13.87,14.28h13.88ZM847.8,504.31v9.52a38.74,38.74,0,0,1,38.69,38.69H896A48.27,48.27,0,0,0,847.8,504.31Zm181.63,45.55v-5.22H1020v34.8h9.75V561.37c0-5.28,3.32-8.2,7.85-8.2a13.34,13.34,0,0,1,4.47.82l1.42-9.14a16.11,16.11,0,0,0-4.73-.68C1034.64,544.17,1030.85,545.86,1029.43,549.86Zm-32.09-6c-10.9,0-18,7.92-18,18.28s6.91,17.74,17.81,17.74a19.34,19.34,0,0,0,14.62-6.3l-4.94-6.09a11.53,11.53,0,0,1-8.67,3.93c-5,0-8.12-2.91-8.73-6.23h23.42V561.5C1012.84,550.19,1007.16,543.83,997.34,543.83Zm-8.12,14.35c.74-3.92,3.45-6.36,7.44-6.36,4.27,0,6.5,2.78,6.5,6.36Zm-18.15,12.94c-2.3,0-4.06-1.63-4.06-4.4v-34.6h-9.75v35.61c0,7.92,5.08,12.12,11.37,12.12a17.2,17.2,0,0,0,8-2.17l-2.3-7.51A6.81,6.81,0,0,1,971.07,571.12Z" transform="translate(-571.09 -139.19)"/></svg>\n        </div>\n      </div>\n      \n    `,this._buttonText=t}get buttonText(){return this._buttonText||this.setButtonText(),this._buttonText}injectButtonText(){this.container.classList.remove("vclerk-pw-container-hide"),this.ejectButtonSpinner(),this.buttonBase.appendChild(this.buttonText),this._isButtonTextInjected=!0,this._isButtonBaseInjected||this.injectButtonBase()}ejectButtonText(){this._isButtonTextInjected&&(this.buttonBase.removeChild(this.buttonText),this._isButtonTextInjected=!1)}setButtonSpinner(){const t=document.createElement("div");return t.setAttribute("class","vclerk-spinner"),this._buttonSpinner=t,this._buttonSpinner}get buttonSpinner(){return this._buttonSpinner||this.setButtonSpinner(),this._buttonSpinner}injectButtonSpinner(){this.ejectButtonText(),this.buttonBase.appendChild(this.buttonSpinner),this._isButtonSpinnerInjected=!0,this._isButtonBaseInjected||this.injectButtonBase()}ejectButtonSpinner(){this._isButtonSpinnerInjected&&(this.buttonBase.removeChild(this.buttonSpinner),this._isButtonSpinnerInjected=!1)}onClose(){this.isOpen=!1,this.container.classList.remove("vclerk-pw-container-open"),!0!==this.config.hideDefaultLauncher?(this.injectButtonText(),this.getConfigPromise(!0).then((()=>{this.isAvailable||this.container.classList.add("vclerk-pw-container-hide")}))):this.container.classList.add("vclerk-pw-container-hide")}openWidget(t){this.getConfigPromise().then((()=>{this.container.classList.contains("vclerk-pw-container-hide")&&this.container.classList.remove("vclerk-pw-container-hide"),this.injectButtonSpinner();this.chunkPromise.then((e=>(this.ejectButtonSpinner(),this.container.classList.add("vclerk-pw-container-open"),this.isOpen=!0,e.init(this._reactAttachElement,{...this.config,...t},this.theme,r.onClose.bind(this)))))}))}displayIfAvailable(){this.getConfigPromise(!0).then((()=>{!0===this.isAvailable?this.injectButtonText():this._container&&this.container.classList.add("vclerk-pw-container-hide")}))}intervalCheckIfAvailable(){setInterval((()=>{this.isOpen||(!0!==this.config.hideDefaultLauncher&&!0!==this.config.hide?this.displayIfAvailable():this.getConfigPromise(!0))}),1e3*Math.ceil(this.config.intervalCheckAvailable||1)*60)}getConfigPromise(t){if(this._configPromise&&!t)return this._configPromise;const e=(n="GET",i=`https://ws-v1.vclerk.com/video/${this.config.queue}/available`,s=this.config.apiKey,new Promise(((t,e)=>{const o=new XMLHttpRequest;o.open(n,i),o.setRequestHeader("X-VideoClerk-API-Key",s),o.onload=()=>{t(o.response)},o.onerror=()=>{e(o.response)},o.send()})));var n,i,s;const r=o.a.init(this.config.language,this.config.languageFallback);return this._configPromise=Promise.all([e,r]).then((([t])=>{const e=JSON.parse(t);this.config={...this.config,...e.config},this.isAvailable!==e.show&&(this.isAvailable=e.show,a.events.onAvailabilityChange.trigger(this.isAvailable))})),this._configPromise}get chunkPromise(){return this._webpackChunkPromise||(this._webpackChunkPromise=new Promise(((t,e)=>{Promise.all([n.e(2),n.e(4),n.e(3)]).then(n.bind(null,11)).then(t).catch((t=>{console.error(new Error("Failed to fetch vclerk main bundle."),t),e(t)}))}))),this._webpackChunkPromise}}const f=[...new URL(document.currentScript.src).searchParams].reduce(((t,[e,n])=>(t[e]="true"===n||"false"===n?"true"===n:n,t)),{});function p(t,e={},i){if(!s.a.test(navigator.userAgent))return void 0;if(navigator.userAgent.indexOf("OPiOS")>0||navigator.userAgent.indexOf("CriOS")>0||navigator.userAgent.indexOf("FxiOS")>0)return void 0;if(!navigator.mediaDevices)return void 0;if(a=document.createTextNode(null),a.events=c,t||(t=document.createElement("div"),document.body.appendChild(t)),t.classList.add("videoclerk-widget"),t.style.height="0px",t.style.width="0px",t.style.position="absolute",t.style.left="-9999px",t.style.all="initial",!(t instanceof HTMLElement))return new Error("Selected element is not an HTML element!");const o=t,{schema:l}={...f,...e};new Promise((t=>{l&&t(n(6)("./"+l).then((t=>t.config))),t()})).then((t=>{const n={...t,...f,...e};new h(o,n,i),!0!==n.hide&&!0!==n.hideDefaultLauncher&&r.displayIfAvailable()}))}if(f.autoInit){let t="DOMContentLoaded";["load","DOMContentLoaded","instant"].includes(f.autoInit)&&(t=f.autoInit),"instant"===t?p():document.addEventListener(t,(()=>{p()}))}function g(t,e){u.then((()=>{c[t].onAttach&&c[t].onAttach(),a.addEventListener(t,(t=>e(t.detail)))}))}function v(t){r.openWidget({...r.config,...t})}},function(t,e,n){const i=new URL(document.currentScript.src),s=""+i.href.substring(0,i.href.lastIndexOf("/")+1);n.p=s+n.p},function(t,e,n){var i={"./en.json":[8,6],"./no.json":[9,7],"./pt-br.json":[10,8]};function s(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],s=e[0];return n.e(e[1]).then((function(){return n.t(s,3)}))}s.keys=function(){return Object.keys(i)},s.id=5,t.exports=s},function(t,e,n){var i={"./shopify":[2,0],"./shopify.js":[2,0]};function s(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],s=e[0];return n.e(e[1]).then((function(){return n(s)}))}s.keys=function(){return Object.keys(i)},s.id=6,t.exports=s}])}));