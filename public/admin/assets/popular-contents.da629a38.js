import{aA as w,r,aC as b,j as a,aB as c,a as l,ak as f,al as v}from"./index.cde1c8e5.js";import"./index.85949d5d.js";import"./index.6ca229a5.js";import{R as C,a as S}from"./index.c1c54cbf.js";import{C as I}from"./index.b641deea.js";import{L}from"./index.b3754a3a.js";import{i as T}from"./index.079b4db4.js";const j="_symbol_coctx_1";var $={symbol:j};function A(){const t=w(T),[s,p]=r.exports.useState(0),[d,u]=r.exports.useState([]),[m,n]=r.exports.useState(!0),[o,g]=r.exports.useState(1),[y,x]=r.exports.useState(0),i=r.exports.useCallback(()=>{n(!0),b.get(`/api/workplace/popular-contents?page=${o}&pageSize=5&category=${s}`).then(e=>{u(e.data.list),x(e.data.total)}).finally(()=>{n(!1)})},[o,s]);r.exports.useEffect(()=>{i()},[o,i]);const h=[{title:t["workplace.column.rank"],dataIndex:"rank",width:65},{title:t["workplace.column.title"],dataIndex:"title",render:e=>a(c.Paragraph,{style:{margin:0},ellipsis:!0,children:e})},{title:t["workplace.column.pv"],dataIndex:"pv",width:100,render:e=>`${e/1e3}k`},{title:t["workplace.column.increase"],dataIndex:"increase",sorter:(e,k)=>e.increase-k.increase,width:110,render:e=>l("span",{children:[`${(e*100).toFixed(2)}%`,a("span",{className:$.symbol,children:e<0?a(f,{style:{color:"rgb(var(--green-6))"}}):a(v,{style:{color:"rgb(var(--red-6))"}})})]})}];return l(I,{children:[l("div",{style:{display:"flex",justifyContent:"space-between"},children:[a(c.Title,{heading:6,children:t["workplace.popularContents"]}),a(L,{children:t["workplace.seeMore"]})]}),a(C.Group,{type:"button",value:s,onChange:p,options:[{label:t["workplace.text"],value:0},{label:t["workplace.image"],value:1},{label:t["workplace.video"],value:2}],style:{marginBottom:16}}),a(S,{rowKey:"rank",columns:h,data:d,loading:m,tableLayoutFixed:!0,onChange:e=>{g(e.current)},pagination:{total:y,current:o,pageSize:5,simple:!0}})]})}export{A as default};
