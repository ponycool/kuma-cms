import{r as o,a as s,d as p,j as t,B as i,k as f}from"./index.40e87f26.js";import{S as g}from"./index.43f3305c.js";import"./index.05a6c0fd.js";import{C as h}from"./index.1891e7b9.js";import{r as v}from"./index.883e9f08.js";function C(){const[c,d]=o.exports.useState([]),[r,l]=o.exports.useState(!1),[n,m]=o.exports.useState(10),u=async()=>{l(!0);const e=await v();d(e.data),l(!1)};return o.exports.useEffect(()=>{u();const e=setInterval(()=>{u()},n*1e3);return()=>{clearInterval(e)}},[n]),s(h,{children:[s(p,{children:[t(g,{prefix:"\u5237\u65B0\u65F6\u95F4",placeholder:"\u9009\u62E9\u5237\u65B0\u65F6\u95F4",options:[{label:"3\u79D2",value:3},{label:"5\u79D2",value:5},{label:"10\u79D2",value:10},{label:"30\u79D2",value:30},{label:"60\u79D2",value:60}],defaultValue:10,onChange:m},"autoRefreshTime"),t(i,{type:"primary",onClick:()=>{const e=document.createElement("a"),a=localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")).token:void 0;e.href=`/api/log/run/download?token=${a}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)},children:"\u65E5\u5FD7\u4E0B\u8F7D"},"download"),t(i,{type:"primary",icon:r?t(f,{}):null,disabled:r,children:"\u5237\u65B0"},"refresh")]}),t("ol",{style:{height:"70vh",overflow:"auto",backgroundColor:"#f5f5f5"},children:c.map((e,a)=>t("li",{children:JSON.stringify(e)},a))})]})}export{C as default};
