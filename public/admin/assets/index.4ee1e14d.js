import{aj as _,av as l,r as p,a as g,j as e,K as P,B as h,aw as v,am as O,bb as T,M as N,u as w,i as j,aR as I,bc as q,F as M}from"./index.1a11cdc6.js";import{U as B,I as R}from"./index.c7fa4a85.js";import{C as S}from"./index.390eca1f.js";import{T as J,P as U}from"./index.7ad93636.js";import{d as L,u as V,e as W,i as z,f as H,g as G,r as K,p as Q,h as $}from"./index.a44ab454.js";import{C as X,D as Y}from"./DelPopconfirm.26b6577f.js";import{M as Z}from"./index.255b9fc4.js";import{c as k}from"./convertNullToUndefined.a19d8223.js";import{i as ee}from"./use-immer.module.6e0b6c8d.js";import{I as te}from"./image.4ec78a26.js";import{I as ae}from"./index.67d3d74b.js";import{I as ie}from"./index.ea70e36d.js";import"./index.ef2e5c2f.js";import"./index.11a5a35b.js";import"./index.6a8148d7.js";import"./index.a11aa7dc.js";import"./index.5ddd7d6d.js";import"./index.64430a43.js";import"./b-tween.es.064e2a03.js";import"./index.688b276f.js";import"./index.a0b763a7.js";const D=_.TextArea;function re(r){const[i]=l.useForm(),[u,y]=p.exports.useState(""),[E,m]=p.exports.useState(!1),[f,b]=p.exports.useState([]);async function x(){try{const t=await L();if(t.code===0){const a=t.data,o=new Map,c=[];a.forEach(d=>o.set(d.id,{...d,children:[]})),a.forEach(d=>{const n=o.get(d.pid);n?n.children.push(o.get(d.id)):c.push(o.get(d.id))}),b(c)}}catch{}}function F(t){y(t)}async function s(){i.validate().then(async t=>{m(!0);const a=k(t);try{if(!u||u==="<p><br></p>")throw N.error("\u8BF7\u586B\u5199\u4EA7\u54C1\u5185\u5BB9"),new Error("\u8BF7\u586B\u5199\u4EA7\u54C1\u5185\u5BB9");const o={...a,cover_image:a.cover_image&&a.cover_image.length!==0?a.cover_image[0].response.data.name:void 0,detail_images:a.detail_images&&a.detail_images.length!==0?JSON.stringify(a.detail_images.map(d=>d.response.data.name)):void 0,status:a.status?"true":"false",description:u,stock_quantity:a.stock_quantity||0,price:a.price||0,sort_index:a.sort_index||1};let c;r.data?c=await V({...o,uuid:r.data.uuid}):c=await W(o),c.code===0&&(r.reload(),r.close())}finally{m(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return p.exports.useEffect(()=>{x()},[]),p.exports.useEffect(()=>{if(r.data){const t=k(r.data),a=t.cover_image;i.setFieldsValue({...t,status:t.status===1,cover_image:t.cover_image?[{uid:t.cover_image,url:a,response:{data:{name:t.cover_image.replace("/media/image?n=",""),path:t.cover_image}}}]:[],detail_images:t.detail_images?JSON.parse(t.detail_images).map((o,c)=>({uid:c,url:o,response:{data:{name:o.replace("/media/image?n=",""),path:o}}})):[]}),y(r.data.description)}},[r.data]),p.exports.useEffect(()=>{r.visible===!1&&i.resetFields()},[i,r.visible]),g(S,{title:r.data?"\u4FEE\u6539\u4EA7\u54C1":"\u521B\u5EFA\u4EA7\u54C1",extra:e(P,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>r.close()}),actions:[e(h,{type:"default",onClick:()=>r.close(),children:"\u53D6\u6D88"},"cancel"),e(h,{type:"primary",loading:E,onClick:s,children:r.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:[g(l,{form:i,labelCol:{span:2},wrapperCol:{span:22},children:[e(l.Item,{label:"\u4EA7\u54C1\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"}],children:e(_,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0"})}),e(l.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:2},children:e(J,{treeData:f,fieldNames:{key:"id",title:"name"},allowClear:!0})}),e(l.Item,{label:"\u4EA7\u54C1\u4E3B\u56FE",field:"cover_image",triggerPropName:"fileList",children:e(B,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(l.Item,{label:"\u4EA7\u54C1\u8BE6\u60C5\u56FE",field:"detail_images",triggerPropName:"fileList",children:e(B,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card"})}),e(l.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:e(_,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),e(l.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:e(D,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(l.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:e(D,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(l.Item,{label:"\u4EF7\u683C",field:"price",wrapperCol:{span:2},initialValue:0,children:e(v,{maxLength:10,hideControl:!0,placeholder:"\u4EF7\u683C",precision:2})}),e(l.Item,{label:"\u5E93\u5B58",field:"stock_quantity",wrapperCol:{span:2},initialValue:0,children:e(v,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u5E93\u5B58"})}),e(l.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(t,a){t&&t<1?a("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):a()}}],children:e(v,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),e(l.Item,{label:"\u4E0A\u67B6\u72B6\u6001",field:"status",triggerPropName:"checked",children:e(O,{})})]}),e(T,{orientation:"left",children:"\u4EA7\u54C1\u63CF\u8FF0"}),e(Z,{html:u,getContent:F})]})}function Ie(){const r=w(j),i=w(z),u=p.exports.useRef(),[y,E]=p.exports.useState([]),[m,f]=ee({visible:!1,close:function(){f(s=>{s.visible=!1})}});async function b(s){const a=(await L()).data,o=new Map,c=[];return a.forEach(n=>o.set(n.id,{...n,children:[]})),a.forEach(n=>{const C=o.get(n.pid);C?C.children.push(o.get(n.id)):c.push(o.get(n.id))}),E(c),s.map(n=>{const C=a.find(A=>A.id===n.cid);return{...n,category:C?C.name:null}})}async function x(s){try{const t=await $({uuid:s});t.code===0&&f(a=>{a.data=t.data,a.visible=!0})}catch{}}const F=[{title:i["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:i["columns.category"],dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:y,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"ID",dataIndex:"id"},{title:i["columns.title"],dataIndex:"name",ellipsis:!0},{title:i["columns.productImage"],width:150,dataIndex:"cover_image",render:(s,t)=>{if(t.cover_image){let a="";return a=t.cover_image,e(te,{width:40,height:40,src:a})}else return i["columns.noCover"]}},{title:i["columns.category"],ellipsis:!0,dataIndex:"category"},{title:i["columns.price"],dataIndex:"price"},{title:i["columns.stockQuantity"],dataIndex:"stock_quantity"},{title:i["columns.views"],dataIndex:"view_count"},{title:i["columns.isPublished"],dataIndex:"is_published",render(s,t){return t.status===1?e(I,{color:"green",children:i["columns.isPublished.published"]}):e(I,{color:"red",children:i["columns.isPublish.unPublished"]})}},{title:i["columns.updateAt"],width:180,dataIndex:"updated_at"},{title:i["columns.action"],width:280,render:(s,t)=>g(X,{children:[g(h,{type:"text",onClick:()=>x(t.uuid),children:[e(q,{}),i["columns.action.edit"]]}),t.status===0?g(h,{type:"text",onClick:async()=>{(await H(t.uuid)).code===0&&u.current.reload()},children:[e(R,{}),i["columns.action.publish"]]}):g(h,{type:"text",onClick:async()=>{(await G(t.uuid)).code===0&&u.current.reload()},children:[e(ae,{}),i["columns.action.unPublish"]]}),e(Y,{reqDel:K,params:{uuid:t.uuid},reload:()=>u.current.reload(),children:g(h,{type:"text",children:[e(ie,{}),i["columns.action.delete"]]})})]})}];return g(M,{children:[m.visible&&e(re,{visible:m.visible,data:m.data,close:()=>m.close(),reload:()=>u.current.reload()}),e(S,{style:{display:m.visible?"none":void 0},children:e(U,{ref:u,request:Q,columns:F,dataRender:b,actionBarRender:[e(h,{type:"primary",onClick:()=>u.current.reload(),children:r["table.refresh"]},"refresh")],toolBarRender:[e(h,{type:"primary",onClick:()=>{f(s=>{s.visible=!0,s.data=void 0})},children:r["table.createProduct"]},"create")]})})]})}export{Ie as default};
