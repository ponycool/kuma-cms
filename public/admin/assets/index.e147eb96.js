import{aR as d,ba as n,bg as b,r as c,a as u,j as e}from"./index.ac56ee66.js";import{T as o}from"./index.641b65fa.js";import{C as m}from"./index.d52a1e3d.js";import{l as h}from"./index.69444b8c.js";import y from"./header.7ee1a35a.js";import g from"./info.c365e5a1.js";import x from"./security.878bcb90.js";import"./index.bd4f0837.js";import"./index.83608348.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(g,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(x,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};
