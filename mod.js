// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var t=function(r){return Object.keys(Object(r))},e=t;var n=function(){return function(){return 2!==(e(arguments)||"").length}(1,2)},o=void 0!==Object.keys;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return i&&"symbol"==typeof Symbol.toStringTag},f=Object.prototype.toString,a=f;var c=function(r){return a.call(r)},l=Object.prototype.hasOwnProperty;var p=function(r,t){return null!=r&&l.call(r,t)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=f;var g=c,d=function(r){var t,e,n;if(null==r)return b.call(r);e=r[y],t=s(r,y);try{r[y]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[y]=e:delete r[y],n},m=u()?d:g,h=m;var j=function(r){return"[object Arguments]"===h(r)},w=j;var _=function(){return w(arguments)}(),O="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return O({},"x",{}),!0}catch(r){return!1}},P=Object.defineProperty,E=Object.prototype,I=E.toString,T=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,N=E.__lookupSetter__;var x=function(r,t,e){var n,o,i,u;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(k.call(r,t)||N.call(r,t)?(n=r.__proto__,r.__proto__=E,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&T&&T.call(r,t,e.get),u&&A&&A.call(r,t,e.set),r},B=P,V=x,F=S()?B:V;var G=function(r,t,e){F(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})},L=G;var M=function(r){return"string"==typeof r},X=String.prototype.valueOf;var Y=m,C=function(r){try{return X.call(r),!0}catch(r){return!1}},D=u();var H=function(r){return"object"==typeof r&&(r instanceof String||(D?C(r):"[object String]"===Y(r)))},R=M,W=H;var z=L,U=function(r){return R(r)||W(r)},$=H;z(U,"isPrimitive",M),z(U,"isObject",$);var q=U;var J=function(r){return"number"==typeof r},K=Number,Q=K.prototype.toString;var Z=m,rr=K,tr=function(r){try{return Q.call(r),!0}catch(r){return!1}},er=u();var nr=function(r){return"object"==typeof r&&(r instanceof rr||(er?tr(r):"[object Number]"===Z(r)))},or=J,ir=nr;var ur=L,fr=function(r){return or(r)||ir(r)},ar=nr;ur(fr,"isPrimitive",J),ur(fr,"isObject",ar);var cr=fr;var lr=function(r){return r!=r},pr=cr.isPrimitive,vr=lr;var sr=function(r){return pr(r)&&vr(r)},yr=cr.isObject,br=lr;var gr=function(r){return yr(r)&&br(r.valueOf())},dr=sr,mr=gr;var hr=L,jr=function(r){return dr(r)||mr(r)},wr=gr;hr(jr,"isPrimitive",sr),hr(jr,"isObject",wr);var _r=jr,Or=Number.POSITIVE_INFINITY,Sr=K.NEGATIVE_INFINITY,Pr=Math.floor;var Er=function(r){return Pr(r)===r},Ir=Or,Tr=Sr,Ar=Er;var kr=function(r){return r<Ir&&r>Tr&&Ar(r)},Nr=cr.isPrimitive,xr=kr;var Br=function(r){return Nr(r)&&xr(r)},Vr=cr.isObject,Fr=kr;var Gr=function(r){return Vr(r)&&Fr(r.valueOf())},Lr=Br,Mr=Gr;var Xr=L,Yr=function(r){return Lr(r)||Mr(r)},Cr=Gr;Xr(Yr,"isPrimitive",Br),Xr(Yr,"isObject",Cr);var Dr,Hr=Yr,Rr=Object.prototype.propertyIsEnumerable;Dr=!Rr.call("beep","0");var Wr=q,zr=_r.isPrimitive,Ur=Hr.isPrimitive,$r=Rr,qr=Dr;var Jr=function(r,t){var e;return null!=r&&(!(e=$r.call(r,t))&&qr&&Wr(r)?!zr(t=+t)&&Ur(t)&&t>=0&&t<r.length:e)},Kr=Jr,Qr=m;var Zr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Qr(r)},rt=p,tt=Kr,et=Zr,nt=Er;var ot=_?j:function(r){return null!==r&&"object"==typeof r&&!et(r)&&"number"==typeof r.length&&nt(r.length)&&r.length>=0&&r.length<=4294967295&&rt(r,"callee")&&!tt(r,"callee")},it=ot,ut=t,ft=Array.prototype.slice;var at=function(r){return it(r)?ut(ft.call(r)):ut(r)},ct=Zr;var lt=function(r){return null!==r&&"object"==typeof r};L(lt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!ct(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(lt));var pt=lt;var vt=Kr((function(){}),"prototype"),st=!Kr({toString:null},"toString"),yt=Er;var bt=_r,gt=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&yt(r.length)&&r.length>=0&&r.length<=9007199254740991},dt=q.isPrimitive,mt=Hr.isPrimitive;var ht=function(r,t,e){var n,o;if(!gt(r)&&!dt(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!mt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(bt(t)){for(;o<n;o++)if(bt(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1},jt=/./;var wt=function(r){return"boolean"==typeof r},_t=Boolean.prototype.toString;var Ot=m,St=function(r){try{return _t.call(r),!0}catch(r){return!1}},Pt=u();var Et=function(r){return"object"==typeof r&&(r instanceof Boolean||(Pt?St(r):"[object Boolean]"===Ot(r)))},It=wt,Tt=Et;var At=L,kt=function(r){return It(r)||Tt(r)},Nt=Et;At(kt,"isPrimitive",wt),At(kt,"isObject",Nt);var xt=kt;var Bt=function(){return new Function("return this;")()},Vt="object"==typeof self?self:null,Ft="object"==typeof window?window:null,Gt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Lt="object"==typeof Gt?Gt:null;module.exports=Lt;var Mt=xt.isPrimitive,Xt=Bt,Yt=Vt,Ct=Ft,Dt=r(Object.freeze({__proto__:null}));var Ht=function(r){if(arguments.length){if(!Mt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Xt()}if(Yt)return Yt;if(Ct)return Ct;if(Dt)return Dt;throw new Error("unexpected error. Unable to resolve global object.")},Rt=Ht(),Wt=Rt.document&&Rt.document.childNodes,zt=Int8Array,Ut=jt,$t=Wt,qt=zt;var Jt=function(){return"function"==typeof Ut||"object"==typeof qt||"function"==typeof $t};var Kt=function(){return/^\s*function\s*([^(]*)/i},Qt=Kt;L(Qt,"REGEXP",Kt());var Zt=pt;var re=m,te=Qt.REGEXP,ee=function(r){return Zt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ne=function(r){var t,e,n;if(("Object"===(e=re(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=te.exec(n.toString()))return t[1]}return ee(r)?"Buffer":e},oe=ne;var ie=ne;var ue=function(r){var t;return null===r?"null":"object"===(t=typeof r)?oe(r).toLowerCase():t},fe=function(r){return ie(r).toLowerCase()},ae=Jt()?fe:ue;var ce,le=function(r){return r.constructor&&r.constructor.prototype===r},pe="undefined"==typeof window?void 0:window,ve=p,se=ht,ye=ae,be=le,ge=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],de=pe;ce=function(){var r;if("undefined"===ye(de))return!1;for(r in de)try{-1===se(ge,r)&&ve(de,r)&&null!==de[r]&&"object"===ye(de[r])&&be(de[r])}catch(r){return!0}return!1}();var me="undefined"!=typeof window,he=ce,je=le,we=me;var _e=pt,Oe=p,Se=ot,Pe=vt,Ee=st,Ie=function(r){if(!1===we&&!he)return je(r);try{return je(r)}catch(r){return!1}},Te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ae=t,ke=at,Ne=function(r){var t,e,n,o,i,u,f;if(o=[],Se(r)){for(f=0;f<r.length;f++)o.push(f.toString());return o}if("string"==typeof r){if(r.length>0&&!Oe(r,"0"))for(f=0;f<r.length;f++)o.push(f.toString())}else{if(!1===(n="function"==typeof r)&&!_e(r))return o;e=Pe&&n}for(i in r)e&&"prototype"===i||!Oe(r,i)||o.push(String(i));if(Ee)for(t=Ie(r),f=0;f<Te.length;f++)u=Te[f],t&&"constructor"===u||!Oe(r,u)||o.push(String(u));return o},xe=o?n()?ke:Ae:Ne,Be=/^[0-9]+$/;function Ve(r){var t,e,n,o,i;for(n=e=(t=xe(r)).length,i=0,o=0;o<e;o++)Be.test(t[o])?n-=1:(t[i]=t[o],i+=1);return t.length=n,t}export{Ve as default};
//# sourceMappingURL=mod.js.map
