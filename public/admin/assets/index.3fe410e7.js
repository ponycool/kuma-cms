import{c as C,e as h,m as S,r as _,C as O,d as T,j as g,F as E,a as $,ah as z,b as A}from"./index.8c384899.js";function F(e){var a=e.style,r=e.width,s=r===void 0?"60%":r,n=e.rows,i=n===void 0?3:n,c=e.className,t=e.prefixCls,f=C(t+"-text",c),l=[];function u(d){if(S(s))return s[d];if(i-1===d)return s}for(var m=0;m<i;m++)l.push(h.createElement("li",{className:t+"-text-row",key:m,style:{width:u(m)}}));return h.createElement("ul",{className:f,style:a},l)}function q(e){var a,r=e.style,s=e.shape,n=s===void 0?"square":s,i=e.size,c=e.position,t=c===void 0?"left":c,f=e.className,l=e.prefixCls,u=C(l+"-image",(a={},a[l+"-image-"+t]=t,a[l+"-image-"+n]=n,a[l+"-image-"+i]=i,a),f);return h.createElement("div",{className:u,style:r})}var v=globalThis&&globalThis.__assign||function(){return v=Object.assign||function(e){for(var a,r=1,s=arguments.length;r<s;r++){a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},v.apply(this,arguments)};function p(e){return A(e)?e:{}}var D={text:!0,loading:!0};function I(e,a){var r,s=_.exports.useContext(O),n=s.getPrefixCls,i=s.componentConfig,c=s.rtl,t=T(e,D,i==null?void 0:i.Skeleton),f=t.style,l=t.className,u=t.animation,m=t.loading,d=t.image,y=t.text,k=t.children,x=p(d),w=p(y),o=n("skeleton"),P=C(o,(r={},r[o+"-animate"]=u,r[o+"-rtl"]=c,r),l);function N(){return d&&g("div",{className:o+"-header",children:g(q,{...v({prefixCls:o},x)})})}function j(){return y&&g("div",{className:o+"-content",children:g(F,{...v({prefixCls:o},w)})})}return g(E,{children:m?$("div",{...v({},z(t),{className:P,style:f,ref:a}),children:[x.position!=="right"&&N(),j(),x.position==="right"&&N()]}):k})}var b=_.exports.forwardRef(I);b.displayName="Skeleton";var R=b;export{R as S};
