import{au as s,at as u,r as d,j as e,bd as f,a as h,bb as p,an as E}from"./index.d7da5add.js";import{U as x}from"./index.0d353d2a.js";import{a as b}from"./index.a68f64a6.js";import"./index.e049f78f.js";import{u as C,c as A}from"./index.29ab0ab8.js";import{c as m}from"./convertNullToUndefined.a19d8223.js";import"./index.08b14342.js";import"./index.9fa425d5.js";import"./index.d1d405b6.js";const D="_carouselCreate_1ixp0_1";var c={carouselCreate:D};const w=s.TextArea;function S(a){const[l]=u.useForm(),[F,n]=d.exports.useState(!1);async function g(){l.validate().then(async i=>{n(!0);const t=m(i),o={...t,status:t.status?"true":"false",image:t.image&&t.image.length!==0?t.image[0].response.data.name:void 0,sort_index:t.sort_index===0?void 0:t.sort_index};let r;try{a.data?r=await C({...o,uuid:a.data.uuid}):r=await A(o),r.code===0&&(l.clearFields(),a.reload(),a.close())}finally{n(!1)}})}return d.exports.useEffect(()=>{if(a.data){const i=m(a.data);let t="";t=i.image,l.setFieldsValue({...i,status:i.status===1,image:i.image?[{uid:a,url:t,response:{data:{name:i.image.replace("/media/image?n=",""),path:i.image}}}]:[]})}else l.clearFields();return()=>{l.clearFields()}},[a.data]),e(f,{className:c.carouselCreate,width:500,visible:a.visible,title:a.data?"\u66F4\u65B0\u8F6E\u64AD\u56FE":"\u521B\u5EFA\u8F6E\u64AD\u56FE",onOk:g,onCancel:a.close,confirmLoading:F,okText:a.data?"\u4FDD\u5B58":"\u521B\u5EFA",unmountOnExit:!0,children:h(u,{form:l,children:[e(u.Item,{field:"image",triggerPropName:"fileList",wrapperCol:{span:24},rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247"}],children:e(x,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1,className:c.upload,style:{width:"100%"}})}),e(u.Item,{label:"\u8F6E\u64AD\u56FE\u6807\u9898",field:"title",children:e(s,{maxLength:100,placeholder:"\u8F6E\u64AD\u56FE\u6807\u9898"})}),e(u.Item,{label:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",field:"description",children:e(w,{maxLength:200,placeholder:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(u.Item,{label:"\u8DF3\u8F6C\u94FE\u63A5",field:"link",children:e(s,{maxLength:200,placeholder:"\u8BF7\u586B\u5199\u8DF3\u8F6C\u94FE\u63A5"})}),e(u.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:e(b,{options:a.target})}),e(u.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:4},children:e(p,{precision:0,hideControl:!0,maxLength:2})}),e(u.Item,{label:"\u542F\u7528\u72B6\u6001",field:"status",triggerPropName:"checked",children:e(E,{})})]})})}export{S as default};