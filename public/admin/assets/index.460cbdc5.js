import{e as u,r as m,I as d,j as i,_ as O}from"./index.2d436ed0.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){O(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e,n){var r=m.exports.useContext(d),t=r.prefixCls,o=t===void 0?"arco":t,f=e.spin,s=e.className,a=p(p({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-delete")});return f&&(a.className="".concat(a.className," ").concat(o,"-icon-loading")),delete a.spin,delete a.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:i("path",{d:"M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15"})})}var c=u.forwardRef(v);c.defaultProps={isIcon:!0};c.displayName="IconDelete";var h=c;export{h as I};
