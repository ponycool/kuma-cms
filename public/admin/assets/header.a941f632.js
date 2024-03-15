import{r as y,C as W,u as X,aL as q,aM as E,t as Y,H as Z,s as B,c as $,a as f,j as c,F as L,aK as ee,aN as ae,ag as re}from"./index.aed1b284.js";import{l as ne,S as te}from"./index.5df79ba1.js";var p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var r,s=1,v=arguments.length;s<v;s++){r=arguments[s];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},p.apply(this,arguments)},le=globalThis&&globalThis.__read||function(t,r){var s=typeof Symbol=="function"&&t[Symbol.iterator];if(!s)return t;var v=s.call(t),l,N=[],i;try{for(;(r===void 0||r-- >0)&&!(l=v.next()).done;)N.push(l.value)}catch(S){i={error:S}}finally{try{l&&!l.done&&(s=v.return)&&s.call(v)}finally{if(i)throw i.error}}return N},T=function(t){return B(t)?t.reduce(function(r,s){return r+(s.span||1)},0):0},se={layout:"horizontal",column:3,tableLayout:"auto"};function H(t){var r,s=y.exports.useContext(W),v=s.getPrefixCls,l=s.componentConfig,N=s.rtl,i=X(t,se,l==null?void 0:l.Descriptions),S=i.style,M=i.className,d=i.column,F=i.title,_=i.data,O=i.border,w=i.labelStyle,P=i.valueStyle,C=i.colon,g=i.layout,A=i.size,R=i.tableLayout,n=v("descriptions"),D=le(y.exports.useState(),2),I=D[0],K=D[1],z=y.exports.useRef(null);y.exports.useEffect(function(){return z.current=q.subscribe(function(a){for(var o=0;o<E.length;o++){var e=E[o];if(a[e]){K(e);break}}}),function(){q.unsubscribe(z.current)}},[]);var u=3;Y(d)&&(u=d[I]||3),Z(d)&&d>0&&(u=d);var m=[];if(B(_)&&_.length>0&&u){_.forEach(function(a){var o=m[m.length-1],e=T(o);e===0?m.push([p(p({},a),{span:a.span?a.span>u?u:a.span:1})]):e===u?m.push([p(p({},a),{span:a.span?a.span>u?u:a.span:1})]):o.push(p(p({},a),{span:a.span?a.span+e>u?u-e:a.span:1}))});var x=m[m.length-1],j=T(x);j<u&&(x[x.length-1].span=x[x.length-1].span+u-j)}function V(a,o){return f(L,{children:[c("tr",{className:n+"-row",children:a.map(function(e,b){var h=e.span>1?{colSpan:e.span}:{};return f("td",{...p({key:(e.key||b)+"_label",className:n+"-item-label"},h,{style:w}),children:[e.label,C]})})}),c("tr",{className:n+"-row",children:a.map(function(e,b){var h=e.span>1?{colSpan:e.span}:{};return c("td",{...p({key:(e.key||b)+"_value",className:n+"-item-value"},h,{style:P}),children:e.value})})})]})}function G(a,o){return c("tr",{className:n+"-row",children:a.map(function(e,b){var h=e.span>1?{colSpan:e.span*2-1}:{};return f(L,{children:[f("td",{className:n+"-item-label",style:w,children:[e.label,C]}),c("td",{...p({className:n+"-item-value"},h,{style:P}),children:e.value})]})})},o)}function J(a,o){return c("tr",{className:n+"-row",children:a.map(function(e,b){var h=e.span>1?{colSpan:e.span}:{};return f("td",{...p({key:e.key||b},h,{className:n+"-item"}),children:[f("div",{className:n+"-item-label-inline",style:w,children:[e.label,C]}),c("div",{className:n+"-item-value-inline",style:P,children:e.value})]})})},o)}function Q(a,o){return g==="inline-vertical"||g==="inline-horizontal"?J(a,o):g==="vertical"?V(a):G(a,o)}var U=$(n,(r={},r[n+"-border"]=O,r[n+"-layout-"+g]=g,r[n+"-size-"+A]=A,r[n+"-table-layout-fixed"]=R==="fixed",r[n+"-rtl"]=N,r),M);return f("div",{className:U,style:S,children:[F&&c("div",{className:n+"-title",children:F}),c("div",{className:n+"-body",children:c("table",{className:n+"-table",cellPadding:0,cellSpacing:0,children:c("tbody",{children:m.map(function(a,o){return Q(a,o)})})})})]})}H.displayName="Descriptions";var k={"info-wrapper":"_info-wrapper_1rqux_1","info-avatar":"_info-avatar_1rqux_4","info-content":"_info-content_1rqux_14","verified-tag":"_verified-tag_1rqux_20","edit-btn":"_edit-btn_1rqux_25"};function ce({userInfo:t={},loading:r}){ee(ne);const[s,v]=y.exports.useState("");y.exports.useEffect(()=>{v(t.avatar)},[t]);const l=c(te,{text:{rows:1},animation:!0});return f("div",{className:k["info-wrapper"],children:[c(ae,{size:100,className:k["info-avatar"],children:s?c("img",{src:s}):c(re,{})}),c(H,{className:k["info-content"],column:2,colon:"\uFF1A",labelStyle:{textAlign:"right"},data:[{label:"\u8D26\u6237\u540D\u79F0",value:r?l:t.account_name},{label:"\u8D26\u6237id",value:r?l:t.id},{label:"\u8D26\u6237\u6635\u79F0",value:r?l:t.nickname},{label:"\u90AE\u7BB1",value:r?l:t.email},{label:"\u521B\u5EFA\u65F6\u95F4",value:r?l:t.created_at}]})]})}export{ce as default};
