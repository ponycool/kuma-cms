import{aK as A,am as u,r,aT as D,aU as y,a as h,j as e,a6 as o,d as C,B,aV as E,ap as k}from"./index.aed1b284.js";import{l as N,S as U}from"./index.5df79ba1.js";import{u as v}from"./index.ad572829.js";function z({userInfo:t={},loading:l}){const i=A(N),[s]=u.useForm(),[f,m]=r.exports.useState(!1),{lang:d}=r.exports.useContext(D),g=y(),x=async()=>{s.validate().then(async a=>{m(!0);const{accountName:c,nickname:F,email:b}=a,p=await v({uuid:t.uuid,accountName:c,nickname:F,email:b});p.code===0&&(E(g),k.success(p.message))}).catch(a=>{console.log(a)}).finally(()=>{m(!1)})},S=()=>{s.setFieldsValue({...t,accountName:t.account_name})},n=(a=1)=>e(U,{text:{rows:a,width:new Array(a).fill("100%")},animation:!0});return r.exports.useEffect(()=>{s.setFieldsValue({...t,accountName:t.account_name})},[]),h(u,{style:{width:"500px",marginTop:"6px"},form:s,labelCol:{span:d==="en-US"?7:6},wrapperCol:{span:d==="en-US"?17:18},children:[e(u.Item,{label:"\u8D26\u6237\u540D\u79F0",field:"accountName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"})}),e(u.Item,{label:"\u7528\u6237\u6635\u79F0",field:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"})}),e(u.Item,{label:"\u90AE\u7BB1",field:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{validator(a,c){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)||c("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})}),e(u.Item,{label:" ",children:h(C,{children:[e(B,{loading:f,type:"primary",onClick:x,children:i["userSetting.save"]}),e(B,{onClick:S,children:i["userSetting.reset"]})]})})]})}export{z as default};
