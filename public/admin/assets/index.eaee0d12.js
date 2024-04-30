import{h as f,ae as n,au as r,r as d,j as e,H as v,B as m,a as o,b7 as D,F as g}from"./index.0c2d926d.js";import{C as b}from"./index.c2a2181f.js";import{P as F}from"./index.7b107769.js";import{i as O,C as A,D as P}from"./use-immer.module.403f918b.js";import{S}from"./index.2bb3890c.js";import"./index.14ed39f2.js";import{c as k}from"./convertNullToUndefined.a19d8223.js";import{I as w}from"./index.fcf873c0.js";import{I as T}from"./index.c225f687.js";import"./index.75bf9ba2.js";import"./index.402f1de2.js";import"./index.7db5043f.js";function j(t){return f.post("/api/message/query",t)}function q(t){return f.post("/api/message/detail",t)}function L(t){return f.post("/api/message/delete",t)}function V(){return f.post("/api/message/status")}const R=n.TextArea;function z(t){const[i]=r.useForm();return d.exports.useEffect(()=>{if(t.data){const p=k(t.data);i.setFieldsValue({...p})}},[t.data]),d.exports.useEffect(()=>{t.visible===!1&&i.resetFields()},[i,t.visible]),e(b,{title:"\u6D88\u606F\u8BE6\u60C5",extra:e(v,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(m,{type:"default",onClick:()=>t.close(),children:"\u5173\u95ED"},"cancel")],children:o(r,{form:i,labelCol:{span:2},wrapperCol:{span:8},children:[e(r.Item,{label:"\u540D\u5B57",field:"name",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u624B\u673A",field:"phone",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u90AE\u7BB1",field:"email",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u6765\u6E90",field:"source",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u72B6\u6001",field:"status",children:e(S,{options:t.status,disabled:!0})}),e(r.Item,{label:"\u4F01\u4E1A",field:"company",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u4E3B\u9898",field:"subject",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u5185\u5BB9",field:"content",wrapperCol:{span:22},children:e(R,{autoSize:!0,style:{minHeight:64},readOnly:!0})})]})})}function Z(){const t=D(),i=new URLSearchParams(t.search),p=i.get("name"),x=i.get("phone"),B=i.get("email"),c=d.exports.useRef(),[u,y]=O({visible:!1,close:function(){y(l=>{l.visible=!1})}}),[h,I]=d.exports.useState([]);async function C(l){try{const a=await q({uuid:l});a.code===0&&y(s=>{s.data=a.data,s.visible=!0})}catch{}}d.exports.useEffect(()=>{V().then(l=>{const a=[];for(const s in l.data)l.data[s]!==""&&a.push({label:l.data[s],value:s});I(a)})},[]);const E=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u540D\u5B57",dataIndex:"name",ellipsis:!0,search:!0,initialValue:p,fieldProps:{readOnly:!0}},{title:"\u624B\u673A",dataIndex:"phone",search:!0,initialValue:x,fieldProps:{readOnly:!0}},{title:"\u90AE\u7BB1",dataIndex:"email",search:!0,initialValue:B,fieldProps:{readOnly:!0}},{title:"\u4F01\u4E1A",dataIndex:"company"},{title:"\u6765\u6E90",dataIndex:"source"},{title:"\u72B6\u6001",dataIndex:"status",render(l,a){return h.find(s=>s.value===a.status).label},search:!0,valueType:"select",fieldProps:{options:h}},{title:"\u64CD\u4F5C",width:280,render:(l,a)=>o(A,{children:[o(m,{type:"text",onClick:()=>C(a.uuid),children:[e(w,{}),"\u8BE6\u60C5"]}),e(P,{reqDel:L,params:{uuid:a.uuid},reload:()=>c.current.reload(),children:o(m,{type:"text",children:[e(T,{}),"\u5220\u9664"]})})]})}];return o(g,{children:[u.visible&&e(z,{visible:u.visible,data:u.data,close:()=>u.close(),reload:()=>c.current.reload(),status:h}),e(b,{style:{display:u.visible?"none":void 0},children:e(F,{ref:c,request:j,columns:E,immediateSearch:!0,actionBarRender:[e(m,{type:"primary",onClick:()=>c.current.reload(),children:"\u5237\u65B0"},"refresh")]})})]})}export{Z as default};