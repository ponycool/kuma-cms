import{e as d,r as u,f as b,j as i,_ as O}from"./index.17afa57a.js";function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?f(Object(t),!0).forEach(function(r){O(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function m(e,n){var t=u.exports.useContext(b),r=t.prefixCls,c=r===void 0?"arco":r,l=e.spin,a=e.className,o=p(p({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(a?a+" ":"").concat(c,"-icon ").concat(c,"-icon-subscribe-add")});return l&&(o.className="".concat(o.className," ").concat(c,"-icon-loading")),delete o.spin,delete o.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:i("path",{d:"M24.53 6.007H9.97c-.535 0-.97.449-.97 1.003V41.8c0 .148.152.245.28.179l15.25-7.881 14.248 7.88c.129.067.28-.03.28-.179V22.06M27.413 11.023h6.794m0 0H41m-6.794 0V4m0 7.023v7.023"})})}var s=d.forwardRef(m);s.defaultProps={isIcon:!0};s.displayName="IconSubscribeAdd";var j=s;export{j as I};
