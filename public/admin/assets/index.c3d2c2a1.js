import{ae as _,au as s,r as m,a as p,j as e,H as A,B as g,av as x,ao as S,bb as L,M as O,F as T,bc as N}from"./index.6da9ecde.js";import{T as v}from"./index.24b5a269.js";import{U as I,I as P}from"./index.69285a4a.js";import{C as D}from"./index.710848ee.js";import{T as q,P as j}from"./index.a1609561.js";import{b as k,u as M,e as J,p as R,f as U,g as V,r as W,h as z}from"./index.a4f3608c.js";import{i as H,C as G,D as K}from"./use-immer.module.e929754b.js";import"./index.f6ba9b81.js";import{M as Q}from"./index.b52b100d.js";import{c as w}from"./convertNullToUndefined.a19d8223.js";import{I as X}from"./image.c22e392f.js";import{I as Y}from"./index.b27ee1a8.js";import{I as Z}from"./index.df373fa6.js";import"./index.b60766ee.js";import"./index.cc8f2448.js";import"./index.2ca6e70f.js";import"./index.873bbb81.js";const b=_.TextArea;function $(i){const[h]=s.useForm(),[f,c]=m.exports.useState(""),[C,E]=m.exports.useState(!1),[y,B]=m.exports.useState([]);async function l(){try{const t=await k();if(t.code===0){const a=t.data,d=new Map,r=[];a.forEach(o=>d.set(o.id,{...o,children:[]})),a.forEach(o=>{const F=d.get(o.pid);F?F.children.push(d.get(o.id)):r.push(d.get(o.id))}),B(r)}}catch{}}function u(t){c(t)}async function n(){h.validate().then(async t=>{E(!0);const a=w(t);try{if(!f||f==="<p><br></p>")throw O.error("\u8BF7\u586B\u5199\u4EA7\u54C1\u5185\u5BB9"),new Error("\u8BF7\u586B\u5199\u4EA7\u54C1\u5185\u5BB9");const d={...a,cover_image:a.cover_image&&a.cover_image.length!==0?a.cover_image[0].response.data.name:void 0,detail_images:a.detail_images&&a.detail_images.length!==0?JSON.stringify(a.detail_images.map(o=>o.response.data.name)):void 0,status:a.status?"true":"false",description:f,stock_quantity:a.stock_quantity||0,price:a.price||0,sort_index:a.sort_index||1};let r;i.data?r=await M({...d,uuid:i.data.uuid}):r=await J(d),r.code===0&&(i.reload(),i.close())}finally{E(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return m.exports.useEffect(()=>{l()},[]),m.exports.useEffect(()=>{if(i.data){const t=w(i.data),a=t.cover_image;h.setFieldsValue({...t,status:t.status===1,cover_image:t.cover_image?[{uid:t.cover_image,url:a,response:{data:{name:t.cover_image.replace("/media/image?n=",""),path:t.cover_image}}}]:[],detail_images:t.detail_images?JSON.parse(t.detail_images).map((d,r)=>({uid:r,url:d,response:{data:{name:d.replace("/media/image?n=",""),path:d}}})):[]}),c(i.data.description)}},[i.data]),m.exports.useEffect(()=>{i.visible===!1&&h.resetFields()},[h,i.visible]),p(D,{title:i.data?"\u4FEE\u6539\u4EA7\u54C1":"\u521B\u5EFA\u4EA7\u54C1",extra:e(A,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>i.close()}),actions:[e(g,{type:"default",onClick:()=>i.close(),children:"\u53D6\u6D88"},"cancel"),e(g,{type:"primary",loading:C,onClick:n,children:i.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:[p(s,{form:h,labelCol:{span:2},wrapperCol:{span:22},children:[e(s.Item,{label:"\u4EA7\u54C1\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"}],children:e(_,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"})}),e(s.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:2},children:e(q,{treeData:y,fieldNames:{key:"id",title:"name"},allowClear:!0})}),e(s.Item,{label:"\u4EA7\u54C1\u4E3B\u56FE",field:"cover_image",triggerPropName:"fileList",children:e(I,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(s.Item,{label:"\u4EA7\u54C1\u8BE6\u60C5\u56FE",field:"detail_images",triggerPropName:"fileList",children:e(I,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card"})}),e(s.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:e(_,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),e(s.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:e(b,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(s.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:e(b,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(s.Item,{label:"\u4EF7\u683C",field:"price",wrapperCol:{span:2},initialValue:0,children:e(x,{maxLength:10,hideControl:!0,placeholder:"\u4EF7\u683C",precision:2})}),e(s.Item,{label:"\u5E93\u5B58",field:"stock_quantity",wrapperCol:{span:2},initialValue:0,children:e(x,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u5E93\u5B58"})}),e(s.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(t,a){t&&t<1?a("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):a()}}],children:e(x,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),e(s.Item,{label:"\u4E0A\u67B6\u72B6\u6001",field:"status",triggerPropName:"checked",children:e(S,{})})]}),e(L,{orientation:"left",children:"\u4EA7\u54C1\u63CF\u8FF0"}),e(Q,{html:f,getContent:u})]})}function Ce(){const i=m.exports.useRef(),[h,f]=m.exports.useState([]),[c,C]=H({visible:!1,close:function(){C(l=>{l.visible=!1})}});async function E(l){const n=(await k()).data,t=new Map,a=[];return n.forEach(r=>t.set(r.id,{...r,children:[]})),n.forEach(r=>{const o=t.get(r.pid);o?o.children.push(t.get(r.id)):a.push(t.get(r.id))}),f(a),l.map(r=>{const o=n.find(F=>F.id===r.cid);return{...r,category:o?o.name:null}})}async function y(l){try{const u=await z({uuid:l});u.code===0&&C(n=>{n.data=u.data,n.visible=!0})}catch{}}const B=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u5206\u7C7B",dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:h,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"ID",dataIndex:"id"},{title:"\u6807\u9898",dataIndex:"name",ellipsis:!0},{title:"\u4EA7\u54C1\u4E3B\u56FE",width:150,dataIndex:"cover_image",render:(l,u)=>{if(u.cover_image){let n="";return n=u.cover_image,e(X,{width:40,height:40,src:n})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u5206\u7C7B",ellipsis:!0,dataIndex:"category"},{title:"\u4EF7\u683C",dataIndex:"price"},{title:"\u5E93\u5B58",dataIndex:"stock_quantity"},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count"},{title:"\u4E0A\u67B6\u72B6\u6001",dataIndex:"is_published",render(l,u){return u.status===1?e(v,{color:"green",children:"\u5DF2\u4E0A\u67B6"}):e(v,{color:"red",children:"\u5DF2\u4E0B\u67B6"})}},{title:"\u66F4\u65B0\u65F6\u95F4",width:180,dataIndex:"updated_at"},{title:"\u64CD\u4F5C",width:280,render:(l,u)=>p(G,{children:[p(g,{type:"text",onClick:()=>y(u.uuid),children:[e(N,{}),"\u7F16\u8F91"]}),u.status===0?p(g,{type:"text",onClick:async()=>{(await U(u.uuid)).code===0&&i.current.reload()},children:[e(P,{}),"\u4E0A\u67B6"]}):p(g,{type:"text",onClick:async()=>{(await V(u.uuid)).code===0&&i.current.reload()},children:[e(Y,{}),"\u4E0B\u67B6"]}),e(K,{reqDel:W,params:{uuid:u.uuid},reload:()=>i.current.reload(),children:p(g,{type:"text",children:[e(Z,{}),"\u5220\u9664"]})})]})}];return p(T,{children:[c.visible&&e($,{visible:c.visible,data:c.data,close:()=>c.close(),reload:()=>i.current.reload()}),e(D,{style:{display:c.visible?"none":void 0},children:e(j,{ref:i,request:R,columns:B,dataRender:E,actionBarRender:[e(g,{type:"primary",onClick:()=>i.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[e(g,{type:"primary",onClick:()=>{C(l=>{l.visible=!0,l.data=void 0})},children:"\u521B\u5EFA\u4EA7\u54C1"},"create")]})})]})}export{Ce as default};
