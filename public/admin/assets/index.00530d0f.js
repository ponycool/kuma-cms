import{r as n,a as s,j as r,B as i,bc as f,be as h}from"./index.2d7dd8af.js";import{T as c}from"./index.32914cb8.js";import"./index.ec67960d.js";import{C}from"./index.93e79ab1.js";import{P as x}from"./index.d3e13324.js";import{i as F,C as g,D as y}from"./use-immer.module.b019f7b9.js";import{t as I,q as w,e as D,d as k,r as B,a as b}from"./index.6bd91bb6.js";import E from"./create.fc3100f7.js";import{I as q}from"./image.a2436356.js";import{I as v}from"./index.53c48bc2.js";import{I as T}from"./index.48c672d1.js";import"./index.19b84780.js";import"./index.9697c4aa.js";import"./index.59d08893.js";import"./index.26ba3245.js";import"./index.29f37e1d.js";import"./convertNullToUndefined.a19d8223.js";const V=()=>{const o=n.exports.useRef(),[d,p]=n.exports.useState([]),[l,u]=F({show:!1});async function m(t){const e=await b(t);e.code===0&&u(a=>{a.data=e.data,a.show=!0})}return n.exports.useEffect(()=>{I().then(t=>{const e=[];for(const a in t.data)e.push({value:a,label:t.data[a]});p(e)})},[]),s(C,{children:[r(E,{reload:()=>{var t;return(t=o.current)==null?void 0:t.reload()},close:()=>u(t=>{t.show=!1}),visible:l.show,target:d,data:l.data}),r(x,{ref:o,request:w,columns:[{title:"\u8F6E\u64AD\u56FE",width:150,dataIndex:"image",render:(t,e)=>{if(e.image){let a="";return a=e.image,r(q,{width:200,height:100,src:a})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u6807\u9898",dataIndex:"title"},{title:"\u63CF\u8FF0",dataIndex:"description"},{title:"\u8DF3\u8F6C\u94FE\u63A5",dataIndex:"link"},{title:"\u542F\u7528\u72B6\u6001",dataIndex:"status",render(t,e){return e.status===1?r(c,{color:"green",children:"\u542F\u7528"}):r(c,{color:"red",children:"\u7981\u7528"})}},{title:"\u64CD\u4F5C",width:280,render:(t,e)=>s(g,{children:[s(i,{type:"text",onClick:()=>m(e.uuid),children:[r(f,{}),"\u7F16\u8F91"]}),e.status===0?s(i,{type:"text",onClick:async()=>{(await D(e.uuid)).code===0&&o.current.reload()},children:[r(v,{}),"\u542F\u7528"]}):s(i,{type:"text",onClick:async()=>{(await k(e.uuid)).code===0&&o.current.reload()},children:[r(h,{}),"\u7981\u7528"]}),r(y,{reqDel:B,params:e.uuid,reload:()=>o.current.reload(),children:s(i,{type:"text",children:[r(T,{}),"\u5220\u9664"]})})]})}],pagination:!1,pageSize:!1,actionBarRender:[r(i,{type:"primary",onClick:()=>o.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[r(i,{type:"primary",onClick:()=>{u(t=>{t.data=void 0,t.show=!0})},children:"\u521B\u5EFA"},"create")]})]})};export{V as default};