import{at as p,r as s,j as l,bd as x,a as f,au as F,bb as B,ax as y,M as D,B as C,bc as E}from"./index.92a17a4d.js";import{C as I}from"./index.748d02d4.js";import{T as w,P as k}from"./index.87ad968c.js";import{c as A,a as R,b as M,d as O}from"./index.ebe9de81.js";import{i as g,C as S,D as V}from"./use-immer.module.b420d5c1.js";import"./index.92febe72.js";import{I as q}from"./index.03687d42.js";import{I as L}from"./index.ad200381.js";import"./index.4e9d13b6.js";import"./index.53b14182.js";import"./index.ed40665e.js";import"./index.1603004b.js";const{Row:j,Col:h}=y;function T(e){const[t]=p.useForm(),[d,v]=s.exports.useState(!1),[n,o]=s.exports.useState(1);s.exports.useEffect(()=>(e.level&&o(e.level+1),()=>{o(1)}),[e.level]),s.exports.useEffect(()=>{e.data?(t.setFieldsValue(e.data),t.setFieldValue("pid",e.data.pid)):e.id&&t.setFieldValue("pid",e.id),e.visible||t.resetFields()},[t,e.data,e.visible]);async function m(){t.validate().then(async u=>{var a;v(!0);let i;e.uuid?i=await A({...u,uuid:e.uuid,pid:u.pid,level:n,sortIndex:u.sortIndex||1}):i=await R({...u,sortIndex:u.sortIndex||1,pid:(a=u.pid)!=null?a:0,level:n}),i.code===0&&(D.success(i.message),e.reload(),e.close(),t.resetFields())}).catch(u=>{console.log(u)}).finally(()=>{v(!1)})}return l(x,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:m,onCancel:e.close,confirmLoading:d,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:l(p,{form:t,children:f(j,{children:[l(h,{span:24,children:l(p.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:l(F,{type:"text"})})}),l(h,{span:24,children:l(p.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(u,i){e.data&&u===e.data.id&&i("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),i()}}],children:l(w,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(u,i)=>{Object.keys(i).length===0?(o(1),t.setFieldValue("pid",0)):(o(i.trigger.dataRef.level+1),t.setFieldValue("pid",i.trigger.dataRef.id))},allowClear:!0})})}),l(h,{span:24,children:l(p.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",labelCol:{span:6},wrapperCol:{span:18},children:l(F,{type:"text"})})}),l(h,{span:24,children:l(p.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},initialValue:1,rules:[{validator(u,i){u&&u<1?i("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):i()}}],children:l(B,{})})})]})})})}function Y(){const e=s.exports.useRef(),[t,d]=g({visible:!1,close:()=>{d(i=>{i.visible=!1})}}),[v,n]=s.exports.useState(),[o]=g({reqDel:O});function m(i){const a=new Map,r=[];return i.forEach(c=>a.set(c.id,{...c,children:[]})),i.forEach(c=>{const b=a.get(c.pid);b?b.children.push(a.get(c.id)):r.push(a.get(c.id))}),r}s.exports.useEffect(()=>{d(i=>{i.pidOptions=e.current.getList()})},[e.current]);const u=[{title:"\u540D\u5B57",dataIndex:"name"},{title:"\u64CD\u4F5C",key:"option",render:(i,a)=>f(S,{children:[f(C,{type:"text",onClick:()=>{d(r=>{r.id=a.id,r.level=a.level,r.uuid=void 0,r.visible=!0}),n(void 0)},children:[l(q,{}),"\u521B\u5EFA"]}),f(C,{type:"text",onClick:()=>{d(r=>{r.id=void 0,r.level=void 0,r.uuid=a.uuid,r.visible=!0}),n({name:a.name,code:a.code,sortIndex:a.sort_index,pid:a.pid,id:a.id})},children:[l(E,{}),"\u7F16\u8F91"]}),l(V,{reqDel:o.reqDel,params:{uuid:a.uuid},reload:()=>e.current.reload(),children:f(C,{type:"text",children:[l(L,{}),"\u5220\u9664"]})})]})}];return f(I,{children:[l(T,{data:v,visible:t.visible,id:t.id,level:t.level,uuid:t.uuid,close:t.close,reload:()=>e.current.reload(),pidOptions:t.pidOptions}),l(k,{ref:e,request:M,dataRender:m,columns:u,pagination:!1,pageSize:!1,actionBarRender:[l(C,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[l(C,{type:"primary",onClick:()=>{d(i=>{i.id=void 0,i.visible=!0,i.uuid=void 0,i.level=void 0}),n(void 0)},children:"\u521B\u5EFA\u5206\u7C7B"},"create")]})]})}export{Y as default};
