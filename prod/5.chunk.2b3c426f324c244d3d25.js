(window.webpackJsonpVClerkWidget=window.webpackJsonpVClerkWidget||[]).push([[5],{16:function(n,t,e){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function A(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},o=[],r=0;r<n.length;r++){var i=n[r],c=t.base?i[0]+t.base:i[0],f=e[c]||0,s="".concat(c," ").concat(f);e[c]=f+1;var l=A(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:s,updater:B(p,t),references:1}),o.push(s)}return o}function f(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function p(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function C(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var u=null,d=0;function B(n,t){var e,o,r;if(t.singleton){var i=d++;e=u||(u=f(t)),o=p.bind(null,e,i,!1),r=p.bind(null,e,i,!0)}else e=f(t),o=C.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=A(e[o]);a[r].references--}for(var i=c(n,t),f=0;f<e.length;f++){var s=A(e[f]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}e=i}}}},17:function(n,t,e){"use strict";function o(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var e=[],o=!0,r=!1,i=void 0;try{for(var a,A=n[Symbol.iterator]();!(o=(a=A.next()).done)&&(e.push(a.value),!t||e.length!==t);o=!0);}catch(n){r=!0,i=n}finally{try{o||null==A.return||A.return()}finally{if(r)throw i}}return e}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}n.exports=function(n){var t=o(n,4),e=t[1],r=t[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(a," */"),c=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(c).concat([A]).join("\n")}return[e].join("\n")}},18:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var A=0;A<n.length;A++){var c=[].concat(n[A]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},7:function(n,t,e){"use strict";e.r(t);var o=e(16),r=e.n(o),i=e(71),a={injectType:"singletonStyleTag",insert:"head",singleton:!0};r()(i.a,a);t.default=i.a.locals||{}},71:function(n,t,e){"use strict";var o=e(17),r=e.n(o),i=e(18),a=e.n(i),A=e(72),c=e.n(A),f=e(73),s=e(74),l=e(75),p=e(76),C=e(77),u=e(78),d=e(79),B=e(80),w=e(81),b=e(82),m=a()(r.a),v=c()(f.a),x=c()(s.a),h=c()(l.a),g=c()(p.a),k=c()(C.a),y=c()(u.a),E=c()(d.a),S=c()(B.a),U=c()(w.a),T=c()(b.a);m.push([n.i,'@namespace vclerk-svg "http://www.w3.org/2000/svg";@font-face{font-family:"Avenir";src:url('+v+') format("woff2"),url('+x+') format("woff");font-weight:normal}@font-face{font-family:"Avenir";src:url('+h+') format("woff2"),url('+g+') format("woff");font-weight:bold}@font-face{font-family:"Avenir";src:url('+h+') format("woff2"),url('+g+') format("woff");font-weight:500}@font-face{font-family:"Avenir";src:url('+k+') format("woff2"),url('+y+') format("woff");font-weight:400}@font-face{font-family:"Avenir";src:url('+E+') format("woff2"),url('+S+') format("woff");font-weight:300}@font-face{font-family:"Avenir";src:url('+U+') format("woff2"),url('+T+') format("woff");font-weight:100}.vclerk-pw-container{position:fixed;left:auto;top:auto;right:5%;bottom:5%;z-index:6000001;background:transparent;border-radius:24px;padding:0;flex-direction:column;font-family:"Avenir", "Inter", Arial, Helvetica, sans-serif;color:#0c0e1d;font-weight:300;display:flex !important}.vclerk-pw-container.vclerk-pw-container-hide{display:none !important}.vclerk-pw-container *:not(vclerk-svg|*){box-sizing:border-box;all:revert;-webkit-text-fill-color:initial;-webkit-text-emphasis-color:initial;-webkit-text-stroke-color:initial}.vclerk-pw-container .vclerk-pw-button-container{display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;bottom:0;right:0;width:92px;height:92px;background-color:#f4f3f2;border-radius:50%;z-index:1;color:#0c0e1d;font-weight:300;cursor:pointer;box-shadow:0px 1px 18px 1px rgba(0,0,0,0.48);z-index:2}.vclerk-pw-container .vclerk-pw-button-container:hover{animation:animate-button-container 500ms forwards;animation-delay:500ms}.vclerk-pw-container .vclerk-pw-button-container:hover .vclerk-pw-button-wrapper::after{opacity:0;transition-delay:500ms}.vclerk-pw-container .vclerk-pw-button-container:hover .vclerk-pw-button-wrapper .vclerk-pw-button-icon{animation:animate-button-out 250ms forwards;animation-delay:500ms}.vclerk-pw-container .vclerk-pw-button-container:hover .vclerk-pw-button-wrapper .vclerk-pw-button-text{animation:animate-button-in 250ms forwards;animation-delay:1000ms}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button-wrapper{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button-wrapper .vclerk-pw-button-text{width:0;height:0;opacity:0;visibility:hidden;pointer-events:none;letter-spacing:1px;font-size:15px;line-height:22px;text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button-wrapper .vclerk-pw-button-text .vclerk-pw-button-logo{background-color:#0c0e1d;position:absolute;left:-66px;top:108px;padding:2px 6px;border-top-left-radius:6px;border-top-right-radius:6px;transform:rotate(-90deg)}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button-wrapper .vclerk-pw-button-text .vclerk-pw-button-btn{padding:8px 10px;background-color:#080a1e;color:#f4f3f2;border-radius:12px;margin-top:24px}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button-wrapper:after{background-color:#f2f2f2;box-shadow:-6px 6px 6px 0 rgba(178,178,178,0.4);content:"\\00a0";display:block;height:20px;left:8px;position:absolute;transform:rotate(-5deg);top:70px;width:20px}.vclerk-pw-container-open .vclerk-pw-button-container{display:none}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button{display:flex;flex-direction:column;justify-content:center;align-items:center}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button:hover{cursor:pointer}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button .vclerk-pw-button-descr{max-width:105px;text-align:center;color:#f8f8f8;font-size:12px}.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button .vclerk-pw-button-action{display:flex;flex-direction:row;justify-content:center;align-items:center;margin-top:12px;font-size:12px;width:120px;color:#beaeff;text-transform:uppercase;padding-left:13px}.vclerk-spinner{border:2px solid #f3f3f3;border-top:2px solid #beaeff;border-radius:50%;width:24px;height:24px;animation:spin 800ms linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes animate-button-out{0%{opacity:1;width:98px;height:102px}80%{opacity:0;pointer-events:none;width:98px;height:102px}100%{width:0;height:0;opacity:0;visibility:hidden;pointer-events:none}}@keyframes animate-button-in{0%{width:0;height:0;opacity:0;visibility:hidden;pointer-events:none}20%{width:200px;height:160px;opacity:0;visibility:hidden;pointer-events:none}100%{width:200px;height:160px;opacity:1;visibility:visible;pointer-events:none}}@keyframes animate-button-container{0%{width:92px;height:92px;border-radius:50%}100%{width:260px;height:232px;border-radius:24px}}\n',"",{version:3,sources:["webpack://./init.style.scss"],names:[],mappings:"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",sourcesContent:['@namespace vclerk-svg "http://www.w3.org/2000/svg";\n\n@font-face {\n  font-family: "Avenir";\n  src: url("/src/assets/fonts/AvenirNextLTPro-Regular/font.woff2")\n      format("woff2"),\n    url("/src/assets/fonts/AvenirNextLTPro-Regular/font.woff") format("woff");\n  font-weight: normal;\n}\n\n@font-face {\n  font-family: "Avenir";\n  src: url("/src/assets/fonts/AvenirNextLTPro-Bold/font.woff2") format("woff2"),\n    url("/src/assets/fonts/AvenirNextLTPro-Bold/font.woff") format("woff");\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: "Avenir";\n  src: url("/src/assets/fonts/AvenirNextLTPro-Bold/font.woff2") format("woff2"),\n    url("/src/assets/fonts/AvenirNextLTPro-Bold/font.woff") format("woff");\n  font-weight: 500;\n}\n\n@font-face {\n  font-family: "Avenir";\n  src: url("/src/assets/fonts/AvenirNextLTPro-Medium/font.woff2")\n      format("woff2"),\n    url("/src/assets/fonts/AvenirNextLTPro-Medium/font.woff") format("woff");\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: "Avenir";\n  src: url("/src/assets/fonts/AvenirNextLTPro-Light/font.woff2") format("woff2"),\n    url("/src/assets/fonts/AvenirNextLTPro-Light/font.woff") format("woff");\n  font-weight: 300;\n}\n\n@font-face {\n  font-family: "Avenir";\n  src: url("/src/assets/fonts/AvenirNextLTPro-Thin/font.woff2") format("woff2"),\n    url("/src/assets/fonts/AvenirNextLTPro-Thin/font.woff") format("woff");\n  font-weight: 100;\n}\n\n.vclerk-pw-container {\n  position: fixed;\n  left: auto;\n  top: auto;\n  right: 5%;\n  bottom: 5%;\n  z-index: 6000001;\n  background: transparent;\n  border-radius: 24px;\n  padding: 0;\n  flex-direction: column;\n  font-family: "Avenir", "Inter", Arial, Helvetica, sans-serif;\n  color: #0c0e1d;\n  font-weight: 300;\n  display: flex !important;\n\n  &.vclerk-pw-container-hide {\n    display: none !important;\n  }\n\n  *:not(vclerk-svg|*) {\n    box-sizing: border-box;\n    all: revert;\n    -webkit-text-fill-color: initial;\n    -webkit-text-emphasis-color: initial;\n    -webkit-text-stroke-color: initial;\n  }\n\n  .vclerk-pw-button-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 92px;\n    height: 92px;\n    background-color: #f4f3f2;\n    border-radius: 50%;\n    z-index: 1;\n    color: #0c0e1d;\n    font-weight: 300;\n    cursor: pointer;\n    -webkit-box-shadow: 0px 1px 18px 1px rgba(0, 0, 0, 0.48);\n    box-shadow: 0px 1px 18px 1px rgba(0, 0, 0, 0.48);\n    z-index: 2;\n\n    &:hover {\n      animation: animate-button-container 500ms forwards;\n      animation-delay: 500ms;\n\n      & .vclerk-pw-button-wrapper {\n        &::after {\n          opacity: 0;\n          transition-delay: 500ms;\n        }\n        & .vclerk-pw-button-icon {\n          animation: animate-button-out 250ms forwards;\n          animation-delay: 500ms;\n        }\n        & .vclerk-pw-button-text {\n          animation: animate-button-in 250ms forwards;\n          animation-delay: 1000ms;\n        }\n      }\n    }\n\n    & .vclerk-pw-button-wrapper {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      flex: 1;\n\n      & .vclerk-pw-button-text {\n        width: 0;\n        height: 0;\n        opacity: 0;\n        visibility: hidden;\n        pointer-events: none;\n        letter-spacing: 1px;\n        font-size: 15px;\n        line-height: 22px;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        position: relative;\n        & .vclerk-pw-button-logo {\n          background-color: #0c0e1d;\n          position: absolute;\n          left: -66px;\n          top: 108px;\n          padding: 2px 6px;\n          border-top-left-radius: 6px;\n          border-top-right-radius: 6px;\n          transform: rotate(-90deg);\n        }\n        & .vclerk-pw-button-btn {\n          padding: 8px 10px;\n          background-color: #080a1e;\n          color: #f4f3f2;\n          border-radius: 12px;\n          margin-top: 24px;\n        }\n      }\n\n      &:after {\n        background-color: #f2f2f2;\n        -webkit-box-shadow: -6px 6px 6px 0 rgba(178, 178, 178, 0.4);\n        box-shadow: -6px 6px 6px 0 rgba(178, 178, 178, 0.4);\n        content: "\\00a0";\n        display: block;\n        height: 20px;\n        left: 8px;\n        position: absolute;\n        -webkit-transform: rotate(-5deg);\n        -moz-transform: rotate(-5deg);\n        -o-transform: rotate(-5deg);\n        transform: rotate(-5deg);\n        top: 70px;\n        width: 20px;\n      }\n    }\n  }\n}\n\n.vclerk-pw-container-open .vclerk-pw-button-container {\n  display: none;\n}\n\n.vclerk-pw-container .vclerk-pw-button-container .vclerk-pw-button {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  & .vclerk-pw-button-descr {\n    max-width: 105px;\n    text-align: center;\n    color: #f8f8f8;\n    font-size: 12px;\n  }\n\n  & .vclerk-pw-button-action {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    margin-top: 12px;\n    font-size: 12px;\n    width: 120px;\n    color: #beaeff;\n    text-transform: uppercase;\n    padding-left: 13px;\n  }\n}\n\n.vclerk-spinner {\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #beaeff;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  animation: spin 800ms linear infinite;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes animate-button-out {\n  0% {\n    opacity: 1;\n    width: 98px;\n    height: 102px;\n  }\n  80% {\n    opacity: 0;\n    pointer-events: none;\n    width: 98px;\n    height: 102px;\n  }\n  100% {\n    width: 0;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n  }\n}\n\n@keyframes animate-button-in {\n  0% {\n    width: 0;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n  }\n  20% {\n    width: 200px;\n    height: 160px;\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n  }\n  100% {\n    width: 200px;\n    height: 160px;\n    opacity: 1;\n    visibility: visible;\n    pointer-events: none;\n  }\n}\n\n@keyframes animate-button-container {\n  0% {\n    width: 92px;\n    height: 92px;\n    border-radius: 50%;\n  }\n  100% {\n    width: 260px;\n    height: 232px;\n    border-radius: 24px;\n  }\n}\n'],sourceRoot:""}]),t.a=m},72:function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},73:function(n,t,e){"use strict";t.a=e.p+"7b5ad4628253c52b535b4d7fa1b43782.woff2"},74:function(n,t,e){"use strict";t.a=e.p+"bb62132b629c81549be6e779151483ad.woff"},75:function(n,t,e){"use strict";t.a=e.p+"c946900ccb3435fef92dea400dd35972.woff2"},76:function(n,t,e){"use strict";t.a=e.p+"82cdb4449851e89f2b0308729ad97a74.woff"},77:function(n,t,e){"use strict";t.a=e.p+"ef1084ec7db93ff6ebd0c94fcb8f6ab0.woff2"},78:function(n,t,e){"use strict";t.a=e.p+"0dba095ff1ef921af2907a57988274ec.woff"},79:function(n,t,e){"use strict";t.a=e.p+"341671fa4dd8b13b69090497fae314ee.woff2"},80:function(n,t,e){"use strict";t.a=e.p+"e7bb68153c81bc844fbce5324a292b7c.woff"},81:function(n,t,e){"use strict";t.a=e.p+"59308ed387c680251c7f3869b9f3efe3.woff2"},82:function(n,t,e){"use strict";t.a=e.p+"f4c3a6fddde386170ffd93fa437ad44f.woff"}}]);