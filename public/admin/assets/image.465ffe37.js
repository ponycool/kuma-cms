import{c as L,e as v,p as Ve,x as Le,J as ce,r as u,C as Se,f as Te,g as je,d as ae,X as q,t as ke,o as Re,j as g,a as M,G as Ge}from"./index.2d436ed0.js";import{T as Me,a as ue,b as Fe,P as ze,u as $e,c as Ae}from"./index.002545e6.js";function ve(e){var o=e.title,t=e.description,r=e.actions,i=o||t,a=r&&r.length,s=i||a;return[s,i,a]}var Ue=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,a=[],s;try{for(;(o===void 0||o-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(n){s={error:n}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a},Be=function(e){var o,t=e.style,r=e.className,i=e.title,a=e.description,s=e.actions,n=e.prefixCls,P=e.simple,x=Ue(ve({title:i,description:a,actions:s}),3),d=x[0],p=x[1],C=x[2];if(!d)return null;var f=n+"-footer",I=L(f,r,(o={},o[f+"-with-actions"]=C,o)),b=function(){var h=v.createElement("div",{className:n+"-actions-list"},s.map(function(O,m){return v.createElement("div",{className:n+"-actions-item",key:""+m},O)}));return P?v.createElement("div",{className:n+"-actions-list"},v.createElement(Me,{prefixCls:n,popup:function(){return h}},v.createElement("div",{className:L(n+"-actions-item",n+"-actions-item-trigger")},v.createElement("span",null,v.createElement(Ve,null))))):h};return v.createElement("div",{className:I,style:t},p&&v.createElement("div",{className:L(f+"-block",n+"-caption")},i&&v.createElement("div",{className:n+"-caption-title",title:i},i),a&&!P&&v.createElement("div",{className:n+"-caption-description",title:a},a)),C&&v.createElement("div",{className:L(f+"-block",n+"-actions")},b()))},de=!Le&&!ce(window==null?void 0:window.IntersectionObserver);function Ke(e,o){o===void 0&&(o={});var t=u.exports.useRef(),r=function(){t.current&&(t.current.disconnect(),t.current=null)},i=function(a){a&&(r(),de&&(t.current=new IntersectionObserver(e,o),t.current.observe(a)))};return{observer:t.current,cor:i,dor:r}}var Je=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},se=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,a=[],s;try{for(;(o===void 0||o-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(n){s={error:n}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a};function Xe(e){var o=e.defaultInView,t=e.unobserverOnEnter,r=t===void 0?!0:t,i=e.onChange,a=e.target,s=Je(e,["defaultInView","unobserverOnEnter","onChange","target"]),n=se(u.exports.useState(de?o:!0),2),P=n[0],x=n[1],d=u.exports.useCallback(function(b,h){var O=se(b,1),m=O[0],z=h.thresholds.some(function(w){return m.intersectionRatio>=w}),S=z&&m.isIntersecting;x(S),i==null||i(S,m),S&&r&&h.unobserve(m.target)},[i,r]),p=Ke(d,s),C=p.cor,f=p.dor,I=p.observer;return u.exports.useEffect(function(){var b=o&&r;return b?f():a&&C(a),f},[a,o,r]),{inView:P,observer:I}}var R=globalThis&&globalThis.__assign||function(){return R=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},R.apply(this,arguments)},qe=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},le=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,a=[],s;try{for(;(o===void 0||o-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(n){s={error:n}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a},D=0,De={footerPosition:"inner",preview:!0};function He(e,o){var t,r=u.exports.useContext(Se),i=r.getPrefixCls,a=r.componentConfig,s=r.rtl,n=Te(e,De,a==null?void 0:a.Image),P=n.style,x=n.className,d=n.src,p=n.width,C=n.height,f=n.title,I=n.description,b=n.actions,h=n.footerPosition,O=n.simple,m=n.loader,z=n.loaderClassName,S=n.error,w=n.preview,$=n.previewProps,A=n.alt,H=n.onClick,U=n.index,Q=n._index,W=n.onError,Y=n.onLoad,E=n.lazyload,fe=qe(n,["style","className","src","width","height","title","description","actions","footerPosition","simple","loader","loaderClassName","error","preview","previewProps","alt","onClick","index","_index","onError","onLoad","lazyload"]),me=je(),T=u.exports.useContext(ze),j=T.previewGroup,ge=T.handleVisibleChange,pe=T.registerPreviewUrl,be=T.registerPreviewProps,he=T.setCurrentIndex,y=u.exports.useMemo(function(){return ae($)?$:{}},[$]),we=u.exports.useMemo(function(){return ae(E)?E:{}},[E]),_=u.exports.useMemo(function(){return q(U)||q(Q)?(D=q(U)?U:Q,D):D++},[]),B=y.src||d,ye=le(ve({title:f,description:I,actions:b}),1),K=ye[0],k=$e("beforeLoad"),Z=k.isLoading,J=k.isError,N=k.isLoaded,xe=k.isBeforeLoad,G=k.setStatus,ee=le(ke(!1,{defaultValue:y.defaultVisible,value:y.visible}),2),re=ee[0],Ce=ee[1],X=u.exports.useMemo(function(){return Re(y,["visible","defaultVisible","src","onVisibleChange"])},[y]),l=i("image"),_e=!ce(y.visible),Pe=L(l,(t={},t[l+"-rtl"]=s,t[l+"-simple"]=O,t[l+"-before-load"]=xe,t[l+"-loading"]=Z,t[l+"-loading-error"]=J,t[l+"-with-footer-inner"]=N&&K&&h==="inner",t[l+"-with-footer-outer"]=N&&K&&h==="outer",t[l+"-with-preview"]=N&&w&&!J&&!_e,t),x),V=u.exports.useRef();function Ie(c){G("loaded"),Y&&Y(c)}function Oe(c){G("error"),W&&W(c)}function te(c){w&&j?(he(_),ge(!0)):w&&ie(!0),H&&H(c)}function ie(c){y.onVisibleChange&&y.onVisibleChange(c,re),Ce(c)}var ne=Xe(R({target:V.current,defaultInView:!E},we)).inView;u.exports.useEffect(function(){V.current&&(ne?(V.current.src||d)&&V.current.src!==d&&(V.current.src=d,G("loading")):G("lazyload"))},[d,ne]),u.exports.useEffect(function(){if(!!j){var c=be(_,X);return function(){return c(_)}}},[_,j,X]),u.exports.useEffect(function(){if(!!j){var c=pe(_,B,w);return function(){return c(_)}}},[_,j,B,w]);var Ee=M("div",{className:l+"-error",children:[g("div",{className:l+"-error-icon",children:g(Ae,{})}),A&&g("div",{className:l+"-error-alt",children:A})]}),oe=g("div",{className:L(l+"-loader",z),children:M("div",{className:l+"-loader-spin",children:[g(Ge,{}),g("div",{className:l+"-loader-spin-text",children:"Loading"})]})}),Ne=function(){if(m===!0)return oe;var c=m||oe;return E||m?c:null};return M("div",{className:Pe,style:Object.assign({width:p,height:C},P),ref:o,children:[g("img",{...R({ref:V,className:l+"-img",tabIndex:0},me({onPressEnter:te}),fe,E||d===void 0?{}:{src:d},{title:f,width:p,height:C,onLoad:Ie,onError:Oe,onClick:te,alt:A})}),!N&&M("div",{className:l+"-overlay",children:[J&&(S||Ee),Z&&Ne()]}),N&&K&&g(Be,{title:f,description:I,actions:b,prefixCls:l,simple:O}),N&&w&&g(ue,{...R({visible:re,src:B},X,{onVisibleChange:ie})})]})}var Qe=v.forwardRef(He),F=Qe;F.Preview=ue;F.PreviewGroup=Fe;F.displayName="Image";var Ze=F;export{Ze as I};
