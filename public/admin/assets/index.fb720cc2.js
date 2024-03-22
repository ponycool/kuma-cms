import{e as N,r as v,a4 as L,j as f,a5 as I,C as D,u as E,f as K,a as S,c as T}from"./index.0122537b.js";function h(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable})),r.push.apply(r,e)}return r}function m(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(e){I(n,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))})}return n}function R(n,t){var r=v.exports.useContext(L),e=r.prefixCls,a=e===void 0?"arco":e,i=n.spin,l=n.className,o=m(m({"aria-hidden":!0,focusable:!1,ref:t},n),{},{className:"".concat(l?l+" ":"").concat(a,"-icon ").concat(a,"-icon-link")});return i&&(o.className="".concat(o.className," ").concat(a,"-icon-loading")),delete o.spin,delete o.isIcon,f("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:f("path",{d:"m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485"})})}var b=N.forwardRef(R);b.defaultProps={isIcon:!0};b.displayName="IconLink";var $=b,d=globalThis&&globalThis.__assign||function(){return d=Object.assign||function(n){for(var t,r=1,e=arguments.length;r<e;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},d.apply(this,arguments)},W=globalThis&&globalThis.__rest||function(n,t){var r={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&t.indexOf(e)<0&&(r[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,e=Object.getOwnPropertySymbols(n);a<e.length;a++)t.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(n,e[a])&&(r[e[a]]=n[e[a]]);return r},B={hoverable:!0};function M(n,t){var r,e=v.exports.useContext(D),a=e.getPrefixCls,i=e.componentConfig,l=e.rtl,o=E(n,B,i==null?void 0:i.Link),x=o.className,C=o.style,j=o.children,c=o.icon,g=o.status,p=o.disabled,P=o.hoverable,k=W(o,["className","style","children","icon","status","disabled","hoverable"]),w=K({onKeyDown:o.onKeyDown}),s=a("link"),_="href"in o?"a":"span",y=function(u){p?(u.preventDefault(),u.stopPropagation()):o.onClick&&o.onClick(u)};return S(_,{...d({className:T(s,(r={},r[s+"-disabled"]=p,r[s+"-is-"+g]=g,r[s+"-with-icon"]=c,r[s+"-hoverless"]=!P,r[s+"-rtl"]=l,r),x),ref:t,tabIndex:p?-1:void 0},k,{style:C,onClick:y},w({onPressEnter:y})),children:[c?f("span",{className:s+"-icon",children:c===!0?f($,{}):c}):null,j]})}var O=v.exports.forwardRef(M);O.displayName="Link";var z=O;export{z as L};
