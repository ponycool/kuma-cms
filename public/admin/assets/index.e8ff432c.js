import{h as p,aj as n,av as r,r as d,j as e,K as g,B as m,a as f,af as F,b7 as O,b8 as k,F as A}from"./index.cbcfa651.js";import{C as b}from"./index.a4be1060.js";import{P}from"./index.7e2035b9.js";import{C as S,D as w}from"./DelPopconfirm.01b5774a.js";import{c as j}from"./convertNullToUndefined.a19d8223.js";import{i as T}from"./use-immer.module.1ff160c6.js";import{I as q}from"./index.3f9a2b5f.js";import{I as L}from"./index.262a5926.js";import"./index.b9274156.js";import"./index.835063de.js";import"./b-tween.es.064e2a03.js";import"./index.9319c329.js";import"./index.63f985ea.js";import"./index.0bb703c6.js";function V(t){return p.post("/api/message/query",t)}function R(t){return p.post("/api/message/detail",t)}function z(t){return p.post("/api/message/delete",t)}function H(){return p.post("/api/message/status")}const M=n.TextArea;function U(t){const[o]=r.useForm();return d.exports.useEffect(()=>{if(t.data){const u=j(t.data);o.setFieldsValue({...u})}},[t.data]),d.exports.useEffect(()=>{t.visible===!1&&o.resetFields()},[o,t.visible]),e(b,{title:"\u6D88\u606F\u8BE6\u60C5",extra:e(g,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(m,{type:"default",onClick:()=>t.close(),children:"\u5173\u95ED"},"cancel")],children:f(r,{form:o,labelCol:{span:2},wrapperCol:{span:8},children:[e(r.Item,{label:"\u5BA2\u6237\u59D3\u540D",field:"name",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u624B\u673A",field:"phone",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u90AE\u7BB1",field:"email",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u6765\u6E90",field:"source",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u72B6\u6001",field:"status",children:e(F,{options:t.status,disabled:!0})}),e(r.Item,{label:"\u516C\u53F8\u540D\u79F0",field:"company",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u4E3B\u9898",field:"subject",children:e(n,{readOnly:!0})}),e(r.Item,{label:"\u5185\u5BB9",field:"content",wrapperCol:{span:22},children:e(M,{autoSize:!0,style:{minHeight:64},readOnly:!0})})]})})}function re(){const t=O(),o=k(),u=new URLSearchParams(o.search),B=u.get("name")==="null"?void 0:u.get("name"),x=u.get("phone")==="null"?void 0:u.get("phone"),C=u.get("email")==="null"?void 0:u.get("email"),c=d.exports.useRef(),[s,y]=T({visible:!1,close:function(){y(i=>{i.visible=!1})}}),[h,I]=d.exports.useState([]);async function v(i){try{const a=await R({uuid:i});a.code===0&&y(l=>{l.data=a.data,l.visible=!0})}catch{}}d.exports.useEffect(()=>{H().then(i=>{const a=[];for(const l in i.data)i.data[l]!==""&&a.push({label:i.data[l],value:l});I(a)})},[]),d.exports.useEffect(()=>{s.visible||c.current.reload()},[s.visible]);const D=[{title:"ID",dataIndex:"id"},{title:"\u5BA2\u6237\u59D3\u540D",dataIndex:"name",ellipsis:!0,search:!0,initialValue:B,fieldProps:{readOnly:!0}},{title:"\u624B\u673A",dataIndex:"phone",search:!0,initialValue:x,fieldProps:{readOnly:!0}},{title:"\u90AE\u7BB1",dataIndex:"email",search:!0,initialValue:C,fieldProps:{readOnly:!0}},{title:"\u516C\u53F8\u540D\u79F0",dataIndex:"company"},{title:"\u6765\u6E90",dataIndex:"source"},{title:"\u72B6\u6001",dataIndex:"status",render(i,a){var l;return(l=h.find(E=>E.value===a.status))==null?void 0:l.label},search:!0,valueType:"select",fieldProps:{options:h}},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u64CD\u4F5C",width:280,render:(i,a)=>f(S,{children:[f(m,{type:"text",onClick:()=>v(a.uuid),children:[e(q,{}),"\u8BE6\u60C5"]}),e(w,{reqDel:z,params:{uuid:a.uuid},reload:()=>c.current.reload(),children:f(m,{type:"text",children:[e(L,{}),"\u5220\u9664"]})})]})}];return f(A,{children:[s.visible&&e(U,{visible:s.visible,data:s.data,close:()=>s.close(),reload:()=>c.current.reload(),status:h}),e(b,{style:{display:s.visible?"none":void 0},children:e(P,{ref:c,request:V,columns:D,immediateSearch:!0,actionBarRender:[e(m,{type:"primary",onClick:()=>t.goBack(),children:"\u8FD4\u56DE\u7EBF\u7D22\u7BA1\u7406"},"back"),e(m,{type:"primary",onClick:()=>c.current.reload(),children:"\u5237\u65B0"},"refresh")]})})]})}export{re as default};
