import{h as a}from"./index.2a82b82e.js";const t={"en-US":{"cardList.add.quality":"Click to create a plan","cardBlock.options.detail":"Detail","cardBlock.options.activate":"Activate","cardBlock.options.disable":"Disable","cardBlock.label.status":"Status","cardBlock.label.activated":"Activated","cardBlock.label.disabled":"Disabled","cardBlock.label.viewCount":"View Count","cardBlock.label.activityTime":"Activity Time","cardBlock.label.notSet":"","cardBlock.menu.delete":"Delete","cardBlock.menu.shareRecord":"Share Record","cardBlock.button.delete":"Delete","cardBlock.button.deleteConfirm":"Are you sure you want to delete it?","cardBlock.button.deleteSuccess":"Delete Success","cardCreate.title":"Marketing Plan Details","cardCreate.button.cancel":"Cancel","cardCreate.button.create":"Create","cardCreate.button.save":"Save","cardCreate.label.title":"Title","cardCreate.message.titleRequired":"Please enter the title","cardCreate.label.cover":"Cover","cardCreate.placeholder.title":"Please enter the title","cardCreate.placeholder.cover":"Please upload the cover","cardCreate.label.location":"Location","cardCreate.placeholder.location":"Please enter the location","cardCreate.label.startDatetime":"Start Datetime","cardCreate.placeholder.startDatetime":"Please select the start datetime","cardCreate.label.endDatetime":"End Datetime","cardCreate.placeholder.endDatetime":"Please select the end datetime","cardCreate.label.status":"Status","cardCreate.placeholder.status":"Please select the status","cardCreate.label.sortIndex":"Sort Index","cardCreate.placeholder.sortIndex":"Please enter the sort index","cardCreate.label.activityStatus":"Activity Status","cardCreate.placeholder.activityStatus":"Please select the activity status","cardCreate.label.content":"Marketing Plan Content","cardCreate.message.contentRequired":"Please enter the content","cardCreate.label.posterImage":"Poster Image","cardCreate.label.summary":"Summary","cardCreate.placeholder.summary":"Please enter the summary","cardCreate.label.posterContent":"Poster Content","cardCreate.placeholder.posterContent":"Please enter the poster content","cardCreate.tabTitle.basicInformation":"Basic Information","cardCreate.tabTitle.posterSetting":"Poster Setting","shareRecord.title":"Share Record","shareRecord.columns.name":"Name","shareRecord.columns.email":"Email","shareRecord.columns.phoneNumber":"Phone Number","shareRecord.columns.planId":"Plan ID","shareRecord.columns.shareCode":"Share Code","shareRecord.columns.shareCount":"Share Count","shareRecord.columns.viewCount":"View Count"},"zh-CN":{"cardList.add.quality":"\u70B9\u51FB\u521B\u5EFA\u8BA1\u5212","cardBlock.options.detail":"\u8BE6\u60C5","cardBlock.options.activate":"\u6FC0\u6D3B","cardBlock.options.disable":"\u7981\u7528","cardBlock.label.status":"\u6FC0\u6D3B\u72B6\u6001","cardBlock.label.activated":"\u6FC0\u6D3B","cardBlock.label.disabled":"\u7981\u7528","cardBlock.label.viewCount":"\u6D4F\u89C8\u6B21\u6570","cardBlock.label.activityTime":"\u6D3B\u52A8\u65F6\u95F4","cardBlock.label.notSet":"","cardBlock.menu.delete":"\u5220\u9664","cardBlock.menu.shareRecord":"\u5206\u4EAB\u8BB0\u5F55","cardBlock.button.delete":"\u5220\u9664","cardBlock.button.deleteConfirm":"\u786E\u5B9A\u5220\u9664\u5417\uFF1F","cardBlock.button.deleteSuccess":"\u5220\u9664\u6210\u529F","cardCreate.title":"\u8425\u9500\u8BA1\u5212\u8BE6\u60C5","cardCreate.button.cancel":"\u53D6\u6D88","cardCreate.button.create":"\u521B\u5EFA","cardCreate.button.save":"\u4FDD\u5B58","cardCreate.label.title":"\u6807\u9898","cardCreate.message.titleRequired":"\u8BF7\u8F93\u5165\u6807\u9898","cardCreate.label.cover":"\u5C01\u9762","cardCreate.placeholder.title":"\u8BF7\u8F93\u5165\u6807\u9898","cardCreate.placeholder.cover":"\u8BF7\u4E0A\u4F20\u5C01\u9762","cardCreate.label.location":"\u5730\u5740","cardCreate.placeholder.location":"\u8BF7\u8F93\u5165\u5730\u5740","cardCreate.label.startDatetime":"\u5F00\u59CB\u65F6\u95F4","cardCreate.placeholder.startDatetime":"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4","cardCreate.label.endDatetime":"\u7ED3\u675F\u65F6\u95F4","cardCreate.placeholder.endDatetime":"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4","cardCreate.label.status":"\u72B6\u6001","cardCreate.placeholder.status":"\u8BF7\u9009\u62E9\u72B6\u6001","cardCreate.label.sortIndex":"\u6392\u5E8F","cardCreate.placeholder.sortIndex":"\u8BF7\u8F93\u5165\u6392\u5E8F","cardCreate.label.activityStatus":"\u6D3B\u52A8\u72B6\u6001","cardCreate.placeholder.activityStatus":"\u8BF7\u9009\u62E9\u6D3B\u52A8\u72B6\u6001","cardCreate.label.content":"\u8425\u9500\u8BA1\u5212\u5185\u5BB9","cardCreate.message.contentRequired":"\u8BF7\u8F93\u5165\u6B63\u6587","cardCreate.label.posterImage":"\u6D77\u62A5","cardCreate.label.summary":"\u6458\u8981","cardCreate.placeholder.summary":"\u8BF7\u8F93\u5165\u6458\u8981","cardCreate.label.posterContent":"\u6D77\u62A5\u5185\u5BB9","cardCreate.placeholder.posterContent":"\u8BF7\u8F93\u5165\u6D77\u62A5\u5185\u5BB9","cardCreate.tabTitle.basicInformation":"\u57FA\u672C\u4FE1\u606F","cardCreate.tabTitle.posterSetting":"\u6D77\u62A5\u8BBE\u7F6E","shareRecord.title":"\u5206\u4EAB\u8BB0\u5F55","shareRecord.columns.name":"\u540D\u5B57","shareRecord.columns.email":"\u90AE\u7BB1","shareRecord.columns.phoneNumber":"\u7535\u8BDD","shareRecord.columns.planId":"\u8BA1\u5212","shareRecord.columns.shareCode":"\u5206\u4EAB\u4EE3\u7801","shareRecord.columns.shareCount":"\u5206\u4EAB\u6B21\u6570","shareRecord.columns.viewCount":"\u6D4F\u89C8\u6B21\u6570"}};var u=t;function l(e){return a.post("/api/marketing/plan/query",e)}function c(){return a.post("/api/marketing/plan/status")}function o(e){return a.post("/api/marketing/plan/detail",e)}function d(e){return a.post("/api/marketing/plan/create",e)}function n(e){return a.post("/api/marketing/plan/update",e)}function s(e){return a.post("/api/marketing/plan/delete",e)}function i(e){return a.post("/api/marketing/plan/active",{uuid:e})}function C(e){return a.post("/api/marketing/plan/disable",{uuid:e})}function B(e){return a.post("/api/marketing/share/record",e)}export{o as a,B as b,d as c,C as d,i as e,u as l,l as q,s as r,c as s,n as u};
