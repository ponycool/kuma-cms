import{r as a,a as f,j as i,aM as u}from"./index.ee837804.js";import"./index.1e676bc1.js";import"./index.1b443c87.js";import{R as x,a as h}from"./index.9f631467.js";import{C}from"./index.9bf4464a.js";function w(e){var s;const[l,o]=a.exports.useState([]),[d,p]=a.exports.useState(!0),[r,c]=a.exports.useState(0),[g,m]=a.exports.useState(1);a.exports.useEffect(()=>{var t,n;r===0&&((t=e.data)==null?void 0:t.topArticle)?(o(e.data.topArticle),p(!1)):r===1&&((n=e.data)==null?void 0:n.topArticle)&&o(e.data.topArticle)},[(s=e.data)==null?void 0:s.topArticle,r]);const y=[{title:"\u6807\u9898",dataIndex:"title",render:t=>i(u.Paragraph,{style:{margin:0},ellipsis:!0,children:t})},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count",width:100}];return f(C,{children:[i("div",{style:{display:"flex",justifyContent:"space-between"},children:i(u.Title,{heading:6,children:"\u7EBF\u4E0A\u70ED\u95E8\u5185\u5BB9"})}),i(x.Group,{type:"button",value:r,onChange:c,options:["\u6587\u7AE0","\u4EA7\u54C1"],style:{marginBottom:16}}),i(h,{style:{minHeight:292},rowKey:"id",columns:y,data:l,loading:d,tableLayoutFixed:!0,onChange:t=>{m(t.current)},pagination:{current:g,pageSize:5,simple:!0}})]})}export{w as default};
