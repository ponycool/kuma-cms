import{h as c,r as o,aL as d,aM as f,a as h,j as r,aN as x,ab as C,B as F}from"./index.0803c1c4.js";import{T as B}from"./index.6ca4db48.js";import{a}from"./index.44a0c5f3.js";import{C as b}from"./index.48ea3076.js";import{P as g}from"./index.5fa65fa8.js";import"./index.d13cac47.js";import"./index.65822ea2.js";import"./index.149cb3e9.js";function y(n){return c.post("/api/permission/list",n)}function R(){const[n,i]=o.exports.useState(!0),[l,p]=o.exports.useState([]),[m]=d(f("admin"));return o.exports.useEffect(()=>{p(m.filter(e=>e.name!=="\u6B22\u8FCE\u4F7F\u7528"))},[]),h(b,{children:[r(g,{request:y,columns:[{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u6743\u9650",width:500,dataIndex:"permission",render(e,t,s){return t.permission?t.permission.split(",").map(u=>r(B,{style:{margin:"0 3px 3px 0 "},children:u},u)):"-"}},{title:"\u64CD\u4F5C",width:"350px",render(e,t,s){return[r(C,{children:r(F,{type:"default",status:"warning",onClick:()=>{i(!0)},children:"\u529F\u80FD\u6743\u9650"})},s)]}}]}),r(x,{visible:n,title:"\u8BBE\u7F6E\u6743\u9650",onCancel:()=>i(!1),children:r(a,{mode:"multiple",children:l.map((e,t)=>r(a.OptGroup,{label:e.name,children:e!=null&&e.children?e.children.map(s=>r(a.Option,{value:s.name},s.key)):r(a.Option,{value:e.name},e.key)},t))})})]})}export{R as default};
