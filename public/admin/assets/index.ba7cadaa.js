import{au as f,r as s,j as a,bd as g,a as p,ae as F,av as x,M as y,B as v,bc as B}from"./index.bbf9ba40.js";import{C as D}from"./index.91f458ea.js";import{T as E,P as I}from"./index.067b7790.js";import{r as w,i as q,c as k,j as A}from"./index.f693cd30.js";import{i as b,C as M,D as O}from"./use-immer.module.f5029fbd.js";import"./index.5c4aacb0.js";import{I as R}from"./index.4d79e662.js";import{I as S}from"./index.93bb3af8.js";import"./index.ab3d9ecf.js";import"./index.cb0f6253.js";import"./index.8a46b0ef.js";import"./index.92107fe3.js";function V(e){const[l]=f.useForm(),[d,C]=s.exports.useState(!1),[o,n]=s.exports.useState(1);s.exports.useEffect(()=>(e.level&&n(e.level+1),()=>{n(1)}),[e.level]),s.exports.useEffect(()=>{e.data?(l.setFieldsValue(e.data),l.setFieldValue("pid",e.data.pid)):e.id&&l.setFieldValue("pid",e.id),e.visible||l.resetFields()},[l,e.data,e.visible]);async function m(){l.validate().then(async u=>{var t;C(!0);let i;e.uuid?i=await w({...u,uuid:e.uuid,pid:u.pid,level:o,sortIndex:u.sortIndex||1}):i=await q({...u,pid:(t=u.pid)!=null?t:0,level:o,sortIndex:u.sortIndex||1}),i.code===0&&(y.success(i.message),e.reload(),e.close(),l.resetFields())}).catch(u=>{console.log(u)}).finally(()=>{C(!1)})}return a(g,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:m,onCancel:e.close,confirmLoading:d,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:p(f,{form:l,children:[a(f.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:a(F,{type:"text"})}),a(f.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(u,i){e.data&&u===e.data.id&&i("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),i()}}],children:a(E,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(u,i)=>{Object.keys(i).length===0?(n(1),l.setFieldValue("pid",0)):(n(i.trigger.dataRef.level+1),l.setFieldValue("pid",i.trigger.dataRef.id))},allowClear:!0})}),a(f.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",labelCol:{span:6},wrapperCol:{span:18},children:a(F,{type:"text"})}),a(f.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},initialValue:1,rules:[{validator(u,i){u&&u<1?i("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):i()}}],children:a(x,{})})]})})}function Q(){const e=s.exports.useRef(),[l,d]=b({visible:!1,close:()=>{d(i=>{i.visible=!1})}}),[C,o]=s.exports.useState(),[n]=b({reqDel:A});function m(i){const t=new Map,r=[];return i.forEach(c=>t.set(c.id,{...c,children:[]})),i.forEach(c=>{const h=t.get(c.pid);h?h.children.push(t.get(c.id)):r.push(t.get(c.id))}),r}s.exports.useEffect(()=>{d(i=>{i.pidOptions=e.current.getList()})},[e.current]);const u=[{title:"\u540D\u5B57",dataIndex:"name"},{title:"\u64CD\u4F5C",key:"option",render:(i,t)=>p(M,{children:[p(v,{type:"text",onClick:()=>{d(r=>{r.id=t.id,r.level=t.level,r.uuid=void 0,r.visible=!0}),o(void 0)},children:[a(R,{}),"\u521B\u5EFA"]}),p(v,{type:"text",onClick:()=>{d(r=>{r.id=void 0,r.level=void 0,r.uuid=t.uuid,r.visible=!0}),o({name:t.name,code:t.code,sortIndex:t.sort_index,pid:t.pid,id:t.id})},children:[a(B,{}),"\u7F16\u8F91"]}),a(O,{reqDel:n.reqDel,params:{uuid:t.uuid},reload:()=>e.current.reload(),children:p(v,{type:"text",children:[a(S,{}),"\u5220\u9664"]})})]})}];return p(D,{children:[a(V,{data:C,visible:l.visible,id:l.id,level:l.level,uuid:l.uuid,close:l.close,reload:()=>e.current.reload(),pidOptions:l.pidOptions}),a(I,{ref:e,request:k,dataRender:m,columns:u,pagination:!1,pageSize:!1,actionBarRender:[a(v,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[a(v,{type:"primary",onClick:()=>{d(i=>{i.id=void 0,i.visible=!0,i.uuid=void 0,i.level=void 0}),o(void 0)},children:"\u521B\u5EFA\u5206\u7C7B"},"create")]})]})}export{Q as default};