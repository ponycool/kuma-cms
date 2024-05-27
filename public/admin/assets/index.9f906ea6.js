import{R as P,r as h,e as k,j as t,_ as L,ae as F,au as m,F as N,a as C,H as T,B as b,av as W,ao as M,bb as V,M as $,bc as U}from"./index.d701a0f0.js";import{T as D}from"./index.5873cde8.js";import{U as q}from"./index.d5cf2e05.js";import{C as A}from"./index.ef9f10fd.js";import{T as z,P as H}from"./index.986200ab.js";import{c as R,a as K,b as Z,d as G,e as J,f as Q,g as X,h as Y}from"./index.2f2c1b88.js";import{i as ee,C as te,D as re}from"./use-immer.module.5c58314a.js";import"./index.80dbc820.js";import{M as ae}from"./index.ea676ab4.js";import{c as I}from"./convertNullToUndefined.a19d8223.js";import{I as ie}from"./image.9149c43f.js";import{I as oe}from"./index.325a1cf4.js";import"./index.c77002ba.js";import"./index.c75c75e7.js";import"./index.8acd33a0.js";import"./index.0a605449.js";function _(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?_(Object(a),!0).forEach(function(r){L(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ne(e,i){var a=h.exports.useContext(k),r=a.prefixCls,u=r===void 0?"arco":r,v=e.spin,g=e.className,c=B(B({"aria-hidden":!0,focusable:!1,ref:i},e),{},{className:"".concat(g?g+" ":"").concat(u,"-icon ").concat(u,"-icon-reply")});return v&&(c.className="".concat(c.className," ").concat(u,"-icon-loading")),delete c.spin,delete c.isIcon,t("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:t("path",{d:"m6.642 24.684 14.012 14.947a.2.2 0 0 0 .346-.137v-8.949A23.077 23.077 0 0 1 26 30c6.208 0 11.84 2.459 15.978 6.456a.01.01 0 0 0 .017-.007C42 36.299 42 36.15 42 36c0-10.493-8.506-19-19-19-.675 0-1.342.035-2 .104V8.506a.2.2 0 0 0-.346-.137L6.642 23.316a1 1 0 0 0 0 1.368Z"})})}var E=P.forwardRef(ne);E.defaultProps={isIcon:!0};E.displayName="IconReply";var ue=E;function S(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(u){return Object.getOwnPropertyDescriptor(e,u).enumerable})),a.push.apply(a,r)}return a}function j(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?S(Object(a),!0).forEach(function(r){L(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function le(e,i){var a=h.exports.useContext(k),r=a.prefixCls,u=r===void 0?"arco":r,v=e.spin,g=e.className,c=j(j({"aria-hidden":!0,focusable:!1,ref:i},e),{},{className:"".concat(g?g+" ":"").concat(u,"-icon ").concat(u,"-icon-send")});return v&&(c.className="".concat(c.className," ").concat(u,"-icon-loading")),delete c.spin,delete c.isIcon,t("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:t("path",{strokeMiterlimit:"3.864",d:"m14 24-7-5V7l34 17L7 41V29l7-5Zm0 0h25"})})}var O=P.forwardRef(le);O.defaultProps={isIcon:!0};O.displayName="IconSend";var se=O;const w=F.TextArea;function ce(e){const[i]=m.useForm(),[a,r]=h.exports.useState(""),[u,v]=h.exports.useState(!1),[g,c]=h.exports.useState([]);async function d(){try{const o=await R();if(o.code===0){const n=o.data.pageData,y=new Map,s=[];n.forEach(f=>y.set(f.id,{...f,children:[]})),n.forEach(f=>{const x=y.get(f.pid);x?x.children.push(y.get(f.id)):s.push(y.get(f.id))}),c(s)}}catch{}}function l(o){r(o)}async function p(){i.validate().then(async o=>{const n=I(o);try{if(!a||a==="<p><br></p>")throw $.error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9"),new Error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9");const y={...n,cover_image:n.cover_image&&n.cover_image.length!==0?n.cover_image[0].response.data.name:void 0,is_published:n.is_published?"true":"false",content:a,sort_index:n.sort_index||1};let s;e.data?s=await K({...y,uuid:e.data.uuid}):s=await Z(y),s.code===0&&(e.reload(),e.close())}finally{v(!1)}}).catch(o=>{console.log(o),console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return h.exports.useEffect(()=>{d()},[]),h.exports.useEffect(()=>{if(e.data){const o=I(e.data);let n="";n=o.cover_image,i.setFieldsValue({...o,status:o.is_published===1,cover_image:o.cover_image?[{uid:o.cover_image,url:n,response:{data:{name:o.cover_image.replace("/media/image?n=",""),path:o.cover_image}}}]:[]}),r(o.content)}},[e.data]),h.exports.useEffect(()=>{e.visible===!1&&(i.resetFields(),r(void 0))},[i,e.visible]),t(N,{children:C(A,{title:e.data?"\u4FEE\u6539\u6587\u7AE0":"\u521B\u5EFA\u6587\u7AE0",extra:t(T,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[t(b,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),t(b,{type:"primary",loading:u,onClick:p,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:[C(m,{form:i,labelCol:{span:2},wrapperCol:{span:22},children:[t(m.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:t(F,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),t(m.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:2},children:t(z,{treeData:g,fieldNames:{key:"id",title:"name"},allowClear:!0})}),t(m.Item,{label:"\u6587\u7AE0\u5C01\u9762",field:"cover_image",triggerPropName:"fileList",children:t(q,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),t(m.Item,{label:"\u4F5C\u8005",field:"author",wrapperCol:{span:2},children:t(F,{maxLength:50,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"})}),t(m.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:t(F,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),t(m.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:t(w,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(m.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:t(w,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(m.Item,{label:"\u63CF\u8FF0",field:"summary",children:t(w,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(m.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(o,n){o&&o<1?n("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):n()}}],children:t(W,{maxLength:10,hideControl:!0,placeholder:"\u6587\u7AE0\u6392\u5E8F"})}),t(m.Item,{label:"\u662F\u5426\u53D1\u5E03",field:"is_published",triggerPropName:"checked",initialValue:!1,children:t(M,{})})]}),t(V,{orientation:"left",children:"\u6B63\u6587"}),t(ae,{html:a,getContent:l})]})})}function Ie(){const e=h.exports.useRef(),[i,a]=h.exports.useState([]),[r,u]=ee({visible:!1,close:function(){u(d=>{d.visible=!1})}});async function v(d){const p=(await R()).data.pageData,o=new Map,n=[];return p.forEach(s=>o.set(s.id,{...s,children:[]})),p.forEach(s=>{const f=o.get(s.pid);f?f.children.push(o.get(s.id)):n.push(o.get(s.id))}),a(n),d.map(s=>{const f=p.find(x=>x.id===s.cid);return{...s,category:f?f.name:null}})}async function g(d){try{const l=await Y({uuid:d});l.code===0&&u(p=>{p.data=l.data,p.visible=!0})}catch{}}const c=[{title:"\u5206\u7C7B",dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:i,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u5206\u7C7B",dataIndex:"category"},{title:"\u4F5C\u8005",dataIndex:"author"},{title:"\u5C01\u9762\u56FE\u7247",width:150,dataIndex:"cover_image",render:(d,l)=>{if(l.cover_image){let p="";return p=l.cover_image,t(ie,{width:40,height:40,src:p})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count"},{title:"\u53D1\u5E03\u72B6\u6001",dataIndex:"is_published",render(d,l){return l.is_published===1?t(D,{color:"green",children:"\u5DF2\u53D1\u5E03"}):t(D,{color:"red",children:"\u672A\u53D1\u5E03"})}},{title:"\u53D1\u5E03\u65F6\u95F4",width:200,dataIndex:"published_at"},{title:"\u64CD\u4F5C",width:280,render:(d,l)=>C(te,{children:[C(b,{type:"text",onClick:()=>g(l.uuid),children:[t(U,{}),"\u7F16\u8F91"]}),l.is_published===0?C(b,{type:"text",onClick:async()=>{(await J(l.uuid)).code===0&&e.current.reload()},children:[t(se,{}),"\u53D1\u5E03"]}):C(b,{type:"text",onClick:async()=>{(await Q(l.uuid)).code===0&&e.current.reload()},children:[t(ue,{}),"\u53D6\u6D88\u53D1\u5E03"]}),t(re,{reqDel:X,params:{uuid:l.uuid},reload:()=>e.current.reload(),children:C(b,{type:"text",children:[t(oe,{}),"\u5220\u9664"]})})]})}];return C(N,{children:[r.visible&&t(ce,{visible:r.visible,data:r.data,close:()=>r.close(),reload:()=>e.current.reload()}),t(A,{style:{display:r.visible?"none":void 0},children:t(H,{ref:e,request:G,columns:c,dataRender:v,actionBarRender:[t(b,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[t(b,{type:"primary",onClick:()=>{u(d=>{d.visible=!0,d.data=void 0})},children:"\u521B\u5EFA\u6587\u7AE0"},"create")]})})]})}export{Ie as default};
