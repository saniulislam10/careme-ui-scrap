(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[6327],{57147:(t,e,n)=>{"use strict";n.d(e,{L:()=>a,E7:()=>o});var i=n(35366);let a=(()=>{class t{constructor(t){this.el=t,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator=".",this.allowNegatives=!1,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=t.nativeElement}ngOnChanges(t){if(t.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),t.min){const t=Number(this.min);this.min=isNaN(t)?-1/0:t}if(t.max){const t=Number(this.max);this.max=isNaN(t)?1/0:t}}onBeforeInput(t){if(isNaN(Number(t.data))){if(t.data===this.decimalSeparator||t.data===this.negativeSign&&this.allowNegatives)return;t.preventDefault(),t.stopPropagation()}}onKeyDown(t){if(this.navigationKeys.indexOf(t.key)>-1||("a"===t.key||"KeyA"===t.code)&&!0===t.ctrlKey||("c"===t.key||"KeyC"===t.code)&&!0===t.ctrlKey||("v"===t.key||"KeyV"===t.code)&&!0===t.ctrlKey||("x"===t.key||"KeyX"===t.code)&&!0===t.ctrlKey||("a"===t.key||"KeyA"===t.code)&&!0===t.metaKey||("c"===t.key||"KeyC"===t.code)&&!0===t.metaKey||("v"===t.key||"KeyV"===t.code)&&!0===t.metaKey||("x"===t.key||"KeyX"===t.code)&&!0===t.metaKey)return;let e="";if(this.decimal&&t.key===this.decimalSeparator)return e=this.forecastValue(t.key),e.split(this.decimalSeparator).length>2?void t.preventDefault():void(this.hasDecimalPoint=e.indexOf(this.decimalSeparator)>-1);if(t.key===this.negativeSign&&this.allowNegatives)return e=this.forecastValue(t.key),e.charAt(0)!==this.negativeSign||e.split(this.negativeSign).length>2?void t.preventDefault():void(this.hasNegativeSign=e.split(this.negativeSign).length>-1);if(" "===t.key||isNaN(Number(t.key)))return void t.preventDefault();if(e=e||this.forecastValue(t.key),this.regex&&!this.regex.test(e))return void t.preventDefault();const n=Number(e);(n>this.max||n<this.min)&&t.preventDefault()}onPaste(t){let e="";window.clipboardData?e=window.clipboardData.getData("text"):t.clipboardData&&t.clipboardData.getData&&(e=t.clipboardData.getData("text/plain")),this.pasteData(e),t.preventDefault()}onDrop(t){var e,n;const i=null!==(n=null===(e=t.dataTransfer)||void 0===e?void 0:e.getData("text"))&&void 0!==n?n:"";this.inputElement.focus(),this.pasteData(i),t.preventDefault()}pasteData(t){const e=this.sanitizeInput(t);if(!e.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,e))if(this.inputElement.setRangeText){const{selectionStart:t,selectionEnd:n}=this.inputElement;this.inputElement.setRangeText(e,null!=t?t:0,null!=n?n:0,"end"),void 0!==window.InstallTrigger&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,e);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}insertAtCursor(t,e){var n,i;const a=null!==(n=t.selectionStart)&&void 0!==n?n:0,o=null!==(i=t.selectionEnd)&&void 0!==i?i:0;t.value=t.value.substring(0,a)+e+t.value.substring(o,t.value.length);const r=a+e.length;t.focus(),t.setSelectionRange(r,r),this.triggerEvent(t,"input")}triggerEvent(t,e){if("createEvent"in document){const n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n)}}sanitizeInput(t){let e,n="";e=this.decimal&&this.isValidDecimal(t)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),n=t.replace(e,"");const i=this.inputElement.maxLength;if(i>0){const t=i-this.inputElement.value.length+(n.includes(`${this.negativeSign}`)?1:0);n=t>0?n.substring(0,t):""}return n}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(t){if(this.hasDecimalPoint){const e=this.getSelection();return e&&e.indexOf(this.decimalSeparator)>-1?t.split(this.decimalSeparator).length<=2:t.indexOf(this.decimalSeparator)<0}return t.split(this.decimalSeparator).length<=2}getSelection(){var t,e;return this.inputElement.value.substring(null!==(t=this.inputElement.selectionStart)&&void 0!==t?t:0,null!==(e=this.inputElement.selectionEnd)&&void 0!==e?e:0)}forecastValue(t){var e,n;const i=null!==(e=this.inputElement.selectionStart)&&void 0!==e?e:0,a=null!==(n=this.inputElement.selectionEnd)&&void 0!==n?n:0,o=this.inputElement.value;return o.substring(0,i)+t+o.substring(a)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","digitOnly",""]],hostBindings:function(t,e){1&t&&i.NdJ("beforeinput",function(t){return e.onBeforeInput(t)})("keydown",function(t){return e.onKeyDown(t)})("paste",function(t){return e.onPaste(t)})("drop",function(t){return e.onDrop(t)})},inputs:{decimal:"decimal",decimalSeparator:"decimalSeparator",allowNegatives:"allowNegatives",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[i.TTD]}),t})(),o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()},96327:(t,e,n)=>{"use strict";n.r(e),n.d(e,{FeaturedCategoryModule:()=>J});var i=n(61116),a=n(33464),o=n(80848),r=n(88222),c=n(35366),s=n(92935),l=n(99896),d=n(68370),g=n(8452),u=n(84369),p=n(77307);const h=function(t){return["edit-featured-category",t]};function m(t,e){if(1&t){const t=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._UZ(4,"img",8),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.ALo(7,"date"),c.qZA(),c.TgZ(8,"td"),c.TgZ(9,"button",9),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().openConfirmDialog(e._id)}),c.TgZ(10,"mat-icon"),c._uU(11,"delete"),c.qZA(),c.qZA(),c.TgZ(12,"button",10),c.TgZ(13,"mat-icon"),c._uU(14,"edit"),c.qZA(),c.qZA(),c.TgZ(15,"button",11),c.NdJ("click",function(){const e=c.CHM(t).$implicit;return c.oxw().openComponentDialog(e.products)}),c.TgZ(16,"mat-icon"),c._uU(17,"visibility"),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){const t=e.$implicit;c.xp6(1),c.uIk("data-label","Name"),c.xp6(1),c.Oqu(t.name),c.xp6(1),c.uIk("data-label","Image"),c.xp6(1),c.Q6J("src",null!=t&&t.image?t.image:"/assets/images/placeholder/test.png",c.LSH)("alt",t.name),c.xp6(1),c.uIk("data-label","createdAt"),c.xp6(1),c.Oqu(c.lcZ(7,9,t.createdAt)),c.xp6(2),c.uIk("data-label","Actions"),c.xp6(4),c.Q6J("routerLink",c.VKq(11,h,t._id))}}const b=function(){return["add-new-featured-category"]};let f=(()=>{class t{constructor(t,e,n,i){this.dialog=t,this.uiService=e,this.reloadService=n,this.featuredCategoryService=i}ngOnInit(){this.reloadService.refreshFeaturedCategory$.subscribe(()=>{this.getAllFeaturedCategory()}),this.getAllFeaturedCategory()}openConfirmDialog(t){this.dialog.open(o.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{e&&this.deleteFeaturedCategoryById(t)})}openComponentDialog(t){console.log(t),this.dialog.open(r.s,{data:t,panelClass:["theme-dialog","full-screen-modal"],width:"100%",maxHeight:"90vh",autoFocus:!1,disableClose:!1}).afterClosed().subscribe(t=>{})}getAllFeaturedCategory(){this.featuredCategoryService.getAllFeaturedCategory().subscribe(t=>{this.allFeaturedCategory=t.data},t=>{console.log(t)})}deleteFeaturedCategoryById(t){this.featuredCategoryService.deleteFeaturedCategoryById(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshFeaturedCategory$()},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.uw),c.Y36(l.F),c.Y36(d.f),c.Y36(g.H))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-featured-category"]],decls:22,vars:7,consts:[[1,"top-action"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"table-image",3,"src","alt"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"click"],["mat-mini-fab","",2,"margin-right","5px",3,"routerLink"],["mat-mini-fab","","color","primary",3,"click"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"button",1),c.TgZ(2,"mat-icon"),c._uU(3,"add"),c.qZA(),c._uU(4," Add Featured Category "),c.qZA(),c.qZA(),c.TgZ(5,"div",2),c.TgZ(6,"h2"),c._uU(7,"Featured Category List"),c.qZA(),c.qZA(),c._UZ(8,"hr",3),c.TgZ(9,"div",4),c.TgZ(10,"table"),c.TgZ(11,"thead"),c.TgZ(12,"tr",5),c.TgZ(13,"th",6),c._uU(14),c.qZA(),c.TgZ(15,"th",6),c._uU(16),c.qZA(),c.TgZ(17,"th",6),c._uU(18),c.qZA(),c.TgZ(19,"th",6),c._uU(20),c.qZA(),c.qZA(),c.qZA(),c.YNc(21,m,18,13,"tr",7),c.qZA(),c.qZA()),2&t&&(c.xp6(1),c.Q6J("routerLink",c.DdM(6,b)),c.xp6(13),c.Oqu("Name"),c.xp6(2),c.Oqu("Image"),c.xp6(2),c.Oqu("createdAt"),c.xp6(2),c.Oqu("Actions"),c.xp6(1),c.Q6J("ngForOf",e.allFeaturedCategory))},directives:[u.lW,a.rH,p.Hw,i.sg],pipes:[i.uU],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.top-action[_ngcontent-%COMP%]{text-align:right;margin-top:16px;padding-right:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Open Sans,sans-serif}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}"]}),t})();var C=n(529),_=n(31041),O=n(68783),P=n(61613),x=n(65031),M=n(31269),Z=n(81830),v=n(35965),y=n(13070),q=n(9550),A=n(57147),T=n(13841),w=n(87064),S=n(40967);const k=["templateForm"];function U(t,e){if(1&t&&(c.TgZ(0,"mat-option",24),c._uU(1),c.qZA()),2&t){const t=e.$implicit;c.Q6J("value",t._id),c.xp6(1),c.hij(" ",t.categoryName," ")}}function I(t,e){if(1&t&&(c.TgZ(0,"tr"),c.TgZ(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._UZ(4,"img",30),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c._uU(8),c.qZA(),c.TgZ(9,"td"),c._uU(10),c.qZA(),c.TgZ(11,"td"),c._uU(12),c.ALo(13,"price"),c.qZA(),c.TgZ(14,"td"),c._uU(15),c.qZA(),c.TgZ(16,"td"),c.TgZ(17,"a",31),c.TgZ(18,"mat-icon"),c._uU(19,"visibility"),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t){const t=e.$implicit;c.xp6(1),c.uIk("data-label","Name"),c.xp6(1),c.Oqu(t.productName),c.xp6(1),c.uIk("data-label","Image"),c.xp6(1),c.Q6J("src",null!=t&&t.images&&(null==t?null:t.images.length)>0?t.images[0]:"/assets/images/placeholder/test.png",c.LSH)("alt",t.productName),c.xp6(1),c.uIk("data-label","SKU"),c.xp6(1),c.Oqu(t.sku),c.xp6(1),c.uIk("data-label","Category"),c.xp6(1),c.Oqu(t.categorySlug),c.xp6(1),c.uIk("data-label","Retail Price"),c.xp6(1),c.hij("\u09f3 ",t.price,""),c.xp6(1),c.uIk("data-label","Sale Price"),c.xp6(1),c.hij("\u09f3 ",c.xi3(13,17,t,"priceWithDiscount"),""),c.xp6(2),c.uIk("data-label","Available"),c.xp6(1),c.Oqu(t.quantity),c.xp6(1),c.uIk("data-label","Details"),c.xp6(1),c.Q6J("href","/product-details/"+t.productSlug,c.LSH)}}function D(t,e){if(1&t&&(c.TgZ(0,"div",25),c.TgZ(1,"div",26),c.TgZ(2,"table"),c.TgZ(3,"thead"),c.TgZ(4,"tr",27),c.TgZ(5,"th",28),c._uU(6),c.qZA(),c.TgZ(7,"th",28),c._uU(8),c.qZA(),c.TgZ(9,"th",28),c._uU(10),c.qZA(),c.TgZ(11,"th",28),c._uU(12),c.qZA(),c.TgZ(13,"th",28),c._uU(14),c.qZA(),c.TgZ(15,"th",28),c._uU(16),c.qZA(),c.TgZ(17,"th",28),c._uU(18),c.qZA(),c.TgZ(19,"th",28),c._uU(20),c.qZA(),c.qZA(),c.qZA(),c.YNc(21,I,20,20,"tr",29),c.qZA(),c.qZA(),c.qZA()),2&t){const t=c.oxw();c.xp6(6),c.Oqu("Name"),c.xp6(2),c.Oqu("Image"),c.xp6(2),c.Oqu("SKU"),c.xp6(2),c.Oqu("Category"),c.xp6(2),c.Oqu("Retail Price"),c.xp6(2),c.Oqu("Sale Price"),c.xp6(2),c.Oqu("Available"),c.xp6(2),c.Oqu("Details"),c.xp6(1),c.Q6J("ngForOf",t.products)}}const E=function(t){return[t,"image-gallery"]},F=function(t){return{url:t}};let N=(()=>{class t{constructor(t,e,n,i,a,o,r,c,s,l){this.fb=t,this.activatedRoute=e,this.uiService=n,this.storageService=i,this.router=a,this.dialog=o,this.productService=r,this.spinner=c,this.categoryService=s,this.featuredCategoryService=l,this.adminBaseUrl=C.N.adminBaseUrl,this.categories=[],this.isLoading=!1,this.products=[],this.featuredCategory=null,this.placeholder="/assets/images/avatar/image-upload.jpg",this.selectedProductIds=[],this.needSessionDestroy=!0}ngOnInit(){this.dataForm=this.fb.group({name:[null,_.kI.required],priority:[null],shortDesc:[null,_.kI.required],category:[null,_.kI.required],info:[null],image:[null],routerLink:[null,_.kI.required],cardBackground:[null,_.kI.required],cardBtnColor:[null,_.kI.required],products:[null,_.kI.required]}),this.pickedImage=this.placeholder,this.id||(this.storageService.getStoredInput("FEATURED_CATEGORY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("FEATURED_CATEGORY_INPUT")),this.dataForm.value.products&&this.dataForm.value.products.length>0&&this.getSpecificProductsById(this.dataForm.value.products),history.state.images&&(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage}))),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getSingleFeaturedCategoryById()}),this.getAllCategory()}setFormData(){this.dataForm.patchValue(this.featuredCategory),this.storageService.getStoredInput("FEATURED_CATEGORY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("FEATURED_CATEGORY_INPUT")),history.state.images?(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage})):this.pickedImage=this.featuredCategory.image?this.featuredCategory.image:this.placeholder}openComponentDialog(t){this.dialog.open(O.n,{data:this.featuredCategory?this.products.map(t=>t._id):null,panelClass:["theme-dialog","full-screen-modal"],width:"100%",height:"90vh",autoFocus:!1,disableClose:!0}).afterClosed().subscribe(t=>{t&&t.selectedIds&&(this.selectedProductIds=t.selectedIds,this.dataForm.patchValue({products:t.selectedIds}),this.getSpecificProductsById(this.selectedProductIds))})}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.id){const t=Object.assign(Object.assign({},this.dataForm.value),{_id:this.id});this.editFeaturedCategory(t)}else this.addNewDealOnPlay(this.dataForm.value)}onHoldInputData(){var t;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(t=this.dataForm)||void 0===t?void 0:t.value,"FEATURED_CATEGORY_INPUT")}getAllCategory(){this.categoryService.getAllCategory().subscribe(t=>{this.categories=t.data},t=>{console.log(t)})}addNewDealOnPlay(t){this.featuredCategoryService.addNewFeaturedCategory(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.storageService.removeSessionData("FEATURED_CATEGORY_INPUT"),this.pickedImage=this.placeholder,this.selectedProductIds=[],this.products=[]},t=>{console.log(t)})}getSingleFeaturedCategoryById(){this.featuredCategoryService.getSingleFeaturedCategoryById(this.id,"-attributes -filterData -tags -ratingReview -discussion -warrantyServices -description").subscribe(t=>{this.featuredCategory=t.data,this.products=this.featuredCategory.products,this.setFormData()},t=>{console.log(t)})}editFeaturedCategory(t){this.featuredCategoryService.editFeaturedCategory(t).subscribe(t=>{this.uiService.success(t.message),this.storageService.removeSessionData("FEATURED_CATEGORY_INPUT")},t=>{console.log(t)})}getSpecificProductsById(t){this.spinner.show(),this.subProduct=this.productService.getSpecificProductsById(t,"-attributes -filterData -tags -ratingReview -discussion -warrantyServices -description").subscribe(t=>{this.products=t.data,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.subProduct&&this.subProduct.unsubscribe(),this.needSessionDestroy&&this.storageService.removeSessionData("FEATURED_CATEGORY_INPUT")}onCatSelect(t){if(t.value){const e=this.categories.find(e=>e._id===t.value).categorySlug;this.dataForm.patchValue({routerLink:e}),console.log(e)}}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(_.qu),c.Y36(a.gz),c.Y36(l.F),c.Y36(P.V),c.Y36(a.F0),c.Y36(s.uw),c.Y36(x.M),c.Y36(M.t2),c.Y36(Z.H),c.Y36(g.H))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-add-new-featured-category"]],viewQuery:function(t,e){if(1&t&&c.Gf(k,5),2&t){let t;c.iGM(t=c.CRH())&&(e.templateForm=t.first)}},decls:67,vars:11,consts:[[2,"position","relative"],[1,"header-dialog"],["mat-dialog-title",""],[1,"color-pick"],["href","https://www.hexcolortool.com/","target","_blank"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"imag-view",3,"routerLink","state","click"],["alt","",3,"src"],["appearance","outline"],["formControlName","name","matInput","","placeholder","Enter name","required",""],["formControlName","priority","matInput","","placeholder","Enter priority","required","","digitOnly",""],["formControlName","category",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["formControlName","shortDesc","matInput","","placeholder","Enter shortDesc","required",""],["formControlName","info","matInput","","placeholder","Enter info","required",""],["readonly","","formControlName","routerLink","matInput","","placeholder","Enter shortDesc","required",""],["formControlName","cardBackground","matInput","","placeholder","Enter cardBackground","required",""],["formControlName","cardBtnColor","matInput","","placeholder","Enter cardBtnColor","required",""],[1,"select-product"],["type","button","mat-raised-button","","color","accent",3,"click"],[1,"save-btn"],["mat-raised-button","","color","primary","type","submit"],["class","product-view",4,"ngIf"],[3,"value"],[1,"product-view"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[3,"src","alt"],["target","_blank","mat-icon-button","",1,"link-hover",3,"href"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h1",2),c._uU(3,"Featured Category"),c.qZA(),c.TgZ(4,"div",3),c.TgZ(5,"a",4),c._uU(6,"Pick Your Color"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(7,"form",5,6),c.NdJ("ngSubmit",function(){return e.onSubmit()}),c.TgZ(9,"div",7),c.NdJ("click",function(){return e.onHoldInputData()}),c._UZ(10,"img",8),c.qZA(),c.TgZ(11,"mat-form-field",9),c.TgZ(12,"mat-label"),c._uU(13,"Name"),c.qZA(),c._UZ(14,"input",10),c.TgZ(15,"mat-error"),c._uU(16,"This field is required"),c.qZA(),c.qZA(),c.TgZ(17,"mat-form-field",9),c.TgZ(18,"mat-label"),c._uU(19,"priority"),c.qZA(),c._UZ(20,"input",11),c.TgZ(21,"mat-error"),c._uU(22,"This field is required"),c.qZA(),c.qZA(),c.TgZ(23,"mat-form-field",9),c.TgZ(24,"mat-label"),c._uU(25,"Category Name"),c.qZA(),c.TgZ(26,"mat-select",12),c.NdJ("selectionChange",function(t){return e.onCatSelect(t)}),c.YNc(27,U,2,2,"mat-option",13),c.qZA(),c.qZA(),c.TgZ(28,"mat-form-field",9),c.TgZ(29,"mat-label"),c._uU(30,"shortDesc"),c.qZA(),c._UZ(31,"input",14),c.TgZ(32,"mat-error"),c._uU(33,"This field is required"),c.qZA(),c.qZA(),c.TgZ(34,"mat-form-field",9),c.TgZ(35,"mat-label"),c._uU(36,"info"),c.qZA(),c._UZ(37,"input",15),c.TgZ(38,"mat-error"),c._uU(39,"This field is required"),c.qZA(),c.qZA(),c.TgZ(40,"mat-form-field",9),c.TgZ(41,"mat-label"),c._uU(42,"routerLink"),c.qZA(),c._UZ(43,"input",16),c.TgZ(44,"mat-error"),c._uU(45,"This field is required"),c.qZA(),c.qZA(),c.TgZ(46,"mat-form-field",9),c.TgZ(47,"mat-label"),c._uU(48,"cardBackground"),c.qZA(),c._UZ(49,"input",17),c.TgZ(50,"mat-error"),c._uU(51,"This field is required"),c.qZA(),c.qZA(),c.TgZ(52,"mat-form-field",9),c.TgZ(53,"mat-label"),c._uU(54,"cardBtnColor"),c.qZA(),c._UZ(55,"input",18),c.TgZ(56,"mat-error"),c._uU(57,"This field is required"),c.qZA(),c.qZA(),c.TgZ(58,"div",19),c.TgZ(59,"button",20),c.NdJ("click",function(){return e.openComponentDialog()}),c.TgZ(60,"mat-icon"),c._uU(61,"add"),c.qZA(),c._uU(62," Choose Product "),c.qZA(),c.qZA(),c.TgZ(63,"div",21),c.TgZ(64,"button",22),c._uU(65),c.qZA(),c.qZA(),c.qZA(),c.YNc(66,D,22,9,"div",23),c.qZA()),2&t&&(c.xp6(7),c.Q6J("formGroup",e.dataForm),c.xp6(2),c.Q6J("routerLink",c.VKq(7,E,"/"+e.adminBaseUrl))("state",c.VKq(9,F,e.router.url)),c.xp6(1),c.Q6J("src",e.pickedImage,c.LSH),c.xp6(17),c.Q6J("ngForOf",e.categories),c.xp6(38),c.Oqu(e.id?"Edit Featured Category":"Add Featured Category"),c.xp6(1),c.Q6J("ngIf",e.products&&e.products.length>0))},directives:[s.uh,_._Y,_.JL,v.xw,v.Wh,_.sg,a.rH,y.KE,y.hX,_.Fj,q.Nt,_.JJ,_.u,_.Q7,y.TO,A.L,T.gD,i.sg,u.lW,p.Hw,i.O5,w.ey,u.zs],pipes:[S.d],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:15px;gap:15px}.color-pick[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3b5998}.color-pick[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#012884}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #c9c9c9;width:100px;height:100px;object-fit:contain;border-radius:85px;transition:all .3s linear}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.7}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .select-product[_ngcontent-%COMP%]{margin:12px 0}form[_ngcontent-%COMP%]   .select-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:280px;padding:16px;font-size:15px;text-transform:uppercase}form[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:auto;padding:5px 32px;border-radius:50px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.product-view[_ngcontent-%COMP%]{width:100%;max-width:1300px;margin:0 auto 30px}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}.link-hover[_ngcontent-%COMP%]{transition:all .3s linear}.link-hover[_ngcontent-%COMP%]:hover     span{color:#3b5998}"]}),t})();const R=[{path:"",component:f},{path:"add-new-featured-category",component:N},{path:"edit-featured-category/:id",component:N}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.Bz.forChild(R)],a.Bz]}),t})();var z=n(56861),Y=n(12231);let J=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.ez,B,z.q,_.UX,v.ae,Y.D,A.E7]]}),t})()}}]);