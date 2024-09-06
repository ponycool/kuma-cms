import{u as y,av as s,r as o,bf as C,bm as v,a as g,j as a,aj as u,ad as F,B as S,bn as j,M as w}from"./index.565c71ed.js";import{S as A}from"./index.05cb7cc4.js";import{l as U}from"./index.f54b0d3d.js";import{u as q}from"./index.c3694fd4.js";function Z({userInfo:l={},loading:r}){const e=y(U),[n]=s.useForm(),[f,m]=o.exports.useState(!1),{lang:d}=o.exports.useContext(C),x=v(),b=async()=>{n.validate().then(async t=>{m(!0);const{accountName:i,nickname:p,email:N}=t,h=await q({uuid:l.uuid,accountName:i,nickname:p,email:N});h.code===0&&(j(x),w.success(h.message))}).catch(t=>{console.log(t)}).finally(()=>{m(!1)})},k=()=>{n.setFieldsValue({...l,accountName:l.account_name})},c=(t=1)=>a(A,{text:{rows:t,width:new Array(t).fill("100%")},animation:!0});return o.exports.useEffect(()=>{n.setFieldsValue({...l,accountName:l.account_name})},[]),g(s,{style:{width:"500px",marginTop:"6px"},form:n,labelCol:{span:d==="en-US"?7:6},wrapperCol:{span:d==="en-US"?17:18},children:[a(s.Item,{label:e["userSetting.accountName"],field:"accountName",rules:[{required:!0,message:e["userSetting.accountName.placeholder"]}],children:r?c:a(u,{placeholder:e["userSetting.accountName.placeholder"]})}),a(s.Item,{label:e["userSetting.nickname"],field:"nickname",rules:[{required:!0,message:e["userSetting.nickname.placeholder"]}],children:r?c:a(u,{placeholder:e["userSetting.nickname.placeholder"]})}),a(s.Item,{label:e["userSetting.email"],field:"email",rules:[{required:!0,message:e["userSetting.email.placeholder"]},{validator(t,i){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)||i(e["userSetting.email.error"])}}],children:r?c:a(u,{placeholder:e["userSetting.email.placeholder"]})}),a(s.Item,{label:" ",children:g(F,{children:[a(S,{loading:f,type:"primary",onClick:b,children:e["userSetting.save"]}),a(S,{onClick:k,children:e["userSetting.reset"]})]})})]})}export{Z as default};