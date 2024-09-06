const e={"en-US":{"columns.name":"Name","columns.category":"Category","columns.keyword":"Keyword","columns.title":"Title","columns.author":"Author","columns.coverImage":"Cover Image",notCover:"Not Cover","columns.views":"Views","columns.publishStatus":"Publish Status","columns.publishStatus.published":"Published","columns.publishStatus.unPublished":"UnPublished","columns.publishedAt":"publishedAt","columns.action":"Action","columns.action.edit":"Edit","columns.action.publish":"Publish","columns.action.unPublish":"UnPublish","columns.action.delete":"Delete","columns.avatar":"Avatar",noAvatar:"Not Avatar","columns.position":"Position","columns.introduction":"Introduction","columns.email":"Email","columns.phone":"Phone","columns.joinedAt":"Joined At","columns.image":"Image",noImage:"Not Image","columns.awardOrganization":"Award Organization","columns.awardDate":"Award Data","columns.group":"Group","columns.eventDate":"Event Date","teamCreate.form.error.incomplete":"Information is incomplete","teamCreate.title.create":"Create Member","teamCreate.title.update":"Update Member","teamCreate.button.cancel":"Cancel","teamCreate.button.save":"Save","teamCreate.button.create":"Create","teamCreate.form.name.label":"Member Name","teamCreate.form.name.placeholder":"Please enter the member name","teamCreate.form.name.required":"Member name cannot be empty","teamCreate.form.jobTitle.label":"Member Job Title","teamCreate.form.jobTitle.placeholder":"Please enter the member job title","teamCreate.form.avatar.label":"Member Avatar","teamCreate.form.introduction.label":"Member Introduction","teamCreate.form.introduction.placeholder":"Please enter the member introduction","teamCreate.form.phone.label":"Member Phone","teamCreate.form.phone.placeholder":"Please enter the member phone","teamCreate.form.email.label":"Member Email","teamCreate.form.email.placeholder":"Please enter the member email","teamCreate.form.email.error":"Email format is incorrect","teamCreate.form.joinedDate.label":"Joined Date","teamCreate.form.joinedDate.placeholder":"Please select the joined date","teamCreate.form.sortIndex.label":"Sort","teamCreate.form.sortIndex.placeholder":"Please enter the sort","teamCreate.form.sortIndex.error":"Sort must be greater than 0","honorCreate.title.create":"Create Honor","honorCreate.title.update":"Update Honor","honorCreate.button.cancel":"Cancel","honorCreate.button.save":"Save","honorCreate.button.create":"Create","honorCreate.form.title.label":"Title","honorCreate.form.title.placeholder":"Please enter the title","honorCreate.form.title.required":"Please enter the title","honorCreate.form.image.label":"Image","honorCreate.form.organization.label":"Organization","honorCreate.form.organization.placeholder":"Please enter the organization","honorCreate.form.date.label":"Date","honorCreate.form.date.placeholder":"Please select the date","honorCreate.form.description.label":"Description","honorCreate.form.description.placeholder":"Please enter the description","eventCreate.title.create":"Create Event","eventCreate.title.update":"Update Event","eventCreate.button.cancel":"Cancel","eventCreate.button.save":"Save","eventCreate.button.create":"Create","eventCreate.form.title.label":"Title","eventCreate.form.title.placeholder":"Please enter the title","eventCreate.form.title.required":"Please enter the title","eventCreate.form.image.label":"Image","eventCreate.form.group.label":"Group","eventCreate.form.group.placeholder":"Please select the group","eventCreate.form.date.label":"Date","eventCreate.form.date.placeholder":"Please select the date","eventCreate.form.description.label":"Description","eventCreate.form.description.placeholder":"Please enter the description"},"zh-CN":{"columns.name":"\u540D\u5B57","columns.category":"\u5206\u7C7B","columns.keyword":"\u5173\u952E\u8BCD","columns.title":"\u6807\u9898","columns.author":"\u4F5C\u8005","columns.coverImage":"\u5C01\u9762\u56FE\u7247",notCover:"\u6682\u65E0\u5C01\u9762","columns.views":"\u6D4F\u89C8\u91CF","columns.publishStatus":"\u53D1\u5E03\u72B6\u6001","columns.publishStatus.published":"\u5DF2\u53D1\u5E03","columns.publishStatus.unPublished":"\u672A\u53D1\u5E03","columns.publishedAt":"\u53D1\u5E03\u65F6\u95F4","columns.action":"\u64CD\u4F5C","columns.action.edit":"\u7F16\u8F91","columns.action.publish":"\u53D1\u5E03","columns.action.unPublish":"\u53D6\u6D88\u53D1\u5E03","columns.action.delete":"\u5220\u9664","columns.avatar":"\u5934\u50CF",noAvatar:"\u6682\u65E0\u5934\u50CF","columns.position":"\u804C\u4F4D","columns.introduction":"\u4ECB\u7ECD","columns.email":"\u90AE\u7BB1","columns.phone":"\u624B\u673A\u53F7","columns.joinedAt":"\u5165\u804C\u65F6\u95F4","columns.image":"\u56FE\u7247",noImage:"\u6682\u65E0\u56FE\u7247","columns.awardOrganization":"\u9881\u53D1\u7EC4\u7EC7","columns.awardDate":"\u9881\u53D1\u65F6\u95F4","columns.group":"\u5206\u7EC4","columns.eventDate":"\u4E8B\u4EF6\u65E5\u671F","teamCreate.form.error.incomplete":"\u4FE1\u606F\u4E0D\u5B8C\u6574","teamCreate.title.create":"\u521B\u5EFA\u6210\u5458","teamCreate.title.update":"\u4FEE\u6539\u6210\u5458","teamCreate.button.cancel":"\u53D6\u6D88","teamCreate.button.save":"\u4FDD\u5B58","teamCreate.button.create":"\u521B\u5EFA","teamCreate.form.name.label":"\u6210\u5458\u59D3\u540D","teamCreate.form.name.placeholder":"\u8BF7\u8F93\u5165\u6210\u5458\u59D3\u540D","teamCreate.form.name.required":"\u6210\u5458\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A","teamCreate.form.jobTitle.label":"\u6210\u5458\u804C\u4F4D","teamCreate.form.jobTitle.placeholder":"\u8BF7\u8F93\u5165\u6210\u5458\u804C\u4F4D","teamCreate.form.avatar.label":"\u6210\u5458\u5934\u50CF","teamCreate.form.introduction.label":"\u6210\u5458\u7B80\u4ECB","teamCreate.form.introduction.placeholder":"\u8BF7\u8F93\u5165\u6210\u5458\u7B80\u4ECB","teamCreate.form.phone.label":"\u6210\u5458\u624B\u673A\u53F7","teamCreate.form.phone.placeholder":"\u8BF7\u8F93\u5165\u6210\u5458\u624B\u673A\u53F7","teamCreate.form.email.label":"\u6210\u5458\u90AE\u7BB1","teamCreate.form.email.placeholder":"\u8BF7\u8F93\u5165\u6210\u5458\u90AE\u7BB1","teamCreate.form.email.error":"\u90AE\u7BB1\u683C\u5F0F\u4E0D\u6B63\u786E","teamCreate.form.joinedDate.label":"\u5165\u804C\u65F6\u95F4","teamCreate.form.joinedDate.placeholder":"\u8BF7\u9009\u62E9\u5165\u804C\u65F6\u95F4","teamCreate.form.sortIndex.label":"\u6392\u5E8F","teamCreate.form.sortIndex.placeholder":"\u8BF7\u8F93\u5165\u6392\u5E8F","teamCreate.form.sortIndex.error":"\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0","honorCreate.title.create":"\u521B\u5EFA\u8363\u8A89","honorCreate.title.update":"\u4FEE\u6539\u8363\u8A89","honorCreate.button.cancel":"\u53D6\u6D88","honorCreate.button.save":"\u4FDD\u5B58","honorCreate.button.create":"\u521B\u5EFA","honorCreate.form.title.label":"\u6807\u9898","honorCreate.form.title.placeholder":"\u8BF7\u8F93\u5165\u6807\u9898","honorCreate.form.title.required":"\u8BF7\u8F93\u5165\u6807\u9898","honorCreate.form.image.label":"\u56FE\u7247","honorCreate.form.organization.label":"\u9881\u53D1\u7EC4\u7EC7","honorCreate.form.organization.placeholder":"\u8BF7\u8F93\u5165\u9881\u53D1\u7EC4\u7EC7","honorCreate.form.date.label":"\u9881\u53D1\u65F6\u95F4","honorCreate.form.date.placeholder":"\u8BF7\u9009\u62E9\u9881\u53D1\u65F6\u95F4","honorCreate.form.description.label":"\u63CF\u8FF0","honorCreate.form.description.placeholder":"\u8BF7\u8F93\u5165\u63CF\u8FF0","eventCreate.title.create":"\u521B\u5EFA\u4E8B\u4EF6","eventCreate.title.update":"\u4FEE\u6539\u4E8B\u4EF6","eventCreate.button.cancel":"\u53D6\u6D88","eventCreate.button.save":"\u4FDD\u5B58","eventCreate.button.create":"\u521B\u5EFA","eventCreate.form.title.label":"\u6807\u9898","eventCreate.form.title.placeholder":"\u8BF7\u8F93\u5165\u6807\u9898","eventCreate.form.title.required":"\u8BF7\u8F93\u5165\u6807\u9898","eventCreate.form.image.label":"\u56FE\u7247","eventCreate.form.group.label":"\u5206\u7EC4","eventCreate.form.group.placeholder":"\u8BF7\u9009\u62E9\u5206\u7EC4","eventCreate.form.date.label":"\u65F6\u95F4","eventCreate.form.date.placeholder":"\u8BF7\u9009\u62E9\u65F6\u95F4","eventCreate.form.description.label":"\u63CF\u8FF0","eventCreate.form.description.placeholder":"\u8BF7\u8F93\u5165\u63CF\u8FF0"}};export{e as i};