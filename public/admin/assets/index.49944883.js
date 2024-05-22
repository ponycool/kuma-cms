import{h as s,ae as g,au as n,r as c,j as a,H as v,B as l,a as d,M as E,F as C,b3 as y}from"./index.ca2f5ec4.js";import{U as x}from"./index.9d316eb2.js";import{C as h}from"./index.4fe87d77.js";import{A as F,D as b,P as I}from"./index.0e061d39.js";import{i as B,C as w,D}from"./use-immer.module.2115300c.js";import"./index.09f51cdf.js";import"./index.7d463398.js";import"./index.fd06a02b.js";import{c as k}from"./convertNullToUndefined.a19d8223.js";import{f as A}from"./formatDate.c584a859.js";import{I as L}from"./image.ece5dce6.js";import{I as _}from"./index.e6fa67a7.js";import"./index.ebd1bfe2.js";import"./index.5da0ed63.js";import"./index.f01a761c.js";function q(t){return s.post("/api/event/query",t)}function j(t){return s.post("/api/event/detail",t)}function P(t){return s.post("/api/event/create",t)}function S(t){return s.post("/api/event/update",t)}function T(t){return s.post("/api/event/delete",t)}function N(){return s.post("/api/event/group/query")}const R=g.TextArea,{Option:U}=F;function z(t){var i;const[r]=n.useForm(),[o,m]=c.exports.useState(!1);async function p(){r.validate().then(async e=>{m(!0);try{const u={...e,image:e.image&&e.image.length!==0?e.image[0].response.data.name:void 0};let f;t.data?f=await S({...u,uuid:t.data.uuid}):f=await P(u),f.code===0&&(t.reload(),t.close())}finally{m(!1)}}).catch(e=>{if(e.errors)for(const u in e.errors)E.error(e.errors[u].message)})}return c.exports.useEffect(()=>{if(t.data){const e=k(t.data),u=e.image;r.setFieldsValue({...e,image:e.image?[{uid:e.image,url:u,response:{data:{name:e.image.replace("/media/image?n=",""),path:e.image}}}]:[],event_date:e.event_date?A(new Date(e.event_date)):void 0})}},[t.data]),c.exports.useEffect(()=>{t.visible===!1&&r.resetFields()},[r,t.visible]),a(h,{title:t.data?"\u4FEE\u6539\u4E8B\u4EF6":"\u521B\u5EFA\u4E8B\u4EF6",extra:a(v,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[a(l,{type:"default",onClick:()=>t.close(),children:"\u53D6\u6D88"},"cancel"),a(l,{type:"primary",loading:o,onClick:p,children:t.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:d(n,{form:r,labelCol:{span:2},wrapperCol:{span:22},children:[a(n.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:a(g,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),a(n.Item,{label:"\u56FE\u7247",field:"image",triggerPropName:"fileList",children:a(x,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),a(n.Item,{label:"\u5206\u7EC4",field:"group",wrapperCol:{span:2},children:a(F,{placeholder:"\u9009\u62E9\u5206\u7EC4",children:(i=t.group)==null?void 0:i.map(e=>a(U,{value:e,children:e},e))})}),a(n.Item,{label:"\u65F6\u95F4",field:"event_date",wrapperCol:{span:2},children:a(b,{})}),a(n.Item,{label:"\u63CF\u8FF0",field:"description",children:a(R,{maxLength:200,placeholder:"\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})]})})}function ae(){const t=c.exports.useRef(),[r,o]=B({visible:!1,close:function(){o(i=>{i.visible=!1})},group:[]});c.exports.useEffect(()=>{N().then(i=>{i.code===0&&o(e=>{e.group=i.data||[]})})},[]);async function m(i){try{const e=await j({uuid:i});e.code===0&&o(u=>{u.data=e.data,u.visible=!0})}catch{}}const p=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u56FE\u7247",width:150,dataIndex:"image",render:(i,e)=>{if(e.image){let u="";return u=e.image,a(L,{width:40,height:40,src:u})}else return"\u6682\u65E0\u56FE\u7247"}},{title:"\u5206\u7EC4",dataIndex:"group"},{title:"\u4E8B\u4EF6\u65E5\u671F",dataIndex:"event_date"},{title:"\u64CD\u4F5C",width:280,render:(i,e)=>d(w,{children:[d(l,{type:"text",onClick:()=>m(e.uuid),children:[a(y,{}),"\u7F16\u8F91"]}),a(D,{reqDel:T,params:{uuid:e.uuid},reload:()=>t.current.reload(),children:d(l,{type:"text",children:[a(_,{}),"\u5220\u9664"]})})]})}];return d(C,{children:[r.visible&&a(z,{visible:r.visible,data:r.data,close:()=>r.close(),reload:()=>t.current.reload(),group:r.group}),a(h,{style:{display:r.visible?"none":void 0},children:a(I,{ref:t,request:q,columns:p,actionBarRender:[a(l,{type:"primary",onClick:()=>t.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[a(l,{type:"primary",onClick:()=>{o(i=>{i.visible=!0,i.data=void 0})},children:"\u521B\u5EFA\u4E8B\u4EF6"},"create")]})})]})}export{ae as default};
