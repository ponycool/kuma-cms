import{R as k,r as h,g as O,a as i,j as t,_ as P,av as d,bd as A,aj as m,bp as j,bq as N,be as B,bo as S,M as _,u as g,i as R,B as f,bc as q}from"./index.bd6f0fd9.js";import{C as L}from"./index.015e15aa.js";import{C as U,D}from"./DelPopconfirm.f694f4a0.js";import{P as $}from"./index.3693d17a.js";import{b as Z,u as V,a as K,c as T,d as W,e as G,f as H}from"./index.0dd80227.js";import{i as M}from"./use-immer.module.0f20ac89.js";import{I as J}from"./index.63457497.js";import{I as Q}from"./index.e54eee63.js";import"./index.b75b57f1.js";import"./b-tween.es.064e2a03.js";import"./index.fc500d5c.js";import"./index.f7527960.js";import"./index.37183713.js";function w(e,u){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);u&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,r)}return a}function x(e){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?w(Object(a),!0).forEach(function(r){P(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function X(e,u){var a=h.exports.useContext(O),r=a.prefixCls,s=r===void 0?"arco":r,c=e.spin,n=e.className,o=x(x({"aria-hidden":!0,focusable:!1,ref:u},e),{},{className:"".concat(n?n+" ":"").concat(s,"-icon ").concat(s,"-icon-idcard")});return c&&(o.className="".concat(o.className," ").concat(s,"-icon-loading")),delete o.spin,delete o.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:[t("path",{d:"M11 17h9m-9 7h9m-9 7h5m-8 9h32a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2Z"}),t("path",{d:"M36 33a7 7 0 1 0-14 0"}),t("circle",{cx:"29",cy:"20",r:"4"})]})}var F=k.forwardRef(X);F.defaultProps={isIcon:!0};F.displayName="IconIdcard";var Y=F;function E(e,u){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);u&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),a.push.apply(a,r)}return a}function I(e){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?E(Object(a),!0).forEach(function(r){P(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ee(e,u){var a=h.exports.useContext(O),r=a.prefixCls,s=r===void 0?"arco":r,c=e.spin,n=e.className,o=I(I({"aria-hidden":!0,focusable:!1,ref:u},e),{},{className:"".concat(n?n+" ":"").concat(s,"-icon ").concat(s,"-icon-tool")});return c&&(o.className="".concat(o.className," ").concat(s,"-icon-loading")),delete o.spin,delete o.isIcon,t("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:t("path",{d:"M19.994 11.035c3.66-3.659 9.094-4.46 13.531-2.405a.1.1 0 0 1 .028.16l-6.488 6.488a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.488-6.488a.1.1 0 0 1 .16.028c2.056 4.437 1.254 9.872-2.405 13.53-3.695 3.696-9.2 4.477-13.66 2.347L12.923 40.733a1 1 0 0 1-1.414 0L7.266 36.49a1 1 0 0 1 0-1.414l10.382-10.382c-2.13-4.46-1.349-9.965 2.346-13.66Z"})})}var C=k.forwardRef(ee);C.defaultProps={isIcon:!0};C.displayName="IconTool";var ue=C;function te(e){const[u]=d.useForm(),[a,r]=h.exports.useState(!1);async function s(){u.validate().then(async c=>{r(!0);const{accountName:n,nickname:o,email:b,password:y,oldPassword:z}=c;let p;e.type===l.register?p=await Z({accountName:n,nickname:o,email:b,password:y}):e.type===l.edit?p=await V({uuid:e.data.uuid,accountName:n,nickname:o,email:b}):e.type===l.changePassword&&(p=await K({uuid:e.data.uuid,oldPassword:z,password:y})),p.code===0&&(_.success(p.message),e.reload(),e.close())}).catch(c=>{console.log(c)}).finally(()=>{r(!1)})}return h.exports.useEffect(()=>{e.visible&&e.data?(u.setFieldsValue(e.data),u.setFieldValue("accountName",e.data.account_name)):u.clearFields()},[e.visible]),t(A,{width:400,visible:e.visible,onOk:s,onCancel:()=>e.close(),confirmLoading:a,okText:e.data?"\u4FDD\u5B58":"\u521B\u5EFA",children:i(d,{labelCol:{span:6},wrapperCol:{span:18},form:u,children:[e.type!==l.changePassword&&t(d.Item,{label:"\u8D26\u6237\u540D\u79F0",field:"accountName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"}],children:t(m,{prefix:t(j,{}),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0"})}),e.type!==l.changePassword&&t(d.Item,{label:"\u7528\u6237\u6635\u79F0",field:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"}],children:t(m,{prefix:t(Y,{}),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0"})}),e.type!==l.changePassword&&t(d.Item,{label:"\u90AE\u7BB1",field:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{validator(c,n){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(c)||n("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:t(m,{prefix:t(N,{}),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})}),e.type===l.changePassword&&t(d.Item,{label:"\u65E7\u5BC6\u7801",field:"oldPassword",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"}],children:t(m.Password,{prefix:t(B,{}),placeholder:"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801"})}),e.type!==l.edit&&t(d.Item,{label:"\u5BC6\u7801",field:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{validator(c,n){S(c)||n("\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E09\u79CD\uFF0C\u957F\u5EA66-18\u4F4D")}}],children:t(m.Password,{prefix:t(B,{}),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})}),e.type!==l.edit&&t(d.Item,{label:"\u786E\u8BA4\u5BC6\u7801",field:"repeat_pwd",rules:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{validator(c,n){const o=u.getFieldValue("password");c!==o&&n("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4")}}],children:t(m.Password,{prefix:t(B,{}),placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"})})]})})}const ae={"en-US":{"columns.keyword":"keyword","columns.account":"Account","columns.nickname":"nickName","columns.email":"email","columns.accountStatus":"Account Status","columns.frozen":"Frozen","columns.normal":"Normal","columns.unfrozen":"UnFrozen","columns.abnormalStatus":"Abnormal Status","columns.lockedAt":"LockedAt","columns.createdAt":"CreateAt","columns.action":"Action","columns.action.edit":"Edit","confirm.freeze":"Confirm Freeze","confirm.unfreeze":"Confirm Unfreeze","Do you confirm to freeze the account?":"Do you confirm to freeze the account?","Do you confirm to unfreeze the account?":"Do you confirm to unfreeze the account?","columns.action.changePassword":"Change Password","columns.action.delete":"Delete"},"zh-CN":{"columns.keyword":"\u5173\u952E\u8BCD","columns.account":"\u8D26\u6237\u540D\u79F0","columns.nickname":"\u7528\u6237\u6635\u79F0","columns.email":"\u90AE\u7BB1","columns.accountStatus":"\u8D26\u6237\u72B6\u6001","columns.frozen":"\u51BB\u7ED3","columns.normal":"\u6B63\u5E38","columns.unfrozen":"\u89E3\u51BB","columns.abnormalStatus":"\u72B6\u6001\u5F02\u5E38","columns.lockedAt":"\u51BB\u7ED3\u65F6\u95F4","columns.createdAt":"\u521B\u5EFA\u65F6\u95F4","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","confirm.freeze":"\u51BB\u7ED3\u786E\u8BA4","confirm.unfreeze":"\u89E3\u51BB\u786E\u8BA4","Do you confirm to freeze the account?":"\u786E\u8BA4\u51BB\u8BE5\u7ED3\u8D26\u6237\u5417\uFF1F","Do you confirm to unfreeze the account?":"\u786E\u8BA4\u89E3\u9664\u8BE5\u7ED3\u8D26\u6237\u5417\uFF1F","columns.action.changePassword":"\u4FEE\u6539\u5BC6\u7801","columns.action.delete":"\u5220\u9664"}};var l=(e=>(e[e.register=0]="register",e[e.edit=1]="edit",e[e.changePassword=2]="changePassword",e))(l||{});const v=(e,u)=>i("span",{style:{display:"flex",alignItems:"center"},children:[t("i",{style:{display:"block",width:"8px",height:"8px",background:u===1?"green":"red",borderRadius:"50%",marginRight:"8px"}}),e]});function Fe(){const e=g(R),u=g(ae),a=h.exports.useRef(),[r,s]=M({visible:!1,close:()=>{s(c=>{c.visible=!1})},reload:()=>a.current.reload(),type:0});return i(L,{children:[t(te,{...r}),t($,{ref:a,actionBarRender:[t(f,{type:"primary",onClick:()=>{a.current.reload()},children:e["table.refresh"]},"refresh")],toolBarRender:[t(f,{type:"primary",onClick:()=>{s(c=>{c.data=void 0,c.visible=!0,c.type=0})},children:e["table.createUser"]},"create")],columns:[{title:u["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:"ID",dataIndex:"id"},{title:u["columns.account"],dataIndex:"account_name"},{title:u["columns.nickname"],dataIndex:"nickname"},{title:u["columns.email"],dataIndex:"email"},{title:u["columns.accountStatus"],dataIndex:"locked",render(c,n){switch(n.locked){case 1:return v(u["columns.frozen"],0);case 0:return v(u["columns.normal"],1);default:return u["columns.abnormalStatus"]}}},{title:u["columns.lockedAt"],dataIndex:"locked_at"},{title:u["columns.createdAt"],dataIndex:"created_at"},{title:u["columns.action"],render(c,n){return i(U,{children:[i(f,{type:"text",onClick:()=>{s(o=>{o.data=n,o.visible=!0,o.type=1})},children:[t(q,{}),u["columns.action.edit"]]}),t(D,{reqDel:n.locked===0?T:W,params:{uuid:n.uuid},reload:()=>a.current.reload(),title:n.locked===0?u["confirm.freeze"]:u["confirm.unfreeze"],content:n.locked===0?u["Do you confirm to freeze the account?"]:u["Do you confirm to unfreeze the account?"],children:i(f,{type:"text",children:[n.locked===0?t(B,{}):t(J,{}),n.locked===0?u["columns.frozen"]:u["columns.unfrozen"]]})}),i(f,{type:"text",onClick:()=>{s(o=>{o.data=n,o.visible=!0,o.type=2})},children:[t(ue,{}),u["columns.action.changePassword"]]}),t(D,{reqDel:G,params:{uuid:n.uuid},reload:()=>a.current.reload(),children:i(f,{type:"text",children:[t(Q,{}),u["columns.action.delete"]]})})]})}}],request:H})]})}export{l as ModalType,Fe as default};
