import{u as C,r as a,j as r,aG as i,a as A}from"./index.7437da46.js";import{R as k,a as v}from"./index.39bcb729.js";import{C as P}from"./index.89f9c1a7.js";import{i as S}from"./index.8527a59a.js";function T(o){var u;const e=C(S),[p,n]=a.exports.useState([]),[m,l]=a.exports.useState([]),[g,c]=a.exports.useState(!0),[s,w]=a.exports.useState("\u6587\u7AE0"),[x,h]=a.exports.useState(1);a.exports.useEffect(()=>{var t,d;c(!0),s==="\u6587\u7AE0"&&((t=o.data)==null?void 0:t.topArticle)?(n(y),l(o.data.topArticle)):s==="\u4EA7\u54C1"&&((d=o.data)==null?void 0:d.topArticle)&&(n(f),l(o.data.topProduct)),c(!1)},[(u=o.data)==null?void 0:u.topArticle,s]);const y=[{title:e["workplace.title"],dataIndex:"title",render:t=>r(i.Paragraph,{style:{margin:0},ellipsis:!0,children:t})},{title:e["workplace.views"],dataIndex:"view_count",width:100}],f=[{title:e["workplace.name"],dataIndex:"name",render:t=>r(i.Paragraph,{style:{margin:0},ellipsis:!0,children:t})},{title:e["workplace.views"],dataIndex:"view_count",width:100}];return A(P,{children:[r("div",{style:{display:"flex",justifyContent:"space-between"},children:r(i.Title,{heading:6,children:e["workplace.popularContents"]})}),r(k.Group,{type:"button",value:s,onChange:w,options:[e["workplace.article"],e["workplace.product"]],style:{marginBottom:16}}),r(v,{style:{minHeight:292},rowKey:"id",columns:p,data:m,loading:g,tableLayoutFixed:!0,onChange:t=>{h(t.current)},pagination:{current:x,pageSize:5,simple:!0}})]})}export{T as default};
