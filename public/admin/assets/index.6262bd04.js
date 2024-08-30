import{h,aj as p,av as u,r as g,j as e,K as b,B as s,a as f,aw as B,u as x,i as C,bc as I,F as y}from"./index.1a11cdc6.js";import{U as D}from"./index.c7fa4a85.js";import{C as _}from"./index.390eca1f.js";import{P as E}from"./index.7ad93636.js";import{C as v,D as w}from"./DelPopconfirm.26b6577f.js";import{D as j}from"./index.688b276f.js";import"./index.a0b763a7.js";import{c as F}from"./convertNullToUndefined.a19d8223.js";import{f as L}from"./formatDate.c584a859.js";import{i as A}from"./use-immer.module.6e0b6c8d.js";import{i as k}from"./index.4a144940.js";import{I as T}from"./image.4ec78a26.js";import{I as q}from"./index.ea70e36d.js";import"./index.ef2e5c2f.js";import"./index.11a5a35b.js";import"./index.6a8148d7.js";import"./index.a11aa7dc.js";import"./index.5ddd7d6d.js";import"./index.64430a43.js";import"./b-tween.es.064e2a03.js";function z(t){return h.post("/api/team/query",t)}function P(t){return h.post("/api/team/detail",t)}function R(t){return h.post("/api/team/create",t)}function S(t){return h.post("/api/team/update",t)}function W(t){return h.post("/api/team/delete",t)}const N=p.TextArea;function U(t){const[i]=u.useForm(),[d,n]=g.exports.useState(!1);async function m(){i.validate().then(async a=>{n(!0);const r=F(a);try{const l={...r,profile_image:r.profile_image&&r.profile_image.length!==0?r.profile_image[0].response.data.name:void 0,sort_index:r.sort_index||1,joined_date:r.joined_date};let o;t.data?o=await S({...l,uuid:t.data.uuid}):o=await R(l),o.code===0&&(t.reload(),t.close())}finally{n(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return g.exports.useEffect(()=>{if(t.data){const a=F(t.data),r=a.profile_image;i.setFieldsValue({...a,profile_image:a.profile_image?[{uid:a.profile_image,url:r,response:{data:{name:a.profile_image.replace("/media/image?n=",""),path:a.profile_image}}}]:[],joined_date:a.joined_date?L(new Date(a.joined_date)):void 0})}},[t.data]),g.exports.useEffect(()=>{t.visible===!1&&i.resetFields()},[i,t.visible]),e(_,{title:t.data?"\u4FEE\u6539\u6210\u5458":"\u521B\u5EFA\u6210\u5458",extra:e(b,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(s,{type:"default",onClick:()=>t.close(),children:"\u53D6\u6D88"},"cancel"),e(s,{type:"primary",loading:d,onClick:m,children:t.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:f(u,{form:i,labelCol:{span:2},wrapperCol:{span:22},children:[e(u.Item,{label:"\u6210\u5458\u540D\u5B57",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6210\u5458\u540D\u5B57"}],children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6210\u5458\u540D\u5B57"})}),e(u.Item,{label:"\u6210\u5458\u804C\u4F4D",field:"job_title",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6210\u5458\u804C\u4F4D"})}),e(u.Item,{label:"\u6210\u5458\u5934\u50CF",field:"profile_image",triggerPropName:"fileList",children:e(D,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(u.Item,{label:"\u6210\u5458\u7B80\u4ECB",field:"introduction",children:e(N,{maxLength:200,placeholder:"\u6210\u5458\u7B80\u4ECB",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(u.Item,{label:"\u6210\u5458\u624B\u673A\u53F7",field:"phone",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u6210\u5458\u624B\u673A\u53F7"})}),e(u.Item,{label:"\u6210\u5458\u90AE\u7BB1",field:"email",rules:[{validator(a,r){a&&!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)&&r("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u6210\u5458\u90AE\u7BB1"})}),e(u.Item,{label:"\u5165\u804C\u65F6\u95F4",field:"joined_date",wrapperCol:{span:2},children:e(j,{})}),e(u.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(a,r){a&&a<1?r("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):r()}}],children:e(B,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})})]})})}function ne(){const t=x(C),i=x(k),d=g.exports.useRef(),[n,m]=A({visible:!1,close:function(){m(l=>{l.visible=!1})}});async function a(l){try{const o=await P({uuid:l});o.code===0&&m(c=>{c.data=o.data,c.visible=!0})}catch{}}const r=[{title:i["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:i["columns.name"],dataIndex:"name",ellipsis:!0},{title:i["columns.avatar"],width:150,dataIndex:"profile_image",render:(l,o)=>{if(o.profile_image){let c="";return c=o.profile_image,e(T,{width:40,height:40,src:c})}else return i["columns.noAvatar"]}},{title:i["columns.position"],dataIndex:"job_title"},{title:i["columns.introduction"],dataIndex:"introduction",ellipsis:!0},{title:i["columns.email"],dataIndex:"email",ellipsis:!0},{title:i["columns.phone"],dataIndex:"phone",ellipsis:!0},{title:i["columns.joinedAt"],dataIndex:"joined_date"},{title:i["columns.action"],width:280,render:(l,o)=>f(v,{children:[f(s,{type:"text",onClick:()=>a(o.uuid),children:[e(I,{}),i["columns.action.edit"]]}),e(w,{reqDel:W,params:{uuid:o.uuid},reload:()=>d.current.reload(),children:f(s,{type:"text",children:[e(q,{}),i["columns.action.delete"]]})})]})}];return f(y,{children:[n.visible&&e(U,{visible:n.visible,data:n.data,close:()=>n.close(),reload:()=>d.current.reload()}),e(_,{style:{display:n.visible?"none":void 0},children:e(E,{ref:d,request:z,columns:r,actionBarRender:[e(s,{type:"primary",onClick:()=>d.current.reload(),children:t["table.refresh"]},"refresh")],toolBarRender:[e(s,{type:"primary",onClick:()=>{m(l=>{l.visible=!0,l.data=void 0})},children:t["table.createMember"]},"create")]})})]})}export{ne as default};
