import{au as I,at as l,r as p,j as e,H as A,B as d,a as m,b1 as x,an as D,F as L,b2 as O}from"./index.9cbf2bc1.js";import{T as b}from"./index.fd2789d8.js";import{U as v,I as N}from"./index.78d6dd5f.js";import{C as B}from"./index.34e8fbc1.js";import{T,P}from"./index.a0d071f0.js";import{b as S,u as j,e as J,p as q,f as W,g as z,r as H,h as R}from"./index.47a7c5f4.js";import{i as U,C as M,D as G}from"./use-immer.module.62b28454.js";import"./index.fa92fd2e.js";import{I as w}from"./image.7ecf1fb3.js";import{I as V}from"./index.269e7a4a.js";import{I as K}from"./index.69888ec0.js";import"./index.c429e71d.js";import"./index.eba0d89d.js";import"./index.11732203.js";import"./index.780b09d1.js";const _=I.TextArea;function Q(r){const[c]=l.useForm(),[f,n]=p.exports.useState(!1),[g,C]=p.exports.useState([]);async function E(){try{const t=await S();if(t.code===0){const a=t.data.pageData,i=new Map,u=[];a.forEach(s=>i.set(s.id,{...s,children:[]})),a.forEach(s=>{const y=i.get(s.pid);y?y.children.push(i.get(s.id)):u.push(i.get(s.id))}),C(u)}}catch{}}async function F(){c.validate().then(async t=>{n(!0);try{const a={...t,cover_image:t.cover_image&&t.cover_image.length!==0?t.cover_image[0].response.data.name:void 0,detail_images:t.detail_images&&t.detail_images.length!==0?JSON.stringify(t.detail_images.map(u=>u.response.data.name)):void 0,status:t.status?"true":"false"};let i;r.data?i=await j({...a,uuid:r.data.uuid}):i=await J(a),i.code===0&&(r.reload(),r.close())}finally{n(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return p.exports.useEffect(()=>{E()},[]),p.exports.useEffect(()=>{if(r.data){const t=r.data,a=t.cover_image;c.setFieldsValue({...t,cover_image:t.cover_image?[{uid:t.cover_image,url:a,response:{data:{name:t.cover_image.replace("/media/image?n=",""),path:t.cover_image}}}]:[],detail_images:JSON.parse(t.detail_images).map((i,u)=>({uid:u,url:i,response:{data:{name:i.replace("/media/image?n=",""),path:i}}}))})}},[r.data]),p.exports.useEffect(()=>{r.visible===!1&&c.resetFields()},[c,r.visible]),e(B,{title:r.data?"\u4FEE\u6539\u4EA7\u54C1":"\u521B\u5EFA\u4EA7\u54C1",extra:e(A,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>r.close()}),actions:[e(d,{type:"default",onClick:()=>r.close(),children:"\u53D6\u6D88"},"cancel"),e(d,{type:"primary",loading:f,onClick:F,children:r.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:m(l,{form:c,labelCol:{span:2},wrapperCol:{span:22},children:[e(l.Item,{label:"\u4EA7\u54C1\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"}],children:e(I,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"})}),e(l.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:10},children:e(T,{treeData:g,fieldNames:{key:"id",title:"name"},allowClear:!0})}),e(l.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:e(I,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),e(l.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:e(_,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(l.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:e(_,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(l.Item,{label:"\u6587\u7AE0\u5C01\u9762",field:"cover_image",triggerPropName:"fileList",children:e(v,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(l.Item,{label:"\u4EA7\u54C1\u56FE\u7247",field:"detail_images",triggerPropName:"fileList",children:e(v,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card"})}),e(l.Item,{label:"\u63CF\u8FF0",field:"description",children:e(_,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(l.Item,{label:"\u4EF7\u683C",field:"price",wrapperCol:{span:2},children:e(x,{maxLength:10,hideControl:!0,placeholder:"\u4EF7\u683C",precision:2})}),e(l.Item,{label:"\u5E93\u5B58",field:"stock_quantity",wrapperCol:{span:2},children:e(x,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u5E93\u5B58"})}),e(l.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},children:e(x,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),e(l.Item,{label:"\u5546\u54C1\u72B6\u6001",field:"status",triggerPropName:"checked",children:e(D,{})})]})})}function ce(){const r=p.exports.useRef(),[c,f]=p.exports.useState([]),[n,g]=U({visible:!1,close:function(){g(t=>{t.visible=!1})}});async function C(t){const i=(await S()).data.pageData,u=new Map,s=[];return i.forEach(o=>u.set(o.id,{...o,children:[]})),i.forEach(o=>{const h=u.get(o.pid);h?h.children.push(u.get(o.id)):s.push(u.get(o.id))}),f(s),t.map(o=>{const h=i.find(k=>k.id===o.cid);return{...o,category:h?h.name:null}})}async function E(t){try{const a=await R({uuid:t});a.code===0&&g(i=>{i.data=a.data,i.visible=!0})}catch{}}const F=[{title:"\u6807\u9898",dataIndex:"name",ellipsis:!0},{title:"\u63CF\u8FF0",dataIndex:"description",ellipsis:!0},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u5206\u7C7B",dataIndex:"category"},{title:"\u5206\u7C7B",dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:c,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"\u5C01\u9762\u56FE\u7247",width:150,dataIndex:"cover_image",render:(t,a)=>{if(a.cover_image){let i="";return i=a.cover_image,e(w,{width:40,height:40,src:i})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u4EA7\u54C1\u56FE",dataIndex:"detail_images",ellipsis:!0,render:(t,a)=>{if(!a.detail_images||!Array.isArray(JSON.parse(a.detail_images))||JSON.parse(a.detail_images).length===0)return"\u6682\u65E0\u4EA7\u54C1\u56FE";const i=JSON.parse(a.detail_images);if(Array.isArray(i)&&i.length>0)return i.map(u=>e(w,{width:40,height:40,src:u},u))}},{title:"\u4EF7\u683C",dataIndex:"price"},{title:"\u5E93\u5B58",dataIndex:"stock_quantity"},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count"},{title:"\u5546\u54C1\u72B6\u6001",dataIndex:"is_published",render(t,a){return a.status===1?e(b,{color:"green",children:"\u5DF2\u4E0A\u67B6"}):e(b,{color:"red",children:"\u5DF2\u4E0B\u67B6"})}},{title:"\u64CD\u4F5C",width:280,render:(t,a)=>m(M,{children:[m(d,{type:"text",onClick:()=>E(a.uuid),children:[e(O,{}),"\u7F16\u8F91"]}),a.status===0?m(d,{type:"text",onClick:async()=>{(await W(a.uuid)).code===0&&r.current.reload()},children:[e(N,{}),"\u4E0A\u67B6"]}):m(d,{type:"text",onClick:async()=>{(await z(a.uuid)).code===0&&r.current.reload()},children:[e(V,{}),"\u4E0B\u67B6"]}),e(G,{reqDel:H,params:{uuid:a.uuid},reload:()=>r.current.reload(),children:m(d,{type:"text",children:[e(K,{}),"\u5220\u9664"]})})]})}];return m(L,{children:[n.visible&&e(Q,{visible:n.visible,data:n.data,close:()=>n.close(),reload:()=>r.current.reload()}),e(B,{style:{display:n.visible?"none":void 0},children:e(P,{ref:r,request:q,columns:F,dataRender:C,actionBarRender:[e(d,{type:"primary",onClick:()=>r.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[e(d,{type:"primary",onClick:()=>{g(t=>{t.visible=!0,t.data=void 0})},children:"\u521B\u5EFA\u4EA7\u54C1"},"create")]})})]})}export{ce as default};
