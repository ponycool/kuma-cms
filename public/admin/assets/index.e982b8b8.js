import{u as H,r as e,bf as J,j as a,a as L,aj as M,az as Q}from"./index.565c71ed.js";import{P as V}from"./index.60a23487.js";import{C as W}from"./index.88e38468.js";import{T as v}from"./index.f13a7fb7.js";import{l as X,s as Y,q as Z,a as _}from"./index.11223457.js";import{s as b}from"./index.module.82d05283.js";import tt from"./card-block.c70afc5d.js";import et from"./card-add.878394f4.js";import at from"./share-record.e422e9cf.js";import{i as st}from"./use-immer.module.720189b1.js";import rt from"./create.56112ac9.js";import"./b-tween.es.064e2a03.js";import"./index.05cb7cc4.js";import"./index.3b1acaa0.js";import"./index.4cfcbf04.js";import"./index.d892e19b.js";import"./index.b442c2d6.js";import"./index.0d3431fb.js";import"./index.bf2ec937.js";import"./index.8addcb6e.js";import"./index.962a9504.js";import"./index.db105af6.js";import"./index.dd28a207.js";import"./convertNullToUndefined.a19d8223.js";import"./index.14b951cf.js";const{Row:ot,Col:w}=Q;function Tt(){const p=H(X),{lang:m}=e.exports.useContext(J),[A,f]=e.exports.useState(!0),[R,z]=e.exports.useState(new Array(1).fill({})),[r,j]=e.exports.useState(),[i,N]=e.exports.useState("ALL"),[x,P]=e.exports.useState(),[n,c]=st({visible:!1,close:function(){c(t=>{t.visible=!1})}}),[h,d]=e.exports.useState(),[l,S]=e.exports.useState(1),[u,T]=e.exports.useState(10),[E,q]=e.exports.useState(0),[D,C]=e.exports.useState(!1),[G,K]=e.exports.useState();function $(){d(void 0),c(t=>{t.data=void 0,t.visible=!0})}async function k(t){try{const o=await _({uuid:t});o.code===0&&(d(t),c(s=>{s.data=o.data,s.visible=!0}))}catch{}}async function B(){const t=await Y();j(t.data.status)}function g(){!r||(f(!0),Z({page:l,pageSize:u,status:i==="ALL"?void 0:i,keyword:x}).then(t=>{const o=t.data.pageData.map(s=>({...s,status:s.status,statusText:r[s.status]}));q(t.data.total),z(o)}).finally(()=>{f(!1)}))}function y(){S(1),g()}e.exports.useEffect(()=>{B()},[]),e.exports.useEffect(()=>{g()},[r,l,u,i,x]);const I=()=>a(at,{uuid:h,name:G,close:()=>C(!1)}),O=()=>a(rt,{data:n.data,status:r,close:()=>n.close(),reload:y,uuid:h}),U=()=>L(ot,{gutter:24,className:b["card-content"],children:[a(w,{xs:24,sm:12,md:8,lg:6,xl:6,xxl:6,children:a(et,{description:p["cardList.add.quality"],onCreate:$})}),R.map((t,o)=>a(w,{xs:24,sm:12,md:8,lg:6,xl:6,xxl:6,children:a(tt,{card:t,loading:A,onEdit:k,onShareRecord:s=>{d(t.id.toString()),K(s),C(!0)},reload:y})},o))]}),F=()=>L(W,{children:[a(v,{activeTab:i,type:"rounded",onChange:N,extra:a(M.Search,{style:{width:"240px"},placeholder:p[`cardList.tab.${i}.placeholder`],onSearch:P}),children:r&&Object.keys({ALL:m==="zh-CN"?"\u5168\u90E8":"All",...r}).map(t=>a(v.TabPane,{title:m==="zh-CN"?{ALL:"\u5168\u90E8",...r}[t]:t},t))}),a("div",{className:b.container,children:U()}),a("div",{style:{width:"100%",display:"flex",justifyContent:"flex-end"},children:a(V,{sizeCanChange:!0,total:E,pageSize:u,current:l,onChange:S,onPageSizeChange:T})})]});return(()=>n.visible?O():D?I():F())()}export{Tt as default};