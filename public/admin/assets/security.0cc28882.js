import{aP as h,at as s,r as B,bj as w,bk as b,a as g,j as e,au as i,bm as x,ab as E,B as S,bl as y,M as D}from"./index.f83d85b5.js";import{S as P}from"./index.c211632f.js";import{l as I}from"./index.69444b8c.js";import{a as v}from"./index.3b7a7673.js";function L({userInfo:p={},loading:t}){const m=h(I),[r]=s.useForm(),[F,n]=B.exports.useState(!1),{lang:d}=B.exports.useContext(w),C=b(),f=async()=>{r.validate().then(async u=>{n(!0);const{password:a,oldPassword:o}=u,c=await v({uuid:p.uuid,password:a,oldPassword:o});c.code===0&&(y(C),r.clearFields(),D.success(c.message))}).catch(u=>{console.log(u)}).finally(()=>{n(!1)})},l=(u=1)=>e(P,{text:{rows:u,width:new Array(u).fill("100%")},animation:!0});return g(s,{style:{width:"500px",marginTop:"6px"},form:r,labelCol:{span:d==="en-US"?7:6},wrapperCol:{span:d==="en-US"?17:18},children:[e(s.Item,{label:"\u65E7\u5BC6\u7801",field:"oldPassword",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"}],children:t?l:e(i.Password,{placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"})}),e(s.Item,{label:"\u65B0\u5BC6\u7801",field:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},{validator(u,a){x(u)||a("\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E09\u79CD\uFF0C\u957F\u5EA66-18\u4F4D")}}],children:t?l:e(i.Password,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"})}),e(s.Item,{label:"\u786E\u8BA4\u5BC6\u7801",field:"repeat_pwd",rules:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{validator(u,a){const o=r.getFieldValue("password");u!==o&&a("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4")}}],children:t?l:e(i.Password,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"})}),e(s.Item,{label:" ",children:e(E,{children:e(S,{loading:F,type:"primary",onClick:f,children:m["userSetting.save"]})})})]})}export{L as default};
