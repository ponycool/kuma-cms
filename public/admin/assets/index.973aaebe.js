import{j as u}from"./index.d7da5add.js";import{C as a}from"./index.bfb3086e.js";import{P as r}from"./index.e01d1b69.js";import{s as l}from"./index.cf60aec1.js";import"./index.a68f64a6.js";import"./index.e049f78f.js";import"./index.7c59ebec.js";import"./index.c9b1fb52.js";import"./index.d1d405b6.js";function p(){return u(a,{children:u(r,{pagination:!1,pageSize:!1,columns:[{title:"\u65E5\u5FD7\u7B49\u7EA7",dataIndex:"level",search:!0,valueType:"select",fieldProps:{allowClear:!0,options:[{label:"\u4FE1\u606F",value:"INFO"},{label:"\u8B66\u544A",value:"WARN"},{label:"\u9519\u8BEF",value:"ERROR"},{label:"\u8C03\u8BD5",value:"DEBUG"}]},render(t,e){switch(e.level){case"INFO":return"\u4FE1\u606F";case"WARN":return"\u8B66\u544A";case"ERROR":return"\u9519\u8BEF";case"DEBUG":return"\u8C03\u8BD5";default:return""}}},{title:"\u65E5\u5FD7\u7C7B\u522B",dataIndex:"category",search:!0,valueType:"select",fieldProps:{allowClear:!0,options:[{label:"\u7CFB\u7EDF",value:"SYSTEM"},{label:"\u5E94\u7528",value:"APPLICATION"},{label:"\u7528\u6237",value:"USER"}]},render(t,e){switch(e.category){case"SYSTEM":return"\u7CFB\u7EDF";case"APPLICATION":return"\u5E94\u7528";case"USER":return"\u7528\u6237";default:return""}}},{title:"\u6D88\u606F",dataIndex:"message"},{title:"IP\u5730\u5740",dataIndex:"ip_address"},{title:"\u7528\u6237\u540D\u79F0",dataIndex:"nickname"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"created_at"},{title:"\u8D26\u6237\u540D\u79F0",dataIndex:"accountname",hide:!0,search:!0},{title:"\u65F6\u95F4\u8303\u56F4",dataIndex:"startTime,endTime",hide:!0,search:!0,valueType:"date"},{title:"\u5173\u952E\u8BCD",dataIndex:"keyword",hide:!0,search:!0}],request:l})})}export{p as default};
