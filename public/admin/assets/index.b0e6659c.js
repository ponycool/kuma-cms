import{r as l,a as u,a1 as b,j as a,B as t,G as g}from"./index.e4d8ed9f.js";import{S as m}from"./index.47cc5035.js";import"./index.d61aad50.js";import{C as y}from"./index.7ade6558.js";import{r as D,c as L}from"./index.623affca.js";import{d as E}from"./download.a96acb29.js";import{I as F}from"./index.dcd1e1ec.js";function j(){const[h,r]=l.exports.useState([]),[n,s]=l.exports.useState(!1),[i,c]=l.exports.useState(!1),[d,C]=l.exports.useState(10),[p,v]=l.exports.useState(50),o=async()=>{s(!0);const e=await D(p);e.code===0?r((e==null?void 0:e.data)||[]):r([]),s(!1)},x=async()=>{c(!0);try{(await L()).code===0&&o()}finally{c(!1)}};return l.exports.useEffect(()=>{o();const e=setInterval(()=>{o()},d*1e3);return()=>{clearInterval(e)}},[d,p]),u(y,{children:[u(b,{children:[a(m,{prefix:"\u5237\u65B0\u65F6\u95F4",placeholder:"\u9009\u62E9\u5237\u65B0\u65F6\u95F4",options:[{label:"3\u79D2",value:3},{label:"5\u79D2",value:5},{label:"10\u79D2",value:10},{label:"30\u79D2",value:30},{label:"60\u79D2",value:60}],defaultValue:10,onChange:C},"autoRefreshTime"),a(m,{prefix:"\u65E5\u5FD7\u884C\u6570",placeholder:"\u9009\u62E9\u65E5\u5FD7\u663E\u793A\u884C\u6570",options:[{label:"5\u884C",value:5},{label:"10\u884C",value:10},{label:"20\u884C",value:20},{label:"50\u884C",value:50},{label:"100\u884C",value:100}],defaultValue:50,allowClear:!0,onChange:v},"line"),a(t,{type:"primary",icon:n?a(g,{}):null,disabled:n,onClick:o,children:"\u5237\u65B0"},"refresh"),u(t,{type:"primary",icon:i?a(g,{}):null,disabled:i,onClick:x,children:[a(F,{}),"\u6E05\u7A7A\u65E5\u5FD7"]},"refresh"),a(t,{type:"primary",onClick:()=>{E("/api/log/run/download")},children:"\u65E5\u5FD7\u4E0B\u8F7D"},"download")]}),a("ol",{style:{height:"70vh",overflow:"auto",backgroundColor:"#f5f5f5",padding:"0"},children:h.map((e,f)=>u("li",{style:{listStyle:"none"},children:[u("span",{children:[f+1,"\xA0\xA0\xA0\xA0"]}),e]},f))})]})}export{j as default};
