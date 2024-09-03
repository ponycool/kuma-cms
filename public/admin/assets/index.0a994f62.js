import{R as O,r as C,g as z,a as i,j as a,_ as A,u as B,bf as j,av as m,bd as S,aj as f,bp as _,bq as R,be as b,bo as L,M as U,i as $,B as p,bc as Z}from"./index.565c0e95.js";import{C as V}from"./index.46b3737f.js";import{C as T,D}from"./DelPopconfirm.a22e41f3.js";import{P as G}from"./index.46e2b2ee.js";import{b as K,u as W,a as H,c as M,d as J,e as Q,f as X}from"./index.5f503ea8.js";import{i as Y}from"./use-immer.module.c0731f0f.js";import{I as ee}from"./index.4690d54e.js";import{I as re}from"./index.718a28f1.js";import"./index.34eba074.js";import"./b-tween.es.064e2a03.js";import"./index.794d76ec.js";import"./index.30dc93de.js";import"./index.7d830d00.js";function k(r,e){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),u.push.apply(u,t)}return u}function x(r){for(var e=1;e<arguments.length;e++){var u=arguments[e]!=null?arguments[e]:{};e%2?k(Object(u),!0).forEach(function(t){A(r,t,u[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):k(Object(u)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(u,t))})}return r}function ae(r,e){var u=C.exports.useContext(z),t=u.prefixCls,n=t===void 0?"arco":t,c=r.spin,s=r.className,o=x(x({"aria-hidden":!0,focusable:!1,ref:e},r),{},{className:"".concat(s?s+" ":"").concat(n,"-icon ").concat(n,"-icon-idcard")});return c&&(o.className="".concat(o.className," ").concat(n,"-icon-loading")),delete o.spin,delete o.isIcon,i("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:[a("path",{d:"M11 17h9m-9 7h9m-9 7h5m-8 9h32a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2Z"}),a("path",{d:"M36 33a7 7 0 1 0-14 0"}),a("circle",{cx:"29",cy:"20",r:"4"})]})}var P=O.forwardRef(ae);P.defaultProps={isIcon:!0};P.displayName="IconIdcard";var te=P;function E(r,e){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),u.push.apply(u,t)}return u}function v(r){for(var e=1;e<arguments.length;e++){var u=arguments[e]!=null?arguments[e]:{};e%2?E(Object(u),!0).forEach(function(t){A(r,t,u[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):E(Object(u)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(u,t))})}return r}function ue(r,e){var u=C.exports.useContext(z),t=u.prefixCls,n=t===void 0?"arco":t,c=r.spin,s=r.className,o=v(v({"aria-hidden":!0,focusable:!1,ref:e},r),{},{className:"".concat(s?s+" ":"").concat(n,"-icon ").concat(n,"-icon-tool")});return c&&(o.className="".concat(o.className," ").concat(n,"-icon-loading")),delete o.spin,delete o.isIcon,a("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...o,children:a("path",{d:"M19.994 11.035c3.66-3.659 9.094-4.46 13.531-2.405a.1.1 0 0 1 .028.16l-6.488 6.488a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.488-6.488a.1.1 0 0 1 .16.028c2.056 4.437 1.254 9.872-2.405 13.53-3.695 3.696-9.2 4.477-13.66 2.347L12.923 40.733a1 1 0 0 1-1.414 0L7.266 36.49a1 1 0 0 1 0-1.414l10.382-10.382c-2.13-4.46-1.349-9.965 2.346-13.66Z"})})}var F=O.forwardRef(ue);F.defaultProps={isIcon:!0};F.displayName="IconTool";var oe=F;const N={"en-US":{"columns.keyword":"keyword","columns.account":"Account","columns.nickname":"nickName","columns.email":"email","columns.accountStatus":"Account Status","columns.frozen":"Frozen","columns.normal":"Normal","columns.unfrozen":"UnFrozen","columns.abnormalStatus":"Abnormal Status","columns.lockedAt":"LockedAt","columns.createdAt":"CreateAt","columns.action":"Action","columns.action.edit":"Edit","confirm.freeze":"Confirm Freeze","confirm.unfreeze":"Confirm Unfreeze","Do you confirm to freeze the account?":"Do you confirm to freeze the account?","Do you confirm to unfreeze the account?":"Do you confirm to unfreeze the account?","columns.action.changePassword":"Change Password","columns.action.delete":"Delete","userCreate.button.save":"Save","userCreate.button.create":"Create","userCreate.form.accountName.label":"Account Name","userCreate.form.accountName.required":"Please enter the account name","userCreate.form.accountName.placeholder":"Please enter the account name","userCreate.form.nickname.label":"Nickname","userCreate.form.nickname.required":"Please enter the nickname","userCreate.form.nickname.placeholder":"Please enter the nickname","userCreate.form.email.label":"Email","userCreate.form.email.required":"Please enter the email","userCreate.form.email.error":"Email format is incorrect","userCreate.form.email.placeholder":"Please enter the email","userCreate.form.oldPassword.label":"Old Password","userCreate.form.oldPassword.required":"Please enter the old password","userCreate.form.oldPassword.placeholder":"Please enter the old password","userCreate.form.password.label":"Password","userCreate.form.password.required":"Please enter the password","userCreate.form.password.error":"Password must contain three of uppercase, lowercase, numbers, and special characters, and the length must be 6-18","userCreate.form.password.placeholder":"Please enter the password","userCreate.form.repeatPwd.label":"Confirm Password","userCreate.form.repeatPwd.required":"Please enter the confirm password","userCreate.form.repeatPwd.error":"The two passwords are inconsistent","userCreate.form.repeatPwd.placeholder":"Please enter the confirm password"},"zh-CN":{"columns.keyword":"\u5173\u952E\u8BCD","columns.account":"\u8D26\u6237\u540D\u79F0","columns.nickname":"\u7528\u6237\u6635\u79F0","columns.email":"\u90AE\u7BB1","columns.accountStatus":"\u8D26\u6237\u72B6\u6001","columns.frozen":"\u51BB\u7ED3","columns.normal":"\u6B63\u5E38","columns.unfrozen":"\u89E3\u51BB","columns.abnormalStatus":"\u72B6\u6001\u5F02\u5E38","columns.lockedAt":"\u51BB\u7ED3\u65F6\u95F4","columns.createdAt":"\u521B\u5EFA\u65F6\u95F4","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","confirm.freeze":"\u51BB\u7ED3\u786E\u8BA4","confirm.unfreeze":"\u89E3\u51BB\u786E\u8BA4","Do you confirm to freeze the account?":"\u786E\u8BA4\u51BB\u8BE5\u7ED3\u8D26\u6237\u5417\uFF1F","Do you confirm to unfreeze the account?":"\u786E\u8BA4\u89E3\u9664\u8BE5\u7ED3\u8D26\u6237\u5417\uFF1F","columns.action.changePassword":"\u4FEE\u6539\u5BC6\u7801","columns.action.delete":"\u5220\u9664","userCreate.button.save":"\u4FDD\u5B58","userCreate.button.create":"\u521B\u5EFA","userCreate.form.accountName.label":"\u8D26\u6237\u540D\u79F0","userCreate.form.accountName.required":"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0","userCreate.form.accountName.placeholder":"\u8BF7\u8F93\u5165\u8D26\u53F7\u540D\u79F0","userCreate.form.nickname.label":"\u7528\u6237\u6635\u79F0","userCreate.form.nickname.required":"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0","userCreate.form.nickname.placeholder":"\u8BF7\u8F93\u5165\u7528\u6237\u6635\u79F0","userCreate.form.email.label":"\u90AE\u7BB1","userCreate.form.email.required":"\u8BF7\u8F93\u5165\u90AE\u7BB1","userCreate.form.email.error":"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E","userCreate.form.email.placeholder":"\u8BF7\u8F93\u5165\u90AE\u7BB1","userCreate.form.oldPassword.label":"\u65E7\u5BC6\u7801","userCreate.form.oldPassword.required":"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801","userCreate.form.oldPassword.placeholder":"\u8BF7\u8F93\u5165\u65E7\u5BC6\u7801","userCreate.form.password.label":"\u5BC6\u7801","userCreate.form.password.required":"\u8BF7\u8F93\u5165\u5BC6\u7801","userCreate.form.password.error":"\u5BC6\u7801\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u5B57\u7B26\u4E2D\u7684\u4E09\u79CD\uFF0C\u957F\u5EA66-18\u4F4D","userCreate.form.password.placeholder":"\u8BF7\u8F93\u5165\u5BC6\u7801","userCreate.form.repeatPwd.label":"\u786E\u8BA4\u5BC6\u7801","userCreate.form.repeatPwd.required":"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801","userCreate.form.repeatPwd.error":"\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4","userCreate.form.repeatPwd.placeholder":"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"}};function se(r){const e=B(N),{lang:u}=C.exports.useContext(j),[t]=m.useForm(),[n,c]=C.exports.useState(!1);async function s(){t.validate().then(async o=>{c(!0);const{accountName:d,nickname:h,email:y,password:g,oldPassword:q}=o;let w;r.type===l.register?w=await K({accountName:d,nickname:h,email:y,password:g}):r.type===l.edit?w=await W({uuid:r.data.uuid,accountName:d,nickname:h,email:y}):r.type===l.changePassword&&(w=await H({uuid:r.data.uuid,oldPassword:q,password:g})),w.code===0&&(U.success(w.message),r.reload(),r.close())}).catch(o=>{console.log(o)}).finally(()=>{c(!1)})}return C.exports.useEffect(()=>{r.visible&&r.data?(t.setFieldsValue(r.data),t.setFieldValue("accountName",r.data.account_name)):t.clearFields()},[r.visible]),a(S,{width:u==="zh-CN"?400:600,visible:r.visible,onOk:s,onCancel:()=>r.close(),confirmLoading:n,okText:r.data?e["userCreate.button.save"]:e["userCreate.button.create"],children:i(m,{labelCol:{span:6},wrapperCol:{span:18},form:t,children:[r.type!==l.changePassword&&a(m.Item,{label:e["userCreate.form.accountName.label"],field:"accountName",rules:[{required:!0,message:e["userCreate.form.accountName.required"]}],children:a(f,{prefix:a(_,{}),placeholder:e["userCreate.form.accountName.placeholder"]})}),r.type!==l.changePassword&&a(m.Item,{label:e["userCreate.form.nickname.label"],field:"nickname",rules:[{required:!0,message:e["userCreate.form.nickname.required"]}],children:a(f,{prefix:a(te,{}),placeholder:e["userCreate.form.nickname.placeholder"]})}),r.type!==l.changePassword&&a(m.Item,{label:e["userCreate.form.email.label"],field:"email",rules:[{required:!0,message:e["userCreate.form.email.required"]},{validator(o,d){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)||d(e["userCreate.form.email.error"])}}],children:a(f,{prefix:a(R,{}),placeholder:e["userCreate.form.email.placeholder"]})}),r.type===l.changePassword&&a(m.Item,{label:e["userCreate.form.oldPassword.label"],field:"oldPassword",rules:[{required:!0,message:e["userCreate.form.oldPassword.required"]}],children:a(f.Password,{prefix:a(b,{}),placeholder:e["userCreate.form.oldPassword.placeholder"]})}),r.type!==l.edit&&a(m.Item,{label:e["userCreate.form.password.label"],field:"password",rules:[{required:!0,message:e["userCreate.form.password.required"]},{validator(o,d){L(o)||d(e["userCreate.form.password.error"])}}],children:a(f.Password,{prefix:a(b,{}),placeholder:e["userCreate.form.password.placeholder"]})}),r.type!==l.edit&&a(m.Item,{label:e["userCreate.form.repeatPwd.label"],field:"repeat_pwd",rules:[{required:!0,message:e["userCreate.form.repeatPwd.required"]},{validator(o,d){const h=t.getFieldValue("password");o!==h&&d(e["userCreate.form.repeatPwd.error"])}}],children:a(f.Password,{prefix:a(b,{}),placeholder:e["userCreate.form.repeatPwd.placeholder"]})})]})})}var l=(r=>(r[r.register=0]="register",r[r.edit=1]="edit",r[r.changePassword=2]="changePassword",r))(l||{});const I=(r,e)=>i("span",{style:{display:"flex",alignItems:"center"},children:[a("i",{style:{display:"block",width:"8px",height:"8px",background:e===1?"green":"red",borderRadius:"50%",marginRight:"8px"}}),r]});function Pe(){const r=B($),e=B(N),u=C.exports.useRef(),[t,n]=Y({visible:!1,close:()=>{n(c=>{c.visible=!1})},reload:()=>u.current.reload(),type:0});return i(V,{children:[a(se,{...t}),a(G,{ref:u,actionBarRender:[a(p,{type:"primary",onClick:()=>{u.current.reload()},children:r["table.refresh"]},"refresh")],toolBarRender:[a(p,{type:"primary",onClick:()=>{n(c=>{c.data=void 0,c.visible=!0,c.type=0})},children:r["table.createUser"]},"create")],columns:[{title:e["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:"ID",dataIndex:"id"},{title:e["columns.account"],dataIndex:"account_name"},{title:e["columns.nickname"],dataIndex:"nickname"},{title:e["columns.email"],dataIndex:"email"},{title:e["columns.accountStatus"],dataIndex:"locked",render(c,s){switch(s.locked){case 1:return I(e["columns.frozen"],0);case 0:return I(e["columns.normal"],1);default:return e["columns.abnormalStatus"]}}},{title:e["columns.lockedAt"],dataIndex:"locked_at"},{title:e["columns.createdAt"],dataIndex:"created_at"},{title:e["columns.action"],render(c,s){return i(T,{children:[i(p,{type:"text",onClick:()=>{n(o=>{o.data=s,o.visible=!0,o.type=1})},children:[a(Z,{}),e["columns.action.edit"]]}),a(D,{reqDel:s.locked===0?M:J,params:{uuid:s.uuid},reload:()=>u.current.reload(),title:s.locked===0?e["confirm.freeze"]:e["confirm.unfreeze"],content:s.locked===0?e["Do you confirm to freeze the account?"]:e["Do you confirm to unfreeze the account?"],children:i(p,{type:"text",children:[s.locked===0?a(b,{}):a(ee,{}),s.locked===0?e["columns.frozen"]:e["columns.unfrozen"]]})}),i(p,{type:"text",onClick:()=>{n(o=>{o.data=s,o.visible=!0,o.type=2})},children:[a(oe,{}),e["columns.action.changePassword"]]}),a(D,{reqDel:Q,params:{uuid:s.uuid},reload:()=>u.current.reload(),children:i(p,{type:"text",children:[a(re,{}),e["columns.action.delete"]]})})]})}}],request:X})]})}export{l as ModalType,Pe as default};
