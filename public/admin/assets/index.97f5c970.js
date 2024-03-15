import{e as g,r as m,a7 as D,a as o,j as a,a8 as b,h as p,am as l,aA as w,a6 as d,aL as y,aM as O,aN as E,aO as C,ap as j,B as F,aJ as A}from"./index.169c52d4.js";import{C as P}from"./index.fc472272.js";import{i as k,C as N,D as _,I as q}from"./DelPopconfirm.1cc1a772.js";import{P as L}from"./index.3bd23bee.js";function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);r&&(u=u.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,u)}return t}function v(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?x(Object(t),!0).forEach(function(u){b(e,u,t[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach(function(u){Object.defineProperty(e,u,Object.getOwnPropertyDescriptor(t,u))})}return e}function R(e,r){var t=m.exports.useContext(D),u=t.prefixCls,c=u===void 0?"arco":u,s=e.spin,i=e.className,n=v(v({"aria-hidden":!0,focusable:!1,ref:r},e),{},{className:"".concat(i?i+" ":"").concat(c,"-icon ").concat(c,"-icon-idcard")});return s&&(n.className="".concat(n.className," ").concat(c,"-icon-loading")),delete n.spin,delete n.isIcon,o("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...n,children:[a("path",{d:"M11 17h9m-9 7h9m-9 7h5m-8 9h32a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2Z"}),a("path",{d:"M36 33a7 7 0 1 0-14 0"}),a("circle",{cx:"29",cy:"20",r:"4"})]})}var B=g.forwardRef(R);B.defaultProps={isIcon:!0};B.displayName="IconIdcard";var M=B;function S(e){return p.post("/api/user/query",e)}function Z(e){return p.post("/api/user/create",e)}function z(e){return p.post("/api/user/update",e)}function U(e){return p.post("/api/user/delete",e)}function V(e){const[r]=l.useForm(),[t,u]=m.exports.useState(!1);async function c(){r.validate().then(async s=>{u(!0);const{accountName:i,nickname:n,email:h,password:I}=s;let f;e.data?f=await z({uuid:e.data.uuid,accountName:i,nickname:n,email:h}):f=await Z({accountName:i,nickname:n,email:h,password:I}),f.code===0&&(j.success(f.message),e.reload(),e.close())}).catch(s=>{console.log(s)}).finally(()=>{u(!1)})}return m.exports.useEffect(()=>{e.visible&&e.data?r.setFieldsValue(e.data):r.clearFields()},[e.visible]),a(w,{width:400,visible:e.visible,onOk:c,onCancel:()=>e.close(),confirmLoading:t,children:o(l,{layout:"vertical",form:r,children:[a(l.Item,{field:"accountName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7"}],children:a(d,{prefix:a(y,{}),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"})}),a(l.Item,{field:"nickname",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0"}],children:a(d,{prefix:a(M,{}),placeholder:"\u8BF7\u8F93\u5165\u6635\u79F0"})}),a(l.Item,{field:"email",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u90AE\u7BB1"},{validator(s,i){/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)||i("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:a(d,{prefix:a(O,{}),placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1"})}),!e.data&&a(l.Item,{field:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"},{validator(s,i){E(s)||i("\u5BC6\u7801\u81F3\u5C11\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD,\u6570\u5B57,\u7279\u6B8A\u7B26\u53F7\u957F\u5EA6\u4E3A6-18\u4F4D")}}],children:a(d.Password,{prefix:a(C,{}),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})}),!e.data&&a(l.Item,{field:"repeat_pwd",rules:[{required:!0,message:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"},{validator(s,i){const n=r.getFieldValue("password");s!==n&&i("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4")}}],children:a(d.Password,{prefix:a(C,{}),placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"})})]})})}function K(){const e=m.exports.useRef(),[r,t]=k({visible:!1,close:()=>{t(u=>{u.visible=!1})},reload:()=>e.current.reload()});return o(P,{children:[a(V,{...r}),a(L,{ref:e,toolBarRender:[a(F,{type:"primary",onClick:()=>{t(u=>{u.data=void 0,u.visible=!0})},children:"\u521B\u5EFA\u7528\u6237"},"create")],columns:[{title:"\u8D26\u53F7",dataIndex:"account_name"},{title:"\u6635\u79F0",dataIndex:"nickname"},{title:"\u90AE\u7BB1",dataIndex:"email"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at"},{title:"\u64CD\u4F5C",render(u,c){return o(N,{children:[o(F,{type:"text",onClick:()=>{t(s=>{s.data=c,s.visible=!0})},children:[a(A,{}),"\u66F4\u65B0"]}),a(_,{reqDel:U,params:{uuid:c.uuid},reload:()=>e.current.reload(),children:o(F,{type:"text",children:[a(q,{}),"\u5220\u9664"]})})]})}}],request:S})]})}export{K as default};