import{h as d,r as u,b as m,g as f,a as h,j as r,M as x,d as C,B as F}from"./index.2d5d6f5f.js";import{T as B}from"./index.cbf7e464.js";import{S as n}from"./index.3b9c156d.js";import{C as b}from"./index.09381007.js";import{P as g}from"./index.c9fc8123.js";import"./index.28f8fedc.js";function S(a){return d.post("/api/permission/list",a)}function D(){const[a,o]=u.exports.useState(!0),[l,p]=u.exports.useState([]),[c]=m(f("admin"));return u.exports.useEffect(()=>{p(c.filter(e=>e.name!=="\u6B22\u8FCE\u4F7F\u7528"))},[]),h(b,{children:[r(g,{request:S,columns:[{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u6743\u9650",width:500,dataIndex:"permission",render(e,s,t){return s.permission?s.permission.split(",").map(i=>r(B,{style:{margin:"0 3px 3px 0 "},children:i},i)):"-"}},{title:"\u64CD\u4F5C",width:"350px",render(e,s,t){return[r(C,{children:r(F,{type:"default",status:"warning",onClick:()=>{o(!0)},children:"\u529F\u80FD\u6743\u9650"})},t)]}}]}),r(x,{visible:a,title:"\u8BBE\u7F6E\u6743\u9650",onCancel:()=>o(!1),children:r(n,{mode:"multiple",children:l.map((e,s)=>r(n.OptGroup,{label:e.name,children:e!=null&&e.children?e.children.map(t=>r(n.Option,{value:t.name},t.key)):r(n.Option,{value:e.name},e.key)},s))})})]})}export{D as default};
