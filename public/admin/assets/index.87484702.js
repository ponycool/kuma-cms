import{aO as d,b8 as n,bh as b,r as c,a as u,j as e}from"./index.0803c1c4.js";import{T as o}from"./index.345b2205.js";import{C as m}from"./index.48ea3076.js";import{l as h}from"./index.69444b8c.js";import y from"./header.14e205ec.js";import x from"./info.9cd4afcd.js";import g from"./security.aa874c43.js";import"./index.092e3488.js";import"./index.8ee104c9.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(x,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(g,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};
