import{h as p,aj as b,av as i,r as m,j as t,K as v,B as l,a as d,am as w,b2 as k,M as D,u as y,i as L,b3 as S,b5 as A,F as T}from"./index.cbcfa651.js";import{C as E}from"./index.a4be1060.js";import{B as C}from"./index.c49cc48d.js";import{P as q}from"./index.7e2035b9.js";import{C as O,D as P}from"./DelPopconfirm.01b5774a.js";import{c as _}from"./convertNullToUndefined.a19d8223.js";import{M as U}from"./index.21ebae8c.js";import{i as j}from"./use-immer.module.1ff160c6.js";import{t as z}from"./index.512d5d89.js";import{I as M}from"./index.c0230108.js";import{I as N}from"./index.262a5926.js";import"./index.b9274156.js";import"./index.835063de.js";import"./b-tween.es.064e2a03.js";import"./index.9319c329.js";import"./index.63f985ea.js";import"./index.0bb703c6.js";function W(e){return p.post("/api/page/query",e)}function R(e){return p.post("/api/page/detail",e)}function H(e){return p.post("/api/page/create",e)}function K(e){return p.post("/api/page/update",e)}function V(e){return p.post("/api/page/delete",e)}function G(e){return p.post("/api/page/enable",{uuid:e})}function $(e){return p.post("/api/page/disable",{uuid:e})}const x=b.TextArea;function J(e){const[n]=i.useForm(),[r,h]=m.exports.useState(!1);async function g(){n.validate().then(async a=>{h(!0);try{const s={...a,status:a.status?"true":"false"};let f;e.data?f=await K({...s,uuid:e.data.uuid||e.uuid}):f=await H(s),f.code===0&&(e.reload(),e.close())}finally{h(!1)}}).catch(a=>{if(a.errors)for(const s in a.errors)D.error(a.errors[s].message)})}return m.exports.useEffect(()=>{var a;if((a=e.data)!=null&&a.page){const s=_(e.data.page);n.setFieldsValue({...s})}},[e.data]),m.exports.useEffect(()=>{e.visible===!1&&n.resetFields()},[n,e.visible]),t(E,{title:e.data?"\u4FEE\u6539\u5355\u9875":"\u521B\u5EFA\u5355\u9875",extra:t(v,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[t(l,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),t(l,{type:"primary",loading:r,onClick:g,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:d(i,{form:n,labelCol:{span:2},wrapperCol:{span:22},children:[t(i.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:t(b,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),t(i.Item,{label:"\u7F16\u7801",field:"code",wrapperCol:{span:2},children:t(b,{maxLength:50,placeholder:"\u8BF7\u8F93\u5165\u7F16\u7801"})}),t(i.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:t(b,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),t(i.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:t(x,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(i.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:t(x,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(i.Item,{label:"\u542F\u7528",field:"status",triggerPropName:"checked",initialValue:!1,children:t(w,{})}),t(k,{orientation:"left",children:"\u6B63\u6587"}),t(i.Item,{field:"content",wrapperCol:{span:24},triggerPropName:"html",trigger:"getContent",rules:[{required:!0},{validator(a,s){if(a==="<p><br></p>")return s("\u8BF7\u8F93\u5165\u6B63\u6587");s()}}],children:t(U,{})})]})})}const Q={"en-US":{"columns.keyword":"Keyword","columns.title":"Title","columns.code":"Code","columns.status":"Status","columns.status.enabled":"Enabled","columns.status.disabled":"Disabled","columns.updatedAt":"Updated At","columns.action":"Action","columns.action.edit":"Edit","columns.action.enable":"Enable","columns.action.disable":"Disable","columns.action.delete":"Delete"},"zh-CN":{"columns.keyword":"\u5173\u952E\u8BCD","columns.title":"\u6807\u9898","columns.code":"\u7F16\u7801","columns.status":"\u542F\u7528\u72B6\u6001","columns.status.enabled":"\u542F\u7528","columns.status.disabled":"\u7981\u7528","columns.updatedAt":"\u4FEE\u6539\u65F6\u95F4","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","columns.action.enable":"\u542F\u7528","columns.action.disable":"\u7981\u7528","columns.action.delete":"\u5220\u9664"}};function fe(){const e=y(Q),n=y(L),r=m.exports.useRef(),[h,g]=m.exports.useState([]),[a,s]=j({visible:!1,close:function(){s(o=>{o.visible=!1})}}),[f,F]=m.exports.useState();async function B(o){try{const u=await R({uuid:o});u.code===0&&(F(o),s(c=>{c.data=u.data,c.visible=!0}))}catch{}}m.exports.useEffect(()=>{z().then(o=>{const u=[];for(const c in o.data)u.push({value:c,label:o.data[c]});g(u)})},[]);const I=[{title:e["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:e["columns.title"],dataIndex:"title",ellipsis:!0},{title:e["columns.code"],dataIndex:"code"},{title:e["columns.status"],dataIndex:"status",render(o,u){return u.status===1?t(C,{status:"success",text:e["columns.status.enabled"]}):t(C,{status:"error",text:e["columns.status.disabled"]})}},{title:e["columns.updateAt"],dataIndex:"updated_at"},{title:e["columns.action"],width:280,render:(o,u)=>d(O,{children:[d(l,{type:"text",onClick:()=>B(u.uuid),children:[t(S,{}),e["columns.action.edit"]]}),u.status===0?d(l,{type:"text",onClick:async()=>{(await G(u.uuid)).code===0&&r.current.reload()},children:[t(M,{}),e["columns.action.enable"]]}):d(l,{type:"text",onClick:async()=>{(await $(u.uuid)).code===0&&r.current.reload()},children:[t(A,{}),e["columns.action.disable"]]}),t(P,{reqDel:V,params:{uuid:u.uuid},reload:()=>r.current.reload(),children:d(l,{type:"text",children:[t(N,{}),e["columns.action.delete"]]})})]})}];return d(T,{children:[a.visible&&t(J,{visible:a.visible,data:a.data,close:()=>a.close(),reload:()=>r.current.reload(),target:h,uuid:f}),t(E,{style:{display:a.visible?"none":void 0},children:t(q,{ref:r,request:W,columns:I,actionBarRender:[t(l,{type:"primary",onClick:()=>r.current.reload(),children:n["table.refresh"]},"refresh")],toolBarRender:[t(l,{type:"primary",onClick:()=>{F(void 0),s(o=>{o.visible=!0,o.data=void 0})},children:n["table.createPage"]},"create")]})})]})}export{fe as default};
