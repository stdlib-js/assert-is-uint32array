// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var n=function(){return t&&"symbol"==typeof Symbol.toStringTag},r=Object.prototype.toString,o=r;var e=function(t){return o.call(t)},l=Object.prototype.hasOwnProperty;var a=function(t,n){return null!=t&&l.call(t,n)},c="function"==typeof Symbol?Symbol.toStringTag:"",u=a,y=c,f=r;var i=e,p=function(t){var n,r,o;if(null==t)return f.call(t);r=t[y],n=u(t,y);try{t[y]=void 0}catch(n){return f.call(t)}return o=f.call(t),n?t[y]=r:delete t[y],o},b=n()?p:i,S="function"==typeof Uint32Array;function m(t){return S&&t instanceof Uint32Array||"[object Uint32Array]"===b(t)}export{m as default};
//# sourceMappingURL=mod.js.map
