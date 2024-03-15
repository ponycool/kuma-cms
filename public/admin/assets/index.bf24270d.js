import{e as m,r as _,C as P,c as g,a as u,j as o,u as D,S as H}from"./index.aed1b284.js";var N=globalThis&&globalThis.__assign||function(){return N=Object.assign||function(e){for(var l,t=1,r=arguments.length;t<r;t++){l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},N.apply(this,arguments)},J=globalThis&&globalThis.__rest||function(e,l){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t};function K(e,l){var t,r=e.className,a=e.title,c=e.avatar,f=e.description,d=e.actionList,h=J(e,["className","title","avatar","description","actionList"]),i=_.exports.useContext(P).getPrefixCls,s=i("card-meta"),p=g(s,r);return u("div",{...N({},h,{ref:l,className:p}),children:[a||f?u("div",{className:s+"-content",children:[a&&o("div",{className:s+"-title",children:a}),f&&o("div",{className:s+"-description",children:f})]}):null,c||d?u("div",{className:g(s+"-footer ",(t={},t[s+"-footer-only-actions"]=!c,t)),children:[c?o("div",{className:s+"-avatar",children:c}):null,d]}):null]})}var $=m.forwardRef(K);$.displayName="CardMeta";var z=$;function Q(e,l){var t,r=e.children,a=e.style,c=e.className,f=e.hoverable,d=_.exports.useContext(P).getPrefixCls,h=d("card-grid");return o("div",{ref:l,style:a,className:g(h,(t={},t[h+"-hoverable"]=f,t),c),children:r})}var E=m.forwardRef(Q);E.displayName="CardGrid";var G=E,O=globalThis&&globalThis.__assign||function(){return O=Object.assign||function(e){for(var l,t=1,r=arguments.length;t<r;t++){l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e},O.apply(this,arguments)},U=globalThis&&globalThis.__rest||function(e,l){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&l.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)l.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]]);return t},V={size:"default",bordered:!0};function W(e,l){var t,r,a=_.exports.useContext(P),c=a.getPrefixCls,f=a.loadingElement,d=a.componentConfig,h=a.rtl,i=D(e,V,d==null?void 0:d.Card),s=i.className,p=i.children,L=i.bordered,j=i.loading,R=i.hoverable,I=i.size,y=i.title,C=i.extra,w=i.cover,x=i.actions,F=i.headerStyle,k=i.bodyStyle,q=U(i,["className","children","bordered","loading","hoverable","size","title","extra","cover","actions","headerStyle","bodyStyle"]),n=c("card"),S=x&&x.length?o("div",{className:n+"-actions",children:o("div",{className:n+"-actions-right",children:x.map(function(v,B){return o("span",{className:n+"-actions-item",children:v},"action-"+B)})})}):null,T=!1,M=!1,A=m.Children.map(p,function(v){if(v&&v.type){if(v.type===G)T=!0;else if(v.type===z)return M=!0,m.cloneElement(v,{actionList:S})}return v});return u("div",{...O({},q,{ref:l,className:g(n,n+"-size-"+I,(t={},t[n+"-loading"]=j,t[n+"-bordered"]=L,t[n+"-hoverable"]=R,t[n+"-contain-grid"]=T,t[n+"-rtl"]=h,t),s)}),children:[y||C?u("div",{className:g(n+"-header",(r={},r[n+"-header-no-title"]=!y,r)),style:F,children:[y&&o("div",{className:n+"-header-title",children:y}),C&&o("div",{className:n+"-header-extra",children:C})]}):null,w?o("div",{className:n+"-cover",children:w}):null,u("div",{className:n+"-body",style:k,children:[j?f||o(H,{}):A,M?null:S]})]})}var X=m.forwardRef(W),b=X;b.Meta=z;b.Grid=G;b.displayName="Card";var Z=b;export{Z as C};
