import{h as c,r as o,aN as d,aO as f,a as h,j as r,aP as x,ab as C,B as F}from"./index.a8b54cb9.js";import{T as B}from"./index.ac52648d.js";import{S as n}from"./index.5d5a2ec3.js";import{C as b}from"./index.6f4c51f8.js";import{P}from"./index.95e2705f.js";import"./index.fd65b64f.js";import"./index.fb658119.js";import"./index.741b32a4.js";function S(a){return c.post("/api/permission/list",a)}function R(){const[a,i]=o.exports.useState(!0),[l,p]=o.exports.useState([]),[m]=d(f("admin"));return o.exports.useEffect(()=>{p(m.filter(e=>e.name!=="\u6B22\u8FCE\u4F7F\u7528"))},[]),h(b,{children:[r(P,{request:S,columns:[{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u6743\u9650",width:500,dataIndex:"permission",render(e,t,s){return t.permission?t.permission.split(",").map(u=>r(B,{style:{margin:"0 3px 3px 0 "},children:u},u)):"-"}},{title:"\u64CD\u4F5C",width:"350px",render(e,t,s){return[r(C,{children:r(F,{type:"default",status:"warning",onClick:()=>{i(!0)},children:"\u529F\u80FD\u6743\u9650"})},s)]}}]}),r(x,{visible:a,title:"\u8BBE\u7F6E\u6743\u9650",onCancel:()=>i(!1),children:r(n,{mode:"multiple",children:l.map((e,t)=>r(n.OptGroup,{label:e.name,children:e!=null&&e.children?e.children.map(s=>r(n.Option,{value:s.name},s.key)):r(n.Option,{value:e.name},e.key)},t))})})]})}export{R as default};