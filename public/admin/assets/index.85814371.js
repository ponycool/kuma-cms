import{h as p,ae as s,au as r,r as o,j as e,H as F,B as m,a as f,b6 as g,b7 as O,F as k}from"./index.ca2f5ec4.js";import{C as b}from"./index.4fe87d77.js";import{P as A}from"./index.0e061d39.js";import{i as P,C as S,D as w}from"./use-immer.module.2115300c.js";import{S as T}from"./index.09f51cdf.js";import"./index.7d463398.js";import{c as j}from"./convertNullToUndefined.a19d8223.js";import{I as q}from"./index.6cb2b1c4.js";import{I as L}from"./index.e6fa67a7.js";import"./index.f01a761c.js";import"./index.fd06a02b.js";import"./index.5da0ed63.js";function V(t){return p.post("/api/message/query",t)}function H(t){return p.post("/api/message/detail",t)}function R(t){return p.post("/api/message/delete",t)}function z(){return p.post("/api/message/status")}const M=s.TextArea;function U(t){const[n]=r.useForm();return o.exports.useEffect(()=>{if(t.data){const c=j(t.data);n.setFieldsValue({...c})}},[t.data]),o.exports.useEffect(()=>{t.visible===!1&&n.resetFields()},[n,t.visible]),e(b,{title:"\u6D88\u606F\u8BE6\u60C5",extra:e(F,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(m,{type:"default",onClick:()=>t.close(),children:"\u5173\u95ED"},"cancel")],children:f(r,{form:n,labelCol:{span:2},wrapperCol:{span:8},children:[e(r.Item,{label:"\u5BA2\u6237\u59D3\u540D",field:"name",children:e(s,{readOnly:!0})}),e(r.Item,{label:"\u624B\u673A",field:"phone",children:e(s,{readOnly:!0})}),e(r.Item,{label:"\u90AE\u7BB1",field:"email",children:e(s,{readOnly:!0})}),e(r.Item,{label:"\u6765\u6E90",field:"source",children:e(s,{readOnly:!0})}),e(r.Item,{label:"\u72B6\u6001",field:"status",children:e(T,{options:t.status,disabled:!0})}),e(r.Item,{label:"\u516C\u53F8\u540D\u79F0",field:"company",children:e(s,{readOnly:!0})}),e(r.Item,{label:"\u4E3B\u9898",field:"subject",children:e(s,{readOnly:!0})}),e(r.Item,{label:"\u5185\u5BB9",field:"content",wrapperCol:{span:22},children:e(M,{autoSize:!0,style:{minHeight:64},readOnly:!0})})]})})}function te(){const t=g(),n=O(),c=new URLSearchParams(n.search),B=c.get("name"),C=c.get("phone"),x=c.get("email"),d=o.exports.useRef(),[u,y]=P({visible:!1,close:function(){y(i=>{i.visible=!1})}}),[h,I]=o.exports.useState([]);async function D(i){try{const a=await H({uuid:i});a.code===0&&y(l=>{l.data=a.data,l.visible=!0})}catch{}}o.exports.useEffect(()=>{z().then(i=>{const a=[];for(const l in i.data)i.data[l]!==""&&a.push({label:i.data[l],value:l});I(a)})},[]),o.exports.useEffect(()=>{u.visible||d.current.reload()},[u.visible]);const v=[{title:"\u5BA2\u6237\u59D3\u540D",dataIndex:"name",ellipsis:!0,search:!0,initialValue:B,fieldProps:{readOnly:!0}},{title:"\u624B\u673A",dataIndex:"phone",search:!0,initialValue:C,fieldProps:{readOnly:!0}},{title:"\u90AE\u7BB1",dataIndex:"email",search:!0,initialValue:x,fieldProps:{readOnly:!0}},{title:"\u516C\u53F8\u540D\u79F0",dataIndex:"company"},{title:"\u6765\u6E90",dataIndex:"source"},{title:"\u72B6\u6001",dataIndex:"status",render(i,a){var l;return(l=h.find(E=>E.value===a.status))==null?void 0:l.label},search:!0,valueType:"select",fieldProps:{options:h}},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u64CD\u4F5C",width:280,render:(i,a)=>f(S,{children:[f(m,{type:"text",onClick:()=>D(a.uuid),children:[e(q,{}),"\u8BE6\u60C5"]}),e(w,{reqDel:R,params:{uuid:a.uuid},reload:()=>d.current.reload(),children:f(m,{type:"text",children:[e(L,{}),"\u5220\u9664"]})})]})}];return f(k,{children:[u.visible&&e(U,{visible:u.visible,data:u.data,close:()=>u.close(),reload:()=>d.current.reload(),status:h}),e(b,{style:{display:u.visible?"none":void 0},children:e(A,{ref:d,request:V,columns:v,immediateSearch:!0,actionBarRender:[e(m,{type:"primary",onClick:()=>t.goBack(),children:"\u8FD4\u56DE\u7EBF\u7D22\u7BA1\u7406"},"back"),e(m,{type:"primary",onClick:()=>d.current.reload(),children:"\u5237\u65B0"},"refresh")]})})]})}export{te as default};
