import{R as m,r as x,e as b,j as c,_ as h,a as v}from"./index.299cabe9.js";function f(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?f(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function j(e,n){var r=x.exports.useContext(b),t=r.prefixCls,o=t===void 0?"arco":t,i=e.spin,s=e.className,a=u(u({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-check")});return i&&(a.className="".concat(a.className," ").concat(o,"-icon-loading")),delete a.spin,delete a.isIcon,c("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:c("path",{d:"M41.678 11.05 19.05 33.678 6.322 20.95"})})}var l=m.forwardRef(j);l.defaultProps={isIcon:!0};l.displayName="IconCheck";var g=l;function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function O(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?d(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function C(e,n){var r=x.exports.useContext(b),t=r.prefixCls,o=t===void 0?"arco":t,i=e.spin,s=e.className,a=O(O({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-exclamation")});return i&&(a.className="".concat(a.className," ").concat(o,"-icon-loading")),delete a.spin,delete a.isIcon,v("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:[c("path",{d:"M23 9H25V30H23z"}),c("path",{fill:"currentColor",stroke:"none",d:"M23 9H25V30H23z"}),c("path",{d:"M23 37H25V39H23z"}),c("path",{fill:"currentColor",stroke:"none",d:"M23 37H25V39H23z"})]})}var p=m.forwardRef(C);p.defaultProps={isIcon:!0};p.displayName="IconExclamation";var w=p;export{w as I,g as a};
