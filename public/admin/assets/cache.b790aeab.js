import{h as e,r as l,j as s,a as c,B as o,M as p}from"./index.5f43b6ab.js";const y="_security_x4wya_1";var u={security:y,"security-item":"_security-item_x4wya_4","security-item-title":"_security-item-title_x4wya_7","security-item-content":"_security-item-content_x4wya_14","security-item-placeholder":"_security-item-placeholder_x4wya_23"};function f(){return e.post("/api/setting",{})}function g(t){return e.post("/api/setting/update",t)}function m(){return e.post("/api/cache/template/clear",{})}function x(){return e.post("/api/theme/query",{})}function v(){return e.post("/api/language/query",{})}function C(t){return e.post("/api/sitemap/create",t)}const d=[{title:"\u6A21\u7248\u7F13\u5B58",value:"\u6A21\u7248\u89E3\u6790\u540E\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6"}];function _(){const[t,i]=l.exports.useState(!1),r=async()=>{i(!0);try{const a=await m();a.code===0&&p.success(a.message)}finally{i(!1)}};return s("div",{className:u.security,children:d.map((a,n)=>c("div",{className:u["security-item"],children:[s("span",{className:u["security-item-title"],children:a.title}),c("div",{className:u["security-item-content"],children:[s("span",{className:u["security-item-placeholder"],children:a.value}),s("span",{children:s(o,{type:"text",loading:t,onClick:r,children:"\u6E05\u7406\u7F13\u5B58"})})]})]},n))})}var F=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as C,g as a,C as b,F as c,v as l,f as s,x as t};
