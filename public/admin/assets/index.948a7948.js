import{aL as d,b5 as n,bg as b,r as c,a as u,j as e}from"./index.8f634cb0.js";import{T as o}from"./index.a3e73dec.js";import{C as m}from"./index.a5d6483e.js";import{l as h}from"./index.69444b8c.js";import y from"./header.1b6c2f68.js";import g from"./info.3c1eb6e5.js";import x from"./security.852b66b4.js";import"./index.eb4b8872.js";import"./index.86d20e3a.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(g,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(x,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};