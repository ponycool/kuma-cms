import{e as O,r as v,C as he,d as Ce,t as Fe,j as r,o as ye,c as Ee,ah as be,G as xe,a3 as Be,Q as _e,au as L,h as E,at as h,H as Ie,B as F,a as b,b2 as we,an as ke,F as Pe,b3 as Oe,b5 as Le}from"./index.8e0c85dd.js";import{T as Q}from"./index.da293d7e.js";import{U as Se}from"./index.ba123263.js";import{C as Z}from"./index.9f2d043a.js";import{P as Ae}from"./index.c183f425.js";import{i as Ne,C as Ve,D as Te}from"./use-immer.module.456f6713.js";import{a as k,i as De,b as Re}from"./index.432055a2.js";import{c as je}from"./convertNullToUndefined.a19d8223.js";import{t as qe}from"./index.d01a95e2.js";import{I as Ge}from"./image.263dc79b.js";import{I as Ue}from"./index.4cf880b2.js";import{I as He}from"./index.902f52cd.js";import"./index.25b91a77.js";import"./index.e844b260.js";import"./index.71148771.js";import"./index.d6639c64.js";var y=globalThis&&globalThis.__assign||function(){return y=Object.assign||function(e){for(var s,c=1,d=arguments.length;c<d;c++){s=arguments[c];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p])}return e},y.apply(this,arguments)},X=globalThis&&globalThis.__read||function(e,s){var c=typeof Symbol=="function"&&e[Symbol.iterator];if(!c)return e;var d=c.call(e),p,a=[],t;try{for(;(s===void 0||s-- >0)&&!(p=d.next()).done;)a.push(p.value)}catch(C){t={error:C}}finally{try{p&&!p.done&&(c=d.return)&&c.call(d)}finally{if(t)throw t.error}}return a},Me="Autocomplete_"+Math.random(),Y=k.Option,ze={defaultActiveFirstOption:!0,triggerElement:r(L,{})};function Je(e,s){var c,d=v.exports.useContext(he),p=d.getPrefixCls,a=d.componentConfig,t=Ce(e,ze,a==null?void 0:a.AutoComplete),C=t.style,B=t.className,u=t.children,n=t.data,g=t.defaultValue,te=t.value,re=t.placeholder,ie=t.error,ae=t.disabled,oe=t.strict,ne=t.allowClear,le=t.loading,ue=t.defaultActiveFirstOption,A=t.triggerElement,se=t.getPopupContainer,de=t.dropdownRender,ce=t.virtualListProps,N=t.onFocus,V=t.onBlur,x=t.onChange,T=t.onSearch,D=t.onSelect,U=t.onPressEnter,l=t.inputProps,H=X(Fe("",{defaultValue:g,value:te}),2),R=H[0],M=H[1],z=X(v.exports.useState(!1),2),pe=z[0],J=z[1],P=v.exports.useRef(null),_=v.exports.useRef(null),K=p("autocomplete"),fe="filterOption"in t?t.filterOption:function(i,o){return oe?o.props.value.indexOf(i)>-1:o.props.value.toLowerCase().indexOf(i.toLowerCase())>-1},j=O.Children.toArray(u),q=null;j.length&&(De(j[0])||Re(j[0]))?q=u:n&&n.length&&(q=n.map(function(i,o){if(v.exports.isValidElement(i))return i;if(typeof i=="string")return r(Y,{value:i,children:i},o);if(typeof i=="object"){var f=i,m=f.value,w=f.name;return r(Y,{value:m,extra:ye(i,["value","name"]),children:w},o)}return null})),v.exports.useImperativeHandle(s,function(){return P.current});var I=typeof A=="function"?A({value:R}):A,ve=O.cloneElement(I,y(y(y({ref:function(i){P.current=i;var o=I.ref;typeof o=="function"&&o(i)},className:Ee(""+K,l&&l.className,B),style:C,value:R,placeholder:re,error:ie,status:t.status,disabled:ae,allowClear:ne},l),be(t)),{suffix:le?r(xe,{}):((c=I==null?void 0:I.type)===null||c===void 0?void 0:c.displayName)==="Search"?void 0:(l==null?void 0:l.suffix)||r("i",{}),onFocus:function(i){var o;J(!0),N==null||N(i),(o=l==null?void 0:l.onFocus)===null||o===void 0||o.call(l,i)},onBlur:function(i){var o;J(!1),V==null||V(i),(o=l==null?void 0:l.onBlur)===null||o===void 0||o.call(l,i)},onKeyDown:function(i){var o,f,m,w,G,W=i.keyCode||i.which;if((f=(o=_.current)===null||o===void 0?void 0:o.hotkeyHandler)===null||f===void 0||f.call(o,i),W===Be.code&&U){var $=void 0;_.current&&($=_.current.getOptionInfoByValue(_.current.activeOptionValue)),U(i,$)}W===_e.code&&((w=(m=P.current)===null||m===void 0?void 0:m.blur)===null||w===void 0||w.call(m)),(G=l==null?void 0:l.onKeyDown)===null||G===void 0||G.call(l,i)},onChange:function(i,o){var f;M(i),T==null||T(i),x==null||x(i),(f=l==null?void 0:l.onChange)===null||f===void 0||f.call(l,i,o)}})),ge=y(y({popupVisible:!!(pe&&((n==null?void 0:n.length)||O.Children.count(u)))},t.triggerProps),{trigger:"focus",className:[K+"-popup"].concat(t.triggerProps&&t.triggerProps.className)}),me={triggerElement:ve,value:Me,inputValue:R,defaultActiveFirstOption:ue,triggerProps:ge,getPopupContainer:se,dropdownRender:de,filterOption:fe,virtualListProps:ce,notFoundContent:null,onChange:function(i,o){var f,m;M(i),x==null||x(i,o),i&&(D==null||D(i,o)),(m=(f=P.current)===null||f===void 0?void 0:f.blur)===null||m===void 0||m.call(f)}};return r(k,{...y({ref:_},me),children:q})}var Ke=O.forwardRef(Je),S=Ke;S.displayName="AutoComplete";S.Option=k.Option;S.OptGroup=k.OptGroup;var ee=S;function We(e){return E.post("/api/link/query",e)}function $e(e){return E.post("/api/link/detail",e)}function Qe(e){return E.post("/api/link/create",e)}function Xe(e){return E.post("/api/link/update",e)}function Ye(e){return E.post("/api/link/delete",e)}function Ze(e){return E.post("/api/link/enable",{uuid:e})}function et(e){return E.post("/api/link/disable",{uuid:e})}function tt(){return E.post("/api/link/group/query")}const rt=L.TextArea,{Option:it}=ee;function at(e){const[s]=h.useForm(),[c,d]=v.exports.useState(!1);async function p(){s.validate().then(async a=>{d(!0);try{const t={...a,icon:a.icon&&a.icon.length!==0?a.icon[0].response.data.name:void 0,detail_images:a.detail_images&&a.detail_images.length!==0?JSON.stringify(a.detail_images.map(B=>B.response.data.name)):void 0,status:a.status?"true":"false",sort_index:a.sort_index||1};let C;e.data?C=await Xe({...t,uuid:e.data.uuid}):C=await Qe(t),C.code===0&&(e.reload(),e.close())}finally{d(!1)}}).catch(()=>{console.error("\u4FE1\u606F\u4E0D\u5B8C\u6574")})}return v.exports.useEffect(()=>{if(e.data){const a=je(e.data),t=a.icon;s.setFieldsValue({...a,icon:a.icon?[{uid:a.icon,url:t,response:{data:{name:a.icon.replace("/media/image?n=",""),path:a.icon}}}]:[]})}},[e.data]),v.exports.useEffect(()=>{e.visible===!1&&s.resetFields()},[s,e.visible]),r(Z,{title:e.data?"\u4FEE\u6539\u53CB\u94FE":"\u521B\u5EFA\u53CB\u94FE",extra:r(Ie,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>e.close()}),actions:[r(F,{type:"default",onClick:()=>e.close(),children:"\u53D6\u6D88"},"cancel"),r(F,{type:"primary",loading:c,onClick:p,children:e.data?"\u4FDD\u5B58":"\u521B\u5EFA"},"submit")],children:b(h,{form:s,labelCol:{span:2},wrapperCol:{span:22},children:[r(h.Item,{label:"\u53CB\u94FE\u540D\u79F0",field:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CB\u94FE\u540D\u79F0"}],children:r(L,{maxLength:100,showWordLimit:!0,placeholder:"\u8BF7\u8F93\u5165\u53CB\u94FE\u540D\u79F0"})}),r(h.Item,{label:"\u53CB\u94FE\u56FE\u6807",field:"icon",triggerPropName:"fileList",children:r(Se,{action:"/api/upload/image",data:{token:JSON.parse(localStorage.getItem("token")).token},imagePreview:!0,accept:"image/png, image/jpg, image/jpeg",listType:"picture-card",limit:1})}),r(h.Item,{label:"\u53CB\u94FE\u5730\u5740",field:"url",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53CB\u94FE\u5730\u5740"}],children:r(L,{maxLength:200,placeholder:"\u8BF7\u8F93\u5165\u53CB\u94FE\u5730\u5740"})}),r(h.Item,{label:"\u8DF3\u8F6C\u65B9\u5F0F",field:"target",initialValue:"_blank",children:r(k,{options:e.target})}),r(h.Item,{label:"\u53CB\u94FE\u63CF\u8FF0",field:"description",children:r(rt,{maxLength:200,placeholder:"\u53CB\u94FE\u63CF\u8FF0",showWordLimit:!0,autoSize:!0,style:{minHeight:64}})}),r(h.Item,{label:"\u5206\u7EC4",field:"group",wrapperCol:{span:2},children:r(ee,{placeholder:"\u9009\u62E9\u5206\u7EC4",children:e.group.map(a=>r(it,{value:a,children:a},a))})}),r(h.Item,{label:"\u6392\u5E8F",field:"sort_index",wrapperCol:{span:2},initialValue:1,rules:[{validator(a,t){a&&a<1?t("\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0"):t()}}],children:r(we,{maxLength:10,hideControl:!0,precision:0,placeholder:"\u6392\u5E8F"})}),r(h.Item,{label:"\u542F\u7528\u72B6\u6001",field:"status",triggerPropName:"checked",initialValue:!1,children:r(ke,{})})]})})}function Et(){const e=v.exports.useRef(),[s,c]=v.exports.useState([]),[d,p]=Ne({visible:!1,close:function(){p(u=>{u.visible=!1})}}),[a,t]=v.exports.useState([]);async function C(u){try{const n=await $e({uuid:u});n.code===0&&p(g=>{g.data=n.data,g.visible=!0})}catch{}}v.exports.useEffect(()=>{qe().then(u=>{const n=[];for(const g in u.data)n.push({value:g,label:u.data[g]});c(n)}),tt().then(u=>{t(u.data)})},[]);const B=[{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",search:!0,hide:!0},{title:"\u540D\u5B57",dataIndex:"name",ellipsis:!0},{title:"\u56FE\u6807",width:150,dataIndex:"icon",render:(u,n)=>{if(n.icon){let g="";return g=n.icon,r(Ge,{width:40,height:40,src:g})}else return"\u6682\u65E0\u56FE\u6807"}},{title:"\u7F51\u5740",dataIndex:"url"},{title:"\u5206\u7EC4",dataIndex:"group"},{title:"\u542F\u7528\u72B6\u6001",dataIndex:"status",render(u,n){return n.status===1?r(Q,{color:"green",children:"\u542F\u7528"}):r(Q,{color:"red",children:"\u7981\u7528"})}},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"updated_at"},{title:"\u64CD\u4F5C",width:280,render:(u,n)=>b(Ve,{children:[b(F,{type:"text",onClick:()=>C(n.uuid),children:[r(Oe,{}),"\u7F16\u8F91"]}),n.status===0?b(F,{type:"text",onClick:async()=>{(await Ze(n.uuid)).code===0&&e.current.reload()},children:[r(Ue,{}),"\u542F\u7528"]}):b(F,{type:"text",onClick:async()=>{(await et(n.uuid)).code===0&&e.current.reload()},children:[r(Le,{}),"\u7981\u7528"]}),r(Te,{reqDel:Ye,params:{uuid:n.uuid},reload:()=>e.current.reload(),children:b(F,{type:"text",children:[r(He,{}),"\u5220\u9664"]})})]})}];return b(Pe,{children:[d.visible&&r(at,{visible:d.visible,data:d.data,close:()=>d.close(),reload:()=>e.current.reload(),target:s,group:a}),r(Z,{style:{display:d.visible?"none":void 0},children:r(Ae,{ref:e,request:We,columns:B,actionBarRender:[r(F,{type:"primary",onClick:()=>e.current.reload(),children:"\u5237\u65B0"},"refresh")],toolBarRender:[r(F,{type:"primary",onClick:()=>{p(u=>{u.visible=!0,u.data=void 0})},children:"\u521B\u5EFA\u53CB\u94FE"},"create")]})})]})}export{Et as default};