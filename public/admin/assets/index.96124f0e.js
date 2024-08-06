import{aB as m,r as c,j as i,bd as D,a as v,aj as x,aC as I,M as B,u as y,i as E,B as h,bc as w}from"./index.7437da46.js";import{C as k}from"./index.89f9c1a7.js";import{T as q,P as j}from"./index.d73ced9a.js";import{r as L,j as M,i as O,c as R,k as S}from"./index.7cf742f5.js";import{i as F,C as V,D as _}from"./use-immer.module.33746274.js";import{I as A}from"./index.e035a391.js";import{I as T}from"./index.66b6c22e.js";import"./index.39bcb729.js";import"./index.5d34a1a1.js";import"./index.1fef98cf.js";function G(e){const[t]=m.useForm(),[o,d]=c.exports.useState(!1),[n,f]=c.exports.useState(1);c.exports.useEffect(()=>(e.level&&f(e.level+1),()=>{f(1)}),[e.level]),c.exports.useEffect(()=>{e.data?(t.setFieldsValue(e.data),t.setFieldValue("pid",e.data.pid)):e.id&&t.setFieldValue("pid",e.id),e.visible||t.resetFields()},[t,e.data,e.visible]);async function C(){t.validate().then(async l=>{var b;d(!0);let a;e.uuid?a=await L({...l,uuid:e.uuid,pid:l.pid,level:n,sortIndex:l.sortIndex||1}):a=await M({...l,pid:(b=l.pid)!=null?b:0,level:n,sortIndex:l.sortIndex||1}),a.code===0&&(B.success(a.message),e.reload(),e.close(),t.resetFields())}).catch(l=>{console.log(l)}).finally(()=>{d(!1)})}return i(D,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:C,onCancel:e.close,confirmLoading:o,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:v(m,{form:t,children:[i(m.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:i(x,{type:"text"})}),i(m.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(l,a){e.data&&l===e.data.id&&a("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),a()}}],children:i(q,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(l,a)=>{Object.keys(a).length===0?(f(1),t.setFieldValue("pid",0)):(f(a.trigger.dataRef.level+1),t.setFieldValue("pid",a.trigger.dataRef.id))},allowClear:!0})}),i(m.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",labelCol:{span:6},wrapperCol:{span:18},children:i(x,{type:"text"})}),i(m.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},initialValue:1,rules:[{validator(l,a){l&&l<1?a("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):a()}}],children:i(I,{})})]})})}function X(){const e=y(E),t=y(O),o=c.exports.useRef(),[d,n]=F({visible:!1,close:()=>{n(s=>{s.visible=!1})}}),[f,C]=c.exports.useState(),[l]=F({reqDel:S});function a(s){const r=new Map,u=[];return s.forEach(p=>r.set(p.id,{...p,children:[]})),s.forEach(p=>{const g=r.get(p.pid);g?g.children.push(r.get(p.id)):u.push(r.get(p.id))}),u}c.exports.useEffect(()=>{n(s=>{s.pidOptions=o.current.getList()})},[o.current]);const b=[{title:t["columns.name"],dataIndex:"name"},{title:t["columns.action"],key:"option",render:(s,r)=>v(V,{children:[v(h,{type:"text",onClick:()=>{n(u=>{u.id=r.id,u.level=r.level,u.uuid=void 0,u.visible=!0}),C(void 0)},children:[i(A,{}),t["columns.action.create"]]}),v(h,{type:"text",onClick:()=>{n(u=>{u.id=void 0,u.level=void 0,u.uuid=r.uuid,u.visible=!0}),C({name:r.name,code:r.code,sortIndex:r.sort_index,pid:r.pid,id:r.id})},children:[i(w,{}),t["columns.action.edit"]]}),i(_,{reqDel:l.reqDel,params:{uuid:r.uuid},reload:()=>o.current.reload(),children:v(h,{type:"text",children:[i(T,{}),t["columns.action.delete"]]})})]})}];return v(k,{children:[i(G,{data:f,visible:d.visible,id:d.id,level:d.level,uuid:d.uuid,close:d.close,reload:()=>o.current.reload(),pidOptions:d.pidOptions}),i(j,{ref:o,request:R,dataRender:a,columns:b,pagination:!1,pageSize:!1,actionBarRender:[i(h,{type:"primary",onClick:()=>o.current.reload(),children:e["table.refresh"]},"refresh")],toolBarRender:[i(h,{type:"primary",onClick:()=>{n(s=>{s.id=void 0,s.visible=!0,s.uuid=void 0,s.level=void 0}),C(void 0)},children:e["table.createCategory"]},"create")]})]})}export{X as default};