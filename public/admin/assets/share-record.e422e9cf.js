import{u as a,r as l,i,j as r,K as m,B as u}from"./index.565c71ed.js";import{C as h}from"./index.88e38468.js";import{P as p}from"./index.b442c2d6.js";import{l as x,b as I}from"./index.11223457.js";import"./index.60a23487.js";import"./b-tween.es.064e2a03.js";import"./index.0d3431fb.js";import"./index.bf2ec937.js";import"./index.8addcb6e.js";function v({uuid:o,name:s,close:n}){const e=a(x),t=l.exports.useRef(),c=a(i),d=[{title:"ID",dataIndex:"id"},{title:e["shareRecord.columns.planId"],dataIndex:"plan_id",render:()=>r("span",{children:s})},{title:e["shareRecord.columns.name"],dataIndex:"name",search:!0},{title:e["shareRecord.columns.phoneNumber"],dataIndex:"phone_number",search:!0},{title:e["shareRecord.columns.email"],dataIndex:"email",search:!0},{title:e["shareRecord.columns.shareCode"],dataIndex:"share_code",search:!0},{title:e["shareRecord.columns.shareCount"],dataIndex:"share_count"},{title:e["shareRecord.columns.viewCount"],dataIndex:"view_count"}];return r(h,{title:e["shareRecord.title"],extra:r(m,{style:{cursor:"point",color:"#333",fontSize:"16px"},onClick:()=>n()}),children:r(p,{ref:t,columns:d,request:I,params:{planId:o},actionBarRender:[r(u,{type:"primary",onClick:()=>t.current.reload(),children:c["table.refresh"]},"refresh")]})})}export{v as default};