import{j as e,a as o,b as d,ax as c,T as m}from"./vendor.790da365.js";/* empty css              */import{u as p}from"./index.9461a131.js";import{l as u}from"./index.662e0e1f.js";import{s as i}from"./index.module.7b1a989f.js";function g(){const t=p(u),r=[{title:t["monitor.list.title.order"],render:(l,a,n)=>e("span",{children:n+1})},{title:t["monitor.list.title.cover"],dataIndex:"cover",render:(l,a)=>o("div",{className:i["data-statistic-list-cover-wrapper"],children:[e("img",{src:a.cover}),a.status===-1&&e(d,{color:"red",className:i["data-statistic-list-cover-tag"],children:t["monitor.list.tag.auditFailed"]})]})},{title:t["monitor.list.title.name"],dataIndex:"name"},{dataIndex:"duration",title:t["monitor.list.title.duration"]},{dataIndex:"id",title:t["monitor.list.title.id"]}],s=[{cover:"http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/c788fc704d32cf3b1136c7d45afc2669.png~tplv-uwbnlip3yd-webp.webp",name:"\u89C6\u9891\u76F4\u64AD",duration:"00:05:19",id:"54e23ade",status:-1}];return o("div",{className:i[""],children:[e(c,{columns:r,data:s,rowKey:"id",rowSelection:{type:"checkbox"},border:!1,pagination:!1}),o(m.Text,{type:"secondary",className:i["data-statistic-list-tip"],children:[t["monitor.list.tip.rotations"],s.length,t["monitor.list.tip.rest"]]})]})}export{g as default};
