import{u as A,aB as a,r as c,bl as D,bm as y,a as h,j as e,aj as o,ad as C,B,bn as E,M as k}from"./index.7437da46.js";import{S as N}from"./index.dc8f34ed.js";import{l as j}from"./index.69444b8c.js";import{u as v}from"./index.82f9b33a.js";function I({userInfo:t={},loading:l}){const i=A(j),[s]=a.useForm(),[f,m]=c.exports.useState(!1),{lang:d}=c.exports.useContext(D),g=y(),x=async()=>{s.validate().then(async u=>{m(!0);const{accountName:r,nickname:F,email:S}=u,p=await v({uuid:t.uuid,accountName:r,nickname:F,email:S});p.code===0&&(E(g),k.success(p.message))}).catch(u=>{console.log(u)}).finally(()=>{m(!1)})},b=()=>{s.setFieldsValue({...t,accountName:t.account_name})},n=(u=1)=>e(N,{text:{rows:u,width:new Array(u).fill("100%")},animation:!0});return c.exports.useEffect(()=>{s.setFieldsValue({...t,accountName:t.account_name})},[]),h(a,{style:{width:"500px",marginTop:"6px"},form:s,labelCol:{span:d==="en-US"?7:6},wrapperCol:{span:d==="en-US"?17:18},children:[e(a.Item,{label:"\u8D26\u6237\u540D\u79F0",field:"accountName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"})}),e(a.Item,{label:"\u7528\u6237\u6635\u79F0",field:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"})}),e(a.Item,{label:"\u90AE\u7BB1",field:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{validator(u,r){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u)||r("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})}),e(a.Item,{label:" ",children:h(C,{children:[e(B,{loading:f,type:"primary",onClick:x,children:i["userSetting.save"]}),e(B,{onClick:b,children:i["userSetting.reset"]})]})})]})}export{I as default};
