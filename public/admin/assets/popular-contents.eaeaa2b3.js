import{r as e,j as a,az as i,a as f}from"./index.d701a0f0.js";import"./index.80dbc820.js";import"./index.5873cde8.js";import{R as A,a as E}from"./index.8acd33a0.js";import{C as w}from"./index.ef9f10fd.js";function b(u){var l;const[c,s]=e.exports.useState([]),[p,n]=e.exports.useState([]),[m,o]=e.exports.useState(!0),[r,g]=e.exports.useState("\u6587\u7AE0"),[x,h]=e.exports.useState(1);e.exports.useEffect(()=>{var t,d;o(!0),r==="\u6587\u7AE0"&&((t=u.data)==null?void 0:t.topArticle)?(s(y),n(u.data.topArticle)):r==="\u4EA7\u54C1"&&((d=u.data)==null?void 0:d.topArticle)&&(s(C),n(u.data.topProduct)),o(!1)},[(l=u.data)==null?void 0:l.topArticle,r]);const y=[{title:"\u6807\u9898",dataIndex:"title",render:t=>a(i.Paragraph,{style:{margin:0},ellipsis:!0,children:t})},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count",width:100}],C=[{title:"\u540D\u5B57",dataIndex:"name",render:t=>a(i.Paragraph,{style:{margin:0},ellipsis:!0,children:t})},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count",width:100}];return f(w,{children:[a("div",{style:{display:"flex",justifyContent:"space-between"},children:a(i.Title,{heading:6,children:"\u7EBF\u4E0A\u70ED\u95E8\u5185\u5BB9"})}),a(A.Group,{type:"button",value:r,onChange:g,options:["\u6587\u7AE0","\u4EA7\u54C1"],style:{marginBottom:16}}),a(E,{style:{minHeight:292},rowKey:"id",columns:c,data:p,loading:m,tableLayoutFixed:!0,onChange:t=>{h(t.current)},pagination:{current:x,pageSize:5,simple:!0}})]})}export{b as default};
