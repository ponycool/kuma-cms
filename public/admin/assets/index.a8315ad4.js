import{e as Pe,r as D,a7 as Oe,j as s,a8 as we,am as x,aE as je,a as O,a6 as ne,aF as xe,ao as Ae,ap as ye,B as A,aG as Ce}from"./index.7678418b.js";import{C as De}from"./index.84664a99.js";import{P as Se}from"./index.91a608e6.js";import{r as Ie,b as Ee,P as Fe,c as ke,d as _e,C as Be}from"./index.c402e774.js";import{I as Re}from"./index.5a6422a6.js";import"./index.8f6fcdc8.js";function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?oe(Object(r),!0).forEach(function(n){we(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ne(e,t){var r=D.exports.useContext(Oe),n=r.prefixCls,o=n===void 0?"arco":n,i=e.spin,a=e.className,u=ie(ie({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(a?a+" ":"").concat(o,"-icon ").concat(o,"-icon-subscribe-add")});return i&&(u.className="".concat(u.className," ").concat(o,"-icon-loading")),delete u.spin,delete u.isIcon,s("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...u,children:s("path",{d:"M24.53 6.007H9.97c-.535 0-.97.449-.97 1.003V41.8c0 .148.152.245.28.179l15.25-7.881 14.248 7.88c.129.067.28-.03.28-.179V22.06M27.413 11.023h6.794m0 0H41m-6.794 0V4m0 7.023v7.023"})})}var V=Pe.forwardRef(Ne);V.defaultProps={isIcon:!0};V.displayName="IconSubscribeAdd";var Me=V;const{Row:qe,Col:M}=Ae;function ze(e){const[t]=x.useForm(),[r,n]=D.exports.useState(!1);async function o(){t.validate().then(async i=>{var u;n(!0);let a;e.uuid?a=await Ie({...i,uuid:e.uuid}):a=await Ee({...i,pid:(u=e.id)!=null?u:0,level:e.level?e.level+1:1}),a.code===0&&(ye.success(a.message),e.reload(),e.close(),t.resetFields())}).catch(i=>{console.log(i)}).finally(()=>{n(!1)})}return s(je,{width:800,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:o,onCancel:e.close,confirmLoading:r,children:s(x,{form:t,children:O(qe,{children:[s(M,{span:12,children:s(x.Item,{label:"\u540D\u5B57",field:"name",rules:[{required:!0,message:!0}],children:s(ne,{type:"text"})})}),s(M,{span:12,children:s(x.Item,{label:"\u7F16\u53F7",field:"code",rules:[{required:!0,message:!0}],children:s(ne,{type:"text"})})}),s(M,{span:12,children:s(x.Item,{label:"\u6392\u5E8F",field:"sortIndex",children:s(xe,{})})})]})})})}function v(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function w(e){return!!e&&!!e[d]}function g(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Ve}(e)||Array.isArray(e)||!!e[pe]||!!(!((t=e.constructor)===null||t===void 0)&&t[pe])||T(e)||X(e))}function S(e,t,r){r===void 0&&(r=!1),j(e)===0?(r?Object.keys:Y)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function j(e){var t=e[d];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:T(e)?2:X(e)?3:0}function $(e,t){return j(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Ke(e,t){return j(e)===2?e.get(t):e[t]}function he(e,t,r){var n=j(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function We(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function T(e){return Ue&&e instanceof Map}function X(e){return He&&e instanceof Set}function m(e){return e.o||e.t}function J(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Te(e);delete t[d];for(var r=Y(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function I(e,t){return t===void 0&&(t=!1),Q(e)||w(e)||!g(e)||(j(e)>1&&(e.set=e.add=e.clear=e.delete=$e),Object.freeze(e),t&&S(e,function(r,n){return I(n,!0)},!0)),e}function $e(){v(2)}function Q(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function h(e){var t=Xe[e];return t||v(18,e),t}function ue(){return E}function q(e,t){t&&(h("Patches"),e.u=[],e.s=[],e.v=t)}function _(e){G(e),e.p.forEach(Ge),e.p=null}function G(e){e===E&&(E=e.l)}function ae(e){return E={p:[],l:E,h:e,m:!0,_:0}}function Ge(e){var t=e[d];t.i===0||t.i===1?t.j():t.g=!0}function z(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||h("ES5").S(t,e,n),n?(r[d].P&&(_(t),v(4)),g(e)&&(e=B(t,e),t.l||R(t,e)),t.u&&h("Patches").M(r[d].t,e,t.u,t.s)):e=B(t,r,[]),_(t),t.u&&t.v(t.u,t.s),e!==be?e:void 0}function B(e,t,r){if(Q(t))return t;var n=t[d];if(!n)return S(t,function(u,c){return ce(e,n,t,u,c,r)},!0),t;if(n.A!==e)return t;if(!n.P)return R(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=J(n.k):n.o,i=o,a=!1;n.i===3&&(i=new Set(o),o.clear(),a=!0),S(i,function(u,c){return ce(e,n,o,u,c,r,a)}),R(e,o,!1),r&&e.u&&h("Patches").N(n,r,e.u,e.s)}return n.o}function ce(e,t,r,n,o,i,a){if(w(o)){var u=B(e,o,i&&t&&t.i!==3&&!$(t.R,n)?i.concat(n):void 0);if(he(r,n,u),!w(u))return;e.m=!1}else a&&r.add(o);if(g(o)&&!Q(o)){if(!e.h.D&&e._<1)return;B(e,o),t&&t.A.l||R(e,o)}}function R(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&I(t,r)}function K(e,t){var r=e[d];return(r?m(r):e)[t]}function le(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function L(e){e.P||(e.P=!0,e.l&&L(e.l))}function W(e){e.o||(e.o=J(e.t))}function U(e,t,r){var n=T(t)?h("MapSet").F(t,r):X(t)?h("MapSet").T(t,r):e.O?function(o,i){var a=Array.isArray(o),u={i:a?1:0,A:i?i.A:ue(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},c=u,l=H;a&&(c=[u],l=C);var f=Proxy.revocable(c,l),P=f.revoke,y=f.proxy;return u.k=y,u.j=P,y}(t,r):h("ES5").J(t,r);return(r?r.A:ue()).p.push(n),n}function Le(e){return w(e)||v(22,e),function t(r){if(!g(r))return r;var n,o=r[d],i=j(r);if(o){if(!o.P&&(o.i<4||!h("ES5").K(o)))return o.t;o.I=!0,n=se(r,i),o.I=!1}else n=se(r,i);return S(n,function(a,u){o&&Ke(o.t,a)===u||he(n,a,t(u))}),i===3?new Set(n):n}(e)}function se(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return J(e)}var fe,E,Z=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Ue=typeof Map!="undefined",He=typeof Set!="undefined",de=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",be=Z?Symbol.for("immer-nothing"):((fe={})["immer-nothing"]=!0,fe),pe=Z?Symbol.for("immer-draftable"):"__$immer_draftable",d=Z?Symbol.for("immer-state"):"__$immer_state",Ve=""+Object.prototype.constructor,Y=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Te=Object.getOwnPropertyDescriptors||function(e){var t={};return Y(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Xe={},H={get:function(e,t){if(t===d)return e;var r=m(e);if(!$(r,t))return function(o,i,a){var u,c=le(i,a);return c?"value"in c?c.value:(u=c.get)===null||u===void 0?void 0:u.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!g(n)?n:n===K(e.t,t)?(W(e),e.o[t]=U(e.A.h,n,e)):n},has:function(e,t){return t in m(e)},ownKeys:function(e){return Reflect.ownKeys(m(e))},set:function(e,t,r){var n=le(m(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=K(m(e),t),i=o==null?void 0:o[d];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(We(r,o)&&(r!==void 0||$(e.t,t)))return!0;W(e),L(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return K(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,W(e),L(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=m(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){v(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){v(12)}},C={};S(H,function(e,t){C[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),C.deleteProperty=function(e,t){return C.set.call(this,e,t,void 0)},C.set=function(e,t,r){return H.set.call(this,e[0],t,r,e[0])};var Je=function(){function e(r){var n=this;this.O=de,this.D=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var u=i;i=o;var c=n;return function(b){var me=this;b===void 0&&(b=u);for(var N=arguments.length,te=Array(N>1?N-1:0),k=1;k<N;k++)te[k-1]=arguments[k];return c.produce(b,function(ge){var re;return(re=i).call.apply(re,[me,ge].concat(te))})}}var l;if(typeof i!="function"&&v(6),a!==void 0&&typeof a!="function"&&v(7),g(o)){var f=ae(n),P=U(n,o,void 0),y=!0;try{l=i(P),y=!1}finally{y?_(f):G(f)}return typeof Promise!="undefined"&&l instanceof Promise?l.then(function(b){return q(f,a),z(b,f)},function(b){throw _(f),b}):(q(f,a),z(l,f))}if(!o||typeof o!="object"){if((l=i(o))===void 0&&(l=o),l===be&&(l=void 0),n.D&&I(l,!0),a){var F=[],ee=[];h("Patches").M(o,l,F,ee),a(F,ee)}return l}v(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(l){for(var f=arguments.length,P=Array(f>1?f-1:0),y=1;y<f;y++)P[y-1]=arguments[y];return n.produceWithPatches(l,function(F){return o.apply(void 0,[F].concat(P))})};var a,u,c=n.produce(o,i,function(l,f){a=l,u=f});return typeof Promise!="undefined"&&c instanceof Promise?c.then(function(l){return[l,a,u]}):[c,a,u]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){g(r)||v(8),w(r)&&(r=Le(r));var n=ae(this),o=U(this,r,void 0);return o[d].C=!0,G(n),o},t.finishDraft=function(r,n){var o=r&&r[d],i=o.A;return q(i,n),z(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!de&&v(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var a=h("Patches").$;return w(r)?a(r,n):this.produce(r,function(u){return a(u,n)})},e}(),p=new Je,Qe=p.produce;p.produceWithPatches.bind(p);p.setAutoFreeze.bind(p);p.setUseProxies.bind(p);p.applyPatches.bind(p);p.createDraft.bind(p);p.finishDraft.bind(p);function ve(e){var t=D.exports.useState(function(){return I(typeof e=="function"?e():e,!0)}),r=t[1];return[t[0],D.exports.useCallback(function(n){r(typeof n=="function"?Qe(n):I(n))},[])]}function Ze(e){async function t(){const r=await e.reqDel(e.params);r.code===0&&(ye.success(r.message),e.reload())}return s(Fe,{focusLock:!0,title:"\u5220\u9664\u786E\u8BA4",content:"\u4F60\u786E\u8BA4\u5220\u9664\u5417?",onOk:t,children:e.children})}function it(){const e=D.exports.useRef(),[t,r]=ve({visible:!1,close:()=>{r(a=>{a.visible=!1})}}),[n]=ve({reqDel:_e});function o(a){const u=new Map,c=[];return a.forEach(l=>u.set(l.id,{...l,children:[]})),a.forEach(l=>{const f=u.get(l.pid);f?f.children.push(u.get(l.id)):c.push(u.get(l.id))}),c}const i=[{title:"\u540D\u5B57",dataIndex:"name"},{title:"\u64CD\u4F5C",key:"option",render:(a,u)=>O(Be,{children:[O(A,{type:"text",onClick:()=>{r(c=>{c.id=u.id,c.level=u.level,c.uuid=void 0,c.visible=!0})},children:[s(Me,{}),"\u521B\u5EFA"]}),O(A,{type:"text",onClick:()=>{r(c=>{c.id=void 0,c.level=void 0,c.uuid=u.uuid,c.visible=!0})},children:[s(Ce,{}),"\u4FEE\u6539"]}),s(Ze,{reqDel:n.reqDel,params:{uuid:u.uuid},reload:()=>e.current.reload(),children:O(A,{type:"text",children:[s(Re,{}),"\u5220\u9664"]})})]})}];return O(De,{children:[s(ze,{visible:t.visible,id:t.id,level:t.level,uuid:t.uuid,close:t.close,reload:()=>e.current.reload()}),s(Se,{ref:e,request:ke,dataRender:o,columns:i,pagination:!1,pageSize:!1,toolBarRender:[s(A,{type:"primary",onClick:()=>{r(a=>{a.id=void 0,a.visible=!0,a.uuid=void 0})},children:"\u521B\u5EFA\u5206\u7C7B"},"create"),s(A,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"delete")]})]})}export{it as default};
