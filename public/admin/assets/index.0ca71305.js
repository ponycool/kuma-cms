import{R as u,r as d,e as O,a as v,j as i,_ as x}from"./index.ca2f5ec4.js";function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?l(Object(r),!0).forEach(function(t){x(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function j(e,n){var r=d.exports.useContext(O),t=r.prefixCls,o=t===void 0?"arco":t,f=e.spin,s=e.className,c=p(p({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-unlock")});return f&&(c.className="".concat(c.className," ").concat(o,"-icon-loading")),delete c.spin,delete c.isIcon,v("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:[i("rect",{width:"34",height:"20",x:"7",y:"21",rx:"1"}),i("path",{d:"M44 15a9 9 0 1 0-18 0v6M24 35v-8"})]})}var a=u.forwardRef(j);a.defaultProps={isIcon:!0};a.displayName="IconUnlock";var b=a;export{b as I};
