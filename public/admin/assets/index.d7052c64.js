import{u as m,i as C,r as u,a as l,j as a,aR as p,B as r,bc as x,be as D}from"./index.7437da46.js";import"./index.4eebe66e.js";import{C as F}from"./index.89f9c1a7.js";import{P as g}from"./index.d73ced9a.js";import{i as k,C as y,D as I}from"./use-immer.module.33746274.js";import{t as w,q as E,e as v,d as B,r as L,a as T}from"./index.5559dc33.js";import q from"./create.d8e1a307.js";import{I as R}from"./image.c108169f.js";import{I as S}from"./index.23b4d735.js";import{I as j}from"./index.66b6c22e.js";import"./index.d32a8c4b.js";import"./index.1fef98cf.js";import"./index.39bcb729.js";import"./index.5d34a1a1.js";import"./convertNullToUndefined.a19d8223.js";const A={"en-US":{"columns.carousel":"Carousel",noCover:"No Cover","columns.title":"Title","columns.description":"Description","columns.link":"Link","columns.status":"Status","columns.status.enable":"Enable","columns.status.disable":"Disable","columns.options":"Options","columns.action":"Action","columns.action.edit":"Edit","columns.action.enable":"Enable","columns.action.disable":"Disable","columns.action.delete":"Delete"},"zh-CN":{"columns.carousel":"\u8F6E\u64AD\u56FE",noCover:"\u6682\u65E0\u5C01\u9762","columns.title":"\u6807\u9898","columns.description":"\u63CF\u8FF0","columns.link":"\u8DF3\u8F6C\u94FE\u63A5","columns.status":"\u542F\u7528\u72B6\u6001","columns.status.enable":"\u542F\u7528","columns.status.disable":"\u7981\u7528","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","columns.action.enable":"\u542F\u7528","columns.action.disable":"\u7981\u7528","columns.action.delete":"\u5220\u9664"}},X=()=>{const c=m(C),o=m(A),n=u.exports.useRef(),[b,f]=u.exports.useState([]),[d,i]=k({show:!1});async function h(t){const e=await T(t);e.code===0&&i(s=>{s.data=e.data,s.show=!0})}return u.exports.useEffect(()=>{w().then(t=>{const e=[];for(const s in t.data)e.push({value:s,label:t.data[s]});f(e)})},[]),l(F,{children:[a(q,{reload:()=>{var t;return(t=n.current)==null?void 0:t.reload()},close:()=>i(t=>{t.show=!1}),visible:d.show,target:b,data:d.data}),a(g,{ref:n,request:E,columns:[{title:o["columns.carousel"],width:150,dataIndex:"image",render:(t,e)=>{if(e.image){let s="";return s=e.image,a(R,{width:200,height:100,src:s})}else return o.noCover}},{title:o["columns.title"],dataIndex:"title"},{title:o["columns.description"],dataIndex:"description"},{title:o["columns.link"],dataIndex:"link"},{title:o["columns.status"],dataIndex:"status",render(t,e){return e.status===1?a(p,{color:"green",children:o["columns.status.enable"]}):a(p,{color:"red",children:o["columns.status.disable"]})}},{title:o["columns.action"],width:280,render:(t,e)=>l(y,{children:[l(r,{type:"text",onClick:()=>h(e.uuid),children:[a(x,{}),o["columns.action.edit"]]}),e.status===0?l(r,{type:"text",onClick:async()=>{(await v(e.uuid)).code===0&&n.current.reload()},children:[a(S,{}),o["columns.action.enable"]]}):l(r,{type:"text",onClick:async()=>{(await B(e.uuid)).code===0&&n.current.reload()},children:[a(D,{}),o["columns.action.disable"]]}),a(I,{reqDel:L,params:e.uuid,reload:()=>n.current.reload(),children:l(r,{type:"text",children:[a(j,{}),o["columns.action.delete"]]})})]})}],pagination:!1,pageSize:!1,actionBarRender:[a(r,{type:"primary",onClick:()=>n.current.reload(),children:c["table.refresh"]},"refresh")],toolBarRender:[a(r,{type:"primary",onClick:()=>{i(t=>{t.data=void 0,t.show=!0})},children:c["table.create"]},"create")]})]})};export{X as default};