import{r as e,j as a,L as s,aG as c,A as l,T as x,l as u}from"./vendor.790da365.js";/* empty css               */const{Text:g}=x;function f(){const[r,i]=e.exports.useState(new Array(4).fill({})),[o,p]=e.exports.useState(!0),d=async()=>{const{data:t}=await u.get("/api/users/teamList").finally(()=>p(!1));i(t)};return e.exports.useEffect(()=>{d()},[]),a(s,{dataSource:r,render:(t,n)=>a(s.Item,{style:n!==r.length-1?{padding:"8px 0px"}:{padding:"8px 0px 0px 0px"},children:o?a(c,{animation:!0,text:{width:["80%","20%"],rows:2},image:{shape:"circle"}}):a(s.Item.Meta,{avatar:a(l,{size:48,children:a("img",{src:t.avatar})}),title:t.name,description:a(g,{type:"secondary",style:{fontSize:"12px"},children:`\u5171${(t.members||0).toLocaleString()}\u4EBA`})})},n)})}export{f as default};