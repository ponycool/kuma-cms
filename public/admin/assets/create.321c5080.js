import{h as r,au as n,at as u,r as d,j as a,bc as p,a as h,ba as b,an as E}from"./index.4302d897.js";import{U as x}from"./index.9206a7b8.js";import{a as C}from"./index.76dc39d4.js";import"./index.832be29c.js";import{c as m}from"./convertNullToUndefined.a19d8223.js";function j(){return r.post("/api/carousel/query",{})}function A(e){return r.post("/api/carousel/create",e)}function D(e){return r.post("/api/carousel/update",e)}function N(e){return r.post("/api/carousel/delete",{uuid:e})}function S(e){return r.post("/api/carousel/enable",{uuid:e})}function T(e){return r.post("/api/carousel/disable",{uuid:e})}function O(e){return r.post("/api/carousel/detail",{uuid:e})}function q(){return r.post("/api/link/target",{})}const y="_carouselCreate_1ixp0_1";var F={carouselCreate:y};const _=n.TextArea;function v(e){const[l]=u.useForm(),[g,o]=d.exports.useState(!1);async function f(){l.validate().then(async i=>{o(!0);const t=m(i),c={...t,status:t.status?"true":"false",image:t.image&&t.image.length!==0?t.image[0].response.data.name:void 0,sort_index:t.sort_index===0?void 0:t.sort_index};let s;try{e.data?s=await D({...c,uuid:e.data.uuid}):s=await A(c),s.code===0&&(l.clearFields(),e.reload(),e.close())}finally{o(!1)}})}return d.exports.useEffect(()=>{if(e.data){const i=m(e.data);let t="";t=i.image,l.setFieldsValue({...i,status:i.status===1,image:i.image?[{uid:e,url:t,response:{data:{name:i.image.replace("/media/image?n=",""),path:i.image}}}]:[]})}else l.clearFields();return()=>{l.clearFields()}},[e.data]),a(p,{className:F.carouselCreate,width:500,visible:e.visible,title:e.data?"\u66F4\u65B0\u8F6E\u64AD\u56FE":"\u521B\u5EFA\u8F6E\u64AD\u56FE",onOk:f,onCancel:e.close,confirmLoading:g,okText:e.data?"\u4FDD\u5B58":"\u521B\u5EFA",unmountOnExit:!0,children:h(u,{form:l,children:[a(u.Item,{field:"image",triggerPropName:"fileList",wrapperCol:{span:24},rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247"}],children:a(x,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1,className:F.upload,style:{width:"100%"}})}),a(u.Item,{label:"\u8F6E\u64AD\u56FE\u6807\u9898",field:"title",children:a(n,{maxLength:100,placeholder:"\u8F6E\u64AD\u56FE\u6807\u9898"})}),a(u.Item,{label:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",field:"description",children:a(_,{maxLength:200,placeholder:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),a(u.Item,{label:"\u8DF3\u8F6C\u94FE\u63A5",field:"link",children:a(n,{maxLength:200,placeholder:"\u8BF7\u586B\u5199\u8DF3\u8F6C\u94FE\u63A5"})}),a(u.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:a(C,{options:e.target})}),a(u.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:4},children:a(b,{precision:0,hideControl:!0,maxLength:2})}),a(u.Item,{label:"\u542F\u7528\u72B6\u6001",field:"status",triggerPropName:"checked",children:a(E,{})})]})})}var P=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"}));export{v as C,O as a,P as c,T as d,S as e,j as q,N as r,q as t};
