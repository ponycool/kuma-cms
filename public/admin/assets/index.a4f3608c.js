import{h as e}from"./index.6da9ecde.js";function a(t){return e.post("/api/product/query",t)}function o(t){return e.post("/api/product/detail",t)}function p(t){return e.post("/api/product/create",t)}function u(t){return e.post("/api/product/update",t)}function c(t){return e.post("/api/product/enable",{uuid:t})}function n(t){return e.post("/api/product/disable",{uuid:t})}function i(t){return e.post("/api/product/delete",t)}function s(){return e.post("/api/product/category/query")}function d(t){return e.post("/api/product/category/create",t)}function f(t){return e.post("/api/product/category/update",t)}function y(t){return e.post("/api/product/category/delete",t)}export{d as a,s as b,f as c,y as d,p as e,c as f,n as g,o as h,a as p,i as r,u};
