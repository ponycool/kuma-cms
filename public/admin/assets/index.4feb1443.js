import{h as m,r as o,aC as d,aD as f,a as h,j as r,aE as x,a1 as C,B as F}from"./index.e4d8ed9f.js";import{T as B}from"./index.d61aad50.js";import{S as n}from"./index.47cc5035.js";import{C as E}from"./index.7ade6558.js";import{P as S}from"./index.34e480b9.js";import"./index.01d34601.js";import"./index.5ad798fd.js";function b(a){return m.post("/api/permission/list",a)}function O(){const[a,u]=o.exports.useState(!0),[l,p]=o.exports.useState([]),[c]=d(f("admin"));return o.exports.useEffect(()=>{p(c.filter(e=>e.name!=="\u6B22\u8FCE\u4F7F\u7528"))},[]),h(E,{children:[r(S,{request:b,columns:[{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u6743\u9650",width:500,dataIndex:"permission",render(e,s,t){return s.permission?s.permission.split(",").map(i=>r(B,{style:{margin:"0 3px 3px 0 "},children:i},i)):"-"}},{title:"\u64CD\u4F5C",width:"350px",render(e,s,t){return[r(C,{children:r(F,{type:"default",status:"warning",onClick:()=>{u(!0)},children:"\u529F\u80FD\u6743\u9650"})},t)]}}]}),r(x,{visible:a,title:"\u8BBE\u7F6E\u6743\u9650",onCancel:()=>u(!1),children:r(n,{mode:"multiple",children:l.map((e,s)=>r(n.OptGroup,{label:e.name,children:e!=null&&e.children?e.children.map(t=>r(n.Option,{value:t.name},t.key)):r(n.Option,{value:e.name},e.key)},s))})})]})}export{O as default};
