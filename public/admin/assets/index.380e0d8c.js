import{h as m,at as p,r as n,j as i,bb as x,a as f,au as y,ba as B,ax as D,M as I,B as v,bc as E}from"./index.13df9d49.js";import{C as w}from"./index.be174a6b.js";import{T as k,P as q}from"./index.8de89ae1.js";import{i as F,C as A,D as R}from"./use-immer.module.6e14819a.js";import"./index.74dda603.js";import{I as M}from"./index.ebaeb127.js";import{I as O}from"./index.b85a5828.js";import"./index.0ee37db5.js";import"./index.2caba425.js";import"./index.71b72aaa.js";import"./index.74945486.js";function S(e){return m.post("/api/product/category/query",e)}function L(e){return m.post("/api/product/category/create",e)}function V(e){return m.post("/api/product/category/update",e)}function j(e){return m.post("/api/product/category/delete",e)}const{Row:T,Col:C}=D;function G(e){const[l]=p.useForm(),[d,h]=n.exports.useState(!1),[o,s]=n.exports.useState(1);n.exports.useEffect(()=>(e.level&&s(e.level+1),()=>{s(1)}),[e.level]),n.exports.useEffect(()=>{e.data?(l.setFieldsValue(e.data),l.setFieldValue("pid",e.data.pid)):e.id&&l.setFieldValue("pid",e.id),e.visible||l.resetFields()},[l,e.data,e.visible]);async function g(){l.validate().then(async u=>{var a;h(!0);let t;e.uuid?t=await V({...u,uuid:e.uuid,sortIndex:u.sortIndex?u.sortIndex:void 0,pid:u.pid,level:o}):t=await L({...u,pid:(a=u.pid)!=null?a:0,level:o}),t.code===0&&(I.success(t.message),e.reload(),e.close(),l.resetFields())}).catch(u=>{console.log(u)}).finally(()=>{h(!1)})}return i(x,{width:400,title:e.uuid?"\u66F4\u65B0\u5206\u7C7B":"\u521B\u5EFA\u5206\u7C7B",visible:e.visible,onOk:g,onCancel:e.close,confirmLoading:d,okText:e.uuid?"\u4FDD\u5B58":"\u521B\u5EFA",children:i(p,{form:l,children:f(T,{children:[i(C,{span:24,children:i(p.Item,{label:"\u5206\u7C7B\u540D\u79F0",field:"name",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:i(y,{type:"text"})})}),i(C,{span:24,children:i(p.Item,{label:"\u7236\u7EA7\u5206\u7C7B",field:"pid",labelCol:{span:6},wrapperCol:{span:18},rules:[{validator(u,t){e.data&&u===e.data.id&&t("\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!"),t()}}],children:i(k,{treeData:e.pidOptions,fieldNames:{key:"id",title:"name"},placeholder:"\u6839\u7EA7",onChange:(u,t)=>{Object.keys(t).length===0?(s(1),l.setFieldValue("pid",0)):(s(t.trigger.dataRef.level+1),l.setFieldValue("pid",t.trigger.dataRef.id))},allowClear:!0})})}),i(C,{span:24,children:i(p.Item,{label:"\u5206\u7C7B\u7F16\u7801",field:"code",rules:[{required:!0,message:!0}],labelCol:{span:6},wrapperCol:{span:18},children:i(y,{type:"text"})})}),i(C,{span:24,children:i(p.Item,{label:"\u6392\u5E8F",field:"sortIndex",labelCol:{span:6},wrapperCol:{span:18},children:i(B,{})})})]})})})}function Y(){const e=n.exports.useRef(),[l,d]=F({visible:!1,close:()=>{d(t=>{t.visible=!1})}}),[h,o]=n.exports.useState(),[s]=F({reqDel:j});function g(t){const a=new Map,r=[];return t.forEach(c=>a.set(c.id,{...c,children:[]})),t.forEach(c=>{const b=a.get(c.pid);b?b.children.push(a.get(c.id)):r.push(a.get(c.id))}),r}n.exports.useEffect(()=>{d(t=>{t.pidOptions=e.current.getList()})},[e.current]);const u=[{title:"\u540D\u5B57",dataIndex:"name"},{title:"\u64CD\u4F5C",key:"option",render:(t,a)=>f(A,{children:[f(v,{type:"text",onClick:()=>{d(r=>{r.id=a.id,r.level=a.level,r.uuid=void 0,r.visible=!0}),o(void 0)},children:[i(M,{}),"\u521B\u5EFA"]}),f(v,{type:"text",onClick:()=>{d(r=>{r.id=void 0,r.level=void 0,r.uuid=a.uuid,r.visible=!0}),o({name:a.name,code:a.code,sortIndex:a.sort_index,pid:a.pid,id:a.id})},children:[i(E,{}),"\u7F16\u8F91"]}),i(R,{reqDel:s.reqDel,params:{uuid:a.uuid},reload:()=>e.current.reload(),children:f(v,{type:"text",children:[i(O,{}),"\u5220\u9664"]})})]})}];return f(w,{children:[i(G,{data:h,visible:l.visible,id:l.id,level:l.level,uuid:l.uuid,close:l.close,reload:()=>e.current.reload(),pidOptions:l.pidOptions}),i(q,{ref:e,request:S,dataRender:g,columns:u,pagination:!1,pageSize:!1,actionBarRender:[i(v,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[i(v,{type:"primary",onClick:()=>{d(t=>{t.id=void 0,t.visible=!0,t.uuid=void 0,t.level=void 0}),o(void 0)},children:"\u521B\u5EFA\u5206\u7C7B"},"create")]})]})}export{Y as default};
