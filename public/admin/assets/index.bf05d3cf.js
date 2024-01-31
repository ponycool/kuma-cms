import{r as u,C as we,u as Pe,a as _e,j as s,T as Me,c as $,I as ze,i as Ae,b as F,F as Oe,B,d as he,e as He,f as b,g as Ee,h as De,k as Ie,l as Ue,m as be,n as le,o as qe,p as Ke,q as We,S as ce,P as Je}from"./index.7f21dead.js";import{T as Qe,I as Te,a as Xe,P as Ye,u as Ze,b as er}from"./index.911244a5.js";import{C as rr}from"./index.7c2b7478.js";import{P as tr}from"./index.d074ea61.js";import"./index.0d40f1e8.js";var z=globalThis&&globalThis.__assign||function(){return z=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},z.apply(this,arguments)},nr=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t},ye=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,l=[],c;try{for(;(o===void 0||o-- >0)&&!(n=r.next()).done;)l.push(n.value)}catch(i){c={error:i}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(c)throw c.error}}return l},or={position:"top",okType:"primary",icon:s(ze,{}),blurToHide:!0,unmountOnExit:!0,trigger:"click",escToClose:!0};function ir(e,o){var t,r=u.exports.useContext(we),n=r.getPrefixCls,l=r.locale,c=r.componentConfig,i=r.rtl,a=Pe(e,or,c==null?void 0:c.Popconfirm),I=a.style,v=a.className,y=a.children,T=a.position,m=a.getPopupContainer,k=a.blurToHide,_=a.unmountOnExit,O=a.trigger,L=a.escToClose,g=a.onVisibleChange,S=a.triggerProps,N=a.title,x=a.icon,A=a.okText,H=a.cancelText,J=a.okType,D=a.okButtonProps,Q=a.cancelButtonProps,X=a.autoFocus,Y=a.focusLock,C=a.content,ie=nr(a,["style","className","children","position","getPopupContainer","blurToHide","unmountOnExit","trigger","escToClose","onVisibleChange","triggerProps","title","icon","okText","cancelText","okType","okButtonProps","cancelButtonProps","autoFocus","focusLock","content"]),Z=ye(_e(!1,{defaultValue:a.defaultPopupVisible,value:a.popupVisible}),2),E=Z[0],R=Z[1],ee=ye(u.exports.useState(!1),2),re=ee[0],G=ee[1],h=n("popconfirm"),w=!Ae(C),te=function(f){"popupVisible"in a||R(f),S&&S.onVisibleChange&&S.onVisibleChange(f),g&&g(f)},P=function(){te(!1)},U=function(f){P(),a.onCancel&&a.onCancel(f)},ae=function(f){var K=a.onOk||a.onConfirm,V;K&&(V=K(f)),V&&V.then&&(G(!0),V.then(function(){P()},function(j){G(!1),console.error(j)})),V||P()},q=function(){var f=F(Oe,{children:[s(B,{...z({onClick:U,size:"mini"},Q),children:H||l.Popconfirm.cancelText}),s(B,{...z({loading:re,onClick:ae,size:"mini",type:J},D),children:A||l.Popconfirm.okText})]});return F("div",{className:h+"-wrapper",children:[F("div",{className:h+"-title",children:[x&&s("span",{className:h+"-title-icon",children:x}),s("div",{className:h+"-title-text",children:he(N)?N():N})]}),w&&s("div",{className:h+"-inner-content",children:he(C)?C():C}),Y?s(He,{returnFocus:!0,as:"div",className:h+"-btn",crossFrame:!1,disabled:!E,autoFocus:!!X,children:f}):s("div",{className:h+"-btn",children:f})]})};return u.exports.useEffect(function(){return!E&&re&&G(!1),function(){G(!1)}},[E]),s(Me,{...z({},ie,{ref:o,style:z({maxWidth:350},I),className:$(v,(t={},t[h+"-rtl"]=i,t[h+"-has-content"]=w,t)),prefixCls:h,getPopupContainer:m,position:T,trigger:O,escToClose:L,popupVisible:E,content:q,unmountOnExit:_,blurToHide:k,popupHoverStay:!0,triggerProps:S,onVisibleChange:te,childrenPrefix:h}),children:typeof y=="string"?s("span",{children:y}):y})}var Ne=u.exports.forwardRef(ir);Ne.displayName="Popconfirm";var ar=Ne;function Ve(e){var o=e.title,t=e.description,r=e.actions,n=o||t,l=r&&r.length,c=n||l;return[c,n,l]}var sr=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,l=[],c;try{for(;(o===void 0||o-- >0)&&!(n=r.next()).done;)l.push(n.value)}catch(i){c={error:i}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(c)throw c.error}}return l},lr=function(e){var o,t=e.style,r=e.className,n=e.title,l=e.description,c=e.actions,i=e.prefixCls,a=e.simple,I=sr(Ve({title:n,description:l,actions:c}),3),v=I[0],y=I[1],T=I[2];if(!v)return null;var m=i+"-footer",k=$(m,r,(o={},o[m+"-with-actions"]=T,o)),_=function(){var O=b.createElement("div",{className:i+"-actions-list"},c.map(function(L,g){return b.createElement("div",{className:i+"-actions-item",key:""+g},L)}));return a?b.createElement("div",{className:i+"-actions-list"},b.createElement(Qe,{prefixCls:i,popup:function(){return O}},b.createElement("div",{className:$(i+"-actions-item",i+"-actions-item-trigger")},b.createElement("span",null,b.createElement(Ee,null))))):O};return b.createElement("div",{className:k,style:t},y&&b.createElement("div",{className:$(m+"-block",i+"-caption")},n&&b.createElement("div",{className:i+"-caption-title",title:n},n),l&&!a&&b.createElement("div",{className:i+"-caption-description",title:l},l)),T&&b.createElement("div",{className:$(m+"-block",i+"-actions")},_()))},Fe=!De&&!Ie(window==null?void 0:window.IntersectionObserver);function cr(e,o){o===void 0&&(o={});var t=u.exports.useRef(),r=function(){t.current&&(t.current.disconnect(),t.current=null)},n=function(l){l&&(r(),Fe&&(t.current=new IntersectionObserver(e,o),t.current.observe(l)))};return{observer:t.current,cor:n,dor:r}}var ur=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t},xe=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,l=[],c;try{for(;(o===void 0||o-- >0)&&!(n=r.next()).done;)l.push(n.value)}catch(i){c={error:i}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(c)throw c.error}}return l};function dr(e){var o=e.defaultInView,t=e.unobserverOnEnter,r=t===void 0?!0:t,n=e.onChange,l=e.target,c=ur(e,["defaultInView","unobserverOnEnter","onChange","target"]),i=xe(u.exports.useState(Fe?o:!0),2),a=i[0],I=i[1],v=u.exports.useCallback(function(_,O){var L=xe(_,1),g=L[0],S=O.thresholds.some(function(x){return g.intersectionRatio>=x}),N=S&&g.isIntersecting;I(N),n==null||n(N,g),N&&r&&O.unobserve(g.target)},[n,r]),y=cr(v,c),T=y.cor,m=y.dor,k=y.observer;return u.exports.useEffect(function(){var _=o&&r;return _?m():l&&T(l),m},[l,o,r]),{inView:a,observer:k}}var W=globalThis&&globalThis.__assign||function(){return W=Object.assign||function(e){for(var o,t=1,r=arguments.length;t<r;t++){o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},W.apply(this,arguments)},fr=globalThis&&globalThis.__rest||function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t},Ce=globalThis&&globalThis.__read||function(e,o){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,l=[],c;try{for(;(o===void 0||o-- >0)&&!(n=r.next()).done;)l.push(n.value)}catch(i){c={error:i}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(c)throw c.error}}return l},ue=0,pr={footerPosition:"inner",preview:!0};function vr(e,o){var t,r=u.exports.useContext(we),n=r.getPrefixCls,l=r.componentConfig,c=r.rtl,i=Pe(e,pr,l==null?void 0:l.Image),a=i.style,I=i.className,v=i.src,y=i.width,T=i.height,m=i.title,k=i.description,_=i.actions,O=i.footerPosition,L=i.simple,g=i.loader,S=i.loaderClassName,N=i.error,x=i.preview,A=i.previewProps,H=i.alt,J=i.onClick,D=i.index,Q=i._index,X=i.onError,Y=i.onLoad,C=i.lazyload,ie=fr(i,["style","className","src","width","height","title","description","actions","footerPosition","simple","loader","loaderClassName","error","preview","previewProps","alt","onClick","index","_index","onError","onLoad","lazyload"]),Z=Ue(),E=u.exports.useContext(Ye),R=E.previewGroup,ee=E.handleVisibleChange,re=E.registerPreviewUrl,G=E.registerPreviewProps,h=E.setCurrentIndex,w=u.exports.useMemo(function(){return be(A)?A:{}},[A]),te=u.exports.useMemo(function(){return be(C)?C:{}},[C]),P=u.exports.useMemo(function(){return le(D)||le(Q)?(ue=le(D)?D:Q,ue):ue++},[]),U=w.src||v,ae=Ce(Ve({title:m,description:k,actions:_}),1),q=ae[0],f=Ze("beforeLoad"),K=f.isLoading,V=f.isError,j=f.isLoaded,ke=f.isBeforeLoad,ne=f.setStatus,de=Ce(_e(!1,{defaultValue:w.defaultVisible,value:w.visible}),2),fe=de[0],Le=de[1],se=u.exports.useMemo(function(){return qe(w,["visible","defaultVisible","src","onVisibleChange"])},[w]),d=n("image"),Se=!Ie(w.visible),je=$(d,(t={},t[d+"-rtl"]=c,t[d+"-simple"]=L,t[d+"-before-load"]=ke,t[d+"-loading"]=K,t[d+"-loading-error"]=V,t[d+"-with-footer-inner"]=j&&q&&O==="inner",t[d+"-with-footer-outer"]=j&&q&&O==="outer",t[d+"-with-preview"]=j&&x&&!V&&!Se,t),I),M=u.exports.useRef();function Be(p){ne("loaded"),Y&&Y(p)}function Re(p){ne("error"),X&&X(p)}function pe(p){x&&R?(h(P),ee(!0)):x&&ve(!0),J&&J(p)}function ve(p){w.onVisibleChange&&w.onVisibleChange(p,fe),Le(p)}var me=dr(W({target:M.current,defaultInView:!C},te)).inView;u.exports.useEffect(function(){M.current&&(me?(M.current.src||v)&&M.current.src!==v&&(M.current.src=v,ne("loading")):ne("lazyload"))},[v,me]),u.exports.useEffect(function(){if(!!R){var p=G(P,se);return function(){return p(P)}}},[P,R,se]),u.exports.useEffect(function(){if(!!R){var p=re(P,U,x);return function(){return p(P)}}},[P,R,U,x]);var $e=F("div",{className:d+"-error",children:[s("div",{className:d+"-error-icon",children:s(er,{})}),H&&s("div",{className:d+"-error-alt",children:H})]}),ge=s("div",{className:$(d+"-loader",S),children:F("div",{className:d+"-loader-spin",children:[s(Ke,{}),s("div",{className:d+"-loader-spin-text",children:"Loading"})]})}),Ge=function(){if(g===!0)return ge;var p=g||ge;return C||g?p:null};return F("div",{className:je,style:Object.assign({width:y,height:T},a),ref:o,children:[s("img",{...W({ref:M,className:d+"-img",tabIndex:0},Z({onPressEnter:pe}),ie,C||v===void 0?{}:{src:v},{title:m,width:y,height:T,onLoad:Be,onError:Re,onClick:pe,alt:H})}),!j&&F("div",{className:d+"-overlay",children:[V&&(N||$e),K&&Ge()]}),j&&q&&s(lr,{title:m,description:k,actions:_,prefixCls:d,simple:L}),j&&x&&s(Te,{...W({visible:fe,src:U},se,{onVisibleChange:ve})})]})}var mr=b.forwardRef(vr),oe=mr;oe.Preview=Te;oe.PreviewGroup=Xe;oe.displayName="Image";var gr=oe;function hr(e){return We.post("/api/article/list",e)}function br({children:e}){return e.length<3?s(ce,{children:e}):F(ce,{children:[e.slice(0,2),s(Je,{position:"bottom",content:s(ce,{direction:"vertical",children:e.slice(2)}),children:s(B,{type:"text",icon:s(Ee,{})})})]})}function _r(){const e=u.exports.useRef();return s(Oe,{children:s(rr,{children:s(tr,{ref:e,request:hr,columns:[{title:"\u6807\u9898",dataIndex:"title",search:!0},{title:"\u6765\u6E90",dataIndex:"source",search:!0,valueType:"select",fieldProps:{options:[{label:1,value:1}]}},{title:"author",dataIndex:"author"},{title:"\u63CF\u8FF0",dataIndex:"description"},{title:"\u5C01\u9762\u56FE\u7247",width:150,dataIndex:"cover_pic",render:(t,r)=>s(gr,{width:20,src:r.file_url,alt:"\u5C01\u9762\u56FE"})},{title:"\u6D4F\u89C8\u91CF",dataIndex:"page_view"},{title:"\u662F\u5426\u53D1\u5E03",dataIndex:"is_publish"},{title:"\u53D1\u5E03\u65F6\u95F4",dataIndex:"published_at"},{title:"\u64CD\u4F5C",render:(t,r,n)=>F(br,{children:[s(B,{type:"text",children:"\u67E5\u770B"}),s(ar,{title:"\u786E\u8BA4\u5220\u9664\u5417\uFF1F",children:s(B,{type:"text",status:"warning",children:"\u5220\u9664"})}),s(B,{type:"text",status:"danger",children:"\u5371\u9669"})]})}],toolBarRender:[s(B,{type:"primary",children:"\u521B\u5EFA\u7528\u6237\u7EC4"},"create"),s(B,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"delete")]})})})}export{_r as default};
