import{e as P,r as h,f as k,j as t,_ as L,au as w,at as m,F as N,a as C,H as R,B as b,bb as W,an as M,ba as $,M as U,bc as V}from"./index.d7da5add.js";import{T as D}from"./index.e049f78f.js";import{U as q}from"./index.0d353d2a.js";import{C as A}from"./index.bfb3086e.js";import{T as z,P as H}from"./index.e01d1b69.js";import{c as T,a as K,b as Z,d as G,e as J,f as Q,g as X,h as Y}from"./index.359322cf.js";import{i as ee,C as te,D as re}from"./use-immer.module.58dd9b11.js";import"./index.a68f64a6.js";import{M as ae}from"./index.6a4879ca.js";import{c as _}from"./convertNullToUndefined.a19d8223.js";import{I as ie}from"./image.22b6a232.js";import{I as oe}from"./index.9fa425d5.js";import"./index.08b14342.js";import"./index.d1d405b6.js";import"./index.7c59ebec.js";import"./index.c9b1fb52.js";function I(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function B(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?I(Object(a),!0).forEach(function(r){L(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function ne(e,i){var a=h.exports.useContext(k),r=a.prefixCls,n=r===void 0?"arco":r,v=e.spin,g=e.className,c=B(B({"aria-hidden":!0,focusable:!1,ref:i},e),{},{className:"".concat(g?g+" ":"").concat(n,"-icon ").concat(n,"-icon-reply")});return v&&(c.className="".concat(c.className," ").concat(n,"-icon-loading")),delete c.spin,delete c.isIcon,t("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:t("path",{d:"m6.642 24.684 14.012 14.947a.2.2 0 0 0 .346-.137v-8.949A23.077 23.077 0 0 1 26 30c6.208 0 11.84 2.459 15.978 6.456a.01.01 0 0 0 .017-.007C42 36.299 42 36.15 42 36c0-10.493-8.506-19-19-19-.675 0-1.342.035-2 .104V8.506a.2.2 0 0 0-.346-.137L6.642 23.316a1 1 0 0 0 0 1.368Z"})})}var E=P.forwardRef(ne);E.defaultProps={isIcon:!0};E.displayName="IconReply";var ue=E;function S(e,i){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,r)}return a}function j(e){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?S(Object(a),!0).forEach(function(r){L(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function se(e,i){var a=h.exports.useContext(k),r=a.prefixCls,n=r===void 0?"arco":r,v=e.spin,g=e.className,c=j(j({"aria-hidden":!0,focusable:!1,ref:i},e),{},{className:"".concat(g?g+" ":"").concat(n,"-icon ").concat(n,"-icon-send")});return v&&(c.className="".concat(c.className," ").concat(n,"-icon-loading")),delete c.spin,delete c.isIcon,t("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...c,children:t("path",{strokeMiterlimit:"3.864",d:"m14 24-7-5V7l34 17L7 41V29l7-5Zm0 0h25"})})}var O=P.forwardRef(se);O.defaultProps={isIcon:!0};O.displayName="IconSend";var le=O;const F=w.TextArea;function ce(e){const[i]=m.useForm(),[a,r]=h.exports.useState(""),[n,v]=h.exports.useState(!1),[g,c]=h.exports.useState([]);async function d(){try{const o=await T();if(o.code===0){const s=o.data.pageData,y=new Map,l=[];s.forEach(f=>y.set(f.id,{...f,children:[]})),s.forEach(f=>{const x=y.get(f.pid);x?x.children.push(y.get(f.id)):l.push(y.get(f.id))}),c(l)}}catch{}}function u(o){r(o)}async function p(){i.validate().then(async o=>{const s=_(o);try{if(!a||a==="<p><br></p>")throw U.error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9"),new Error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9");const y={...s,cover_image:s.cover_image&&s.cover_image.length!==0?s.cover_image[0].response.data.name:void 0,is_published:s.is_published?"true":"false",content:a,sort_index:s.sort_index===0?void 0:s.sort_index};let l;e.data?l=await K({...y,uuid:e.data.uuid}):l=await Z(y),l.code===0&&(e.reload(),e.close())}finally{v(!1)}}).catch(o=>{console.log(o),console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return h.exports.useEffect(()=>{d()},[]),h.exports.useEffect(()=>{if(e.data){const o=_(e.data);let s="";s=o.cover_image,i.setFieldsValue({...o,sort_index:o.sort_index||void 0,status:o.is_published===1,cover_image:o.cover_image?[{uid:o.cover_image,url:s,response:{data:{name:o.cover_image.replace("/media/image?n=",""),path:o.cover_image}}}]:[]}),r(o.content)}},[e.data]),h.exports.useEffect(()=>{e.visible===!1&&(i.resetFields(),r(void 0))},[i,e.visible]),t(N,{children:C(A,{title:e.data?"\u4FEE\u6539\u6587\u7AE0":"\u521B\u5EFA\u6587\u7AE0",extra:t(R,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[t(b,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),t(b,{type:"primary",loading:n,onClick:p,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:[C(m,{form:i,labelCol:{span:2},wrapperCol:{span:22},children:[t(m.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:t(w,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),t(m.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:2},children:t(z,{treeData:g,fieldNames:{key:"id",title:"name"},allowClear:!0})}),t(m.Item,{label:"\u6587\u7AE0\u5C01\u9762",field:"cover_image",triggerPropName:"fileList",children:t(q,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),t(m.Item,{label:"\u4F5C\u8005",field:"author",wrapperCol:{span:2},children:t(w,{maxLength:50,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"})}),t(m.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:t(w,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),t(m.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:t(F,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(m.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:t(F,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(m.Item,{label:"\u63CF\u8FF0",field:"summary",children:t(F,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(m.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},children:t(W,{maxLength:10,hideControl:!0,placeholder:"\u6587\u7AE0\u6392\u5E8F"})}),t(m.Item,{label:"\u662F\u5426\u53D1\u5E03",field:"is_published",triggerPropName:"checked",initialValue:!1,children:t(M,{})})]}),t($,{orientation:"left",children:"\u6B63\u6587"}),t(ae,{html:a,getContent:u})]})})}function _e(){const e=h.exports.useRef(),[i,a]=h.exports.useState([]),[r,n]=ee({visible:!1,close:function(){n(d=>{d.visible=!1})}});async function v(d){const p=(await T()).data.pageData,o=new Map,s=[];return p.forEach(l=>o.set(l.id,{...l,children:[]})),p.forEach(l=>{const f=o.get(l.pid);f?f.children.push(o.get(l.id)):s.push(o.get(l.id))}),a(s),d.map(l=>{const f=p.find(x=>x.id===l.cid);return{...l,category:f?f.name:null}})}async function g(d){try{const u=await Y({uuid:d});u.code===0&&n(p=>{p.data=u.data,p.visible=!0})}catch{}}const c=[{title:"\u5206\u7C7B",dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:i,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u5206\u7C7B",dataIndex:"category"},{title:"\u4F5C\u8005",dataIndex:"author"},{title:"\u5C01\u9762\u56FE\u7247",width:150,dataIndex:"cover_image",render:(d,u)=>{if(u.cover_image){let p="";return p=u.cover_image,t(ie,{width:40,height:40,src:p})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count"},{title:"\u53D1\u5E03\u72B6\u6001",dataIndex:"is_published",render(d,u){return u.is_published===1?t(D,{color:"green",children:"\u5DF2\u53D1\u5E03"}):t(D,{color:"red",children:"\u672A\u53D1\u5E03"})}},{title:"\u53D1\u5E03\u65F6\u95F4",width:200,dataIndex:"published_at"},{title:"\u64CD\u4F5C",width:280,render:(d,u)=>C(te,{children:[C(b,{type:"text",onClick:()=>g(u.uuid),children:[t(V,{}),"\u7F16\u8F91"]}),u.is_published===0?C(b,{type:"text",onClick:async()=>{(await J(u.uuid)).code===0&&e.current.reload()},children:[t(le,{}),"\u53D1\u5E03"]}):C(b,{type:"text",onClick:async()=>{(await Q(u.uuid)).code===0&&e.current.reload()},children:[t(ue,{}),"\u53D6\u6D88\u53D1\u5E03"]}),t(re,{reqDel:X,params:{uuid:u.uuid},reload:()=>e.current.reload(),children:C(b,{type:"text",children:[t(oe,{}),"\u5220\u9664"]})})]})}];return C(N,{children:[r.visible&&t(ce,{visible:r.visible,data:r.data,close:()=>r.close(),reload:()=>e.current.reload()}),t(A,{style:{display:r.visible?"none":void 0},children:t(H,{ref:e,request:G,columns:c,dataRender:v,actionBarRender:[t(b,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[t(b,{type:"primary",onClick:()=>{n(d=>{d.visible=!0,d.data=void 0})},children:"\u521B\u5EFA\u6587\u7AE0"},"create")]})})]})}export{_e as default};