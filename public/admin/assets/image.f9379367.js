import{c as L,e as d,p as Le,x as Se,J as ue,r as c,C as Te,d as je,g as ke,b as se,X as D,t as Re,o as Ge,j as p,a as F,G as Me}from"./index.bac24274.js";import{T as Fe,a as de,b as ze,P as $e,u as Ae,c as Ue}from"./index.7d445636.js";function ve(e){var o=e.title,t=e.description,r=e.actions,i=o||t,a=r&&r.length,s=i||a;return[s,i,a]}var Be=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,a=[],s;try{for(;(o===void 0||o-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(n){s={error:n}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a},Ke=function(e){var o,t=e.style,r=e.className,i=e.title,a=e.description,s=e.actions,n=e.prefixCls,I=e.simple,x=Be(ve({title:i,description:a,actions:s}),3),v=x[0],g=x[1],C=x[2];if(!v)return null;var f=n+"-footer",O=L(f,r,(o={},o[f+"-with-actions"]=C,o)),b=function(){var h=d.createElement("div",{className:n+"-actions-list"},s.map(function(E,m){return d.createElement("div",{className:n+"-actions-item",key:""+m},E)}));return I?d.createElement("div",{className:n+"-actions-list"},d.createElement(Fe,{prefixCls:n,popup:function(){return h}},d.createElement("div",{className:L(n+"-actions-item",n+"-actions-item-trigger")},d.createElement("span",null,d.createElement(Le,null))))):h};return d.createElement("div",{className:O,style:t},g&&d.createElement("div",{className:L(f+"-block",n+"-caption")},i&&d.createElement("div",{className:n+"-caption-title",title:i},i),a&&!I&&d.createElement("div",{className:n+"-caption-description",title:a},a)),C&&d.createElement("div",{className:L(f+"-block",n+"-actions")},b()))},fe=!Se&&!ue(window==null?void 0:window.IntersectionObserver);function Je(e,o){o===void 0&&(o={});var t=c.exports.useRef(),r=function(){t.current&&(t.current.disconnect(),t.current=null)},i=function(a){a&&(r(),fe&&(t.current=new IntersectionObserver(e,o),t.current.observe(a)))};return{observer:t.current,cor:i,dor:r}}var Xe=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},le=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,a=[],s;try{for(;(o===void 0||o-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(n){s={error:n}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a};function qe(e){var o=e.defaultInView,t=e.unobserverOnEnter,r=t===void 0?!0:t,i=e.onChange,a=e.target,s=Xe(e,["defaultInView","unobserverOnEnter","onChange","target"]),n=le(c.exports.useState(fe?o:!0),2),I=n[0],x=n[1],v=c.exports.useCallback(function(b,h){var E=le(b,1),m=E[0],$=h.thresholds.some(function(w){return m.intersectionRatio>=w}),S=$&&m.isIntersecting;x(S),i==null||i(S,m),S&&r&&h.unobserve(m.target)},[i,r]),g=Je(v,s),C=g.cor,f=g.dor,O=g.observer;return c.exports.useEffect(function(){var b=o&&r;return b?f():a&&C(a),f},[a,o,r]),{inView:I,observer:O}}var R=globalThis&&globalThis.__assign||function(){return R=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e},R.apply(this,arguments)},De=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)o.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(t[r[i]]=e[r[i]]);return t},ce=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),i,a=[],s;try{for(;(o===void 0||o-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(n){s={error:n}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(s)throw s.error}}return a},H=0,He={footerPosition:"inner",preview:!0};function Qe(e,o){var t,r=c.exports.useContext(Te),i=r.getPrefixCls,a=r.componentConfig,s=r.rtl,n=je(e,He,a==null?void 0:a.Image),I=n.style,x=n.className,v=n.src,g=n.width,C=n.height,f=n.title,O=n.description,b=n.actions,h=n.footerPosition,E=n.simple,m=n.loader,$=n.loaderClassName,S=n.error,w=n.preview,A=n.previewProps,U=n.alt,Q=n.onClick,B=n.index,W=n._index,Y=n.onError,Z=n.onLoad,N=n.lazyload,me=De(n,["style","className","src","width","height","title","description","actions","footerPosition","simple","loader","loaderClassName","error","preview","previewProps","alt","onClick","index","_index","onError","onLoad","lazyload"]),pe=ke(),T=c.exports.useContext($e),j=T.previewGroup,ge=T.handleVisibleChange,be=T.registerPreviewUrl,he=T.registerPreviewProps,we=T.setCurrentIndex,y=c.exports.useMemo(function(){return se(A)?A:{}},[A]),ye=c.exports.useMemo(function(){return se(N)?N:{}},[N]),_=c.exports.useMemo(function(){return D(B)||D(W)?(H=D(B)?B:W,H):H++},[]),K=y.src||v,xe=ce(ve({title:f,description:O,actions:b}),1),J=xe[0],k=Ae("beforeLoad"),ee=k.isLoading,X=k.isError,V=k.isLoaded,Ce=k.isBeforeLoad,G=k.setStatus,M=c.exports.useRef(!1),re=ce(Re(!1,{defaultValue:y.defaultVisible,value:y.visible}),2),te=re[0],_e=re[1],q=c.exports.useMemo(function(){return Ge(y,["visible","defaultVisible","src","onVisibleChange"])},[y]),l=i("image"),Pe=!ue(y.visible),Ie=L(l,(t={},t[l+"-rtl"]=s,t[l+"-simple"]=E,t[l+"-before-load"]=Ce,t[l+"-loading"]=ee,t[l+"-loading-error"]=X,t[l+"-with-footer-inner"]=V&&J&&h==="inner",t[l+"-with-footer-outer"]=V&&J&&h==="outer",t[l+"-with-preview"]=V&&w&&!X&&!Pe,t),x),P=c.exports.useRef();function Oe(u){M.current=!0,G("loaded"),Z&&Z(u)}function Ee(u){M.current=!0,G("error"),Y&&Y(u)}function ie(u){w&&j?(we(_),ge(!0)):w&&ne(!0),Q&&Q(u)}function ne(u){y.onVisibleChange&&y.onVisibleChange(u,te),_e(u)}var oe=qe(R({target:P.current,defaultInView:!N},ye)).inView;c.exports.useEffect(function(){M.current=!1},[v]),c.exports.useEffect(function(){P.current&&(oe?((P.current.src||v)&&P.current.src!==v&&(P.current.src=v),!M.current&&!P.current.complete&&G("loading")):G("lazyload"))},[v,oe]),c.exports.useEffect(function(){if(!!j){var u=he(_,q);return function(){return u(_)}}},[_,j,q]),c.exports.useEffect(function(){if(!!j){var u=be(_,K,w);return function(){return u(_)}}},[_,j,K,w]);var Ne=F("div",{className:l+"-error",children:[p("div",{className:l+"-error-icon",children:p(Ue,{})}),U&&p("div",{className:l+"-error-alt",children:U})]}),ae=p("div",{className:L(l+"-loader",$),children:F("div",{className:l+"-loader-spin",children:[p(Me,{}),p("div",{className:l+"-loader-spin-text",children:"Loading"})]})}),Ve=function(){if(m===!0)return ae;var u=m||ae;return N||m?u:null};return F("div",{className:Ie,style:Object.assign({width:g,height:C},I),ref:o,children:[p("img",{...R({ref:P,className:l+"-img",tabIndex:0},pe({onPressEnter:ie}),me,N||v===void 0?{}:{src:v},{title:f,width:g,height:C,onLoad:Oe,onError:Ee,onClick:ie,alt:U})}),!V&&F("div",{className:l+"-overlay",children:[X&&(S||Ne),ee&&Ve()]}),V&&J&&p(Ke,{title:f,description:O,actions:b,prefixCls:l,simple:E}),V&&w&&p(de,{...R({visible:te,src:K},q,{onVisibleChange:ne})})]})}var We=d.forwardRef(Qe),z=We;z.Preview=de;z.PreviewGroup=ze;z.displayName="Image";var er=z;export{er as I};
