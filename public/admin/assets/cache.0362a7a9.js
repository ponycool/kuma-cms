import{h as a,r as l,j as t,a as c,B as o,M as y}from"./index.8cb5e409.js";const p="_security_x4wya_1";var s={security:p,"security-item":"_security-item_x4wya_4","security-item-title":"_security-item-title_x4wya_7","security-item-content":"_security-item-content_x4wya_14","security-item-placeholder":"_security-item-placeholder_x4wya_23"};function f(){return a.post("/api/setting",{})}function g(u){return a.post("/api/setting/update",u)}function m(){return a.post("/api/cache/template/clear",{})}function x(){return a.post("/api/theme/query",{})}const d=[{title:"\u6A21\u7248\u7F13\u5B58",value:"\u6A21\u7248\u89E3\u6790\u540E\u7684\u7ED3\u679C\u7F13\u5B58\uFF0C\u63D0\u9AD8\u9875\u9762\u52A0\u8F7D\u901F\u5EA6"}];function _(){const[u,i]=l.exports.useState(!1),r=async()=>{i(!0);try{const e=await m();e.code===0&&y.success(e.message)}finally{i(!1)}};return t("div",{className:s.security,children:d.map((e,n)=>c("div",{className:s["security-item"],children:[t("span",{className:s["security-item-title"],children:e.title}),c("div",{className:s["security-item-content"],children:[t("span",{className:s["security-item-placeholder"],children:e.value}),t("span",{children:t(o,{type:"text",loading:u,onClick:r,children:"\u6E05\u7406\u7F13\u5B58"})})]})]},n))})}var v=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"}));export{_ as C,g as a,v as c,f as s,x as t};
