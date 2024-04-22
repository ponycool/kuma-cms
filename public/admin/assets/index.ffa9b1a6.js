import{r as f,C as W,g as X,d as Y,c as Z,o as ee,a as re,j as i,l as oe,H as ae,G as le}from"./index.06197879.js";var h=globalThis&&globalThis.__assign||function(){return h=Object.assign||function(l){for(var s,e=1,o=arguments.length;e<o;e++){s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(l[a]=s[a])}return l},h.apply(this,arguments)},ne=globalThis&&globalThis.__rest||function(l,s){var e={};for(var o in l)Object.prototype.hasOwnProperty.call(l,o)&&s.indexOf(o)<0&&(e[o]=l[o]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(l);a<o.length;a++)s.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(l,o[a])&&(e[o[a]]=l[o[a]]);return e},x=globalThis&&globalThis.__read||function(l,s){var e=typeof Symbol=="function"&&l[Symbol.iterator];if(!e)return l;var o=e.call(l),a,t=[],d;try{for(;(s===void 0||s-- >0)&&!(a=o.next()).done;)t.push(a.value)}catch(v){d={error:v}}finally{try{a&&!a.done&&(e=o.return)&&e.call(o)}finally{if(d)throw d.error}}return t},se=["red","orangered","orange","gold","lime","green","cyan","blue","arcoblue","purple","pinkpurple","magenta","gray"],ce={size:"default"};function te(l,s){var e,o=f.exports.useContext(W),a=o.getPrefixCls,t=o.componentConfig,d=o.rtl,v=X(),r=Y(l,ce,t==null?void 0:t.Tag),K=r.className,R=r.style,V=r.children,c=r.color,G=r.closable,g=r.checkable,M=r.defaultChecked,O=r.size,P=r.onClose,T=r.onCheck,I=r.icon,p=r.closeIcon,$=r.bordered,q=r.__closeIconProps,A=ne(r,["className","style","children","color","closable","checkable","defaultChecked","size","onClose","onCheck","icon","closeIcon","bordered","__closeIconProps"]),n=a("tag"),N=x(f.exports.useState("visible"in r?r.visible:!0),2),B=N[0],j=N[1],S=x(f.exports.useState("checked"in r?r.checked:M),2),D=S[0],F=S[1],w=x(f.exports.useState(),2),C=w[0],m=w[1],z="checked"in r?r.checked:D,J="visible"in r?r.visible:B;function E(b){var _=P&&P(b);_&&_.then?(m(!0),_.then(function(){m(!1),j(!1)}).catch(function(){m(!1)})):j(!1)}function Q(){var b=!z;"checked"in r||F(b),T&&T(b)}var u=c&&se.indexOf(c)!==-1?c:"",y=g?z:!0,U=Z(n,(e={},e[n+"-loading"]=C,e[n+"-hide"]=!J,e[n+"-"+u]=u,e[n+"-checkable"]=g,e[n+"-checked"]=y,e[n+"-size-"+O]=O,e[n+"-bordered"]=$,e[n+"-custom-color"]=y&&c&&!u,e[n+"-rtl"]=d,e),K),k=h({},R);c&&!u&&y&&(k.backgroundColor=c,k.borderColor=c);var H=ee(A,["visible"]);return g&&(H.onClick=Q),re("div",{...h({ref:s,style:k,className:U},H),children:[I&&i("span",{className:n+"-icon",children:I}),i("span",{className:n+"-content",children:V}),G&&!C&&p!==null&&i(oe,{...h({prefix:n,className:n+"-close-btn",onClick:E,role:"button",tabIndex:0},v({onPressEnter:E}),{"aria-label":"Close"},q),children:p!==void 0?p:i(ae,{})}),C&&i("span",{className:n+"-loading-icon",children:i(le,{})})]})}var L=f.exports.forwardRef(te);L.displayName="Tag";var de=L;export{de as T};
