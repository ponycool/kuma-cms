import{aP as d,b9 as n,bi as b,r as c,a as u,j as e}from"./index.f83d85b5.js";import{T as o}from"./index.31965add.js";import{C as m}from"./index.0d3d33cd.js";import{l as h}from"./index.69444b8c.js";import y from"./header.f53da798.js";import x from"./info.1ee58a69.js";import g from"./security.0cc28882.js";import"./index.c211632f.js";import"./index.3b7a7673.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(x,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(g,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};
