import{h as c,ae as C,au as n,r as m,j as t,H as b,B as s,a as p,av as y,ao as I,F as k,bc as v,be as w}from"./index.299cabe9.js";import{T as E}from"./index.0f9a5d30.js";import{U as L}from"./index.486935d3.js";import{C as x}from"./index.cfe4bd8c.js";import{A as B,P as _}from"./index.ca0cd87f.js";import{i as D,C as S,D as T}from"./use-immer.module.6173479c.js";import{S as q}from"./index.ec737cbf.js";import{c as A}from"./convertNullToUndefined.a19d8223.js";import{t as N}from"./index.3c5d372d.js";import{I as j}from"./image.7b7a9224.js";import{I as P}from"./index.c3820c8d.js";import{I as U}from"./index.303a2b8f.js";import"./index.ed916c25.js";import"./index.986c7dda.js";import"./index.15032d84.js";import"./index.82b892e7.js";function V(e){return c.post("/api/link/query",e)}function O(e){return c.post("/api/link/detail",e)}function R(e){return c.post("/api/link/create",e)}function z(e){return c.post("/api/link/update",e)}function G(e){return c.post("/api/link/delete",e)}function H(e){return c.post("/api/link/enable",{uuid:e})}function J(e){return c.post("/api/link/disable",{uuid:e})}function W(){return c.post("/api/link/group/query")}const K=C.TextArea,{Option:M}=B;function Q(e){const[d]=n.useForm(),[h,o]=m.exports.useState(!1);async function F(){d.validate().then(async u=>{o(!0);try{const l={...u,icon:u.icon&&u.icon.length!==0?u.icon[0].response.data.name:void 0,detail_images:u.detail_images&&u.detail_images.length!==0?JSON.stringify(u.detail_images.map(g=>g.response.data.name)):void 0,status:u.status?"true":"false",sort_index:u.sort_index||1};let f;e.data?f=await z({...l,uuid:e.data.uuid}):f=await R(l),f.code===0&&(e.reload(),e.close())}finally{o(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return m.exports.useEffect(()=>{if(e.data){const u=A(e.data),l=u.icon;d.setFieldsValue({...u,icon:u.icon?[{uid:u.icon,url:l,response:{data:{name:u.icon.replace("/media/image?n=",""),path:u.icon}}}]:[]})}},[e.data]),m.exports.useEffect(()=>{e.visible===!1&&d.resetFields()},[d,e.visible]),t(x,{title:e.data?"\u4FEE\u6539\u53CB\u94FE":"\u521B\u5EFA\u53CB\u94FE",extra:t(b,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[t(s,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),t(s,{type:"primary",loading:h,onClick:F,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:p(n,{form:d,labelCol:{span:2},wrapperCol:{span:22},children:[t(n.Item,{label:"\u53CB\u94FE\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CB\u94FE\u540D\u79F0"}],children:t(C,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u53CB\u94FE\u540D\u79F0"})}),t(n.Item,{label:"\u53CB\u94FE\u56FE\u6807",field:"icon",triggerPropName:"fileList",children:t(L,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),t(n.Item,{label:"\u53CB\u94FE\u5730\u5740",field:"url",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CB\u94FE\u5730\u5740"}],children:t(C,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u53CB\u94FE\u5730\u5740"})}),t(n.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:t(q,{options:e.target})}),t(n.Item,{label:"\u53CB\u94FE\u63CF\u8FF0",field:"description",children:t(K,{maxLength:200,placeholder:"\u53CB\u94FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(n.Item,{label:"\u5206\u7EC4",field:"group",wrapperCol:{span:2},children:t(B,{placeholder:"\u9009\u62E9\u5206\u7EC4",children:e.group.map(u=>t(M,{value:u,children:u},u))})}),t(n.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(u,l){u&&u<1?l("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):l()}}],children:t(y,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),t(n.Item,{label:"\u542F\u7528",field:"status",triggerPropName:"checked",initialValue:!1,children:t(I,{})})]})})}function pe(){const e=m.exports.useRef(),[d,h]=m.exports.useState([]),[o,F]=D({visible:!1,close:function(){F(a=>{a.visible=!1})}}),[u,l]=m.exports.useState([]);async function f(a){try{const i=await O({uuid:a});i.code===0&&F(r=>{r.data=i.data,r.visible=!0})}catch{}}m.exports.useEffect(()=>{N().then(a=>{const i=[];for(const r in a.data)i.push({value:r,label:a.data[r]});h(i)}),W().then(a=>{l(a.data||[])})},[]);const g=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u540D\u5B57",dataIndex:"name",ellipsis:!0},{title:"\u56FE\u6807",width:150,dataIndex:"icon",render:(a,i)=>{if(i.icon){let r="";return r=i.icon,t(j,{width:40,height:40,src:r})}else return"\u6682\u65E0\u56FE\u6807"}},{title:"\u7F51\u5740",dataIndex:"url"},{title:"\u5206\u7EC4",dataIndex:"group"},{title:"\u542F\u7528\u72B6\u6001",dataIndex:"status",render(a,i){return i.status===1?t(E,{color:"green",children:"\u542F\u7528"}):t(E,{color:"red",children:"\u7981\u7528"})}},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"updated_at"},{title:"\u64CD\u4F5C",width:280,render:(a,i)=>p(S,{children:[p(s,{type:"text",onClick:()=>f(i.uuid),children:[t(v,{}),"\u7F16\u8F91"]}),i.status===0?p(s,{type:"text",onClick:async()=>{(await H(i.uuid)).code===0&&e.current.reload()},children:[t(P,{}),"\u542F\u7528"]}):p(s,{type:"text",onClick:async()=>{(await J(i.uuid)).code===0&&e.current.reload()},children:[t(w,{}),"\u7981\u7528"]}),t(T,{reqDel:G,params:{uuid:i.uuid},reload:()=>e.current.reload(),children:p(s,{type:"text",children:[t(U,{}),"\u5220\u9664"]})})]})}];return p(k,{children:[o.visible&&t(Q,{visible:o.visible,data:o.data,close:()=>o.close(),reload:()=>e.current.reload(),target:d,group:u}),t(x,{style:{display:o.visible?"none":void 0},children:t(_,{ref:e,request:V,columns:g,actionBarRender:[t(s,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[t(s,{type:"primary",onClick:()=>{F(a=>{a.visible=!0,a.data=void 0})},children:"\u521B\u5EFA\u53CB\u94FE"},"create")]})})]})}export{pe as default};
