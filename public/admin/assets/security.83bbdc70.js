import{aL as f,ad as s,r as B,bh as w,bi as g,a as b,j as e,ae as i,bk as x,a1 as E,B as S,bj as y,M as D}from"./index.1c93e058.js";import{S as P}from"./index.552a7b7d.js";import{l as I}from"./index.69444b8c.js";import{a as v}from"./index.b2b71d45.js";function q({userInfo:p={},loading:t}){const m=f(I),[r]=s.useForm(),[F,d]=B.exports.useState(!1),{lang:n}=B.exports.useContext(w),C=g(),h=async()=>{r.validate().then(async u=>{d(!0);const{password:a,oldPassword:l}=u,c=await v({uuid:p.uuid,password:a,oldPassword:l});c.code===0&&(y(C),r.clearFields(),D.success(c.message))}).catch(u=>{console.log(u)}).finally(()=>{d(!1)})},o=(u=1)=>e(P,{text:{rows:u,width:new Array(u).fill("100%")},animation:!0});return b(s,{style:{width:"500px",marginTop:"6px"},form:r,labelCol:{span:n==="en-US"?7:6},wrapperCol:{span:n==="en-US"?17:18},children:[e(s.Item,{label:"\u65E7\u5BC6\u7801",field:"oldPassword",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"}],children:t?o:e(i.Password,{placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"})}),e(s.Item,{label:"\u65B0\u5BC6\u7801",field:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"},{validator(u,a){x(u)||a("\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E09\u79CD\uFF0C\u957F\u5EA66-18\u4F4D")}}],children:t?o:e(i.Password,{placeholder:"\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801"})}),e(s.Item,{label:"\u786E\u8BA4\u5BC6\u7801",field:"repeat_pwd",rules:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{validator(u,a){const l=r.getFieldValue("password");u!==l&&a("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4")}}],children:t?o:e(i.Password,{placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"})}),e(s.Item,{label:" ",children:e(E,{children:e(S,{loading:F,type:"primary",onClick:h,children:m["userSetting.save"]})})})]})}export{q as default};
