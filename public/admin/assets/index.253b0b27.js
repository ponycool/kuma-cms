import{u as l,i as o,r as u,j as t,B as i}from"./index.7437da46.js";import{C as c}from"./index.89f9c1a7.js";import{P as d}from"./index.d73ced9a.js";import{i as m,s as p}from"./index.784fd4e3.js";import"./index.39bcb729.js";import"./index.5d34a1a1.js";import"./index.1fef98cf.js";function b(){const s=l(o),e=l(m),r=u.exports.useRef();return t(c,{children:t(d,{ref:r,pagination:!1,pageSize:!1,actionBarRender:[t(i,{type:"primary",onClick:()=>{r.current.reload()},children:s["table.refresh"]},"reload")],columns:[{title:e["columns.logLevel"],dataIndex:"level",search:!0,valueType:"select",fieldProps:{options:[{label:e.info,value:"INFO"},{label:e.warn,value:"WARN"},{label:e.error,value:"ERROR"},{label:e.debug,value:"DEBUG"}]},render(n,a){switch(a.level){case"INFO":return e.info;case"WARN":return e.warn;case"ERROR":return e.error;case"DEBUG":return e.debug;default:return""}}},{title:e["columns.logCategory"],dataIndex:"category",search:!0,valueType:"select",fieldProps:{options:[{label:e.system,value:"SYSTEM"},{label:e.application,value:"APPLICATION"},{label:e.user,value:"USER"}]},render(n,a){switch(a.category){case"SYSTEM":return e.system;case"APPLICATION":return e.application;case"USER":return e.user;default:return""}}},{title:e["columns.message"],dataIndex:"message"},{title:e["columns.ipAddress"],dataIndex:"ip_address"},{title:e["columns.nickName"],dataIndex:"nickname"},{title:e["columns.createdAt"],dataIndex:"created_at"},{title:e["columns.accountName"],dataIndex:"accountname",hide:!0,search:!0},{title:e["columns.timeRange"],dataIndex:"startTime,endTime",hide:!0,search:!0,valueType:"date"},{title:e["columns.keyword"],dataIndex:"keyword",hide:!0,search:!0}],request:p})})}export{b as default};