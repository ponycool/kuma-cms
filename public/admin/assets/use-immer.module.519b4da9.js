import{r as T}from"./index.2a82b82e.js";function v(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function g(t){return!!t&&!!t[l]}function m(t){var e;return!!t&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===ht}(t)||Array.isArray(t)||!!t[ot]||!!(!((e=t.constructor)===null||e===void 0)&&e[ot])||C(t)||X(t))}function w(t,e,r){r===void 0&&(r=!1),O(t)===0?(r?Object.keys:H)(t).forEach(function(n){r&&typeof n=="symbol"||e(n,t[n],t)}):t.forEach(function(n,o){return e(o,n,t)})}function O(t){var e=t[l];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:C(t)?2:X(t)?3:0}function M(t,e){return O(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function at(t,e){return O(t)===2?t.get(e):t[e]}function it(t,e,r){var n=O(t);n===2?t.set(e,r):n===3?t.add(r):t[e]=r}function st(t,e){return t===e?t!==0||1/t==1/e:t!=t&&e!=e}function C(t){return yt&&t instanceof Map}function X(t){return dt&&t instanceof Set}function b(t){return t.o||t.t}function q(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=bt(t);delete e[l];for(var r=H(e),n=0;n<r.length;n++){var o=r[n],i=e[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function A(t,e){return e===void 0&&(e=!1),B(t)||g(t)||!m(t)||(O(t)>1&&(t.set=t.add=t.clear=t.delete=lt),Object.freeze(t),e&&w(t,function(r,n){return A(n,!0)},!0)),t}function lt(){v(2)}function B(t){return t==null||typeof t!="object"||Object.isFrozen(t)}function d(t){var e=mt[t];return e||v(18,t),e}function Z(){return S}function N(t,e){e&&(d("Patches"),t.u=[],t.s=[],t.v=e)}function R(t){K(t),t.p.forEach(pt),t.p=null}function K(t){t===S&&(S=t.l)}function V(t){return S={p:[],l:S,h:t,m:!0,_:0}}function pt(t){var e=t[l];e.i===0||e.i===1?e.j():e.g=!0}function F(t,e){e._=e.p.length;var r=e.p[0],n=t!==void 0&&t!==r;return e.h.O||d("ES5").S(e,t,n),n?(r[l].P&&(R(e),v(4)),m(t)&&(t=_(e,t),e.l||k(e,t)),e.u&&d("Patches").M(r[l].t,t,e.u,e.s)):t=_(e,r,[]),R(e),e.u&&e.v(e.u,e.s),t!==ut?t:void 0}function _(t,e,r){if(B(e))return e;var n=e[l];if(!n)return w(e,function(f,a){return Y(t,n,e,f,a,r)},!0),e;if(n.A!==t)return e;if(!n.P)return k(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=q(n.k):n.o,i=o,u=!1;n.i===3&&(i=new Set(o),o.clear(),u=!0),w(i,function(f,a){return Y(t,n,o,f,a,r,u)}),k(t,o,!1),r&&t.u&&d("Patches").N(n,r,t.u,t.s)}return n.o}function Y(t,e,r,n,o,i,u){if(g(o)){var f=_(t,o,i&&e&&e.i!==3&&!M(e.R,n)?i.concat(n):void 0);if(it(r,n,f),!g(f))return;t.m=!1}else u&&r.add(o);if(m(o)&&!B(o)){if(!t.h.D&&t._<1)return;_(t,o),e&&e.A.l||k(t,o)}}function k(t,e,r){r===void 0&&(r=!1),!t.l&&t.h.D&&t.m&&A(e,r)}function z(t,e){var r=t[l];return(r?b(r):t)[e]}function tt(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function W(t){t.P||(t.P=!0,t.l&&W(t.l))}function I(t){t.o||(t.o=q(t.t))}function U(t,e,r){var n=C(e)?d("MapSet").F(e,r):X(e)?d("MapSet").T(e,r):t.O?function(o,i){var u=Array.isArray(o),f={i:u?1:0,A:i?i.A:Z(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},a=f,c=$;u&&(a=[f],c=j);var s=Proxy.revocable(a,c),P=s.revoke,y=s.proxy;return f.k=y,f.j=P,y}(e,r):d("ES5").J(e,r);return(r?r.A:Z()).p.push(n),n}function vt(t){return g(t)||v(22,t),function e(r){if(!m(r))return r;var n,o=r[l],i=O(r);if(o){if(!o.P&&(o.i<4||!d("ES5").K(o)))return o.t;o.I=!0,n=et(r,i),o.I=!1}else n=et(r,i);return w(n,function(u,f){o&&at(o.t,u)===f||it(n,u,e(f))}),i===3?new Set(n):n}(t)}function et(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return q(t)}var rt,S,G=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",yt=typeof Map!="undefined",dt=typeof Set!="undefined",nt=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",ut=G?Symbol.for("immer-nothing"):((rt={})["immer-nothing"]=!0,rt),ot=G?Symbol.for("immer-draftable"):"__$immer_draftable",l=G?Symbol.for("immer-state"):"__$immer_state",ht=""+Object.prototype.constructor,H=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,bt=Object.getOwnPropertyDescriptors||function(t){var e={};return H(t).forEach(function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)}),e},mt={},$={get:function(t,e){if(e===l)return t;var r=b(t);if(!M(r,e))return function(o,i,u){var f,a=tt(i,u);return a?"value"in a?a.value:(f=a.get)===null||f===void 0?void 0:f.call(o.k):void 0}(t,r,e);var n=r[e];return t.I||!m(n)?n:n===z(t.t,e)?(I(t),t.o[e]=U(t.A.h,n,t)):n},has:function(t,e){return e in b(t)},ownKeys:function(t){return Reflect.ownKeys(b(t))},set:function(t,e,r){var n=tt(b(t),e);if(n!=null&&n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=z(b(t),e),i=o==null?void 0:o[l];if(i&&i.t===r)return t.o[e]=r,t.R[e]=!1,!0;if(st(r,o)&&(r!==void 0||M(t.t,e)))return!0;I(t),W(t)}return t.o[e]===r&&(r!==void 0||e in t.o)||Number.isNaN(r)&&Number.isNaN(t.o[e])||(t.o[e]=r,t.R[e]=!0),!0},deleteProperty:function(t,e){return z(t.t,e)!==void 0||e in t.t?(t.R[e]=!1,I(t),W(t)):delete t.R[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=b(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n&&{writable:!0,configurable:t.i!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty:function(){v(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){v(12)}},j={};w($,function(t,e){j[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),j.deleteProperty=function(t,e){return j.set.call(this,t,e,void 0)},j.set=function(t,e,r){return $.set.call(this,t[0],e,r,t[0])};var Pt=function(){function t(r){var n=this;this.O=nt,this.D=!0,this.produce=function(o,i,u){if(typeof o=="function"&&typeof i!="function"){var f=i;i=o;var a=n;return function(h){var ft=this;h===void 0&&(h=f);for(var E=arguments.length,L=Array(E>1?E-1:0),x=1;x<E;x++)L[x-1]=arguments[x];return a.produce(h,function(ct){var Q;return(Q=i).call.apply(Q,[ft,ct].concat(L))})}}var c;if(typeof i!="function"&&v(6),u!==void 0&&typeof u!="function"&&v(7),m(o)){var s=V(n),P=U(n,o,void 0),y=!0;try{c=i(P),y=!1}finally{y?R(s):K(s)}return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(h){return N(s,u),F(h,s)},function(h){throw R(s),h}):(N(s,u),F(c,s))}if(!o||typeof o!="object"){if((c=i(o))===void 0&&(c=o),c===ut&&(c=void 0),n.D&&A(c,!0),u){var D=[],J=[];d("Patches").M(o,c,D,J),u(D,J)}return c}v(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(c){for(var s=arguments.length,P=Array(s>1?s-1:0),y=1;y<s;y++)P[y-1]=arguments[y];return n.produceWithPatches(c,function(D){return o.apply(void 0,[D].concat(P))})};var u,f,a=n.produce(o,i,function(c,s){u=c,f=s});return typeof Promise!="undefined"&&a instanceof Promise?a.then(function(c){return[c,u,f]}):[a,u,f]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var e=t.prototype;return e.createDraft=function(r){m(r)||v(8),g(r)&&(r=vt(r));var n=V(this),o=U(this,r,void 0);return o[l].C=!0,K(n),o},e.finishDraft=function(r,n){var o=r&&r[l],i=o.A;return N(i,n),F(void 0,i)},e.setAutoFreeze=function(r){this.D=r},e.setUseProxies=function(r){r&&!nt&&v(20),this.O=r},e.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var u=d("Patches").$;return g(r)?u(r,n):this.produce(r,function(f){return u(f,n)})},t}(),p=new Pt,gt=p.produce;p.produceWithPatches.bind(p);p.setAutoFreeze.bind(p);p.setUseProxies.bind(p);p.applyPatches.bind(p);p.createDraft.bind(p);p.finishDraft.bind(p);function jt(t){var e=T.exports.useState(function(){return A(typeof t=="function"?t():t,!0)}),r=e[1];return[e[0],T.exports.useCallback(function(n){r(typeof n=="function"?gt(n):A(n))},[])]}export{jt as i};