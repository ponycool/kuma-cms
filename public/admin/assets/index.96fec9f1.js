import{aO as d,a$ as n,b8 as b,r as c,a as u,j as e}from"./index.9cbf2bc1.js";import{T as o}from"./index.d1cc3279.js";import{C as m}from"./index.34e8fbc1.js";import{l as h}from"./index.69444b8c.js";import y from"./header.e1b5d1d5.js";import x from"./info.6c3bf9a1.js";import g from"./security.2f780e36.js";import"./index.3228cd96.js";import"./index.8e8dbe5a.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(x,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(g,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};
