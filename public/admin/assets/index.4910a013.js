import{at as p,r as s,j as l,bb as x,a as f,au as g,ba as y,ax as B,M as D,B as v,bc as I}from"./index.dd8c1d81.js";import{C as E}from"./index.529d114d.js";import{T as w,P as q}from"./index.a74cc0d2.js";import{r as k,i as A,c as R,j as M}from"./index.f49d4c5f.js";import{i as F,C as O,D as S}from"./use-immer.module.098db1e5.js";import"./index.d608e5f0.js";import{I as _}from"./index.b562cf03.js";import{I as j}from"./index.a9a45444.js";import"./index.92fac09f.js";import"./index.4d4663e9.js";import"./index.9cb78c9e.js";import"./index.ed93faaa.js";const{Row:L,Col:h}=B;function V(e){const[t]=p.useForm(),[d,C]=s.exports.useState(!1),[n,o]=s.exports.useState(1);s.exports.useEffect(()=>(e.level&&o(e.level+1),()=>{o(1)}),[e.level]),s.exports.useEffect(()=>{e.data?(t.setFieldsValue(e.data),t.setFieldValue("pid",e.data.pid)):e.id&&t.setFieldValue("pid",e.id),e.visible||t.resetFields()},[t,e.data,e.visible]);async function m(){t.validate().then(async r=>{var a;C(!0);let i;e.uuid?i=await k({...r,uuid:e.uuid,sortIndex:r.sortIndex?r.sortIndex:void 0,pid:r.pid,level:n}):i=await A({...r,pid:(a=r.pid)!=null?a:0,level:n}),i.code===0&&(D.success(i.message),e.reload(),e.close(),t.resetFields())}).catch(r=>{console.log(r)}).finally(()=>{C(!1)})}return l(x,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:m,onCancel:e.close,confirmLoading:d,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:l(p,{form:t,children:f(L,{children:[l(h,{span:24,children:l(p.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:l(g,{type:"text"})})}),l(h,{span:24,children:l(p.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(r,i){e.data&&r===e.data.id&&i("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),i()}}],children:l(w,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(r,i)=>{Object.keys(i).length===0?(o(1),t.setFieldValue("pid",0)):(o(i.trigger.dataRef.level+1),t.setFieldValue("pid",i.trigger.dataRef.id))},allowClear:!0})})}),l(h,{span:24,children:l(p.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:l(g,{type:"text"})})}),l(h,{span:24,children:l(p.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},children:l(y,{})})})]})})})}function Y(){const e=s.exports.useRef(),[t,d]=F({visible:!1,close:()=>{d(i=>{i.visible=!1})}}),[C,n]=s.exports.useState(),[o]=F({reqDel:M});function m(i){const a=new Map,u=[];return i.forEach(c=>a.set(c.id,{...c,children:[]})),i.forEach(c=>{const b=a.get(c.pid);b?b.children.push(a.get(c.id)):u.push(a.get(c.id))}),u}s.exports.useEffect(()=>{d(i=>{i.pidOptions=e.current.getList()})},[e.current]);const r=[{title:"\u540D\u5B57",dataIndex:"name"},{title:"\u64CD\u4F5C",key:"option",render:(i,a)=>f(O,{children:[f(v,{type:"text",onClick:()=>{d(u=>{u.id=a.id,u.level=a.level,u.uuid=void 0,u.visible=!0}),n(void 0)},children:[l(_,{}),"\u521B\u5EFA"]}),f(v,{type:"text",onClick:()=>{d(u=>{u.id=void 0,u.level=void 0,u.uuid=a.uuid,u.visible=!0}),n({name:a.name,code:a.code,sortIndex:a.sort_index,pid:a.pid,id:a.id})},children:[l(I,{}),"\u7F16\u8F91"]}),l(S,{reqDel:o.reqDel,params:{uuid:a.uuid},reload:()=>e.current.reload(),children:f(v,{type:"text",children:[l(j,{}),"\u5220\u9664"]})})]})}];return f(E,{children:[l(V,{data:C,visible:t.visible,id:t.id,level:t.level,uuid:t.uuid,close:t.close,reload:()=>e.current.reload(),pidOptions:t.pidOptions}),l(q,{ref:e,request:R,dataRender:m,columns:r,pagination:!1,pageSize:!1,actionBarRender:[l(v,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[l(v,{type:"primary",onClick:()=>{d(i=>{i.id=void 0,i.visible=!0,i.uuid=void 0,i.level=void 0}),n(void 0)},children:"\u521B\u5EFA\u5206\u7C7B"},"create")]})]})}export{Y as default};
