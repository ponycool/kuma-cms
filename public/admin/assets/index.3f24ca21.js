import{h as m,r as o,aI as d,aJ as f,a as h,j as r,aK as x,ab as C,B as F}from"./index.8f186ff9.js";import{T as B}from"./index.a251fd89.js";import{S as n}from"./index.c0d8db7d.js";import{C as b}from"./index.c0c2d13a.js";import{P as S}from"./index.fa192795.js";import"./index.dbb60610.js";import"./index.e0788cd9.js";function g(a){return m.post("/api/permission/list",a)}function I(){const[a,u]=o.exports.useState(!0),[l,p]=o.exports.useState([]),[c]=d(f("admin"));return o.exports.useEffect(()=>{p(c.filter(e=>e.name!=="\u6B22\u8FCE\u4F7F\u7528"))},[]),h(b,{children:[r(S,{request:g,columns:[{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u6743\u9650",width:500,dataIndex:"permission",render(e,s,t){return s.permission?s.permission.split(",").map(i=>r(B,{style:{margin:"0 3px 3px 0 "},children:i},i)):"-"}},{title:"\u64CD\u4F5C",width:"350px",render(e,s,t){return[r(C,{children:r(F,{type:"default",status:"warning",onClick:()=>{u(!0)},children:"\u529F\u80FD\u6743\u9650"})},t)]}}]}),r(x,{visible:a,title:"\u8BBE\u7F6E\u6743\u9650",onCancel:()=>u(!1),children:r(n,{mode:"multiple",children:l.map((e,s)=>r(n.OptGroup,{label:e.name,children:e!=null&&e.children?e.children.map(t=>r(n.Option,{value:t.name},t.key)):r(n.Option,{value:e.name},e.key)},s))})})]})}export{I as default};