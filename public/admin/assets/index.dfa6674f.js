import{e as u,r as d,I as O,a as v,j as i,_ as x}from"./index.0803c1c4.js";function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?l(Object(t),!0).forEach(function(r){x(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function j(e,n){var t=d.exports.useContext(O),r=t.prefixCls,o=r===void 0?"arco":r,f=e.spin,s=e.className,c=p(p({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(s?s+" ":"").concat(o,"-icon ").concat(o,"-icon-unlock")});return f&&(c.className="".concat(c.className," ").concat(o,"-icon-loading")),delete c.spin,delete c.isIcon,v("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:[i("rect",{width:"34",height:"20",x:"7",y:"21",rx:"1"}),i("path",{d:"M44 15a9 9 0 1 0-18 0v6M24 35v-8"})]})}var a=u.forwardRef(j);a.defaultProps={isIcon:!0};a.displayName="IconUnlock";var b=a;export{b as I};
