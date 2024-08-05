import{h as s,u as f,i as E,R as h,r as v,j as t,a as u,B as c,M as p}from"./index.7437da46.js";import{U as y,I as C}from"./index.4eebe66e.js";import{T as d}from"./index.e8a45405.js";import{C as g}from"./index.89f9c1a7.js";import{i as A,C as w,D as k}from"./use-immer.module.33746274.js";import{P as x}from"./index.d73ced9a.js";import{d as I}from"./download.9953d649.js";import{I as S}from"./index.ad7f916f.js";import{I as T}from"./index.66b6c22e.js";import"./index.d32a8c4b.js";import"./index.1fef98cf.js";import"./index.39bcb729.js";import"./index.5d34a1a1.js";function z(){return s.post("/api/backup/server/backup",{})}function R(){return s.post("/api/backup/server/query",{})}function N(o){return s.post("/api/backup/server/delete",o)}function U(o){return s.post("/api/backup/server/restore",o)}const L={"en-US":{localBackup:"Local Backup",uploadBackup:"Upload Backup",fileName:"File Name",backupAt:"BackupAt",fileSize:"File Size",action:"Action",downloadBackup:"Download Backup",confirm:"Are you sure to restore the database from the server database backup?",content:"The current database will be overwritten after recovery",recovery:"Recovery Database",delete:"Delete Backup",remote:"Remote Backup",development:"Functional development"},"zh-CN":{localBackup:"\u672C\u5730\u5907\u4EFD",uploadBackup:"\u4E0A\u4F20\u5907\u4EFD",fileName:"\u6587\u4EF6\u540D",backupAt:"\u5907\u4EFD\u65F6\u95F4",fileSize:"\u6587\u4EF6\u5927\u5C0F",action:"\u64CD\u4F5C",downloadBackup:"\u4E0B\u8F7D\u5907\u4EFD",confirm:"\u786E\u8BA4\u4ECE\u670D\u52A1\u5668\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u6570\u636E\u5E93\uFF1F",content:"\u6062\u590D\u540E\u5C06\u4F1A\u8986\u76D6\u5F53\u524D\u6570\u636E\u5E93",recovery:"\u6062\u590D\u6570\u636E\u5E93",delete:"\u5220\u9664\u5907\u4EFD",remote:"\u8FDC\u7A0B\u5907\u4EFD",development:"\u529F\u80FD\u5F00\u53D1\u4E2D"}};function V(){const o=f(E),a=f(L),r=h.useRef(null),[m,i]=A({backup:!1,upload:!1}),[b,D]=v.exports.useState("local"),F=async()=>{var n;i(e=>{e.backup=!0});try{const e=await z();e.code===0&&(p.success(e.message),(n=r.current)==null||n.reload())}finally{i(e=>{e.backup=!1})}};return t(g,{children:u(d,{activeTab:b,onChange:D,type:"rounded",children:[t(d.TabPane,{title:"\u672C\u5730\u5907\u4EFD",children:t(x,{ref:r,toolBarRender:[t(c,{type:"primary",loading:m.backup,onClick:F,children:o["table.dataBackup"]},"backup"),t(y,{action:"/api/backup/server/upload",data:{token:JSON.parse(localStorage.getItem("token")).token},showUploadList:!1,accept:".db",onChange:(n,e)=>{if(e.status==="uploading")i(l=>{l.upload=!0});else if(e.status==="done"){const l=e.response;l.code===0?(p.success(l.message),r.current.reload()):p.error(l.message),i(B=>{B.upload=!1})}},children:t(c,{type:"primary",loading:m.upload,children:a.uploadBackup},"backup")},"upload")],columns:[{title:a.fileName,dataIndex:"filename"},{title:a.backupAt,dataIndex:"created_at"},{title:a.fileSize,dataIndex:"size",render(n,e){return`${e.size}MB`}},{title:a.action,render(n,e){return u(w,{children:[u(c,{type:"text",onClick:()=>{I("/api/backup/server/download",{filename:e.filename})},children:[t(S,{}),a.downloadBackup]}),t(k,{reqDel:U,params:{filename:e.filename},reload:()=>{r.current.reload()},title:a.confirm,content:a.content,children:u(c,{type:"text",children:[t(C,{}),a.recovery]})}),t(k,{reqDel:N,params:{filename:e.filename},reload:()=>{r.current.reload()},children:u(c,{type:"text",children:[t(T,{}),a.delete]})})]})}}],request:R})},"local"),t(d.TabPane,{title:a.remote,children:u("p",{style:{padding:20,fontSize:16,fontWeight:800},children:[" ",a.development,"..."]})},"remote")]})})}export{V as default};
