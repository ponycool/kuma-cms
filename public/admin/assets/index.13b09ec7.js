import{h as l,e as b,r as F,j as u,a as r,B as n,M as i}from"./index.f83d85b5.js";import{U as k,I as h}from"./index.bea412e5.js";import{T as c}from"./index.31965add.js";import{C}from"./index.0d3d33cd.js";import{i as g,C as y,D as d}from"./use-immer.module.1c8e9420.js";import{P as x}from"./index.74329099.js";import{d as B}from"./download.9953d649.js";import{I}from"./index.56495722.js";import{I as v}from"./index.f46d4afd.js";import"./index.289dc640.js";import"./index.92a955e0.js";import"./index.d3875766.js";import"./index.dbc23ec2.js";import"./index.03083615.js";import"./index.ffb2a7b6.js";function T(){return l.post("/api/backup/server/backup",{})}function A(){return l.post("/api/backup/server/query",{})}function w(a){return l.post("/api/backup/server/delete",a)}function q(a){return l.post("/api/backup/server/restore",a)}function H(){const a=b.useRef(null),[p,s]=g({backup:!1,upload:!1}),[m,f]=F.exports.useState("local"),D=async()=>{var t;s(e=>{e.backup=!0});try{const e=await T();e.code===0&&(i.success(e.message),(t=a.current)==null||t.reload())}finally{s(e=>{e.backup=!1})}};return u(C,{children:r(c,{activeTab:m,onChange:f,type:"rounded",children:[u(c.TabPane,{title:"\u672C\u5730\u5907\u4EFD",children:u(x,{ref:a,toolBarRender:[u(n,{type:"primary",loading:p.backup,onClick:D,children:"\u6570\u636E\u5907\u4EFD"},"backup"),u(k,{action:"/api/backup/server/upload",data:{token:JSON.parse(localStorage.getItem("token")).token},showUploadList:!1,accept:".db",onChange:(t,e)=>{if(e.status==="uploading")s(o=>{o.upload=!0});else if(e.status==="done"){const o=e.response;o.code===0?(i.success(o.message),a.current.reload()):i.error(o.message),s(E=>{E.upload=!1})}},children:u(n,{type:"primary",loading:p.upload,children:"\u4E0A\u4F20\u5907\u4EFD"},"backup")},"upload")],columns:[{title:"\u6587\u4EF6\u540D",dataIndex:"filename"},{title:"\u5907\u4EFD\u65F6\u95F4",dataIndex:"created_at"},{title:"\u6587\u4EF6\u5927\u5C0F",dataIndex:"size",render(t,e){return`${e.size}MB`}},{title:"\u64CD\u4F5C",render(t,e){return r(y,{children:[r(n,{type:"text",onClick:()=>{B("/api/backup/server/download",{filename:e.filename})},children:[u(I,{}),"\u4E0B\u8F7D\u5907\u4EFD"]}),u(d,{reqDel:q,params:{filename:e.filename},reload:()=>{a.current.reload()},title:"\u786E\u8BA4\u4ECE\u670D\u52A1\u5668\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u6570\u636E\u5E93?",content:"\u6062\u590D\u540E\u5C06\u4F1A\u8986\u76D6\u5F53\u524D\u6570\u636E\u5E93",children:r(n,{type:"text",children:[u(h,{}),"\u6062\u590D\u6570\u636E\u5E93"]})}),u(d,{reqDel:w,params:{filename:e.filename},reload:()=>{a.current.reload()},children:r(n,{type:"text",children:[u(v,{}),"\u5220\u9664\u5907\u4EFD"]})})]})}}],request:A})},"local"),u(c.TabPane,{title:"\u8FDC\u7A0B\u5907\u4EFD",children:r("p",{style:{padding:20,fontSize:16,fontWeight:800},children:[" ","\u529F\u80FD\u5F00\u53D1\u4E2D..."]})},"remote")]})})}export{H as default};
