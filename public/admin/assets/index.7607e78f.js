import{e as d,r as y,a4 as g,j as l,a5 as h,h as a}from"./index.44b4ce34.js";function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?p(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(e,n){var r=y.exports.useContext(g),t=r.prefixCls,i=t===void 0?"arco":t,f=e.spin,s=e.className,c=u(u({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(i,"-icon ").concat(i,"-icon-file")});return f&&(c.className="".concat(c.className," ").concat(i,"-icon-loading")),delete c.spin,delete c.isIcon,l("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:l("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"})})}var o=d.forwardRef(b);o.defaultProps={isIcon:!0};o.displayName="IconFile";var m=o;function j(e){return a.post("/api/article/query",e)}function v(e){return a.post("/api/article/detail",e)}function x(e){return a.post("/api/article/create",e)}function C(e){return a.post("/api/article/update",e)}function P(e){return a.post("/api/article/publish",{uuid:e})}function w(e){return a.post("/api/article/unpublish",{uuid:e})}function I(e){return a.post("/api/article/delete",e)}function D(e){return a.post("/api/article/category",e)}function _(e){return a.post("/api/article/category/create",e)}function N(e){return a.post("/api/article/category/update",e)}function q(e){return a.post("/api/article/category/delete",e)}export{m as I,C as a,x as b,D as c,j as d,P as e,w as f,I as g,v as h,_ as i,q as j,N as r};
