!function(){return function e(t,n,r){function i(c,l){if(!n[c]){if(!t[c]){var u="function"==typeof require&&require;if(!l&&u)return u(c,!0);if(o)return o(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var s=n[c]={exports:{}};t[c][0].call(s.exports,function(e){return i(t[c][1][e]||e)},s,s.exports,e,t,n,r)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<r.length;c++)i(r[c]);return i}}()({1:[function(e,t,n){var r,i,o=t.exports={};function c(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:c}catch(e){r=c}try{i="function"==typeof clearTimeout?clearTimeout:l}catch(e){i=l}}();var a,s=[],f=!1,d=-1;function p(){f&&a&&(f=!1,a.length?s=a.concat(s):d=-1,s.length&&m())}function m(){if(!f){var e=u(p);f=!0;for(var t=s.length;t;){for(a=s,s=[];++d<t;)a&&a[d].run();d=-1,t=s.length}a=null,f=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===l||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||f||u(m)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],2:[function(e,t,n){(function(e){"use strict";var n=setTimeout;function r(e){return Boolean(e&&void 0!==e.length)}function i(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function c(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}l(t.promise,r)}else(1===e._state?l:u)(t.promise,e._value)})):e._deferreds.push(t)}function l(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof o)return e._state=3,e._value=t,void a(e);if("function"==typeof n)return void f((r=n,i=t,function(){r.apply(i,arguments)}),e)}e._state=1,e._value=t,a(e)}catch(t){u(e,t)}var r,i}function u(e,t){e._state=2,e._value=t,a(e)}function a(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,l(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(i);return c(this,new s(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},o.all=function(e){return new o(function(t,n){if(!r(e))return n(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);var o=i.length;function c(e,r){try{if(r&&("object"==typeof r||"function"==typeof r)){var l=r.then;if("function"==typeof l)return void l.call(r,function(t){c(e,t)},n)}i[e]=r,0==--o&&t(i)}catch(e){n(e)}}for(var l=0;l<i.length;l++)c(l,i[l])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(t){t(e)})},o.reject=function(e){return new o(function(t,n){n(e)})},o.race=function(e){return new o(function(t,n){if(!r(e))return n(new TypeError("Promise.race accepts an array"));for(var i=0,c=e.length;i<c;i++)o.resolve(e[i]).then(t,n)})},o._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){n(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.exports=o}).call(this,e("timers").setImmediate)},{timers:3}],3:[function(e,t,n){(function(t,r){var i=e("process/browser.js").nextTick,o=Function.prototype.apply,c=Array.prototype.slice,l={},u=0;function a(e,t){this._id=e,this._clearFn=t}n.setTimeout=function(){return new a(o.call(setTimeout,window,arguments),clearTimeout)},n.setInterval=function(){return new a(o.call(setInterval,window,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(window,this._id)},n.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n.setImmediate="function"==typeof t?t:function(e){var t=u++,r=!(arguments.length<2)&&c.call(arguments,1);return l[t]=!0,i(function(){l[t]&&(r?e.apply(null,r):e.call(null),n.clearImmediate(t))}),t},n.clearImmediate="function"==typeof r?r:function(e){delete l[e]}}).call(this,e("timers").setImmediate,e("timers").clearImmediate)},{"process/browser.js":1,timers:3}],4:[function(e,t,n){"use strict";var r,i=(r=e("promise-polyfill"))&&r.__esModule?r:{default:r};function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}!function(){window.VehicleConfiguration=function(e,t){var n={},r=t.devMode?"./src/":"https://static.ridestyler.net/widgets/vehicle-configuration/edge/",c=r+"html/vc.tpl",l=r+"css/vc.min.css",u=null,a=null,s=null,f=null;function d(){e?a=document.querySelector("#"+e):console.error("the provided container is not valid."),new i.default(function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4===t.readyState&&(200===t.status?(a.innerHTML=t.responseText,u=document.querySelector("#ridestyler-vehicle-config"),e()):console.error("Vehicle configuration template failed to load."))},t.open("GET",c,!0),t.send(null)}).then(function(){var e,n,r,i,o;t.includeStyles&&((e=document.createElement("link")).href=l,e.type="text/css",e.rel="stylesheet",document.head.appendChild(e)),n=u.querySelector("select[name=year]"),r=u.querySelector("select[name=make]"),i=u.querySelector("select[name=model]"),o=u.querySelector("#config-message"),t.configTitle&&(o.innerHTML=t.configTitle),p(),n.addEventListener("change",function(e){p(e)}),r.addEventListener("change",function(e){p(e)}),i.addEventListener("change",function(e){p(e)})})}function p(e){var t=e,r=null,c={Selection:[]};for(var l in t&&(t.target&&(t=t.target),t.parentElement.lastElementChild.classList.contains("active-loader")&&t.parentElement.lastElementChild.classList.remove("active-loader"),t.parentElement.nextElementSibling&&t.parentElement.nextElementSibling.querySelector(".select-loader")&&t.parentElement.nextElementSibling.querySelector(".select-loader").classList.add("active-loader"),r=t.getAttribute("name"),n[r]?(n[r]=t.value,function(e){for(var t=Object.keys(n).indexOf(e),r=0,i=Object.entries(n);r<i.length;r++){var c=o(i[r],2),l=c[0];c[1],Object.keys(n).indexOf(l)>t&&u.querySelector("select[name="+l+"]")&&(T(l),delete n[l])}u.querySelector("button")&&u.removeChild(u.querySelector("button"))}(r)):n[r]=t.value),n)""!=n[l]&&("tire"==l&&(f=n[l]),c.Selection.push(l+":"+n[l]));"tire"!=r?ridestyler.ajax.send({action:"Vehicle/Select",data:c}).then(function(e){e&&(n[e.Menu.Key]?e.BestConfiguration&&(s=e.BestConfiguration.Value,new i.default(function(e){ridestyler.ajax.send({action:"vehicle/gettireoptiondetails",data:{VehicleConfigurations:[s]}}).then(function(t){if(t&&t.Details.length){n.tire="";var r={Options:t.Details};m(r,!0)}else v();e()})})):(n[e.Menu.Key]="",m(e.Menu)))}):v()}function m(e,t){var n=null,r={};t?n=h(r={Key:"tire",Label:"Tire Option",Callback:p}):u.querySelector("select[name="+e.Key+"]")?n=u.querySelector("select[name="+e.Key+"]"):(r.Label=e.Title,r.Key=e.Key,r.Callback=p,n=h(r)),n.removeAttribute("disabled"),e.Options.length>0&&e.Options.forEach(function(r){var i=document.createElement("option");t?(i.value=r.TireOptionID,i.innerHTML=r.Front.Description,n.appendChild(i)):(i.value=r.Value,i.innerHTML=r.Label,n.appendChild(i)),1==e.Options.length&&i.setAttribute("selected",!0)}),n.nextElementSibling.classList.remove("active-loader"),-1==n.value.indexOf("Select")&&p(n)}function h(e){var t=document.createElement("div"),n=document.createElement("select"),r=document.createElement("label"),i=document.createElement("option"),o=document.createElement("div");return o.classList.add("active-loader"),o.classList.add("select-loader"),t.classList.add("config-select"),i.innerHTML="Select a "+e.Key,r.innerHTML=e.Label,n.setAttribute("name",e.Key),n.addEventListener("change",function(t){e.Callback(t)}),n.appendChild(i),t.appendChild(r),t.appendChild(n),t.appendChild(o),u.appendChild(t),n}function v(){var e="http://app.ridestyler.net/showcase?";if(!t.apiKey)return new i.default(function(t){new i.default(function(e){ridestyler.ajax.send({action:"ApiAccessKey/GetSharedKey"}).then(function(t){t&&e(t.Key)})}).then(function(n){e+=n+"#",s&&(e+="vc="+s),f&&(e+="&to="+f),y(e),t()})});e+=t.apiKey+"#",s&&(e+="vc="+s),f&&(e+="&to="+f),y(e)}function y(e){var n=document.createElement("button");t.buttonText?n.innerHTML=t.buttonText:n.innerHTML="See Wheels",t.buttonClasses&&t.buttonClasses.map(function(e){return n.classList.add(e)}),n.addEventListener("click",function(){window.open(e)}),u.appendChild(n)}function T(e){var t=u.querySelector("select[name="+e+"]");if("make"!==e&&"model"!==e)u.querySelector("select[name="+e+"]")&&u.removeChild(u.querySelector("select[name="+e+"]").parentElement);else{var n=document.createElement("option");n.setAttribute("disabled",!0),n.setAttribute("selected",!0),n.innerHTML="Select a "+e,t.innerHTML="",t.appendChild(n)}}t=t||{},document.addEventListener("DOMContentLoaded",function(){d()})}}()},{"promise-polyfill":2}]},{},[4]);