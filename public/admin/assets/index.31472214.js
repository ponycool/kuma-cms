import{R as D,r as m,C as xe,j as b,o as pe,c as B,Z as lt,$ as Pt,a0 as et,k as Te,a1 as dt,a2 as kt,q as tt,p as rt,a3 as ct,H as It,i as ge,a4 as Ht,a5 as Nt,x as he,y as at,b as We,a as se,E as be,a6 as Dt,a7 as Wt,X as He,W as Et,d as Bt,s as jt,u as _t}from"./index.bbf9ba40.js";var Ne=globalThis&&globalThis.__assign||function(){return Ne=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ne.apply(this,arguments)},At=globalThis&&globalThis.__rest||function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};function Mt(e,a){var t=m.exports.useRef(!1),r=m.exports.useContext(xe).getPrefixCls,n=e.children,d=e.className,i=e.style,c=e.lazyload,o=e.isActive,s=At(e,["children","className","style","lazyload","isActive"]),w=r("tabs");return t.current=c?t.current||o:!0,t.current&&b("div",{...Ne({ref:a},pe(s,["destroyOnHide","title","closable"]),{className:B(w+"-pane",d),style:i}),children:n})}var Ee=D.forwardRef(Mt);Ee.displayName="TabPane";Ee.isTabPane=!0;var Xt=Ee;function $t(e){var a=e.prefixCls,t=e.currentOffset,r=e.headerSize,n=e.headerWrapperSize,d=e.getTitleRef,i=e.paneChildren,c=e.direction,o=e.icon,s=i.map(function(f){return f.key}),w=c==="vertical"?r.height:r.width,x=c==="vertical"?n.height:n.width,y=m.exports.useMemo(function(){var f={},h=n.domRect;return s.map(function(l){var g=d(l);if(!!g){var p=g.getBoundingClientRect();f[l]={left:p.left-h.left,right:p.left-h.left+p.width,top:p.top-h.top,bottom:p.top-h.top+p.height}}}),f},[s.join(","),w,x]),v=m.exports.useMemo(function(){var f=-1,h=-1;for(var l in y){var g=y[l],p=g.left,C=g.right;if(p>=t&&C-t<=x&&f===-1&&(f=s.indexOf(l),h=f),p>=t&&C-t>x){h=s.indexOf(l);break}}return[f,h]},[y,s.join(","),t]);return lt(o)?null:b(Pt,{trigger:"click",droplist:b(et,{onClickMenuItem:e.onClickTab,children:i.map(function(f,h){if(h<v[0]||h>=v[1])return b(et.Item,{disabled:f.disabled,children:f.props.title},f.key)})}),children:b(Te,{role:"button","aria-label":"expand tabs",prefix:a+"-dropdown",className:a+"-dropdown-icon",children:o||b(dt,{})})})}var Yt={prev:"left",next:"right"},Lt={prev:"up",next:"down"},Kt=function(e){var a,t=e.direction,r=e.headerSize,n=e.headerWrapperSize,d=e.prefixCls,i=e.iconPos,c=e.currentOffset,o=e.align,s=e.rtl,w=e.icon,x=n.height,y=n.width,v=r.height,f=r.width,h=v-x,l=f-y,g={up:b(kt,{}),down:b(dt,{}),left:s?b(tt,{}):b(rt,{}),right:s?b(rt,{}):b(tt,{})},p=function(k){k!==e.currentOffset&&e.onChange&&e.onChange(k)},C=function(k,_){k.preventDefault();var O;o==="left"?O=_==="left"?c-y:c+y:O=_==="left"?c+y:c-y,p(O)},T=function(k,_){k.preventDefault();var O;if(_==="up")O=c-x;else if(O=c+x,O>=v)return;p(O)},N=m.exports.useMemo(function(){return o==="left"?c<=0:t==="vertical"?c>=h:c>=l},[o,t,c,l,c]),F=m.exports.useMemo(function(){return o==="left"?t==="vertical"?c>=h:c>=l:c<=0},[o,t,h,l,c]);if(lt(w))return null;var j=t==="horizontal"?Yt[i]:Lt[i],G=i==="prev"?N:F,$=B(d+"-"+j+"-icon",(a={},a[d+"-nav-icon-disabled"]=G,a)),Q=t==="vertical"?T:C;return b(Te,{disabled:G,className:$,prefix:d,onClick:function(k){return Q(k,j)},children:w||g[j]})},nt=Kt,Be=function(e,a){var t=e.getBoundingClientRect(),r=a.getBoundingClientRect(),n=a.offsetWidth/r.width,d=a.offsetHeight/r.height;return{left:(t.left-r.left)*n,top:(t.top-r.top)*d,right:(t.right-r.right)*n,bottom:(t.bottom-r.bottom)*d}},Vt=function(e,a){var t=e.scrollLeft,r=e.scrollTop;a==="horizontal"&&t&&e.scrollTo({left:-1*t}),a==="vertical"&&r&&e.scrollTo({top:-1*r})},st=function(e){var a=e.onPressEnter;return{onKeyDown:function(t){var r=t.keyCode||t.which;r===ct.code&&a(t)}}},De=globalThis&&globalThis.__assign||function(){return De=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},De.apply(this,arguments)},Ft=function(e,a){var t,r=e.prefixCls,n=e.onDeleteTab,d=e.tabKey,i=e.isActive,c=e.onClickTab,o=e.disabled,s=o===void 0?!1:o,w=e.title,x=e.editable,y=e.renderTitle,v=e.deleteIcon,f=e.deleteButton,h=e.getIdPrefix,l=e.index,g=ge(y)?y:function(T){return T},p=function(T){T.stopPropagation(),!s&&n()},C=function(T){s||c(T)};return g(D.createElement("div",{ref:a,key:d,className:B(r+"-header-title",(t={},t[r+"-header-title-active"]=i,t[r+"-header-title-editable"]=x,t[r+"-header-title-disabled"]=s,t)),role:"tab","aria-selected":i,tabIndex:s?-1:0,"aria-disabled":s||void 0,id:h(l).tab,"aria-controls":h(l).tabpane,onClick:C,onKeyDown:function(T){var N=T.keyCode||T.which;N===ct.code&&C(T)}},D.createElement("span",{className:r+"-header-title-text"},w),x&&D.createElement("span",De({role:"button","aria-label":"remove tab","aria-disabled":s||void 0,tabIndex:s?-1:0,className:r+"-close-icon"},st({onPressEnter:p}),{onClick:p}),f||D.createElement(Te,{prefix:r},v||D.createElement(It,null)))),{key:d,isActive:i,disabled:s,editable:x})},Gt=D.forwardRef(Ft),qt=function(e,a,t){var r={left:"",width:"",top:"",height:""};if(a){var n=Be(a,t);e==="vertical"?r={top:n.top+"px",height:a.offsetHeight+"px",left:"",width:""}:r={left:n.left+"px",width:a.offsetWidth+"px",top:"",height:""}}return r},Ut=function(e){var a,t=e.prefixCls,r=e.animation,n=e.disabled,d=e.direction,i=e.getTitleRef,c=e.activeTab,o=e.getHeaderRef,s=e.inkBarSize,w=m.exports.useRef(),x=m.exports.useRef();return m.exports.useEffect(function(){var y=Ht(function(){var v=i(c),f=qt(d,v,o("headerRef").current);f&&!Nt(x.current,f)&&(x.current=f,Object.keys(f).forEach(function(h){w.current.style[h]=f[h]}))});return y(),function(){y.cancel&&y.cancel()}}),b("div",{className:B(t+"-header-ink",(a={},a[t+"-header-ink-no-animation"]=!r,a[t+"-header-ink-disabled"]=n,a[t+"-header-ink-custom"]=s,a)),ref:w,children:s&&b("div",{style:s,className:t+"-header-ink-inner"})})},Zt=Ut,Jt=globalThis&&globalThis.__read||function(e,a){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,d=[],i;try{for(;(a===void 0||a-- >0)&&!(n=r.next()).done;)d.push(n.value)}catch(c){i={error:c}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return d};function ce(){var e=m.exports.useRef(),a=Jt(m.exports.useState({height:0,width:0}),2),t=a[0],r=a[1];return m.exports.useEffect(function(){e.current&&r({height:e.current.offsetHeight,width:e.current.offsetWidth,domRect:e.current.getBoundingClientRect()})},[]),[e,t,r]}function Qt(e){var a=e.headerWrapperRef,t=e.headerOffset,r=e.align,n=e.isScrollable,d=e.direction,i=e.onScroll;function c(l,g){var p=0;d==="vertical"?p=t+g:p=r==="left"?t+l:t-l,i&&i(p)}var o=m.exports.useRef("x");function s(l){if(!!n){l.preventDefault();var g=l.deltaX,p=l.deltaY,C=0,T=Math.abs(g),N=Math.abs(p);T===N?C=o.current==="x"?g:p:T>N?(C=g,o.current="x"):(C=p,o.current="y"),c(C,C)}}var w=m.exports.useRef({clientX:0,clientY:0}),x=function(l){return l&&l.touches&&l.touches.length&&l.touches[0]},y=function(l){l.cancelable&&l.preventDefault();var g=x(l);if(!!g){var p=w.current,C=p.clientX,T=p.clientY,N=g.clientX-C,F=g.clientY-T;c(-N,-F)}},v=function(){at(document.documentElement,"touchmove",y),at(document.documentElement,"touchend",v)},f=function(l){if(!!n){var g=x(l);!g||(w.current={clientX:g.clientX,clientY:g.clientY},he(document.documentElement,"touchmove",y,{passive:!1}),he(window,"touchend",v,{passive:!1}))}},h=m.exports.useRef(null);h.current={onWheel:s,onTouchStart:f},m.exports.useEffect(function(){he(a.current,"wheel",function(l){h.current.onWheel(l)},{passive:!1}),he(a.current,"touchstart",function(l){h.current.onTouchStart(l)},{passive:!0})},[a.current])}var V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},V.apply(this,arguments)},K=globalThis&&globalThis.__read||function(e,a){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,d=[],i;try{for(;(a===void 0||a-- >0)&&!(n=r.next()).done;)d.push(n.value)}catch(c){i={error:c}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return d},je="vertical",me="right",ye="left",it={delete:!0,add:!0},er=function(e){var a=e.direction,t=e.align,r=t===void 0?ye:t,n=e.headerOffset,d="translateX("+-n+"px)";return r===me&&(d="translateX("+n+"px)"),a===je&&(d="translateY("+-n+"px)"),Dt(d)},tr=function(e){var a=e.direction,t=e.align,r=t===void 0?ye:t,n=e.headerDom,d=e.headerWrapperDom,i=Be(n,d);return a===je?-i.top:r===me?i.right:-i.left},ft=D.forwardRef(function(e,a){var t,r,n=m.exports.useContext(_e),d=m.exports.useContext(xe).rtl,i=V(V({},e),n),c=K(ce(),3),o=c[0],s=c[1],w=c[2],x=K(ce(),3),y=x[0],v=x[1],f=x[2],h=K(ce(),3),l=h[0],g=h[1],p=h[2],C=K(ce(),3),T=C[0],N=C[1],F=C[2],j=K(ce(),3),G=j[0],$=j[1],Q=j[2],k=m.exports.useRef({}),_=K(m.exports.useState(0),2),O=_[0],E=_[1],ee=K(m.exports.useState(!0),2),fe=ee[0],W=ee[1],Ce=i.paneChildren,ut=i.editable,R=i.prefixCls,ze=i.onAddTab,I=i.direction,Me=i.type,Y=Me===void 0?"line":Me,Xe=i.overflow,$e=Xe===void 0?"scroll":Xe,te=i.activeTab,vt=i.showAddButton,Ye=i.size,ht=Ye===void 0?"default":Ye,bt=i.style,pt=i.tabPosition,gt=i.className,Le=i.extra,mt=i.animation,H=i.icons,yt=i.deleteButton,xt=i.addButton,Tt=i.renderTabTitle,Ke=i.scrollAfterEdit,Ve=i.scrollPosition,A=Ve===void 0?"auto":Ve,Ct=i.inkBarSize,Fe=We(Ke)?V(V({},it),Ke):it,Ge=K(d?[me,ye]:[ye,me],2),zt=Ge[0],wt=Ge[1],U=Y==="capsule"?wt:zt,L=m.exports.useMemo(function(){var u=g.height-N.height-$.height,P=g.width-N.width-$.width,S=i.direction==="vertical"?u<v.height:P<v.width;return S},[i.direction,g,N,v,$]),St=function(){if(l.current){var u=l.current;p({height:u.offsetHeight,width:u.offsetWidth})}},ue=function(u){return Wt(function(P){St();var S=P[0]&&P[0].target;S&&u({height:S.offsetHeight,width:S.offsetWidth,domRect:S.getBoundingClientRect()})},200)},re=ue(w),ae=ue(f),ne=ue(F),ie=ue(Q),we=m.exports.useCallback(function(u){var P=I===je?v.height-s.height:v.width-s.width,S=u;return S=Math.min(P,S),S=Math.max(S,0),S},[I,v,s]),Se=function(u){var P=we(u);P!==O&&E(P)};m.exports.useEffect(function(){return function(){var u,P,S,z;(u=ae==null?void 0:ae.cancel)===null||u===void 0||u.call(ae),(P=re==null?void 0:re.cancel)===null||P===void 0||P.call(re),(S=ne==null?void 0:ne.cancel)===null||S===void 0||S.call(ne),(z=ie==null?void 0:ie.cancel)===null||z===void 0||z.call(ie)}},[]),m.exports.useEffect(function(){if(!fe){W(!0);return}var u=function(){var S=k.current[te];if(!S||!L)return 0;var z=Be(S,o.current),M=tr({direction:I,align:U,headerDom:y.current,headerWrapperDom:o.current});if(I==="vertical"){var oe=M,q=A,Pe=M+z.top,Ze=M+z.bottom;return q==="auto"&&(q=z.top<0?"start":z.bottom>0?"end":A),q==="start"?oe=Pe:q==="end"?oe=Ze:q==="center"?oe=Pe-(z.top-z.bottom)/2:He(q)&&(oe=Math.max(Pe-q,Ze)),oe}if(U==="right"){var ke=M-z.left,Je=M-z.right,Z=A,le=M;return A==="auto"&&(Z=z.left<0?"start":z.right>0?"end":A),Z==="start"?le=ke:Z==="end"?le=Je:Z==="center"?le=ke+(z.left-z.right)/2:He(Z)&&(le=Math.min(ke+Z,Je)),le}var de=M,J=A,Ie=M+z.left,Qe=M+z.right;return A==="auto"&&(J=z.left<0?"start":z.right>0?"end":A),J==="start"?de=Ie:J==="end"?de=Qe:J==="center"?de=Ie-(z.left-z.right)/2:He(J)&&(de=Math.max(Ie-J,Qe)),de};Vt(o.current,I);var P=u();P=we(P),E(P)},[te,I,$e,L,Y,we,A]);var Ot=er({direction:I,align:U,headerOffset:O}),Oe=L&&$e==="dropdown"&&I!=="vertical",Re=L&&!Oe,ve=ut&&(Y==="card"||Y==="card-gutter"||Y==="line"),Rt=function(u){i.onDeleteTab&&i.onDeleteTab(u.key),W(Fe.delete)},qe=function(){ze==null||ze(),W(Fe.add)},Ue=function(u){return u&&vt&&b(be,{onResize:ie,children:b("div",{...V({className:R+"-add-icon","aria-label":"add tab",tabIndex:0,role:"button",ref:G,onClick:qe},st({onPressEnter:qe})),children:xt||b(Te,{prefix:R+"-add",children:b("span",{className:R+"-add",children:(H==null?void 0:H.add)||b(Et,{})})})})})};return Qt({headerWrapperRef:o,headerOffset:O,align:U,direction:I,isScrollable:L,onScroll:function(u){Se(u)}}),b("div",{className:B(R+"-header-nav",R+"-header-nav-"+I,R+"-header-nav-"+pt,R+"-header-size-"+ht,R+"-header-nav-"+Y,gt),style:bt,ref:a,children:se("div",{className:B(R+"-header-scroll",(t={},t[R+"-header-overflow-scroll"]=Re,t[R+"-header-overflow-dropdown"]=Oe,t)),ref:l,children:[Re&&b(nt,{iconPos:"prev",rtl:d,icon:H==null?void 0:H.prev,prefixCls:R,currentOffset:O,headerSize:v,headerWrapperSize:s,direction:I,align:U,onChange:Se}),b(be,{onResize:re,children:se("div",{className:R+"-header-wrapper",ref:o,children:[b(be,{onResize:ae,children:se("div",{className:B(R+"-header",(r={},r[R+"-header-no-padding"]=!e.headerPadding&&I==="horizontal"&&["line","text"].indexOf(Y)>-1,r)),ref:y,style:Ot,children:[Ce.map(function(u,P){return b(Gt,{...V({key:P,ref:function(S){k.current[u.key]=S},tabKey:u.key},u.props,{prefixCls:R,onDeleteTab:function(){return Rt(u)},renderTitle:e.children||Tt,onClickTab:function(){i.onClickTab&&i.onClickTab(u.key)},isActive:te===u.key,editable:ve&&u.props.closable!==!1,deleteIcon:H==null?void 0:H.delete,deleteButton:yt,getIdPrefix:n.getIdPrefix,index:P})})}),Y==="line"&&b(Zt,{disabled:!!Ce.find(function(u){return u&&u.props&&u.props.disabled&&u.key===te}),prefixCls:R,animation:mt,direction:I,getTitleRef:function(u){return k.current[u]},activeTab:te,getHeaderRef:function(){return y},inkBarSize:Ct})]})}),!L&&Ue(ve)]})}),Re&&b(nt,{prefixCls:R,rtl:d,iconPos:"next",icon:H==null?void 0:H.next,currentOffset:O,headerSize:v,headerWrapperSize:s,direction:I,align:U,onChange:Se}),Oe&&b($t,{onClickTab:i.onClickTab,paneChildren:Ce,prefixCls:R,currentOffset:O,headerSize:v,icon:H==null?void 0:H.dropdown,headerWrapperSize:s,getTitleRef:function(u){return k.current[u]},direction:I}),(ve&&L||Le)&&b(be,{onResize:ne,children:se("div",{className:R+"-header-extra",ref:T,children:[L&&Ue(ve),Le]})})]})})});ft.displayName="TabHeader";var ot=ft;function rr(e){var a,t=e.animation,r=e.activeTab,n=e.prefixCls,d=e.paneChildren,i=e.direction,c=e.lazyload,o=e.destroyOnHide,s=d.findIndex(function(v){return v.key===r}),w=m.exports.useContext(_e),x=m.exports.useContext(xe).rtl;if(d.every(function(v){return(v==null?void 0:v.props)&&(!("children"in v.props)||v.props.children===null)}))return null;var y=B(n+"-content-inner",(a={},a[n+"-animation"]=t,a));return b("div",{className:n+"-content "+n+"-content-"+i,children:b("div",{className:y,style:x?{marginRight:"-"+s*100+"%"}:{marginLeft:"-"+s*100+"%"},children:d.map(function(v,f){var h,l=w.getIdPrefix(f),g=l.tabpane,p=l.tab,C="destroyOnHide"in v.props?v.props.destroyOnHide:o,T=v.key===r;return b("div",{className:B(n+"-content-item",(h={},h[n+"-content-item-active"]=T,h)),role:"tabpanel",id:g,"aria-hidden":T?void 0:!0,tabIndex:T?0:-1,"aria-labelledby":p,children:s!==f&&C?null:D.cloneElement(v,{lazyload:c,isActive:T})},v.key)})})})}var X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)},ar=globalThis&&globalThis.__rest||function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t},nr=globalThis&&globalThis.__read||function(e,a){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,d=[],i;try{for(;(a===void 0||a-- >0)&&!(n=r.next()).done;)d.push(n.value)}catch(c){i={error:c}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return d},ir=["mini","small","default","large"],or=function(e){var a=e.children,t=[];return D.Children.forEach(a,function(r){r&&r.type&&r.type.isTabPane&&t.push(r)}),t},lr=function(e){var a=e.direction,t=e.tabPosition,r=e.animation;return a==="vertical"||t==="left"||t==="right"?!1:We(r)?"tabPane"in r?r.tabPane:!1:r},dr={tabPosition:"top",type:"line",overflow:"scroll",showAddButton:!0,lazyload:!0,headerPadding:!0,scrollPosition:"auto"},_e=D.createContext({});function cr(e,a){var t,r=m.exports.useContext(xe),n=r.getPrefixCls,d=r.size,i=r.componentConfig,c=r.rtl,o=Bt(e,dr,i==null?void 0:i.Tabs),s=or(o),w=m.exports.useRef(),x=nr(jt(s[0]&&s[0].key,{defaultValue:"defaultActiveTab"in o?o.defaultActiveTab:void 0,value:"activeTab"in o?o.activeTab:void 0}),2),y=x[0],v=x[1],f=n("tabs"),h=o.size||(ir.indexOf(d)>-1?d:"default"),l=o.animation,g=o.className,p=o.direction,C=o.style,T=o.type,N=o.justify,F=o.destroyOnHide,j=o.lazyload,G=o.onChange,$=o.onClickTab,Q=o.onDeleteTab,k=o.renderTabHeader,_=ar(o,["animation","className","direction","style","type","justify","destroyOnHide","lazyload","onChange","onClickTab","onDeleteTab","renderTabHeader"]),O=_t(f+"-"),E=p==="vertical"?"left":o.tabPosition,ee={animation:We(l)&&"inkBar"in l?l.inkBar:!0,activeTab:y,tabPosition:E,direction:["left","right"].indexOf(E)>-1?"vertical":"horizontal",paneChildren:s,onClickTab:function(W){ge($)&&$(W),W!==y&&("activeTab"in o||v(W),ge(G)&&G(W))},onDeleteTab:Q,prefixCls:f};m.exports.useImperativeHandle(a,function(){return w},[]);var fe=b(rr,{direction:["left","right"].indexOf(E)>-1?"vertical":"horizontal",animation:lr(o),activeTab:y,paneChildren:s,prefixCls:f,destroyOnHide:F,lazyload:j});return b("div",{...X({},pe(_,["headerPadding","tabPosition","defaultActiveTab","showAddButton","extra","onAddTab","activeTab","overflow","editable","renderTabTitle","addButton","deleteButton","icons","children","size","type","scrollPosition","offsetAlign"]),{style:C,className:B(f,f+"-"+(["left","right"].indexOf(E)>-1?"vertical":"horizontal"),f+"-"+T,f+"-"+E,f+"-size-"+h,(t={},t[f+"-justify"]=N,t[f+"-rtl"]=c,t),g),ref:w}),children:se(_e.Provider,{value:X(X({},ee),{getIdPrefix:function(W){return{tab:O&&O+"-tab-"+W,tabpane:O&&O+"-panel-"+W}}}),children:[E==="bottom"&&fe,ge(k)?k(X(X(X({},pe(o,["children","style","className"])),{size:h}),ee),ot):b(ot,{...X({},pe(o,["children","style","className"]),{size:h})}),E!=="bottom"&&fe]})})}var sr=D.forwardRef(cr),Ae=sr;Ae.displayName="Tabs";Ae.TabPane=Xt;var ur=Ae;export{ur as T};
