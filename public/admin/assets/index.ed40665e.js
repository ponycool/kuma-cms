import{r as b,C as _,d as j,g as w,a as L,c as N,j as u,aL as T}from"./index.92a17a4d.js";var p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(a){for(var o,r=1,e=arguments.length;r<e;r++){o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(a[n]=o[n])}return a},p.apply(this,arguments)},E=globalThis&&globalThis.__rest||function(a,o){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&o.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r},K={hoverable:!0};function D(a,o){var r,e=b.exports.useContext(_),n=e.getPrefixCls,i=e.componentConfig,h=e.rtl,t=j(a,K,i==null?void 0:i.Link),y=t.className,m=t.style,x=t.children,l=t.icon,v=t.status,c=t.disabled,C=t.hoverable,O=E(t,["className","style","children","icon","status","disabled","hoverable"]),k=w({onKeyDown:t.onKeyDown}),s=n("link"),P="href"in t?"a":"span",d=function(f){c?(f.preventDefault(),f.stopPropagation()):t.onClick&&t.onClick(f)};return L(P,{...p({className:N(s,(r={},r[s+"-disabled"]=c,r[s+"-is-"+v]=v,r[s+"-with-icon"]=l,r[s+"-hoverless"]=!C,r[s+"-rtl"]=h,r),y),ref:o,tabIndex:c?-1:void 0},O,{style:m,onClick:d},k({onPressEnter:d})),children:[l?u("span",{className:s+"-icon",children:l===!0?u(T,{}):l}):null,x]})}var g=b.exports.forwardRef(D);g.displayName="Link";var R=g;export{R as L};
