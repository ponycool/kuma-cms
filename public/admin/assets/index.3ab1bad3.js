import{h as E,au as o,R as b,r as c,j as e,B as h,a as C,F,ae as p,H as k,M as L,bf as _,ab as S,bc as T}from"./index.eb1398b5.js";import{T as N}from"./index.07262b7d.js";import{C as D}from"./index.2c439f98.js";import{D as R,A as v,P}from"./index.21e1afd1.js";import{i as O,C as J,D as M}from"./use-immer.module.11e947b4.js";import{I as W,S as q}from"./index.567d1bf9.js";import"./index.de1fc28d.js";import{c as H}from"./convertNullToUndefined.a19d8223.js";import{f as j}from"./formatDate.c584a859.js";import{a as z}from"./index.46293268.js";import{I as V}from"./index.3439a697.js";import{I as Z}from"./index.fd9773c0.js";import"./index.0b3d75e7.js";function U(r){return E.post("/api/leads/query",r)}function $(r){return E.post("/api/leads/detail",r)}function G(r){return E.post("/api/leads/create",r)}function K(r){return E.post("/api/leads/update",r)}function Q(r){return E.post("/api/leads/delete",r)}function X(){return E.post("/api/leads/group/query")}function Y(){return E.post("/api/leads/status/query")}const ee=o.Item,A=b.createContext({});function te(r){const{children:n,record:l,className:d,...s}=r,m=c.exports.useRef(null),t=()=>m.current;return e(A.Provider,{value:{getForm:t},children:e(o,{style:{display:"table-row"},children:n,ref:m,wrapper:"tr",wrapperProps:s})})}function ae(r){const{children:n,className:l,rowData:d,column:s,onHandleSave:m}=r,t=c.exports.useRef(null),u=c.exports.useRef(null),{getForm:a}=c.exports.useContext(A),[i,f]=c.exports.useState(!1),g=c.exports.useCallback(y=>{i&&s.editable&&t.current&&!t.current.contains(y.target)&&!y.target.classList.contains("js-demo-select-option")&&x(d[s.dataIndex])},[i,d,s]);c.exports.useEffect(()=>{i&&u.current&&u.current.focus()},[i]),c.exports.useEffect(()=>(document.addEventListener("click",g,!0),()=>{document.removeEventListener("click",g,!0)}),[g]);const x=y=>{a().validate([s.dataIndex],(B,w)=>{(!B||!B[s.dataIndex])&&(f(!i),m&&m({...d,...w}))})};return i?e("div",{ref:t,children:e(ee,{style:{marginBottom:0},labelCol:{span:0},wrapperCol:{span:24},initialValue:d[s.dataIndex],field:s.dataIndex,rules:[{required:s.dataIndex==="name",message:s.dataIndex==="name"?"\u540D\u5B57\u662F\u5FC5\u586B\u9879":void 0}],children:e(p,{ref:u,onPressEnter:x})})}):e("div",{className:s.editable?`editable-cell ${l}`:l,onClick:()=>{s.editable&&f(!i)},children:n||"-"})}function re(r){const[n,l]=c.exports.useState([]);function d(t){const u=[...n],a=u.findIndex(i=>t.key===i.key);u.splice(a,1,{...u[a],...t}),l(u)}function s(){l([...n].concat({key:Math.random()*1e3,name:"\u8BF7\u6DFB\u52A0\u4EBA\u5458",phone:""}))}const m=b.useMemo(()=>{const t=[...r.columns];return t.some(u=>u.dataIndex==="option")||t.push({title:"\u64CD\u4F5C",dataIndex:"option",render:(u,a)=>e(h,{onClick:()=>{l(i=>i.filter(f=>f.key!==a.key))},type:"primary",status:"danger",children:"\u5220\u9664"})}),t},[n]);return c.exports.useEffect(()=>{!n.length&&r.data&&r.data.length&&l(r.data.map(t=>({...t,key:t.key?t.key:Math.random()*1e3})))},[r.data]),c.exports.useEffect(()=>{r.onChange(n)},[n]),C(F,{children:[e(h,{style:{marginBottom:10},type:"primary",onClick:s,children:"\u6DFB\u52A0"}),e(z,{rowKey:"name",pagination:!1,data:n,components:{body:{row:te,cell:ae}},columns:m.map(t=>t.editable?{...t,onCell:()=>({onHandleSave:d})}:t)})]})}const ue=p.TextArea,{Option:I}=v;function ne(r){var t,u;const[n]=o.useForm(),[l,d]=c.exports.useState(!1),s=[{title:"\u540D\u5B57",dataIndex:"name",editable:!0},{title:"\u7535\u8BDD",dataIndex:"phone",editable:!0},{title:"\u90AE\u7BB1",dataIndex:"email",editable:!0}];async function m(){n.validate().then(async a=>{d(!0);try{const i=a.additional_contacts.flatMap(x=>x.name==="\u8BF7\u6DFB\u52A0\u4EBA\u5458"?[]:{name:x.name,phone:x.phone,email:x.email}),f={...a,tags:JSON.stringify(a.tags),additional_contacts:JSON.stringify(i)};let g;r.data?g=await K({...f,uuid:r.data.uuid}):g=await G(f),g.code===0&&(r.reload(),r.close())}finally{d(!1)}}).catch(a=>{if(a.errors)for(const i in a.errors)L.error(a.errors[i].message)})}return c.exports.useEffect(()=>{if(r.data){const a=H(r.data);n.setFieldsValue({...a,assigned_at:a.assigned_at?j(new Date(a.assigned_at)):void 0,tags:a.tags&&Array.isArray(JSON.parse(a.tags))?JSON.parse(a.tags):[],additional_contacts:a.additional_contacts&&Array.isArray(JSON.parse(a.additional_contacts))?JSON.parse(a.additional_contacts):[]})}},[r.data]),c.exports.useEffect(()=>{r.visible===!1&&n.resetFields()},[n,r.visible]),e(D,{title:r.data?"\u4FEE\u6539\u7EBF\u7D22":"\u521B\u5EFA\u7EBF\u7D22",extra:e(k,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>r.close()}),actions:[e(h,{type:"default",onClick:()=>r.close(),children:"\u53D6\u6D88"},"cancel"),e(h,{type:"primary",loading:l,onClick:m,children:r.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:C(o,{form:n,labelCol:{span:2},wrapperCol:{span:8},children:[e(o.Item,{label:"\u516C\u53F8",field:"company",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u516C\u53F8"})}),e(o.Item,{label:"\u540D\u5B57",field:"name",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u540D\u5B57"})}),e(o.Item,{label:"\u624B\u673A\u53F7",field:"phone",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u624B\u673A\u53F7"})}),e(o.Item,{label:"\u90AE\u7BB1",field:"email",rules:[{validator(a,i){a&&!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(a)&&i("\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E")}}],children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u90AE\u7BB1"})}),e(o.Item,{label:"\u8D1F\u8D23\u4EBA",field:"assigned_to",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u5206\u914D\u4EBA"})}),e(o.Item,{label:"\u5206\u914D\u65F6\u95F4",field:"assigned_at",disabled:!0,wrapperCol:{span:2},children:e(R,{})}),e(o.Item,{label:"\u6765\u6E90",field:"source",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u6765\u6E90"})}),e(o.Item,{label:"\u6807\u7B7E",field:"tags",children:e(W,{allowClear:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u7B7E\u5E76\u4E14\u56DE\u8F66\u786E\u8BA4"})}),e(o.Item,{label:"\u6CE8\u518C\u5165\u53E3",field:"registration_entry",children:e(p,{maxLength:100,showWordLimit:!0,placeholder:"\u6CE8\u518C\u5165\u53E3"})}),e(o.Item,{label:"\u5206\u7EC4",field:"group",wrapperCol:{span:2},children:e(v,{placeholder:"\u9009\u62E9\u5206\u7EC4",children:(t=r.group)==null?void 0:t.map(a=>e(I,{value:a,children:a},a))})}),e(o.Item,{label:"\u72B6\u6001",field:"status",wrapperCol:{span:2},children:e(q,{placeholder:"\u9009\u62E9\u72B6\u6001",allowClear:!0,children:(u=r.status)==null?void 0:u.map(a=>e(I,{value:a,children:a},a))})}),e(o.Item,{label:"\u9644\u52A0\u8054\u7CFB\u65B9\u5F0F",field:"additional_contacts",triggerPropName:"data",children:e(re,{columns:s})}),e(o.Item,{label:"\u5907\u6CE8",field:"description",children:e(ue,{maxLength:200,placeholder:"\u5907\u6CE8",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})]})})}function ye(){const r=_(),n=c.exports.useRef(),[l,d]=O({visible:!1,close:function(){d(t=>{t.visible=!1})},group:[],status:[]});c.exports.useEffect(()=>{X().then(t=>{t.code===0&&d(u=>{u.group=t.data||[]})}),Y().then(t=>{t.code===0&&d(u=>{u.status=t.data||[]})})},[]);async function s(t){try{const u=await $({uuid:t});u.code===0&&d(a=>{a.data=u.data,a.visible=!0})}catch{}}const m=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"ID",dataIndex:"id",width:80,sorter:!0,search:!0,valueType:"number",fieldProps:{min:0,precision:0}},{title:"\u516C\u53F8",dataIndex:"company",ellipsis:!0,sorter:!0,search:!0},{title:"\u540D\u5B57",dataIndex:"name",sorter:!0,search:!0},{title:"\u624B\u673A",dataIndex:"phone",sorter:!0,search:!0},{title:"\u90AE\u7BB1",dataIndex:"email",sorter:!0,search:!0},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"assigned_to",sorter:!0,search:!0},{title:"\u72B6\u6001",dataIndex:"status",sorter:!0,search:!0,valueType:"select",fieldProps:{options:l.status.map(t=>({label:t,value:t}))}},{title:"\u5206\u914D\u65F6\u95F4",dataIndex:"assigned_at",sorter:!0,search:!0,valueType:"date"},{title:"\u6765\u6E90",dataIndex:"source",sorter:!0,search:!0},{title:"\u6CE8\u518C\u6761\u76EE",dataIndex:"registration_entry",sorter:!0,search:!0},{title:"\u6807\u7B7E",dataIndex:"tags",render(t,u){if(u.tags&&typeof JSON.parse(u.tags)=="object")return e(S,{children:JSON.parse(u.tags).map(a=>e(N,{children:a},a))})}},{title:"\u5206\u7EC4",dataIndex:"group",sorter:!0,search:!0,valueType:"autoComplete",fieldProps:{data:l.group}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"updated_at",sorter:!0,search:!0,valueType:"date"},{title:"\u64CD\u4F5C",width:280,fixed:"right",render:(t,u)=>C(J,{children:[C(h,{type:"text",onClick:()=>s(u.uuid),children:[e(T,{}),"\u7F16\u8F91"]}),C(h,{type:"text",onClick:()=>{r.push({pathname:"/marketManage/message",search:new URLSearchParams({name:u.name,phone:u.phone,email:u.email}).toString()})},children:[e(V,{}),"\u6D88\u606F"]}),e(M,{reqDel:Q,params:{uuid:u.uuid},reload:()=>n.current.reload(),children:C(h,{type:"text",children:[e(Z,{}),"\u5220\u9664"]})})]})}];return C(F,{children:[l.visible&&e(ne,{visible:l.visible,data:l.data,close:()=>l.close(),reload:()=>n.current.reload(),group:l.group,status:l.status}),e(D,{style:{display:l.visible?"none":void 0},children:e(P,{ref:n,request:U,columns:m,scroll:{x:2500},actionBarRender:[e(h,{type:"primary",onClick:()=>n.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[e(h,{type:"primary",onClick:()=>{d(t=>{t.visible=!0,t.data=void 0})},children:"\u521B\u5EFA\u7EBF\u7D22"},"create")]})})]})}export{ye as default};
