import{an as i,am as u,r as l,j as e,B as h,a as r,M as D}from"./index.ee837804.js";import{T as f}from"./index.825cbc47.js";import{S as I}from"./index.1e676bc1.js";import"./index.1b443c87.js";import{C as x}from"./index.9bf4464a.js";import{C as S,s as w,t as T,a as _}from"./cache.db2eaf7c.js";const c=i.TextArea,s=f.TabPane;function Z(){const[n]=u.useForm(),[E,d]=l.exports.useState(!1),[F,p]=l.exports.useState(!1),[m,C]=l.exports.useState("\u57FA\u7840\u8BBE\u7F6E"),[A,b]=l.exports.useState([]);async function B(){d(!0);const t=await w();n.setFieldsValue(t.data),d(!1)}async function g(){try{const t=await T();if(t.code===0){const a=t.data.list.map(o=>({label:o,value:o}));b(a)}}catch{}}function y(){n.validate().then(async t=>{for(const a in t)t[a]||delete t[a];p(!0);try{const a=await _(t);a.code===0&&D.success(a.message)}catch{}finally{p(!1)}}).catch(t=>{console.log(t)})}return l.exports.useEffect(()=>{B(),g()},[]),e(x,{actions:m==="\u7F13\u5B58\u8BBE\u7F6E"?[]:[e(h,{type:"primary",loading:E,onClick:B,children:"\u5237\u65B0"},"refresh"),e(h,{type:"primary",loading:F,onClick:y,children:"\u4FDD\u5B58"},"update")],children:e(u,{form:n,layout:"horizontal",labelCol:{span:2},wrapperCol:{span:8},children:r(f,{activeTab:m,onChange:C,children:[r(s,{title:"\u57FA\u7840\u8BBE\u7F6E",children:[e(u.Item,{label:"\u7AD9\u70B9\u540D\u79F0",field:"site_name",children:e(i,{})}),e(u.Item,{label:"\u7AD9\u70B9\u5730\u5740",field:"site_url",children:e(i,{})}),e(u.Item,{label:"\u7AD9\u70B9\u5173\u952E\u8BCD",field:"site_keywords",children:e(i,{})}),e(u.Item,{label:"\u7AD9\u70B9\u63CF\u8FF0",field:"site_description",children:e(c,{autoSize:!0})}),e(u.Item,{label:"\u670D\u52A1\u70ED\u7EBF",field:"service_phone",wrapperCol:{span:4},children:e(i,{})}),e(u.Item,{label:"\u670D\u52A1\u90AE\u7BB1",field:"service_email",wrapperCol:{span:4},rules:[{validator(t,a){t&&(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)||a("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"))}}],children:e(i,{})}),e(u.Item,{label:"\u7248\u6743",field:"copyright",children:e(i,{})})]},"\u57FA\u7840\u8BBE\u7F6E"),e(s,{title:"\u4E3B\u9898\u8BBE\u7F6E",children:e(u.Item,{label:"\u4E3B\u9898",field:"theme",labelCol:{span:1},wrapperCol:{span:4},children:e(I,{options:A})})},"\u4E3B\u9898\u8BBE\u7F6E"),r(s,{title:"\u5907\u6848\u4FE1\u606F",children:[e(u.Item,{label:"ICP\u5907\u6848",field:"icp",children:e(i,{})}),e(u.Item,{label:"\u516C\u5B89\u5907\u6848",field:"police_record",children:e(i,{})})]},"\u5907\u6848\u4FE1\u606F"),r(s,{title:"\u811A\u672C\u4EE3\u7801",children:[e(u.Item,{label:"\u7EDF\u8BA1\u811A\u672C",field:"statistical_script",wrapperCol:{span:22},children:e(c,{autoSize:!0,style:{minHeight:180}})}),e(u.Item,{label:"\u5BA2\u670D\u811A\u672C",field:"service_script",wrapperCol:{span:22},children:e(c,{autoSize:!0,style:{minHeight:180}})})]},"\u811A\u672C\u4EE3\u7801"),e(s,{title:"\u7F13\u5B58\u8BBE\u7F6E",children:e(S,{})},"\u7F13\u5B58\u8BBE\u7F6E")]})})})}export{Z as default};
