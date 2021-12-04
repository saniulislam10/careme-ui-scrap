(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[681],{57147:(t,e,n)=>{"use strict";n.d(e,{L:()=>o,E7:()=>a});var i=n(35366);let o=(()=>{class t{constructor(t){this.el=t,this.hasDecimalPoint=!1,this.hasNegativeSign=!1,this.navigationKeys=["Backspace","Delete","Tab","Escape","Enter","Home","End","ArrowLeft","ArrowRight","Clear","Copy","Paste"],this.decimal=!1,this.decimalSeparator=".",this.allowNegatives=!1,this.negativeSign="-",this.min=-1/0,this.max=1/0,this.regex=null,this.inputElement=t.nativeElement}ngOnChanges(t){if(t.pattern&&(this.regex=this.pattern?RegExp(this.pattern):null),t.min){const t=Number(this.min);this.min=isNaN(t)?-1/0:t}if(t.max){const t=Number(this.max);this.max=isNaN(t)?1/0:t}}onBeforeInput(t){if(isNaN(Number(t.data))){if(t.data===this.decimalSeparator||t.data===this.negativeSign&&this.allowNegatives)return;t.preventDefault(),t.stopPropagation()}}onKeyDown(t){if(this.navigationKeys.indexOf(t.key)>-1||("a"===t.key||"KeyA"===t.code)&&!0===t.ctrlKey||("c"===t.key||"KeyC"===t.code)&&!0===t.ctrlKey||("v"===t.key||"KeyV"===t.code)&&!0===t.ctrlKey||("x"===t.key||"KeyX"===t.code)&&!0===t.ctrlKey||("a"===t.key||"KeyA"===t.code)&&!0===t.metaKey||("c"===t.key||"KeyC"===t.code)&&!0===t.metaKey||("v"===t.key||"KeyV"===t.code)&&!0===t.metaKey||("x"===t.key||"KeyX"===t.code)&&!0===t.metaKey)return;let e="";if(this.decimal&&t.key===this.decimalSeparator)return e=this.forecastValue(t.key),e.split(this.decimalSeparator).length>2?void t.preventDefault():void(this.hasDecimalPoint=e.indexOf(this.decimalSeparator)>-1);if(t.key===this.negativeSign&&this.allowNegatives)return e=this.forecastValue(t.key),e.charAt(0)!==this.negativeSign||e.split(this.negativeSign).length>2?void t.preventDefault():void(this.hasNegativeSign=e.split(this.negativeSign).length>-1);if(" "===t.key||isNaN(Number(t.key)))return void t.preventDefault();if(e=e||this.forecastValue(t.key),this.regex&&!this.regex.test(e))return void t.preventDefault();const n=Number(e);(n>this.max||n<this.min)&&t.preventDefault()}onPaste(t){let e="";window.clipboardData?e=window.clipboardData.getData("text"):t.clipboardData&&t.clipboardData.getData&&(e=t.clipboardData.getData("text/plain")),this.pasteData(e),t.preventDefault()}onDrop(t){var e,n;const i=null!==(n=null===(e=t.dataTransfer)||void 0===e?void 0:e.getData("text"))&&void 0!==n?n:"";this.inputElement.focus(),this.pasteData(i),t.preventDefault()}pasteData(t){const e=this.sanitizeInput(t);if(!e.includes(this.negativeSign)||!this.hasNegativeSign||this.getSelection().includes(this.negativeSign)){if(!document.execCommand("insertText",!1,e))if(this.inputElement.setRangeText){const{selectionStart:t,selectionEnd:n}=this.inputElement;this.inputElement.setRangeText(e,null!=t?t:0,null!=n?n:0,"end"),void 0!==window.InstallTrigger&&this.inputElement.dispatchEvent(new Event("input",{cancelable:!0}))}else this.insertAtCursor(this.inputElement,e);this.decimal&&(this.hasDecimalPoint=this.inputElement.value.indexOf(this.decimalSeparator)>-1),this.hasNegativeSign=this.inputElement.value.indexOf(this.negativeSign)>-1}}insertAtCursor(t,e){var n,i;const o=null!==(n=t.selectionStart)&&void 0!==n?n:0,a=null!==(i=t.selectionEnd)&&void 0!==i?i:0;t.value=t.value.substring(0,o)+e+t.value.substring(a,t.value.length);const r=o+e.length;t.focus(),t.setSelectionRange(r,r),this.triggerEvent(t,"input")}triggerEvent(t,e){if("createEvent"in document){const n=document.createEvent("HTMLEvents");n.initEvent(e,!1,!0),t.dispatchEvent(n)}}sanitizeInput(t){let e,n="";e=this.decimal&&this.isValidDecimal(t)?new RegExp(`${this.getNegativeSignRegExp()}[^0-9${this.decimalSeparator}]`,"g"):new RegExp(`${this.getNegativeSignRegExp()}[^0-9]`,"g"),n=t.replace(e,"");const i=this.inputElement.maxLength;if(i>0){const t=i-this.inputElement.value.length+(n.includes(`${this.negativeSign}`)?1:0);n=t>0?n.substring(0,t):""}return n}getNegativeSignRegExp(){return!this.allowNegatives||this.hasNegativeSign&&!this.getSelection().includes(this.negativeSign)?"":`(?!^${this.negativeSign})`}isValidDecimal(t){if(this.hasDecimalPoint){const e=this.getSelection();return e&&e.indexOf(this.decimalSeparator)>-1?t.split(this.decimalSeparator).length<=2:t.indexOf(this.decimalSeparator)<0}return t.split(this.decimalSeparator).length<=2}getSelection(){var t,e;return this.inputElement.value.substring(null!==(t=this.inputElement.selectionStart)&&void 0!==t?t:0,null!==(e=this.inputElement.selectionEnd)&&void 0!==e?e:0)}forecastValue(t){var e,n;const i=null!==(e=this.inputElement.selectionStart)&&void 0!==e?e:0,o=null!==(n=this.inputElement.selectionEnd)&&void 0!==n?n:0,a=this.inputElement.value;return a.substring(0,i)+t+a.substring(o)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq))},t.\u0275dir=i.lG2({type:t,selectors:[["","digitOnly",""]],hostBindings:function(t,e){1&t&&i.NdJ("beforeinput",function(t){return e.onBeforeInput(t)})("keydown",function(t){return e.onKeyDown(t)})("paste",function(t){return e.onPaste(t)})("drop",function(t){return e.onDrop(t)})},inputs:{decimal:"decimal",decimalSeparator:"decimalSeparator",allowNegatives:"allowNegatives",negativeSign:"negativeSign",min:"min",max:"max",pattern:"pattern"},features:[i.TTD]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[]]}),t})()},681:(t,e,n)=>{"use strict";n.r(e),n.d(e,{BlogModule:()=>F});var i=n(61116),o=n(33464),a=n(80848),r=n(35366),s=n(92935),l=n(71445),c=n(99896),g=n(68370),d=n(31269),u=n(56507),h=n(84369),p=n(77307);const m=function(t){return["edit-blog",t]},b=function(t){return["/blog/",t]};function f(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"tr"),r.TgZ(1,"td"),r._uU(2),r.qZA(),r.TgZ(3,"td"),r._UZ(4,"img",8),r.qZA(),r.TgZ(5,"td"),r._uU(6),r.qZA(),r.TgZ(7,"td"),r._uU(8),r.ALo(9,"date"),r.qZA(),r.TgZ(10,"td"),r.TgZ(11,"button",9),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw().openConfirmDialog(e._id)}),r.TgZ(12,"mat-icon"),r._uU(13,"delete"),r.qZA(),r.qZA(),r.TgZ(14,"button",10),r.TgZ(15,"mat-icon"),r._uU(16,"edit"),r.qZA(),r.qZA(),r.TgZ(17,"a",11),r.TgZ(18,"mat-icon",12),r._uU(19,"visibility"),r.qZA(),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(1),r.uIk("data-label","Title"),r.xp6(1),r.Oqu(t.title),r.xp6(1),r.uIk("data-label","Image"),r.xp6(1),r.Q6J("src",t.image?t.image:"/assets/images/placeholder/test.png",r.LSH)("alt",t.image),r.xp6(1),r.uIk("data-label","Author"),r.xp6(1),r.Oqu(t.author),r.xp6(1),r.uIk("data-label","createdAt"),r.xp6(1),r.Oqu(r.lcZ(9,12,t.createdAt)),r.xp6(2),r.uIk("data-label","Actions"),r.xp6(4),r.Q6J("routerLink",r.VKq(14,m,t._id)),r.xp6(3),r.Q6J("routerLink",r.VKq(16,b,null==t?null:t.slug))}}const _=function(){return["add-blog"]};let v=(()=>{class t{constructor(t,e,n,i,o,a,r,s){this.dialog=t,this.blogService=e,this.uiService=n,this.reloadService=i,this.spinner=o,this.utilsService=a,this.router=r,this.activatedRoute=s,this.currentPage=1,this.dataTypeFormat="json",this.allBlogs=[]}ngOnInit(){this.reloadService.refreshBlog$.subscribe(()=>{this.getAllBlogs()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(t=>{this.currentPage=t&&t.page?t.page:1,this.getAllBlogs()})}openConfirmDialog(t){this.dialog.open(a.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{e&&this.deleteBlog(t)})}getAllBlogs(){this.blogService.getAllBlogs().subscribe(t=>{this.allBlogs=t.data},t=>{console.log(t)})}deleteBlog(t){this.blogService.deleteBlog(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshBlog$()},t=>{console.log(t)})}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(s.uw),r.Y36(l.Z),r.Y36(c.F),r.Y36(g.f),r.Y36(d.t2),r.Y36(u.F),r.Y36(o.F0),r.Y36(o.gz))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-blog"]],decls:24,vars:8,consts:[[1,"top-action"],["mat-raised-button","","color","primary",3,"routerLink"],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"table-image",3,"src","alt"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"click"],["mat-mini-fab","",2,"margin-right","5px",3,"routerLink"],["mat-mini-fab","","color","primary","target","_blank","mat-icon-button","",3,"routerLink"],[2,"color","#FFFFFF"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"button",1),r.TgZ(2,"mat-icon"),r._uU(3,"add"),r.qZA(),r._uU(4," Add Blog "),r.qZA(),r.qZA(),r.TgZ(5,"div",2),r.TgZ(6,"h2"),r._uU(7,"Blog List"),r.qZA(),r.qZA(),r._UZ(8,"hr",3),r.TgZ(9,"div",4),r.TgZ(10,"table"),r.TgZ(11,"thead"),r.TgZ(12,"tr",5),r.TgZ(13,"th",6),r._uU(14),r.qZA(),r.TgZ(15,"th",6),r._uU(16),r.qZA(),r.TgZ(17,"th",6),r._uU(18),r.qZA(),r.TgZ(19,"th",6),r._uU(20),r.qZA(),r.TgZ(21,"th",6),r._uU(22),r.qZA(),r.qZA(),r.qZA(),r.YNc(23,f,20,18,"tr",7),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("routerLink",r.DdM(7,_)),r.xp6(13),r.Oqu("Title"),r.xp6(2),r.Oqu("Image"),r.xp6(2),r.Oqu("Author"),r.xp6(2),r.Oqu("createdAt"),r.xp6(2),r.Oqu("Actions"),r.xp6(1),r.Q6J("ngForOf",e.allBlogs))},directives:[h.lW,o.rH,p.Hw,i.sg,h.zs,o.yS],pipes:[i.uU],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.top-action[_ngcontent-%COMP%]{text-align:right;margin-top:16px;padding-right:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Open Sans,sans-serif}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}"]}),t})();var x=n(31041),O=n(61613),C=n(28858),P=n(40994),Z=n(35965),M=n(13070),S=n(9550),y=n(57147),q=n(67490),A=n(87672);const w=["templateForm"];function T(t,e){1&t&&r._UZ(0,"mat-spinner",20)}const k=function(t){return[t,"image-gallery"]},D=function(t){return{url:t}};let B=(()=>{class t{constructor(t,e,n,i,o,a,r,s,l){this.fb=t,this.activatedRoute=e,this.uiService=n,this.utilsService=i,this.storageService=o,this.router=a,this.spinner=r,this.blogService=s,this.textEditorCtrService=l,this.autoSlug=!0,this.isLoading=!1,this.placeholder="/assets/images/avatar/image-upload.jpg",this.editorConfigDesc={editable:!0,minHeight:"250px",enableToolbar:!0,showToolbar:!0,placeholder:"Enter/Copy product descriptions...",sanitize:!1,toolbarPosition:"top",translate:"no",defaultParagraphSeparator:"p",defaultFontName:"Arial",toolbarHiddenButtons:[["bold"]]},this.needSessionDestroy=!0}ngOnInit(){this.dataForm=this.fb.group({title:[null,x.kI.required],slug:[null,x.kI.required],author:[null,x.kI.required],shortDescription:[null,x.kI.required],body:[null,x.kI.required],priority:[null],image:[null]}),this.pickedImage=this.placeholder,this.id||(this.storageService.getStoredInput("BLOG_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("BLOG_INPUT")),history.state.images&&(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage}))),this.autoGenerateSlug(),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getBlogByBlogID()})}setFormData(){this.dataForm.patchValue(this.blog),this.storageService.getStoredInput("BLOG_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("BLOG_INPUT")),history.state.images?(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage})):this.pickedImage=this.blog.image?this.blog.image:this.placeholder}autoGenerateSlug(){if(!0===this.autoSlug)this.sub=this.dataForm.get("title").valueChanges.pipe().subscribe(t=>{const e=null==t?void 0:t.trim().replace(/[^A-Z0-9]+/gi,"-").toLowerCase();this.dataForm.patchValue({slug:e})});else{if(null==this.sub)return;this.sub.unsubscribe()}}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.blog){const t=Object.assign(Object.assign({},this.dataForm.value),{_id:this.blog._id});this.editBlogData(t)}else this.addBlog(this.dataForm.value)}onHoldInputData(){var t;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(t=this.dataForm)||void 0===t?void 0:t.value,"BLOG_INPUT")}addBlog(t){this.spinner.show(),this.blogService.addBlog(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.storageService.removeSessionData("BLOG_INPUT"),this.pickedImage=this.placeholder,this.spinner.hide()},t=>{console.log(t)})}getBlogByBlogID(){this.spinner.show(),this.blogService.getBlogByBlogID(this.id).subscribe(t=>{this.blog=t.data,this.blog&&this.setFormData(),this.spinner.hide()},t=>{console.log(t)})}editBlogData(t){this.spinner.show(),this.blogService.editBlogData(t).subscribe(t=>{this.uiService.success(t.message),this.storageService.removeSessionData("BLOG_INPUT"),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.needSessionDestroy&&this.storageService.removeSessionData("BLOG_INPUT")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(x.qu),r.Y36(o.gz),r.Y36(c.F),r.Y36(u.F),r.Y36(O.V),r.Y36(o.F0),r.Y36(d.t2),r.Y36(l.Z),r.Y36(C.W))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-add-blog"]],viewQuery:function(t,e){if(1&t&&r.Gf(w,5),2&t){let t;r.iGM(t=r.CRH())&&(e.templateForm=t.first)}},decls:46,vars:13,consts:[[2,"position","relative"],["style","position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto",4,"ngIf"],[1,"header-dialog"],["mat-dialog-title",""],["color","primary",3,"ngModel","ngModelChange","change"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"imag-view",3,"routerLink","state","click"],["alt","",3,"src"],["appearance","outline"],["formControlName","title","matInput","","placeholder","Enter Blog Title","required",""],["formControlName","slug","matInput","","placeholder","Enter Blog slug","required",""],["formControlName","author","matInput","","placeholder","Enter Blog Author Name","required",""],["formControlName","priority","matInput","","placeholder","Enter priority","type","number","digitOnly",""],["formControlName","shortDescription","matInput","","placeholder","Enter Blog Short Description","required",""],["fxFlex","100",1,"px-1"],["id","description","formControlName","body",3,"config"],["mat-raised-button","","color","primary","type","submit"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[2,"position","absolute","left","0","top","0","right","0","bottom","0","margin","auto"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.YNc(1,T,1,0,"mat-spinner",1),r.TgZ(2,"div",2),r.TgZ(3,"h1",3),r._uU(4,"Blog"),r.qZA(),r.TgZ(5,"mat-checkbox",4),r.NdJ("ngModelChange",function(t){return e.autoSlug=t})("change",function(){return e.autoGenerateSlug()}),r._uU(6,"Auto Slug"),r.qZA(),r.qZA(),r.TgZ(7,"form",5,6),r.NdJ("ngSubmit",function(){return e.onSubmit()}),r.TgZ(9,"div",7),r.NdJ("click",function(){return e.onHoldInputData()}),r._UZ(10,"img",8),r.qZA(),r.TgZ(11,"mat-form-field",9),r.TgZ(12,"mat-label"),r._uU(13,"Blog Title"),r.qZA(),r._UZ(14,"input",10),r.TgZ(15,"mat-error"),r._uU(16,"This field is required"),r.qZA(),r.qZA(),r.TgZ(17,"mat-form-field",9),r.TgZ(18,"mat-label"),r._uU(19,"Blog Slug"),r.qZA(),r._UZ(20,"input",11),r.TgZ(21,"mat-error"),r._uU(22,"This field is required"),r.qZA(),r.qZA(),r.TgZ(23,"mat-form-field",9),r.TgZ(24,"mat-label"),r._uU(25,"Blog Author"),r.qZA(),r._UZ(26,"input",12),r.TgZ(27,"mat-error"),r._uU(28,"This field is required"),r.qZA(),r.qZA(),r.TgZ(29,"mat-form-field",9),r.TgZ(30,"mat-label"),r._uU(31,"Priority"),r.qZA(),r._UZ(32,"input",13),r.qZA(),r.TgZ(33,"mat-form-field",9),r.TgZ(34,"mat-label"),r._uU(35,"Enter Blog Short description"),r.qZA(),r._UZ(36,"textarea",14),r.TgZ(37,"mat-error"),r._uU(38,"This field is required"),r.qZA(),r.qZA(),r.TgZ(39,"div",15),r._UZ(40,"angular-editor",16),r.qZA(),r.TgZ(41,"button",17),r._uU(42),r.qZA(),r.qZA(),r.qZA(),r.TgZ(43,"ngx-spinner",18),r.TgZ(44,"p",19),r._uU(45," Loading... "),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("ngIf",e.isLoading),r.xp6(4),r.Q6J("ngModel",e.autoSlug),r.xp6(2),r.Q6J("formGroup",e.dataForm),r.xp6(2),r.Q6J("routerLink",r.VKq(9,k,e.id?"../../../":"../../"))("state",r.VKq(11,D,e.router.url)),r.xp6(1),r.Q6J("src",e.pickedImage,r.LSH),r.xp6(30),r.Q6J("config",e.editorConfigDesc),r.xp6(2),r.Oqu(e.blog?"Edit blog":"Add blog"),r.xp6(1),r.Q6J("fullScreen",!0))},directives:[i.O5,s.uh,P.oG,x.JJ,x.On,x._Y,x.JL,Z.xw,Z.Wh,x.sg,o.rH,M.KE,M.hX,x.Fj,S.Nt,x.u,x.Q7,M.TO,x.wV,y.L,Z.yH,q.s6,h.lW,d.Ro,A.$g],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:960px;margin:20px auto}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #c9c9c9;width:100px;height:100px;object-fit:contain;border-radius:85px;transition:all .3s linear}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.7}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),t})();const I=[{path:"",component:v},{path:"add-blog",component:B},{path:"edit-blog/:id",component:B}];let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(I)],o.Bz]}),t})();var N=n(56861),U=n(75425);let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,E,N.q,A.Cq,x.u5,x.UX,q.UM,U.m,y.E7]]}),t})()},80848:(t,e,n)=>{"use strict";n.d(e,{$:()=>r});var i=n(92935),o=n(35366),a=n(84369);let r=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.so),o.Y36(i.WI))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h1"),o._uU(4),o.qZA(),o.TgZ(5,"p"),o._uU(6),o.qZA(),o.qZA(),o.TgZ(7,"div",3),o.TgZ(8,"button",4),o.NdJ("click",function(){return e.onDismiss()}),o._uU(9," Cancel "),o.qZA(),o.TgZ(10,"button",5),o.NdJ("click",function(){return e.onConfirm()}),o._uU(11," Confirm "),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(4),o.Oqu(null==e.data?null:e.data.title),o.xp6(2),o.Oqu(null==e.data?null:e.data.message))},directives:[a.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),t})()}}]);