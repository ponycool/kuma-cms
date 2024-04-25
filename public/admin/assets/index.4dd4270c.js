import{h as s,at as o,r as m,j as a,H as h,B as n,a as d,au as f,ba as C,M as F,F as y,bc as w}from"./index.f83d85b5.js";import{U as b}from"./index.bea412e5.js";import{C as g}from"./index.0d3d33cd.js";import{D as v,P as B}from"./index.74329099.js";import{i as x,C as I,D}from"./use-immer.module.1c8e9420.js";import"./index.ffb2a7b6.js";import{c as E}from"./convertNullToUndefined.a19d8223.js";import{f as k}from"./formatDate.c584a859.js";import{M as A}from"./index.20a4d813.js";import{I as _}from"./image.a7df5067.js";import{I as q}from"./index.f46d4afd.js";import"./index.289dc640.js";import"./index.92a955e0.js";import"./index.d3875766.js";import"./index.dbc23ec2.js";import"./index.03083615.js";function L(e){return s.post("/api/honor/query",e)}function P(e){return s.post("/api/honor/detail",e)}function j(e){return s.post("/api/honor/create",e)}function M(e){return s.post("/api/honor/update",e)}function N(e){return s.post("/api/honor/delete",e)}function S(e){const[i]=o.useForm(),[l,c]=m.exports.useState(!1);async function p(){i.validate().then(async t=>{c(!0);try{const r={...t,image:t.image&&t.image.length!==0?t.image[0].response.data.name:void 0};let u;e.data?u=await M({...r,uuid:e.data.uuid}):u=await j(r),u.code===0&&(e.reload(),e.close())}finally{c(!1)}}).catch(t=>{if(t.errors)for(const r in t.errors)F.error(t.errors[r].message)})}return m.exports.useEffect(()=>{if(e.data){const t=E(e.data),r=t.image;i.setFieldsValue({...t,image:t.image?[{uid:t.image,url:r,response:{data:{name:t.image.replace("/media/image?n=",""),path:t.image}}}]:[],award_date:t.award_date?k(new Date(t.award_date)):void 0})}},[e.data]),m.exports.useEffect(()=>{e.visible===!1&&i.resetFields()},[i,e.visible]),a(g,{title:e.data?"\u4FEE\u6539\u8363\u8A89":"\u521B\u5EFA\u8363\u8A89",extra:a(h,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[a(n,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),a(n,{type:"primary",loading:l,onClick:p,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:d(o,{form:i,labelCol:{span:2},wrapperCol:{span:22},children:[a(o.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:a(f,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),a(o.Item,{label:"\u7167\u7247",field:"image",triggerPropName:"fileList",children:a(b,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),a(o.Item,{label:"\u8BC4\u5956\u673A\u6784",field:"award_organization",wrapperCol:{span:2},children:a(f,{maxLength:100,placeholder:"\u8BC4\u5956\u673A\u6784"})}),a(o.Item,{label:"\u65F6\u95F4",field:"award_date",wrapperCol:{span:2},children:a(v,{})}),a(C,{orientation:"left",children:"\u6B63\u6587"}),a(o.Item,{field:"description",wrapperCol:{span:24},triggerPropName:"html",trigger:"getContent",rules:[{required:!0},{validator(t,r){if(t==="<p><br></p>")return r("\u8BF7\u8F93\u5165\u6B63\u6587");r()}}],children:a(A,{})})]})})}function ee(){const e=m.exports.useRef(),[i,l]=x({visible:!1,close:function(){l(t=>{t.visible=!1})}});async function c(t){try{const r=await P({uuid:t});r.code===0&&l(u=>{u.data=r.data,u.visible=!0})}catch{}}const p=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u56FE\u7247",width:150,dataIndex:"image",render:(t,r)=>{if(r.image){let u="";return u=r.image,a(_,{width:40,height:40,src:u})}else return"\u6682\u65E0\u56FE\u7247"}},{title:"\u8BC4\u5956\u673A\u6784",dataIndex:"award_organization"},{title:"\u8363\u8A89\u65E5\u671F",dataIndex:"award_date"},{title:"\u64CD\u4F5C",width:280,render:(t,r)=>d(I,{children:[d(n,{type:"text",onClick:()=>c(r.uuid),children:[a(w,{}),"\u7F16\u8F91"]}),a(D,{reqDel:N,params:{uuid:r.uuid},reload:()=>e.current.reload(),children:d(n,{type:"text",children:[a(q,{}),"\u5220\u9664"]})})]})}];return d(y,{children:[i.visible&&a(S,{visible:i.visible,data:i.data,close:()=>i.close(),reload:()=>e.current.reload()}),a(g,{style:{display:i.visible?"none":void 0},children:a(B,{ref:e,request:L,columns:p,actionBarRender:[a(n,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[a(n,{type:"primary",onClick:()=>{l(t=>{t.visible=!0,t.data=void 0})},children:"\u6DFB\u52A0\u8363\u8A89\u8D44\u8D28"},"create")]})})]})}export{ee as default};