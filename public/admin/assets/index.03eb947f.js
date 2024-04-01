import{an as a,am as u,r as n,j as e,B,a as r,M as F}from"./index.0d53f782.js";import{T as f}from"./index.3229a20b.js";import{C}from"./index.19da4270.js";import{C as A,s as g,a as b}from"./cache.26d13b7c.js";const o=a.TextArea,i=f.TabPane;function w(){const[s]=u.useForm(),[m,c]=n.exports.useState(!1),[h,d]=n.exports.useState(!1);async function p(){c(!0);const t=await g();s.setFieldsValue(t.data),c(!1)}function E(){s.validate().then(async t=>{for(const l in t)t[l]||delete t[l];d(!0);try{const l=await b(t);l.code===0&&F.success(l.message)}catch{}finally{d(!1)}}).catch(t=>{console.log(t)})}return n.exports.useEffect(()=>{p()},[]),e(C,{actions:[e(B,{type:"primary",loading:m,onClick:p,children:"\u5237\u65B0"},"refresh"),e(B,{type:"primary",loading:h,onClick:E,children:"\u4FDD\u5B58"},"update")],children:e(u,{form:s,layout:"horizontal",labelCol:{span:2},wrapperCol:{span:8},children:r(f,{children:[r(i,{title:"\u57FA\u7840\u8BBE\u7F6E",children:[e(u.Item,{label:"\u7AD9\u70B9\u540D\u79F0",field:"site_name",children:e(a,{})}),e(u.Item,{label:"\u7AD9\u70B9\u5730\u5740",field:"site_url",children:e(a,{})}),e(u.Item,{label:"\u7AD9\u70B9\u5173\u952E\u8BCD",field:"site_keywords",children:e(a,{})}),e(u.Item,{label:"\u7AD9\u70B9\u63CF\u8FF0",field:"site_description",children:e(o,{autoSize:!0})}),e(u.Item,{label:"\u670D\u52A1\u70ED\u7EBF",field:"service_phone",wrapperCol:{span:4},children:e(a,{})}),e(u.Item,{label:"\u670D\u52A1\u90AE\u7BB1",field:"service_email",wrapperCol:{span:4},rules:[{validator(t,l){t&&(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)||l("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"))}}],children:e(a,{})}),e(u.Item,{label:"\u7248\u6743",field:"copyright",children:e(a,{})})]},"\u57FA\u7840\u8BBE\u7F6E"),e(i,{title:"\u4E3B\u9898\u8BBE\u7F6E",children:e(u.Item,{label:"\u4E3B\u9898",field:"theme",labelCol:{span:1},wrapperCol:{span:4},children:e(a,{})})},"\u4E3B\u9898\u8BBE\u7F6E"),r(i,{title:"\u5907\u6848\u4FE1\u606F",children:[e(u.Item,{label:"ICP\u5907\u6848",field:"icp",children:e(a,{})}),e(u.Item,{label:"\u516C\u5B89\u5907\u6848",field:"police_record",children:e(a,{})})]},"\u5907\u6848\u4FE1\u606F"),r(i,{title:"\u811A\u672C\u4EE3\u7801",children:[e(u.Item,{label:"\u7EDF\u8BA1\u811A\u672C",field:"statistical_script",wrapperCol:{span:22},children:e(o,{autoSize:!0,style:{minHeight:180}})}),e(u.Item,{label:"\u5BA2\u670D\u811A\u672C",field:"service_script",wrapperCol:{span:22},children:e(o,{autoSize:!0,style:{minHeight:180}})})]},"\u811A\u672C\u4EE3\u7801"),e(i,{title:"\u7F13\u5B58\u8BBE\u7F6E",children:e(A,{})},"\u7F13\u5B58\u8BBE\u7F6E")]})})})}export{w as default};