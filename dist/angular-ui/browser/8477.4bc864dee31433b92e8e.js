(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[8477],{83588:(t,n,e)=>{"use strict";e.d(n,{j:()=>i});var o=e(79996);function i(...t){const n=t.length;if(0===n)throw new Error("list of properties cannot be empty.");return e=>(0,o.U)(function(t,n){return e=>{let o=e;for(let i=0;i<n;i++){const n=null!=o?o[t[i]]:void 0;if(void 0===n)return;o=n}return o}}(t,n))(e)}},48477:(t,n,e)=>{"use strict";e.r(n),e.d(n,{BrandsModule:()=>G});var o=e(61116),i=e(33464),a=e(80848),r=e(70653),s=e(31153),c=e(45510),d=e(83588),l=e(47701),g=e(98720),u=e(44689),h=e(35366),p=e(92935),b=e(34535),m=e(99896),f=e(68370),_=e(31269),O=e(56507),P=e(31041),C=e(77307),x=e(7436),M=e(84369),Z=e(41293),A=e(29282);const T=["searchForm"],w=["searchInput"],v=function(t){return["edit-brand/",t]};function S(t,n){if(1&t){const t=h.EpF();h.TgZ(0,"tr"),h.TgZ(1,"td"),h._UZ(2,"img",28),h.qZA(),h.TgZ(3,"td"),h._uU(4),h.qZA(),h.TgZ(5,"td"),h._uU(6),h.qZA(),h.TgZ(7,"td"),h.TgZ(8,"button",29),h.NdJ("click",function(){const n=h.CHM(t).$implicit;return h.oxw().openConfirmDialog(n._id)}),h.TgZ(9,"mat-icon"),h._uU(10,"delete"),h.qZA(),h.qZA(),h.TgZ(11,"button",30),h.TgZ(12,"mat-icon"),h._uU(13,"edit"),h.qZA(),h.qZA(),h.qZA(),h.qZA()}if(2&t){const t=n.$implicit;h.xp6(1),h.uIk("data-label","Image"),h.xp6(1),h.Q6J("src",null!=t&&t.image?t.image:"/assets/images/placeholder/test.png",h.LSH)("alt",t.brandName),h.xp6(1),h.uIk("data-label","Brand Name"),h.xp6(1),h.Oqu(t.brandName),h.xp6(1),h.uIk("data-label","Slug"),h.xp6(1),h.Oqu(t.brandSlug),h.xp6(1),h.uIk("data-label","Actions"),h.xp6(1),h.Q6J("disabled",t.readOnly),h.xp6(3),h.Q6J("disabled",t.readOnly)("routerLink",h.VKq(11,v,t._id))}}const y=function(){return["add-new-brand"]},q=function(t,n,e){return{itemsPerPage:t,currentPage:n,totalItems:e}};let U=(()=>{class t{constructor(t,n,e,o,i,a,r,s){this.dialog=t,this.brandService=n,this.uiService=e,this.reloadService=o,this.spinner=i,this.utilsService=a,this.router=r,this.activatedRoute=s,this.brands=[],this.holdPrevData=[],this.currentPage=1,this.totalProducts=0,this.productsPerPage=24,this.totalProductsStore=0,this.searchProducts=[],this.isLoading=!1,this.isSelect=!1,this.searchQuery=null,this.dataTypeFormat="json"}ngOnInit(){this.reloadService.refreshBrands$.subscribe(()=>{this.getAllBrands()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(t=>{this.currentPage=t&&t.page?t.page:1,this.getAllBrands()})}ngAfterViewInit(){this.subForm=this.searchForm.valueChanges.pipe((0,d.j)("searchTerm"),(0,l.b)(200),(0,g.x)(),(0,u.w)(t=>{if(this.searchQuery=t,""===this.searchQuery||null===this.searchQuery||!this.searchQuery.trim())return this.searchProducts=[],this.brands=this.holdPrevData,this.totalProducts=this.totalProductsStore,this.searchProducts=[],this.searchQuery=null,r.E;this.isLoading=!0;const n={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};return this.brandService.getSearchBrands(t,n)})).subscribe(t=>{this.isLoading=!1,this.searchProducts=t.data,this.brands=this.searchProducts,this.totalProducts=t.count,this.currentPage=1,this.router.navigate([],{queryParams:{page:this.currentPage}})},t=>{this.isLoading=!1})}openConfirmDialog(t){this.dialog.open(a.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(n=>{n&&this.deleteBrand(t)})}openConfirmUploadDialog(t){this.dialog.open(a.$,{maxWidth:"400px",data:{title:"Import Data!",message:"Warning! All the existing data will be replace"}}).afterClosed().subscribe(n=>{n&&this.insertManyBrand(t)})}getAllBrands(){this.spinner.show();const t={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.brandService.getAllBrands(t).subscribe(t=>{this.brands=t.data,this.totalProducts=t.count,this.holdPrevData=t.data,this.totalProductsStore=t.count,this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}insertManyBrand(t){this.spinner.show(),this.brandService.insertManyBrand(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshBrands$(),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}deleteBrand(t){this.brandService.deleteBrand(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshBrands$()},t=>{console.log(t)})}onPageChanged(t){this.router.navigate([],{queryParams:{page:t}})}onFileChange(t){let n=null,e=null;const o=new FileReader,i=t.target.files[0];"excel"===this.dataTypeFormat?(o.onload=t=>{n=s.read(o.result,{type:"binary"}),e=n.SheetNames.reduce((t,e)=>(t[e]=s.utils.sheet_to_json(n.Sheets[e]),t),{});const i=e.brands.map(t=>{const n=t.brandName.toString().trim();return Object.assign(Object.assign({},t),{brandSlug:this.utilsService.transformToSlug(n)})});this.openConfirmUploadDialog(i)},o.readAsBinaryString(i)):(o.readAsText(i,"UTF-8"),o.onload=()=>{const t=JSON.parse(o.result.toString()).map(t=>({_id:t._id?t._id:null,readOnly:!!t.readOnly&&t.readOnly,brandName:t.brandName,brandSlug:t.brandSlug,image:t.image}));this.openConfirmUploadDialog(t)},o.onerror=t=>{console.log(t)})}exportDataToFile(){"json"===this.dataTypeFormat?this.exportAsAJson():this.exportToExcel()}exportToExcel(){this.spinner.show(),this.brandService.getAllBrands().subscribe(t=>{const n=t.data,e=this.utilsService.getDateString(new Date),o=s.utils.json_to_sheet(n),i=s.utils.book_new();s.utils.book_append_sheet(i,o,"brands"),s.writeFile(i,`Brands_Backup_${e}.xlsx`),this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}exportAsAJson(){this.brandService.getAllBrands().subscribe(t=>{const n=new Blob([JSON.stringify(t.data,null,2)],{type:"application/json"});this.dialog.open(c._,{maxWidth:"500px",data:{blobUrl:window.URL.createObjectURL(n),backupType:"brands"}})},t=>{console.log(t)})}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subForm&&this.subForm.unsubscribe()}}return t.\u0275fac=function(n){return new(n||t)(h.Y36(p.uw),h.Y36(b.c),h.Y36(m.F),h.Y36(f.f),h.Y36(_.t2),h.Y36(O.F),h.Y36(i.F0),h.Y36(i.gz))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-parent-categories"]],viewQuery:function(t,n){if(1&t&&(h.Gf(T,5),h.Gf(w,5)),2&t){let t;h.iGM(t=h.CRH())&&(n.searchForm=t.first),h.iGM(t=h.CRH())&&(n.searchInput=t.first)}},decls:56,vars:21,consts:[[1,"filter-area"],[1,"search","search-area"],[1,"search-form"],["searchForm","ngForm"],["type","text","placeholder","Search here...","name","searchTerm","autocomplete","off","ngModel","","required","",2,"background","aliceblue"],["searchInput",""],[1,"icon"],[1,"top-action"],[1,"select-area"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["value","json"],["value","excel"],[1,"main"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","accent",2,"margin-left","12px",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","12px",3,"click"],["fxHide","","type","file",3,"accept","change"],["pickInput",""],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"pagination-container"],[1,"product-pagination",3,"autoHide","maxSize","pageChange"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[1,"table-image",3,"src","alt"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"disabled","click"],["mat-mini-fab","","aria-label","Example icon-button with a heart icon",3,"disabled","routerLink"]],template:function(t,n){if(1&t){const t=h.EpF();h.TgZ(0,"div",0),h.TgZ(1,"div",1),h.TgZ(2,"form",2,3),h._UZ(4,"input",4,5),h.TgZ(6,"div",6),h.TgZ(7,"mat-icon"),h._uU(8,"search"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(9,"div",7),h.TgZ(10,"div",8),h.TgZ(11,"mat-radio-group",9),h.NdJ("ngModelChange",function(t){return n.dataTypeFormat=t}),h.TgZ(12,"mat-radio-button",10),h.TgZ(13,"span"),h._uU(14,"Json"),h.qZA(),h.qZA(),h.TgZ(15,"mat-radio-button",11),h.TgZ(16,"span"),h._uU(17,"Excel"),h.qZA(),h.qZA(),h.qZA(),h.qZA(),h.TgZ(18,"div",12),h.TgZ(19,"button",13),h.TgZ(20,"mat-icon"),h._uU(21,"add"),h.qZA(),h._uU(22," Add New Brand "),h.qZA(),h.TgZ(23,"button",14),h.NdJ("click",function(){return n.exportDataToFile()}),h.TgZ(24,"mat-icon"),h._uU(25,"file_download"),h.qZA(),h._uU(26),h.qZA(),h.TgZ(27,"button",15),h.NdJ("click",function(){return h.CHM(t),h.MAs(32).click()}),h.TgZ(28,"mat-icon"),h._uU(29,"file_upload"),h.qZA(),h._uU(30),h.qZA(),h.TgZ(31,"input",16,17),h.NdJ("change",function(t){return n.onFileChange(t)}),h.qZA(),h.qZA(),h.qZA(),h.TgZ(33,"div",18),h.TgZ(34,"h2"),h._uU(35,"Brand List"),h.qZA(),h.qZA(),h._UZ(36,"hr",19),h.TgZ(37,"div",20),h.TgZ(38,"table"),h.TgZ(39,"thead"),h.TgZ(40,"tr",21),h.TgZ(41,"th",22),h._uU(42),h.qZA(),h.TgZ(43,"th",22),h._uU(44),h.qZA(),h.TgZ(45,"th",22),h._uU(46),h.qZA(),h.TgZ(47,"th",22),h._uU(48),h.qZA(),h.qZA(),h.qZA(),h.YNc(49,S,14,13,"tr",23),h.ALo(50,"paginate"),h.qZA(),h.qZA(),h.TgZ(51,"div",24),h.TgZ(52,"pagination-controls",25),h.NdJ("pageChange",function(t){return n.onPageChanged(t)}),h.qZA(),h.qZA(),h.TgZ(53,"ngx-spinner",26),h.TgZ(54,"p",27),h._uU(55," Loading... "),h.qZA(),h.qZA()}2&t&&(h.xp6(11),h.Q6J("ngModel",n.dataTypeFormat),h.xp6(8),h.Q6J("routerLink",h.DdM(16,y)),h.xp6(7),h.hij(" ","json"===n.dataTypeFormat?"Export as Json":"Export as Excel"," "),h.xp6(4),h.hij(" ","json"===n.dataTypeFormat?"Import Json":"Import Excel"," "),h.xp6(1),h.Q6J("accept","json"===n.dataTypeFormat?"application/JSON":".xlsx, .xls, .csv"),h.xp6(11),h.Oqu("Image"),h.xp6(2),h.Oqu("Brand Name"),h.xp6(2),h.Oqu("Slug"),h.xp6(2),h.Oqu("Actions"),h.xp6(1),h.Q6J("ngForOf",h.xi3(50,13,n.brands,h.kEZ(17,q,n.productsPerPage,n.currentPage,n.totalProducts))),h.xp6(3),h.Q6J("autoHide",!0)("maxSize",15),h.xp6(1),h.Q6J("fullScreen",!0))},directives:[P._Y,P.JL,P.F,P.Fj,P.JJ,P.On,P.Q7,C.Hw,x.VQ,x.U0,M.lW,i.rH,Z.b8,o.sg,A.LS,_.Ro],pipes:[A._s],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.search[_ngcontent-%COMP%]{width:100%;max-width:400px;position:relative;z-index:1299!important}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;border-radius:8px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:45px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#ffeaff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.color[_ngcontent-%COMP%]{background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.sm[_ngcontent-%COMP%]{width:100%;height:38px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:55px;line-height:55px;font-size:24px;width:70px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;color:#fff;background:#ef3688;border:none;cursor:pointer}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{height:38px;line-height:38px;font-size:30px;width:40px}.filter-area[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:12px 12px 24px 0}.top-action[_ngcontent-%COMP%]{margin-top:16px;padding-right:16px;display:flex;justify-content:space-between}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]{padding-left:16px}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;font-family:Open Sans,sans-serif}.table-image[_ngcontent-%COMP%]{width:140px;height:100px;object-fit:scale-down}.pagination-container[_ngcontent-%COMP%]{text-align:center}"]}),t})();var k=e(33817),I=e(61613),N=e(40994),B=e(35965),F=e(13070),D=e(9550),R=e(87672);const J=["templateForm"];function z(t,n){1&t&&h._UZ(0,"mat-spinner",15)}const j=function(t){return[t,"image-gallery"]},E=function(t){return{url:t}};let L=(()=>{class t{constructor(t,n,e,o,i,a,r,s){this.fb=t,this.activatedRoute=n,this.uiService=e,this.brandService=o,this.utilsService=i,this.storageService=a,this.router=r,this.spinner=s,this.autoSlug=!0,this.isLoading=!1,this.placeholder="/assets/images/avatar/image-upload.jpg",this.needSessionDestroy=!0}ngOnInit(){this.dataForm=this.fb.group({brandName:[null,P.kI.required],brandSlug:[null,P.kI.required],image:[null]}),this.pickedImage=this.placeholder,this.id||(this.storageService.getStoredInput("BRAND_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("BRAND_INPUT")),history.state.images&&(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage}))),this.autoGenerateSlug(),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getBrandByBrandID()})}setFormData(){this.dataForm.patchValue(this.brand),this.storageService.getStoredInput("BRAND_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("BRAND_INPUT")),history.state.images?(this.needSessionDestroy=!0,this.pickedImage=history.state.images[0].url,this.dataForm.patchValue({image:this.pickedImage})):this.pickedImage=this.brand.image?this.brand.image:this.placeholder}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.brand){const t=Object.assign(Object.assign({},this.dataForm.value),{_id:this.brand._id});this.editBrandData(t)}else this.addBrand(this.dataForm.value)}autoGenerateSlug(){if(!0===this.autoSlug)this.sub=this.dataForm.get("brandName").valueChanges.pipe().subscribe(t=>{const n=null==t?void 0:t.trim().replace(/[^A-Z0-9]+/gi,"-").toLowerCase();this.dataForm.patchValue({brandSlug:n})});else{if(null==this.sub)return;this.sub.unsubscribe()}}onHoldInputData(){var t;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(t=this.dataForm)||void 0===t?void 0:t.value,"BRAND_INPUT")}addBrand(t){this.spinner.show(),this.brandService.addBrand(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.storageService.removeSessionData("BRAND_INPUT"),this.pickedImage=this.placeholder,this.spinner.hide()},t=>{this.spinner.hide(),t.error.statusCode===k.q.EXISTS_OR_NOT_ACCEPT&&this.dataForm.controls.brandName.setErrors({incorrect:!0})})}getBrandByBrandID(){this.spinner.show(),this.brandService.getBrandByBrandID(this.id).subscribe(t=>{this.brand=t.data,this.brand&&this.setFormData(),this.spinner.hide()},t=>{console.log(t)})}editBrandData(t){this.spinner.show(),this.brandService.editBrandData(t).subscribe(t=>{this.uiService.success(t.message),this.storageService.removeSessionData("BRAND_INPUT"),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.needSessionDestroy&&this.storageService.removeSessionData("BRAND_INPUT")}}return t.\u0275fac=function(n){return new(n||t)(h.Y36(P.qu),h.Y36(i.gz),h.Y36(m.F),h.Y36(b.c),h.Y36(O.F),h.Y36(I.V),h.Y36(i.F0),h.Y36(_.t2))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-add-new-parent-category"]],viewQuery:function(t,n){if(1&t&&h.Gf(J,5),2&t){let t;h.iGM(t=h.CRH())&&(n.templateForm=t.first)}},decls:28,vars:12,consts:[[2,"position","relative"],["style","position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto",4,"ngIf"],[1,"header-dialog"],["mat-dialog-title",""],["color","primary",3,"ngModel","ngModelChange","change"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"imag-view",3,"routerLink","state","click"],["alt","",3,"src"],["appearance","outline"],["formControlName","brandName","matInput","","placeholder","Enter brand name","required",""],["formControlName","brandSlug","matInput","","placeholder","Enter brand slug","required",""],["mat-raised-button","","color","primary","type","submit"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[2,"position","absolute","left","0","top","0","right","0","bottom","0","margin","auto"]],template:function(t,n){1&t&&(h.TgZ(0,"div",0),h.YNc(1,z,1,0,"mat-spinner",1),h.TgZ(2,"div",2),h.TgZ(3,"h1",3),h._uU(4,"Brand"),h.qZA(),h.TgZ(5,"mat-checkbox",4),h.NdJ("ngModelChange",function(t){return n.autoSlug=t})("change",function(){return n.autoGenerateSlug()}),h._uU(6,"Auto Slug"),h.qZA(),h.qZA(),h.TgZ(7,"form",5,6),h.NdJ("ngSubmit",function(){return n.onSubmit()}),h.TgZ(9,"div",7),h.NdJ("click",function(){return n.onHoldInputData()}),h._UZ(10,"img",8),h.qZA(),h.TgZ(11,"mat-form-field",9),h.TgZ(12,"mat-label"),h._uU(13,"Brand Name"),h.qZA(),h._UZ(14,"input",10),h.TgZ(15,"mat-error"),h._uU(16,"This field is required"),h.qZA(),h.qZA(),h.TgZ(17,"mat-form-field",9),h.TgZ(18,"mat-label"),h._uU(19,"Brand Slug"),h.qZA(),h._UZ(20,"input",11),h.TgZ(21,"mat-error"),h._uU(22,"This field is required"),h.qZA(),h.qZA(),h.TgZ(23,"button",12),h._uU(24),h.qZA(),h.qZA(),h.qZA(),h.TgZ(25,"ngx-spinner",13),h.TgZ(26,"p",14),h._uU(27," Loading... "),h.qZA(),h.qZA()),2&t&&(h.xp6(1),h.Q6J("ngIf",n.isLoading),h.xp6(4),h.Q6J("ngModel",n.autoSlug),h.xp6(2),h.Q6J("formGroup",n.dataForm),h.xp6(2),h.Q6J("routerLink",h.VKq(8,j,n.id?"../../../":"../../"))("state",h.VKq(10,E,n.router.url)),h.xp6(1),h.Q6J("src",n.pickedImage,h.LSH),h.xp6(14),h.Oqu(n.brand?"Edit Brand":"Add Brand"),h.xp6(1),h.Q6J("fullScreen",!0))},directives:[o.O5,p.uh,N.oG,P.JJ,P.On,P._Y,P.JL,B.xw,B.Wh,P.sg,i.rH,F.KE,F.hX,P.Fj,D.Nt,P.u,P.Q7,F.TO,M.lW,_.Ro,R.$g],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;border:2px solid #c9c9c9;width:100px;height:100px;object-fit:contain;border-radius:85px;transition:all .3s linear}form[_ngcontent-%COMP%]   .imag-view[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover{opacity:.7}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),t})();const Q=[{path:"",component:U},{path:"add-new-brand",component:L},{path:"edit-brand/:id",component:L}];let Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[i.Bz.forChild(Q)],i.Bz]}),t})();var H=e(56861),V=e(77154);let G=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[o.ez,Y,H.q,P.UX,B.ae,P.u5,R.Cq,_.ef,V.o9,A.JX]]}),t})()},33817:(t,n,e)=>{"use strict";e.d(n,{q:()=>o});var o=function(t){return t[t.UN_AUTHORIZED=401]="UN_AUTHORIZED",t[t.EXISTS_OR_NOT_ACCEPT=406]="EXISTS_OR_NOT_ACCEPT",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.INPUT_VALIDATION_ERROR=422]="INPUT_VALIDATION_ERROR",t[t.DATABASE_ERROR=500]="DATABASE_ERROR",t}({})},80848:(t,n,e)=>{"use strict";e.d(n,{$:()=>r});var o=e(92935),i=e(35366),a=e(84369);let r=(()=>{class t{constructor(t,n){this.dialogRef=t,this.data=n}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(o.so),i.Y36(o.WI))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"h1"),i._uU(4),i.qZA(),i.TgZ(5,"p"),i._uU(6),i.qZA(),i.qZA(),i.TgZ(7,"div",3),i.TgZ(8,"button",4),i.NdJ("click",function(){return n.onDismiss()}),i._uU(9," Cancel "),i.qZA(),i.TgZ(10,"button",5),i.NdJ("click",function(){return n.onConfirm()}),i._uU(11," Confirm "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Oqu(null==n.data?null:n.data.title),i.xp6(2),i.Oqu(null==n.data?null:n.data.message))},directives:[a.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),t})()},45510:(t,n,e)=>{"use strict";e.d(n,{_:()=>d});var o=e(92935),i=e(35366),a=e(33464),r=e(99624),s=e(77307),c=e(84369);let d=(()=>{class t{constructor(t,n,e,o){this.dialogRef=t,this.router=n,this.sanitizer=o,this.sanitizedBlobUrl=this.sanitizer.bypassSecurityTrustUrl(e.blobUrl),this.blobUrl=e.blobUrl,this.backupType=e.backupType;const i=new Date;this.filename=`${this.backupType}_${i.toISOString()}.json`}ngOnInit(){}close(){this.dialogRef.close()}download(){this.dialogRef.close()}viewInBrowser(){window.open(this.blobUrl),this.dialogRef.close()}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(o.so),i.Y36(a.F0),i.Y36(o.WI),i.Y36(r.H7))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-download-json-dialog"]],decls:21,vars:2,consts:[[1,"dialog-container"],[1,"header"],[1,"dialog-body"],[1,"circle"],[1,"dialog-action"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary","type","button",3,"href","download","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"h2"),i._uU(3,"Download Data as Json File"),i.qZA(),i.qZA(),i.TgZ(4,"div",2),i.TgZ(5,"div",3),i.TgZ(6,"mat-icon"),i._uU(7,"file_download"),i.qZA(),i.qZA(),i.qZA(),i.TgZ(8,"div",4),i.TgZ(9,"button",5),i.NdJ("click",function(){return n.close()}),i.TgZ(10,"mat-icon"),i._uU(11,"close"),i.qZA(),i._uU(12," Cancel "),i.qZA(),i.TgZ(13,"a",6),i.NdJ("click",function(){return n.download()}),i.TgZ(14,"mat-icon"),i._uU(15,"download"),i.qZA(),i._uU(16," Download "),i.qZA(),i.TgZ(17,"button",7),i.NdJ("click",function(){return n.viewInBrowser()}),i.TgZ(18,"mat-icon"),i._uU(19,"visibility"),i.qZA(),i._uU(20," View "),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(13),i.Q6J("href",n.sanitizedBlobUrl,i.LSH)("download",n.filename))},directives:[s.Hw,c.lW,c.zs],styles:[".dialog-container[_ngcontent-%COMP%]{width:450px}.dialog-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-bottom:16px}.dialog-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:20px;color:#333;text-align:center;font-weight:600}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:100%;background:#1ee286;margin:0 auto;display:grid;place-items:center}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:56px;height:56px;font-size:56px;color:#00733d}.dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;grid-gap:12px;gap:12px}.dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:120px}"]}),t})()}}]);