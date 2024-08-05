import{aB as m,r as c,j as i,bd as I,a as v,aj as y,aC as B,aF as E,M as w,u as F,i as k,B as h,bc as R}from"./index.7437da46.js";import{C as L}from"./index.89f9c1a7.js";import{T as M,P as O}from"./index.d73ced9a.js";import{c as S,a as V,i as j,b as q,d as A}from"./index.deb990c6.js";import{i as D,C as T,D as G}from"./use-immer.module.33746274.js";import{I as _}from"./index.e035a391.js";import{I as N}from"./index.66b6c22e.js";import"./index.39bcb729.js";import"./index.5d34a1a1.js";import"./index.1fef98cf.js";const{Row:P,Col:g}=E;function z(e){const[l]=m.useForm(),[u,d]=c.exports.useState(!1),[o,f]=c.exports.useState(1);c.exports.useEffect(()=>(e.level&&f(e.level+1),()=>{f(1)}),[e.level]),c.exports.useEffect(()=>{e.data?(l.setFieldsValue(e.data),l.setFieldValue("pid",e.data.pid)):e.id&&l.setFieldValue("pid",e.id),e.visible||l.resetFields()},[l,e.data,e.visible]);async function C(){l.validate().then(async t=>{var b;d(!0);let a;e.uuid?a=await S({...t,uuid:e.uuid,pid:t.pid,level:o,sortIndex:t.sortIndex||1}):a=await V({...t,sortIndex:t.sortIndex||1,pid:(b=t.pid)!=null?b:0,level:o}),a.code===0&&(w.success(a.message),e.reload(),e.close(),l.resetFields())}).catch(t=>{console.log(t)}).finally(()=>{d(!1)})}return i(I,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:C,onCancel:e.close,confirmLoading:u,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:i(m,{form:l,children:v(P,{children:[i(g,{span:24,children:i(m.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:i(y,{type:"text"})})}),i(g,{span:24,children:i(m.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(t,a){e.data&&t===e.data.id&&a("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),a()}}],children:i(M,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(t,a)=>{Object.keys(a).length===0?(f(1),l.setFieldValue("pid",0)):(f(a.trigger.dataRef.level+1),l.setFieldValue("pid",a.trigger.dataRef.id))},allowClear:!0})})}),i(g,{span:24,children:i(m.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",labelCol:{span:6},wrapperCol:{span:18},children:i(y,{type:"text"})})}),i(g,{span:24,children:i(m.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},initialValue:1,rules:[{validator(t,a){t&&t<1?a("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):a()}}],children:i(B,{})})})]})})})}function ee(){const e=F(k),l=F(j),u=c.exports.useRef(),[d,o]=D({visible:!1,close:()=>{o(n=>{n.visible=!1})}}),[f,C]=c.exports.useState(),[t]=D({reqDel:A});function a(n){const s=new Map,r=[];return n.forEach(p=>s.set(p.id,{...p,children:[]})),n.forEach(p=>{const x=s.get(p.pid);x?x.children.push(s.get(p.id)):r.push(s.get(p.id))}),r}c.exports.useEffect(()=>{o(n=>{n.pidOptions=u.current.getList()})},[u.current]);const b=[{title:l["columns.name"],dataIndex:"name"},{title:l["columns.action"],key:"option",render:(n,s)=>v(T,{children:[v(h,{type:"text",onClick:()=>{o(r=>{r.id=s.id,r.level=s.level,r.uuid=void 0,r.visible=!0}),C(void 0)},children:[i(_,{}),l["columns.action.create"]]}),v(h,{type:"text",onClick:()=>{o(r=>{r.id=void 0,r.level=void 0,r.uuid=s.uuid,r.visible=!0}),C({name:s.name,code:s.code,sortIndex:s.sort_index,pid:s.pid,id:s.id})},children:[i(R,{}),l["columns.action.edit"]]}),i(G,{reqDel:t.reqDel,params:{uuid:s.uuid},reload:()=>u.current.reload(),children:v(h,{type:"text",children:[i(N,{}),l["columns.action.delete"]]})})]})}];return v(L,{children:[i(z,{data:f,visible:d.visible,id:d.id,level:d.level,uuid:d.uuid,close:d.close,reload:()=>u.current.reload(),pidOptions:d.pidOptions}),i(O,{ref:u,request:q,dataRender:a,columns:b,pagination:!1,pageSize:!1,actionBarRender:[i(h,{type:"primary",onClick:()=>u.current.reload(),children:e["table.refresh"]},"refresh")],toolBarRender:[i(h,{type:"primary",onClick:()=>{o(n=>{n.id=void 0,n.visible=!0,n.uuid=void 0,n.level=void 0}),C(void 0)},children:e["table.createCategory"]},"create")]})]})}export{ee as default};
