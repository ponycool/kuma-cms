import{e as L,r as C,f as N,j as e,_ as A,au as F,at as h,F as R,a as v,H as q,B as w,ba as z,an as H,b9 as U,ax as G,bb as K}from"./index.17afa57a.js";import{T as B}from"./index.70b46f9a.js";import{U as Z}from"./index.1c80a89c.js";import{C as T}from"./index.78af0889.js";import{T as J,P as Q}from"./index.b31c21f2.js";import{c as W,a as X,b as Y,d as ee,e as te,f as re,g as ae,h as ie}from"./index.bcfe22c1.js";import{i as ne,C as oe,D as le}from"./use-immer.module.275c8cce.js";import"./index.ba74eecf.js";import{M as ue}from"./index.720fa79a.js";import{I as se}from"./image.0c93b1fb.js";import{I as ce}from"./index.e9f70ed9.js";import"./index.7f0e34d3.js";import"./index.7ec2cf08.js";import"./index.2739d5bf.js";import"./index.10dfb9a6.js";function S(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,r)}return a}function j(t){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?S(Object(a),!0).forEach(function(r){A(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):S(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function de(t,i){var a=C.exports.useContext(N),r=a.prefixCls,n=r===void 0?"arco":r,x=t.spin,b=t.className,u=j(j({"aria-hidden":!0,focusable:!1,ref:i},t),{},{className:"".concat(b?b+" ":"").concat(n,"-icon ").concat(n,"-icon-reply")});return x&&(u.className="".concat(u.className," ").concat(n,"-icon-loading")),delete u.spin,delete u.isIcon,e("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...u,children:e("path",{d:"m6.642 24.684 14.012 14.947a.2.2 0 0 0 .346-.137v-8.949A23.077 23.077 0 0 1 26 30c6.208 0 11.84 2.459 15.978 6.456a.01.01 0 0 0 .017-.007C42 36.299 42 36.15 42 36c0-10.493-8.506-19-19-19-.675 0-1.342.035-2 .104V8.506a.2.2 0 0 0-.346-.137L6.642 23.316a1 1 0 0 0 0 1.368Z"})})}var O=L.forwardRef(de);O.defaultProps={isIcon:!0};O.displayName="IconReply";var pe=O;function k(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,r)}return a}function P(t){for(var i=1;i<arguments.length;i++){var a=arguments[i]!=null?arguments[i]:{};i%2?k(Object(a),!0).forEach(function(r){A(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}function he(t,i){var a=C.exports.useContext(N),r=a.prefixCls,n=r===void 0?"arco":r,x=t.spin,b=t.className,u=P(P({"aria-hidden":!0,focusable:!1,ref:i},t),{},{className:"".concat(b?b+" ":"").concat(n,"-icon ").concat(n,"-icon-send")});return x&&(u.className="".concat(u.className," ").concat(n,"-icon-loading")),delete u.spin,delete u.isIcon,e("svg",{fill:"none",stroke:"currentColor",strokeWidth:"4",viewBox:"0 0 48 48",...u,children:e("path",{strokeMiterlimit:"3.864",d:"m14 24-7-5V7l34 17L7 41V29l7-5Zm0 0h25"})})}var I=L.forwardRef(he);I.defaultProps={isIcon:!0};I.displayName="IconSend";var fe=I;const{Row:me,Col:y}=G,E=F.TextArea;function ge(t){const[i]=h.useForm(),[a,r]=C.exports.useState(""),[n,x]=C.exports.useState(!1),[b,u]=C.exports.useState([]);async function d(){try{const l=await W();if(l.code===0){const m=l.data.pageData,f=new Map,s=[];m.forEach(c=>f.set(c.id,{...c,children:[]})),m.forEach(c=>{const g=f.get(c.pid);g?g.children.push(f.get(c.id)):s.push(f.get(c.id))}),u(s)}}catch{}}function o(l){r(l)}async function p(){i.validate().then(async l=>{x(!0);try{if(!a||a==="<p><br></p>")throw new Error("\u8BF7\u586B\u5199\u6587\u7AE0\u5185\u5BB9");const m={...l,cover_image:l.cover_image&&l.cover_image.length!==0?l.cover_image[0].response.data.name:void 0,is_published:l.is_published?"true":"false",content:a};let f;t.data?f=await X({...m,uuid:t.data.uuid}):f=await Y(m),f.code===0&&(t.reload(),t.close())}finally{x(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return C.exports.useEffect(()=>{d()},[]),C.exports.useEffect(()=>{if(t.data){const{title:l,author:m,cid:f,summary:s,is_published:c,cover_image:g,sort_index:D,seo_title:$,seo_desc:M,seo_keywords:V}=t.data;let _="";_=g,i.setFieldsValue({title:l,author:m,cid:f,summary:s,is_published:c,sort_index:D||void 0,seo_title:$,seo_desc:M,seo_keywords:V,cover_image:g?[{uid:g,url:_,response:{data:{name:g.replace("/media/image?n=",""),path:g}}}]:[]}),r(t.data.content)}},[t.data]),C.exports.useEffect(()=>{t.visible===!1&&(i.resetFields(),r(void 0))},[i,t.visible]),e(R,{children:v(T,{title:t.data?"\u4FEE\u6539\u6587\u7AE0":"\u521B\u5EFA\u6587\u7AE0",extra:e(q,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>t.close()}),actions:[e(w,{type:"default",onClick:()=>t.close(),children:"\u53D6\u6D88"},"cancel"),e(w,{type:"primary",loading:n,onClick:p,children:t.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:[e(h,{form:i,labelCol:{span:2},wrapperCol:{span:22},children:v(me,{children:[e(y,{span:24,children:e(h.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:e(F,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})})}),e(y,{span:24,children:e(h.Item,{label:"\u5206\u7C7B",field:"cid",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5206\u7C7B"}],wrapperCol:{span:10},children:e(J,{treeData:b,fieldNames:{key:"id",title:"name"},allowClear:!0})})}),e(y,{span:24,children:e(h.Item,{label:"\u4F5C\u8005",field:"author",wrapperCol:{span:10},children:e(F,{maxLength:50,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u4F5C\u8005"})})}),e(y,{span:24,children:e(h.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:e(F,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})})}),e(y,{span:24,children:e(h.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:e(E,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})}),e(y,{span:24,children:e(h.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:e(E,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})}),e(y,{span:24,children:e(h.Item,{label:"\u6587\u7AE0\u5C01\u9762",field:"cover_image",triggerPropName:"fileList",children:e(Z,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})})}),e(y,{span:24,children:e(h.Item,{label:"\u63CF\u8FF0",field:"summary",children:e(E,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})})}),e(y,{span:24,children:e(h.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},children:e(z,{maxLength:10,hideControl:!0,placeholder:"\u6587\u7AE0\u6392\u5E8F"})})}),e(y,{span:24,children:e(h.Item,{label:"\u662F\u5426\u53D1\u5E03",field:"is_published",triggerPropName:"checked",initialValue:!1,children:e(H,{})})})]})}),e(U,{orientation:"left",children:"\u6B63\u6587"}),e(ue,{html:a,getContent:o})]})})}function ke(){const t=C.exports.useRef(),[i,a]=C.exports.useState([]),[r,n]=ne({visible:!1,close:function(){n(d=>{d.visible=!1})}});async function x(d){const p=(await W()).data.pageData,l=new Map,m=[];return p.forEach(s=>l.set(s.id,{...s,children:[]})),p.forEach(s=>{const c=l.get(s.pid);c?c.children.push(l.get(s.id)):m.push(l.get(s.id))}),a(m),d.map(s=>{const c=p.find(g=>g.id===s.cid);return{...s,category:c?c.name:null}})}async function b(d){try{const o=await ie({uuid:d});o.code===0&&n(p=>{p.data=o.data,p.visible=!0})}catch{}}const u=[{title:"\u5206\u7C7B",dataIndex:"cid",search:!0,hide:!0,valueType:"treeSelect",fieldProps:{treeData:i,fieldNames:{key:"id",title:"name"},allowClear:!0}},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u5206\u7C7B",dataIndex:"category"},{title:"\u4F5C\u8005",dataIndex:"author"},{title:"\u5C01\u9762\u56FE\u7247",width:150,dataIndex:"cover_image",render:(d,o)=>{if(o.cover_image){let p="";return p=o.cover_image,e(se,{width:40,height:40,src:p})}else return"\u6682\u65E0\u5C01\u9762"}},{title:"\u6D4F\u89C8\u91CF",dataIndex:"view_count"},{title:"\u53D1\u5E03\u72B6\u6001",dataIndex:"is_published",render(d,o){return o.is_published===1?e(B,{color:"green",children:"\u5DF2\u53D1\u5E03"}):e(B,{color:"red",children:"\u672A\u53D1\u5E03"})}},{title:"\u53D1\u5E03\u65F6\u95F4",width:200,dataIndex:"published_at"},{title:"\u64CD\u4F5C",width:280,render:(d,o)=>v(oe,{children:[v(w,{type:"text",onClick:()=>b(o.uuid),children:[e(K,{}),"\u7F16\u8F91"]}),o.is_published===0?v(w,{type:"text",onClick:async()=>{(await te(o.uuid)).code===0&&t.current.reload()},children:[e(fe,{}),"\u53D1\u5E03"]}):v(w,{type:"text",onClick:async()=>{(await re(o.uuid)).code===0&&t.current.reload()},children:[e(pe,{}),"\u53D6\u6D88\u53D1\u5E03"]}),e(le,{reqDel:ae,params:{uuid:o.uuid},reload:()=>t.current.reload(),children:v(w,{type:"text",children:[e(ce,{}),"\u5220\u9664"]})})]})}];return v(R,{children:[r.visible&&e(ge,{visible:r.visible,data:r.data,close:()=>r.close(),reload:()=>t.current.reload()}),e(T,{style:{display:r.visible?"none":void 0},children:e(Q,{ref:t,request:ee,columns:u,dataRender:x,actionBarRender:[e(w,{type:"primary",onClick:()=>t.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[e(w,{type:"primary",onClick:()=>{n(d=>{d.visible=!0,d.data=void 0})},children:"\u521B\u5EFA\u6587\u7AE0"},"create")]})})]})}export{ke as default};