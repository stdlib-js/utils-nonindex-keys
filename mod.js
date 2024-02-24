// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&o.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return i.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return i.call(r)}return n=i.call(r),e?r[c]=t:delete r[c],n}:function(r){return i.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function d(r){return"number"==typeof r}function y(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function h(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+y(i):y(i)+r,n&&(r="-"+r)),r}var b=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=h(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=h(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):b.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var m=Math.abs,j=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,O=/e\+(\d)$/,_=/e-(\d)$/,k=/^(\d+)$/,I=/^(\d+)e/,T=/\.0$/,x=/\.0*e/,A=/(\..*[^0])0*e/;function V(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":m(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,A,"$1e"),t=E.call(t,x,"e"),t=E.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,O,"e+0$1"),t=E.call(t,_,"e-0$1"),r.alternate&&(t=E.call(t,k,"$1."),t=E.call(t,I,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===S.call(r.specifier)?S.call(t):j.call(t)}function P(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var F=String.fromCharCode,N=isNaN,$=Array.isArray;function C(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function L(r){var e,t,n,i,o,a,u,c,f,l,s,p,g;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,N(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):F(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=V(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=h(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+P(g):P(g)+l)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,i;for(t=[],i=0,n=B.exec(r);n;)(e=r.slice(i,B.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),i=B.lastIndex,n=B.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function W(r){var e,t;if("string"!=typeof r)throw new TypeError(W("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[G(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return L.apply(null,e)}var M,X=Object.prototype,Z=X.toString,Y=X.__defineGetter__,U=X.__defineSetter__,H=X.__lookupGetter__,z=X.__lookupSetter__;M=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Z.call(r))throw new TypeError(W("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Z.call(t))throw new TypeError(W("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,e)||z.call(r,e)?(n=r.__proto__,r.__proto__=X,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Y&&Y.call(r,e,t.get),a&&U&&U.call(r,e,t.set),r};var D=M;function q(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function J(r){return"string"==typeof r}var K=String.prototype.valueOf;var Q=n();function rr(r){return"object"==typeof r&&(r instanceof String||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function er(r){return J(r)||rr(r)}function tr(r){return"number"==typeof r}q(er,"isPrimitive",J),q(er,"isObject",rr);var nr=Number,ir=nr.prototype.toString;var or=n();function ar(r){return"object"==typeof r&&(r instanceof nr||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function ur(r){return tr(r)||ar(r)}function cr(r){return r!=r}function fr(r){return tr(r)&&cr(r)}function lr(r){return ar(r)&&cr(r.valueOf())}function sr(r){return fr(r)||lr(r)}q(ur,"isPrimitive",tr),q(ur,"isObject",ar),q(sr,"isPrimitive",fr),q(sr,"isObject",lr);var pr=Number.POSITIVE_INFINITY,gr=nr.NEGATIVE_INFINITY,dr=Math.floor;function yr(r){return dr(r)===r}function hr(r){return r<pr&&r>gr&&yr(r)}function br(r){return tr(r)&&hr(r)}function vr(r){return ar(r)&&hr(r.valueOf())}function wr(r){return br(r)||vr(r)}q(wr,"isPrimitive",br),q(wr,"isObject",vr);var mr=Object.prototype.propertyIsEnumerable;var jr=!mr.call("beep","0");var Sr,Er=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};Sr=s?l:function(r){return null!==r&&"object"==typeof r&&!Er(r)&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=mr.call(r,e))&&jr&&er(r)?!fr(e=+e)&&br(e)&&e>=0&&e<r.length:t)}(r,"callee")};var Or=Sr,_r=Array.prototype.slice;function kr(r){return null!==r&&"object"==typeof r}function Ir(r){return r!=r}function Tr(r){return tr(r)&&Ir(r)}function xr(r){return ar(r)&&Ir(r.valueOf())}function Ar(r){return Tr(r)||xr(r)}q(kr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kr)),q(Ar,"isPrimitive",Tr),q(Ar,"isObject",xr);var Vr=Object.prototype.propertyIsEnumerable;var Pr=!Vr.call("beep","0");function Fr(r,e){var t;return null!=r&&(!(t=Vr.call(r,e))&&Pr&&er(r)?!Tr(e=+e)&&br(e)&&e>=0&&e<r.length:t)}var Nr=Fr((function(){}),"prototype"),$r=!Fr({toString:null},"toString");function Cr(r){return r!=r}function Lr(r){return tr(r)&&Cr(r)}function Br(r){return ar(r)&&Cr(r.valueOf())}function Rr(r){return Lr(r)||Br(r)}q(Rr,"isPrimitive",Lr),q(Rr,"isObject",Br);var Gr=9007199254740991;function Wr(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&yr(o.length)&&o.length>=0&&o.length<=Gr||J(r)))throw new TypeError(W("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!br(t))throw new TypeError(W("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Rr(e)){for(;i<n;i++)if(Rr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Mr=/./;function Xr(r){return"boolean"==typeof r}var Zr=Boolean,Yr=Boolean.prototype.toString;var Ur=n();function Hr(r){return"object"==typeof r&&(r instanceof Zr||(Ur?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function zr(r){return Xr(r)||Hr(r)}q(zr,"isPrimitive",Xr),q(zr,"isObject",Hr);var Dr="object"==typeof self?self:null,qr="object"==typeof window?window:null,Jr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Kr="object"==typeof Jr?Jr:null,Qr="object"==typeof globalThis?globalThis:null;var re=function(r){if(arguments.length){if(!Xr(r))throw new TypeError(W("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Qr)return Qr;if(Dr)return Dr;if(qr)return qr;if(Kr)return Kr;throw new Error("unexpected error. Unable to resolve global object.")}(),ee=re.document&&re.document.childNodes,te=Int8Array;function ne(){return/^\s*function\s*([^(]*)/i}var ie=/^\s*function\s*([^(]*)/i;function oe(r){return null!==r&&"object"==typeof r}function ae(r){var e,t,n,i;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ie.exec(n.toString()))return e[1]}return oe(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(ne,"REGEXP",ie),q(oe,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(W("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(oe));var ue="function"==typeof Mr||"object"==typeof te||"function"==typeof ee?function(r){return ae(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ae(r).toLowerCase():e};function ce(r){return r.constructor&&r.constructor.prototype===r}var fe=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],le="undefined"==typeof window?void 0:window;var se=function(){var r;if("undefined"===ue(le))return!1;for(r in le)try{-1===Wr(fe,r)&&a(le,r)&&null!==le[r]&&"object"===ue(le[r])&&ce(le[r])}catch(r){return!0}return!1}(),pe="undefined"!=typeof window;var ge=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var de=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return Or(e)?r(_r.call(e)):r(e)}:r:function(r){var e,t,n,i,o,u,c;if(i=[],Or(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!kr(r))return i;t=Nr&&n}for(o in r)t&&"prototype"===o||!a(r,o)||i.push(String(o));if($r)for(e=function(r){if(!1===pe&&!se)return ce(r);try{return ce(r)}catch(r){return!1}}(r),c=0;c<ge.length;c++)u=ge[c],e&&"constructor"===u||!a(r,u)||i.push(String(u));return i},ye=/^[0-9]+$/;function he(r){var e,t,n,i,o;for(n=t=(e=de(r)).length,o=0,i=0;i<t;i++)ye.test(e[i])?n-=1:(e[o]=e[i],o+=1);return e.length=n,e}export{he as default};
//# sourceMappingURL=mod.js.map
