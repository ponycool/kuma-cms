import{R as u,r as O,e as d,j as i,_ as m}from"./index.ac56ee66.js";function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?p(Object(t),!0).forEach(function(r){m(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function g(e,n){var t=O.exports.useContext(d),r=t.prefixCls,s=r===void 0?"arco":r,l=e.spin,c=e.className,a=f(f({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(c?c+" ":"").concat(s,"-icon ").concat(s,"-icon-message")});return l&&(a.className="".concat(a.className," ").concat(s,"-icon-loading")),delete a.spin,delete a.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:i("path",{d:"M15 20h18m-18 9h9M7 41h17.63C33.67 41 41 33.67 41 24.63V24c0-9.389-7.611-17-17-17S7 14.611 7 24v17Z"})})}var o=u.forwardRef(g);o.defaultProps={isIcon:!0};o.displayName="IconMessage";var b=o;export{b as I};
