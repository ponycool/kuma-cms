import{h as s,au as f,at as o,r as m,j as a,H as g,B as n,a as d,M as F,F as C,bc as y}from"./index.1e29877d.js";import{U as w}from"./index.bbee8227.js";import{C as h}from"./index.869d7a2d.js";import{D as x,P as D}from"./index.5d086ab8.js";import{i as b,C as E,D as I}from"./use-immer.module.11dbde33.js";import"./index.34bccf16.js";import{c as v}from"./convertNullToUndefined.a19d8223.js";import{f as B}from"./formatDate.c584a859.js";import{I as k}from"./image.0a94c793.js";import{I as A}from"./index.a5f7f2c5.js";import"./index.bd4ad876.js";import"./index.c248c048.js";import"./index.5842d0ef.js";import"./index.e05c3db1.js";import"./index.3dd936b3.js";function _(e){return s.post("/api/honor/query",e)}function L(e){return s.post("/api/honor/detail",e)}function j(e){return s.post("/api/honor/create",e)}function q(e){return s.post("/api/honor/update",e)}function P(e){return s.post("/api/honor/delete",e)}const S=f.TextArea;function T(e){const[r]=o.useForm(),[l,c]=m.exports.useState(!1);async function p(){r.validate().then(async t=>{c(!0);try{const i={...t,image:t.image&&t.image.length!==0?t.image[0].response.data.name:void 0};let u;e.data?u=await q({...i,uuid:e.data.uuid}):u=await j(i),u.code===0&&(e.reload(),e.close())}finally{c(!1)}}).catch(t=>{if(t.errors)for(const i in t.errors)F.error(t.errors[i].message)})}return m.exports.useEffect(()=>{if(e.data){const t=v(e.data),i=t.image;r.setFieldsValue({...t,image:t.image?[{uid:t.image,url:i,response:{data:{name:t.image.replace("/media/image?n=",""),path:t.image}}}]:[],award_date:t.award_date?B(new Date(t.award_date)):void 0})}},[e.data]),m.exports.useEffect(()=>{e.visible===!1&&r.resetFields()},[r,e.visible]),a(h,{title:e.data?"\u4FEE\u6539\u8363\u8A89":"\u521B\u5EFA\u8363\u8A89",extra:a(g,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[a(n,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),a(n,{type:"primary",loading:l,onClick:p,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:d(o,{form:r,labelCol:{span:2},wrapperCol:{span:22},children:[a(o.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:a(f,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),a(o.Item,{label:"\u56FE\u7247",field:"image",triggerPropName:"fileList",children:a(w,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),a(o.Item,{label:"\u9881\u53D1\u7EC4\u7EC7",field:"award_organization",wrapperCol:{span:2},children:a(f,{maxLength:100,placeholder:"\u9881\u53D1\u7EC4\u7EC7"})}),a(o.Item,{label:"\u9881\u53D1\u65F6\u95F4",field:"award_date",wrapperCol:{span:2},children:a(x,{})}),a(o.Item,{label:"\u63CF\u8FF0",field:"description",children:a(S,{maxLength:200,placeholder:"\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})]})})}function Z(){const e=m.exports.useRef(),[r,l]=b({visible:!1,close:function(){l(t=>{t.visible=!1})}});async function c(t){try{const i=await L({uuid:t});i.code===0&&l(u=>{u.data=i.data,u.visible=!0})}catch{}}const p=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u56FE\u7247",width:150,dataIndex:"image",render:(t,i)=>{if(i.image){let u="";return u=i.image,a(k,{width:40,height:40,src:u})}else return"\u6682\u65E0\u56FE\u7247"}},{title:"\u9881\u53D1\u7EC4\u7EC7",dataIndex:"award_organization"},{title:"\u9881\u53D1\u65F6\u95F4",dataIndex:"award_date"},{title:"\u64CD\u4F5C",width:280,render:(t,i)=>d(E,{children:[d(n,{type:"text",onClick:()=>c(i.uuid),children:[a(y,{}),"\u7F16\u8F91"]}),a(I,{reqDel:P,params:{uuid:i.uuid},reload:()=>e.current.reload(),children:d(n,{type:"text",children:[a(A,{}),"\u5220\u9664"]})})]})}];return d(C,{children:[r.visible&&a(T,{visible:r.visible,data:r.data,close:()=>r.close(),reload:()=>e.current.reload()}),a(h,{style:{display:r.visible?"none":void 0},children:a(D,{ref:e,request:_,columns:p,actionBarRender:[a(n,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[a(n,{type:"primary",onClick:()=>{l(t=>{t.visible=!0,t.data=void 0})},children:"\u6DFB\u52A0\u8363\u8A89\u8D44\u8D28"},"create")]})})]})}export{Z as default};
