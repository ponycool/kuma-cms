import{b6 as E,b7 as e,b8 as C,h as k,r as F,a as n,ab as m,j as u,ax as w}from"./index.739e45f0.js";import D from"./overview.e111b551.js";import h from"./popular-contents.a59bae15.js";import f from"./content-percentage.8f7e5cac.js";import y from"./shortcuts.0afd7371.js";import A from"./announcement.0cc70b61.js";import g from"./carousel.105c5c17.js";import d from"./docs.04c54f2a.js";import"./index.6629fa7e.js";import"./index.c16a79e0.js";import"./index.a1b4c41e.js";import"./index.079b4db4.js";import"./index.a060946a.js";import"./index.71987e97.js";import"./index.8dc7e9db.js";import"./index.e1f38fb8.js";const _="_banner_whzkr_1",v="_wrapper_whzkr_5",x="_left_whzkr_9",b="_right_whzkr_13",z="_panel_whzkr_16";var l={banner:_,wrapper:v,left:x,right:b,panel:z};E({setup:()=>{e.mock(new RegExp("/api/workplace/overview-content"),()=>{const r=new Date().getFullYear();return{allContents:"373.5w+",liveContents:"368",increaseComments:"8874",growthRate:"2.8%",chartData:(()=>new Array(12).fill(0).map((p,s)=>({month:`${r}-${s+1}`,view_count:e.Random.natural(2e4,75e3)})))()}});const t=()=>{const{list:r}=e.mock({"list|100":[{"rank|+1":1,title:()=>e.Random.pick(["\u7ECF\u6D4E\u65E5\u62A5\uFF1A\u8D22\u653F\u653F\u7B56\u8981\u7CBE\u51C6\u63D0\u5347\u6548\u80FD","\u201C\u53CC12\u201D\u9047\u51B7\u6D88\u8D39\u8005\u538C\u5026\u4E86\u7535\u5546\u5E73\u53F0\u7684\u4FC3\u9500\u201C\u5957\u8DEF\u201D","\u81F4\u656C\u575A\u5B88\u6218\u201C\u75AB\u201D\u4E00\u7EBF\u7684\u793E\u533A\u5DE5\u4F5C\u8005","\u666E\u9AD8\u8FD8\u662F\u804C\u9AD8\uFF1F\u5BB6\u957F\u4EEC\u9677\u5165\u9009\u6821\u96BE\u9898"]),pv:function(){return 5e5-3200*this.rank},increase:"@float(-1, 1)"}]});return r},o=t(),a=t(),c=t();e.mock(new RegExp("/api/workplace/popular-contents"),r=>{const{page:i=1,pageSize:p=5,category:s=0}=C.parseUrl(r.url).query;return{list:[o,a,c][Number(s)].slice((i-1)*p,i*p),total:100}}),e.mock(new RegExp("/api/workplace/content-percentage"),()=>[{type:"\u7EAF\u6587\u672C",count:148564,percent:.16},{type:"\u56FE\u6587\u7C7B",count:334271,percent:.36},{type:"\u89C6\u9891\u7C7B",count:445695,percent:.48}]),e.mock(new RegExp("/api/workplace/announcement"),()=>[{type:"activity",key:"1",content:"\u5185\u5BB9\u6700\u65B0\u4F18\u60E0\u6D3B\u52A8"},{type:"info",key:"2",content:"\u65B0\u589E\u5185\u5BB9\u5C1A\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"notice",key:"3",content:"\u5F53\u524D\u4EA7\u54C1\u8BD5\u7528\u671F\u5373\u5C06\u7ED3\u675F\uFF0C\u5982\u9700\u7EED\u8D39\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"},{type:"notice",key:"4",content:"1 \u6708\u65B0\u7CFB\u7EDF\u5347\u7EA7\u8BA1\u5212\u901A\u77E5"},{type:"info",key:"5",content:"\u65B0\u589E\u5185\u5BB9\u5DF2\u7ECF\u901A\u8FC7\u5BA1\u6838\uFF0C\u8BE6\u60C5\u8BF7\u70B9\u51FB\u67E5\u770B\u3002"}])}});function R(){return k.post("/api/dashboard/workplace",{})}const{Row:S,Col:B}=w,N=16;function K(){const[t,o]=F.exports.useState(),a=async()=>{const c=await R();o(c.data)};return F.exports.useEffect(()=>{a()},[]),n("div",{className:l.wrapper,children:[n(m,{size:16,direction:"vertical",className:l.left,children:[u(D,{data:t}),n(S,{gutter:N,children:[u(B,{span:12,children:u(h,{data:t})}),u(B,{span:12,children:u(f,{data:t})})]})]}),n(m,{className:l.right,size:16,direction:"vertical",children:[u(y,{data:t}),u(g,{}),u(A,{}),u(d,{})]})]})}export{K as default};
