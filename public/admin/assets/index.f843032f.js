import{aQ as d,b1 as n,b7 as b,r as c,a as u,j as e}from"./index.bc5fb13b.js";import{T as o}from"./index.73477b35.js";import{C as m}from"./index.c3cd5738.js";import{l as h}from"./index.69444b8c.js";import y from"./header.7005f955.js";import x from"./info.cb9ebf16.js";import g from"./security.9d1c2c81.js";import"./index.a6f65052.js";import"./index.1ac138cf.js";function q(){const l=d(h),t=n(a=>a.userInfo),r=n(a=>a.userLoading),f=b(),s=new URLSearchParams(f.search).get("tab");c.exports.useEffect(()=>{s==="security"&&i("security")},[s]);const[p,i]=c.exports.useState("basic");return u("div",{children:[e(m,{style:{padding:"14px 20px"},children:e(y,{userInfo:t,loading:r})}),e(m,{style:{marginTop:"16px"},children:u(o,{activeTab:p,onChange:i,type:"rounded",children:[e(o.TabPane,{title:l["userSetting.title.basicInfo"],children:e(x,{userInfo:t,loading:r})},"basic"),e(o.TabPane,{title:"\u5B89\u5168\u8BBE\u7F6E",children:e(g,{userInfo:t,loading:r})},"security")]})})]})}export{q as default};
