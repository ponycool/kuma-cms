import{e as C,r as g,I as k,j as o,_ as v,h as p,a as c,B as i,M as f}from"./index.2c26006b.js";import{U as F,I as x}from"./index.f2341ce0.js";import{T as m}from"./index.4707b539.js";import{C as w}from"./index.423b5a6f.js";import{i as O,C as I,D}from"./use-immer.module.7543e98f.js";import{P as j}from"./index.673637e1.js";import{d as P}from"./download.9953d649.js";import{I as B}from"./index.358bdfb3.js";import"./index.983acc5f.js";import"./index.0eef118d.js";import"./index.9c50bbea.js";import"./index.7de12b9b.js";import"./index.d3fdacea.js";import"./index.9874ae76.js";function h(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),r.push.apply(r,a)}return r}function E(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?h(Object(r),!0).forEach(function(a){v(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}function _(e,n){var r=g.exports.useContext(k),a=r.prefixCls,s=a===void 0?"arco":a,d=e.spin,u=e.className,t=E(E({"aria-hidden":!0,focusable:!1,ref:n},e),{},{className:"".concat(u?u+" ":"").concat(s,"-icon ").concat(s,"-icon-download")});return d&&(t.className="".concat(t.className," ").concat(s,"-icon-loading")),delete t.spin,delete t.isIcon,o("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...t,children:o("path",{d:"m33.072 22.071-9.07 9.071-9.072-9.07M24 5v26m16 4v6H8v-6"})})}var b=C.forwardRef(_);b.defaultProps={isIcon:!0};b.displayName="IconDownload";var N=b;function S(){return p.post("/api/backup/server/backup",{})}function T(){return p.post("/api/backup/server/query",{})}function A(e){return p.post("/api/backup/server/delete",e)}function q(e){return p.post("/api/backup/server/restore",e)}function Y(){const e=C.useRef(null),[n,r]=O({backup:!1,upload:!1}),[a,s]=g.exports.useState("local"),d=async()=>{var u;r(t=>{t.backup=!0});try{const t=await S();t.code===0&&(f.success(t.message),(u=e.current)==null||u.reload())}finally{r(t=>{t.backup=!1})}};return o(w,{children:c(m,{activeTab:a,onChange:s,type:"rounded",children:[o(m.TabPane,{title:"\u672C\u5730\u5907\u4EFD",children:o(j,{ref:e,toolBarRender:[o(i,{type:"primary",loading:n.backup,onClick:d,children:"\u6570\u636E\u5907\u4EFD"},"backup"),o(F,{action:"/api/backup/server/upload",data:{token:JSON.parse(localStorage.getItem("token")).token},showUploadList:!1,accept:".db",onChange:(u,t)=>{if(t.status==="uploading")r(l=>{l.upload=!0});else if(t.status==="done"){const l=t.response;l.code===0?(f.success(l.message),e.current.reload()):f.error(l.message),r(y=>{y.upload=!1})}},children:o(i,{type:"primary",loading:n.upload,children:"\u4E0A\u4F20\u5907\u4EFD"},"backup")},"upload")],columns:[{title:"\u6587\u4EF6\u540D",dataIndex:"filename"},{title:"\u5907\u4EFD\u65F6\u95F4",dataIndex:"created_at"},{title:"\u6587\u4EF6\u5927\u5C0F",dataIndex:"size",render(u,t){return`${t.size}MB`}},{title:"\u64CD\u4F5C",render(u,t){return c(I,{children:[c(i,{type:"text",onClick:()=>{P("/api/backup/server/download",{filename:t.filename})},children:[o(N,{}),"\u4E0B\u8F7D\u5907\u4EFD"]}),o(D,{reqDel:q,params:{filename:t.filename},reload:()=>{e.current.reload()},title:"\u786E\u8BA4\u4ECE\u670D\u52A1\u5668\u6570\u636E\u5E93\u5907\u4EFD\u6062\u590D\u6570\u636E\u5E93?",content:"\u6062\u590D\u540E\u5C06\u4F1A\u8986\u76D6\u5F53\u524D\u6570\u636E\u5E93",children:c(i,{type:"text",children:[o(x,{}),"\u6062\u590D\u6570\u636E\u5E93"]})}),o(D,{reqDel:A,params:{filename:t.filename},reload:()=>{e.current.reload()},children:c(i,{type:"text",children:[o(B,{}),"\u5220\u9664\u5907\u4EFD"]})})]})}}],request:T})},"local"),o(m.TabPane,{title:"\u8FDC\u7A0B\u5907\u4EFD",children:c("p",{style:{padding:20,fontSize:16,fontWeight:800},children:[" ","\u529F\u80FD\u5F00\u53D1\u4E2D..."]})},"remote")]})})}export{Y as default};
