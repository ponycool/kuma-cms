import{aA as o,r as n,a as i,j as u,aB as f}from"./index.44b4ce34.js";import{C as m}from"./index.0b3f5854.js";import{i as r}from"./index.079b4db4.js";function c(e){o(r);const[l,d]=n.exports.useState([]);return n.exports.useEffect(()=>{var s;if((s=e.data)!=null&&s.systemInfo){const t=[];for(const a in e.data.systemInfo)a==="hostname"?t.push({title:"\u4E3B\u673A\u540D\u79F0",dataIndex:"hostname",value:e.data.systemInfo.hostname}):a==="os"?t.push({title:"\u53D1\u884C\u7248\u672C",dataIndex:"os",value:e.data.systemInfo.os}):a==="kernel"?t.push({title:"\u5185\u6838\u7248\u672C",dataIndex:"kernel",value:e.data.systemInfo.kernel}):a==="system"?t.push({title:"\u7CFB\u7EDF\u7C7B\u578B",dataIndex:"system",value:e.data.systemInfo.system}):a==="bootTime"?t.push({title:"\u542F\u52A8\u65F6\u95F4",dataIndex:"bootTime",value:e.data.systemInfo.bootTime}):a==="uptime"?t.push({title:"\u8FD0\u884C\u65F6\u95F4",dataIndex:"uptime",value:e.data.systemInfo.uptime}):a==="version"&&t.push({title:"PHP\u7248\u672C",dataIndex:"version",value:e.data.systemInfo.version});d(t)}},[e.data]),i(m,{children:[u("div",{style:{display:"flex",justifyContent:"space-between"},children:u(f.Title,{heading:6,children:"\u7CFB\u7EDF\u4FE1\u606F"})}),u("div",{children:l.map(s=>i("p",{children:[u("span",{style:{fontWeight:"bold",marginRight:16},children:s.title}),u("span",{style:{fontSize:14,color:"#676D75"},children:s.value})]},s.dataIndex))})]})}export{c as default};
