import{aQ as A,au as u,r,bb as D,bc as y,a as h,j as e,ae as o,ab as C,B as f,bd as E,M as k}from"./index.bc5fb13b.js";import{S as N}from"./index.a6f65052.js";import{l as v}from"./index.69444b8c.js";import{u as w}from"./index.1ac138cf.js";function I({userInfo:t={},loading:l}){const i=A(v),[s]=u.useForm(),[B,m]=r.exports.useState(!1),{lang:d}=r.exports.useContext(D),g=y(),b=async()=>{s.validate().then(async a=>{m(!0);const{accountName:c,nickname:F,email:S}=a,p=await w({uuid:t.uuid,accountName:c,nickname:F,email:S});p.code===0&&(E(g),k.success(p.message))}).catch(a=>{console.log(a)}).finally(()=>{m(!1)})},x=()=>{s.setFieldsValue({...t,accountName:t.account_name})},n=(a=1)=>e(N,{text:{rows:a,width:new Array(a).fill("100%")},animation:!0});return r.exports.useEffect(()=>{s.setFieldsValue({...t,accountName:t.account_name})},[]),h(u,{style:{width:"500px",marginTop:"6px"},form:s,labelCol:{span:d==="en-US"?7:6},wrapperCol:{span:d==="en-US"?17:18},children:[e(u.Item,{label:"\u8D26\u6237\u540D\u79F0",field:"accountName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"})}),e(u.Item,{label:"\u7528\u6237\u6635\u79F0",field:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"})}),e(u.Item,{label:"\u90AE\u7BB1",field:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{validator(a,c){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)||c("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:l?n:e(o,{placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})}),e(u.Item,{label:" ",children:h(C,{children:[e(f,{loading:B,type:"primary",onClick:b,children:i["userSetting.save"]}),e(f,{onClick:x,children:i["userSetting.reset"]})]})})]})}export{I as default};
