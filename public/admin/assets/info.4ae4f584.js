import{aL as A,ad as u,r as c,bh as D,bi as y,a as h,j as e,ae as o,a1 as C,B as f,bj as E,M as k}from"./index.1c93e058.js";import{S as N}from"./index.552a7b7d.js";import{l as j}from"./index.69444b8c.js";import{u as v}from"./index.b2b71d45.js";function z({userInfo:t={},loading:l}){const i=A(j),[s]=u.useForm(),[B,m]=c.exports.useState(!1),{lang:d}=c.exports.useContext(D),g=y(),x=async()=>{s.validate().then(async a=>{m(!0);const{accountName:r,nickname:F,email:S}=a,p=await v({uuid:t.uuid,accountName:r,nickname:F,email:S});p.code===0&&(E(g),k.success(p.message))}).catch(a=>{console.log(a)}).finally(()=>{m(!1)})},b=()=>{s.setFieldsValue({...t,accountName:t.account_name})},n=(a=1)=>e(N,{text:{rows:a,width:new Array(a).fill("100%")},animation:!0});return c.exports.useEffect(()=>{s.setFieldsValue({...t,accountName:t.account_name})},[]),h(u,{style:{width:"500px",marginTop:"6px"},form:s,labelCol:{span:d==="en-US"?7:6},wrapperCol:{span:d==="en-US"?17:18},children:[e(u.Item,{label:"\u8D26\u6237\u540D\u79F0",field:"accountName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"})}),e(u.Item,{label:"\u7528\u6237\u6635\u79F0",field:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"})}),e(u.Item,{label:"\u90AE\u7BB1",field:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{validator(a,r){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)||r("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})}),e(u.Item,{label:" ",children:h(C,{children:[e(f,{loading:B,type:"primary",onClick:x,children:i["userSetting.save"]}),e(f,{onClick:b,children:i["userSetting.reset"]})]})})]})}export{z as default};
