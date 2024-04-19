import{au as l,at as u,r as s,j as e,B as m,a as r,M as S}from"./index.dd8c1d81.js";import{T as f}from"./index.cf1d34ef.js";import{a as E}from"./index.d608e5f0.js";import"./index.92fac09f.js";import{C as T}from"./index.529d114d.js";import{C as _,s as v,t as L,l as z,a as k}from"./cache.c65b282a.js";const c=l.TextArea,n=f.TabPane;function U(){const[o]=u.useForm(),[g,d]=s.exports.useState(!1),[F,p]=s.exports.useState(!1),[B,A]=s.exports.useState("\u57FA\u7840\u8BBE\u7F6E"),[C,b]=s.exports.useState([]),[y,D]=s.exports.useState([]);async function h(){d(!0);const t=await v();o.setFieldsValue(t.data),d(!1)}async function I(){try{const t=await L();if(t.code===0){const a=t.data.list.map(i=>({label:i,value:i}));b(a)}}catch{}}async function x(){try{const t=await z();if(t.code===0){const a=t.data.language.map(i=>({label:i,value:i}));D(a)}}catch{}}function w(){o.validate().then(async t=>{for(const a in t)t[a]||delete t[a];p(!0);try{const a=await k(t);a.code===0&&S.success(a.message)}catch{}finally{p(!1)}}).catch(t=>{console.log(t)})}return s.exports.useEffect(()=>{h(),I(),x()},[]),e(T,{actions:B==="\u7F13\u5B58\u8BBE\u7F6E"?[]:[e(m,{type:"primary",loading:g,onClick:h,children:"\u5237\u65B0"},"refresh"),e(m,{type:"primary",loading:F,onClick:w,children:"\u4FDD\u5B58"},"update")],children:e(u,{form:o,layout:"horizontal",labelCol:{span:2},wrapperCol:{span:8},children:r(f,{activeTab:B,onChange:A,children:[r(n,{title:"\u57FA\u7840\u8BBE\u7F6E",children:[e(u.Item,{label:"\u7AD9\u70B9\u540D\u79F0",field:"site_name",children:e(l,{})}),e(u.Item,{label:"\u7AD9\u70B9\u5730\u5740",field:"site_url",children:e(l,{})}),e(u.Item,{label:"\u7AD9\u70B9\u5173\u952E\u8BCD",field:"site_keywords",children:e(l,{})}),e(u.Item,{label:"\u7AD9\u70B9\u63CF\u8FF0",field:"site_description",children:e(c,{autoSize:!0})}),e(u.Item,{label:"\u670D\u52A1\u70ED\u7EBF",field:"service_phone",wrapperCol:{span:4},children:e(l,{})}),e(u.Item,{label:"\u670D\u52A1\u90AE\u7BB1",field:"service_email",wrapperCol:{span:4},rules:[{validator(t,a){t&&(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)||a("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E"))}}],children:e(l,{})}),e(u.Item,{label:"\u7248\u6743",field:"copyright",children:e(l,{})})]},"\u57FA\u7840\u8BBE\u7F6E"),e(n,{title:"\u4E3B\u9898\u8BBE\u7F6E",children:e(u.Item,{label:"\u4E3B\u9898",field:"theme",labelCol:{span:1},wrapperCol:{span:4},children:e(E,{options:C})})},"\u4E3B\u9898\u8BBE\u7F6E"),e(n,{title:"\u8BED\u8A00\u8BBE\u7F6E",children:e(u.Item,{label:"\u8BED\u8A00",field:"language",labelCol:{span:1},wrapperCol:{span:4},children:e(E,{options:y})})},"\u8BED\u8A00\u8BBE\u7F6E"),r(n,{title:"\u5907\u6848\u4FE1\u606F",children:[e(u.Item,{label:"ICP\u5907\u6848",field:"icp",children:e(l,{})}),e(u.Item,{label:"\u516C\u5B89\u5907\u6848",field:"police_record",children:e(l,{})})]},"\u5907\u6848\u4FE1\u606F"),r(n,{title:"\u811A\u672C\u4EE3\u7801",children:[e(u.Item,{label:"\u7EDF\u8BA1\u811A\u672C",field:"statistical_script",wrapperCol:{span:22},children:e(c,{autoSize:!0,style:{minHeight:180}})}),e(u.Item,{label:"\u5BA2\u670D\u811A\u672C",field:"service_script",wrapperCol:{span:22},children:e(c,{autoSize:!0,style:{minHeight:180}})})]},"\u811A\u672C\u4EE3\u7801"),e(n,{title:"\u7F13\u5B58\u8BBE\u7F6E",children:e(_,{})},"\u7F13\u5B58\u8BBE\u7F6E")]})})})}export{U as default};
