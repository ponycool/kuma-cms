import{h as o,j as t}from"./index.169c52d4.js";import{C as i}from"./index.fc472272.js";import{P as e}from"./index.3bd23bee.js";function n(a){return o.post("api/log/login",a)}function l(){return t(i,{children:t(e,{pageSize:!1,pagination:!1,columns:[{title:"\u8D26\u53F7",dataIndex:"account_name"},{title:"ip",dataIndex:"ip"},{title:"\u767B\u5F55\u72B6\u6001",dataIndex:"login_status"}],request:n})})}export{l as default};