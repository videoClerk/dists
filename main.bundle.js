!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("VClerkWidget",[],e):"object"==typeof exports?exports.VClerkWidget=e():t.VClerkWidget=e()}(window,(function(){return function(t){function e(e){for(var n,o,s=e[0],r=e[1],a=0,u=[];a<s.length;a++)o=s[a],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(c&&c(e);u.length;)u.shift()()}var n={},i={1:0};function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,o){n=i[t]=[e,o]}));e.push(n[2]=s);var r,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(t){return o.p+""+({2:"skylink",3:"vclerk-widget",4:"vendors~vclerk-widget"}[t]||t)+".chunk."+{0:"b5887f444af831ae6625",2:"459d3a39f1de066c92af",3:"8400d40709bec8314cf4",4:"51b3136116c616626a6f",5:"69f4756b829c5ef2c993",6:"48f5c0abebf42515caf7",7:"9780d07c47338cc95051",8:"3b02e7e0ef9310d7d41f",9:"ad4bea9ea30f14c853fa",10:"dc420df283f73807211d"}[t]+".js"}(t);var c=new Error;r=function(e){a.onerror=a.onload=null,clearTimeout(u);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",c.name="ChunkLoadError",c.type=o,c.request=s,n[1](c)}i[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:a})}),12e4);a.onerror=a.onload=r,document.head.appendChild(a)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o.oe=function(t){throw console.error(t),t};var s=window.webpackJsonpVClerkWidget=window.webpackJsonpVClerkWidget||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var c=r;return o(o.s=3)}([function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const i={en:"en",no:"no",nb:"no",nn:"no","pt-br":"pt-br",pt:"pt-br"},o={en:"eng",no:"nno",nb:"nno",nn:"nno","pt-br":"por",pt:"por"};let s;const r=t=>o[t]?o[t]:o.en;class a{static getBrowserLanguages(){const t=window.navigator,e=["language","browserLanguage","systemLanguage","userLanguage"],n=[];let i,o;if(Array.isArray(t.languages))for(o=0;o<t.languages.length;o+=1)i=t.languages[o],i&&i.length&&n.push(i);for(o=0;o<e.length;o+=1)i=t[e[o]],i&&i.length&&n.push(i);return n}static getLanguage(t,e){const n=Object.keys(i);let o;return t?t.length>2&&n.includes(t.toLowerCase())?o=t.toLowerCase():n.includes(t.substring(0,2).toLowerCase())&&(o=t.substring(0,2).toLowerCase()):a.getBrowserLanguages().some((t=>t.length>2&&n.includes(t.toLowerCase())?(o=t.toLowerCase(),!0):!!n.includes(t.substring(0,2).toLowerCase())&&(o=t.substring(0,2).toLowerCase(),!0))),o||e&&(e.length>2&&n.includes(e.toLowerCase())?o=e.toLowerCase():n.includes(e.substring(0,2).toLowerCase())&&(o=e.substring(0,2).toLowerCase())),o||(o="en"),o}static init(t,e){const o=a.getLanguage(t,e);return n(5)(`./${i[o]}.json`).then((t=>(s=t,s)))}static t(t){if(!s)throw new Error("i18n has not been initialized");return t.split(".").reduce(((t,e)=>(null==t?void 0:t[e])||null),s)}}e.b=a},function(t,e){t.exports=/((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(13[_.]0|13[_.]([1-9]|\d{2,})|13[_.]7|13[_.]([8-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_.]\d+|14[_.]0|14[_.]([1-9]|\d{2,})|14[_.]5|14[_.]([6-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[_.]\d+)(?:[_.]\d+)?)|(Opera\/.+Opera Mobi.+Version\/(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+))|(Opera\/(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(62\.0|62\.([1-9]|\d{2,})|(6[3-9]|[7-9]\d|\d{3,})\.\d+))|(SamsungBrowser\/(12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+))|(Edge\/(79(?:\.0)?|79(?:\.([1-9]|\d{2,}))?|([8-9]\d|\d{3,})(?:\.\d+)?|83(?:\.0)?|83(?:\.([1-9]|\d{2,}))?|(8[4-9]|9\d|\d{3,})(?:\.\d+)?))|((Chromium|Chrome)\/(72\.0|72\.([1-9]|\d{2,})|(7[3-9]|[8-9]\d|\d{3,})\.\d+|83\.0|83\.([1-9]|\d{2,})|(8[4-9]|9\d|\d{3,})\.\d+)(?:\.\d+)?)|(Version\/(13\.0|13\.([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+|14\.0|14\.([1-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)? Safari\/)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|85\.0|85\.([1-9]|\d{2,})|(8[6-9]|9\d|\d{3,})\.\d+)\.\d+)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|85\.0|85\.([1-9]|\d{2,})|(8[6-9]|9\d|\d{3,})\.\d+)(pre|[ab]\d+[a-z]*)?)/},,function(t,e,n){"use strict";n.r(e),n.d(e,"init",(function(){return v})),n.d(e,"on",(function(){return f})),n.d(e,"open",(function(){return g}));n(4);var i=n(1),o=n.n(i),s=n(0);let r,a;const c={onAvailabilityChange:{trigger:(u="onAvailabilityChange",t=>{a.dispatchEvent(new CustomEvent(u,{detail:t}))}),onAttach:()=>r.getConfigPromise()}};var u;let d;const l=new Promise((t=>{d=t}));class h{constructor(t,e={},n){r=this,this.domElement=t,this.config=e,this.theme=n,this.isAvailable=void 0,this.isOpen=!1,this._container=null,this._reactAttachElement=null,this._buttonBase=null,this._isButtonBaseInjected=!1,this._button=null,this._isButtonInjected=!1,this._buttonText=null,this._isButtonTextInjected=!1,this._buttonSpinner=null,this._isButtonSpinnerInjected=!1,this._buttonAvatar=null,this._isButtonAvatarInjected=!1,this._webpackChunkPromise=void 0,this._configPromise=void 0,this.intervalCheckIfAvailable(),d()}setContainer(){return n.e(5).then(n.bind(null,8)),this._container=document.createElement("div"),this._container.setAttribute("class","vclerk-pw-container"),this._container.style.display="none",this._reactAttachElement=document.createElement("div"),this._reactAttachElement.setAttribute("class","vclerk-pw-container-wrapper"),this._container.appendChild(this._reactAttachElement),this.domElement.appendChild(this._container),this._container}get container(){return this._container||this.setContainer(),this._container}setButtonBase(){const t=document.createElement("div");return t.setAttribute("class","vclerk-pw-button-wrapper"),this._buttonBase=t,this._buttonBase}get buttonBase(){return this._buttonBase||this.setButtonBase(),this._buttonBase}injectButtonBase(){this.container.appendChild(this.buttonBase),this._isButtonBaseInjected=!0}setButtonText(){var t;const e=document.createElement("div"),n=!(null===(t=window.sessionStorage)||void 0===t||!t.getItem("vclerk-btn-msg-closed"));e.setAttribute("class","vclerk-pw-button-text"),n&&e.classList.add("vclerk-pw-text-hidden");const i=document.createElement("div");i.setAttribute("class","vclerk-pw-btn-close"),i.addEventListener("click",(()=>{window.sessionStorage&&window.sessionStorage.setItem("vclerk-btn-msg-closed",!0),this.buttonText.classList.add("vclerk-pw-text-hidden")})),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 24 24" width="22"><path d="M0 0h24v24H0z" fill="none"/><path fill="#fff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',e.appendChild(i);const o=document.createElement("div");o.setAttribute("class","vclerk-pw-button-logo"),o.innerHTML='\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="36"\n        height="12"\n        viewBox="0 0 603.78 176.05"\n      >\n        <path\n          fill="#f4f4f4"\n          d="M345.75,200.09c-20.33,0-33.32-16-33.32-35.19,0-19.08,12.2-34.87,32.69-34.87,12.51,0,22.83,5.78,28.78,16.26l18.61-12.82c-9.7-16.27-25.34-25.5-46.29-25.5-36.13,0-57.09,27.69-57.09,58.65,0,29.25,18.77,55.83,54.11,55.83,25,0,43.64-13.13,52.71-35.65l-19.86-8.29C370.93,192.27,359.67,200.09,345.75,200.09ZM158.43,187.58l-27.84-77.1h-25L147.17,220h22.2l41.76-109.47h-25ZM666.49,177.1l37.85-37.54H674.15l-28.93,30.66V110.48H622.7V220h22.52V187l32.06,33h32.06ZM158,46.41v22a89.47,89.47,0,0,1,89.37,89.37h22A111.49,111.49,0,0,0,158,46.41Zm419.56,105.2V139.56h-21.9V220h22.52V178.19c0-12.19,7.66-18.92,18.14-18.92a31.37,31.37,0,0,1,10.32,1.88L609.88,140a38,38,0,0,0-11-1.56C589.55,138.47,580.79,142.38,577.51,151.61Zm-74.13-13.92c-25.18,0-41.6,18.3-41.6,42.22s16,41,41.13,41a44.74,44.74,0,0,0,33.78-14.55l-11.41-14.07a26.6,26.6,0,0,1-20,9.07c-11.57,0-18.77-6.72-20.18-14.39h54.11v-8.44C539.19,152.39,526.06,137.69,503.38,137.69Zm-18.77,33.15c1.72-9.07,8-14.7,17.21-14.7,9.85,0,15,6.41,15,14.7ZM442.7,200.72c-5.31,0-9.38-3.76-9.38-10.17V110.63H410.8V192.9c0,18.29,11.73,28,26.27,28a40,40,0,0,0,18.46-5l-5.32-17.36A15.87,15.87,0,0,1,442.7,200.72Z"\n          transform="translate(-105.57 -46.41)"\n        />\n      </svg>\n    ',e.appendChild(o);const r=document.createElement("div");r.setAttribute("class","vclerk-pw-text-container"),r.innerHTML=`\n    <div class="vclerk-pw-btn-heading">\n      <div class="vclerk-pw-button-online">&nbsp;</div>\n      <div>${s.b.t("widget_main_button.button_descr_text")}</div> \n    </div>\n    <div class="vclerk-pw-btn-message">\n      ${this.config.message||s.b.t("widget_main_button.default_message")}\n    </div>\n    `,e.appendChild(r),this._buttonText=e}get buttonText(){return this._buttonText||this.setButtonText(),this._buttonText}injectButtonText(){this.container.classList.remove("vclerk-pw-container-hide"),this.ejectButtonSpinner(),this.buttonBase.appendChild(this.buttonText),this._isButtonTextInjected=!0,this._isButtonBaseInjected||this.injectButtonBase()}ejectButtonText(){this._isButtonTextInjected&&(this.buttonBase.removeChild(this.buttonText),this._isButtonTextInjected=!1)}setButton(){const t=document.createElement("div");return t.setAttribute("class","vclerk-pw-button"),t.addEventListener("click",(()=>{this.isOpen||r.openWidget(this.config)})),this._button=t,this._button}get button(){return this._button||this.setButton(),this._button}injectButton(){this.buttonBase.appendChild(this.button),this._isButtonInjected=!0,this._isButtonInjected||this.injectButton()}ejectButton(){this._isButtonInjected&&(this.buttonBase.removeChild(this.button),this._isButtonInjected=!1)}static convertPictureSize(t,e){if(t){const n=t.indexOf("pictures/");return n?`${t.slice(0,n+8)}/tr:w-${e}/${t.slice(n+9)}`:""}return""}static preloadImage(t,e,n){const i=new Image;i.src=t,i.alt="clerk",i.onload=e,i.onerror=n}setButtonAvatar(){var t;const e=document.createElement("div");e.setAttribute("class","vclerk-pw-button-img-container");const i=t=>{var n;e.appendChild((null===(n=t.path)||void 0===n?void 0:n[0])||t.target),this._buttonAvatar=e},o=()=>{var t,i;n(6)(`./seller${t=1,i=2,t=Math.ceil(t),i=Math.floor(i),Math.floor(Math.random()*(i-t+1)+t)}.svg`).then((t=>{const n=new Image;n.src=t.default,n.alt="clerk",n.onload=t=>{var n;e.appendChild((null===(n=t.path)||void 0===n?void 0:n[0])||t.target),this._buttonAvatar=e}}))},s=()=>o();return null!==(t=this.config.pictures)&&void 0!==t&&t[0]?this.constructor.preloadImage(this.constructor.convertPictureSize(this.config.pictures[0],120),i,s):o(),this._buttonAvatar=e,this._buttonAvatar}get buttonAvatar(){return this._buttonAvatar||this.setButtonAvatar(),this._buttonAvatar}injectButtonAvatar(){this._button.appendChild(this.buttonAvatar),this._isButtonAvatarInjected=!0,this._isButtonAvatarInjected||this.injectButtonAvatar()}ejectButtonAvatar(){this._isButtonAvatarInjected&&(this._button.removeChild(this.buttonAvatar),this._isButtonAvatarInjected=!1)}setButtonSpinner(){const t=document.createElement("div");return t.setAttribute("class","vclerk-spinner"),this._buttonSpinner=t,this._buttonSpinner}get buttonSpinner(){return this._buttonSpinner||this.setButtonSpinner(),this._buttonSpinner}injectButtonSpinner(){this.ejectButtonAvatar(),this.button.appendChild(this.buttonSpinner),this._isButtonSpinnerInjected=!0,this._button||this.injectButton()}ejectButtonSpinner(){this._isButtonSpinnerInjected&&(this.button.removeChild(this.buttonSpinner),this._isButtonSpinnerInjected=!1)}onClose(){this.isOpen=!1,this.container.classList.remove("vclerk-pw-container-open"),!0!==this.config.hideDefaultLauncher?(this.injectButtonAvatar(),this.injectButtonText(),this.getConfigPromise(!0).then((()=>{this.isAvailable||this.container.classList.add("vclerk-pw-container-hide")}))):this.container.classList.add("vclerk-pw-container-hide")}openWidget(t){this.getConfigPromise().then((()=>{this.container.classList.contains("vclerk-pw-container-hide")&&this.container.classList.remove("vclerk-pw-container-hide"),this.injectButtonSpinner();this.chunkPromise.then((e=>(this.ejectButtonSpinner(),this.container.classList.add("vclerk-pw-container-open"),this.isOpen=!0,e.init(this._reactAttachElement,{...this.config,...t},this.theme,r.onClose.bind(this)))))}))}displayIfAvailable(){this.getConfigPromise(!0).then((()=>{!0===this.isAvailable?(this._isButtonInjected||this.injectButton(),this._isButtonAvatarInjected||this.injectButtonAvatar(),this._isButtonTextInjected||this.injectButtonText()):this._container&&this.container.classList.add("vclerk-pw-container-hide")}))}intervalCheckIfAvailable(){setInterval((()=>{this.isOpen||(!0!==this.config.hideDefaultLauncher&&!0!==this.config.hide?this.displayIfAvailable():this.getConfigPromise(!0))}),1e3*Math.ceil(this.config.intervalCheckAvailable||1)*60)}getConfigPromise(t){if(this._configPromise&&!t)return this._configPromise;const e=s.b.getLanguage(this.config.language,this.config.languageFallback),n=(i="GET",o=`https://videoclerk-backend-dev-ws.herokuapp.com/video/${this.config.queue}/available?language=${Object(s.a)(e)}`,r=this.config.apiKey,new Promise(((t,e)=>{const n=new XMLHttpRequest;n.open(i,o),n.setRequestHeader("X-VideoClerk-API-Key",r),n.setRequestHeader("X-VideoClerk-Referer",window.location.href),n.onload=()=>{t(n.response)},n.onerror=()=>{e(n.response)},n.send()})));var i,o,r;const c=s.b.init(this.config.language,this.config.languageFallback);return this._configPromise=Promise.all([n,c]).then((([t])=>{const e=JSON.parse(t);this.config={...this.config,...e.config,message:e.message,pictures:e.pictures},this.isAvailable!==e.show&&(this.isAvailable=e.show,a.events.onAvailabilityChange.trigger(this.isAvailable))})),this._configPromise}get chunkPromise(){return this._webpackChunkPromise||(this._webpackChunkPromise=new Promise(((t,e)=>{Promise.all([n.e(2),n.e(4),n.e(3)]).then(n.bind(null,14)).then(t).catch((t=>{console.error(new Error("Failed to fetch vclerk main bundle."),t),e(t)}))}))),this._webpackChunkPromise}}const p=[...new URL(document.currentScript.src).searchParams].reduce(((t,[e,n])=>(t[e]="true"===n||"false"===n?"true"===n:n,t)),{});function v(t,e={},i){if(!o.a.test(navigator.userAgent))return void console.error("unsupported browser");if(navigator.userAgent.indexOf("OPiOS")>0||navigator.userAgent.indexOf("CriOS")>0||navigator.userAgent.indexOf("FxiOS")>0)return void console.error("unsupported browser");if(!navigator.mediaDevices)return void console.error("navigator.mediaDevices is empty, https issue?");if(a=document.createTextNode(null),a.events=c,t||(t=document.createElement("div"),document.body.appendChild(t)),t.classList.add("videoclerk-widget"),t.style.height="0px",t.style.width="0px",t.style.position="absolute",t.style.left="-9999px",t.style.all="initial",!(t instanceof HTMLElement))return new Error("Selected element is not an HTML element!");const s=t,{schema:u}={...p,...e};new Promise((t=>{u&&t(n(7)("./"+u).then((t=>t.config))),t()})).then((t=>{const n={...t,...p,...e};new h(s,n,i),!0!==n.hide&&!0!==n.hideDefaultLauncher&&r.displayIfAvailable()}))}if(p.autoInit){let t="DOMContentLoaded";["load","DOMContentLoaded","instant"].includes(p.autoInit)&&(t=p.autoInit),"instant"===t?v():document.addEventListener(t,(()=>{v()}))}function f(t,e){l.then((()=>{c[t].onAttach&&c[t].onAttach(),a.addEventListener(t,(t=>e(t.detail)))}))}function g(t){r.openWidget({...r.config,...t})}},function(t,e,n){const i=new URL(document.currentScript.src),o=""+i.href.substring(0,i.href.lastIndexOf("/")+1);n.p=o+n.p},function(t,e,n){var i={"./en.json":[9,6],"./no.json":[10,7],"./pt-br.json":[11,8]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n.t(o,3)}))}o.keys=function(){return Object.keys(i)},o.id=5,t.exports=o},function(t,e,n){var i={"./seller1.svg":[12,9],"./seller2.svg":[13,10]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id=6,t.exports=o},function(t,e,n){var i={"./shopify":[2,0],"./shopify.js":[2,0]};function o(t){if(!n.o(i,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=i[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id=7,t.exports=o}])}));