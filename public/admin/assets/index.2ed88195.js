import{r as N,aq as $,j as f,G as T,c as y,C as q,f as A,a as P,d as G}from"./index.565c71ed.js";var M=globalThis&&globalThis.__read||function(t,n){var a=typeof Symbol=="function"&&t[Symbol.iterator];if(!a)return t;var r=a.call(t),e,l=[],i;try{for(;(n===void 0||n-- >0)&&!(e=r.next()).done;)l.push(e.value)}catch(o){i={error:o}}finally{try{e&&!e.done&&(a=r.return)&&a.call(r)}finally{if(i)throw i.error}}return l};function F(t){var n,a=t.prefixCls,r=t.maxCount,e=t.count,l=t.className,i=t.style,o=M(N.exports.useState(!1),2),d=o[0],g=o[1],x=$(e),m=e!==x;return f(T,{classNames:"badge-zoom",in:e>0,timeout:300,appear:!0,mountOnEnter:!0,unmountOnExit:!0,onEntered:function(){g(!0)},children:f("span",{className:l,style:i,children:f("span",{className:y((n={},n[a+"-number-text"]=d&&m,n)),children:r&&e>r?r+"+":e},e)})})}var c=globalThis&&globalThis.__assign||function(){return c=Object.assign||function(t){for(var n,a=1,r=arguments.length;a<r;a++){n=arguments[a];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},c.apply(this,arguments)},H=globalThis&&globalThis.__rest||function(t,n){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,r=Object.getOwnPropertySymbols(t);e<r.length;e++)n.indexOf(r[e])<0&&Object.prototype.propertyIsEnumerable.call(t,r[e])&&(a[r[e]]=t[r[e]]);return a},J=globalThis&&globalThis.__read||function(t,n){var a=typeof Symbol=="function"&&t[Symbol.iterator];if(!a)return t;var r=a.call(t),e,l=[],i;try{for(;(n===void 0||n-- >0)&&!(e=r.next()).done;)l.push(e.value)}catch(o){i={error:o}}finally{try{e&&!e.done&&(a=r.return)&&a.call(r)}finally{if(i)throw i.error}}return l},K=["red","orangered","orange","gold","lime","green","cyan","arcoblue","purple","pinkpurple","magenta","gray"],L={count:0,maxCount:99};function Q(t,n){var a,r=N.exports.useContext(q),e=r.getPrefixCls,l=r.componentConfig,i=r.rtl,o=A(t,L,l==null?void 0:l.Badge),d=o.count,g=o.text,x=o.className,m=o.dotClassName,O=o.dot,B=o.maxCount,u=o.color,I=o.dotStyle,k=o.offset,z=o.style,v=o.status,_=o.children,D=H(o,["count","text","className","dotClassName","dot","maxCount","color","dotStyle","offset","style","status","children"]),s=e("badge"),p=c({},I||{}),S=J(k||[],2),j=S[0],w=S[1];j&&(p.marginRight=-j),w&&(p.marginTop=w);var R=function(){var h,b;if(G(d))return f("span",{className:y(s+"-custom-dot",m),style:p,children:d});var C=!u||K.indexOf(u)>-1?{}:{backgroundColor:u};return g&&!u&&!v?f("span",{className:y(s+"-text",m),style:p,children:g}):v||u&&d<=0?P("span",{className:s+"-status-wrapper",children:[f("span",{className:y(s+"-status-dot",(h={},h[s+"-status-"+v]=v,h[s+"-color-"+u]=u,h),m),style:c(c({},C),p)}),g&&f("span",{className:s+"-status-text",children:g})]}):(O||u)&&d>0?f(T,{classNames:"badge-zoom",in:O||!!u,timeout:200,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:f("span",{className:y(s+"-dot",(b={},b[s+"-color-"+u]=u,b),m),style:c(c({},C),p)})}):f(F,{prefixCls:s,className:y(s+"-number",m),style:c(c({},C),p),maxCount:B,count:d})};return P("span",{...c({className:y(s,(a={},a[s+"-status"]=v,a[s+"-no-children"]=!_,a[s+"-rtl"]=i,a),x),ref:n,style:z},D),children:[_,R()]})}var E=N.exports.forwardRef(Q);E.displayName="Badge";var V=E;export{V as B};