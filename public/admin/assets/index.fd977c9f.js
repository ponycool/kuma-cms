import{h as t}from"./index.565c71ed.js";function u(e){return t.post("/api/product/query",e)}function o(e){return t.post("/api/product/detail",e)}function a(e){return t.post("/api/product/create",e)}function c(e){return t.post("/api/product/update",e)}function l(e){return t.post("/api/product/enable",{uuid:e})}function d(e){return t.post("/api/product/disable",{uuid:e})}function s(e){return t.post("/api/product/delete",e)}function p(){return t.post("/api/product/category/query")}function n(e){return t.post("/api/product/category/create",e)}function C(e){return t.post("/api/product/category/update",e)}function m(e){return t.post("/api/product/category/delete",e)}const i={"en-US":{"columns.name":"Name","columns.keyword":"Keyword","columns.category":"Category","columns.title":"name","columns.productImage":"Product Image",noCover:"Not Cover","columns.price":"price","columns.stockQuantity":"Stock Quantity","columns.views":"Views","columns.isPublished":"Shelf Status","columns.isPublished.published":"Published","columns.isPublished.unPublished":"UnPublished","columns.updateAt":"updateAt","columns.action":"Action","columns.action.create":"Create","columns.action.edit":"Edit","columns.action.publish":"Publish","columns.action.unPublish":"UnPublish","columns.action.delete":"Delete","categoryCreate.title.create":"Create Category","categoryCreate.title.update":"Update Category","categoryCreate.button.create":"Create","categoryCreate.button.save":"Save","categoryCreate.form.name.label":"Category Name","categoryCreate.form.name.placeholder":"Please enter the category name","categoryCreate.form.pid.label":"Parent Category","categoryCreate.form.pid.placeholder":"Please select the parent category","categoryCreate.form.pid.error":"Cannot select the current category!","categoryCreate.form.code.label":"Category Code","categoryCreate.form.code.placeholder":"Please enter the category code","categoryCreate.form.sortIndex.label":"Category Sort","categoryCreate.form.sortIndex.placeholder":"Please enter the category sort","categoryCreate.form.sortIndex.error":"Sort must be greater than 0","productCreate.form.description.required":"Please fill in the product content","productCreate.form.description.error":"Information is incomplete","productCreate.title.create":"Create Product","productCreate.title.update":"Update Product","productCreate.button.cancel":"Cancel","productCreate.button.create":"Create","productCreate.button.save":"Save","productCreate.form.name.label":"Product Name","productCreate.form.name.required":"Please enter the product name","productCreate.form.name.placeholder":"Please enter the product name","productCreate.form.category.label":"Product Category","productCreate.form.category.required":"Please select the product category","productCreate.form.category.placeholder":"Please select the product category","productCreate.form.coverImage.label":"Product Main Image","productCreate.form.detailImage.label":"Product Detail Image","productCreate.form.seoTitle.label":"SEO Title","productCreate.form.seoTitle.placeholder":"Please enter the SEO title","productCreate.form.seoDesc.label":"SEO Description","productCreate.form.seoDesc.placeholder":"Please enter the SEO description","productCreate.form.seoKeywords.label":"SEO Keywords","productCreate.form.seoKeywords.placeholder":"Please enter the SEO keywords","productCreate.form.price.label":"Price","productCreate.form.price.placeholder":"Please enter the price","productCreate.form.stock.label":"Stock","productCreate.form.stock.placeholder":"Please enter the stock","productCreate.form.sortIndex.label":"Sort","productCreate.form.sortIndex.placeholder":"Please enter the sort","productCreate.form.sortIndex.error":"Sort must be greater than 0","productCreate.form.status.label":"Status","productCreate.form.status.placeholder":"Please select the status","productCreate.form.description.label":"Product Description"},"zh-CN":{"columns.name":"\u540D\u5B57","columns.keyword":"\u5173\u952E\u8BCD","columns.category":"\u5206\u7C7B","columns.title":"\u6807\u9898","columns.productImage":"\u4EA7\u54C1\u4E3B\u56FE",noCover:"\u6682\u65E0\u5C01\u9762","columns.price":"\u4EF7\u683C","columns.stockQuantity":"\u5E93\u5B58\u6570\u91CF","columns.views":"\u6D4F\u89C8\u91CF","columns.isPublished":"\u4E0A\u67B6\u72B6\u6001","columns.isPublished.published":"\u5DF2\u4E0A\u67B6","columns.isPublished.unPublished":"\u5DF2\u4E0B\u67B6","columns.updateAt":"\u66F4\u65B0\u65F6\u95F4","columns.action":"\u64CD\u4F5C","columns.action.create":"\u521B\u5EFA","columns.action.edit":"\u7F16\u8F91","columns.action.publish":"\u4E0A\u67B6","columns.action.unPublish":"\u4E0B\u67B6","columns.action.delete":"\u5220\u9664","categoryCreate.title.create":"\u521B\u5EFA\u5206\u7C7B","categoryCreate.title.update":"\u66F4\u65B0\u5206\u7C7B","categoryCreate.button.create":"\u521B\u5EFA","categoryCreate.button.save":"\u4FDD\u5B58","categoryCreate.form.name.label":"\u5206\u7C7B\u540D\u79F0","categoryCreate.form.name.placeholder":"\u8BF7\u8F93\u5165\u5206\u7C7B\u540D\u79F0","categoryCreate.form.pid.label":"\u7236\u7EA7\u5206\u7C7B","categoryCreate.form.pid.placeholder":"\u8BF7\u9009\u62E9\u7236\u7EA7\u5206\u7C7B","categoryCreate.form.pid.error":"\u4E0D\u53EF\u9009\u62E9\u5F53\u524D\u5206\u7C7B!","categoryCreate.form.code.label":"\u5206\u7C7B\u7F16\u7801","categoryCreate.form.code.placeholder":"\u8BF7\u8F93\u5165\u5206\u7C7B\u7F16\u7801","categoryCreate.form.sortIndex.label":"\u5206\u7C7B\u6392\u5E8F","categoryCreate.form.sortIndex.placeholder":"\u8BF7\u8F93\u5165\u5206\u7C7B\u6392\u5E8F","categoryCreate.form.sortIndex.error":"\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0","productCreate.form.description.required":"\u8BF7\u586B\u5199\u4EA7\u54C1\u5185\u5BB9","productCreate.form.description.error":"\u4FE1\u606F\u4E0D\u5B8C\u6574","productCreate.title.create":"\u521B\u5EFA\u4EA7\u54C1","productCreate.title.update":"\u66F4\u65B0\u4EA7\u54C1","productCreate.button.cancel":"\u53D6\u6D88","productCreate.button.create":"\u521B\u5EFA","productCreate.button.save":"\u4FDD\u5B58","productCreate.form.name.label":"\u4EA7\u54C1\u540D\u79F0","productCreate.form.name.required":"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0","productCreate.form.name.placeholder":"\u8BF7\u8F93\u5165\u4EA7\u54C1\u540D\u79F0","productCreate.form.category.label":"\u4EA7\u54C1\u5206\u7C7B","productCreate.form.category.required":"\u8BF7\u9009\u62E9\u4EA7\u54C1\u5206\u7C7B","productCreate.form.category.placeholder":"\u8BF7\u9009\u62E9\u4EA7\u54C1\u5206\u7C7B","productCreate.form.coverImage.label":"\u4EA7\u54C1\u4E3B\u56FE","productCreate.form.detailImage.label":"\u4EA7\u54C1\u8BE6\u60C5\u56FE","productCreate.form.seoTitle.label":"SEO\u6807\u9898","productCreate.form.seoTitle.placeholder":"\u8BF7\u8F93\u5165SEO\u6807\u9898","productCreate.form.seoDesc.label":"SEO\u63CF\u8FF0","productCreate.form.seoDesc.placeholder":"\u8BF7\u8F93\u5165SEO\u63CF\u8FF0","productCreate.form.seoKeywords.label":"SEO\u5173\u952E\u8BCD","productCreate.form.seoKeywords.placeholder":"\u8BF7\u8F93\u5165SEO\u5173\u952E\u8BCD","productCreate.form.price.label":"\u4EF7\u683C","productCreate.form.price.placeholder":"\u8BF7\u8F93\u5165\u4EF7\u683C","productCreate.form.stock.label":"\u5E93\u5B58","productCreate.form.stock.placeholder":"\u8BF7\u8F93\u5165\u5E93\u5B58","productCreate.form.sortIndex.label":"\u6392\u5E8F","productCreate.form.sortIndex.placeholder":"\u8BF7\u8F93\u5165\u6392\u5E8F","productCreate.form.sortIndex.error":"\u6392\u5E8F\u5FC5\u987B\u5927\u4E8E0","productCreate.form.status.label":"\u72B6\u6001","productCreate.form.status.placeholder":"\u8BF7\u9009\u62E9\u72B6\u6001","productCreate.form.description.label":"\u4EA7\u54C1\u63CF\u8FF0"}};export{n as a,m as b,C as c,p as d,a as e,l as f,d as g,o as h,i,u as p,s as r,c as u};