import{h as e}from"./index.0122537b.js";function r(t){return e.post("/api/article/query",t)}function i(t){return e.post("/api/article/detail",t)}function c(t){return e.post("/api/article/create",t)}function n(t){return e.post("/api/article/update",t)}function o(t){return e.post("/api/article/publish",{uuid:t})}function p(t){return e.post("/api/article/unpublish",{uuid:t})}function u(t){return e.post("/api/article/delete",t)}function s(t){return e.post("/api/article/category",t)}function l(t){return e.post("/api/article/category/create",t)}function f(t){return e.post("/api/article/category/update",t)}function g(t){return e.post("/api/article/category/delete",t)}export{n as a,c as b,s as c,r as d,o as e,p as f,u as g,i as h,l as i,g as j,f as r};
