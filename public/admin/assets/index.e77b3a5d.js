import{h as d,r as u,b as m,g as f,a as h,j as s,M as x,d as C,B as F}from"./index.8f3ae58a.js";import{S as n,T as B}from"./index.2568e243.js";import{C as b}from"./index.b1abcd55.js";import{P as g}from"./index.075db186.js";function S(a){return d.post("/api/permission/list",a)}function v(){const[a,i]=u.exports.useState(!0),[l,p]=u.exports.useState([]),[c]=m(f("admin"));return u.exports.useEffect(()=>{p(c.filter(e=>e.name!=="\u6B22\u8FCE\u4F7F\u7528"))},[]),h(b,{children:[s(g,{request:S,columns:[{title:"\u540D\u5B57",dataIndex:"name",search:!0},{title:"\u6743\u9650",width:500,dataIndex:"permission",render(e,r,t){return r.permission?r.permission.split(",").map(o=>s(B,{style:{margin:"0 3px 3px 0 "},children:o},o)):"-"}},{title:"\u64CD\u4F5C",width:"350px",render(e,r,t){return[s(C,{children:s(F,{type:"default",status:"warning",onClick:()=>{i(!0)},children:"\u529F\u80FD\u6743\u9650"})},t)]}}]}),s(x,{visible:a,title:"\u8BBE\u7F6E\u6743\u9650",onCancel:()=>i(!1),children:s(n,{mode:"multiple",children:l.map((e,r)=>s(n.OptGroup,{label:e.name,children:e!=null&&e.children?e.children.map(t=>s(n.Option,{value:t.name},t.key)):s(n.Option,{value:e.name},e.key)},r))})})]})}export{v as default};
