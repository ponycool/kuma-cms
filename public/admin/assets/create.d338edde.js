import{ae as s,au as i,r as d,j as e,bd as f,a as h,av as E,ao as p}from"./index.2132e63f.js";import{U as x}from"./index.6a1ba1e8.js";import{S as C}from"./index.336a555d.js";import"./index.2ede2469.js";import{u as A,c as D}from"./index.493de602.js";import{c as m}from"./convertNullToUndefined.a19d8223.js";import"./index.939c748a.js";import"./index.87707fcb.js";import"./index.853d7a04.js";const b="_carouselCreate_1ixp0_1";var c={carouselCreate:b};const w=s.TextArea;function j(a){const[l]=i.useForm(),[F,n]=d.exports.useState(!1);async function g(){l.validate().then(async u=>{n(!0);const t=m(u),o={...t,status:t.status?"true":"false",image:t.image&&t.image.length!==0?t.image[0].response.data.name:void 0,sort_index:t.sort_index||1};let r;try{a.data?r=await A({...o,uuid:a.data.uuid}):r=await D(o),r.code===0&&(l.clearFields(),a.reload(),a.close())}finally{n(!1)}})}return d.exports.useEffect(()=>{if(a.data){const u=m(a.data);let t="";t=u.image,l.setFieldsValue({...u,status:u.status===1,image:u.image?[{uid:a,url:t,response:{data:{name:u.image.replace("/media/image?n=",""),path:u.image}}}]:[]})}else l.clearFields();return()=>{l.clearFields()}},[a.data]),e(f,{className:c.carouselCreate,width:500,visible:a.visible,title:a.data?"\u66F4\u65B0\u8F6E\u64AD\u56FE":"\u521B\u5EFA\u8F6E\u64AD\u56FE",onOk:g,onCancel:a.close,confirmLoading:F,okText:a.data?"\u4FDD\u5B58":"\u521B\u5EFA",unmountOnExit:!0,children:h(i,{form:l,children:[e(i.Item,{field:"image",triggerPropName:"fileList",wrapperCol:{span:24},rules:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247"}],children:e(x,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1,className:c.upload,style:{width:"100%"}})}),e(i.Item,{label:"\u8F6E\u64AD\u56FE\u6807\u9898",field:"title",children:e(s,{maxLength:100,placeholder:"\u8F6E\u64AD\u56FE\u6807\u9898"})}),e(i.Item,{label:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",field:"description",children:e(w,{maxLength:200,placeholder:"\u8F6E\u64AD\u56FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(i.Item,{label:"\u8DF3\u8F6C\u94FE\u63A5",field:"link",children:e(s,{maxLength:200,placeholder:"\u8BF7\u586B\u5199\u8DF3\u8F6C\u94FE\u63A5"})}),e(i.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:e(C,{options:a.target})}),e(i.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:4},initialValue:1,rules:[{validator(u,t){u&&u<1?t("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):t()}}],children:e(E,{precision:0,hideControl:!0,maxLength:2})}),e(i.Item,{label:"\u542F\u7528",field:"status",triggerPropName:"checked",children:e(p,{})})]})})}export{j as default};
