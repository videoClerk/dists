!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VClerkWidget",[],t):"object"==typeof exports?exports.VClerkWidget=t():e.VClerkWidget=t()}(window,(function(){return function(e){function t(t){for(var n,r,o=t[0],a=t[1],s=0,u=[];s<o.length;s++)r=o[s],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(c&&c(t);u.length;)u.shift()()}var n={},i={1:0};function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+""+({2:"skylink",3:"vclerk-widget",4:"vendors~vclerk-widget"}[e]||e)+".chunk."+{0:"8ec1d06f61241d3754e6",2:"9843f2cc12084214893b",3:"c5c281f27c20f55552b1",4:"18794bc6f4427d58ff3a",5:"2b3c426f324c244d3d25",6:"405f2aaccc22003b4cdf",7:"0a1006b460dfd52ff318"}[e]+".js"}(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[e]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var o=window.webpackJsonpVClerkWidget=window.webpackJsonpVClerkWidget||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var c=a;return r(r.s=3)}([function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r,o={en:"en",no:"no",nb:"no",nn:"no"},a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,s;return t=e,s=[{key:"getBrowserLanguages",value:function(){var e,t,n=window.navigator,i=["language","browserLanguage","systemLanguage","userLanguage"],r=[];if(Array.isArray(n.languages))for(t=0;t<n.languages.length;t+=1)(e=n.languages[t])&&e.length&&r.push(e);for(t=0;t<i.length;t+=1)(e=n[i[t]])&&e.length&&r.push(e);return r}},{key:"init",value:function(t,i){var a,s=Object.keys(o);return t?t.length>2&&s.includes(t)?a=t:s.includes(t.substring(0,2))&&(a=t.substring(0,2)):e.getBrowserLanguages().some((function(e){return e.length>2&&s.includes(e)?(a=e,!0):!!s.includes(e.substring(0,2))&&(a=e.substring(0,2),!0)})),a||i&&(i.length>2&&s.includes(i)?a=i:s.includes(i.substring(0,2))&&(a=i.substring(0,2))),a||(a="en"),n(5)("./".concat(o[a],".json")).then((function(e){return r=e}))}},{key:"t",value:function(e){if(!r)throw new Error("i18n has not been initialized");return e.split(".").reduce((function(e,t){return(null==e?void 0:e[t])||null}),r)}}],(a=null)&&i(t.prototype,a),s&&i(t,s),e}();t.a=a},function(e,t){e.exports=/((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(13[_.]4|13[_.]([5-9]|\d{2,})|13[_.]7|13[_.]([8-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_.]\d+|14[_.]0|14[_.]([1-9]|\d{2,})|14[_.]2|14[_.]([3-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[_.]\d+)(?:[_.]\d+)?)|(Opera\/.+Opera Mobi.+Version\/(59\.0|59\.([1-9]|\d{2,})|([6-9]\d|\d{3,})\.\d+))|(Opera\/(59\.0|59\.([1-9]|\d{2,})|([6-9]\d|\d{3,})\.\d+).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(59\.0|59\.([1-9]|\d{2,})|([6-9]\d|\d{3,})\.\d+))|(SamsungBrowser\/(12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+))|(Edge\/(86(?:\.0)?|86(?:\.([1-9]|\d{2,}))?|(8[7-9]|9\d|\d{3,})(?:\.\d+)?))|((Chromium|Chrome)\/(85\.0|85\.([1-9]|\d{2,})|(8[6-9]|9\d|\d{3,})\.\d+)(?:\.\d+)?)|(Version\/(13\.1|13\.([2-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+|14\.0|14\.([1-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)? Safari\/)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|82\.0|82\.([1-9]|\d{2,})|(8[3-9]|9\d|\d{3,})\.\d+)\.\d+)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|82\.0|82\.([1-9]|\d{2,})|(8[3-9]|9\d|\d{3,})\.\d+)(pre|[ab]\d+[a-z]*)?)/},,function(e,t,n){"use strict";n.r(t),n.d(t,"init",(function(){return k})),n.d(t,"on",(function(){return j})),n.d(t,"open",(function(){return O}));n(4);var i,r,o=n(1),a=n.n(o),s=n(0);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);i=!0);}catch(e){r=!0,o=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b={available:{name:"available",onAttach:function(){return i.getConfigPromise()}}};var g,m=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;p(this,e),i=this,this.domElement=t,this.config=n,this.theme=r,this.isAvailable=void 0,this.isOpen=!1,this._container=null,this._reactAttachElement=null,this._buttonBase=null,this._isButtonBaseInjected=!1,this._buttonText=null,this._isButtonTextInjected=!1,this._buttonSpinner=null,this._isButtonSpinnerInjected=!1,this._webpackChunkPromise=void 0,this._configPromise=void 0,this.intervalCheckIfAvailable()}var t,o,a;return t=e,(o=[{key:"setContainer",value:function(){return n.e(5).then(n.bind(null,7)),this._container=document.createElement("div"),this._container.setAttribute("class","vclerk-pw-container"),this._container.style.display="none",this._reactAttachElement=document.createElement("div"),this._reactAttachElement.setAttribute("class","vclerk-pw-container-wrapper"),this._container.appendChild(this._reactAttachElement),this.domElement.appendChild(this._container),this._container}},{key:"setButtonBase",value:function(){var e=this,t=document.createElement("div");return t.setAttribute("class","vclerk-pw-button-container"),t.addEventListener("click",(function(){return i.openWidget(e.config)})),this._buttonBase=t,this._buttonBase}},{key:"injectButtonBase",value:function(){this.container.appendChild(this.buttonBase),this._isButtonBaseInjected=!0}},{key:"setButtonText",value:function(){var e=document.createElement("div");e.setAttribute("class","vclerk-pw-button"),e.innerHTML='\n      <div class="vclerk-pw-button-wrapper">\n        <div class="vclerk-pw-button-text">\n          <div class="vclerk-pw-button-logo">\n              <svg\n              xmlns="http://www.w3.org/2000/svg"\n              width="36"\n              height="12"\n              viewBox="0 0 603.78 176.05"\n            >\n              <path\n                fill="#f4f4f4"\n                d="M345.75,200.09c-20.33,0-33.32-16-33.32-35.19,0-19.08,12.2-34.87,32.69-34.87,12.51,0,22.83,5.78,28.78,16.26l18.61-12.82c-9.7-16.27-25.34-25.5-46.29-25.5-36.13,0-57.09,27.69-57.09,58.65,0,29.25,18.77,55.83,54.11,55.83,25,0,43.64-13.13,52.71-35.65l-19.86-8.29C370.93,192.27,359.67,200.09,345.75,200.09ZM158.43,187.58l-27.84-77.1h-25L147.17,220h22.2l41.76-109.47h-25ZM666.49,177.1l37.85-37.54H674.15l-28.93,30.66V110.48H622.7V220h22.52V187l32.06,33h32.06ZM158,46.41v22a89.47,89.47,0,0,1,89.37,89.37h22A111.49,111.49,0,0,0,158,46.41Zm419.56,105.2V139.56h-21.9V220h22.52V178.19c0-12.19,7.66-18.92,18.14-18.92a31.37,31.37,0,0,1,10.32,1.88L609.88,140a38,38,0,0,0-11-1.56C589.55,138.47,580.79,142.38,577.51,151.61Zm-74.13-13.92c-25.18,0-41.6,18.3-41.6,42.22s16,41,41.13,41a44.74,44.74,0,0,0,33.78-14.55l-11.41-14.07a26.6,26.6,0,0,1-20,9.07c-11.57,0-18.77-6.72-20.18-14.39h54.11v-8.44C539.19,152.39,526.06,137.69,503.38,137.69Zm-18.77,33.15c1.72-9.07,8-14.7,17.21-14.7,9.85,0,15,6.41,15,14.7ZM442.7,200.72c-5.31,0-9.38-3.76-9.38-10.17V110.63H410.8V192.9c0,18.29,11.73,28,26.27,28a40,40,0,0,0,18.46-5l-5.32-17.36A15.87,15.87,0,0,1,442.7,200.72Z"\n                transform="translate(-105.57 -46.41)"\n              />\n            </svg>\n          </div>\n          '.concat(s.a.t("widget_main_button.button_text"),'\n          <div class="vclerk-pw-button-btn">\n            ').concat(s.a.t("widget_main_button.button_btn_text"),'\n          </div>\n        </div>\n        <div class="vclerk-pw-button-icon">\n          <svg id="Layer_1" width="92" height="92" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 866.1 805.31">\n          <defs><style>.cls-1{fill:#f4f3f2;}.cls-2{fill:#000c44;}.cls-3{fill:#fff;}</style></defs>\n          <rect class="cls-2" x="195.44" y="296.81" width="379.17" height="226.1" rx="34.69"/><path class="cls-2" d="M1242.14,450.52,1179.67,486a33.32,33.32,0,0,0-17,28.92v70.91a33.32,33.32,0,0,0,17,28.92l62.47,35.46a34.37,34.37,0,0,0,17,4.47V446.05A34.37,34.37,0,0,0,1242.14,450.52Z" transform="translate(-571.09 -139.19)"/><path class="cls-3" d="M929.1,570.85c-8.8,0-14.42-6.91-14.42-15.24s5.28-15.1,14.15-15.1a13.77,13.77,0,0,1,12.45,7l8.06-5.55c-4.2-7-11-11-20-11-15.64,0-24.71,12-24.71,25.39,0,12.66,8.12,24.17,23.42,24.17,10.84,0,18.89-5.69,22.82-15.44l-8.6-3.59C940,567.46,935.12,570.85,929.1,570.85ZM848,565.43l-12-33.38H825.12l18,47.39h9.61l18.08-47.39H860Zm220-4.54,16.39-16.25h-13.07l-12.52,13.27V532.05H1049v47.39h9.75V565.16l13.87,14.28h13.88ZM847.8,504.31v9.52a38.74,38.74,0,0,1,38.69,38.69H896A48.27,48.27,0,0,0,847.8,504.31Zm181.63,45.55v-5.22H1020v34.8h9.75V561.37c0-5.28,3.32-8.2,7.85-8.2a13.34,13.34,0,0,1,4.47.82l1.42-9.14a16.11,16.11,0,0,0-4.73-.68C1034.64,544.17,1030.85,545.86,1029.43,549.86Zm-32.09-6c-10.9,0-18,7.92-18,18.28s6.91,17.74,17.81,17.74a19.34,19.34,0,0,0,14.62-6.3l-4.94-6.09a11.53,11.53,0,0,1-8.67,3.93c-5,0-8.12-2.91-8.73-6.23h23.42V561.5C1012.84,550.19,1007.16,543.83,997.34,543.83Zm-8.12,14.35c.74-3.92,3.45-6.36,7.44-6.36,4.27,0,6.5,2.78,6.5,6.36Zm-18.15,12.94c-2.3,0-4.06-1.63-4.06-4.4v-34.6h-9.75v35.61c0,7.92,5.08,12.12,11.37,12.12a17.2,17.2,0,0,0,8-2.17l-2.3-7.51A6.81,6.81,0,0,1,971.07,571.12Z" transform="translate(-571.09 -139.19)"/></svg>\n        </div>\n      </div>\n      \n    '),this._buttonText=e}},{key:"injectButtonText",value:function(){this.ejectButtonSpinner(),this.buttonBase.appendChild(this.buttonText),this._isButtonTextInjected=!0,this._isButtonBaseInjected||this.injectButtonBase()}},{key:"ejectButtonText",value:function(){this._isButtonTextInjected&&(this.buttonBase.removeChild(this.buttonText),this._isButtonTextInjected=!1)}},{key:"setButtonSpinner",value:function(){var e=document.createElement("div");return e.setAttribute("class","vclerk-spinner"),this._buttonSpinner=e,this._buttonSpinner}},{key:"injectButtonSpinner",value:function(){this.ejectButtonText(),this.buttonBase.appendChild(this.buttonSpinner),this._isButtonSpinnerInjected=!0,this._isButtonBaseInjected||this.injectButtonBase()}},{key:"ejectButtonSpinner",value:function(){this._isButtonSpinnerInjected&&(this.buttonBase.removeChild(this.buttonSpinner),this._isButtonSpinnerInjected=!1)}},{key:"onClose",value:function(){var e=this;this.isOpen=!1,this.container.classList.remove("vclerk-pw-container-open"),!0!==this.config.hideDefaultLauncher?(this.injectButtonText(),this.getConfigPromise(!0).then((function(){e.isAvailable||e.container.classList.add("vclerk-pw-container-hide")}))):this.container.classList.add("vclerk-pw-container-hide")}},{key:"openWidget",value:function(e){var t=this;this.getConfigPromise().then((function(){t.container.classList.contains("vclerk-pw-container-hide")&&t.container.classList.remove("vclerk-pw-container-hide"),t.injectButtonSpinner(),t.chunkPromise.then((function(n){return t.ejectButtonSpinner(),t.container.classList.add("vclerk-pw-container-open"),t.isOpen=!0,n.init(t._reactAttachElement,f(f({},t.config),e),t.theme,i.onClose.bind(t))}))}))}},{key:"displayIfAvailable",value:function(){var e=this;this.getConfigPromise(!0).then((function(){!0===e.isAvailable?e.injectButtonText():e._container&&e.container.classList.add("vclerk-pw-container-hide")}))}},{key:"intervalCheckIfAvailable",value:function(){var e=this;setInterval((function(){e.isOpen||(!0!==e.config.hideDefaultLauncher&&!0!==e.config.hide?e.displayIfAvailable():e.getConfigPromise(!0))}),1e3*Math.ceil(this.config.intervalCheckAvailable||1)*60)}},{key:"getConfigPromise",value:function(e){var t=this;if(this._configPromise&&!e)return this._configPromise;var n,i,o,a=(n="GET",i="".concat("https://videoclerk-backend-dev.herokuapp.com","/video/").concat(this.config.queue,"/available"),o=this.config.apiKey,new Promise((function(e,t){var r=new XMLHttpRequest;r.open(n,i),r.withCredentials=!0,r.setRequestHeader("X-VideoClerk-API-Key",o),r.onload=function(){e(r.response)},r.onerror=function(){t(r.response)},r.send()}))),u=s.a.init(this.config.language,this.config.languageFallback);return this._configPromise=Promise.all([a,u]).then((function(e){var n=c(e,1)[0],i=JSON.parse(n);t.config=f(f({},t.config),i.config),t.isAvailable=i.show;var o=new CustomEvent(r.events.available.name,{detail:t.isAvailable});r.dispatchEvent(o)})),this._configPromise}},{key:"container",get:function(){return this._container||this.setContainer(),this._container}},{key:"buttonBase",get:function(){return this._buttonBase||this.setButtonBase(),this._buttonBase}},{key:"buttonText",get:function(){return this._buttonText||this.setButtonText(),this._buttonText}},{key:"buttonSpinner",get:function(){return this._buttonSpinner||this.setButtonSpinner(),this._buttonSpinner}},{key:"chunkPromise",get:function(){return this._webpackChunkPromise||(this._webpackChunkPromise=new Promise((function(e,t){Promise.all([n.e(2),n.e(4),n.e(3)]).then(n.bind(null,10)).then(e).catch((function(e){console.error(new Error("Failed to fetch vclerk main bundle."),e),t(e)}))}))),this._webpackChunkPromise}}])&&v(t.prototype,o),a&&v(t,a),e}(),y=new URL(document.currentScript.src).searchParams,w=(g=y,function(e){if(Array.isArray(e))return l(e)}(g)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(g)||u(g)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce((function(e,t){var n=c(t,2),i=n[0],r=n[1];return e[i]=r,e}),{});function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0;if(a.a.test(navigator.userAgent))if(navigator.mediaDevices){if((r=document.createTextNode(null)).events=b,e||(e=document.createElement("div"),document.body.appendChild(e)),e.classList.add("videoclerk-widget"),e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.style.left="-9999px",e.style.all="initial",!(e instanceof HTMLElement))return new Error("Selected element is not an HTML element!");var s=e,c=f(f({},w),t),u=c.schema,l=new Promise((function(e){u&&e(n(6)("./".concat(u)).then((function(e){return e.config}))),e()}));l.then((function(e){var n=f(f(f({},w),t),e);new m(s,n,o),!0!==n.hide&&!0!==n.hideDefaultLauncher&&i.displayIfAvailable()}))}else"DEV"===VCLERK_ENV&&console.error("navigator.mediaDevices is empty, https issue?");else"DEV"===VCLERK_ENV&&console.error("unsupported browser")}if(w.autoInit){var _="DOMContentLoaded";["load","DOMContentLoaded","instant"].includes(w.autoInit)&&(_=w.autoInit),"instant"===_?k():document.addEventListener(_,(function(){k()}))}function j(e,t){r?(b[e].onAttach&&b[e].onAttach(),r.addEventListener(e,(function(e){return t(e.detail)}))):console.error("VClerk is not initialized")}function O(e){i.openWidget(f(f({},i.config),e))}},function(e,t,n){var i=new URL(document.currentScript.src),r="".concat(i.href.substring(0,i.href.lastIndexOf("/")+1));n.p=r+n.p},function(e,t,n){var i={"./en.json":[8,6],"./no.json":[9,7]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(i)},r.id=5,e.exports=r},function(e,t,n){var i={"./shopify":[2,0],"./shopify.js":[2,0]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(i)},r.id=6,e.exports=r}])}));