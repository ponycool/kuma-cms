import{r as n,a as s,j as r,B as i,b3 as f,b5 as h}from"./index.188c659e.js";import{T as d}from"./index.703147ed.js";import"./index.70fcbb7c.js";import{C}from"./index.ea63e9e0.js";import{P as x}from"./index.c60e1788.js";import{i as F,C as g,D as y}from"./use-immer.module.c8f4966b.js";import{t as I,q as w,e as D,d as k,r as B,a as b}from"./index.d1730b76.js";import E from"./create.17e28986.js";import{I as q}from"./image.626e4802.js";import{I as v}from"./index.56707b69.js";import{I as T}from"./index.a9942bd1.js";import"./index.1a62b8c4.js";import"./index.464caf9a.js";import"./index.a79d7306.js";import"./index.22219daf.js";import"./index.9bf47861.js";import"./convertNullToUndefined.a19d8223.js";const V=()=>{const o=n.exports.useRef(),[c,p]=n.exports.useState([]),[l,u]=F({show:!1});async function m(t){const e=await b(t);e.code===0&&u(a=>{a.data=e.data,a.show=!0})}return n.exports.useEffect(()=>{I().then(t=>{const e=[];for(const a in t.data)e.push({value:a,label:t.data[a]});p(e)})},[]),s(C,{children:[r(E,{reload:()=>{var t;return(t=o.current)==null?void 0:t.reload()},close:()=>u(t=>{t.show=!1}),visible:l.show,target:c,data:l.data}),r(x,{ref:o,request:w,columns:[{title:"\u8F6E\u64AD\u56FE",width:150,dataIndex:"image",render:(t,e)=>{if(e.image){let a="";return a=e.image,r(q,{width:200,height:100,src:a})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u6807\u9898",dataIndex:"title"},{title:"\u63CF\u8FF0",dataIndex:"description"},{title:"\u8DF3\u8F6C\u94FE\u63A5",dataIndex:"link"},{title:"\u542F\u7528\u72B6\u6001",dataIndex:"status",render(t,e){return e.status===1?r(d,{color:"green",children:"\u542F\u7528"}):r(d,{color:"red",children:"\u7981\u7528"})}},{title:"\u64CD\u4F5C",width:280,render:(t,e)=>s(g,{children:[s(i,{type:"text",onClick:()=>m(e.uuid),children:[r(f,{}),"\u7F16\u8F91"]}),e.status===0?s(i,{type:"text",onClick:async()=>{(await D(e.uuid)).code===0&&o.current.reload()},children:[r(v,{}),"\u542F\u7528"]}):s(i,{type:"text",onClick:async()=>{(await k(e.uuid)).code===0&&o.current.reload()},children:[r(h,{}),"\u7981\u7528"]}),r(y,{reqDel:B,params:e.uuid,reload:()=>o.current.reload(),children:s(i,{type:"text",children:[r(T,{}),"\u5220\u9664"]})})]})}],pagination:!1,pageSize:!1,actionBarRender:[r(i,{type:"primary",onClick:()=>o.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[r(i,{type:"primary",onClick:()=>{u(t=>{t.data=void 0,t.show=!0})},children:"\u521B\u5EFA"},"create")]})]})};export{V as default};
