import{aR as p,r as a,a as y,j as r,az as m,a8 as C}from"./index.2132e63f.js";import{C as h}from"./index.dbf9034b.js";import{D as x}from"./index.76efb1b4.js";import{i as b}from"./index.079b4db4.js";function j(e){var o;const s=p(b),[i,l]=a.exports.useState([]),[n,c]=a.exports.useState(!0);return a.exports.useEffect(()=>{var t;(t=e.data)!=null&&t.articleCategoryAnalysis&&(l(e.data.articleCategoryAnalysis),c(!1))},[(o=e.data)==null?void 0:o.articleCategoryAnalysis]),y(h,{children:[r(m.Title,{heading:6,children:s["workplace.contentPercentage"]}),r(C,{loading:n,style:{display:"block"},children:r(x,{autoFit:!0,height:340,data:i,radius:.7,innerRadius:.65,angleField:"count",colorField:"category",color:["#21CCFF","#313CA9"],interactions:[{type:"element-single-selected"}],tooltip:{showMarkers:!1},label:{visible:!0,type:"spider",formatter:t=>`${t.rate}%`,style:{fill:"#86909C",fontSize:14}},legend:{position:"bottom"},statistic:{title:{style:{fontSize:"14px",lineHeight:2,color:"rgb(--var(color-text-1))"},formatter:()=>"\u6570\u636E\u91CF"},content:{style:{fontSize:"16px",color:"rgb(--var(color-text-1))"},formatter:(t,u)=>{const d=u.reduce((f,g)=>f+g.count,0);return Number(d).toLocaleString()}}}})})]})}export{j as default};
