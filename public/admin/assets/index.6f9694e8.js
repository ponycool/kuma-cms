import{h as e}from"./index.ac56ee66.js";function a(t){return e.post("/api/article/query",t)}function i(t){return e.post("/api/article/detail",t)}function c(t){return e.post("/api/article/create",t)}function n(t){return e.post("/api/article/update",t)}function o(t){return e.post("/api/article/publish",{uuid:t})}function p(t){return e.post("/api/article/unpublish",{uuid:t})}function u(t){return e.post("/api/article/delete",t)}function s(t){return e.post("/api/article/category/query",t)}function l(t){return e.post("/api/article/category/create",t)}function f(t){return e.post("/api/article/category/update",t)}function y(t){return e.post("/api/article/category/delete",t)}export{n as a,c as b,s as c,a as d,o as e,p as f,u as g,i as h,l as i,y as j,f as r};
