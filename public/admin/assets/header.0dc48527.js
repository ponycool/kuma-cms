import{r as y,C as K,d as U,bh as q,bi as E,b as Y,X as Z,l as B,c as $,a as f,j as c,F as T,aQ as ee,bj as ae,W as re}from"./index.8e12ee71.js";import{S as ne}from"./index.5828622c.js";import{l as te}from"./index.69444b8c.js";var p=globalThis&&globalThis.__assign||function(){return p=Object.assign||function(t){for(var r,s=1,v=arguments.length;s<v;s++){r=arguments[s];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(t[l]=r[l])}return t},p.apply(this,arguments)},le=globalThis&&globalThis.__read||function(t,r){var s=typeof Symbol=="function"&&t[Symbol.iterator];if(!s)return t;var v=s.call(t),l,N=[],i;try{for(;(r===void 0||r-- >0)&&!(l=v.next()).done;)N.push(l.value)}catch(S){i={error:S}}finally{try{l&&!l.done&&(s=v.return)&&s.call(v)}finally{if(i)throw i.error}}return N},L=function(t){return B(t)?t.reduce(function(r,s){return r+(s.span||1)},0):0},se={layout:"horizontal",column:3,tableLayout:"auto"};function I(t){var r,s=y.exports.useContext(K),v=s.getPrefixCls,l=s.componentConfig,N=s.rtl,i=U(t,se,l==null?void 0:l.Descriptions),S=i.style,O=i.className,d=i.column,F=i.title,_=i.data,R=i.border,w=i.labelStyle,P=i.valueStyle,C=i.colon,g=i.layout,A=i.size,H=i.tableLayout,n=v("descriptions"),D=le(y.exports.useState(),2),M=D[0],Q=D[1],j=y.exports.useRef(null);y.exports.useEffect(function(){return j.current=q.subscribe(function(a){for(var o=0;o<E.length;o++){var e=E[o];if(a[e]){Q(e);break}}}),function(){q.unsubscribe(j.current)}},[]);var u=3;Y(d)&&(u=d[M]||3),Z(d)&&d>0&&(u=d);var m=[];if(B(_)&&_.length>0&&u){_.forEach(function(a){var o=m[m.length-1],e=L(o);e===0?m.push([p(p({},a),{span:a.span?a.span>u?u:a.span:1})]):e===u?m.push([p(p({},a),{span:a.span?a.span>u?u:a.span:1})]):o.push(p(p({},a),{span:a.span?a.span+e>u?u-e:a.span:1}))});var x=m[m.length-1],z=L(x);z<u&&(x[x.length-1].span=x[x.length-1].span+u-z)}function V(a,o){return f(T,{children:[c("tr",{className:n+"-row",children:a.map(function(e,h){var b=e.span>1?{colSpan:e.span}:{};return f("td",{...p({key:(e.key||h)+"_label",className:n+"-item-label"},b,{style:w}),children:[e.label,C]})})}),c("tr",{className:n+"-row",children:a.map(function(e,h){var b=e.span>1?{colSpan:e.span}:{};return c("td",{...p({key:(e.key||h)+"_value",className:n+"-item-value"},b,{style:P}),children:e.value})})})]})}function W(a,o){return c("tr",{className:n+"-row",children:a.map(function(e,h){var b=e.span>1?{colSpan:e.span*2-1}:{};return f(T,{children:[f("td",{className:n+"-item-label",style:w,children:[e.label,C]}),c("td",{...p({className:n+"-item-value"},b,{style:P}),children:e.value})]})})},o)}function X(a,o){return c("tr",{className:n+"-row",children:a.map(function(e,h){var b=e.span>1?{colSpan:e.span}:{};return f("td",{...p({key:e.key||h},b,{className:n+"-item"}),children:[f("div",{className:n+"-item-label-inline",style:w,children:[e.label,C]}),c("div",{className:n+"-item-value-inline",style:P,children:e.value})]})})},o)}function G(a,o){return g==="inline-vertical"||g==="inline-horizontal"?X(a,o):g==="vertical"?V(a):W(a,o)}var J=$(n,(r={},r[n+"-border"]=R,r[n+"-layout-"+g]=g,r[n+"-size-"+A]=A,r[n+"-table-layout-fixed"]=H==="fixed",r[n+"-rtl"]=N,r),O);return f("div",{className:J,style:S,children:[F&&c("div",{className:n+"-title",children:F}),c("div",{className:n+"-body",children:c("table",{className:n+"-table",cellPadding:0,cellSpacing:0,children:c("tbody",{children:m.map(function(a,o){return G(a,o)})})})})]})}I.displayName="Descriptions";var k={"info-wrapper":"_info-wrapper_1rqux_1","info-avatar":"_info-avatar_1rqux_4","info-content":"_info-content_1rqux_14","verified-tag":"_verified-tag_1rqux_20","edit-btn":"_edit-btn_1rqux_25"};function ue({userInfo:t={},loading:r}){ee(te);const[s,v]=y.exports.useState("");y.exports.useEffect(()=>{v(t.avatar)},[t]);const l=c(ne,{text:{rows:1},animation:!0});return f("div",{className:k["info-wrapper"],children:[c(ae,{size:100,className:k["info-avatar"],children:s?c("img",{src:s}):c(re,{})}),c(I,{className:k["info-content"],column:2,colon:"\uFF1A",labelStyle:{textAlign:"right"},data:[{label:"\u8D26\u6237\u540D\u79F0",value:r?l:t.account_name},{label:"\u8D26\u6237ID",value:r?l:t.id},{label:"\u7528\u6237\u6635\u79F0",value:r?l:t.nickname},{label:"\u90AE\u7BB1",value:r?l:t.email},{label:"\u521B\u5EFA\u65F6\u95F4",value:r?l:t.created_at}]})]})}export{ue as default};
