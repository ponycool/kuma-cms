import{c as C,R as h,l as S,r as _,C as O,d as T,j as g,F as E,a as R,ad as $,b as z}from"./index.0c2d926d.js";function A(e){var a=e.style,r=e.width,s=r===void 0?"60%":r,n=e.rows,i=n===void 0?3:n,c=e.className,t=e.prefixCls,d=C(t+"-text",c),l=[];function f(u){if(S(s))return s[u];if(i-1===u)return s}for(var m=0;m<i;m++)l.push(h.createElement("li",{className:t+"-text-row",key:m,style:{width:f(m)}}));return h.createElement("ul",{className:d,style:a},l)}function F(e){var a,r=e.style,s=e.shape,n=s===void 0?"square":s,i=e.size,c=e.position,t=c===void 0?"left":c,d=e.className,l=e.prefixCls,f=C(l+"-image",(a={},a[l+"-image-"+t]=t,a[l+"-image-"+n]=n,a[l+"-image-"+i]=i,a),d);return h.createElement("div",{className:f,style:r})}var v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(e){for(var a,r=1,s=arguments.length;r<s;r++){a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)};function p(e){return z(e)?e:{}}var q={text:!0,loading:!0};function D(e,a){var r,s=_.exports.useContext(O),n=s.getPrefixCls,i=s.componentConfig,c=s.rtl,t=T(e,q,i==null?void 0:i.Skeleton),d=t.style,l=t.className,f=t.animation,m=t.loading,u=t.image,y=t.text,k=t.children,x=p(u),w=p(y),o=n("skeleton"),P=C(o,(r={},r[o+"-animate"]=f,r[o+"-rtl"]=c,r),l);function N(){return u&&g("div",{className:o+"-header",children:g(F,{...v({prefixCls:o},x)})})}function j(){return y&&g("div",{className:o+"-content",children:g(A,{...v({prefixCls:o},w)})})}return g(E,{children:m?R("div",{...v({},$(t),{className:P,style:d,ref:a}),children:[x.position!=="right"&&N(),j(),x.position==="right"&&N()]}):k})}var b=_.exports.forwardRef(D);b.displayName="Skeleton";var M=b;export{M as S};
