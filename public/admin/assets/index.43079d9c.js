import{h as a,j as u}from"./index.ae7ab947.js";import{C as r}from"./index.3c94fb9e.js";import{P as n}from"./index.e1f1813d.js";function o(t){return a.post("/api/log/login",t)}function l(){return u(r,{children:u(n,{columns:[{title:"\u8D26\u6237\u540D\u79F0",dataIndex:"keyword",hide:!0,search:!0},{title:"\u8D26\u6237\u540D\u79F0",dataIndex:"account_name"},{title:"ip",dataIndex:"ip"},{title:"\u767B\u5F55\u72B6\u6001",dataIndex:"login_status",render(t,e){switch(e.login_status){case 1:return"\u767B\u5F55";case 0:return"\u767B\u51FA";default:return"\u72B6\u6001\u5F02\u5E38"}}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at"}],request:o})})}export{l as default};
