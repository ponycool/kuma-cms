import{au as s,at as i,r as d,j as e,bd as f,a as h,bb as E,an as p}from"./index.92a17a4d.js";import{U as x}from"./index.baf13289.js";import{a as C}from"./index.92febe72.js";import"./index.4e9d13b6.js";import{u as b,c as A}from"./index.10aca1d1.js";import{c as m}from"./convertNullToUndefined.a19d8223.js";import"./index.1cdf6d0b.js";import"./index.ad200381.js";import"./index.1603004b.js";const D="_carouselCreate_1ixp0_1";var c={carouselCreate:D};const w=s.TextArea;function S(a){const[l]=i.useForm(),[F,n]=d.exports.useState(!1);async function g(){l.validate().then(async u=>{n(!0);const t=m(u),o={...t,status:t.status?"true":"false",image:t.image&&t.image.length!==0?t.image[0].response.data.name:void 0,sort_index:t.sort_index||1};let r;try{a.data?r=await b({...o,uuid:a.data.uuid}):r=await A(o),r.code===0&&(l.clearFields(),a.reload(),a.close())}finally{n(!1)}})}return d.exports.useEffect(()=>{if(a.data){const u=m(a.data);let t="";t=u.image,l.setFieldsValue({...u,status:u.status===1,image:u.image?[{uid:a,url:t,response:{data:{name:u.image.replace("/media/image?n=",""),path:u.image}}}]:[]})}else l.clearFields();return()=>{l.clearFields()}},[a.data]),e(f,{className:c.carouselCreate,width:500,visible:a.visible,title:a.data?"\u66F4\u65B0\u8F6E\u64AD\u56FE":"\u521B\u5EFA\u8F6E\u64AD\u56FE",onOk:g,onCancel:a.close,confirmLoading:F,okText:a.data?"\u4FDD\u5B58":"\u521B\u5EFA",unmountOnExit:!0,children:h(i,{form:l,children:[e(i.Item,{field:"image",triggerPropName:"fileList",wrapperCol:{span:24},rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247"}],children:e(x,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1,className:c.upload,style:{width:"100%"}})}),e(i.Item,{label:"\u8F6E\u64AD\u56FE\u6807\u9898",field:"title",children:e(s,{maxLength:100,placeholder:"\u8F6E\u64AD\u56FE\u6807\u9898"})}),e(i.Item,{label:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",field:"description",children:e(w,{maxLength:200,placeholder:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(i.Item,{label:"\u8DF3\u8F6C\u94FE\u63A5",field:"link",children:e(s,{maxLength:200,placeholder:"\u8BF7\u586B\u5199\u8DF3\u8F6C\u94FE\u63A5"})}),e(i.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:e(C,{options:a.target})}),e(i.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:4},initialValue:1,rules:[{validator(u,t){u&&u<1?t("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):t()}}],children:e(E,{precision:0,hideControl:!0,maxLength:2})}),e(i.Item,{label:"\u542F\u7528\u72B6\u6001",field:"status",triggerPropName:"checked",children:e(p,{})})]})})}export{S as default};
