import{h as d,ae as g,au as o,r as l,j as t,H as I,B as n,a as f,ao as v,b2 as L,M as k,F as w,b3 as D,b5 as S}from"./index.9be7a617.js";import{T as C}from"./index.512bee3e.js";import{C as b}from"./index.5d900833.js";import{P as q}from"./index.3267f3c4.js";import{i as T,C as O,D as _}from"./use-immer.module.3045a209.js";import{c as A}from"./convertNullToUndefined.a19d8223.js";import{M as P}from"./index.74eff7bd.js";import{t as M}from"./index.11fbc3a2.js";import{I as W}from"./index.abbd2c38.js";import{I as j}from"./index.4c007b98.js";import"./index.56f85254.js";import"./index.0bcf8b04.js";import"./index.fddf2801.js";import"./index.ce049fdd.js";function z(e){return d.post("/api/page/query",e)}function H(e){return d.post("/api/page/detail",e)}function N(e){return d.post("/api/page/create",e)}function R(e){return d.post("/api/page/update",e)}function U(e){return d.post("/api/page/delete",e)}function G(e){return d.post("/api/page/enable",{uuid:e})}function V(e){return d.post("/api/page/disable",{uuid:e})}function J(){return d.post("/api/page/group/query")}const x=g.TextArea;function K(e){const[c]=o.useForm(),[F,s]=l.exports.useState(!1);async function m(){c.validate().then(async u=>{s(!0);try{const i={...u,status:u.status?"true":"false"};let h;e.data?h=await R({...i,uuid:e.data.uuid||e.uuid}):h=await N(i),h.code===0&&(e.reload(),e.close())}finally{s(!1)}}).catch(u=>{if(u.errors)for(const i in u.errors)k.error(u.errors[i].message)})}return l.exports.useEffect(()=>{var u;if((u=e.data)!=null&&u.page){const i=A(e.data.page);c.setFieldsValue({...i})}},[e.data]),l.exports.useEffect(()=>{e.visible===!1&&c.resetFields()},[c,e.visible]),t(b,{title:e.data?"\u4FEE\u6539\u53CB\u94FE":"\u521B\u5EFA\u53CB\u94FE",extra:t(I,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[t(n,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),t(n,{type:"primary",loading:F,onClick:m,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:f(o,{form:c,labelCol:{span:2},wrapperCol:{span:22},children:[t(o.Item,{label:"\u6807\u9898",field:"title",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898"}],children:t(g,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u6807\u9898"})}),t(o.Item,{label:"\u7F16\u7801",field:"code",wrapperCol:{span:2},children:t(g,{maxLength:50,placeholder:"\u8BF7\u8F93\u5165\u7F16\u7801"})}),t(o.Item,{label:"SEO\u6807\u9898",field:"seo_title",children:t(g,{maxLength:200,showWordLimit:!0,placeholder:"SEO\u6807\u9898"})}),t(o.Item,{label:"SEO\u63CF\u8FF0",field:"seo_desc",children:t(x,{maxLength:200,placeholder:"SEO\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(o.Item,{label:"SEO\u5173\u952E\u8BCD",field:"seo_keywords",children:t(x,{maxLength:200,placeholder:"SEO\u5173\u952E\u8BCD",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),t(o.Item,{label:"\u542F\u7528",field:"status",triggerPropName:"checked",initialValue:!1,children:t(v,{})}),t(L,{orientation:"left",children:"\u6B63\u6587"}),t(o.Item,{field:"content",wrapperCol:{span:24},triggerPropName:"html",trigger:"getContent",rules:[{required:!0},{validator(u,i){if(u==="<p><br></p>")return i("\u8BF7\u8F93\u5165\u6B63\u6587");i()}}],children:t(P,{})})]})})}function le(){const e=l.exports.useRef(),[c,F]=l.exports.useState([]),[s,m]=T({visible:!1,close:function(){m(r=>{r.visible=!1})}}),[u,i]=l.exports.useState([]),[h,y]=l.exports.useState();async function E(r){try{const a=await H({uuid:r});a.code===0&&(y(r),m(p=>{p.data=a.data,p.visible=!0}))}catch{}}l.exports.useEffect(()=>{M().then(r=>{const a=[];for(const p in r.data)a.push({value:p,label:r.data[p]});F(a)}),J().then(r=>{i(r.data)})},[]);const B=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u6807\u9898",dataIndex:"title",ellipsis:!0},{title:"\u7F16\u7801",dataIndex:"code"},{title:"\u542F\u7528\u72B6\u6001",dataIndex:"status",render(r,a){return a.status===1?t(C,{color:"green",children:"\u542F\u7528"}):t(C,{color:"red",children:"\u7981\u7528"})}},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"updated_at"},{title:"\u64CD\u4F5C",width:280,render:(r,a)=>f(O,{children:[f(n,{type:"text",onClick:()=>E(a.uuid),children:[t(D,{}),"\u7F16\u8F91"]}),a.status===0?f(n,{type:"text",onClick:async()=>{(await G(a.uuid)).code===0&&e.current.reload()},children:[t(W,{}),"\u542F\u7528"]}):f(n,{type:"text",onClick:async()=>{(await V(a.uuid)).code===0&&e.current.reload()},children:[t(S,{}),"\u7981\u7528"]}),t(_,{reqDel:U,params:{uuid:a.uuid},reload:()=>e.current.reload(),children:f(n,{type:"text",children:[t(j,{}),"\u5220\u9664"]})})]})}];return f(w,{children:[s.visible&&t(K,{visible:s.visible,data:s.data,close:()=>s.close(),reload:()=>e.current.reload(),target:c,group:u,uuid:h}),t(b,{style:{display:s.visible?"none":void 0},children:t(q,{ref:e,request:z,columns:B,actionBarRender:[t(n,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[t(n,{type:"primary",onClick:()=>{y(void 0),m(r=>{r.visible=!0,r.data=void 0})},children:"\u521B\u5EFA\u5355\u9875"},"create")]})})]})}export{le as default};
