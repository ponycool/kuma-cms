import{h as c,ae as d,au as r,r as p,j as e,H as C,B as o,a as s,av as B,F as x,b3 as _}from"./index.188c659e.js";import{U as E}from"./index.70fcbb7c.js";import{C as F}from"./index.ea63e9e0.js";import{D,P as b}from"./index.c60e1788.js";import{i as I,C as y,D as v}from"./use-immer.module.c8f4966b.js";import"./index.9bf47861.js";import{c as g}from"./convertNullToUndefined.a19d8223.js";import{f as w}from"./formatDate.c584a859.js";import{I as A}from"./image.626e4802.js";import{I as j}from"./index.a9942bd1.js";import"./index.1a62b8c4.js";import"./index.464caf9a.js";import"./index.a79d7306.js";import"./index.703147ed.js";import"./index.22219daf.js";function L(t){return c.post("/api/team/query",t)}function k(t){return c.post("/api/team/detail",t)}function T(t){return c.post("/api/team/create",t)}function q(t){return c.post("/api/team/update",t)}function z(t){return c.post("/api/team/delete",t)}const P=d.TextArea;function R(t){const[u]=r.useForm(),[n,m]=p.exports.useState(!1);async function f(){u.validate().then(async i=>{m(!0);const a=g(i);try{const l={...a,profile_image:a.profile_image&&a.profile_image.length!==0?a.profile_image[0].response.data.name:void 0,sort_index:a.sort_index||1,joined_date:a.joined_date};let h;t.data?h=await q({...l,uuid:t.data.uuid}):h=await T(l),h.code===0&&(t.reload(),t.close())}finally{m(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return p.exports.useEffect(()=>{if(t.data){const i=g(t.data),a=i.profile_image;u.setFieldsValue({...i,profile_image:i.profile_image?[{uid:i.profile_image,url:a,response:{data:{name:i.profile_image.replace("/media/image?n=",""),path:i.profile_image}}}]:[],joined_date:i.joined_date?w(new Date(i.joined_date)):void 0})}},[t.data]),p.exports.useEffect(()=>{t.visible===!1&&u.resetFields()},[u,t.visible]),e(F,{title:t.data?"\u4FEE\u6539\u6210\u5458":"\u521B\u5EFA\u6210\u5458",extra:e(C,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(o,{type:"default",onClick:()=>t.close(),children:"\u53D6\u6D88"},"cancel"),e(o,{type:"primary",loading:n,onClick:f,children:t.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:s(r,{form:u,labelCol:{span:2},wrapperCol:{span:22},children:[e(r.Item,{label:"\u6210\u5458\u540D\u5B57",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6210\u5458\u540D\u5B57"}],children:e(d,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6210\u5458\u540D\u5B57"})}),e(r.Item,{label:"\u6210\u5458\u804C\u4F4D",field:"job_title",children:e(d,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6210\u5458\u804C\u4F4D"})}),e(r.Item,{label:"\u6210\u5458\u5934\u50CF",field:"profile_image",triggerPropName:"fileList",children:e(E,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(r.Item,{label:"\u6210\u5458\u7B80\u4ECB",field:"introduction",children:e(P,{maxLength:200,placeholder:"\u6210\u5458\u7B80\u4ECB",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(r.Item,{label:"\u6210\u5458\u624B\u673A\u53F7",field:"phone",children:e(d,{maxLength:100,showWordLimit:!0,placeholder:"\u6210\u5458\u624B\u673A\u53F7"})}),e(r.Item,{label:"\u6210\u5458\u90AE\u7BB1",field:"email",rules:[{validator(i,a){i&&!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(i)&&a("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:e(d,{maxLength:100,showWordLimit:!0,placeholder:"\u6210\u5458\u90AE\u7BB1"})}),e(r.Item,{label:"\u5165\u804C\u65F6\u95F4",field:"joined_date",wrapperCol:{span:2},children:e(D,{})}),e(r.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(i,a){i&&i<1?a("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):a()}}],children:e(B,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})})]})})}function Y(){const t=p.exports.useRef(),[u,n]=I({visible:!1,close:function(){n(i=>{i.visible=!1})}});async function m(i){try{const a=await k({uuid:i});a.code===0&&n(l=>{l.data=a.data,l.visible=!0})}catch{}}const f=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u540D\u5B57",dataIndex:"name",ellipsis:!0},{title:"\u5934\u50CF",width:150,dataIndex:"profile_image",render:(i,a)=>{if(a.profile_image){let l="";return l=a.profile_image,e(A,{width:40,height:40,src:l})}else return"\u6682\u65E0\u5934\u50CF"}},{title:"\u804C\u4F4D",dataIndex:"job_title"},{title:"\u4ECB\u7ECD",dataIndex:"introduction",ellipsis:!0},{title:"\u90AE\u7BB1",dataIndex:"email",ellipsis:!0},{title:"\u624B\u673A\u53F7",dataIndex:"phone",ellipsis:!0},{title:"\u5165\u804C\u65F6\u95F4",dataIndex:"joined_date"},{title:"\u64CD\u4F5C",width:280,render:(i,a)=>s(y,{children:[s(o,{type:"text",onClick:()=>m(a.uuid),children:[e(_,{}),"\u7F16\u8F91"]}),e(v,{reqDel:z,params:{uuid:a.uuid},reload:()=>t.current.reload(),children:s(o,{type:"text",children:[e(j,{}),"\u5220\u9664"]})})]})}];return s(x,{children:[u.visible&&e(R,{visible:u.visible,data:u.data,close:()=>u.close(),reload:()=>t.current.reload()}),e(F,{style:{display:u.visible?"none":void 0},children:e(b,{ref:t,request:L,columns:f,actionBarRender:[e(o,{type:"primary",onClick:()=>t.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[e(o,{type:"primary",onClick:()=>{n(i=>{i.visible=!0,i.data=void 0})},children:"\u521B\u5EFA\u6210\u5458"},"create")]})})]})}export{Y as default};
