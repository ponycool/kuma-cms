import{r as C,C as Ue,u as qe,m as Ge,j as f,aa as Xe,c as Je,aq as Qe,a2 as Ze,a as K,F as Ye,B as Y,z as ge,aC as et,e as tt,a7 as rt,a8 as nt,d as L,P as ot,a3 as it,ap as at}from"./index.ae7ab947.js";var k=globalThis&&globalThis.__assign||function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},k.apply(this,arguments)},ut=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r},be=globalThis&&globalThis.__read||function(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),o,i=[],u;try{for(;(t===void 0||t-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(c){u={error:c}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(u)throw u.error}}return i},ct={position:"top",okType:"primary",icon:f(Qe,{}),blurToHide:!0,unmountOnExit:!0,trigger:"click",escToClose:!0};function st(e,t){var r,n=C.exports.useContext(Ue),o=n.getPrefixCls,i=n.locale,u=n.componentConfig,c=n.rtl,a=qe(e,ct,u==null?void 0:u.Popconfirm),s=a.style,l=a.className,h=a.children,v=a.position,w=a.getPopupContainer,M=a.blurToHide,P=a.unmountOnExit,q=a.trigger,T=a.escToClose,A=a.onVisibleChange,O=a.triggerProps,N=a.title,D=a.icon,Ee=a.okText,Fe=a.cancelText,Ie=a.okType,Ve=a.okButtonProps,Re=a.cancelButtonProps,Me=a.autoFocus,Be=a.focusLock,B=a.content,ze=ut(a,["style","className","children","position","getPopupContainer","blurToHide","unmountOnExit","trigger","escToClose","onVisibleChange","triggerProps","title","icon","okText","cancelText","okType","okButtonProps","cancelButtonProps","autoFocus","focusLock","content"]),pe=be(Ge(!1,{defaultValue:a.defaultPopupVisible,value:a.popupVisible}),2),z=pe[0],He=pe[1],de=be(C.exports.useState(!1),2),ve=de[0],H=de[1],y=o("popconfirm"),ye=!Ze(B),me=function(g){"popupVisible"in a||He(g),O&&O.onVisibleChange&&O.onVisibleChange(g),A&&A(g)},G=function(){me(!1)},Le=function(g){G(),a.onCancel&&a.onCancel(g)},Ke=function(g){var he=a.onOk||a.onConfirm,E;he&&(E=he(g)),E&&E.then&&(H(!0),E.then(function(){G()},function($e){H(!1),console.error($e)})),E||G()},We=function(){var g=K(Ye,{children:[f(Y,{...k({onClick:Le,size:"mini"},Re),children:Fe||i.Popconfirm.cancelText}),f(Y,{...k({loading:ve,onClick:Ke,size:"mini",type:Ie},Ve),children:Ee||i.Popconfirm.okText})]});return K("div",{className:y+"-wrapper",children:[K("div",{className:y+"-title",children:[D&&f("span",{className:y+"-title-icon",children:D}),f("div",{className:y+"-title-text",children:ge(N)?N():N})]}),ye&&f("div",{className:y+"-inner-content",children:ge(B)?B():B}),Be?f(et,{returnFocus:!0,as:"div",className:y+"-btn",crossFrame:!1,disabled:!z,autoFocus:!!Me,children:g}):f("div",{className:y+"-btn",children:g})]})};return C.exports.useEffect(function(){return!z&&ve&&H(!1),function(){H(!1)}},[z]),f(Xe,{...k({},ze,{ref:t,style:k({maxWidth:350},s),className:Je(l,(r={},r[y+"-rtl"]=c,r[y+"-has-content"]=ye,r)),prefixCls:y,getPopupContainer:w,position:v,trigger:q,escToClose:T,popupVisible:z,content:We,unmountOnExit:P,blurToHide:M,popupHoverStay:!0,triggerProps:O,onVisibleChange:me,childrenPrefix:y}),children:typeof h=="string"?f("span",{children:h}):h})}var Ae=C.exports.forwardRef(st);Ae.displayName="Popconfirm";var ft=Ae;function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Oe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Pe(Object(r),!0).forEach(function(n){nt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function lt(e,t){var r=C.exports.useContext(rt),n=r.prefixCls,o=n===void 0?"arco":n,i=e.spin,u=e.className,c=Oe(Oe({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(u?u+" ":"").concat(o,"-icon ").concat(o,"-icon-delete")});return i&&(c.className="".concat(c.className," ").concat(o,"-icon-loading")),delete c.spin,delete c.isIcon,f("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:f("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"})})}var ie=tt.forwardRef(lt);ie.defaultProps={isIcon:!0};ie.displayName="IconDelete";var wt=ie;function kt({children:e}){return Array.isArray(e)?e.length<3?f(L,{children:e}):K(L,{children:[e.slice(0,2),f(ot,{position:"bottom",content:f(L,{direction:"vertical",children:e.slice(2)}),children:f(Y,{type:"text",icon:f(it,{})})})]}):f(L,{children:e})}function m(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function _(e){return!!e&&!!e[p]}function j(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===bt}(e)||Array.isArray(e)||!!e[Te]||!!(!((t=e.constructor)===null||t===void 0)&&t[Te])||ae(e)||ue(e))}function I(e,t,r){r===void 0&&(r=!1),S(e)===0?(r?Object.keys:le)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function S(e){var t=e[p];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ae(e)?2:ue(e)?3:0}function ee(e,t){return S(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function pt(e,t){return S(e)===2?e.get(t):e[t]}function Ne(e,t,r){var n=S(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function dt(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ae(e){return ht&&e instanceof Map}function ue(e){return gt&&e instanceof Set}function x(e){return e.o||e.t}function ce(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Pt(e);delete t[p];for(var r=le(t),n=0;n<r.length;n++){var o=r[n],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function V(e,t){return t===void 0&&(t=!1),se(e)||_(e)||!j(e)||(S(e)>1&&(e.set=e.add=e.clear=e.delete=vt),Object.freeze(e),t&&I(e,function(r,n){return V(n,!0)},!0)),e}function vt(){m(2)}function se(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function b(e){var t=Ot[e];return t||m(18,e),t}function xe(){return R}function X(e,t){t&&(b("Patches"),e.u=[],e.s=[],e.v=t)}function W(e){te(e),e.p.forEach(yt),e.p=null}function te(e){e===R&&(R=e.l)}function Ce(e){return R={p:[],l:R,h:e,m:!0,_:0}}function yt(e){var t=e[p];t.i===0||t.i===1?t.j():t.g=!0}function J(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||b("ES5").S(t,e,n),n?(r[p].P&&(W(t),m(4)),j(e)&&(e=$(t,e),t.l||U(t,e)),t.u&&b("Patches").M(r[p].t,e,t.u,t.s)):e=$(t,r,[]),W(t),t.u&&t.v(t.u,t.s),e!==De?e:void 0}function $(e,t,r){if(se(t))return t;var n=t[p];if(!n)return I(t,function(c,a){return je(e,n,t,c,a,r)},!0),t;if(n.A!==e)return t;if(!n.P)return U(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=ce(n.k):n.o,i=o,u=!1;n.i===3&&(i=new Set(o),o.clear(),u=!0),I(i,function(c,a){return je(e,n,o,c,a,r,u)}),U(e,o,!1),r&&e.u&&b("Patches").N(n,r,e.u,e.s)}return n.o}function je(e,t,r,n,o,i,u){if(_(o)){var c=$(e,o,i&&t&&t.i!==3&&!ee(t.R,n)?i.concat(n):void 0);if(Ne(r,n,c),!_(c))return;e.m=!1}else u&&r.add(o);if(j(o)&&!se(o)){if(!e.h.D&&e._<1)return;$(e,o),t&&t.A.l||U(e,o)}}function U(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&V(t,r)}function Q(e,t){var r=e[p];return(r?x(r):e)[t]}function we(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function re(e){e.P||(e.P=!0,e.l&&re(e.l))}function Z(e){e.o||(e.o=ce(e.t))}function ne(e,t,r){var n=ae(t)?b("MapSet").F(t,r):ue(t)?b("MapSet").T(t,r):e.O?function(o,i){var u=Array.isArray(o),c={i:u?1:0,A:i?i.A:xe(),P:!1,I:!1,R:{},l:i,t:o,k:null,o:null,j:null,C:!1},a=c,s=oe;u&&(a=[c],s=F);var l=Proxy.revocable(a,s),h=l.revoke,v=l.proxy;return c.k=v,c.j=h,v}(t,r):b("ES5").J(t,r);return(r?r.A:xe()).p.push(n),n}function mt(e){return _(e)||m(22,e),function t(r){if(!j(r))return r;var n,o=r[p],i=S(r);if(o){if(!o.P&&(o.i<4||!b("ES5").K(o)))return o.t;o.I=!0,n=ke(r,i),o.I=!1}else n=ke(r,i);return I(n,function(u,c){o&&pt(o.t,u)===c||Ne(n,u,t(c))}),i===3?new Set(n):n}(e)}function ke(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ce(e)}var _e,R,fe=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",ht=typeof Map!="undefined",gt=typeof Set!="undefined",Se=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",De=fe?Symbol.for("immer-nothing"):((_e={})["immer-nothing"]=!0,_e),Te=fe?Symbol.for("immer-draftable"):"__$immer_draftable",p=fe?Symbol.for("immer-state"):"__$immer_state",bt=""+Object.prototype.constructor,le=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Pt=Object.getOwnPropertyDescriptors||function(e){var t={};return le(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Ot={},oe={get:function(e,t){if(t===p)return e;var r=x(e);if(!ee(r,t))return function(o,i,u){var c,a=we(i,u);return a?"value"in a?a.value:(c=a.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!j(n)?n:n===Q(e.t,t)?(Z(e),e.o[t]=ne(e.A.h,n,e)):n},has:function(e,t){return t in x(e)},ownKeys:function(e){return Reflect.ownKeys(x(e))},set:function(e,t,r){var n=we(x(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=Q(x(e),t),i=o==null?void 0:o[p];if(i&&i.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(dt(r,o)&&(r!==void 0||ee(e.t,t)))return!0;Z(e),re(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return Q(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Z(e),re(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=x(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){m(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){m(12)}},F={};I(oe,function(e,t){F[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),F.deleteProperty=function(e,t){return F.set.call(this,e,t,void 0)},F.set=function(e,t,r){return oe.set.call(this,e[0],t,r,e[0])};var xt=function(){function e(r){var n=this;this.O=Se,this.D=!0,this.produce=function(o,i,u){if(typeof o=="function"&&typeof i!="function"){var c=i;i=o;var a=n;return function(P){var q=this;P===void 0&&(P=c);for(var T=arguments.length,A=Array(T>1?T-1:0),O=1;O<T;O++)A[O-1]=arguments[O];return a.produce(P,function(N){var D;return(D=i).call.apply(D,[q,N].concat(A))})}}var s;if(typeof i!="function"&&m(6),u!==void 0&&typeof u!="function"&&m(7),j(o)){var l=Ce(n),h=ne(n,o,void 0),v=!0;try{s=i(h),v=!1}finally{v?W(l):te(l)}return typeof Promise!="undefined"&&s instanceof Promise?s.then(function(P){return X(l,u),J(P,l)},function(P){throw W(l),P}):(X(l,u),J(s,l))}if(!o||typeof o!="object"){if((s=i(o))===void 0&&(s=o),s===De&&(s=void 0),n.D&&V(s,!0),u){var w=[],M=[];b("Patches").M(o,s,w,M),u(w,M)}return s}m(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(s){for(var l=arguments.length,h=Array(l>1?l-1:0),v=1;v<l;v++)h[v-1]=arguments[v];return n.produceWithPatches(s,function(w){return o.apply(void 0,[w].concat(h))})};var u,c,a=n.produce(o,i,function(s,l){u=s,c=l});return typeof Promise!="undefined"&&a instanceof Promise?a.then(function(s){return[s,u,c]}):[a,u,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){j(r)||m(8),_(r)&&(r=mt(r));var n=Ce(this),o=ne(this,r,void 0);return o[p].C=!0,te(n),o},t.finishDraft=function(r,n){var o=r&&r[p],i=o.A;return X(i,n),J(void 0,i)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!Se&&m(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var i=n[o];if(i.path.length===0&&i.op==="replace"){r=i.value;break}}o>-1&&(n=n.slice(o+1));var u=b("Patches").$;return _(r)?u(r,n):this.produce(r,function(c){return u(c,n)})},e}(),d=new xt,Ct=d.produce;d.produceWithPatches.bind(d);d.setAutoFreeze.bind(d);d.setUseProxies.bind(d);d.applyPatches.bind(d);d.createDraft.bind(d);d.finishDraft.bind(d);function _t(e){var t=C.exports.useState(function(){return V(typeof e=="function"?e():e,!0)}),r=t[1];return[t[0],C.exports.useCallback(function(n){r(typeof n=="function"?Ct(n):V(n))},[])]}function St(e){var r,n;async function t(){const o=await e.reqDel(e.params);o.code===0&&(at.success(o.message),e.reload())}return f(ft,{focusLock:!0,title:(r=e.title)!=null?r:"\u5220\u9664\u786E\u8BA4",content:(n=e.content)!=null?n:"\u786E\u8BA4\u5220\u9664\u5417?",onOk:t,children:e.children})}export{kt as C,St as D,wt as I,_t as i};
