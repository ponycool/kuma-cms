import{h as u,au as n,at as t,r as c,j as a,bc as g,a as p,ba as f,an as h}from"./index.e5b39058.js";import{U as b}from"./index.1c68587c.js";import{a as E}from"./index.42cf3415.js";import"./index.a109f8dc.js";function _(){return u.post("/api/carousel/query",{})}function x(e){return u.post("/api/carousel/create",e)}function C(e){return u.post("/api/carousel/update",e)}function D(e){return u.post("/api/carousel/delete",{uuid:e})}function L(e){return u.post("/api/carousel/enable",{uuid:e})}function j(e){return u.post("/api/carousel/disable",{uuid:e})}function S(e){return u.post("/api/carousel/detail",{uuid:e})}function N(){return u.post("/api/link/target",{})}const A="_carouselCreate_1ixp0_1";var d={carouselCreate:A};const y=n.TextArea;function k(e){const[l]=t.useForm(),[m,o]=c.exports.useState(!1);async function F(){l.validate().then(async i=>{o(!0);const r={...i,status:i.status?"true":"false",image:i.image&&i.image.length!==0?i.image[0].response.data.name:void 0};let s;try{e.data?s=await C({...r,uuid:e.data.uuid}):s=await x(r),s.code===0&&(l.clearFields(),e.reload(),e.close())}finally{o(!1)}})}return c.exports.useEffect(()=>{if(e.data){const{status:i,image:r}=e.data;let s="";s=r,l.setFieldsValue({...e.data,status:i===1,image:r?[{uid:e,url:s,response:{data:{name:r.replace("/media/image?n=",""),path:r}}}]:[]})}else l.clearFields();return()=>{l.clearFields()}},[e.data]),a(g,{className:d.carouselCreate,width:500,visible:e.visible,title:e.data?"\u66F4\u65B0\u8F6E\u64AD\u56FE":"\u521B\u5EFA\u8F6E\u64AD\u56FE",onOk:F,onCancel:e.close,confirmLoading:m,okText:e.data?"\u4FDD\u5B58":"\u521B\u5EFA",unmountOnExit:!0,children:p(t,{form:l,children:[a(t.Item,{field:"image",triggerPropName:"fileList",wrapperCol:{span:24},rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247"}],children:a(b,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1,className:d.upload,style:{width:"100%"}})}),a(t.Item,{label:"\u8F6E\u64AD\u56FE\u6807\u9898",field:"title",children:a(n,{maxLength:100,placeholder:"\u8F6E\u64AD\u56FE\u6807\u9898"})}),a(t.Item,{label:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",field:"description",children:a(y,{maxLength:200,placeholder:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),a(t.Item,{label:"\u8DF3\u8F6C\u94FE\u63A5",field:"link",children:a(n,{maxLength:200,placeholder:"\u8BF7\u586B\u5199\u8DF3\u8F6C\u94FE\u63A5"})}),a(t.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:a(E,{options:e.target})}),a(t.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:4},children:a(f,{precision:0,hideControl:!0,maxLength:2})}),a(t.Item,{label:"\u542F\u7528\u72B6\u6001",field:"status",triggerPropName:"checked",children:a(h,{})})]})})}var O=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{k as C,S as a,O as c,j as d,L as e,_ as q,D as r,N as t};
