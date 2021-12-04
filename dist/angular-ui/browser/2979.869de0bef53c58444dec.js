(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[2979],{57147:(t,e,n)=>{"use strict";n.d(e,{L:()=>a,E7:()=>o});var i=n(35366);let a=(()=>{class t{constructor(t){this.el=t,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator=".",this.allowNegatives=!1,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=t.nativeElement}ngOnChanges(t){if(t.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),t.min){const t=Number(this.min);this.min=isNaN(t)?-1/0:t}if(t.max){const t=Number(this.max);this.max=isNaN(t)?1/0:t}}onBeforeInput(t){if(isNaN(Number(t.data))){if(t.data===this.decimalSeparator||t.data===this.negativeSign&&this.allowNegatives)return;t.preventDefault(),t.stopPropagation()}}onKeyDown(t){if(this.navigationKeys.indexOf(t.key)>-1||("a"===t.key||"KeyA"===t.code)&&!0===t.ctrlKey||("c"===t.key||"KeyC"===t.code)&&!0===t.ctrlKey||("v"===t.key||"KeyV"===t.code)&&!0===t.ctrlKey||("x"===t.key||"KeyX"===t.code)&&!0===t.ctrlKey||("a"===t.key||"KeyA"===t.code)&&!0===t.metaKey||("c"===t.key||"KeyC"===t.code)&&!0===t.metaKey||("v"===t.key||"KeyV"===t.code)&&!0===t.metaKey||("x"===t.key||"KeyX"===t.code)&&!0===t.metaKey)return;let e="";if(this.decimal&&t.key===this.decimalSeparator)return e=this.forecastValue(t.key),e.split(this.decimalSeparator).length>2?void t.preventDefault():void(this.hasDecimalPoint=e.indexOf(this.decimalSeparator)>-1);if(t.key===this.negativeSign&&this.allowNegatives)return e=this.forecastValue(t.key),e.charAt(0)!==this.negativeSign||e.split(this.negativeSign).length>2?void t.preventDefault():void(this.hasNegativeSign=e.split(this.negativeSign).length>-1);if(" "===t.key||isNaN(Number(t.key)))return void t.preventDefault();if(e=e||this.forecastValue(t.key),this.regex&&!this.regex.test(e))return void t.preventDefault();const n=Number(e);(n>this.max||n<this.min)&&t.preventDefault()}onPaste(t){let e="";window.clipboardData?e=window.clipboardData.getData("text"):t.clipboardData&&t.clipboardData.getData&&(e=t.clipboardData.getData("text/plain")),this.pasteData(e),t.preventDefault()}onDrop(t){var e,n;const i=null!==(n=null===(e=t.dataTransfer)||void 0===e?void 0:e.getData("text"))&&void 0!==n?n:"";this.inputElement.focus(),this.pasteData(i),t.preventDefault()}pasteData(t){const e=this.sanitizeInput(t);if(!e.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,e))if(this.inputElement.setRangeText){const{selectionStart:t,selectionEnd:n}=this.inputElement;this.inputElement.setRangeText(e,null!=t?t:0,null!=n?n:0,"end"),void 0!==window.InstallTrigger&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,e);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}insertAtCursor(t,e){var n,i;const a=null!==(n=t.selectionStart)&&void 0!==n?n:0,o=null!==(i=t.selectionEnd)&&void 0!==i?i:0;t.value=t.value.substring(0,a)+e+t.value.substring(o,t.value.length);const r=a+e.length;t.focus(),t.setSelectionRange(r,r),this.triggerEvent(t,"input")}triggerEvent(t,e){if("createEvent"in document){const n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n)}}sanitizeInput(t){let e,n="";e=this.decimal&&this.isValidDecimal(t)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),n=t.replace(e,"");const i=this.inputElement.maxLength;if(i>0){const t=i-this.inputElement.value.length+(n.includes(`${this.negativeSign}`)?1:0);n=t>0?n.substring(0,t):""}return n}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(t){if(this.hasDecimalPoint){const e=this.getSelection();return e&&e.indexOf(this.decimalSeparator)>-1?t.split(this.decimalSeparator).length<=2:t.indexOf(this.decimalSeparator)<0}return t.split(this.decimalSeparator).length<=2}getSelection(){var t,e;return this.inputElement.value.substring(null!==(t=this.inputElement.selectionStart)&&void 0!==t?t:0,null!==(e=this.inputElement.selectionEnd)&&void 0!==e?e:0)}forecastValue(t){var e,n;const i=null!==(e=this.inputElement.selectionStart)&&void 0!==e?e:0,a=null!==(n=this.inputElement.selectionEnd)&&void 0!==n?n:0,o=this.inputElement.value;return o.substring(0,i)+t+o.substring(a)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","digitOnly",""]],hostBindings:function(t,e){1&t&&i.NdJ("beforeinput",function(t){return e.onBeforeInput(t)})("keydown",function(t){return e.onKeyDown(t)})("paste",function(t){return e.onPaste(t)})("drop",function(t){return e.onDrop(t)})},inputs:{decimal:"decimal",decimalSeparator:"decimalSeparator",allowNegatives:"allowNegatives",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[i.TTD]}),t})(),o=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()},22979:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DealOnPlayModule:()=>bt});var i=n(61116),a=n(33464),o=n(80848),r=n(88222),s=n(35366),l=n(92935),c=n(12632),d=n(99896),g=n(68370),h=n(84369),u=n(77307);const p=function(t){return["edit-deal-on-play",t]};function m(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._UZ(4,"img",8),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.ALo(7,"date"),s.qZA(),s.TgZ(8,"td"),s.TgZ(9,"button",9),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().openConfirmDialog(e._id)}),s.TgZ(10,"mat-icon"),s._uU(11,"delete"),s.qZA(),s.qZA(),s.TgZ(12,"button",10),s.TgZ(13,"mat-icon"),s._uU(14,"edit"),s.qZA(),s.qZA(),s.TgZ(15,"button",11),s.NdJ("click",function(){const e=s.CHM(t).$implicit;return s.oxw().openComponentDialog(e.products)}),s.TgZ(16,"mat-icon"),s._uU(17,"visibility"),s.qZA(),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit;s.xp6(1),s.uIk("data-label","Name"),s.xp6(1),s.Oqu(t.name),s.xp6(1),s.uIk("data-label","Image"),s.xp6(1),s.Q6J("src",t.image,s.LSH)("alt",t.image),s.xp6(1),s.uIk("data-label","createdAt"),s.xp6(1),s.Oqu(s.lcZ(7,9,t.createdAt)),s.xp6(2),s.uIk("data-label","Actions"),s.xp6(4),s.Q6J("routerLink",s.VKq(11,p,t._id))}}const b=function(){return["add-new-deal-on-play"]};let _=(()=>{class t{constructor(t,e,n,i){this.dialog=t,this.dealOnPlayService=e,this.uiService=n,this.reloadService=i,this.allDealOnPlay=[]}ngOnInit(){this.reloadService.refreshDealOnPlay$.subscribe(()=>{this.getAllDealOnPlay()}),this.getAllDealOnPlay()}openConfirmDialog(t){this.dialog.open(o.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{e&&this.deleteDealOnPlayById(t)})}openComponentDialog(t){console.log(t),this.dialog.open(r.s,{data:t,panelClass:["theme-dialog","full-screen-modal"],width:"100%",maxHeight:"90vh",autoFocus:!1,disableClose:!1}).afterClosed().subscribe(t=>{})}getAllDealOnPlay(){this.dealOnPlayService.getAllDealOnPlay().subscribe(t=>{this.allDealOnPlay=t.data},t=>{console.log(t)})}deleteDealOnPlayById(t){this.dealOnPlayService.deleteDealOnPlayById(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshDealOnPlay$()},t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l.uw),s.Y36(c.Q),s.Y36(d.F),s.Y36(g.f))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-categories"]],decls:22,vars:7,consts:[[1,"top-action"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"table-image",3,"src","alt"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"click"],["mat-mini-fab","",2,"margin-right","5px",3,"routerLink"],["mat-mini-fab","","color","primary",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"button",1),s.TgZ(2,"mat-icon"),s._uU(3,"add"),s.qZA(),s._uU(4," Add Deal on Play "),s.qZA(),s.qZA(),s.TgZ(5,"div",2),s.TgZ(6,"h2"),s._uU(7,"Deal on Play List"),s.qZA(),s.qZA(),s._UZ(8,"hr",3),s.TgZ(9,"div",4),s.TgZ(10,"table"),s.TgZ(11,"thead"),s.TgZ(12,"tr",5),s.TgZ(13,"th",6),s._uU(14),s.qZA(),s.TgZ(15,"th",6),s._uU(16),s.qZA(),s.TgZ(17,"th",6),s._uU(18),s.qZA(),s.TgZ(19,"th",6),s._uU(20),s.qZA(),s.qZA(),s.qZA(),s.YNc(21,m,18,13,"tr",7),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Q6J("routerLink",s.DdM(6,b)),s.xp6(13),s.Oqu("Name"),s.xp6(2),s.Oqu("Image"),s.xp6(2),s.Oqu("createdAt"),s.xp6(2),s.Oqu("Actions"),s.xp6(1),s.Q6J("ngForOf",e.allDealOnPlay))},directives:[h.lW,a.rH,u.Hw,i.sg],pipes:[i.uU],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.top-action[_ngcontent-%COMP%]{text-align:right;margin-top:16px;padding-right:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Open Sans,sans-serif}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}"]}),t})();var f=n(31041),O=n(68783),P=n(529),C=n(61613),x=n(65031),v=n(31269),M=n(35965),y=n(13070),Z=n(9550),A=n(57147),w=n(40967);const S=["templateForm"];function q(t,e){if(1&t&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._UZ(4,"img",27),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s._uU(12),s.ALo(13,"price"),s.qZA(),s.TgZ(14,"td"),s._uU(15),s.qZA(),s.TgZ(16,"td"),s.TgZ(17,"a",28),s.TgZ(18,"mat-icon"),s._uU(19,"visibility"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){const t=e.$implicit;s.xp6(1),s.uIk("data-label","Name"),s.xp6(1),s.Oqu(t.productName),s.xp6(1),s.uIk("data-label","Image"),s.xp6(1),s.Q6J("src",null!=t&&t.images&&(null==t?null:t.images.length)>0?t.images[0]:"/assets/images/placeholder/test.png",s.LSH)("alt",t.productName),s.xp6(1),s.uIk("data-label","SKU"),s.xp6(1),s.Oqu(t.sku),s.xp6(1),s.uIk("data-label","Category"),s.xp6(1),s.Oqu(t.categorySlug),s.xp6(1),s.uIk("data-label","Retail Price"),s.xp6(1),s.hij("\u09f3 ",t.price,""),s.xp6(1),s.uIk("data-label","Sale Price"),s.xp6(1),s.hij("\u09f3 ",s.xi3(13,17,t,"priceWithDiscount"),""),s.xp6(2),s.uIk("data-label","Available"),s.xp6(1),s.Oqu(t.quantity),s.xp6(1),s.uIk("data-label","Details"),s.xp6(1),s.Q6J("href","/product-details/"+t.productSlug,s.LSH)}}function k(t,e){if(1&t&&(s.TgZ(0,"div",22),s.TgZ(1,"div",23),s.TgZ(2,"table"),s.TgZ(3,"thead"),s.TgZ(4,"tr",24),s.TgZ(5,"th",25),s._uU(6),s.qZA(),s.TgZ(7,"th",25),s._uU(8),s.qZA(),s.TgZ(9,"th",25),s._uU(10),s.qZA(),s.TgZ(11,"th",25),s._uU(12),s.qZA(),s.TgZ(13,"th",25),s._uU(14),s.qZA(),s.TgZ(15,"th",25),s._uU(16),s.qZA(),s.TgZ(17,"th",25),s._uU(18),s.qZA(),s.TgZ(19,"th",25),s._uU(20),s.qZA(),s.qZA(),s.qZA(),s.YNc(21,q,20,20,"tr",26),s.qZA(),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(6),s.Oqu("Name"),s.xp6(2),s.Oqu("Name"),s.xp6(2),s.Oqu("SKU"),s.xp6(2),s.Oqu("Category"),s.xp6(2),s.Oqu("Retail Price"),s.xp6(2),s.Oqu("Sale Price"),s.xp6(2),s.Oqu("Available"),s.xp6(2),s.Oqu("Details"),s.xp6(1),s.Q6J("ngForOf",t.products)}}const T=function(t){return[t,"image-gallery"]},D=function(t){return{url:t}};let I=(()=>{class t{constructor(t,e,n,i,a,o,r,s,l){this.fb=t,this.dealOnPlayService=e,this.activatedRoute=n,this.uiService=i,this.storageService=a,this.router=o,this.dialog=r,this.productService=s,this.spinner=l,this.adminBaseUrl=P.N.adminBaseUrl,this.isLoading=!1,this.dealOnPlay=null,this.products=[],this.placeholder="/assets/images/avatar/image-upload.jpg",this.selectedProductIds=[],this.needSessionDestroy=!0}ngOnInit(){this.dataForm=this.fb.group({name:[null,f.kI.required],priority:[null],shortDesc:[null,f.kI.required],info:[null],image:[null],routerLink:[null,f.kI.required],cardBackground:[null,f.kI.required],cardBtnColor:[null,f.kI.required],products:[null,f.kI.required]}),this.pickedImage=this.placeholder,this.id||(this.storageService.getStoredInput("DEAL_ON_PLAY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("DEAL_ON_PLAY_INPUT")),this.dataForm.value.products&&this.dataForm.value.products.length>0&&this.getSpecificProductsById(this.dataForm.value.products),history.state.images&&(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage}))),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getSingleDealOnPlayById()})}setFormData(){this.dataForm.patchValue(this.dealOnPlay),this.storageService.getStoredInput("DEAL_ON_PLAY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("DEAL_ON_PLAY_INPUT")),history.state.images?(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage})):this.pickedImage=this.dealOnPlay.image?this.dealOnPlay.image:this.placeholder}openComponentDialog(t){this.dialog.open(O.n,{data:this.dealOnPlay?this.products.map(t=>t._id):null,panelClass:["theme-dialog","full-screen-modal"],width:"100%",height:"90vh",autoFocus:!1,disableClose:!0}).afterClosed().subscribe(t=>{t&&t.selectedIds&&(this.selectedProductIds=t.selectedIds,this.dataForm.patchValue({products:t.selectedIds}),this.getSpecificProductsById(this.selectedProductIds))})}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.id){const t=Object.assign(Object.assign({},this.dataForm.value),{_id:this.id});this.editDealOnPlay(t)}else this.addNewDealOnPlay(this.dataForm.value)}onHoldInputData(){var t;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(t=this.dataForm)||void 0===t?void 0:t.value,"DEAL_ON_PLAY_INPUT")}addNewDealOnPlay(t){this.dealOnPlayService.addNewDealOnPlay(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.storageService.removeSessionData("DEAL_ON_PLAY_INPUT"),this.pickedImage=this.placeholder,this.selectedProductIds=[],this.products=[]},t=>{console.log(t)})}editDealOnPlay(t){this.dealOnPlayService.editDealOnPlay(t).subscribe(t=>{this.uiService.success(t.message),this.storageService.removeSessionData("DEAL_ON_PLAY_INPUT")},t=>{console.log(t)})}getSingleDealOnPlayById(){this.dealOnPlayService.getSingleDealOnPlayById(this.id,"-attributes -filterData -tags -ratingReview -discussion -warrantyServices -description").subscribe(t=>{this.dealOnPlay=t.data,this.products=this.dealOnPlay.products,this.setFormData()},t=>{console.log(t)})}getSpecificProductsById(t){this.spinner.show(),this.subProduct=this.productService.getSpecificProductsById(t,"-attributes -filterData -tags -ratingReview -discussion -warrantyServices -description").subscribe(t=>{this.products=t.data,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.subProduct&&this.subProduct.unsubscribe(),this.needSessionDestroy&&this.storageService.removeSessionData("DEAL_ON_PLAY_INPUT")}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(f.qu),s.Y36(c.Q),s.Y36(a.gz),s.Y36(d.F),s.Y36(C.V),s.Y36(a.F0),s.Y36(l.uw),s.Y36(x.M),s.Y36(v.t2))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-add-new-category"]],viewQuery:function(t,e){if(1&t&&s.Gf(S,5),2&t){let t;s.iGM(t=s.CRH())&&(e.templateForm=t.first)}},decls:62,vars:10,consts:[[2,"position","relative"],[1,"header-dialog"],["mat-dialog-title",""],[1,"color-pick"],["href","https://www.hexcolortool.com/","target","_blank"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"imag-view",3,"routerLink","state","click"],["alt","",3,"src"],["appearance","outline"],["formControlName","name","matInput","","placeholder","Enter name","required",""],["formControlName","priority","matInput","","placeholder","Enter priority","required","","digitOnly",""],["formControlName","shortDesc","matInput","","placeholder","Enter shortDesc","required",""],["formControlName","info","matInput","","placeholder","Enter info","required",""],["formControlName","routerLink","matInput","","placeholder","Enter shortDesc","required",""],["formControlName","cardBackground","matInput","","placeholder","Enter cardBackground","required",""],["formControlName","cardBtnColor","matInput","","placeholder","Enter cardBtnColor","required",""],[1,"select-product"],["type","button","mat-raised-button","","color","accent",3,"click"],[1,"save-btn"],["mat-raised-button","","color","primary","type","submit"],["class","product-view",4,"ngIf"],[1,"product-view"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[3,"src","alt"],["target","_blank","mat-icon-button","",1,"link-hover",3,"href"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"h1",2),s._uU(3,"Deal on Play"),s.qZA(),s.TgZ(4,"div",3),s.TgZ(5,"a",4),s._uU(6,"Pick Your Color"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(7,"form",5,6),s.NdJ("ngSubmit",function(){return e.onSubmit()}),s.TgZ(9,"div",7),s.NdJ("click",function(){return e.onHoldInputData()}),s._UZ(10,"img",8),s.qZA(),s.TgZ(11,"mat-form-field",9),s.TgZ(12,"mat-label"),s._uU(13,"Name"),s.qZA(),s._UZ(14,"input",10),s.TgZ(15,"mat-error"),s._uU(16,"This field is required"),s.qZA(),s.qZA(),s.TgZ(17,"mat-form-field",9),s.TgZ(18,"mat-label"),s._uU(19,"priority"),s.qZA(),s._UZ(20,"input",11),s.TgZ(21,"mat-error"),s._uU(22,"This field is required"),s.qZA(),s.qZA(),s.TgZ(23,"mat-form-field",9),s.TgZ(24,"mat-label"),s._uU(25,"shortDesc"),s.qZA(),s._UZ(26,"input",12),s.TgZ(27,"mat-error"),s._uU(28,"This field is required"),s.qZA(),s.qZA(),s.TgZ(29,"mat-form-field",9),s.TgZ(30,"mat-label"),s._uU(31,"info"),s.qZA(),s._UZ(32,"input",13),s.TgZ(33,"mat-error"),s._uU(34,"This field is required"),s.qZA(),s.qZA(),s.TgZ(35,"mat-form-field",9),s.TgZ(36,"mat-label"),s._uU(37,"routerLink"),s.qZA(),s._UZ(38,"input",14),s.TgZ(39,"mat-error"),s._uU(40,"This field is required"),s.qZA(),s.qZA(),s.TgZ(41,"mat-form-field",9),s.TgZ(42,"mat-label"),s._uU(43,"cardBackground"),s.qZA(),s._UZ(44,"input",15),s.TgZ(45,"mat-error"),s._uU(46,"This field is required"),s.qZA(),s.qZA(),s.TgZ(47,"mat-form-field",9),s.TgZ(48,"mat-label"),s._uU(49,"cardBtnColor"),s.qZA(),s._UZ(50,"input",16),s.TgZ(51,"mat-error"),s._uU(52,"This field is required"),s.qZA(),s.qZA(),s.TgZ(53,"div",17),s.TgZ(54,"button",18),s.NdJ("click",function(){return e.openComponentDialog()}),s.TgZ(55,"mat-icon"),s._uU(56,"add"),s.qZA(),s._uU(57," Choose Product "),s.qZA(),s.qZA(),s.TgZ(58,"div",19),s.TgZ(59,"button",20),s._uU(60),s.qZA(),s.qZA(),s.qZA(),s.YNc(61,k,22,9,"div",21),s.qZA()),2&t&&(s.xp6(7),s.Q6J("formGroup",e.dataForm),s.xp6(2),s.Q6J("routerLink",s.VKq(6,T,"/"+e.adminBaseUrl))("state",s.VKq(8,D,e.router.url)),s.xp6(1),s.Q6J("src",e.pickedImage,s.LSH),s.xp6(50),s.Oqu(e.id?"Edit Deal on Play":"Add Deal on Play"),s.xp6(1),s.Q6J("ngIf",e.products&&e.products.length>0))},directives:[l.uh,f._Y,f.JL,M.xw,M.Wh,f.sg,a.rH,y.KE,y.hX,f.Fj,Z.Nt,f.JJ,f.u,f.Q7,y.TO,A.L,h.lW,u.Hw,i.O5,i.sg,h.zs],pipes:[w.d],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;grid-gap:15px;gap:15px}.color-pick[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#3b5998}.color-pick[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#012884}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #c9c9c9;width:100px;height:100px;object-fit:contain;border-radius:85px;transition:all .3s linear}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.7}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .select-product[_ngcontent-%COMP%]{margin:12px 0}form[_ngcontent-%COMP%]   .select-product[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:280px;padding:16px;font-size:15px;text-transform:uppercase}form[_ngcontent-%COMP%]   .save-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:auto;padding:5px 32px;border-radius:50px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.product-view[_ngcontent-%COMP%]{width:100%;max-width:1300px;margin:0 auto 30px}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}.link-hover[_ngcontent-%COMP%]{transition:all .3s linear}.link-hover[_ngcontent-%COMP%]:hover     span{color:#3b5998}"]}),t})();const E=[{path:"",component:_},{path:"add-new-deal-on-play",component:I},{path:"edit-deal-on-play/:id",component:I}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[a.Bz.forChild(E)],a.Bz]}),t})();var U=n(56861),F=n(77154),L=n(12231),R=n(82151),B=n(22797),Y=n(7436),z=(n(55959),n(31906),n(87570)),V=(n(40878),n(25416),n(47701),n(98720),n(90611),n(43835),n(19861)),K=n(99235),H=n(35333),J=n(87064);n(69024),n(94720);const j=/^\s+/,$=/\s+$/,Q=Math.round,G=(Math,Math,Math,255);function X(t){return 1==t.length?"0"+t:""+t}function W(t){return tt(t)/255}function tt(t){return parseInt(t,16)}function et(t,e,n,i){var a=[X(Q(t).toString(16)),X(Q(e).toString(16)),X(Q(n).toString(16))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}const nt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",it="[\\s|\\(]+("+nt+")[,|\\s]+("+nt+")[,|\\s]+("+nt+")\\s*\\)?",at="[\\s|\\(]+("+nt+")[,|\\s]+("+nt+")[,|\\s]+("+nt+")[,|\\s]+("+nt+")\\s*\\)?",ot={CSS_UNIT:new RegExp(nt),rgb:new RegExp("rgb"+it),rgba:new RegExp("rgba"+at),hsl:new RegExp("hsl"+it),hsla:new RegExp("hsla"+at),hsv:new RegExp("hsv"+it),hsva:new RegExp("hsva"+at),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};class rt{constructor(t,e,n,i){this.r=t>G?G:t,this.g=e>G?G:e,this.b=n>G?G:n,this.a=null!=i?i>1?1:i:1,this.roundA=Math.round(this.a),this.hex=et(this.r,this.g,this.b),this.rgba=this.toRgba()}toHex(t){return et(this.r,this.g,this.b,t)}toRgba(){return`rgba(${this.r},${this.g},${this.b},${this.a})`}toHexString(t){return"#"+this.toHex(t)}toRgbString(){return 1===this.a?"rgb("+Math.round(this.r)+", "+Math.round(this.g)+", "+Math.round(this.b)+")":"rgba("+Math.round(this.r)+", "+Math.round(this.g)+", "+Math.round(this.b)+", "+this.roundA+")"}toHex8(t){return function(t,e,n,i,a){var o,r=[X(Q(t).toString(16)),X(Q(e).toString(16)),X(Q(n).toString(16)),X((o=i,Math.round(255*parseFloat(o)).toString(16)))];return a&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)&&r[3].charAt(0)==r[3].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t){return"#"+this.toHex8(t)}toString(t){let e;return t||!(this.a<1&&this.a>=0)||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t?("rgb"===t&&(e=this.toRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),e||this.toHexString()):this.toRgbString()}}let st=(()=>{class t{constructor(){}sameColor(t,e){return null==t&&null==e||null!=t&&null!=e&&t.rgba===e.rgba}format(t,e){return t.toString(e)}parse(t){const e=function(t){let e;return t=t.replace(j,"").replace($,"").toLowerCase(),(e=ot.rgb.exec(t))?{r:e[1],g:e[2],b:e[3],a:1}:(e=ot.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=ot.hex8.exec(t))?{r:tt(e[1]),g:tt(e[2]),b:tt(e[3]),a:W(e[4])}:(e=ot.hex6.exec(t))?{r:tt(e[1]),g:tt(e[2]),b:tt(e[3]),a:1}:(e=ot.hex4.exec(t))?{r:tt(e[1]+""+e[1]),g:tt(e[2]+""+e[2]),b:tt(e[3]+""+e[3]),a:W(e[4]+""+e[4])}:(e=ot.hex3.exec(t))?{r:tt(e[1]+""+e[1]),g:tt(e[2]+""+e[2]),b:tt(e[3]+""+e[3]),a:1}:null}(t);return e?new rt(e.r,e.g,e.b,e.a):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac}),t})();const lt={display:{colorInput:"hex"}},ct=new s.OlP("mat-color-formats"),dt={provide:new s.OlP("ngx-mat-colorpicker-scroll-strategy"),deps:[H.aV],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};(0,J.pj)(class{constructor(t){this._elementRef=t}});class gt{constructor(t,e){this.target=t,this.targetElement=e,this.value=this.target.value}}const ht={provide:f.JU,useExisting:(0,s.Gpc)(()=>pt),multi:!0},ut={provide:f.Cf,useExisting:(0,s.Gpc)(()=>pt),multi:!0};let pt=(()=>{class t{constructor(t,e,n,i){if(this._elementRef=t,this._formField=e,this._colorFormats=n,this._adapter=i,this.colorChange=new s.vpe,this.colorInput=new s.vpe,this._disabledChange=new s.vpe,this._valueChange=new s.vpe,this._onTouched=()=>{},this._cvaOnChange=()=>{},this._validatorOnChange=()=>{},this._pickerSubscription=z.w.EMPTY,this._validator=f.kI.compose([]),this._lastValueValid=!1,!this._colorFormats)throw Error("NgxMatColorPicker: No provider found for MAT_COLOR_FORMATS. You must define MAT_COLOR_FORMATS in your module")}set ngxMatColorPicker(t){t&&(this._picker=t,this._picker.registerInput(this),this._pickerSubscription.unsubscribe(),this._pickerSubscription=this._picker._selectedChanged.subscribe(t=>{this.value=t,this._cvaOnChange(t),this._onTouched(),this.colorInput.emit(new gt(this,this._elementRef.nativeElement)),this.colorChange.emit(new gt(this,this._elementRef.nativeElement))}))}get disabled(){return!!this._disabled}set disabled(t){const e=(0,V.Ig)(t),n=this._elementRef.nativeElement;this._disabled!==e&&(this._disabled=e,this._disabledChange.emit(e)),e&&n.blur&&n.blur()}get value(){return this._value}set value(t){const e=this.value;this._value=t,this._formatValue(t),this._adapter.sameColor(e,t)||this._valueChange.emit(t)}getThemePalette(){return this._formField?this._formField.color:void 0}registerOnValidatorChange(t){this._validatorOnChange=t}validate(t){return this._validator?this._validator(t):null}getPopupConnectionElementRef(){return this.getConnectedOverlayOrigin()}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}ngOnInit(){}ngOnDestroy(){this._pickerSubscription.unsubscribe(),this._valueChange.complete(),this._disabledChange.complete()}writeValue(t){this.value=t}registerOnChange(t){this._cvaOnChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_onChange(){this.colorChange.emit(new gt(this,this._elementRef.nativeElement))}_onKeydown(t){this._picker&&t.altKey&&t.keyCode===K.JH&&!this._elementRef.nativeElement.readOnly&&(this._picker.open(),t.preventDefault())}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(t){this._elementRef.nativeElement.value=t?this._adapter.format(t,this._colorFormats.display.colorInput):""}_onInput(t){const e=this._lastValueValid,n=this._adapter.parse(t);this._adapter.sameColor(n,this._value)?e!==this._lastValueValid&&this._validatorOnChange():(this._value=n,this._cvaOnChange(n),this._valueChange.emit(n),this.colorInput.emit(new gt(this,this._elementRef.nativeElement)))}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.SBq),s.Y36(y.KE,8),s.Y36(ct,8),s.Y36(st))},t.\u0275dir=s.lG2({type:t,selectors:[["input","ngxMatColorPicker",""]],hostVars:3,hostBindings:function(t,e){1&t&&s.NdJ("input",function(t){return e._onInput(t.target.value)})("change",function(){return e._onChange()})("blur",function(){return e._onBlur()})("keydown",function(t){return e._onKeydown(t)}),2&t&&(s.Ikx("disabled",e.disabled),s.uIk("aria-haspopup",e._picker?"dialog":null)("aria-owns",(null==e._picker?null:e._picker.opened)&&e._picker.id||null))},inputs:{ngxMatColorPicker:"ngxMatColorPicker",value:"value",disabled:"disabled"},outputs:{colorChange:"colorChange",colorInput:"colorInput"},exportAs:["ngxMatColorPickerInput"],features:[s._Bn([ht,ut,{provide:Z.Jk,useExisting:t}])]}),t})(),mt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[st,dt],imports:[[i.ez,Z.c,h.ot,B.QW,Y.Fk,f.u5,f.UX,l.Is,R.eL,u.Ps]]}),t})(),bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({providers:[{provide:ct,useValue:lt}],imports:[[i.ez,N,U.q,f.UX,F.o9,f.u5,L.D,mt,A.E7]]}),t})()}}]);