import{r as n,a as u,j as a,B as s,av as h,bd as C}from"./index.dd8c1d81.js";import{T as p}from"./index.92fac09f.js";import"./index.d322783e.js";import{C as F}from"./index.529d114d.js";import{P as x}from"./index.a74cc0d2.js";import{i as g,C as I,D as y}from"./use-immer.module.098db1e5.js";import{t as w,C as D,q as k,e as B,d as b,r as E,a as v}from"./create.809df4d2.js";import{I as q}from"./image.4013d08e.js";import{I as T}from"./index.f6783e98.js";import{I as _}from"./index.a9a45444.js";import"./index.a44555f2.js";import"./index.ed93faaa.js";import"./index.d608e5f0.js";import"./index.4d4663e9.js";import"./index.9cb78c9e.js";const O=()=>{const o=n.exports.useRef(),[l,m]=n.exports.useState([]),[d,i]=g({show:!1});async function f(t){const e=await v(t);e.code===0&&i(r=>{r.data=e.data,r.show=!0})}return n.exports.useEffect(()=>{w().then(t=>{const e=[];for(const r in t.data)e.push({value:r,label:t.data[r]});m(e)})},[]),u(F,{children:[a(D,{reload:()=>{var t;return(t=o.current)==null?void 0:t.reload()},close:()=>i(t=>{t.show=!1}),visible:d.show,target:l,data:d.data}),a(x,{ref:o,request:k,columns:[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u63CF\u8FF0",dataIndex:"description"},{title:"\u8F6E\u64AD\u56FE",width:150,dataIndex:"image",render:(t,e)=>{if(e.image){let r="";return r=e.image,a(q,{width:40,height:40,src:r})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u542F\u7528\u72B6\u6001",dataIndex:"status",render(t,e){return e.status===1?a(p,{color:"green",children:"\u542F\u7528"}):a(p,{color:"red",children:"\u7981\u7528"})}},{title:"\u8DF3\u8F6C\u94FE\u63A5",dataIndex:"link"},{title:"\u8DF3\u8F6C\u65B9\u5F0F",dataIndex:"target",render:(t,e)=>{let r;return l.forEach(c=>{c.value===e.target&&(r=c.label)}),r}},{title:"\u64CD\u4F5C",width:280,render:(t,e)=>u(I,{children:[u(s,{type:"text",onClick:()=>f(e.uuid),children:[a(h,{}),"\u7F16\u8F91"]}),e.status===0?u(s,{type:"text",onClick:async()=>{(await B(e.uuid)).code===0&&o.current.reload()},children:[a(T,{}),"\u542F\u7528"]}):u(s,{type:"text",onClick:async()=>{(await b(e.uuid)).code===0&&o.current.reload()},children:[a(C,{}),"\u7981\u7528"]}),a(y,{reqDel:E,params:{uuid:e.uuid},reload:()=>o.current.reload(),children:u(s,{type:"text",children:[a(_,{}),"\u5220\u9664"]})})]})}],pagination:!1,pageSize:!1,actionBarRender:[a(s,{type:"primary",onClick:()=>o.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[a(s,{type:"primary",onClick:()=>{i(t=>{t.data=void 0,t.show=!0})},children:"\u521B\u5EFA"},"create")]})]})};export{O as default};