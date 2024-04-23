import{au as _,at as s,r as m,a as p,j as e,H as A,B as g,bb as x,an as S,ba as L,M as O,F as T,bc as N}from"./index.739e45f0.js";import{T as v}from"./index.71987e97.js";import{U as b,I as q}from"./index.349d0be9.js";import{C as D}from"./index.c16a79e0.js";import{T as P,P as j}from"./index.7916659f.js";import{b as k,u as M,e as J,p as R,f as U,g as V,r as W,h as z}from"./index.53bfe398.js";import{i as H,C as G,D as K}from"./use-immer.module.c4d5f79c.js";import"./index.a060946a.js";import{M as Q}from"./index.bc850d2c.js";import{c as w}from"./convertNullToUndefined.a19d8223.js";import{I as X}from"./image.df3a2dbd.js";import{I as Y}from"./index.fc5bbfc0.js";import{I as Z}from"./index.ab689582.js";import"./index.a6b7ed6b.js";import"./index.4df6d5db.js";import"./index.8dc7e9db.js";import"./index.e1f38fb8.js";const I=_.TextArea;function $(r){const[h]=s.useForm(),[f,d]=m.exports.useState(""),[C,E]=m.exports.useState(!1),[y,B]=m.exports.useState([]);async function n(){try{const t=await k();if(t.code===0){const a=t.data.pageData,c=new Map,i=[];a.forEach(o=>c.set(o.id,{...o,children:[]})),a.forEach(o=>{const F=c.get(o.pid);F?F.children.push(c.get(o.id)):i.push(c.get(o.id))}),B(i)}}catch{}}function u(t){d(t)}async function l(){h.validate().then(async t=>{E(!0);const a=w(t);try{if(!f||f==="<p><br></p>")throw O.error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9"),new Error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9");const c={...a,cover_image:a.cover_image&&a.cover_image.length!==0?a.cover_image[0].response.data.name:void 0,detail_images:a.detail_images&&a.detail_images.length!==0?JSON.stringify(a.detail_images.map(o=>o.response.data.name)):void 0,status:a.status?"true":"false",description:f,stock_quantity:a.stock_quantity||0,price:a.price||0,sort_index:a.sort_index||1};let i;r.data?i=await M({...c,uuid:r.data.uuid}):i=await J(c),i.code===0&&(r.reload(),r.close())}finally{E(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return m.exports.useEffect(()=>{n()},[]),m.exports.useEffect(()=>{if(r.data){const t=w(r.data),a=t.cover_image;h.setFieldsValue({...t,status:t.status===1,cover_image:t.cover_image?[{uid:t.cover_image,url:a,response:{data:{name:t.cover_image.replace("/media/image?n=",""),path:t.cover_image}}}]:[],detail_images:JSON.parse(t.detail_images).map((c,i)=>({uid:i,url:c,response:{data:{name:c.replace("/media/image?n=",""),path:c}}}))}),d(r.data.description)}},[r.data]),m.exports.useEffect(()=>{r.visible===!1&&h.resetFields()},[h,r.visible]),p(D,{title:r.data?"\u4FEE\u6539\u4EA7\u54C1":"\u521B\u5EFA\u4EA7\u54C1",extra:e(A,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>r.close()}),actions:[e(g,{type:"default",onClick:()=>r.close(),children:"\u53D6\u6D88"},"cancel"),e(g,{type:"primary",loading:C,onClick:l,children:r.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:[p(s,{form:h,labelCol:{span:2},wrapperCol:{span:22},children:[e(s.Item,{label:"\u4EA7\u54C1\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"}],children:e(_,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"})}),e(s.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:2},children:e(P,{treeData:y,fieldNames:{key:"id",title:"name"},allowClear:!0})}),e(s.Item,{label:"\u6587\u7AE0\u5C01\u9762",field:"cover_image",triggerPropName:"fileList",children:e(b,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(s.Item,{label:"\u4EA7\u54C1\u56FE\u7247",field:"detail_images",triggerPropName:"fileList",children:e(b,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card"})}),e(s.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:e(_,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),e(s.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:e(I,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(s.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:e(I,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(s.Item,{label:"\u4EF7\u683C",field:"price",wrapperCol:{span:2},initialValue:0,children:e(x,{maxLength:10,hideControl:!0,placeholder:"\u4EF7\u683C",precision:2})}),e(s.Item,{label:"\u5E93\u5B58",field:"stock_quantity",wrapperCol:{span:2},initialValue:0,children:e(x,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u5E93\u5B58"})}),e(s.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(t,a){t&&t<1?a("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):a()}}],children:e(x,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),e(s.Item,{label:"\u4E0A\u67B6\u72B6\u6001",field:"status",triggerPropName:"checked",children:e(S,{})})]}),e(L,{orientation:"left",children:"\u4EA7\u54C1\u63CF\u8FF0"}),e(Q,{html:f,getContent:u})]})}function Ce(){const r=m.exports.useRef(),[h,f]=m.exports.useState([]),[d,C]=H({visible:!1,close:function(){C(n=>{n.visible=!1})}});async function E(n){const l=(await k()).data.pageData,t=new Map,a=[];return l.forEach(i=>t.set(i.id,{...i,children:[]})),l.forEach(i=>{const o=t.get(i.pid);o?o.children.push(t.get(i.id)):a.push(t.get(i.id))}),f(a),n.map(i=>{const o=l.find(F=>F.id===i.cid);return{...i,category:o?o.name:null}})}async function y(n){try{const u=await z({uuid:n});u.code===0&&C(l=>{l.data=u.data,l.visible=!0})}catch{}}const B=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u5206\u7C7B",dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:h,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"\u6807\u9898",dataIndex:"name",ellipsis:!0},{title:"\u5C01\u9762\u56FE\u7247",width:150,dataIndex:"cover_image",render:(n,u)=>{if(u.cover_image){let l="";return l=u.cover_image,e(X,{width:40,height:40,src:l})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u5206\u7C7B",dataIndex:"category"},{title:"\u4EF7\u683C",dataIndex:"price"},{title:"\u5E93\u5B58",dataIndex:"stock_quantity"},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count"},{title:"\u4E0A\u67B6\u72B6\u6001",dataIndex:"is_published",render(n,u){return u.status===1?e(v,{color:"green",children:"\u5DF2\u4E0A\u67B6"}):e(v,{color:"red",children:"\u5DF2\u4E0B\u67B6"})}},{title:"\u66F4\u65B0\u65F6\u95F4",width:180,dataIndex:"updated_at"},{title:"\u64CD\u4F5C",width:280,render:(n,u)=>p(G,{children:[p(g,{type:"text",onClick:()=>y(u.uuid),children:[e(N,{}),"\u7F16\u8F91"]}),u.status===0?p(g,{type:"text",onClick:async()=>{(await U(u.uuid)).code===0&&r.current.reload()},children:[e(q,{}),"\u4E0A\u67B6"]}):p(g,{type:"text",onClick:async()=>{(await V(u.uuid)).code===0&&r.current.reload()},children:[e(Y,{}),"\u4E0B\u67B6"]}),e(K,{reqDel:W,params:{uuid:u.uuid},reload:()=>r.current.reload(),children:p(g,{type:"text",children:[e(Z,{}),"\u5220\u9664"]})})]})}];return p(T,{children:[d.visible&&e($,{visible:d.visible,data:d.data,close:()=>d.close(),reload:()=>r.current.reload()}),e(D,{style:{display:d.visible?"none":void 0},children:e(j,{ref:r,request:R,columns:B,dataRender:E,actionBarRender:[e(g,{type:"primary",onClick:()=>r.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[e(g,{type:"primary",onClick:()=>{C(n=>{n.visible=!0,n.data=void 0})},children:"\u521B\u5EFA\u4EA7\u54C1"},"create")]})})]})}export{Ce as default};
