import{u as f,r as l,a as d,j as n,aA as u}from"./index.2a82b82e.js";import{C as c}from"./index.e47012e0.js";import{i as h}from"./index.8527a59a.js";function x(t){const a=f(h),[r,m]=l.exports.useState([]);return l.exports.useEffect(()=>{var o,i;const e=[];if((o=t.data)!=null&&o.systemInfo){for(const s in t.data.systemInfo)s==="hostname"?e.push({title:a["workplace.hostname"],dataIndex:"hostname",value:t.data.systemInfo.hostname}):s==="os"?e.push({title:a["workplace.os"],dataIndex:"os",value:t.data.systemInfo.os}):s==="kernel"?e.push({title:a["workplace.kernel"],dataIndex:"kernel",value:t.data.systemInfo.kernel}):s==="system"?e.push({title:a["workplace.system"],dataIndex:"system",value:t.data.systemInfo.system}):s==="bootTime"?e.push({title:a["workplace.bootTime"],dataIndex:"bootTime",value:t.data.systemInfo.bootTime}):s==="uptime"?e.push({title:a["workplace.uptime"],dataIndex:"uptime",value:t.data.systemInfo.uptime}):s==="version"&&e.push({title:a["workplace.version"],dataIndex:"version",value:t.data.systemInfo.version});(i=t.data)!=null&&i.version&&e.splice(-2,0,{title:a["workplace.os_version"],dataIndex:"os_version",value:t.data.version}),m(e)}},[t.data,a]),d(c,{children:[n("div",{style:{display:"flex",justifyContent:"space-between"},children:n(u.Title,{heading:6,children:a["workplace.systemInfo"]})}),n("div",{children:r.map(e=>d("p",{children:[n("span",{style:{fontWeight:"bold",marginRight:16},children:e.title}),n("span",{style:{fontSize:14,color:"#676D75"},children:e.value})]},e.dataIndex))})]})}export{x as default};