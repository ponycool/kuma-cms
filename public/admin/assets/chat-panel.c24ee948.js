import{r as i,a as t,j as e,T as u,S as n,P as o,O as r,B as c,at as x,i as g,au as y,l as j}from"./vendor.790da365.js";import{u as S}from"./index.9461a131.js";import{l as L}from"./index.662e0e1f.js";import v from"./index.6c50ba10.js";import{s}from"./index.module.7b1a989f.js";import"./item.bf025203.js";function M(){const a=S(L),[d,h]=i.exports.useState([]),[p,l]=i.exports.useState(!1);function m(){l(!0),j.get("/api/chatList").then(f=>{h(f.data||[])}).finally(()=>{l(!1)})}return i.exports.useEffect(()=>{m()},[]),t("div",{className:s["chat-panel"],children:[t("div",{className:s["chat-panel-header"],children:[e(u.Title,{style:{marginTop:0,marginBottom:16},heading:6,children:a["monitor.title.chatPanel"]}),t(n,{size:8,children:[e(o,{style:{width:80},defaultValue:"all",children:e(o.Option,{value:"all",children:a["monitor.chat.options.all"]})}),e(r.Search,{placeholder:a["monitor.chat.placeholder.searchCategory"]}),e(c,{type:"text",iconOnly:!0,children:e(x,{})})]})]}),e("div",{className:s["chat-panel-content"],children:e(g,{loading:p,style:{width:"100%"},children:e(v,{data:d})})}),e("div",{className:s["chat-panel-footer"],children:t(n,{size:8,children:[e(r,{suffix:e(y,{})}),e(c,{type:"primary",children:a["monitor.chat.update"]})]})})]})}export{M as default};
