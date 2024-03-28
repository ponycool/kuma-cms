import{e as D,r as m,C as xe,j as h,o as pe,c as B,ay as lt,aF as Pt,aG as et,l as Te,an as dt,aH as kt,s as tt,q as rt,a6 as ct,H as It,i as ge,aI as Ht,aJ as Nt,y as he,z as at,d as We,a as se,R as be,aK as Dt,aB as Wt,X as He,W as Et,f as Bt,t as jt,u as _t}from"./index.1c93e058.js";var Ne=globalThis&&globalThis.__assign||function(){return Ne=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},Ne.apply(this,arguments)},At=globalThis&&globalThis.__rest||function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t};function Mt(e,a){var t=m.exports.useRef(!1),r=m.exports.useContext(xe).getPrefixCls,n=e.children,d=e.className,i=e.style,s=e.lazyload,o=e.isActive,f=At(e,["children","className","style","lazyload","isActive"]),S=r("tabs");return t.current=s?t.current||o:!0,t.current&&h("div",{...Ne({ref:a},pe(f,["destroyOnHide","title","closable"]),{className:B(S+"-pane",d),style:i}),children:n})}var Ee=D.forwardRef(Mt);Ee.displayName="TabPane";Ee.isTabPane=!0;var Xt=Ee;function Yt(e){var a=e.prefixCls,t=e.currentOffset,r=e.headerSize,n=e.headerWrapperSize,d=e.getTitleRef,i=e.paneChildren,s=e.direction,o=e.icon,f=i.map(function(v){return v.key}),S=s==="vertical"?r.height:r.width,x=s==="vertical"?n.height:n.width,y=m.exports.useMemo(function(){var v={},b=n.domRect;return f.map(function(l){var g=d(l);if(!!g){var p=g.getBoundingClientRect();v[l]={left:p.left-b.left,right:p.left-b.left+p.width,top:p.top-b.top,bottom:p.top-b.top+p.height}}}),v},[f.join(","),S,x]),c=m.exports.useMemo(function(){var v=-1,b=-1;for(var l in y){var g=y[l],p=g.left,C=g.right;if(p>=t&&C-t<=x&&v===-1&&(v=f.indexOf(l),b=v),p>=t&&C-t>x){b=f.indexOf(l);break}}return[v,b]},[y,f.join(","),t]);return lt(o)?null:h(Pt,{trigger:"click",droplist:h(et,{onClickMenuItem:e.onClickTab,children:i.map(function(v,b){if(b<c[0]||b>=c[1])return h(et.Item,{disabled:v.disabled,children:v.props.title},v.key)})}),children:h(Te,{role:"button","aria-label":"expand tabs",prefix:a+"-dropdown",className:a+"-dropdown-icon",children:o||h(dt,{})})})}var $t={prev:"left",next:"right"},Lt={prev:"up",next:"down"},Kt=function(e){var a,t=e.direction,r=e.headerSize,n=e.headerWrapperSize,d=e.prefixCls,i=e.iconPos,s=e.currentOffset,o=e.align,f=e.rtl,S=e.icon,x=n.height,y=n.width,c=r.height,v=r.width,b=c-x,l=v-y,g={up:h(kt,{}),down:h(dt,{}),left:f?h(tt,{}):h(rt,{}),right:f?h(rt,{}):h(tt,{})},p=function(k){k!==e.currentOffset&&e.onChange&&e.onChange(k)},C=function(k,_){k.preventDefault();var O;o==="left"?O=_==="left"?s-y:s+y:O=_==="left"?s+y:s-y,p(O)},T=function(k,_){k.preventDefault();var O;if(_==="up")O=s-x;else if(O=s+x,O>=c)return;p(O)},N=m.exports.useMemo(function(){return o==="left"?s<=0:t==="vertical"?s>=b:s>=l},[o,t,s,l,s]),F=m.exports.useMemo(function(){return o==="left"?t==="vertical"?s>=b:s>=l:s<=0},[o,t,b,l,s]);if(lt(S))return null;var j=t==="horizontal"?$t[i]:Lt[i],G=i==="prev"?N:F,Y=B(d+"-"+j+"-icon",(a={},a[d+"-nav-icon-disabled"]=G,a)),Z=t==="vertical"?T:C;return h(Te,{disabled:G,className:Y,prefix:d,onClick:function(k){return Z(k,j)},children:S||g[j]})},nt=Kt,Be=function(e,a){var t=e.getBoundingClientRect(),r=a.getBoundingClientRect(),n=a.offsetWidth/r.width,d=a.offsetHeight/r.height;return{left:(t.left-r.left)*n,top:(t.top-r.top)*d,right:(t.right-r.right)*n,bottom:(t.bottom-r.bottom)*d}},Vt=function(e,a){var t=e.scrollLeft,r=e.scrollTop;a==="horizontal"&&t&&e.scrollTo({left:-1*t}),a==="vertical"&&r&&e.scrollTo({top:-1*r})},st=function(e){var a=e.onPressEnter;return{onKeyDown:function(t){var r=t.keyCode||t.which;r===ct.code&&a(t)}}},De=globalThis&&globalThis.__assign||function(){return De=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},De.apply(this,arguments)},Ft=function(e,a){var t,r=e.prefixCls,n=e.onDeleteTab,d=e.tabKey,i=e.isActive,s=e.onClickTab,o=e.disabled,f=o===void 0?!1:o,S=e.title,x=e.editable,y=e.renderTitle,c=e.deleteIcon,v=e.deleteButton,b=e.getIdPrefix,l=e.index,g=ge(y)?y:function(T){return T},p=function(T){T.stopPropagation(),!f&&n()},C=function(T){f||s(T)};return g(D.createElement("div",{ref:a,key:d,className:B(r+"-header-title",(t={},t[r+"-header-title-active"]=i,t[r+"-header-title-editable"]=x,t[r+"-header-title-disabled"]=f,t)),role:"tab","aria-selected":i,tabIndex:f?-1:0,"aria-disabled":f||void 0,id:b(l).tab,"aria-controls":b(l).tabpane,onClick:C,onKeyDown:function(T){var N=T.keyCode||T.which;N===ct.code&&C(T)}},D.createElement("span",{className:r+"-header-title-text"},S),x&&D.createElement("span",De({role:"button","aria-label":"remove tab","aria-disabled":f||void 0,tabIndex:f?-1:0,className:r+"-close-icon"},st({onPressEnter:p}),{onClick:p}),v||D.createElement(Te,{prefix:r},c||D.createElement(It,null)))),{key:d,isActive:i,disabled:f,editable:x})},Gt=D.forwardRef(Ft),qt=function(e,a,t){var r={};if(a){var n=Be(a,t);e==="vertical"?r={top:n.top+"px",height:a.offsetHeight+"px",left:"",width:""}:r={left:n.left+"px",width:a.offsetWidth+"px",top:"",height:""}}return r},Jt=function(e){var a,t=e.prefixCls,r=e.animation,n=e.disabled,d=e.direction,i=e.getTitleRef,s=e.activeTab,o=e.getHeaderRef,f=e.inkBarSize,S=m.exports.useRef(),x=m.exports.useRef();return m.exports.useEffect(function(){var y=Ht(function(){var c=qt(d,i(s),o("headerRef").current);c&&!Nt(x.current,c)&&(x.current=c,Object.keys(c).forEach(function(v){S.current.style[v]=c[v]}))});return y(),function(){y.cancel&&y.cancel()}}),h("div",{className:B(t+"-header-ink",(a={},a[t+"-header-ink-no-animation"]=!r,a[t+"-header-ink-disabled"]=n,a[t+"-header-ink-custom"]=f,a)),ref:S,children:f&&h("div",{style:f,className:t+"-header-ink-inner"})})},Ut=Jt,Qt=globalThis&&globalThis.__read||function(e,a){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,d=[],i;try{for(;(a===void 0||a-- >0)&&!(n=r.next()).done;)d.push(n.value)}catch(s){i={error:s}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return d};function ce(){var e=m.exports.useRef(),a=Qt(m.exports.useState({height:0,width:0}),2),t=a[0],r=a[1];return m.exports.useEffect(function(){e.current&&r({height:e.current.offsetHeight,width:e.current.offsetWidth,domRect:e.current.getBoundingClientRect()})},[]),[e,t,r]}function Zt(e){var a=e.headerWrapperRef,t=e.headerOffset,r=e.align,n=e.isScrollable,d=e.direction,i=e.onScroll;function s(l,g){var p=0;d==="vertical"?p=t+g:p=r==="left"?t+l:t-l,i&&i(p)}var o=m.exports.useRef("x");function f(l){if(!!n){l.preventDefault();var g=l.deltaX,p=l.deltaY,C=0,T=Math.abs(g),N=Math.abs(p);T===N?C=o.current==="x"?g:p:T>N?(C=g,o.current="x"):(C=p,o.current="y"),s(C,C)}}var S=m.exports.useRef({clientX:0,clientY:0}),x=function(l){return l&&l.touches&&l.touches.length&&l.touches[0]},y=function(l){l.cancelable&&l.preventDefault();var g=x(l);if(!!g){var p=S.current,C=p.clientX,T=p.clientY,N=g.clientX-C,F=g.clientY-T;s(-N,-F)}},c=function(){at(document.documentElement,"touchmove",y),at(document.documentElement,"touchend",c)},v=function(l){if(!!n){var g=x(l);!g||(S.current={clientX:g.clientX,clientY:g.clientY},he(document.documentElement,"touchmove",y,{passive:!1}),he(window,"touchend",c,{passive:!1}))}},b=m.exports.useRef(null);b.current={onWheel:f,onTouchStart:v},m.exports.useEffect(function(){he(a.current,"wheel",function(l){b.current.onWheel(l)},{passive:!1}),he(a.current,"touchstart",function(l){b.current.onTouchStart(l)},{passive:!0})},[a.current])}var V=globalThis&&globalThis.__assign||function(){return V=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},V.apply(this,arguments)},K=globalThis&&globalThis.__read||function(e,a){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,d=[],i;try{for(;(a===void 0||a-- >0)&&!(n=r.next()).done;)d.push(n.value)}catch(s){i={error:s}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return d},je="vertical",me="right",ye="left",it={delete:!0,add:!0},er=function(e){var a=e.direction,t=e.align,r=t===void 0?ye:t,n=e.headerOffset,d="translateX("+-n+"px)";return r===me&&(d="translateX("+n+"px)"),a===je&&(d="translateY("+-n+"px)"),Dt(d)},tr=function(e){var a=e.direction,t=e.align,r=t===void 0?ye:t,n=e.headerDom,d=e.headerWrapperDom,i=Be(n,d);return a===je?-i.top:r===me?i.right:-i.left},ft=D.forwardRef(function(e,a){var t,r,n=m.exports.useContext(_e),d=m.exports.useContext(xe).rtl,i=V(V({},e),n),s=K(ce(),3),o=s[0],f=s[1],S=s[2],x=K(ce(),3),y=x[0],c=x[1],v=x[2],b=K(ce(),3),l=b[0],g=b[1],p=b[2],C=K(ce(),3),T=C[0],N=C[1],F=C[2],j=K(ce(),3),G=j[0],Y=j[1],Z=j[2],k=m.exports.useRef({}),_=K(m.exports.useState(0),2),O=_[0],E=_[1],ee=K(m.exports.useState(!0),2),fe=ee[0],W=ee[1],Ce=i.paneChildren,ut=i.editable,R=i.prefixCls,ze=i.onAddTab,I=i.direction,Me=i.type,$=Me===void 0?"line":Me,Xe=i.overflow,Ye=Xe===void 0?"scroll":Xe,te=i.activeTab,vt=i.showAddButton,$e=i.size,ht=$e===void 0?"default":$e,bt=i.style,pt=i.tabPosition,gt=i.className,Le=i.extra,mt=i.animation,H=i.icons,yt=i.deleteButton,xt=i.addButton,Tt=i.renderTabTitle,Ke=i.scrollAfterEdit,Ve=i.scrollPosition,A=Ve===void 0?"auto":Ve,Ct=i.inkBarSize,Fe=We(Ke)?V(V({},it),Ke):it,Ge=K(d?[me,ye]:[ye,me],2),zt=Ge[0],St=Ge[1],J=$==="capsule"?St:zt,L=m.exports.useMemo(function(){var u=g.height-N.height-Y.height,P=g.width-N.width-Y.width,w=i.direction==="vertical"?u<c.height:P<c.width;return w},[i.direction,g,N,c,Y]),wt=function(){if(l.current){var u=l.current;p({height:u.offsetHeight,width:u.offsetWidth})}},ue=function(u){return Wt(function(P){wt();var w=P[0]&&P[0].target;w&&u({height:w.offsetHeight,width:w.offsetWidth,domRect:w.getBoundingClientRect()})},200)},re=ue(S),ae=ue(v),ne=ue(F),ie=ue(Z),Se=m.exports.useCallback(function(u){var P=I===je?c.height-f.height:c.width-f.width,w=u;return w=Math.min(P,w),w=Math.max(w,0),w},[I,c,f]),we=function(u){var P=Se(u);P!==O&&E(P)};m.exports.useEffect(function(){return function(){var u,P,w,z;(u=ae==null?void 0:ae.cancel)===null||u===void 0||u.call(ae),(P=re==null?void 0:re.cancel)===null||P===void 0||P.call(re),(w=ne==null?void 0:ne.cancel)===null||w===void 0||w.call(ne),(z=ie==null?void 0:ie.cancel)===null||z===void 0||z.call(ie)}},[]),m.exports.useEffect(function(){if(!fe){W(!0);return}var u=function(){var w=k.current[te];if(!w||!L)return 0;var z=Be(w,o.current),M=tr({direction:I,align:J,headerDom:y.current,headerWrapperDom:o.current});if(I==="vertical"){var oe=M,q=A,Pe=M+z.top,Ue=M+z.bottom;return q==="auto"&&(q=z.top<0?"start":z.bottom>0?"end":A),q==="start"?oe=Pe:q==="end"?oe=Ue:q==="center"?oe=Pe-(z.top-z.bottom)/2:He(q)&&(oe=Math.max(Pe-q,Ue)),oe}if(J==="right"){var ke=M-z.left,Qe=M-z.right,U=A,le=M;return A==="auto"&&(U=z.left<0?"start":z.right>0?"end":A),U==="start"?le=ke:U==="end"?le=Qe:U==="center"?le=ke+(z.left-z.right)/2:He(U)&&(le=Math.min(ke+U,Qe)),le}var de=M,Q=A,Ie=M+z.left,Ze=M+z.right;return A==="auto"&&(Q=z.left<0?"start":z.right>0?"end":A),Q==="start"?de=Ie:Q==="end"?de=Ze:Q==="center"?de=Ie-(z.left-z.right)/2:He(Q)&&(de=Math.max(Ie-Q,Ze)),de};Vt(o.current,I);var P=u();P=Se(P),E(P)},[te,I,Ye,L,$,Se,A]);var Ot=er({direction:I,align:J,headerOffset:O}),Oe=L&&Ye==="dropdown"&&I!=="vertical",Re=L&&!Oe,ve=ut&&($==="card"||$==="card-gutter"||$==="line"),Rt=function(u){i.onDeleteTab&&i.onDeleteTab(u.key),W(Fe.delete)},qe=function(){ze==null||ze(),W(Fe.add)},Je=function(u){return u&&vt&&h(be,{onResize:ie,children:h("div",{...V({className:R+"-add-icon","aria-label":"add tab",tabIndex:0,role:"button",ref:G,onClick:qe},st({onPressEnter:qe})),children:xt||h(Te,{prefix:R+"-add",children:h("span",{className:R+"-add",children:(H==null?void 0:H.add)||h(Et,{})})})})})};return Zt({headerWrapperRef:o,headerOffset:O,align:J,direction:I,isScrollable:L,onScroll:function(u){we(u)}}),h("div",{className:B(R+"-header-nav",R+"-header-nav-"+I,R+"-header-nav-"+pt,R+"-header-size-"+ht,R+"-header-nav-"+$,gt),style:bt,ref:a,children:se("div",{className:B(R+"-header-scroll",(t={},t[R+"-header-overflow-scroll"]=Re,t[R+"-header-overflow-dropdown"]=Oe,t)),ref:l,children:[Re&&h(nt,{iconPos:"prev",rtl:d,icon:H==null?void 0:H.prev,prefixCls:R,currentOffset:O,headerSize:c,headerWrapperSize:f,direction:I,align:J,onChange:we}),h(be,{onResize:re,children:se("div",{className:R+"-header-wrapper",ref:o,children:[h(be,{onResize:ae,children:se("div",{className:B(R+"-header",(r={},r[R+"-header-no-padding"]=!e.headerPadding&&I==="horizontal"&&["line","text"].indexOf($)>-1,r)),ref:y,style:Ot,children:[Ce.map(function(u,P){return h(Gt,{...V({key:P,ref:function(w){k.current[u.key]=w},tabKey:u.key},u.props,{prefixCls:R,onDeleteTab:function(){return Rt(u)},renderTitle:e.children||Tt,onClickTab:function(){i.onClickTab&&i.onClickTab(u.key)},isActive:te===u.key,editable:ve&&u.props.closable!==!1,deleteIcon:H==null?void 0:H.delete,deleteButton:yt,getIdPrefix:n.getIdPrefix,index:P})})}),$==="line"&&h(Ut,{disabled:!!Ce.find(function(u){return u&&u.props&&u.props.disabled&&u.key===te}),prefixCls:R,animation:mt,direction:I,getTitleRef:function(u){return k.current[u]},activeTab:te,getHeaderRef:function(){return y},inkBarSize:Ct})]})}),!L&&Je(ve)]})}),Re&&h(nt,{prefixCls:R,rtl:d,iconPos:"next",icon:H==null?void 0:H.next,currentOffset:O,headerSize:c,headerWrapperSize:f,direction:I,align:J,onChange:we}),Oe&&h(Yt,{onClickTab:i.onClickTab,paneChildren:Ce,prefixCls:R,currentOffset:O,headerSize:c,icon:H==null?void 0:H.dropdown,headerWrapperSize:f,getTitleRef:function(u){return k.current[u]},direction:I}),(ve&&L||Le)&&h(be,{onResize:ne,children:se("div",{className:R+"-header-extra",ref:T,children:[L&&Je(ve),Le]})})]})})});ft.displayName="TabHeader";var ot=ft;function rr(e){var a,t=e.animation,r=e.activeTab,n=e.prefixCls,d=e.paneChildren,i=e.direction,s=e.lazyload,o=e.destroyOnHide,f=d.findIndex(function(c){return c.key===r}),S=m.exports.useContext(_e),x=m.exports.useContext(xe).rtl;if(d.every(function(c){return(c==null?void 0:c.props)&&(!("children"in c.props)||c.props.children===null)}))return null;var y=B(n+"-content-inner",(a={},a[n+"-animation"]=t,a));return h("div",{className:n+"-content "+n+"-content-"+i,children:h("div",{className:y,style:x?{marginRight:"-"+f*100+"%"}:{marginLeft:"-"+f*100+"%"},children:d.map(function(c,v){var b,l=S.getIdPrefix(v),g=l.tabpane,p=l.tab,C="destroyOnHide"in c.props?c.props.destroyOnHide:o,T=c.key===r;return h("div",{className:B(n+"-content-item",(b={},b[n+"-content-item-active"]=T,b)),role:"tabpanel",id:g,"aria-hidden":T?void 0:!0,tabIndex:T?0:-1,"aria-labelledby":p,children:f!==v&&C?null:D.cloneElement(c,{lazyload:s,isActive:T})},c.key)})})})}var X=globalThis&&globalThis.__assign||function(){return X=Object.assign||function(e){for(var a,t=1,r=arguments.length;t<r;t++){a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},X.apply(this,arguments)},ar=globalThis&&globalThis.__rest||function(e,a){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)a.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]]);return t},nr=globalThis&&globalThis.__read||function(e,a){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var r=t.call(e),n,d=[],i;try{for(;(a===void 0||a-- >0)&&!(n=r.next()).done;)d.push(n.value)}catch(s){i={error:s}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return d},ir=["mini","small","default","large"],or=function(e){var a=e.children,t=[];return D.Children.forEach(a,function(r){r&&r.type&&r.type.isTabPane&&t.push(r)}),t},lr=function(e){var a=e.direction,t=e.tabPosition,r=e.animation;return a==="vertical"||t==="left"||t==="right"?!1:We(r)?"tabPane"in r?r.tabPane:!1:r},dr={tabPosition:"top",type:"line",overflow:"scroll",showAddButton:!0,lazyload:!0,headerPadding:!0,scrollPosition:"auto"},_e=D.createContext({});function cr(e,a){var t,r=m.exports.useContext(xe),n=r.getPrefixCls,d=r.size,i=r.componentConfig,s=r.rtl,o=Bt(e,dr,i==null?void 0:i.Tabs),f=or(o),S=m.exports.useRef(),x=nr(jt(f[0]&&f[0].key,{defaultValue:"defaultActiveTab"in o?o.defaultActiveTab:void 0,value:"activeTab"in o?o.activeTab:void 0}),2),y=x[0],c=x[1],v=n("tabs"),b=o.size||(ir.indexOf(d)>-1?d:"default"),l=o.animation,g=o.className,p=o.direction,C=o.style,T=o.type,N=o.justify,F=o.destroyOnHide,j=o.lazyload,G=o.onChange,Y=o.onClickTab,Z=o.onDeleteTab,k=o.renderTabHeader,_=ar(o,["animation","className","direction","style","type","justify","destroyOnHide","lazyload","onChange","onClickTab","onDeleteTab","renderTabHeader"]),O=_t(v+"-"),E=p==="vertical"?"left":o.tabPosition,ee={animation:We(l)&&"inkBar"in l?l.inkBar:!0,activeTab:y,tabPosition:E,direction:["left","right"].indexOf(E)>-1?"vertical":"horizontal",paneChildren:f,onClickTab:function(W){ge(Y)&&Y(W),W!==y&&("activeTab"in o||c(W),ge(G)&&G(W))},onDeleteTab:Z,prefixCls:v};m.exports.useImperativeHandle(a,function(){return S},[]);var fe=h(rr,{direction:["left","right"].indexOf(E)>-1?"vertical":"horizontal",animation:lr(o),activeTab:y,paneChildren:f,prefixCls:v,destroyOnHide:F,lazyload:j});return h("div",{...X({},pe(_,["headerPadding","tabPosition","defaultActiveTab","showAddButton","extra","onAddTab","activeTab","overflow","editable","renderTabTitle","addButton","deleteButton","icons","children","size","type","scrollPosition","offsetAlign"]),{style:C,className:B(v,v+"-"+(["left","right"].indexOf(E)>-1?"vertical":"horizontal"),v+"-"+T,v+"-"+E,v+"-size-"+b,(t={},t[v+"-justify"]=N,t[v+"-rtl"]=s,t),g),ref:S}),children:se(_e.Provider,{value:X(X({},ee),{getIdPrefix:function(W){return{tab:O&&O+"-tab-"+W,tabpane:O&&O+"-panel-"+W}}}),children:[E==="bottom"&&fe,ge(k)?k(X(X(X({},pe(o,["children","style","className"])),{size:b}),ee),ot):h(ot,{...X({},pe(o,["children","style","className"]),{size:b})}),E!=="bottom"&&fe]})})}var sr=D.forwardRef(cr),Ae=sr;Ae.displayName="Tabs";Ae.TabPane=Xt;var ur=Ae;export{ur as T};
