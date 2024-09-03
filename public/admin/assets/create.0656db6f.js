import{aj as i,av as u,r as m,u as p,j as a,bd as b,a as g,af as h,aw as x,am as E}from"./index.565c0e95.js";import{U as k}from"./index.4e393bdf.js";import{u as I,c as D}from"./index.0f2f44fd.js";import{c as d}from"./convertNullToUndefined.a19d8223.js";const v="_carouselCreate_1ixp0_1";var C={carouselCreate:v};const B={"en-US":{"columns.carousel":"Carousel",noCover:"No Cover","columns.title":"Title","columns.description":"Description","columns.link":"Link","columns.status":"Status","columns.status.enable":"Enable","columns.status.disable":"Disable","columns.options":"Options","columns.action":"Action","columns.action.edit":"Edit","columns.action.enable":"Enable","columns.action.disable":"Disable","columns.action.delete":"Delete","carouselCreate.form.image.required":"Please upload the image","carouselCreate.title.create":"Create Carousel","carouselCreate.title.update":"Update Carousel","carouselCreate.button.create":"Create","carouselCreate.button.save":"Save","carouselCreate.form.title.label":"Title","carouselCreate.form.title.placeholder":"Please enter the title","carouselCreate.form.description.label":"Description","carouselCreate.form.description.placeholder":"Please enter the description","carouselCreate.form.link.label":"Link","carouselCreate.form.link.placeholder":"Please enter the link","carouselCreate.form.target.label":"Target","carouselCreate.form.target.placeholder":"Please select the target","carouselCreate.form.sortIndex.label":"Sort","carouselCreate.form.sortIndex.required":"Sort must be greater than 0","carouselCreate.form.sortIndex.placeholder":"Please enter the sort","carouselCreate.form.status.label":"Status"},"zh-CN":{"columns.carousel":"\u8F6E\u64AD\u56FE",noCover:"\u6682\u65E0\u5C01\u9762","columns.title":"\u6807\u9898","columns.description":"\u63CF\u8FF0","columns.link":"\u8DF3\u8F6C\u94FE\u63A5","columns.status":"\u542F\u7528\u72B6\u6001","columns.status.enable":"\u542F\u7528","columns.status.disable":"\u7981\u7528","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","columns.action.enable":"\u542F\u7528","columns.action.disable":"\u7981\u7528","columns.action.delete":"\u5220\u9664","carouselCreate.title.create":"\u521B\u5EFA\u8F6E\u64AD\u56FE","carouselCreate.title.update":"\u66F4\u65B0\u8F6E\u64AD\u56FE","carouselCreate.button.create":"\u521B\u5EFA","carouselCreate.button.save":"\u4FDD\u5B58","carouselCreate.form.image.required":"\u8BF7\u4E0A\u4F20\u56FE\u7247","carouselCreate.form.title.label":"\u6807\u9898","carouselCreate.form.title.placeholder":"\u8BF7\u8F93\u5165\u6807\u9898","carouselCreate.form.description.label":"\u63CF\u8FF0","carouselCreate.form.description.placeholder":"\u8BF7\u8F93\u5165\u63CF\u8FF0","carouselCreate.form.link.label":"\u8DF3\u8F6C\u94FE\u63A5","carouselCreate.form.link.placeholder":"\u8BF7\u8F93\u5165\u8DF3\u8F6C\u94FE\u63A5","carouselCreate.form.target.label":"\u8DF3\u8F6C\u65B9\u5F0F","carouselCreate.form.target.placeholder":"\u8BF7\u9009\u62E9\u8DF3\u8F6C\u65B9\u5F0F","carouselCreate.form.sortIndex.label":"\u6392\u5E8F","carouselCreate.form.sortIndex.required":"\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0","carouselCreate.form.sortIndex.placeholder":"\u8BF7\u8F93\u5165\u6392\u5E8F","carouselCreate.form.status.label":"\u542F\u7528\u72B6\u6001"}},S=i.TextArea;function A(t){const[o]=u.useForm(),[f,c]=m.exports.useState(!1),e=p(B);async function F(){o.validate().then(async l=>{c(!0);const r=d(l),n={...r,status:r.status?"true":"false",image:r.image&&r.image.length!==0?r.image[0].response.data.name:void 0,sort_index:r.sort_index||1};let s;try{t.data?s=await I({...n,uuid:t.data.uuid}):s=await D(n),s.code===0&&(o.clearFields(),t.reload(),t.close())}finally{c(!1)}})}return m.exports.useEffect(()=>{if(t.data){const l=d(t.data);let r="";r=l.image,o.setFieldsValue({...l,status:l.status===1,image:l.image?[{uid:t,url:r,response:{data:{name:l.image.replace("/media/image?n=",""),path:l.image}}}]:[]})}else o.clearFields();return()=>{o.clearFields()}},[t.data]),a(b,{className:C.carouselCreate,width:500,visible:t.visible,title:t.data?e["carouselCreate.title.update"]:e["carouselCreate.title.create"],onOk:F,onCancel:t.close,confirmLoading:f,okText:t.data?e["carouselCreate.button.save"]:e["carouselCreate.button.create"],unmountOnExit:!0,children:g(u,{form:o,children:[a(u.Item,{field:"image",triggerPropName:"fileList",wrapperCol:{span:24},rules:[{required:!0,message:e["carouselCreate.form.image.required"]}],children:a(k,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1,className:C.upload,style:{width:"100%"}})}),a(u.Item,{label:e["carouselCreate.form.title.label"],field:"title",children:a(i,{maxLength:100,placeholder:e["carouselCreate.form.title.placeholder"]})}),a(u.Item,{label:e["carouselCreate.form.description.label"],field:"description",children:a(S,{maxLength:200,placeholder:e["carouselCreate.form.description.placeholder"],showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),a(u.Item,{label:e["carouselCreate.form.link.label"],field:"link",children:a(i,{maxLength:200,placeholder:e["carouselCreate.form.link.placeholder"]})}),a(u.Item,{label:e["carouselCreate.form.target.label"],field:"target",initialValue:"_blank",children:a(h,{options:t.target,placeholder:e["carouselCreate.form.target.placeholder"]})}),a(u.Item,{label:e["carouselCreate.form.sortIndex.label"],field:"sort_index",wrapperCol:{span:4},initialValue:1,rules:[{validator(l,r){l&&l<1?r(e["carouselCreate.form.sortIndex.required"]):r()}}],children:a(x,{precision:0,hideControl:!0,maxLength:2,placeholder:e["carouselCreate.form.sortIndex.placeholder"]})}),a(u.Item,{label:e["carouselCreate.form.status.label"],field:"status",triggerPropName:"checked",children:a(E,{})})]})})}var P=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));export{A as C,P as c,B as i};
