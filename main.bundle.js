!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("VClerkWidget",[],n):"object"==typeof exports?exports.VClerkWidget=n():e.VClerkWidget=n()}(window,(function(){return function(e){function n(n){for(var t,o,i=n[0],a=n[1],c=0,s=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&s.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(l&&l(n);s.length;)s.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(e){return o.p+""+({1:"skylink",2:"vclerk-widget",3:"vendors~vclerk-widget"}[e]||e)+".chunk."+{1:"d9026ec723846c8a9484",2:"319415116387e622061f",3:"1d13dd2938d364020831"}[e]+".js"}(e);var l=new Error;a=function(n){c.onerror=c.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,t[1](l)}r[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpVClerkWidget=window.webpackJsonpVClerkWidget||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var c=0;c<i.length;c++)n(i[c]);var l=a;return o(o.s=2)}([function(e,n,t){"use strict";function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c,l,s,u,d=(c=t(4),l=c.keys(),s=l.map(c),l.reduce((function(e,n,t){return e[n.replace(/^\.\//,"")]=s[t],e}),{})),p=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,r;return n=e,r=[{key:"getBrowserLanguages",value:function(){var e,n,t=window.navigator,r=["language","browserLanguage","systemLanguage","userLanguage"],o=[];if(Array.isArray(t.languages))for(n=0;n<t.languages.length;n+=1)(e=t.languages[n])&&e.length&&o.push(e);for(n=0;n<r.length;n+=1)(e=t[r[n]])&&e.length&&o.push(e);return o}},{key:"init",value:function(n,t){var r=o({},d.en);return t&&(t.length>2&&(r=o(o({},r),d[t.substring(0,2)])),r=o(o({},r),d[t])),n?(n.length>2&&(r=o(o({},r),d[n.substring(0,2)])),r=o(o({},r),d[n])):e.getBrowserLanguages().reverse().forEach((function(e){e.length>2&&(r=o(o({},r),d[e.substring(0,2)])),r=o(o({},r),d[e])})),u=r,r}},{key:"t",value:function(e){if(!u)throw new Error("i18n has not been initialized");return e.split(".").reduce((function(e,n){return(null==e?void 0:e[n])||null}),u)}}],(t=null)&&a(n.prototype,t),r&&a(n,r),e}();n.a=p},function(e,n){e.exports=/((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(13[_\.]3|13[_\.]([4-9]|\d{2,})|13[_\.]7|13[_\.]([8-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_\.]\d+|14[_\.]0|14[_\.]([1-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})[_\.]\d+)(?:[_\.]\d+)?)|(Opera\/.+Opera Mobi.+Version\/(59\.0|59\.([1-9]|\d{2,})|([6-9]\d|\d{3,})\.\d+))|(Opera\/(59\.0|59\.([1-9]|\d{2,})|([6-9]\d|\d{3,})\.\d+).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(59\.0|59\.([1-9]|\d{2,})|([6-9]\d|\d{3,})\.\d+))|(SamsungBrowser\/(11\.1|11\.([2-9]|\d{2,})|(1[2-9]|[2-9]\d|\d{3,})\.\d+|12\.0|12\.([1-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})\.\d+))|(Edge\/(84(?:\.0)?|84(?:\.([1-9]|\d{2,}))?|(8[5-9]|9\d|\d{3,})(?:\.\d+)?))|((Chromium|Chrome)\/(84\.0|84\.([1-9]|\d{2,})|(8[5-9]|9\d|\d{3,})\.\d+)(?:\.\d+)?)|(Version\/(13\.1|13\.([2-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+|14\.0|14\.([1-9]|\d{2,})|(1[5-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)? Safari\/)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|79\.0|79\.([1-9]|\d{2,})|([8-9]\d|\d{3,})\.\d+)\.\d+)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|79\.0|79\.([1-9]|\d{2,})|([8-9]\d|\d{3,})\.\d+)(pre|[ab]\d+[a-z]*)?)/},function(e,n,t){"use strict";t.r(n),t.d(n,"init",(function(){return b}));t(3);var r=t(1),o=t.n(r),i=t(0);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||u(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,n){if(e){if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n,t,r){var o=new XMLHttpRequest;o.open(e,n),o.withCredentials=!0,o.setRequestHeader("X-VideoClerk-API-Key",t),o.onload=function(){r(null,o.response)},o.onerror=function(){r(o.response)},o.send()}var f,g=new URL(document.currentScript.src).searchParams,v=(f=g,function(e){if(Array.isArray(e))return d(e)}(f)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(f)||u(f)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce((function(e,n){var t=s(n,2),r=t[0],o=t[1];return e[r]=o,e}),{});function b(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(o.a.test(navigator.userAgent)&&navigator.mediaDevices){if(i.a.init(n.language,n.languageFallback),n&&n.apiKey||(n.apiKey=v.apiKey),n&&n.queue||(n.queue=v.queue),e||((e=document.createElement("div")).classList.add("videoclerk-widget"),e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.style.left="-9999px",e.style.all="revert",document.body.appendChild(e)),!(e instanceof HTMLElement))return new Error("Selected element is not an HTML element!");var a=function(){var e=document.createElement("style");e.innerHTML='\n      @namespace vclerk-svg "http://www.w3.org/2000/svg";\n      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=block");\n      .vclerk-pw-container :not(vclerk-svg|*) {\n        all: revert;\n      }\n      .vclerk-pw-container {\n        position: fixed;\n        left: auto;\n        top: auto;\n        right: 40px;\n        bottom: 20px;\n        z-index: 6000001;\n        background: transparent;\n        border-radius: 24px;\n        padding: 0;\n        flex-direction: column;\n        display: -ms-flexbox !important;\n        display: -webkit-flex !important;\n        display: flex !important;\n      }\n      .vclerk-pw-container * {\n        box-sizing: border-box;\n      }\n      .vclerk-pw-container .vclerk-pw-button-container {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        bottom: 4px;\n        right: 12px;\n        width: 140px;\n        height: 140px;\n        -webkit-box-shadow: 0px 0px 46px -7px rgba(0, 0, 0, 0.75);\n        -moz-box-shadow: 0px 0px 46px -7px rgba(0, 0, 0, 0.75);\n        box-shadow: 0px 0px 46px -7px rgba(0, 0, 0, 0.75);\n        background-color: #0c0e1d;\n        z-index: 1;\n        border-top-left-radius: 12px;\n        border-top-right-radius: 12px;\n        border-bottom-left-radius: 12px;\n        font-family: "Inter", Arial, Helvetica, sans-serif;\n        color: #0c0e1d;\n        font-weight: 300;\n      }\n\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button.vclerk-hide-button {\n        display: none;\n      }\n\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        \n      }\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button:hover {\n        cursor: pointer;\n      }\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button .vclerk-pw-button-descr {\n        max-width: 105px;\n        text-align: center;\n        color: #f8f8f8;\n        font-size: 12px;\n      }\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button .vclerk-pw-button-action {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        margin-top: 12px;\n        font-size: 12px;\n        width: 120px;\n        color: #beaeff;\n        text-transform: uppercase;\n        padding-left: 13px;\n      }\n\n      .vclerk-spinner {\n        border: 2px solid #f3f3f3;\n        border-top: 2px solid #beaeff;\n        border-radius: 50%;\n        width: 24px;\n        height: 24px;\n        animation: spin 800ms linear infinite;\n      }\n      \n      @keyframes spin {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    ',document.getElementsByTagName("head")[0].appendChild(e)},l=e,s=function(){l.innerHTML='<div id="vclerk-pw-container" class="vclerk-pw-container" style="display: none;"><div id="vclerk-pw-wrapper" class="vclerk-pw-container-wrapper"></div></div>'},u=document.createElement("div");u.setAttribute("class","vclerk-spinner");var d=function e(o){var a=o.apiConfig,s=document.createElement("div");s.setAttribute("class","vclerk-pw-button-container"),l.getElementsByClassName("vclerk-pw-container")[0].appendChild(s);var d=document.createElement("div");d.setAttribute("class","vclerk-pw-button"),d.addEventListener("click",(function(){s&&(s.appendChild(u),s.getElementsByClassName("vclerk-pw-button")[0].classList.add("vclerk-hide-button"));var o=function(){p("GET","".concat("https://videoclerk-backend-dev.herokuapp.com","/video/").concat(n.queue,"/available"),n.apiKey,(function(n,t){n||(JSON.parse(t).show?e({apiConfig:a}):document.getElementById("vclerk-pw-container").remove())}))};Promise.all([t.e(1),t.e(3),t.e(2)]).then(t.bind(null,7)).then((function(e){return s&&l.getElementsByClassName("vclerk-pw-container")[0].removeChild(s),e.init(document.getElementById("vclerk-pw-wrapper"),c(c({},n),a),r,o)})).catch((function(){return console.error(new Error("Failed to fetch vclerk main bundle."))}))})),d.innerHTML='\n      <div class="vclerk-pw-button-icon">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="72"\n          height="36"\n          viewBox="0 0 603.78 176.05"\n        >\n          <path\n            fill="#beaeff"\n            d="M345.75,200.09c-20.33,0-33.32-16-33.32-35.19,0-19.08,12.2-34.87,32.69-34.87,12.51,0,22.83,5.78,28.78,16.26l18.61-12.82c-9.7-16.27-25.34-25.5-46.29-25.5-36.13,0-57.09,27.69-57.09,58.65,0,29.25,18.77,55.83,54.11,55.83,25,0,43.64-13.13,52.71-35.65l-19.86-8.29C370.93,192.27,359.67,200.09,345.75,200.09ZM158.43,187.58l-27.84-77.1h-25L147.17,220h22.2l41.76-109.47h-25ZM666.49,177.1l37.85-37.54H674.15l-28.93,30.66V110.48H622.7V220h22.52V187l32.06,33h32.06ZM158,46.41v22a89.47,89.47,0,0,1,89.37,89.37h22A111.49,111.49,0,0,0,158,46.41Zm419.56,105.2V139.56h-21.9V220h22.52V178.19c0-12.19,7.66-18.92,18.14-18.92a31.37,31.37,0,0,1,10.32,1.88L609.88,140a38,38,0,0,0-11-1.56C589.55,138.47,580.79,142.38,577.51,151.61Zm-74.13-13.92c-25.18,0-41.6,18.3-41.6,42.22s16,41,41.13,41a44.74,44.74,0,0,0,33.78-14.55l-11.41-14.07a26.6,26.6,0,0,1-20,9.07c-11.57,0-18.77-6.72-20.18-14.39h54.11v-8.44C539.19,152.39,526.06,137.69,503.38,137.69Zm-18.77,33.15c1.72-9.07,8-14.7,17.21-14.7,9.85,0,15,6.41,15,14.7ZM442.7,200.72c-5.31,0-9.38-3.76-9.38-10.17V110.63H410.8V192.9c0,18.29,11.73,28,26.27,28a40,40,0,0,0,18.46-5l-5.32-17.36A15.87,15.87,0,0,1,442.7,200.72Z"\n            transform="translate(-105.57 -46.41)"\n          />\n        </svg>\n      </div>\n      <div class="vclerk-pw-button-descr">\n        '.concat(i.a.t("widget_main_button.call_to_action"),'\n      </div>\n      <div class="vclerk-pw-button-action">\n        ').concat(i.a.t("widget_main_button.get_started"),'\n        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#beaeff" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n      </div>\n  '),l.getElementsByClassName("vclerk-pw-button-container")[0].appendChild(d)},f=function(){if(!n.hide||void 0===n.hide){p("GET","".concat("https://videoclerk-backend-dev.herokuapp.com","/video/").concat(n.queue,"/available"),n.apiKey,(function(e,n){if(!e){var t=JSON.parse(n);!0===t.show&&(a(),s(),d({apiConfig:t.config}))}}))}};f()}}},function(e,n,t){var r=new URL(document.currentScript.src),o="".concat(r.href.substring(0,r.href.lastIndexOf("/")+1));t.p=o+t.p},function(e,n,t){var r={"./en":5,"./no":6};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=4},function(e){e.exports=JSON.parse('{"widget_main_button":{"call_to_action":"Get face to face help with a VClerk.","get_started":"Get started"},"intro":{"heading":"In-store shopping, online.","description":"Talk to an expert face to face. They’ll help you find what you’re looking for and answer any questions you have.","terms":"I agree to the","terms_subject":"Privacy Policy","terms_link":"https://www.vclerk.com/privacy-policy","start_vclerk":"Start VClerk"},"error":{"something_went_wrong":"Something went wrong. Please try again.","close":"Close"},"queue":{"position_in_queue":"Your position in the queue","estimated_time":"Estimated wait time","abort":"Close","connecting":"Connecting","media_rejected":"VClerk requires access to your microphone and camera to work.","stand_by":"Stand by","connecting_to_clerk":"Connecting to a \\n VClerk."},"in_call":{"is_helping_you":"is helping you.","add_to_cart":"Add to Cart","choose_product":"Please select a product to view details.","hangup":"Hang up"},"outro":{"heading":"Thank you for shopping with VClerk!","subtitle":"Your items are in your cart, ready for checkout.","back":"Go back to conversation","quit":"Go to checkout"}}')},function(e){e.exports=JSON.parse('{"widget_main_button":{"call_to_action":"Få \\n hjelp av en Video Ekspeditør!","get_started":"Klikk her"},"intro":{"heading":"Det er bedre å handle på nett med VClerk!","description":"En videoekspeditør står klar til å hjelpe deg. Få samme service som i butikken - uten å reise dit.","terms":"Jeg godtar","terms_subject":"vilkårene for personvern","terms_link":"https://www.vclerk.com/privacy-policy","start_vclerk":"Start VClerk"},"error":{"something_went_wrong":"Obs, noe gikk galt – Vær så snill og prøv igjen.","close":"Lukk"},"queue":{"position_in_queue":"Din posisjon i køen","estimated_time":"Estimert ventetid","abort":"Avslutt","connecting":"Kobler til...","media_rejected":"VClerk krever tilgang til mikrofon og kamera for å fungere, men du kan slå dem av når som helst, også under samtalen.","stand_by":"Gjør deg klar","connecting_to_clerk":"Kobler til VClerk."},"in_call":{"is_helping_you":"hjelper deg","add_to_cart":"Legg i handlekurv","choose_product":"Velg et produkt.","hangup":"Avslutt"},"outro":{"heading":"Takk for at du handlet med VClerk!","subtitle":"Varene dine ligger i handlekurven, klar til betaling.","back":"Fortsett samtalen","quit":"Gå til betaling"}}')}])}));