import{ai as r,u as m,r as b,a as t,j as e,ar as o,ag as d,aG as g,R as F,T as y,az as B,l as C}from"./vendor.790da365.js";/* empty css              *//* empty css               */import{s as A,u as h}from"./index.9461a131.js";import I from"./header.bf2601be.js";import{s as n}from"./index.module.a5c0f729.js";import v from"./my-projects.007e3f17.js";import j from"./my-team.188b09e4.js";import D from"./latest-news.0e3b65d9.js";import"./project.8924eeb9.js";const x={"en-US":{"menu.user":"Personal Center","menu.user.info":"User Center","userInfo.title.project":"My project","userInfo.title.news":"Latest News","userInfo.title.team":"My team","userInfo.title.notice":"In-site Notification","userInfo.btn.more":"More","userInfo.btn.all":"All","userInfo.notice.empty":"No Data"},"zh-CN":{"menu.user":"\u4E2A\u4EBA\u4E2D\u5FC3","menu.user.info":"\u7528\u6237\u4E2D\u5FC3","userInfo.title.project":"\u6211\u7684\u9879\u76EE","userInfo.title.news":"\u6700\u65B0\u52A8\u6001","userInfo.title.team":"\u6211\u7684\u56E2\u961F","userInfo.title.notice":"\u7AD9\u5185\u901A\u77E5","userInfo.btn.more":"\u67E5\u770B\u66F4\u591A","userInfo.btn.all":"\u67E5\u770B\u5168\u90E8","userInfo.notice.empty":"\u6682\u65E0\u6570\u636E"}};A({setup:()=>{r.mock(new RegExp("/api/user/projectList"),()=>{const u=[{name:"\u79E6\u81FB\u5B87",email:"qingzhenyu@arco.design",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"},{name:"\u4E8E\u6D9B",email:"yuebao@arco.design",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"},{name:"\u5B81\u6CE2",email:"ningbo@arco.design",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"},{name:"\u90D1\u66E6\u6708",email:"zhengxiyue@arco.design",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"},{name:"\u5B81\u6CE2",email:"ningbo@arco.design",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"}];return new Array(6).fill(null).map((a,i)=>({id:i,enTitle:["Arco Design System","The Volcano Engine","OCR text recognition","Content resource management","Toutiao content management","Intelligent Robot Project"][i],title:["\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u8BBE\u8BA1\u7CFB\u7EDF","\u706B\u5C71\u5F15\u64CE\u667A\u80FD\u5E94\u7528","OCR\u6587\u672C\u8BC6\u522B","\u5185\u5BB9\u8D44\u6E90\u7BA1\u7406","\u4ECA\u65E5\u5934\u6761\u5185\u5BB9\u7BA1\u7406","\u667A\u80FD\u673A\u5668\u4EBA"][i],contributors:u,contributorsLength:r.Random.natural(5,100)}))}),r.mock(new RegExp("/api/users/teamList"),()=>new Array(4).fill(null).map((u,a)=>({name:["\u706B\u5C71\u5F15\u64CE\u667A\u80FD\u5E94\u7528\u56E2\u961F","\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u8BBE\u8BA1\u56E2\u961F","\u524D\u7AEF/UE\u5C0F\u5206\u961F","\u5185\u5BB9\u8BC6\u522B\u63D2\u4EF6\u5C0F\u5206\u961F"][a],avatar:["//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp","//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp","//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp","//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/8361eeb82904210b4f55fab888fe8416.png~tplv-uwbnlip3yd-webp.webp"][a],members:r.Random.natural(1,1e3)}))),r.mock(new RegExp("/api/user/latestNews"),()=>new Array(8).fill(null).map((u,a)=>({id:a,title:"\u738B\u591A\u9C7C\u5BA1\u6838\u4E86\u56FE\u6587\u5185\u5BB9\uFF1A 2021\u5E74\uFF0C\u4F60\u8FC7\u5F97\u600E\u4E48\u6837\uFF1F",description:"\u65B0\u534E\u7F51\u5E74\u7EC8\u7279\u522B\u7B56\u5212\uFF1A\u300A\u8FD9\u4E00\u5E74\uFF0C\u4F60\u8FC7\u5F97\u600E\u4E48\u6837\uFF1F\u300B\u56DE\u8BBF\u90A3\u4E9B\u4F60\u6700\u719F\u6089\u7684\u201C\u964C\u751F\u4EBA\u201D\u5E26\u4F60\u91CD\u6E29\u8FD9\u96BE\u5FD8\u76842021\u5E74\u56DE\u987E\u6211\u4EEC\u5171\u540C\u8BB0\u5FC6\u4E2D\u7684\u751F\u52A8\u6545\u4E8B\uFF01",avatar:"//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"}))),r.mock(new RegExp("/api/user/notice"),()=>[])}});const{Title:s}=y,{Row:E,Col:c}=B;function _(){const u=h(x),a=m(p=>p.userInfo),i=m(p=>p.userLoading),[f,l]=b.exports.useState(!1),w=async()=>{l(!0),await C.get("/api/user/notice").finally(()=>l(!1))};return b.exports.useEffect(()=>{w()},[]),t("div",{children:[e(I,{userInfo:a,loading:i}),t(E,{gutter:16,children:[e(c,{span:16,children:t(o,{className:n.wrapper,children:[t("div",{className:n["card-title-wrapper"],children:[e(s,{heading:6,style:{marginBottom:"20px"},children:u["userInfo.title.project"]}),e(d,{children:u["userInfo.btn.more"]})]}),e(v,{})]})}),e(c,{span:8,children:t(o,{className:n.wrapper,children:[e("div",{className:n["card-title-wrapper"],children:e(s,{heading:6,style:{marginBottom:"12px"},children:u["userInfo.title.team"]})}),e(j,{})]})})]}),t(E,{gutter:16,children:[e(c,{span:16,children:t(o,{className:n.wrapper,children:[t("div",{className:n["card-title-wrapper"],children:[e(s,{heading:6,style:{marginBottom:"8px"},children:u["userInfo.title.news"]}),e(d,{children:u["userInfo.btn.all"]})]}),e(D,{})]})}),e(c,{span:8,children:t(o,{className:n.wrapper,children:[e("div",{className:n["card-title-wrapper"],children:e(s,{heading:6,children:u["userInfo.title.notice"]})}),f?e(g,{text:{rows:10},animation:!0}):e(F,{status:"404",subTitle:u["userInfo.notice.empty"],style:{paddingTop:"60px",paddingBottom:"130px"}})]})})]})]})}export{_ as default};
