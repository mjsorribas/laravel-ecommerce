(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{594:function(t,e,i){"use strict";i.r(e);var a=i(5),o=i.n(a),n=i(19),s=i.n(n),r=i(54),c=i(31),d=i.n(c),u=[{dataIndex:"name",key:"name",title:"Name",scopedSlots:{customRender:"name"}},{title:"Price",dataIndex:"price",key:"price",scopedSlots:{customRender:"price"}},{title:"Qty",dataIndex:"qty",key:"qty",scopedSlots:{customRender:"qty"}},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],l={props:["product","baseUrl","productProperties","productAttributes","productVariations"],components:{"quil-editor":r.quillEditor},data:function(){return{productForm:this.$form.createForm(this),variationForm:this.$form.createForm(this),type:null,headers:{},description:null,status:0,track_stock:0,is_taxable:0,categories:[],property:{},productImages:[],attributeIds:[],variationUploadImagePath:"",variationImageList:{},columns:u,variationModelVisible:!1,variationFields:["id","name","slug","barcode","sku","qty","price","weight","length","width","height"]}},methods:{handleUploadImageChange:function(){},clickVariationSave:function(t){var e=this;this.variationForm.validateFields((function(t,i){if(o()(t)){var a=e.baseUrl+"/variation/"+e.product.id+"/save-variation",n=e;d.a.post(a,i).then((function(t){t.data.success?(n.$notification.success({key:"product.save.variation.success",message:t.data.message}),window.location.reload()):alert("there is an error")}))}}))},deleteVariation:function(t){var e=this.baseUrl+"/variation/"+t.variation_id,i=this;d.a.delete(e).then((function(t){t.data.success?(i.$notification.success({key:"product.delete.variation.success",message:t.data.message}),window.location.reload()):alert("there is an error")}))},getVariationUploadAction:function(){},editVariationModel:function(t){var e=this;this.variationModelVisible=!0;var i=t.variation;if(this.variationFields.forEach((function(t){e.variationForm.getFieldDecorator(t,{initialValue:i[t]})})),this.variationUploadImagePath=this.baseUrl+"/product-image/"+i.id+"/upload",o()(i.images[0]))this.variationImageList=[];else{var a=i.images[0].path.replace(/^.*[\\\/]/,"");this.variationImageList=[{uid:i.images[0].id,name:a,status:"done",url:"/storage/"+i.images[0].path}]}},handleSubmit:function(t){this.productForm.validateFields((function(e,i){null!==e&&t.preventDefault()}))},handleVariationBtnClick:function(t){var e={attributes:this.attributeIds},i=this.baseUrl+"/variation/"+this.product.id+"/create-variation",a=this;d.a.post(i,e).then((function(t){t.data.success?(a.$notification.success({key:"product.create.variation.success",message:t.data.message}),window.location.reload()):alert("there is an error")}))},changeVariation:function(t){var e=this;t.forEach((function(t){e.attributeIds.push(t)}))},handlePropertyChange:function(t,e){var i="";i=e,s()(e)&&(i=e.target.value),this.property[t]=i},handleTypeChange:function(t){this.type=t},handleStatusChange:function(t){this.status=t?1:0},handleCategoryChange:function(t){this.categories=t},handleTrackStockChange:function(t){this.track_stock=t?1:0},handleIsTaxableChange:function(t){this.is_taxable=t?1:0},cancelProduct:function(){window.location=this.baseUrl+"/product"},uploadFileChange:function(t){"done"==t.file.status&&this.productImages.push(t.file.response.image)},deleteImage:function(t){var e=this.baseUrl+"/product-image/"+t,i=this,a=t;d.a.delete(e).then((function(t){if(t.data.success){var e=i.productImages.findIndex((function(t){return t.id===a}));i.productImages.splice(e,1)}}))}},mounted:function(){var t=this;this.headers={"X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},o()(this.product)||(this.type=this.product.type,this.description=this.product.description,this.productProperties.forEach((function(e){t.property[e.id]=e.product_value.value})),this.productAttributes.forEach((function(e){t.attributeIds.push(e.id)})),this.product.images.forEach((function(e){t.productImages.push(e)})))}},h=i(6),p=Object(h.a)(l,void 0,void 0,!1,null,null,null);e.default=p.exports}}]);