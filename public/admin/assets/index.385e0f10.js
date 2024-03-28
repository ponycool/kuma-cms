import{h,ae as a,ad as t,r as s,j as e,B as f,a as r,M as A}from"./index.e4d8ed9f.js";import{T as m}from"./index.9ed6acf7.js";import{C}from"./index.7ade6558.js";function g(){return h.post("/api/setting",{})}function b(i){return h.post("/api/setting/update",i)}const o=a.TextArea,n=m.TabPane;function _(){const[i]=t.useForm(),[B,c]=s.exports.useState(!1),[E,d]=s.exports.useState(!1);async function p(){c(!0);const u=await g();i.setFieldsValue(u.data),c(!1)}function F(){i.validate().then(async u=>{for(const l in u)u[l]||delete u[l];d(!0);try{const l=await b(u);l.code===0&&A.success(l.message)}catch{}finally{d(!1)}}).catch(u=>{console.log(u)})}return s.exports.useEffect(()=>{p()},[]),e(C,{actions:[e(f,{type:"primary",loading:B,onClick:p,children:"\u5237\u65B0"},"reload"),e(f,{type:"primary",loading:E,onClick:F,children:"\u4FDD\u5B58"},"update")],children:e(t,{form:i,layout:"horizontal",labelCol:{span:2},wrapperCol:{span:8},children:r(m,{children:[r(n,{title:"\u57FA\u7840\u8BBE\u7F6E",children:[e(t.Item,{label:"\u7AD9\u70B9\u540D\u79F0",field:"site_name",children:e(a,{})}),e(t.Item,{label:"\u7AD9\u70B9\u5730\u5740",field:"site_url",children:e(a,{})}),e(t.Item,{label:"\u7AD9\u70B9\u5173\u952E\u8BCD",field:"site_keywords",children:e(a,{})}),e(t.Item,{label:"\u7AD9\u70B9\u63CF\u8FF0",field:"site_description",children:e(o,{autoSize:!0})}),e(t.Item,{label:"\u670D\u52A1\u70ED\u7EBF",field:"service_phone",wrapperCol:{span:4},children:e(a,{})}),e(t.Item,{label:"\u670D\u52A1\u90AE\u7BB1",field:"service_email",wrapperCol:{span:4},rules:[{validator(u,l){u&&(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u)||l("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"))}}],children:e(a,{})}),e(t.Item,{label:"\u7248\u6743",field:"copyright",children:e(a,{})})]},"\u57FA\u7840\u8BBE\u7F6E"),e(n,{title:"\u4E3B\u9898\u8BBE\u7F6E",children:e(t.Item,{label:"\u4E3B\u9898",field:"theme",labelCol:{span:1},wrapperCol:{span:4},children:e(a,{})})},"\u4E3B\u9898\u8BBE\u7F6E"),r(n,{title:"\u5907\u6848\u4FE1\u606F",children:[e(t.Item,{label:"ICP\u5907\u6848",field:"icp",children:e(a,{})}),e(t.Item,{label:"\u516C\u5B89\u5907\u6848",field:"police_record",children:e(a,{})})]},"\u5907\u6848\u4FE1\u606F"),r(n,{title:"\u811A\u672C\u4EE3\u7801",children:[e(t.Item,{label:"\u7EDF\u8BA1\u811A\u672C",field:"statistical_script",wrapperCol:{span:22},children:e(o,{autoSize:!0,style:{minHeight:180}})}),e(t.Item,{label:"\u5BA2\u670D\u811A\u672C",field:"service_script",wrapperCol:{span:22},children:e(o,{autoSize:!0,style:{minHeight:180}})})]},"\u811A\u672C\u4EE3\u7801")]})})})}export{_ as default};
