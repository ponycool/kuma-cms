import{aL as d,b5 as n,bg as b,r as c,a as u,j as e}from"./index.1c93e058.js";import{T as o}from"./index.6299cc31.js";import{C as m}from"./index.4a2e633e.js";import{l as h}from"./index.69444b8c.js";import y from"./header.97cbc8e3.js";import g from"./info.4ae4f584.js";import x from"./security.83bbdc70.js";import"./index.552a7b7d.js";import"./index.b2b71d45.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(g,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(x,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};
