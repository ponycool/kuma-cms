import{h,aj as g,u as C,av as s,r as p,j as a,K as w,B as c,a as u,M as x,i as v,bc as I,F as k}from"./index.565c0e95.js";import{U as L}from"./index.4e393bdf.js";import{C as b}from"./index.46b3737f.js";import{P as _}from"./index.46e2b2ee.js";import{C as D,D as z}from"./DelPopconfirm.a22e41f3.js";import{D as j}from"./index.794d76ec.js";import"./index.30dc93de.js";import{c as q}from"./convertNullToUndefined.a19d8223.js";import{f as F}from"./formatDate.c584a859.js";import{i as y}from"./index.068ea4bb.js";import{i as T}from"./use-immer.module.c0731f0f.js";import{I as B}from"./image.76e90a85.js";import{I as P}from"./index.718a28f1.js";import"./index.8fef6e30.js";import"./index.78831216.js";import"./index.63ed0ae7.js";import"./index.7d830d00.js";import"./index.34eba074.js";import"./b-tween.es.064e2a03.js";function S(e){return h.post("/api/honor/query",e)}function E(e){return h.post("/api/honor/detail",e)}function H(e){return h.post("/api/honor/create",e)}function N(e){return h.post("/api/honor/update",e)}function R(e){return h.post("/api/honor/delete",e)}const U=g.TextArea;function A(e){const t=C(y),[n]=s.useForm(),[l,d]=p.exports.useState(!1);async function f(){n.validate().then(async r=>{d(!0);try{const o={...r,image:r.image&&r.image.length!==0?r.image[0].response.data.name:void 0};let i;e.data?i=await N({...o,uuid:e.data.uuid}):i=await H(o),i.code===0&&(e.reload(),e.close())}finally{d(!1)}}).catch(r=>{if(r.errors)for(const o in r.errors)x.error(r.errors[o].message)})}return p.exports.useEffect(()=>{if(e.data){const r=q(e.data),o=r.image;n.setFieldsValue({...r,image:r.image?[{uid:r.image,url:o,response:{data:{name:r.image.replace("/media/image?n=",""),path:r.image}}}]:[],award_date:r.award_date?F(new Date(r.award_date)):void 0})}},[e.data]),p.exports.useEffect(()=>{e.visible===!1&&n.resetFields()},[n,e.visible]),a(b,{title:e.data?t["honorCreate.title.update"]:t["honorCreate.title.create"],extra:a(w,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[a(c,{type:"default",onClick:()=>e.close(),children:t["honorCreate.button.cancel"]},"cancel"),a(c,{type:"primary",loading:l,onClick:f,children:e.data?t["honorCreate.button.save"]:t["honorCreate.button.create"]},"submit")],children:u(s,{form:n,labelCol:{span:2},wrapperCol:{span:22},children:[a(s.Item,{label:t["honorCreate.form.title.label"],field:"title",rules:[{required:!0,message:t["honorCreate.form.title.required"]}],children:a(g,{maxLength:100,showWordLimit:!0,placeholder:t["honorCreate.form.title.placeholder"]})}),a(s.Item,{label:t["honorCreate.form.image.label"],field:"image",triggerPropName:"fileList",children:a(L,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),a(s.Item,{label:t["honorCreate.form.organization.label"],field:"award_organization",wrapperCol:{span:2},children:a(g,{maxLength:100,placeholder:t["honorCreate.form.organization.placeholder"]})}),a(s.Item,{label:t["honorCreate.form.date.label"],field:"award_date",wrapperCol:{span:2},children:a(j,{placeholder:t["honorCreate.form.date.placeholder"]})}),a(s.Item,{label:t["honorCreate.form.description.label"],field:"description",children:a(U,{maxLength:200,placeholder:t["honorCreate.form.description.placeholder"],showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})]})})}function le(){const e=C(v),t=C(y),n=p.exports.useRef(),[l,d]=T({visible:!1,close:function(){d(o=>{o.visible=!1})}});async function f(o){try{const i=await E({uuid:o});i.code===0&&d(m=>{m.data=i.data,m.visible=!0})}catch{}}const r=[{title:t["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:t["columns.title"],dataIndex:"title",ellipsis:!0},{title:t["columns.image"],width:150,dataIndex:"image",render:(o,i)=>{if(i.image){let m="";return m=i.image,a(B,{width:40,height:40,src:m})}else return t["columns.noImage"]}},{title:t["columns.awardOrganization"],dataIndex:"award_organization"},{title:t["columns.awardDate"],dataIndex:"award_date"},{title:t["columns.action"],width:280,render:(o,i)=>u(D,{children:[u(c,{type:"text",onClick:()=>f(i.uuid),children:[a(I,{}),t["columns.action.edit"]]}),a(z,{reqDel:R,params:{uuid:i.uuid},reload:()=>n.current.reload(),children:u(c,{type:"text",children:[a(P,{}),t["columns.action.delete"]]})})]})}];return u(k,{children:[l.visible&&a(A,{visible:l.visible,data:l.data,close:()=>l.close(),reload:()=>n.current.reload()}),a(b,{style:{display:l.visible?"none":void 0},children:a(_,{ref:n,request:S,columns:r,actionBarRender:[a(c,{type:"primary",onClick:()=>n.current.reload(),children:e["table.refresh"]},"refresh")],toolBarRender:[a(c,{type:"primary",onClick:()=>{d(o=>{o.visible=!0,o.data=void 0})},children:e["table.addHonors"]},"create")]})})]})}export{le as default};
