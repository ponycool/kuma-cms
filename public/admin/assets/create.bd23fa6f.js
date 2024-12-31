import{u as I,r as c,bf as y,av as i,a as o,j as e,B as u,K as T,aj as d,af as L,aw as D,am as N,bb as h}from"./index.2a82b82e.js";import{T as m}from"./index.e0f944d2.js";import{U as C}from"./index.51865801.js";import{D as f}from"./index.35187e3a.js";import"./index.808c64b3.js";import{C as P}from"./index.e47012e0.js";import{l as j,u as k,c as S}from"./index.eb86e2a6.js";import{c as b}from"./convertNullToUndefined.a19d8223.js";import{M as _}from"./index.f69ef6a9.js";import"./index.d5fe21b4.js";import"./index.0052d6aa.js";import"./index.bb0e087b.js";import"./index.7c4d5b79.js";import"./index.39209ce0.js";import"./b-tween.es.064e2a03.js";function G(l){const a=I(j),{lang:v}=c.exports.useContext(y),[s]=i.useForm(),[w,p]=c.exports.useState(!1);async function x(){s.validate().then(async t=>{p(!0);const r=b(t);try{const g={...r,cover_image:r.cover_image&&r.cover_image.length!==0?r.cover_image[0].response.data.name:void 0,poster_image:r.poster_image&&r.poster_image.length!==0?r.poster_image[0].response.data.name:void 0,is_active:r.is_active?"true":"false",sort_index:r.sort_index||1,status:r.status};let n;l.data?n=await k({...g,uuid:l.data.uuid}):n=await S(g),n.code===0&&(l.reload(),l.close())}finally{p(!1)}}).catch(t=>{console.error(t)})}return c.exports.useEffect(()=>{if(l.data){const t=b(l.data);let r="";r=t.cover_image,s.setFieldsValue({...t,status:t.status,cover_image:t.cover_image?[{uid:t.cover_image,url:r,response:{data:{name:t.cover_image.replace("/media/image?n=",""),path:t.cover_image}}}]:[],poster_image:t.poster_image?[{uid:t.poster_image,url:r,response:{data:{name:t.poster_image.replace("/media/image?n=",""),path:t.poster_image}}}]:[]})}},[l.data]),o(P,{style:{position:"relative"},actions:[e(u,{type:"default",onClick:()=>l.close(),children:a["cardCreate.button.cancel"]},"cancel"),e(u,{type:"primary",loading:w,onClick:x,children:l.data?a["cardCreate.button.save"]:a["cardCreate.button.create"]},"submit")],children:[e(T,{style:{cursor:"pointer",color:"#333",fontSize:"16px",position:"absolute",right:"16px",zIndex:100},onClick:()=>l.close()}),e(i,{form:s,labelCol:{span:2},wrapperCol:{span:22},children:o(m,{type:"rounded",children:[o(m.TabPane,{title:a["cardCreate.tabTitle.basicInformation"],children:[e(i.Item,{label:a["cardCreate.label.title"],field:"name",rules:[{required:!0,message:a["cardCreate.message.titleRequired"]}],wrapperCol:{span:8},children:e(d,{maxLength:100,showWordLimit:!0,placeholder:a["cardCreate.placeholder.title"]})}),e(i.Item,{label:a["cardCreate.label.cover"],field:"cover_image",triggerPropName:"fileList",children:e(C,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(i.Item,{label:a["cardCreate.label.summary"],field:"summary",wrapperCol:{span:8},children:e(d.TextArea,{maxLength:200,showWordLimit:!0,rows:2,placeholder:a["cardCreate.placeholder.summary"]})}),e(i.Item,{label:a["cardCreate.label.location"],field:"location",wrapperCol:{span:4},children:e(d,{maxLength:50,placeholder:a["cardCreate.placeholder.location"]})}),e(i.Item,{label:a["cardCreate.label.startDatetime"],field:"start_datetime",wrapperCol:{span:4},children:e(f,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}})}),e(i.Item,{label:a["cardCreate.label.endDatetime"],field:"end_datetime",wrapperCol:{span:4},children:e(f,{showTime:!0,format:"YYYY-MM-DD HH:mm:ss",style:{width:"100%"}})}),e(i.Item,{label:a["cardCreate.label.status"],field:"status",wrapperCol:{span:2},children:e(L,{options:Object.entries(l.status).map(([t,r])=>({label:v==="zh-CN"?r:t,value:t})),placeholder:a["cardCreate.placeholder.status"]})}),e(i.Item,{label:a["cardCreate.label.sortIndex"],field:"sort_index",wrapperCol:{span:1},rules:[{validator(t,r){t&&t<1?r(a["cardCreate.message.sortIndexRequired"]):r()}}],children:e(D,{maxLength:10,hideControl:!0,precision:0,placeholder:a["cardCreate.placeholder.sortIndex"]})}),e(i.Item,{label:a["cardCreate.label.activityStatus"],field:"is_active",wrapperCol:{span:2},triggerPropName:"checked",initialValue:!1,children:e(N,{})}),e(h,{orientation:"left",children:a["cardCreate.label.content"]}),e(i.Item,{field:"content",wrapperCol:{span:24},triggerPropName:"html",trigger:"getContent",rules:[{required:!0},{validator(t,r){if(t==="<p><br></p>")return r(a["cardCreate.message.contentRequired"]);r()}}],children:e(_,{})})]},"1"),o(m.TabPane,{title:a["cardCreate.tabTitle.posterSetting"],children:[e(i.Item,{label:a["cardCreate.label.posterImage"],field:"poster_image",triggerPropName:"fileList",children:e(C,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(h,{orientation:"left",children:a["cardCreate.label.posterContent"]}),e(i.Item,{field:"poster_content",wrapperCol:{span:24},triggerPropName:"html",trigger:"getContent",children:e(_,{})})]},"2")]})})]})}export{G as default};