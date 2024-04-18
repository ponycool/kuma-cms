import{e as I,r as c,I as O,j as r,_ as B,at as v,bb as w,a as b,au as y,ba as E,ax as j,M as S,B as C,bc as _}from"./index.6cbd9b52.js";import{C as k}from"./index.103a0465.js";import{T as A,P}from"./index.1777655f.js";import{r as q,i as M,c as N,j as R}from"./index.b169a4d9.js";import{i as x,C as V,D as L}from"./use-immer.module.40f1c4eb.js";import"./index.aa1da1a9.js";import{I as T}from"./index.1df3abab.js";import"./index.c1477614.js";import"./index.762e09e3.js";import"./index.12ecc854.js";function D(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),l.push.apply(l,n)}return l}function F(e){for(var t=1;t<arguments.length;t++){var l=arguments[t]!=null?arguments[t]:{};t%2?D(Object(l),!0).forEach(function(n){B(e,n,l[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):D(Object(l)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))})}return e}function G(e,t){var l=c.exports.useContext(O),n=l.prefixCls,o=n===void 0?"arco":n,d=e.spin,p=e.className,a=F(F({"aria-hidden":!0,focusable:!1,ref:t},e),{},{className:"".concat(p?p+" ":"").concat(o,"-icon ").concat(o,"-icon-subscribe-add")});return d&&(a.className="".concat(a.className," ").concat(o,"-icon-loading")),delete a.spin,delete a.isIcon,r("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...a,children:r("path",{d:"M24.53 6.007H9.97c-.535 0-.97.449-.97 1.003V41.8c0 .148.152.245.28.179l15.25-7.881 14.248 7.88c.129.067.28-.03.28-.179V22.06M27.413 11.023h6.794m0 0H41m-6.794 0V4m0 7.023v7.023"})})}var h=I.forwardRef(G);h.defaultProps={isIcon:!0};h.displayName="IconSubscribeAdd";var H=h;const{Row:$,Col:m}=j;function z(e){const[t]=v.useForm(),[l,n]=c.exports.useState(!1),[o,d]=c.exports.useState(1);c.exports.useEffect(()=>(e.level&&d(e.level+1),()=>{d(1)}),[e.level]),c.exports.useEffect(()=>{e.data?(t.setFieldsValue(e.data),t.setFieldValue("pid",e.data.pid)):e.id&&t.setFieldValue("pid",e.id),e.visible||t.resetFields()},[t,e.data,e.visible]);async function p(){t.validate().then(async a=>{var s;n(!0);let i;e.uuid?i=await q({...a,uuid:e.uuid,sortIndex:a.sortIndex?a.sortIndex:void 0,pid:a.pid,level:o}):i=await M({...a,pid:(s=a.pid)!=null?s:0,level:o}),i.code===0&&(S.success(i.message),e.reload(),e.close(),t.resetFields())}).catch(a=>{console.log(a)}).finally(()=>{n(!1)})}return r(w,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:p,onCancel:e.close,confirmLoading:l,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:r(v,{form:t,children:b($,{children:[r(m,{span:24,children:r(v.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:r(y,{type:"text"})})}),r(m,{span:24,children:r(v.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(a,i){e.data&&a===e.data.id&&i("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),i()}}],children:r(A,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(a,i)=>{Object.keys(i).length===0?(d(1),t.setFieldValue("pid",0)):(d(i.trigger.dataRef.level+1),t.setFieldValue("pid",i.trigger.dataRef.id))},allowClear:!0})})}),r(m,{span:24,children:r(v.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:r(y,{type:"text"})})}),r(m,{span:24,children:r(v.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},children:r(E,{})})})]})})})}function ie(){const e=c.exports.useRef(),[t,l]=x({visible:!1,close:()=>{l(i=>{i.visible=!1})}}),[n,o]=c.exports.useState(),[d]=x({reqDel:R});function p(i){const s=new Map,u=[];return i.forEach(f=>s.set(f.id,{...f,children:[]})),i.forEach(f=>{const g=s.get(f.pid);g?g.children.push(s.get(f.id)):u.push(s.get(f.id))}),u}c.exports.useEffect(()=>{l(i=>{i.pidOptions=e.current.getList()})},[e.current]);const a=[{title:"\u540D\u5B57",dataIndex:"name"},{title:"\u64CD\u4F5C",key:"option",render:(i,s)=>b(V,{children:[b(C,{type:"text",onClick:()=>{l(u=>{u.id=s.id,u.level=s.level,u.uuid=void 0,u.visible=!0}),o(void 0)},children:[r(H,{}),"\u521B\u5EFA"]}),b(C,{type:"text",onClick:()=>{l(u=>{u.id=void 0,u.level=void 0,u.uuid=s.uuid,u.visible=!0}),o({name:s.name,code:s.code,sortIndex:s.sort_index,pid:s.pid,id:s.id})},children:[r(_,{}),"\u7F16\u8F91"]}),r(L,{reqDel:d.reqDel,params:{uuid:s.uuid},reload:()=>e.current.reload(),children:b(C,{type:"text",children:[r(T,{}),"\u5220\u9664"]})})]})}];return b(k,{children:[r(z,{data:n,visible:t.visible,id:t.id,level:t.level,uuid:t.uuid,close:t.close,reload:()=>e.current.reload(),pidOptions:t.pidOptions}),r(P,{ref:e,request:N,dataRender:p,columns:a,pagination:!1,pageSize:!1,actionBarRender:[r(C,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[r(C,{type:"primary",onClick:()=>{l(i=>{i.id=void 0,i.visible=!0,i.uuid=void 0,i.level=void 0}),o(void 0)},children:"\u521B\u5EFA\u5206\u7C7B"},"create")]})]})}export{ie as default};