import{h as d,aj as b,aB as s,r as p,j as e,K as B,B as c,a as m,af as v,aC as w,au as L,u as C,i as D,aR as E,bc as _,be as A,F as S}from"./index.6baa9237.js";import{U as N}from"./index.fefa5771.js";import{C as y}from"./index.adedcd4b.js";import{A as x,P as T}from"./index.ba639177.js";import{i as q,C as j,D as U}from"./use-immer.module.1f7d219c.js";import{c as P}from"./convertNullToUndefined.a19d8223.js";import{t as R}from"./index.84436c4c.js";import{I as V}from"./image.d7a4aff5.js";import{I as z}from"./index.70f84d3d.js";import{I as G}from"./index.3d88a473.js";import"./index.cd935aea.js";import"./index.72406e2d.js";import"./index.d3eb644a.js";import"./index.1ec5f8a4.js";function O(t){return d.post("/api/link/query",t)}function J(t){return d.post("/api/link/detail",t)}function K(t){return d.post("/api/link/create",t)}function W(t){return d.post("/api/link/update",t)}function H(t){return d.post("/api/link/delete",t)}function $(t){return d.post("/api/link/enable",{uuid:t})}function M(t){return d.post("/api/link/disable",{uuid:t})}function Q(){return d.post("/api/link/group/query")}const X=b.TextArea,{Option:Y}=x;function Z(t){const[a]=s.useForm(),[r,h]=p.exports.useState(!1);async function f(){a.validate().then(async u=>{h(!0);try{const l={...u,icon:u.icon&&u.icon.length!==0?u.icon[0].response.data.name:void 0,detail_images:u.detail_images&&u.detail_images.length!==0?JSON.stringify(u.detail_images.map(g=>g.response.data.name)):void 0,status:u.status?"true":"false",sort_index:u.sort_index||1};let F;t.data?F=await W({...l,uuid:t.data.uuid}):F=await K(l),F.code===0&&(t.reload(),t.close())}finally{h(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return p.exports.useEffect(()=>{if(t.data){const u=P(t.data),l=u.icon;a.setFieldsValue({...u,icon:u.icon?[{uid:u.icon,url:l,response:{data:{name:u.icon.replace("/media/image?n=",""),path:u.icon}}}]:[]})}},[t.data]),p.exports.useEffect(()=>{t.visible===!1&&a.resetFields()},[a,t.visible]),e(y,{title:t.data?"\u4FEE\u6539\u53CB\u94FE":"\u521B\u5EFA\u53CB\u94FE",extra:e(B,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(c,{type:"default",onClick:()=>t.close(),children:"\u53D6\u6D88"},"cancel"),e(c,{type:"primary",loading:r,onClick:f,children:t.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:m(s,{form:a,labelCol:{span:2},wrapperCol:{span:22},children:[e(s.Item,{label:"\u53CB\u94FE\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CB\u94FE\u540D\u79F0"}],children:e(b,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u53CB\u94FE\u540D\u79F0"})}),e(s.Item,{label:"\u53CB\u94FE\u56FE\u6807",field:"icon",triggerPropName:"fileList",children:e(N,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),e(s.Item,{label:"\u53CB\u94FE\u5730\u5740",field:"url",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CB\u94FE\u5730\u5740"}],children:e(b,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u53CB\u94FE\u5730\u5740"})}),e(s.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:e(v,{options:t.target})}),e(s.Item,{label:"\u53CB\u94FE\u63CF\u8FF0",field:"description",children:e(X,{maxLength:200,placeholder:"\u53CB\u94FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),e(s.Item,{label:"\u5206\u7EC4",field:"group",wrapperCol:{span:2},children:e(x,{placeholder:"\u9009\u62E9\u5206\u7EC4",children:t.group.map(u=>e(Y,{value:u,children:u},u))})}),e(s.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(u,l){u&&u<1?l("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):l()}}],children:e(w,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),e(s.Item,{label:"\u542F\u7528",field:"status",triggerPropName:"checked",initialValue:!1,children:e(L,{})})]})})}const ee={"en-US":{"columns.keyword":"Keyword","columns.name":"Name","columns.icon":"Icon",noIcon:"Not Icon","columns.url":"Url","columns.group":"Group","columns.status":"Status","columns.status.enable":"Enable","columns.status.disable":"Disable","columns.updateAt":"update At","columns.action":"Action","columns.action.edit":"Edit","columns.action.enable":"Enable","columns.action.disable":"Disable","columns.action.delete":"Delete"},"zh-CN":{"columns.keyword":"\u5173\u952E\u8BCD","columns.name":"\u540D\u5B57","columns.icon":"\u56FE\u6807",noIcon:"\u6682\u65E0\u56FE\u6807","columns.url":"\u7F51\u5740","columns.group":"\u5206\u7EC4","columns.status":"\u542F\u7528\u72B6\u6001","columns.status.enable":"\u542F\u7528","columns.status.disable":"\u7981\u7528","columns.updateAt":"\u4FEE\u6539\u65F6\u95F4","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","columns.action.enable":"\u542F\u7528","columns.action.disable":"\u7981\u7528","columns.action.delete":"\u5220\u9664"}};function he(){const t=C(D),a=C(ee),r=p.exports.useRef(),[h,f]=p.exports.useState([]),[u,l]=q({visible:!1,close:function(){l(i=>{i.visible=!1})}}),[F,g]=p.exports.useState([]);async function I(i){try{const n=await J({uuid:i});n.code===0&&l(o=>{o.data=n.data,o.visible=!0})}catch{}}p.exports.useEffect(()=>{R().then(i=>{const n=[];for(const o in i.data)n.push({value:o,label:i.data[o]});f(n)}),Q().then(i=>{g(i.data||[])})},[]);const k=[{title:a["columns.keyword"],dataIndex:"keyword",search:!0,hide:!0},{title:a["columns.name"],dataIndex:"name",ellipsis:!0},{title:a["columns.icon"],width:150,dataIndex:"icon",render:(i,n)=>{if(n.icon){let o="";return o=n.icon,e(V,{width:40,height:40,src:o})}else return a["columns.noIcon"]}},{title:a["columns.url"],dataIndex:"url"},{title:a["columns.group"],dataIndex:"group"},{title:a["columns.status"],dataIndex:"status",render(i,n){return n.status===1?e(E,{color:"green",children:a["columns.status.enable"]}):e(E,{color:"red",children:a["columns.status.disable"]})}},{title:a["columns.updateAt"],dataIndex:"updated_at"},{title:a["columns.action"],width:280,render:(i,n)=>m(j,{children:[m(c,{type:"text",onClick:()=>I(n.uuid),children:[e(_,{}),a["columns.action.edit"]]}),n.status===0?m(c,{type:"text",onClick:async()=>{(await $(n.uuid)).code===0&&r.current.reload()},children:[e(z,{}),a["columns.action.enable"]]}):m(c,{type:"text",onClick:async()=>{(await M(n.uuid)).code===0&&r.current.reload()},children:[e(A,{}),a["columns.action.disable"]]}),e(U,{reqDel:H,params:{uuid:n.uuid},reload:()=>r.current.reload(),children:m(c,{type:"text",children:[e(G,{}),a["columns.action.delete"]]})})]})}];return m(S,{children:[u.visible&&e(Z,{visible:u.visible,data:u.data,close:()=>u.close(),reload:()=>r.current.reload(),target:h,group:F}),e(y,{style:{display:u.visible?"none":void 0},children:e(T,{ref:r,request:O,columns:k,actionBarRender:[e(c,{type:"primary",onClick:()=>r.current.reload(),children:t["table.refresh"]},"refresh")],toolBarRender:[e(c,{type:"primary",onClick:()=>{l(i=>{i.visible=!0,i.data=void 0})},children:t["table.createFriendlyLinks"]},"create")]})})]})}export{he as default};