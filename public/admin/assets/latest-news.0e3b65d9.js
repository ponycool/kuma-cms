import{r as e,j as a,L as s,aG as d,A as c,T as x,l as m}from"./vendor.790da365.js";/* empty css               */import{s as u}from"./index.module.a5c0f729.js";const{Paragraph:f}=x;function w(){const[r,i]=e.exports.useState(new Array(4).fill({})),[n,o]=e.exports.useState(!0),l=async()=>{const{data:t}=await m.get("/api/user/latestNews").finally(()=>o(!1));i(t)};return e.exports.useEffect(()=>{l()},[]),a(s,{dataSource:r,render:(t,p)=>a(s.Item,{style:{padding:"24px 20px 24px 0px"},children:n?a(d,{animation:!0,text:{width:["60%","90%"],rows:2},image:{shape:"circle"}}):a(s.Item.Meta,{className:u["list-meta-ellipsis"],avatar:a(c,{size:48,children:a("img",{src:t.avatar})}),title:t.title,description:a(f,{ellipsis:{rows:1},type:"secondary",style:{fontSize:"12px",margin:0},children:t.description})})},p)})}export{w as default};