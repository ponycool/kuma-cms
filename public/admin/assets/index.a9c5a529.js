import{aP as d,b9 as n,bi as b,r as c,a as u,j as e}from"./index.d7da5add.js";import{T as o}from"./index.d4c003fd.js";import{C as m}from"./index.bfb3086e.js";import{l as h}from"./index.69444b8c.js";import y from"./header.f286a1e7.js";import x from"./info.7fc69b42.js";import g from"./security.c6c6a012.js";import"./index.673f75eb.js";import"./index.a2e34e7c.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(x,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(g,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};