import{aQ as f,r as i,a as d,j as s,aR as m}from"./index.db69681f.js";import{C as r}from"./index.e618ee41.js";import{i as h}from"./index.079b4db4.js";function v(t){f(h);const[l,o]=i.exports.useState([]);return i.exports.useEffect(()=>{var u,n;const e=[];if((u=t.data)!=null&&u.systemInfo){for(const a in t.data.systemInfo)a==="hostname"?e.push({title:"\u4E3B\u673A\u540D\u79F0",dataIndex:"hostname",value:t.data.systemInfo.hostname}):a==="os"?e.push({title:"\u53D1\u884C\u7248\u672C",dataIndex:"os",value:t.data.systemInfo.os}):a==="kernel"?e.push({title:"\u5185\u6838\u7248\u672C",dataIndex:"kernel",value:t.data.systemInfo.kernel}):a==="system"?e.push({title:"\u7CFB\u7EDF\u7C7B\u578B",dataIndex:"system",value:t.data.systemInfo.system}):a==="bootTime"?e.push({title:"\u542F\u52A8\u65F6\u95F4",dataIndex:"bootTime",value:t.data.systemInfo.bootTime}):a==="uptime"?e.push({title:"\u8FD0\u884C\u65F6\u95F4",dataIndex:"uptime",value:t.data.systemInfo.uptime}):a==="version"&&e.push({title:"PHP\u7248\u672C",dataIndex:"version",value:t.data.systemInfo.version});(n=t.data)!=null&&n.version&&e.splice(-2,0,{title:"\u7CFB\u7EDF\u7248\u672C",dataIndex:"os_version",value:t.data.version}),o(e)}},[t.data]),d(r,{children:[s("div",{style:{display:"flex",justifyContent:"space-between"},children:s(m.Title,{heading:6,children:"\u7CFB\u7EDF\u4FE1\u606F"})}),s("div",{children:l.map(e=>d("p",{children:[s("span",{style:{fontWeight:"bold",marginRight:16},children:e.title}),s("span",{style:{fontSize:14,color:"#676D75"},children:e.value})]},e.dataIndex))})]})}export{v as default};
