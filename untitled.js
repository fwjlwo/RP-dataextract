//     Underscore.js 1.9.0
//     http://underscorejs.org
//     (c) 2009-2018 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||this||{},r=n._,e=Array.prototype,o=Object.prototype,s="undefined"!=typeof Symbol?Symbol.prototype:null,u=e.push,c=e.slice,p=o.toString,i=o.hasOwnProperty,t=Array.isArray,a=Object.keys,l=Object.create,f=function(){},h=function(n){return n instanceof h?n:this instanceof h?void(this._wrapped=n):new h(n)};"undefined"==typeof exports||exports.nodeType?n._=h:("undefined"!=typeof module&&!module.nodeType&&module.exports&&(exports=module.exports=h),exports._=h),h.VERSION="1.9.0";var v,y=function(u,i,n){if(void 0===i)return u;switch(null==n?3:n){case 1:return function(n){return u.call(i,n)};case 3:return function(n,r,t){return u.call(i,n,r,t)};case 4:return function(n,r,t,e){return u.call(i,n,r,t,e)}}return function(){return u.apply(i,arguments)}},d=function(n,r,t){return h.iteratee!==v?h.iteratee(n,r):null==n?h.identity:h.isFunction(n)?y(n,r,t):h.isObject(n)&&!h.isArray(n)?h.matcher(n):h.property(n)};h.iteratee=v=function(n,r){return d(n,r,1/0)};var g=function(u,i){return i=null==i?u.length-1:+i,function(){for(var n=Math.max(arguments.length-i,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+i];switch(i){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}var e=Array(i+1);for(t=0;t<i;t++)e[t]=arguments[t];return e[i]=r,u.apply(this,e)}},m=function(n){if(!h.isObject(n))return{};if(l)return l(n);f.prototype=n;var r=new f;return f.prototype=null,r},b=function(r){return function(n){return null==n?void 0:n[r]}},j=function(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0},x=Math.pow(2,53)-1,_=b("length"),A=function(n){var r=_(n);return"number"==typeof r&&0<=r&&r<=x};h.each=h.forEach=function(n,r,t){var e,u;if(r=y(r,t),A(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var i=h.keys(n);for(e=0,u=i.length;e<u;e++)r(n[i[e]],i[e],n)}return n},h.map=h.collect=function(n,r,t){r=d(r,t);for(var e=!A(n)&&h.keys(n),u=(e||n).length,i=Array(u),o=0;o<u;o++){var a=e?e[o]:o;i[o]=r(n[a],a,n)}return i};var w=function(c){return function(n,r,t,e){var u=3<=arguments.length;return function(n,r,t,e){var u=!A(n)&&h.keys(n),i=(u||n).length,o=0<c?0:i-1;for(e||(t=n[u?u[o]:o],o+=c);0<=o&&o<i;o+=c){var a=u?u[o]:o;t=r(t,n[a],a,n)}return t}(n,y(r,e,4),t,u)}};h.reduce=h.foldl=h.inject=w(1),h.reduceRight=h.foldr=w(-1),h.find=h.detect=function(n,r,t){var e=(A(n)?h.findIndex:h.findKey)(n,r,t);if(void 0!==e&&-1!==e)return n[e]},h.filter=h.select=function(n,e,r){var u=[];return e=d(e,r),h.each(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u},h.reject=function(n,r,t){return h.filter(n,h.negate(d(r)),t)},h.every=h.all=function(n,r,t){r=d(r,t);for(var e=!A(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(!r(n[o],o,n))return!1}return!0},h.some=h.any=function(n,r,t){r=d(r,t);for(var e=!A(n)&&h.keys(n),u=(e||n).length,i=0;i<u;i++){var o=e?e[i]:i;if(r(n[o],o,n))return!0}return!1},h.contains=h.includes=h.include=function(n,r,t,e){return A(n)||(n=h.values(n)),("number"!=typeof t||e)&&(t=0),0<=h.indexOf(n,r,t)},h.invoke=g(function(n,t,e){var u,i;return h.isFunction(t)?i=t:h.isArray(t)&&(u=t.slice(0,-1),t=t[t.length-1]),h.map(n,function(n){var r=i;if(!r){if(u&&u.length&&(n=j(n,u)),null==n)return;r=n[t]}return null==r?r:r.apply(n,e)})}),h.pluck=function(n,r){return h.map(n,h.property(r))},h.where=function(n,r){return h.filter(n,h.matcher(r))},h.findWhere=function(n,r){return h.find(n,h.matcher(r))},h.max=function(n,e,r){var t,u,i=-1/0,o=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=A(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&i<t&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){u=e(n,r,t),(o<u||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},h.min=function(n,e,r){var t,u,i=1/0,o=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,c=(n=A(n)?n:h.values(n)).length;a<c;a++)null!=(t=n[a])&&t<i&&(i=t);else e=d(e,r),h.each(n,function(n,r,t){((u=e(n,r,t))<o||u===1/0&&i===1/0)&&(i=n,o=u)});return i},h.shuffle=function(n){return h.sample(n,1/0)},h.sample=function(n,r,t){if(null==r||t)return A(n)||(n=h.values(n)),n[h.random(n.length-1)];var e=A(n)?h.clone(n):h.values(n),u=_(e);r=Math.max(Math.min(r,u),0);for(var i=u-1,o=0;o<r;o++){var a=h.random(o,i),c=e[o];e[o]=e[a],e[a]=c}return e.slice(0,r)},h.sortBy=function(n,e,r){var u=0;return e=d(e,r),h.pluck(h.map(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var O=function(o,r){return function(e,u,n){var i=r?[[],[]]:{};return u=d(u,n),h.each(e,function(n,r){var t=u(n,r,e);o(i,n,t)}),i}};h.groupBy=O(function(n,r,t){h.has(n,t)?n[t].push(r):n[t]=[r]}),h.indexBy=O(function(n,r,t){n[t]=r}),h.countBy=O(function(n,r,t){h.has(n,t)?n[t]++:n[t]=1});var k=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(n){return n?h.isArray(n)?c.call(n):h.isString(n)?n.match(k):A(n)?h.map(n,h.identity):h.values(n):[]},h.size=function(n){return null==n?0:A(n)?n.length:h.keys(n).length},h.partition=O(function(n,r,t){n[t?0:1].push(r)},!0),h.first=h.head=h.take=function(n,r,t){if(!(null==n||n.length<1))return null==r||t?n[0]:h.initial(n,n.length-r)},h.initial=function(n,r,t){return c.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},h.last=function(n,r,t){if(!(null==n||n.length<1))return null==r||t?n[n.length-1]:h.rest(n,Math.max(0,n.length-r))},h.rest=h.tail=h.drop=function(n,r,t){return c.call(n,null==r||t?1:r)},h.compact=function(n){return h.filter(n,Boolean)};var S=function(n,r,t,e){for(var u=(e=e||[]).length,i=0,o=_(n);i<o;i++){var a=n[i];if(A(a)&&(h.isArray(a)||h.isArguments(a)))if(r)for(var c=0,l=a.length;c<l;)e[u++]=a[c++];else S(a,r,t,e),u=e.length;else t||(e[u++]=a)}return e};h.flatten=function(n,r){return S(n,r,!1)},h.without=g(function(n,r){return h.difference(n,r)}),h.uniq=h.unique=function(n,r,t,e){h.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=d(t,e));for(var u=[],i=[],o=0,a=_(n);o<a;o++){var c=n[o],l=t?t(c,o,n):c;r&&!t?(o&&i===l||u.push(c),i=l):t?h.contains(i,l)||(i.push(l),u.push(c)):h.contains(u,c)||u.push(c)}return u},h.union=g(function(n){return h.uniq(S(n,!0,!0))}),h.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=_(n);e<u;e++){var i=n[e];if(!h.contains(r,i)){var o;for(o=1;o<t&&h.contains(arguments[o],i);o++);o===t&&r.push(i)}}return r},h.difference=g(function(n,r){return r=S(r,!0,!0),h.filter(n,function(n){return!h.contains(r,n)})}),h.unzip=function(n){for(var r=n&&h.max(n,_).length||0,t=Array(r),e=0;e<r;e++)t[e]=h.pluck(n,e);return t},h.zip=g(h.unzip),h.object=function(n,r){for(var t={},e=0,u=_(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t};var M=function(i){return function(n,r,t){r=d(r,t);for(var e=_(n),u=0<i?0:e-1;0<=u&&u<e;u+=i)if(r(n[u],u,n))return u;return-1}};h.findIndex=M(1),h.findLastIndex=M(-1),h.sortedIndex=function(n,r,t,e){for(var u=(t=d(t,e,1))(r),i=0,o=_(n);i<o;){var a=Math.floor((i+o)/2);t(n[a])<u?i=a+1:o=a}return i};var F=function(i,o,a){return function(n,r,t){var e=0,u=_(n);if("number"==typeof t)0<i?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=o(c.call(n,e,u),h.isNaN))?t+e:-1;for(t=0<i?e:u-1;0<=t&&t<u;t+=i)if(n[t]===r)return t;return-1}};h.indexOf=F(1,h.findIndex,h.sortedIndex),h.lastIndexOf=F(-1,h.findLastIndex),h.range=function(n,r,t){null==r&&(r=n||0,n=0),t||(t=r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),i=0;i<e;i++,n+=t)u[i]=n;return u},h.chunk=function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(c.call(n,e,e+=r));return t};var E=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var i=m(n.prototype),o=n.apply(i,u);return h.isObject(o)?o:i};h.bind=g(function(r,t,e){if(!h.isFunction(r))throw new TypeError("Bind must be called on a function");var u=g(function(n){return E(r,u,t,this,e.concat(n))});return u}),h.partial=g(function(u,i){var o=h.partial.placeholder,a=function(){for(var n=0,r=i.length,t=Array(r),e=0;e<r;e++)t[e]=i[e]===o?arguments[n++]:i[e];for(;n<arguments.length;)t.push(arguments[n++]);return E(u,a,this,this,t)};return a}),(h.partial.placeholder=h).bindAll=g(function(n,r){var t=(r=S(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=h.bind(n[e],n)}}),h.memoize=function(e,u){var i=function(n){var r=i.cache,t=""+(u?u.apply(this,arguments):n);return h.has(r,t)||(r[t]=e.apply(this,arguments)),r[t]};return i.cache={},i},h.delay=g(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(t,e,u){var i,o,a,c,l=0;u||(u={});var f=function(){l=!1===u.leading?0:h.now(),i=null,c=t.apply(o,a),i||(o=a=null)},n=function(){var n=h.now();l||!1!==u.leading||(l=n);var r=e-(n-l);return o=this,a=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(o,a),i||(o=a=null)):i||!1===u.trailing||(i=setTimeout(f,r)),c};return n.cancel=function(){clearTimeout(i),l=0,i=o=a=null},n},h.debounce=function(t,e,u){var i,o,a=function(n,r){i=null,r&&(o=t.apply(n,r))},n=g(function(n){if(i&&clearTimeout(i),u){var r=!i;i=setTimeout(a,e),r&&(o=t.apply(this,n))}else i=h.delay(a,e,this,n);return o});return n.cancel=function(){clearTimeout(i),i=null},n},h.wrap=function(n,r){return h.partial(r,n)},h.negate=function(n){return function(){return!n.apply(this,arguments)}},h.compose=function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},h.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},h.before=function(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},h.once=h.partial(h.before,2),h.restArguments=g;var N=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],T=function(n,r){var t=I.length,e=n.constructor,u=h.isFunction(e)&&e.prototype||o,i="constructor";for(h.has(n,i)&&!h.contains(r,i)&&r.push(i);t--;)(i=I[t])in n&&n[i]!==u[i]&&!h.contains(r,i)&&r.push(i)};h.keys=function(n){if(!h.isObject(n))return[];if(a)return a(n);var r=[];for(var t in n)h.has(n,t)&&r.push(t);return N&&T(n,r),r},h.allKeys=function(n){if(!h.isObject(n))return[];var r=[];for(var t in n)r.push(t);return N&&T(n,r),r},h.values=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},h.mapObject=function(n,r,t){r=d(r,t);for(var e=h.keys(n),u=e.length,i={},o=0;o<u;o++){var a=e[o];i[a]=r(n[a],a,n)}return i},h.pairs=function(n){for(var r=h.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},h.invert=function(n){for(var r={},t=h.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},h.functions=h.methods=function(n){var r=[];for(var t in n)h.isFunction(n[t])&&r.push(t);return r.sort()};var B=function(c,l){return function(n){var r=arguments.length;if(l&&(n=Object(n)),r<2||null==n)return n;for(var t=1;t<r;t++)for(var e=arguments[t],u=c(e),i=u.length,o=0;o<i;o++){var a=u[o];l&&void 0!==n[a]||(n[a]=e[a])}return n}};h.extend=B(h.allKeys),h.extendOwn=h.assign=B(h.keys),h.findKey=function(n,r,t){r=d(r,t);for(var e,u=h.keys(n),i=0,o=u.length;i<o;i++)if(r(n[e=u[i]],e,n))return e};var R,q,K=function(n,r,t){return r in t};h.pick=g(function(n,r){var t={},e=r[0];if(null==n)return t;h.isFunction(e)?(1<r.length&&(e=y(e,r[1])),r=h.allKeys(n)):(e=K,r=S(r,!1,!1),n=Object(n));for(var u=0,i=r.length;u<i;u++){var o=r[u],a=n[o];e(a,o,n)&&(t[o]=a)}return t}),h.omit=g(function(n,t){var r,e=t[0];return h.isFunction(e)?(e=h.negate(e),1<t.length&&(r=t[1])):(t=h.map(S(t,!1,!1),String),e=function(n,r){return!h.contains(t,r)}),h.pick(n,e,r)}),h.defaults=B(h.allKeys,!0),h.create=function(n,r){var t=m(n);return r&&h.extendOwn(t,r),t},h.clone=function(n){return h.isObject(n)?h.isArray(n)?n.slice():h.extend({},n):n},h.tap=function(n,r){return r(n),n},h.isMatch=function(n,r){var t=h.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),i=0;i<e;i++){var o=t[i];if(r[o]!==u[o]||!(o in u))return!1}return!0},R=function(n,r,t,e){if(n===r)return 0!==n||1/n==1/r;if(null==n||null==r)return!1;if(n!=n)return r!=r;var u=typeof n;return("function"===u||"object"===u||"object"==typeof r)&&q(n,r,t,e)},q=function(n,r,t,e){n instanceof h&&(n=n._wrapped),r instanceof h&&(r=r._wrapped);var u=p.call(n);if(u!==p.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!=+n?+r!=+r:0==+n?1/+n==1/r:+n==+r;case"[object Date]":case"[object Boolean]":return+n==+r;case"[object Symbol]":return s.valueOf.call(n)===s.valueOf.call(r)}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof r)return!1;var o=n.constructor,a=r.constructor;if(o!==a&&!(h.isFunction(o)&&o instanceof o&&h.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}e=e||[];for(var c=(t=t||[]).length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),i){if((c=n.length)!==r.length)return!1;for(;c--;)if(!R(n[c],r[c],t,e))return!1}else{var l,f=h.keys(n);if(c=f.length,h.keys(r).length!==c)return!1;for(;c--;)if(l=f[c],!h.has(r,l)||!R(n[l],r[l],t,e))return!1}return t.pop(),e.pop(),!0},h.isEqual=function(n,r){return R(n,r)},h.isEmpty=function(n){return null==n||(A(n)&&(h.isArray(n)||h.isString(n)||h.isArguments(n))?0===n.length:0===h.keys(n).length)},h.isElement=function(n){return!(!n||1!==n.nodeType)},h.isArray=t||function(n){return"[object Array]"===p.call(n)},h.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(r){h["is"+r]=function(n){return p.call(n)==="[object "+r+"]"}}),h.isArguments(arguments)||(h.isArguments=function(n){return h.has(n,"callee")});var z=n.document&&n.document.childNodes;"function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof z&&(h.isFunction=function(n){return"function"==typeof n||!1}),h.isFinite=function(n){return!h.isSymbol(n)&&isFinite(n)&&!isNaN(parseFloat(n))},h.isNaN=function(n){return h.isNumber(n)&&isNaN(n)},h.isBoolean=function(n){return!0===n||!1===n||"[object Boolean]"===p.call(n)},h.isNull=function(n){return null===n},h.isUndefined=function(n){return void 0===n},h.has=function(n,r){if(!h.isArray(r))return null!=n&&i.call(n,r);for(var t=r.length,e=0;e<t;e++){var u=r[e];if(null==n||!i.call(n,u))return!1;n=n[u]}return!!t},h.noConflict=function(){return n._=r,this},h.identity=function(n){return n},h.constant=function(n){return function(){return n}},h.noop=function(){},h.property=function(r){return h.isArray(r)?function(n){return j(n,r)}:b(r)},h.propertyOf=function(r){return null==r?function(){}:function(n){return h.isArray(n)?j(r,n):r[n]}},h.matcher=h.matches=function(r){return r=h.extendOwn({},r),function(n){return h.isMatch(n,r)}},h.times=function(n,r,t){var e=Array(Math.max(0,n));r=y(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},h.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},h.now=Date.now||function(){return(new Date).getTime()};var D={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=h.invert(D),P=function(r){var t=function(n){return r[n]},n="(?:"+h.keys(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};h.escape=P(D),h.unescape=P(L),h.result=function(n,r,t){h.isArray(r)||(r=[r]);var e=r.length;if(!e)return h.isFunction(t)?t.call(n):t;for(var u=0;u<e;u++){var i=null==n?void 0:n[r[u]];void 0===i&&(i=t,u=e),n=h.isFunction(i)?i.call(n):i}return n};var W=0;h.uniqueId=function(n){var r=++W+"";return n?n+r:r},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var C=/(.)^/,J={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},U=/\\|'|\r|\n|\u2028|\u2029/g,V=function(n){return"\\"+J[n]};h.template=function(i,n,r){!n&&r&&(n=r),n=h.defaults({},n,h.templateSettings);var t,e=RegExp([(n.escape||C).source,(n.interpolate||C).source,(n.evaluate||C).source].join("|")+"|$","g"),o=0,a="__p+='";i.replace(e,function(n,r,t,e,u){return a+=i.slice(o,u).replace(U,V),o=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(n.variable||"obj","_",a)}catch(n){throw n.source=a,n}var u=function(n){return t.call(this,n,h)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},h.chain=function(n){var r=h(n);return r._chain=!0,r};var $=function(n,r){return n._chain?h(r).chain():r};h.mixin=function(t){return h.each(h.functions(t),function(n){var r=h[n]=t[n];h.prototype[n]=function(){var n=[this._wrapped];return u.apply(n,arguments),$(this,r.apply(h,n))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];h.prototype[r]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0],$(this,n)}}),h.each(["concat","join","slice"],function(n){var r=e[n];h.prototype[n]=function(){return $(this,r.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},"function"==typeof define&&define.amd&&define("underscore",[],function(){return h})}();

/*! 
 * Voca string library 1.4.0
 * https://vocajs.com
 *
 * Copyright Dmitri Pavlutin and other contributors
 * Released under the MIT license
 */
!function(e,u){"object"==typeof exports&&"undefined"!=typeof module?module.exports=u():"function"==typeof define&&define.amd?define(u):e.v=u()}(this,function(){"use strict";function e(e){return void 0===e||null===e}function u(u){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e(u)?n:Boolean(u)}function n(e){return"string"==typeof e}function r(u){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e(u)?r:n(u)?u:String(u)}function t(e,n){var t=r(e),i=u(n);return""===t?"":(i&&(t=t.toLowerCase()),t.substr(0,1).toUpperCase()+t.substr(1))}function i(e){return r(e,"").toLowerCase()}function a(e,u){return null==e?u:e}function o(u){return e(u)?null:n(u)?u:String(u)}function c(u,n,t){var i=r(u),c=void 0;if(e(n))c=Ou.test(i)?Bu:mu;else if(n instanceof RegExp)c=n;else{var f=o(a(t,""));c=new RegExp(o(n),f)}return a(i.match(c),[])}function f(e,u){return 0===u?i(e):t(e,!0)}function s(e){var u=r(e);return""===u?"":c(u).map(f).join("")}function l(e){var u=r(e);return""===u?"":u.substr(0,1).toLowerCase()+u.substr(1)}function p(e){var u=r(e);return""===u?"":c(u).map(i).join("-")}function h(e){var u=r(e);return""===u?"":c(u).map(i).join("_")}function g(e){return r(e).toUpperCase()}function v(e){return r(e).split("").reduce(d,"")}function d(e,u){var n=u.toLowerCase(),r=u.toUpperCase();return e+(u===n?r:n)}function F(e,u){var n=r(e),i=Array.isArray(u)?u:[],a=Ou.test(n)?Bu:mu;return n.replace(a,function(e,u){return u>0&&i.indexOf(n[u-1])>=0?e.toLowerCase():t(e,!0)})}function x(e,u,n){return e<=u?u:e>=n?n:e}function b(e){return e===1/0?ju:e===-1/0?-ju:~~e}function y(u,n,t){var i=r(u),a=e(n)?i.length:x(b(n),0,ju),o=r(t,"...");return a>=i.length?i:i.substr(0,n-o.length)+o}function w(e,u){return r(e).charAt(u)}function D(e){return e>=Ru&&e<=Lu}function A(e){return e>=Nu&&e<=Pu}function E(e,u){return 1024*(e-Ru)+u-Nu+65536}function C(u){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e(u)?n:"number"==typeof u?u:Number(u)}function m(e,u){return e!==e?u:e}function B(e,u){var n=r(e),t=n.length,i=C(u);if(!((i=m(i,0))<0||i>=t)){var a=n.charCodeAt(i),o=void 0;return D(a)&&t>i+1&&(o=n.charCodeAt(i+1),A(o))?E(a,o):a}}function k(u,n){var t=r(u),i=e(n)?1:x(b(n),0,ju);return t.length<=i?t:t.substr(0,i)}function S(e,u){var n=r(e),t=C(u),i=void 0,a=0;for(t=m(t,0);null!==(i=pu.exec(n));){if(a===t)return pu.lastIndex=0,i[0];a++}return""}function O(u,n){var t=r(u),i=e(n)?1:x(b(n),0,ju);return t.length<=i?t:t.substr(t.length-i,i)}function j(u,n,t){var i=r(u),a=e(n)?i.length:x(b(n),0,ju),o=r(t,"...");if(a>=i.length)return i;var c=Ou.test(i)?Bu:mu,f=0;return i.replace(c,function(e,u){var n=u+e.length;n<=a-o.length&&(f=n)}),i.substr(0,f)+o}function R(e,u,n){return r(e).slice(u,n)}function L(e,u,n){return r(e).substr(u,n)}function N(e,u,n){return r(e).substring(u,n)}function P(e){return r(e).length}function z(e){return r(e).replace(su,"*").replace(lu,"*").length}function U(e,u){var n=r(e),t=r(u),i=t.length,a=0,o=0;if(""===n||""===t)return a;do{-1!==(o=n.indexOf(t,o))&&(a++,o+=i)}while(-1!==o);return a}function I(e,u,n){var t=r(e);if(""===t||"function"!=typeof u)return 0;var i=u.bind(n);return zu.call(t,function(e,u,n){return i(u,n,t)?e+1:e},0)}function $(e,u,n){return c(e,u,n).length}function _(){this.index=0}function V(u,n){for(var t=r(u),i=e(n)?1:x(b(n),0,ju),a="";i;)1&i&&(a+=t),i>1&&(t+=t),i>>=1;return a}function Y(e,u){return V(e,b(u/e.length)+u%e.length).substr(0,u)}function Z(u,n,t){var i=r(u),a=e(n)?0:x(b(n),0,ju),o=r(t," ");return a<=i.length?i:Y(o,a-i.length)+i}function T(u,n,t){var i=r(u),a=e(n)?0:x(b(n),0,ju),o=r(t," ");return a<=i.length?i:i+Y(o,a-i.length)}function W(u,n){var r=n.width;return e(r)||u.length>=r?u:(n.alignmentSpecifier===Mu?T:Z)(u,r,n.getPaddingCharacter())}function G(e,u,n){return n.signSpecifier===Ku&&e>=0&&(u=Ku+u),u}function H(e,u){var n=parseFloat(e),t=void 0;isNaN(n)&&(n=0);var i=C(u.precision,6);switch(u.typeSpecifier){case Hu:t=n.toFixed(i);break;case Wu:t=n.toExponential(i);break;case Gu:t=n.toExponential(i).toUpperCase();break;case Ju:case qu:t=J(n,i,u)}return t=G(n,t,u),r(t)}function J(e,u,n){if(0===e)return"0";var r=0===u?1:u,t=e.toPrecision(r).replace(wu,"");return n.typeSpecifier===qu&&(t=t.toUpperCase()),t}function q(e,u){var n=parseInt(e);switch(isNaN(n)&&(n=0),n>>>=0,u.typeSpecifier){case $u:n=String.fromCharCode(n);break;case Iu:n=n.toString(Qu);break;case Vu:n=n.toString(en);break;case Zu:n=n.toString(un);break;case Tu:n=n.toString(un).toUpperCase()}return r(n)}function X(e,u){var n=parseInt(e);return isNaN(n)&&(n=0),G(n,o(n),u)}function K(u,n){var r=u,t=n.precision;return!e(t)&&r.length>t&&(r=y(r,t,"")),r}function M(e,u){var n=void 0;switch(u.typeSpecifier){case Xu:n=K;break;case _u:case Uu:n=X;break;case $u:case Iu:case Vu:case Zu:case Tu:case Yu:n=q;break;case Hu:case Wu:case Gu:case Ju:case qu:n=H}return W(n(e,u),u)}function Q(e){this.percent=e.percent,this.signSpecifier=e.signSpecifier,this.paddingSpecifier=e.paddingSpecifier,this.alignmentSpecifier=e.alignmentSpecifier,this.width=e.width,this.precision=e.precision,this.typeSpecifier=e.typeSpecifier}function ee(u,n,r){if(e(r.typeSpecifier))throw new Error("sprintf(): Unknown type specifier");if(u>n-1)throw new Error("sprintf(): Too few arguments");if(u<0)throw new Error("sprintf(): Argument number must be greater than zero")}function ue(e,u,n,r,t,i,a,o,c,f,s){var l=new Q({percent:r,signSpecifier:i,paddingSpecifier:a,alignmentSpecifier:o,width:C(c,null),precision:C(f,null),typeSpecifier:s});if(l.isPercentLiteral())return n.slice(1);var p=e.getIndexByPosition(t);return e.incrementOnEmptyPosition(t),ee(p,u.length,l),M(u[p],l)}function ne(e){var u=r(e);if(""===u)return u;for(var n=arguments.length,t=Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];var a=ue.bind(void 0,new _,t);return u.replace(yu,a)}function re(e){if(Array.isArray(e)){for(var u=0,n=Array(e.length);u<e.length;u++)n[u]=e[u];return n}return Array.from(e)}function te(e,u){return ne.apply(void 0,[e].concat(re(a(u,[]))))}function ie(e){return nn[e]}function ae(e){return r(e).replace(bu,ie)}function oe(e){return r(e).replace(Fu,"\\$&")}function ce(e,u){return e.replace(rn[u],u)}function fe(e){var u=r(e);return tn.reduce(ce,u)}function se(e,u,n){return r(e).indexOf(u,n)}function le(e,u,n){return r(e).lastIndexOf(u,n)}function pe(u,n,t){var i=r(u),a=e(t)?0:x(b(t),0,i.length),o=i.substr(a).search(n);return-1===o||isNaN(a)||(o+=a),o}function he(e,u,n){var t=r(e),i=r(u),a=C(n);return a<0||a>t.length||""===i?t:t.slice(0,a)+i+t.slice(a)}function ge(){return null!==on?on:(on={},Object.keys(an).forEach(function(e){for(var u=an[e],n=0;n<u.length;n++){var r=u[n];on[r]=e}}),on)}function ve(e){var u=ge()[e];return u||e}function de(e,u){return u}function Fe(e){var u=r(e);return""===u?"":u.replace(xu,ve).replace(su,de)}function xe(u,n,t){var i=r(u),a=e(n)?0:x(b(n),0,ju),o=r(t," ");if(a<=i.length)return i;var c=a-i.length,f=b(c/2),s=c%2;return Y(o,f)+i+Y(o,f+s)}function be(e,u,n){return r(e).replace(u,n)}function ye(e){return e.toString().match(Du)[0]}function we(u,n,t){var i=r(u),a=o(n);return null!==a&&(""===a||(t=e(t)?0:x(b(t),0,i.length),-1!==i.indexOf(a,t)))}function De(e,u){var n=ye(e);return we(n,u)?e:new RegExp(e.source,n+u)}function Ae(e,u,n){var t=r(e),i=u;return u instanceof RegExp?u.global||(i=De(u,"g")):i=new RegExp(oe(u),"g"),t.replace(i,n)}function Ee(e){return r(e).split("").reverse().join("")}function Ce(e){for(var u=r(e),n="",t=(u=u.replace(su,function(e,u,n){return Ce(n)+u}).replace(lu,"$2$1")).length;t--;)n+=u.charAt(t);return n}function me(e){var u=r(e);return""===u?"":p(Fe(u).replace(xu,"-"))}function Be(e,u,n,t){var i=r(e),a=r(t),o=C(u);o<0?(o=i.length+o)<0&&(o=0):o>i.length&&(o=i.length);var c=C(n,i.length-o);return c<0&&(c=0),i.slice(0,o)+a+i.slice(o+c)}function ke(e,u,t){var i=r(e),o=void 0,c=void 0;if(n(u)&&n(t))o=u.split(""),c=t.split("");else{var f=Se(a(u,{})),s=cn(f,2);o=s[0],c=s[1]}var l=o.length;if(0===l)return i;for(var p="",h=c.length,g=0;g<i.length;g++){for(var v=!1,d=void 0,F=0;F<l&&F<h;F++){var x=o[F];if(i.substr(g,x.length)===x){v=!0,d=c[F],g=g+x.length-1;break}}p+=v?d:i[g]}return p}function Se(e){var u=Object.keys(e);return[u,u.sort(Oe).map(function(u){return e[u]})]}function Oe(e,u){return e.length===u.length?0:e.length<u.length?1:-1}function je(u,n){var t=r(u);if(""===n||""===t)return t;var i=o(n);if(e(i))return t.replace(gu,"");var a=!0;return fn.call(t,function(e,u){return a&&we(i,u)?e:(a=!1,e+u)},"")}function Re(u,n){var t=r(u);if(""===n||""===t)return t;var i=o(n);if(e(i))return t.replace(vu,"");var a=!0;return sn.call(t,function(e,u){return a&&we(i,u)?e:(a=!1,u+e)},"")}function Le(u,n){var t=r(u);if(""===n||""===t)return t;var i=o(n);return e(i)?t.trim():Re(je(t,i),i)}function Ne(e){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r(e),t=Pe(u),i=t.width,a=t.newLine,o=t.indent,c=t.cut;if(""===n||i<=0)return o;for(var f=n.length,s=n.substring.bind(n),l=0,p="";f-l>i;)if(" "!==n[l]){var h=n.lastIndexOf(" ",i+l);h>=l?(p+=o+s(l,h)+a,l=h+1):c?(p+=o+s(l,i+l)+a,l+=i):(h=n.indexOf(" ",i+l))>=0?(p+=o+s(l,h)+a,l=h+1):(p+=o+s(l),l=f)}else l++;return l<f&&(p+=o+s(l)),p}function Pe(e){return{width:C(e[ln],75),newLine:r(e[pn],"\n"),indent:r(e[hn],""),cut:u(e[gn],!1)}}function ze(u,n,t){if(e(n))return!1;var i=r(u),a=r(n);if(""===a)return!0;t=e(t)?i.length:x(b(t),0,i.length),t-=a.length;var o=i.indexOf(a,t);return-1!==o&&o===t}function Ue(e){var u=r(e);return ku.test(u)}function Ie(e){var u=r(e);return Su.test(u)}function $e(e){return 0===r(e).trim().length}function _e(e){var u=r(e);return du.test(u)}function Ve(e){return 0===r(e).length}function Ye(e){var u=r(e);return Ue(u)&&u.toLowerCase()===u}function Ze(u){var n="object"!=typeof u||e(u)?u:Number(u);return("number"==typeof n||"string"==typeof n)&&!isNaN(n-parseFloat(n))}function Te(e){var u=r(e);return Ue(u)&&u.toUpperCase()===u}function We(e,u,n){var t=r(e),i=r(n),a=void 0;if(!(u instanceof RegExp)){if(null===(a=o(u)))return!1;u=new RegExp(a,i)}return u.test(t)}function Ge(u,n,t){var i=r(u),a=o(n);return null!==a&&(""===a||(t=e(t)?0:x(b(t),0,i.length),i.substr(t,a.length)===a))}function He(e){return r(e).split("")}function Je(e){for(var u=r(e),n=u.length,t=[],i=0,a=void 0;i<n;)a=B(u,i),t.push(a),i+=a>65535?2:1;return t}function qe(e){return a(r(e).match(pu),[])}function Xe(e,u,n){return r(e).split(u,n)}function Ke(e){var u=r(e);return""===u?"":u[0]===vn?u.substring(1):u}function Me(e,u,n){var r=0;return(!(arguments.length>3&&void 0!==arguments[3])||arguments[3])&&(r=1-u.length),e.substr(n+r,u.length).toLowerCase()===u}function Qe(e){for(var u=[],n=void 0;null!==(n=Au.exec(e));)u.push(n[1]);return u}function eu(e){for(var u=dn,n="",r=0;u!==xn;){var t=e[r++].toLowerCase();switch(t){case"<":break;case">":u=xn;break;default:hu.test(t)?u===Fn&&(u=xn):(u===dn&&(u=Fn),"/"!==t&&(n+=t))}}return n}function uu(e,u,n){if(""===(e=r(e)))return"";if(!Array.isArray(u)){var t=r(u);u=""===t?[]:Qe(t)}for(var i=r(n),a=e.length,o=u.length>0,c=Me.bind(null,e),f=bn,s=0,l="",p="",h=null,g=0;g<a;g++){var v=e[g],d=!1;switch(v){case"<":if(h)break;if(c("< ",g,!1)){d=!0;break}if(f===bn){d=!0,f=yn;break}if(f===yn){s++;break}d=!0;break;case"!":if(f===yn&&c("<!",g)){f=wn;break}d=!0;break;case"-":if(f===wn&&c("!--",g)){f=Dn;break}d=!0;break;case'"':case"'":f===yn&&(h===v?h=null:h||(h=v)),d=!0;break;case"E":case"e":if(f===wn&&c("doctype",g)){f=yn;break}d=!0;break;case">":if(s>0){s--;break}if(h)break;if(f===yn){if(h=null,f=bn,o){var F=eu(p+=">");-1!==u.indexOf(F.toLowerCase())?l+=p:l+=i,p=""}else l+=i;break}if(f===wn||f===Dn&&c("--\x3e",g)){h=null,f=bn,p="";break}d=!0;break;default:d=!0}if(d)switch(f){case bn:l+=v;break;case yn:o&&(p+=v)}}return l}function nu(){return this===En.v&&(En.v=Cn),this}function ru(e,u){this._wrappedValue=e,this._explicitChain=u}function tu(e){return function(){for(var u=arguments.length,n=Array(u),r=0;r<u;r++)n[r]=arguments[r];var t=e.apply(void 0,[this._wrappedValue].concat(n));return this._explicitChain||"string"==typeof t?new ru(t,this._explicitChain):t}}function iu(e){return new ru(e,!0)}function au(e){return new ru(e,!1)}var ou="\\uDC00-\\uDFFF",cu="\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F",fu="\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF",su=new RegExp("(["+fu+"]|[\\uD800-\\uDBFF]["+ou+"]|[\\uD800-\\uDBFF](?!["+ou+"])|(?:[^\\uD800-\\uDBFF]|^)["+ou+"])(["+cu+"]+)","g"),lu=new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"),pu=new RegExp("((?:["+fu+"]|[\\uD800-\\uDBFF]["+ou+"]|[\\uD800-\\uDBFF](?!["+ou+"])|(?:[^\\uD800-\\uDBFF]|^)["+ou+"])(?:["+cu+"]+))|([\\uD800-\\uDBFF]["+ou+"])|([\\n\\r\\u2028\\u2029])|(.)","g"),hu=new RegExp("[\\s\\uFEFF\\xA0]"),gu=new RegExp("^[\\s\\uFEFF\\xA0]+"),vu=new RegExp("[\\s\\uFEFF\\xA0]+$"),du=new RegExp("^\\d+$"),Fu=/[-[\]{}()*+!<=:?./\\^$|#,]/g,xu=/[^A-Za-z0-9]/g,bu=/[<>&"'`]/g,yu=/(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g,wu=/\.?0+$/g,Du=/[gimuy]*$/,Au=/<([A-Za-z0-9]+)>/g,Eu="a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F",Cu="\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e",mu=new RegExp("(?:["+Cu+"]["+cu+"]*)?(?:["+Eu+"]["+cu+"]*)+|(?:["+Cu+"]["+cu+"]*)+(?!["+Eu+"])|[\\d]+|[\\u2700-\\u27BF]|[^\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7\\u2000-\\u206F\\s\\uFEFF\\xA0]+","g"),Bu=/[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g,ku=new RegExp("^(?:["+Eu+Cu+"]["+cu+"]*)+$"),Su=new RegExp("^((?:["+Eu+Cu+"]["+cu+"]*)|[\\d])+$"),Ou=/^[\x01-\xFF]*$/,ju=9007199254740991,Ru=55296,Lu=56319,Nu=56320,Pu=57343,zu=Array.prototype.reduce;_.prototype.increment=function(){this.index++},_.prototype.incrementOnEmptyPosition=function(u){e(u)&&this.increment()},_.prototype.getIndexByPosition=function(u){return e(u)?this.index:u-1};var Uu="i",Iu="b",$u="c",_u="d",Vu="o",Yu="u",Zu="x",Tu="X",Wu="e",Gu="E",Hu="f",Ju="g",qu="G",Xu="s",Ku="+",Mu="-",Qu=2,en=8,un=16;Q.prototype.isPercentLiteral=function(){return"%%"===this.percent},Q.prototype.getPaddingCharacter=function(){var e=a(this.paddingSpecifier," ");return 2===e.length&&"'"===e[0]&&(e=e[1]),e};var nn={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},rn={"<":/(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,">":/(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,"&":/(&amp;)|(&#x0*26;)|(&#0*38;)/gi,'"':/(&quot;)|(&#x0*22;)|(&#0*34;)/gi,"'":/(&#x0*27;)|(&#0*39;)/gi,"`":/(&#x0*60;)|(&#0*96;)/gi},tn=Object.keys(rn),an={3:"Ξξ",8:"Θθ",A:"AÀÁÂÃÄÅĀĂĄǍǞǠǺȀȂȦȺḀẠẢẤẦẨẪẬẮẰẲẴẶⒶⱯＡΆΑА",B:"BƁƂɃḂḄḆⒷＢΒБ",C:"CÇĆĈĊČƇȻḈⒸꜾＣЦ",D:"DĎĐƉƊƋḊḌḎḐḒⒹꝹＤÐΔД",E:"EÈÉÊËĒĔĖĘĚƎƐȄȆȨḔḖḘḚḜẸẺẼẾỀỂỄỆⒺＥΈΕЕЭ",F:"FƑḞⒻꝻＦΦФ",G:"GĜĞĠĢƓǤǦǴḠⒼꝽꝾꞠＧΓГҐ",H:"HĤĦȞḢḤḦḨḪⒽⱧⱵꞍＨΉΗХ",I:"IÌÍÎÏĨĪĬĮİƗǏȈȊḬḮỈỊⒾＩΊΙΪІИ",J:"JĴɈⒿＪЙ",K:"KĶƘǨḰḲḴⓀⱩꝀꝂꝄꞢＫΚК",L:"LĹĻĽĿŁȽḶḸḺḼⓁⱠⱢꝆꝈꞀＬΛЛ",M:"MƜḾṀṂⓂⱮＭΜМ",N:"NÑŃŅŇƝǸȠṄṆṈṊⓃꞐꞤＮΝН",O:"OÒÓÔÕÖØŌŎŐƆƟƠǑǪǬǾȌȎȪȬȮȰṌṎṐṒỌỎỐỒỔỖỘỚỜỞỠỢⓄꝊꝌＯΌΟО",P:"PƤṔṖⓅⱣꝐꝒꝔＰΠП",Q:"QɊⓆꝖꝘＱ",R:"RŔŖŘȐȒɌṘṚṜṞⓇⱤꝚꞂꞦＲΡР",S:"SŚŜŞŠȘṠṢṤṦṨẞⓈⱾꞄꞨＳΣС",T:"TŢŤŦƬƮȚȾṪṬṮṰⓉꞆＴΤТ",U:"UÙÚÛÜŨŪŬŮŰŲƯǓǕǗǙǛȔȖɄṲṴṶṸṺỤỦỨỪỬỮỰⓊＵУЪ",V:"VƲɅṼṾⓋꝞＶВ",W:"WŴẀẂẄẆẈⓌⱲＷΏΩ",X:"XẊẌⓍＸΧ",Y:"YÝŶŸƳȲɎẎỲỴỶỸỾⓎＹΎΥΫЫ",Z:"ZŹŻŽƵȤẐẒẔⓏⱫⱿꝢＺΖЗ",a:"aàáâãäåāăąǎǟǡǻȁȃȧɐḁẚạảấầẩẫậắằẳẵặⓐⱥａάαа",b:"bƀƃɓḃḅḇⓑｂβб",c:"cçćĉċčƈȼḉↄⓒꜿｃц",d:"dďđƌɖɗḋḍḏḑḓⓓꝺｄðδд",e:"eèéêëēĕėęěǝȅȇȩɇɛḕḗḙḛḝẹẻẽếềểễệⓔｅέεеэ",f:"fƒḟⓕꝼｆφф",g:"gĝğġģǥǧǵɠᵹḡⓖꝿꞡｇγгґ",h:"hĥħȟɥḣḥḧḩḫẖⓗⱨⱶｈήηх",i:"iìíîïĩīĭįıǐȉȋɨḭḯỉịⓘｉΐίιϊиі",j:"jĵǰɉⓙｊй",k:"kķƙǩḱḳḵⓚⱪꝁꝃꝅꞣｋκк",l:"lĺļľŀłſƚɫḷḹḻḽⓛⱡꝇꝉꞁｌλл",m:"mɯɱḿṁṃⓜｍμм",n:"nñńņňŉƞǹɲṅṇṉṋⓝꞑꞥｎνн",o:"oòóôõöøōŏőơǒǫǭǿȍȏȫȭȯȱɔɵṍṏṑṓọỏốồổỗộớờởỡợⓞꝋꝍｏοόо",p:"pƥᵽṕṗⓟꝑꝓꝕｐπп",q:"qɋⓠꝗꝙｑ",r:"rŕŗřȑȓɍɽṙṛṝṟⓡꝛꞃꞧｒρр",s:"sßśŝşšșȿṡṣṥṧṩẛⓢꞅꞩｓςσс",t:"tţťŧƭțʈṫṭṯṱẗⓣⱦꞇｔτт",u:"uùúûüũūŭůűųưǔǖǘǚǜȕȗʉṳṵṷṹṻụủứừửữựⓤｕуъ",v:"vʋʌṽṿⓥꝟｖв",w:"wŵẁẃẅẇẉẘⓦⱳｗωώ",x:"xẋẍⓧｘχ",y:"yýÿŷƴȳɏẏẙỳỵỷỹỿⓨｙΰυϋύы",z:"zźżžƶȥɀẑẓẕⓩⱬꝣｚζз",OE:"Œ",oe:"œ",AE:"ÆǢǼ",ae:"æǣǽ",hv:"ƕ",OI:"Ƣ",oi:"ƣ",DZ:"ǄǱ",Dz:"ǅǲ",dz:"ǆǳ",LJ:"Ǉ",Lj:"ǈ",lj:"ǉ",NJ:"Ǌ",Nj:"ǋ",nj:"ǌ",OU:"Ȣ",ou:"ȣ",TZ:"Ꜩ",tz:"ꜩ",AA:"Ꜳ",aa:"ꜳ",AO:"Ꜵ",ao:"ꜵ",AU:"Ꜷ",au:"ꜷ",AV:"ꜸꜺ",av:"ꜹꜻ",AY:"Ꜽ",ay:"ꜽ",OO:"Ꝏ",oo:"ꝏ",VY:"Ꝡ",vy:"ꝡ",TH:"Þ",th:"þ",PS:"Ψ",ps:"ψ",Yo:"Ё",Ye:"Є",Yi:"Ї",Zh:"Ж",Ch:"Ч",Sh:"ШЩ","":"Ьь",Yu:"Ю",Ya:"Я",zh:"ж",ch:"ч",sh:"шщ",yu:"ю",ya:"я",yo:"ё",ye:"є",yi:"ї"},on=null,cn=function(){function e(e,u){var n=[],r=!0,t=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!u||n.length!==u);r=!0);}catch(e){t=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(t)throw i}}return n}return function(u,n){if(Array.isArray(u))return u;if(Symbol.iterator in Object(u))return e(u,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),fn=Array.prototype.reduce,sn=Array.prototype.reduceRight,ln="width",pn="newLine",hn="indent",gn="cut",vn="\ufeff",dn=0,Fn=1,xn=2,bn=0,yn=1,wn=2,Dn=3,An=null,En=function(){return null!==An?An:An="object"==typeof global&&global.Object===Object?global:"object"==typeof self&&self.Object===Object?self:new Function("return this")()}(),Cn=En.v,mn={camelCase:s,capitalize:t,decapitalize:l,kebabCase:p,lowerCase:i,snakeCase:h,swapCase:v,titleCase:F,upperCase:g,count:P,countGraphemes:z,countSubstrings:U,countWhere:I,countWords:$,escapeHtml:ae,escapeRegExp:oe,unescapeHtml:fe,sprintf:ne,vprintf:te,indexOf:se,lastIndexOf:le,search:pe,charAt:w,codePointAt:B,first:k,graphemeAt:S,last:O,prune:j,slice:R,substr:L,substring:N,truncate:y,insert:he,latinise:Fe,pad:xe,padLeft:Z,padRight:T,repeat:V,replace:be,replaceAll:Ae,reverse:Ee,reverseGrapheme:Ce,slugify:me,splice:Be,tr:ke,trim:Le,trimLeft:je,trimRight:Re,wordWrap:Ne,endsWith:ze,includes:we,isAlpha:Ue,isAlphaDigit:Ie,isBlank:$e,isDigit:_e,isEmpty:Ve,isLowerCase:Ye,isNumeric:Ze,isString:n,isUpperCase:Te,matches:We,startsWith:Ge,chars:He,codePoints:Je,graphemes:qe,split:Xe,words:c,stripBom:Ke,stripTags:uu,noConflict:nu,version:"1.4.0"};return ru.prototype.value=function(){return this._wrappedValue},ru.prototype.valueOf=function(){return this.value()},ru.prototype.toJSON=function(){return this.value()},ru.prototype.toString=function(){return String(this.value())},ru.prototype.chain=function(){return new ru(this._wrappedValue,!0)},ru.prototype.thru=function(e){return"function"==typeof e?new ru(e(this._wrappedValue),this._explicitChain):this},ru.prototype._explicitChain=!0,Object.keys(mn).forEach(function(e){ru.prototype[e]=tu(mn[e])}),(Object.assign||function(e){for(var u=1;u<arguments.length;u++){var n=arguments[u];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e})(au,mn,{chain:iu}),au});
//# sourceMappingURL=voca.min.js.map

// Function to download data to a file
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

log = console.log;

getPresenca = function() {
	var p = {};

	p.pontosRP = parseInt( $('#PresenceParlamentar').html() );

	var divSessoes = $('#divPresencaSessoes');
	var tabPresenca = divSessoes.find('table.table tbody tr').children('td');

	p.tipo = tabPresenca.get(0).innerHTML;
	p.sessoes = parseInt( tabPresenca.get(1).innerHTML );
	p.presenca = parseInt( tabPresenca.get(2).innerHTML );
	p.just = parseInt( tabPresenca.get(3).innerHTML );
	p.njust = parseInt( tabPresenca.get(4).innerHTML );

	return p;
}

getProcessos = function() {
	var p = {};

	p.processos = [];
	p.pontosRP = parseInt( $("#ProcessParlamentar").html() );

	var divProcessos = $("[data-remodal-id=divProcessosJudiciais]");
	log(divProcessos);
	var tabProcessos = divProcessos.find("table.table-hover tbody tr").children("td");
	log(tabProcessos);

	tabProcessos.map(function(i, v) {
		p.processos.push({
			descr: v.innerHTML,
			valor: (function(s){
				var val = -10;
				//busca por processo grave
				if(s.match(/<font style=\"background-color: yellow\">([^<]*)<\/font>/g)) {
					val -=10;
				}
				// busca por condenação
				if(s.match(/condenação|condenado|condenou/i)) {
					val *= 3;
				}
				return val;
			})(v.innerHTML)
		});
	});

	// total calculado
	var total = _.reduce( p.processos, function(memo, num){ return memo + num.valor; }, 0);
	console.log("Total calculado: " + total);

	return p;
}

getPriv = function() {
	var p = {};

	p.anos = [];
	p.pontosRP = parseInt( $("#PrivilegesParlamentar").html() );

	var divPrivilegios = $('[data-remodal-id=divPrivilegios]');
	log(divPrivilegios);
	var tabPrivilegios = divPrivilegios.find('table.table tbody tr[id^=panel-information]');
	log(tabPrivilegios);

	tabPrivilegios.map(function(i,v) {
		log(v);

		p.anos.push({
			ano: v.children[0].innerHTML,
			valor: (function(v) {
				var nums = v.split(',');
				var newval = nums[0].substr(3).replace('.', '') + '.' + nums[1];
				return parseFloat( newval );
			})(v.children[1].innerHTML)
		});
	});

	// total calculado
	var total = _.reduce( p.anos, function(memo, num){ return memo + num.valor; }, 0);
	console.log("Total calculado: " + total);

	return p;
}

getOutros = function() {
	var p = {};

	p.criterios = [];
	p.pontosRP = parseInt( $("#OthersParlamentar").html() );

	var divOutros = $("[data-remodal-id=divOutros]");
	var tabOutros = divOutros.find("table.table tbody tr")

	tabOutros.map(function(i,v) {
		log(v);

		p.criterios.push({
			descr: v.children[0].innerHTML,
			valor: parseInt( v.children[1].innerHTML )
		});
	});

	// total calculado
	var total = _.reduce( p.criterios, function(memo, num){ return memo + num.valor; }, 0);
	console.log("Total calculado: " + total);

	return p;
}

getLeg = function() {
	var p = {};

	p.leis = [];
	p.pontosRP = parseInt( $("#RegulatoryQualityParlamentar").html() );

	var divLeg = $("[data-remodal-id=divQualidadeLegislativa]");
	var tabLeg = divLeg.find("#voted div.panel table tbody tr.law-description");

	tabLeg.map(function(i,v) {
		log(v);

		var tab = v.previousElementSibling;

		p.leis.push({
			id: v.id.substr(4), //para retirar o 'law-'
			nome: tab.children[0].querySelector('a').innerHTML,
			voto: (function(s) {
				return (s == 'Sim') ? 1 : (s == 'Não') ? -1 : 0;
			})(tab.children[1].innerHTML),
			valor: parseInt( tab.children[2].innerHTML )
		});
	});

	// total calculado
	var total = _.reduce( p.leis, function(memo, num){ return memo + (num.valor * num.voto); }, 0);
	console.log("Total calculado: " + total);

	return p;
}

getInfo = function() {
	var p = [];

	var divs = $("#divDadosCandidate .form-group");

	var group1 = divs.get(0);
	//nome
	var nameNode = $(group1).children('div').get(0);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});
	//Apelido
	var nickNode = $(group1).children('div').get(1);
	p.push({
		nome: nickNode.children[0].innerHTML,
		valor: nickNode.children[1].innerHTML.trim(),
	});
	//e-mail
	var emailNode = $(group1).children('div').get(2);
	p.push({
		nome: emailNode.children[0].innerHTML,
		valor: emailNode.children[1].children[0].innerHTML.trim(),
	});
	
	var group2 = divs.get(1);
	//CPF
	nameNode = $(group2).children('div').get(0);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});
	//Nascimento
	nameNode = $(group2).children('div').get(1);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});
	//Partido
	nameNode = $(group2).children('div').get(2);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});

	var group3 = divs.get(2);
	//link
	nameNode = $(group3).children('div').get(0);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].children[0].innerHTML.trim(),
	});
	//Formação
	nameNode = $(group3).children('div').get(1);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});
	//Profissão
	nameNode = $(group3).children('div').get(2);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});

	var group4 = divs.get(3);
	//Estado
	nameNode = $(group4).children('div').get(0);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});
	//Filiação
	nameNode = $(group4).children('div').get(1);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});
	//Órgão
	nameNode = $(group4).children('div').get(2);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});

	var group5 = divs.get(4);
	//Cargo
	nameNode = $(group5).children('div').get(0);
	p.push({
		nome: nameNode.children[0].innerHTML,
		valor: nameNode.children[1].innerHTML.trim(),
	});

	return p;
}

//
log('Iniciando extração de dados do político...')
//

var pres = getPresenca();
var proc = getProcessos();
var priv = getPriv();
var legs = getLeg();
var outr = getOutros()
var info = getInfo();

//
var nick = v.camelCase( v.latinise( info[1].valor ) );

if(typeof nick == "string") {
	window[nick] = {};

	//
	window[nick].pres = pres;
	window[nick].proc = proc;
	window[nick].priv = priv;
	window[nick].legs = legs;
	window[nick].outr = outr;
	window[nick].info = info;

	var RPout = JSON.stringify(window[nick]);

	// por último, faz o download
	download( RPout, nick + ".json", "application/json" );
}
