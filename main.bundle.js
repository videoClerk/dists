!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("VClerkWidget",[],n):"object"==typeof exports?exports.VClerkWidget=n():e.VClerkWidget=n()}(window,(function(){return function(e){function n(n){for(var t,o,i=n[0],a=n[1],d=0,c=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&c.push(r[o][0]),r[o]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);for(l&&l(n);c.length;)c.shift()()}var t={},r={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var i=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=i);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=function(e){return o.p+""+({1:"skylink",2:"vclerk-widget",3:"vendors~vclerk-widget"}[e]||e)+".chunk."+{1:"81d9b271fea6ab64836f",2:"089e77613a77802b697e",3:"ef9724c264d399500373"}[e]+".js"}(e);var l=new Error;a=function(n){d.onerror=d.onload=null,clearTimeout(c);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,t[1](l)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var i=window.webpackJsonpVClerkWidget=window.webpackJsonpVClerkWidget||[],a=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=a;return o(o.s=1)}([function(e,n){e.exports=/((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(12[_\.]2|12[_\.]([3-9]|\d{2,})|12[_\.]4|12[_\.]([5-9]|\d{2,})|(1[3-9]|[2-9]\d|\d{3,})[_\.]\d+|13[_\.]0|13[_\.]([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})[_\.]\d+)(?:[_\.]\d+)?)|(Opera\/.+Opera Mobi.+Version\/(46\.0|46\.([1-9]|\d{2,})|(4[7-9]|[5-9]\d|\d{3,})\.\d+))|(Opera\/(46\.0|46\.([1-9]|\d{2,})|(4[7-9]|[5-9]\d|\d{3,})\.\d+).+Opera Mobi)|(Opera Mobi.+Opera(?:\/|\s+)(46\.0|46\.([1-9]|\d{2,})|(4[7-9]|[5-9]\d|\d{3,})\.\d+))|(SamsungBrowser\/(10\.1|10\.([2-9]|\d{2,})|(1[1-9]|[2-9]\d|\d{3,})\.\d+))|(Edge\/(18(?:\.0)?|18(?:\.([1-9]|\d{2,}))?|(19|[2-9]\d|\d{3,})(?:\.\d+)?|79(?:\.0)?|79(?:\.([1-9]|\d{2,}))?|([8-9]\d|\d{3,})(?:\.\d+)?))|(HeadlessChrome((?:\/79\.0\.\d+)?|(?:\/79\.([1-9]|\d{2,})\.\d+)?|(?:\/([8-9]\d|\d{3,})\.\d+\.\d+)?))|((Chromium|Chrome)\/(79\.0|79\.([1-9]|\d{2,})|([8-9]\d|\d{3,})\.\d+)(?:\.\d+)?)|(Version\/(13\.0|13\.([1-9]|\d{2,})|(1[4-9]|[2-9]\d|\d{3,})\.\d+)(?:\.\d+)? Safari\/)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|72\.0|72\.([1-9]|\d{2,})|(7[3-9]|[8-9]\d|\d{3,})\.\d+)\.\d+)|(Firefox\/(68\.0|68\.([1-9]|\d{2,})|(69|[7-9]\d|\d{3,})\.\d+|72\.0|72\.([1-9]|\d{2,})|(7[3-9]|[8-9]\d|\d{3,})\.\d+)(pre|[ab]\d+[a-z]*)?)/},function(e,n,t){"use strict";t.r(n),t.d(n,"init",(function(){return u}));t(2);var r=t(0),o=t.n(r);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,d=e[Symbol.iterator]();!(r=(a=d.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==d.return||d.return()}finally{if(o)throw i}}return t}(e,n)||a(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){if(e){if("string"==typeof e)return d(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,n):void 0}}function d(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e,n,t,r){var o=new XMLHttpRequest;o.open(e,n),o.withCredentials=!0,o.setRequestHeader("X-VideoClerk-API-Key",t),o.onload=function(){r(null,o.response)},o.onerror=function(){r(o.response)},o.send()}var c,s=new URL(document.currentScript.src).searchParams,p=(c=s,function(e){if(Array.isArray(e))return d(e)}(c)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||a(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce((function(e,n){var t=i(n,2),r=t[0],o=t[1];return e[r]=o,e}),{});function u(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;if(o.a.test(navigator.userAgent)&&navigator.mediaDevices){if(n&&n.apiKey||(n.apiKey=p.apiKey),n&&n.queue||(n.queue=p.queue),e||((e=document.createElement("div")).classList.add("videoclerk-widget"),e.style.height="0px",e.style.width="0px",e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e)),!(e instanceof HTMLElement))return new Error("Selected element is not an HTML element!");var i=function(){var e=document.createElement("style");e.innerHTML='\n      @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=block");\n      .vclerk-pw-container {\n        position: fixed;\n        left: auto;\n        top: auto;\n        right: 40px;\n        bottom: 20px;\n        z-index: 1000;\n        background: transparent;\n        border-radius: 24px;\n        padding: 0;\n        flex-direction: column;\n        font-family: "Inter", Arial, Helvetica, sans-serif;\n        color: #0c0e1d;\n        font-weight: 300;\n        display: -ms-flexbox !important;\n        display: -webkit-flex !important;\n        display: flex !important;\n      }\n      .vclerk-pw-container * {\n        box-sizing: border-box;\n      }\n      .vclerk-pw-container .vclerk-pw-button-container {\n        display: -ms-flexbox;\n        /* IE 10 */\n        display: -webkit-flex;\n        /* Safari 6 */\n        display: flex;\n        /* Modern browsers */\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        position: absolute;\n        bottom: 4px;\n        right: 12px;\n        width: 140px;\n        height: 140px;\n        -webkit-box-shadow: 0px 0px 46px -7px rgba(0, 0, 0, 0.75);\n        -moz-box-shadow: 0px 0px 46px -7px rgba(0, 0, 0, 0.75);\n        box-shadow: 0px 0px 46px -7px rgba(0, 0, 0, 0.75);\n        background-color: #0c0e1d;\n        z-index: 1;\n        border-top-left-radius: 12px;\n        border-top-right-radius: 12px;\n        border-bottom-left-radius: 12px;\n      }\n\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button.vclerk-hide-button {\n        display: none;\n      }\n\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button {\n        display: -ms-flexbox;\n        /* IE 10 */\n        display: -webkit-flex;\n        /* Safari 6 */\n        display: flex;\n        /* Modern browsers */\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        \n      }\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button:hover {\n        cursor: pointer;\n      }\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button .vclerk-pw-button-descr {\n        max-width: 100px;\n        text-align: center;\n        color: #f8f8f8;\n        font-size: 12px;\n      }\n      .vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button .vclerk-pw-button-action {\n        display: -ms-flexbox;\n        /* IE 10 */\n        display: -webkit-flex;\n        /* Safari 6 */\n        display: flex;\n        /* Modern browsers */\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        margin-top: 12px;\n        font-size: 12px;\n        width: 100px;\n        color: #beaeff;\n        text-transform: uppercase;\n      }\n\n      .vclerk-spinner {\n        border: 2px solid #f3f3f3;\n        border-top: 2px solid #beaeff;\n        border-radius: 50%;\n        width: 24px;\n        height: 24px;\n        animation: spin 800ms linear infinite;\n      }\n      \n      @keyframes spin {\n        0% {\n          transform: rotate(0deg);\n        }\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    ',document.getElementsByTagName("head")[0].appendChild(e)},a=e,d=function(){a.innerHTML='<div id="vclerk-pw-container" class="vclerk-pw-container" style="display: none;"><div id="vclerk-pw-wrapper" class="vclerk-pw-container-wrapper"></div></div>'},c=document.createElement("div");c.setAttribute("class","vclerk-spinner");var s=function e(){var o=document.createElement("div");o.setAttribute("class","vclerk-pw-button-container"),a.getElementsByClassName("vclerk-pw-container")[0].appendChild(o);var i=document.createElement("div");i.setAttribute("class","vclerk-pw-button"),i.addEventListener("click",(function(){o&&(o.appendChild(c),o.getElementsByClassName("vclerk-pw-button")[0].classList.add("vclerk-hide-button"));var i=function(){return e()};Promise.all([t.e(1),t.e(3),t.e(2)]).then(t.bind(null,3)).then((function(e){return o&&a.getElementsByClassName("vclerk-pw-container")[0].removeChild(o),e.init(document.getElementById("vclerk-pw-wrapper"),n,r,i)})).catch((function(){return console.error(new Error("Failed to fetch vclerk main bundle."))}))})),i.innerHTML='\n      <div class="vclerk-pw-button-icon">\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="72"\n          height="36"\n          viewBox="0 0 603.78 176.05"\n        >\n          <path\n            fill="#beaeff"\n            d="M345.75,200.09c-20.33,0-33.32-16-33.32-35.19,0-19.08,12.2-34.87,32.69-34.87,12.51,0,22.83,5.78,28.78,16.26l18.61-12.82c-9.7-16.27-25.34-25.5-46.29-25.5-36.13,0-57.09,27.69-57.09,58.65,0,29.25,18.77,55.83,54.11,55.83,25,0,43.64-13.13,52.71-35.65l-19.86-8.29C370.93,192.27,359.67,200.09,345.75,200.09ZM158.43,187.58l-27.84-77.1h-25L147.17,220h22.2l41.76-109.47h-25ZM666.49,177.1l37.85-37.54H674.15l-28.93,30.66V110.48H622.7V220h22.52V187l32.06,33h32.06ZM158,46.41v22a89.47,89.47,0,0,1,89.37,89.37h22A111.49,111.49,0,0,0,158,46.41Zm419.56,105.2V139.56h-21.9V220h22.52V178.19c0-12.19,7.66-18.92,18.14-18.92a31.37,31.37,0,0,1,10.32,1.88L609.88,140a38,38,0,0,0-11-1.56C589.55,138.47,580.79,142.38,577.51,151.61Zm-74.13-13.92c-25.18,0-41.6,18.3-41.6,42.22s16,41,41.13,41a44.74,44.74,0,0,0,33.78-14.55l-11.41-14.07a26.6,26.6,0,0,1-20,9.07c-11.57,0-18.77-6.72-20.18-14.39h54.11v-8.44C539.19,152.39,526.06,137.69,503.38,137.69Zm-18.77,33.15c1.72-9.07,8-14.7,17.21-14.7,9.85,0,15,6.41,15,14.7ZM442.7,200.72c-5.31,0-9.38-3.76-9.38-10.17V110.63H410.8V192.9c0,18.29,11.73,28,26.27,28a40,40,0,0,0,18.46-5l-5.32-17.36A15.87,15.87,0,0,1,442.7,200.72Z"\n            transform="translate(-105.57 -46.41)"\n          />\n        </svg>\n      </div>\n      <div class="vclerk-pw-button-descr">\n        Få hjelp av en Video Ekspeditør!\n      </div>\n      <div class="vclerk-pw-button-action">\n        Trykk her\n        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="#beaeff" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\n      </div>\n  ',a.getElementsByClassName("vclerk-pw-button-container")[0].appendChild(i)},u=function(){n.hideWidget&&"undefined"!==n.hideWidget||l("GET","".concat("https://videoclerk-backend-dev.herokuapp.com/video","/").concat(n.queue,"/available"),n.apiKey,(function(e,n){e||!0===JSON.parse(n).show&&(i(),d(),s())}))};window.onload=function(){u()}}}},function(e,n,t){var r=new URL(document.currentScript.src),o="".concat(r.href.substring(0,r.href.lastIndexOf("/")+1));t.p=o+t.p}])}));
//# sourceMappingURL=main.bundle.js.map