import{R as u,r as O,g as d,j as i,_ as h}from"./index.1a11cdc6.js";function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?p(Object(t),!0).forEach(function(r){h(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function m(e,n){var t=O.exports.useContext(d),r=t.prefixCls,c=r===void 0?"arco":r,l=e.spin,s=e.className,o=f(f({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(c,"-icon ").concat(c,"-icon-check")});return l&&(o.className="".concat(o.className," ").concat(c,"-icon-loading")),delete o.spin,delete o.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:i("path",{d:"M41.678 11.05 19.05 33.678 6.322 20.95"})})}var a=u.forwardRef(m);a.defaultProps={isIcon:!0};a.displayName="IconCheck";var b=a;export{b as I};
