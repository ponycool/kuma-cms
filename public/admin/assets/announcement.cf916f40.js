import{r as n,aL as u,a as r,j as t,aM as d,aN as f}from"./index.8f186ff9.js";import{T as h}from"./index.a251fd89.js";import{S as y}from"./index.bca4cbdb.js";import{C as k}from"./index.c0c2d13a.js";import{L as g}from"./index.e0788cd9.js";import{i as x}from"./index.079b4db4.js";const w="_item_1h3pz_1",_="_link_1h3pz_8";var s={item:w,link:_};function b(){const[i,c]=n.exports.useState([]),[l,o]=n.exports.useState(!0),a=u(x),p=()=>{o(!0),f.get("/api/workplace/announcement").then(e=>{c(e.data)}).finally(()=>{o(!1)})};n.exports.useEffect(()=>{p()},[]);function m(e){switch(e){case"activity":return"orangered";case"info":return"cyan";case"notice":return"arcoblue";default:return"arcoblue"}}return r(k,{children:[r("div",{style:{display:"flex",justifyContent:"space-between"},children:[t(d.Title,{heading:6,children:a["workplace.announcement"]}),t(g,{children:a["workplace.seeMore"]})]}),t(y,{loading:l,text:{rows:5,width:"100%"},animation:!0,children:t("div",{children:i.map(e=>r("div",{className:s.item,children:[t(h,{color:m(e.type),size:"small",children:a[`workplace.${e.type}`]}),t("span",{className:s.link,children:e.content})]},e.key))})})]})}export{b as default};
