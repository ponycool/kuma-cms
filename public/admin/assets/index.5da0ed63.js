import{R as u,r as O,e as d,j as i,_ as m}from"./index.ca2f5ec4.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function v(e,n){var t=O.exports.useContext(d),r=t.prefixCls,o=r===void 0?"arco":r,p=e.spin,s=e.className,a=f(f({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-file")});return p&&(a.className="".concat(a.className," ").concat(o,"-icon-loading")),delete a.spin,delete a.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:i("path",{d:"M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z"})})}var c=u.forwardRef(v);c.defaultProps={isIcon:!0};c.displayName="IconFile";var j=c;export{j as I};
