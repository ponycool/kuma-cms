import{h as f,aj as u,u as C,av as n,r as h,j as t,K as I,B as c,a as p,aw as y,i as v,bc as j,F as w}from"./index.565c0e95.js";import{U as L}from"./index.4e393bdf.js";import{C as x}from"./index.46b3737f.js";import{P as D}from"./index.46e2b2ee.js";import{C as k,D as T}from"./DelPopconfirm.a22e41f3.js";import{D as A}from"./index.794d76ec.js";import"./index.30dc93de.js";import{c as b}from"./convertNullToUndefined.a19d8223.js";import{f as F}from"./formatDate.c584a859.js";import{i as _}from"./index.068ea4bb.js";import{i as q}from"./use-immer.module.c0731f0f.js";import{I as z}from"./image.76e90a85.js";import{I as B}from"./index.718a28f1.js";import"./index.8fef6e30.js";import"./index.78831216.js";import"./index.63ed0ae7.js";import"./index.7d830d00.js";import"./index.34eba074.js";import"./b-tween.es.064e2a03.js";function P(a){return f.post("/api/team/query",a)}function R(a){return f.post("/api/team/detail",a)}function S(a){return f.post("/api/team/create",a)}function W(a){return f.post("/api/team/update",a)}function E(a){return f.post("/api/team/delete",a)}const N=u.TextArea;function U(a){const e=C(_),[l]=n.useForm(),[d,s]=h.exports.useState(!1);async function g(){l.validate().then(async i=>{s(!0);const r=b(i);try{const o={...r,profile_image:r.profile_image&&r.profile_image.length!==0?r.profile_image[0].response.data.name:void 0,sort_index:r.sort_index||1,joined_date:r.joined_date};let m;a.data?m=await W({...o,uuid:a.data.uuid}):m=await S(o),m.code===0&&(a.reload(),a.close())}finally{s(!1)}}).catch(()=>{console.error(e["teamCreate.form.error.incomplete"])})}return h.exports.useEffect(()=>{if(a.data){const i=b(a.data),r=i.profile_image;l.setFieldsValue({...i,profile_image:i.profile_image?[{uid:i.profile_image,url:r,response:{data:{name:i.profile_image.replace("/media/image?n=",""),path:i.profile_image}}}]:[],joined_date:i.joined_date?F(new Date(i.joined_date)):void 0})}},[a.data]),h.exports.useEffect(()=>{a.visible===!1&&l.resetFields()},[l,a.visible]),t(x,{title:a.data?e["teamCreate.title.update"]:e["teamCreate.title.create"],extra:t(I,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>a.close()}),actions:[t(c,{type:"default",onClick:()=>a.close(),children:e["teamCreate.button.cancel"]},"cancel"),t(c,{type:"primary",loading:d,onClick:g,children:a.data?e["teamCreate.button.save"]:e["teamCreate.button.create"]},"submit")],children:p(n,{form:l,labelCol:{span:2},wrapperCol:{span:22},children:[t(n.Item,{label:e["teamCreate.form.name.label"],field:"name",rules:[{required:!0,message:e["teamCreate.form.name.required"]}],children:t(u,{maxLength:100,showWordLimit:!0,placeholder:e["teamCreate.form.name.placeholder"]})}),t(n.Item,{label:e["teamCreate.form.jobTitle.label"],field:"job_title",children:t(u,{maxLength:100,showWordLimit:!0,placeholder:e["teamCreate.form.jobTitle.placeholder"]})}),t(n.Item,{label:e["teamCreate.form.avatar.label"],field:"profile_image",triggerPropName:"fileList",children:t(L,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),t(n.Item,{label:e["teamCreate.form.introduction.label"],field:"introduction",children:t(N,{maxLength:200,placeholder:e["teamCreate.form.introduction.placeholder"],showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(n.Item,{label:e["teamCreate.form.phone.label"],field:"phone",children:t(u,{maxLength:100,showWordLimit:!0,placeholder:e["teamCreate.form.phone.placeholder"]})}),t(n.Item,{label:e["teamCreate.form.email.label"],field:"email",rules:[{validator(i,r){i&&!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(i)&&r(e["teamCreate.form.email.error"])}}],children:t(u,{maxLength:100,showWordLimit:!0,placeholder:e["teamCreate.form.email.placeholder"]})}),t(n.Item,{label:e["teamCreate.form.joinedDate.label"],field:"joined_date",wrapperCol:{span:2},children:t(A,{placeholder:e["teamCreate.form.joinedDate.placeholder"]})}),t(n.Item,{label:e["teamCreate.form.sortIndex.label"],field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(i,r){i&&i<1?r(e["teamCreate.form.sortIndex.error"]):r()}}],children:t(y,{maxLength:10,hideControl:!0,precision:0,placeholder:e["teamCreate.form.sortIndex.placeholder"]})})]})})}function ne(){const a=C(v),e=C(_),l=h.exports.useRef(),[d,s]=q({visible:!1,close:function(){s(r=>{r.visible=!1})}});async function g(r){try{const o=await R({uuid:r});o.code===0&&s(m=>{m.data=o.data,m.visible=!0})}catch{}}const i=[{title:e["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:e["columns.name"],dataIndex:"name",ellipsis:!0},{title:e["columns.avatar"],width:150,dataIndex:"profile_image",render:(r,o)=>{if(o.profile_image){let m="";return m=o.profile_image,t(z,{width:40,height:40,src:m})}else return e["columns.noAvatar"]}},{title:e["columns.position"],dataIndex:"job_title"},{title:e["columns.introduction"],dataIndex:"introduction",ellipsis:!0},{title:e["columns.email"],dataIndex:"email",ellipsis:!0},{title:e["columns.phone"],dataIndex:"phone",ellipsis:!0},{title:e["columns.joinedAt"],dataIndex:"joined_date"},{title:e["columns.action"],width:280,render:(r,o)=>p(k,{children:[p(c,{type:"text",onClick:()=>g(o.uuid),children:[t(j,{}),e["columns.action.edit"]]}),t(T,{reqDel:E,params:{uuid:o.uuid},reload:()=>l.current.reload(),children:p(c,{type:"text",children:[t(B,{}),e["columns.action.delete"]]})})]})}];return p(w,{children:[d.visible&&t(U,{visible:d.visible,data:d.data,close:()=>d.close(),reload:()=>l.current.reload()}),t(x,{style:{display:d.visible?"none":void 0},children:t(D,{ref:l,request:P,columns:i,actionBarRender:[t(c,{type:"primary",onClick:()=>l.current.reload(),children:a["table.refresh"]},"refresh")],toolBarRender:[t(c,{type:"primary",onClick:()=>{s(r=>{r.visible=!0,r.data=void 0})},children:a["table.createMember"]},"create")]})})]})}export{ne as default};
