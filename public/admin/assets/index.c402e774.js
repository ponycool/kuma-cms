import{r as C,C as ne,u as ie,m as ae,j as i,aa as se,c as ce,ar as le,a2 as ue,a as b,F as pe,B as k,z as L,as as fe,h as g,d as v,P as ge,a3 as de}from"./index.7678418b.js";var u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(e){for(var a,r=1,t=arguments.length;r<t;r++){a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)},me=globalThis&&globalThis.__rest||function(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r},S=globalThis&&globalThis.__read||function(e,a){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var t=r.call(e),n,p=[],l;try{for(;(a===void 0||a-- >0)&&!(n=t.next()).done;)p.push(n.value)}catch(P){l={error:P}}finally{try{n&&!n.done&&(r=t.return)&&r.call(t)}finally{if(l)throw l.error}}return p},he={position:"top",okType:"primary",icon:i(le,{}),blurToHide:!0,unmountOnExit:!0,trigger:"click",escToClose:!0};function ye(e,a){var r,t=C.exports.useContext(ne),n=t.getPrefixCls,p=t.locale,l=t.componentConfig,P=t.rtl,o=ie(e,he,l==null?void 0:l.Popconfirm),q=o.style,z=o.className,x=o.children,I=o.position,M=o.getPopupContainer,A=o.blurToHide,U=o.unmountOnExit,D=o.trigger,G=o.escToClose,O=o.onVisibleChange,d=o.triggerProps,T=o.title,V=o.icon,R=o.okText,W=o.cancelText,$=o.okType,J=o.okButtonProps,K=o.cancelButtonProps,Q=o.autoFocus,X=o.focusLock,m=o.content,Y=me(o,["style","className","children","position","getPopupContainer","blurToHide","unmountOnExit","trigger","escToClose","onVisibleChange","triggerProps","title","icon","okText","cancelText","okType","okButtonProps","cancelButtonProps","autoFocus","focusLock","content"]),N=S(ae(!1,{defaultValue:o.defaultPopupVisible,value:o.popupVisible}),2),h=N[0],Z=N[1],F=S(C.exports.useState(!1),2),j=F[0],y=F[1],s=n("popconfirm"),B=!ue(m),w=function(c){"popupVisible"in o||Z(c),d&&d.onVisibleChange&&d.onVisibleChange(c),O&&O(c)},_=function(){w(!1)},ee=function(c){_(),o.onCancel&&o.onCancel(c)},oe=function(c){var E=o.onOk||o.onConfirm,f;E&&(f=E(c)),f&&f.then&&(y(!0),f.then(function(){_()},function(re){y(!1),console.error(re)})),f||_()},te=function(){var c=b(pe,{children:[i(k,{...u({onClick:ee,size:"mini"},K),children:W||p.Popconfirm.cancelText}),i(k,{...u({loading:j,onClick:oe,size:"mini",type:$},J),children:R||p.Popconfirm.okText})]});return b("div",{className:s+"-wrapper",children:[b("div",{className:s+"-title",children:[V&&i("span",{className:s+"-title-icon",children:V}),i("div",{className:s+"-title-text",children:L(T)?T():T})]}),B&&i("div",{className:s+"-inner-content",children:L(m)?m():m}),X?i(fe,{returnFocus:!0,as:"div",className:s+"-btn",crossFrame:!1,disabled:!h,autoFocus:!!Q,children:c}):i("div",{className:s+"-btn",children:c})]})};return C.exports.useEffect(function(){return!h&&j&&y(!1),function(){y(!1)}},[h]),i(se,{...u({},Y,{ref:a,style:u({maxWidth:350},q),className:ce(z,(r={},r[s+"-rtl"]=P,r[s+"-has-content"]=B,r)),prefixCls:s,getPopupContainer:M,position:I,trigger:D,escToClose:G,popupVisible:h,content:te,unmountOnExit:U,blurToHide:A,popupHoverStay:!0,triggerProps:d,onVisibleChange:w,childrenPrefix:s}),children:typeof x=="string"?i("span",{children:x}):x})}var H=C.exports.forwardRef(ye);H.displayName="Popconfirm";var Ce=H;function be(e){return g.post("/api/article/page",e)}function Pe(e){return g.post("/api/article/category",e)}function xe(e){return g.post("/api/article/category/create",e)}function Te(e){return g.post("/api/article/category/update",e)}function _e(e){return g.post("/api/article/category/delete",e)}function ke({children:e}){return Array.isArray(e)?e.length<3?i(v,{children:e}):b(v,{children:[e.slice(0,2),i(ge,{position:"bottom",content:i(v,{direction:"vertical",children:e.slice(2)}),children:i(k,{type:"text",icon:i(de,{})})})]}):i(v,{children:e})}export{ke as C,Ce as P,be as a,xe as b,Pe as c,_e as d,Te as r};
