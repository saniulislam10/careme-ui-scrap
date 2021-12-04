(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[5575],{83588:(t,e,n)=>{"use strict";n.d(e,{j:()=>a});var o=n(79996);function a(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return n=>(0,o.U)(function(t,e){return n=>{let o=n;for(let a=0;a<e;a++){const e=null!=o?o[t[a]]:void 0;if(void 0===e)return;o=e}return o}}(t,e))(n)}},25575:(t,e,n)=>{"use strict";n.r(e),n.d(e,{SubCategoriesModule:()=>tt});var o=n(61116),a=n(33464),i=n(80848),r=n(70653),s=n(31153),c=n(45510),g=n(83588),l=n(47701),u=n(98720),d=n(44689),p=n(35366),h=n(92935),b=n(36140),C=n(99896),m=n(68370),f=n(31269),y=n(56507),_=n(31041),O=n(77307),P=n(7436),x=n(84369),S=n(41293),M=n(29282);const Z=["searchForm"],A=["searchInput"],T=function(t){return["edit-sub-category",t]};function v(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"tr"),p.TgZ(1,"td"),p._uU(2),p.qZA(),p.TgZ(3,"td"),p._uU(4),p.qZA(),p.TgZ(5,"td"),p._uU(6),p.qZA(),p.TgZ(7,"td"),p.TgZ(8,"button",28),p.NdJ("click",function(){const e=p.CHM(t).$implicit;return p.oxw().openConfirmDialog(e._id)}),p.TgZ(9,"mat-icon"),p._uU(10,"delete"),p.qZA(),p.qZA(),p.TgZ(11,"button",29),p.TgZ(12,"mat-icon"),p._uU(13,"edit"),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=e.$implicit;p.xp6(1),p.uIk("data-label","Category Name"),p.xp6(1),p.Oqu(t.subCategoryName),p.xp6(1),p.uIk("data-label","Slug"),p.xp6(1),p.Oqu(t.subCategorySlug),p.xp6(1),p.uIk("data-label","Category name"),p.xp6(1),p.Oqu(null==t.category?null:t.category.categoryName),p.xp6(1),p.uIk("data-label","Actions"),p.xp6(1),p.Q6J("disabled",t.readOnly),p.xp6(3),p.Q6J("disabled",t.readOnly)("routerLink",p.VKq(10,T,t._id))}}const w=function(){return["add-new-sub-category"]},q=function(t,e,n){return{itemsPerPage:t,currentPage:e,totalItems:n}};let U=(()=>{class t{constructor(t,e,n,o,a,i,r,s){this.dialog=t,this.subCategoryService=e,this.uiService=n,this.reloadService=o,this.spinner=a,this.utilsService=i,this.router=r,this.activatedRoute=s,this.subCategories=[],this.holdPrevData=[],this.currentPage=1,this.totalProducts=0,this.productsPerPage=24,this.totalProductsStore=0,this.searchProducts=[],this.isLoading=!1,this.isSelect=!1,this.searchQuery=null,this.dataTypeFormat="json"}ngOnInit(){this.reloadService.refreshSubCategories$.subscribe(()=>{this.getAllSubCategory()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(t=>{this.currentPage=t&&t.page?t.page:1,this.getAllSubCategory()})}ngAfterViewInit(){this.subForm=this.searchForm.valueChanges.pipe((0,g.j)("searchTerm"),(0,l.b)(200),(0,u.x)(),(0,d.w)(t=>{if(this.searchQuery=t,""===this.searchQuery||null===this.searchQuery||!this.searchQuery.trim())return this.searchProducts=[],this.subCategories=this.holdPrevData,this.totalProducts=this.totalProductsStore,this.searchProducts=[],this.searchQuery=null,r.E;this.isLoading=!0;const e={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};return this.subCategoryService.getSearchSubCategory(t,e)})).subscribe(t=>{this.isLoading=!1,this.searchProducts=t.data,this.subCategories=this.searchProducts,this.totalProducts=t.count,this.currentPage=1,this.router.navigate([],{queryParams:{page:this.currentPage}})},t=>{this.isLoading=!1})}openConfirmDialog(t){this.dialog.open(i.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{e&&(console.log("Data should be deleted"),this.deleteSubCategory(t))})}openConfirmUploadDialog(t){this.dialog.open(i.$,{maxWidth:"400px",data:{title:"Import Data!",message:"Warning! All the existing data will be replace"}}).afterClosed().subscribe(e=>{e&&this.insertManySubCategory(t)})}getAllSubCategory(){this.spinner.show();const t={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.subCategoryService.getAllSubCategory(t).subscribe(t=>{this.subCategories=t.data,this.totalProducts=t.count,this.holdPrevData=t.data,this.totalProductsStore=t.count,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}insertManySubCategory(t){this.spinner.show(),this.subCategoryService.insertManySubCategory(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshSubCategories$(),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}deleteSubCategory(t){this.subCategoryService.deleteSubCategory(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshSubCategories$()},t=>{console.log(t)})}onPageChanged(t){this.router.navigate([],{queryParams:{page:t}})}onFileChange(t){let e=null,n=null;const o=new FileReader,a=t.target.files[0];"excel"===this.dataTypeFormat?(o.onload=t=>{e=s.read(o.result,{type:"binary"}),n=e.SheetNames.reduce((t,n)=>(t[n]=s.utils.sheet_to_json(e.Sheets[n]),t),{});const a=n.subCategories;console.log(a);const i=a.map(t=>{const e=t.subCategoryName.toString().trim();return Object.assign(Object.assign(Object.assign({},t),{subCategorySlug:this.utilsService.transformToSlug(e)}),{attributes:t.attributes?t.attributes.toString().trim().split("#"):null})});this.openConfirmUploadDialog(i)},o.readAsBinaryString(a)):(o.readAsText(a,"UTF-8"),o.onload=()=>{const t=JSON.parse(o.result.toString()).map(t=>({_id:t._id?t._id:null,readOnly:!!t.readOnly&&t.readOnly,subCategoryName:t.subCategoryName,subCategorySlug:t.subCategorySlug,brand:t.brand,category:t.category,attributes:t.attributes}));this.openConfirmUploadDialog(t)},o.onerror=t=>{console.log(t)})}exportDataToFile(){"json"===this.dataTypeFormat?this.exportAsAJson():this.exportToExcel()}exportToExcel(){this.spinner.show(),this.subCategoryService.getAllSubCategory().subscribe(t=>{const e=t.data.map(t=>{var e;return Object.assign(Object.assign({},t),{category:t.category._id,attributes:t.attributes&&(null===(e=t.attributes)||void 0===e?void 0:e.length)>0?this.utilsService.arrayToString(t.attributes.map(t=>t._id),"#"):null})}),n=this.utilsService.getDateString(new Date),o=s.utils.json_to_sheet(e),a=s.utils.book_new();s.utils.book_append_sheet(a,o,"subCategories"),s.writeFile(a,`Sub_Categories_Backup_${n}.xlsx`),this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}exportAsAJson(){this.subCategoryService.getAllSubCategory().subscribe(t=>{const e=new Blob([JSON.stringify(t.data,null,2)],{type:"application/json"});this.dialog.open(c._,{maxWidth:"500px",data:{blobUrl:window.URL.createObjectURL(e),backupType:"subcategories"}})},t=>{console.log(t)})}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subForm&&this.subForm.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(h.uw),p.Y36(b.Q),p.Y36(C.F),p.Y36(m.f),p.Y36(f.t2),p.Y36(y.F),p.Y36(a.F0),p.Y36(a.gz))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-sub-categories"]],viewQuery:function(t,e){if(1&t&&(p.Gf(Z,5),p.Gf(A,5)),2&t){let t;p.iGM(t=p.CRH())&&(e.searchForm=t.first),p.iGM(t=p.CRH())&&(e.searchInput=t.first)}},decls:56,vars:21,consts:[[1,"filter-area"],[1,"search","search-area"],[1,"search-form"],["searchForm","ngForm"],["type","text","placeholder","Search here...","name","searchTerm","autocomplete","off","ngModel","","required","",2,"background","aliceblue"],["searchInput",""],[1,"icon"],[1,"top-action"],[1,"select-area"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["value","json"],["value","excel"],[1,"main"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","accent",2,"margin-left","12px",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","12px",3,"click"],["fxHide","","type","file",3,"accept","change"],["pickInput",""],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"pagination-container"],[1,"product-pagination",3,"autoHide","maxSize","pageChange"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"disabled","click"],["mat-mini-fab","","aria-label","Example icon-button with a heart icon",3,"disabled","routerLink"]],template:function(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"form",2,3),p._UZ(4,"input",4,5),p.TgZ(6,"div",6),p.TgZ(7,"mat-icon"),p._uU(8,"search"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(9,"div",7),p.TgZ(10,"div",8),p.TgZ(11,"mat-radio-group",9),p.NdJ("ngModelChange",function(t){return e.dataTypeFormat=t}),p.TgZ(12,"mat-radio-button",10),p.TgZ(13,"span"),p._uU(14,"Json"),p.qZA(),p.qZA(),p.TgZ(15,"mat-radio-button",11),p.TgZ(16,"span"),p._uU(17,"Excel"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(18,"div",12),p.TgZ(19,"button",13),p.TgZ(20,"mat-icon"),p._uU(21,"add"),p.qZA(),p._uU(22," Add New Sub Category "),p.qZA(),p.TgZ(23,"button",14),p.NdJ("click",function(){return e.exportDataToFile()}),p.TgZ(24,"mat-icon"),p._uU(25,"file_download"),p.qZA(),p._uU(26),p.qZA(),p.TgZ(27,"button",15),p.NdJ("click",function(){return p.CHM(t),p.MAs(32).click()}),p.TgZ(28,"mat-icon"),p._uU(29,"file_upload"),p.qZA(),p._uU(30),p.qZA(),p.TgZ(31,"input",16,17),p.NdJ("change",function(t){return e.onFileChange(t)}),p.qZA(),p.qZA(),p.qZA(),p.TgZ(33,"div",18),p.TgZ(34,"h2"),p._uU(35,"Sub Category List"),p.qZA(),p.qZA(),p._UZ(36,"hr",19),p.TgZ(37,"div",20),p.TgZ(38,"table"),p.TgZ(39,"thead"),p.TgZ(40,"tr",21),p.TgZ(41,"th",22),p._uU(42),p.qZA(),p.TgZ(43,"th",22),p._uU(44),p.qZA(),p.TgZ(45,"th",22),p._uU(46),p.qZA(),p.TgZ(47,"th",22),p._uU(48),p.qZA(),p.qZA(),p.qZA(),p.YNc(49,v,14,12,"tr",23),p.ALo(50,"paginate"),p.qZA(),p.qZA(),p.TgZ(51,"div",24),p.TgZ(52,"pagination-controls",25),p.NdJ("pageChange",function(t){return e.onPageChanged(t)}),p.qZA(),p.qZA(),p.TgZ(53,"ngx-spinner",26),p.TgZ(54,"p",27),p._uU(55," Loading... "),p.qZA(),p.qZA()}2&t&&(p.xp6(11),p.Q6J("ngModel",e.dataTypeFormat),p.xp6(8),p.Q6J("routerLink",p.DdM(16,w)),p.xp6(7),p.hij(" ","json"===e.dataTypeFormat?"Export as Json":"Export as Excel"," "),p.xp6(4),p.hij(" ","json"===e.dataTypeFormat?"Import Json":"Import Excel"," "),p.xp6(1),p.Q6J("accept","json"===e.dataTypeFormat?"application/JSON":".xlsx, .xls, .csv"),p.xp6(11),p.Oqu("Sub Category Name"),p.xp6(2),p.Oqu("Slug"),p.xp6(2),p.Oqu("Category name"),p.xp6(2),p.Oqu("Actions"),p.xp6(1),p.Q6J("ngForOf",p.xi3(50,13,e.subCategories,p.kEZ(17,q,e.productsPerPage,e.currentPage,e.totalProducts))),p.xp6(3),p.Q6J("autoHide",!0)("maxSize",15),p.xp6(1),p.Q6J("fullScreen",!0))},directives:[_._Y,_.JL,_.F,_.Fj,_.JJ,_.On,_.Q7,O.Hw,P.VQ,P.U0,x.lW,a.rH,S.b8,o.sg,M.LS,f.Ro],pipes:[M._s],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.search[_ngcontent-%COMP%]{width:100%;max-width:400px;position:relative;z-index:1299!important}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;border-radius:8px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:45px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#ffeaff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.color[_ngcontent-%COMP%]{background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.sm[_ngcontent-%COMP%]{width:100%;height:38px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:55px;line-height:55px;font-size:24px;width:70px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;color:#fff;background:#ef3688;border:none;cursor:pointer}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{height:38px;line-height:38px;font-size:30px;width:40px}.filter-area[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:12px 12px 24px 0}.top-action[_ngcontent-%COMP%]{margin-top:16px;padding-right:16px;display:flex;justify-content:space-between}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]{padding-left:16px}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .pagination-container[_ngcontent-%COMP%]{text-align:center}"]}),t})();var N=n(33817),F=n(61613),k=n(31203),I=n(34535),J=n(81830),R=n(40994),D=n(35965),z=n(13070),E=n(9550),Y=n(13841),j=n(87672),B=n(87064);const L=["templateForm"];function Q(t,e){1&t&&p._UZ(0,"mat-spinner",14)}function G(t,e){if(1&t&&(p.TgZ(0,"mat-option",15),p._uU(1),p.qZA()),2&t){const t=e.$implicit;p.Q6J("value",t._id),p.xp6(1),p.hij(" ",t.categoryName," ")}}function H(t,e){if(1&t&&(p.TgZ(0,"mat-option",15),p._uU(1),p.qZA()),2&t){const t=e.$implicit;p.Q6J("value",t._id),p.xp6(1),p.hij(" ",t.attributeName," ")}}let $=(()=>{class t{constructor(t,e,n,o,a,i,r,s,c,g){this.fb=t,this.activatedRoute=e,this.uiService=n,this.utilsService=o,this.storageService=a,this.attributeService=i,this.brandService=r,this.categoryService=s,this.subCategoryService=c,this.spinner=g,this.autoSlug=!0,this.isLoading=!1,this.attributes=[],this.brands=[],this.categories=[],this.needSessionDestroy=!0}ngOnInit(){this.dataForm=this.fb.group({subCategoryName:[null,_.kI.required],subCategorySlug:[null,_.kI.required],tag:[null],category:[null,_.kI.required],attributes:[null,_.kI.required]}),this.id||this.storageService.getStoredInput("SUB_CATEGORY_INPUT")&&this.dataForm.patchValue(this.storageService.getStoredInput("SUB_CATEGORY_INPUT")),this.autoGenerateSlug(),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getSubCategoryBySubCategoryId()}),this.getAllAttributes(),this.getAllCategory()}onSubmit(){if(this.dataForm.invalid)this.uiService.warn("Please complete all the required fields");else if(this.subCategory){const t=Object.assign(Object.assign({},this.dataForm.value),{_id:this.subCategory._id});this.editSubCategoryData(t)}else this.addSubCategory(this.dataForm.value)}autoGenerateSlug(){if(!0===this.autoSlug)this.sub=this.dataForm.get("subCategoryName").valueChanges.pipe().subscribe(t=>{const e=null==t?void 0:t.trim().replace(/[^A-Z0-9]+/gi,"-").toLowerCase();this.dataForm.patchValue({subCategorySlug:e})});else{if(null==this.sub)return;this.sub.unsubscribe()}}onHoldInputData(){var t;this.needSessionDestroy=!1,this.storageService.storeInputData(null===(t=this.dataForm)||void 0===t?void 0:t.value,"SUB_CATEGORY_INPUT")}getAllAttributes(){this.attributeService.getAllAttributes().subscribe(t=>{this.attributes=t.data},t=>{console.log(t)})}getAllCategory(){this.categoryService.getAllCategory().subscribe(t=>{this.categories=t.data},t=>{console.log(t)})}addSubCategory(t){this.spinner.show(),this.subCategoryService.addSubCategory(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.storageService.removeSessionData("SUB_CATEGORY_INPUT"),this.spinner.hide()},t=>{this.spinner.hide(),t.error.statusCode===N.q.EXISTS_OR_NOT_ACCEPT&&this.dataForm.controls.subCategoryName.setErrors({incorrect:!0})})}getAttributeByAttributeId(){this.attributeService.getAttributeByAttributeId(this.id).subscribe(t=>{t.data&&this.dataForm.patchValue(t.data)},t=>{console.log(t)})}getSubCategoryBySubCategoryId(){this.subCategoryService.getSubCategoryBySubCategoryId(this.id).subscribe(t=>{t.data&&(this.dataForm.patchValue(t.data),this.subCategory=t.data)},t=>{console.log(t)})}editSubCategoryData(t){this.subCategoryService.editSubCategoryData(t).subscribe(t=>{this.uiService.success(t.message),this.storageService.removeSessionData("SUB_CATEGORY_INPUT")},t=>{console.log(t)})}ngOnDestroy(){this.sub&&this.sub.unsubscribe(),this.needSessionDestroy&&this.storageService.removeSessionData("SUB_CATEGORY_INPUT")}}return t.\u0275fac=function(e){return new(e||t)(p.Y36(_.qu),p.Y36(a.gz),p.Y36(C.F),p.Y36(y.F),p.Y36(F.V),p.Y36(k.c),p.Y36(I.c),p.Y36(J.H),p.Y36(b.Q),p.Y36(f.t2))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-add-new-sub-category"]],viewQuery:function(t,e){if(1&t&&p.Gf(L,5),2&t){let t;p.iGM(t=p.CRH())&&(e.templateForm=t.first)}},decls:33,vars:6,consts:[[2,"position","relative"],["style","position: absolute; left: 0; top: 0; right: 0; bottom: 0; margin: auto",4,"ngIf"],[1,"header-dialog"],["mat-dialog-title",""],["color","primary",3,"ngModel","ngModelChange","change"],["fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],["appearance","outline"],["formControlName","subCategoryName","matInput","","placeholder","Enter sub-category name","required",""],["formControlName","subCategorySlug","matInput","","placeholder","Enter sub-category slug","required",""],["formControlName","category"],[3,"value",4,"ngFor","ngForOf"],["multiple","","formControlName","attributes"],["mat-raised-button","","color","primary","type","submit"],[2,"position","absolute","left","0","top","0","right","0","bottom","0","margin","auto"],[3,"value"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.YNc(1,Q,1,0,"mat-spinner",1),p.TgZ(2,"div",2),p.TgZ(3,"h1",3),p._uU(4,"Sub-Category"),p.qZA(),p.TgZ(5,"mat-checkbox",4),p.NdJ("ngModelChange",function(t){return e.autoSlug=t})("change",function(){return e.autoGenerateSlug()}),p._uU(6,"Auto Slug"),p.qZA(),p.qZA(),p.TgZ(7,"form",5,6),p.NdJ("ngSubmit",function(){return e.onSubmit()}),p.TgZ(9,"mat-form-field",7),p.TgZ(10,"mat-label"),p._uU(11,"Sub Category Name"),p.qZA(),p._UZ(12,"input",8),p.TgZ(13,"mat-error"),p._uU(14,"This field is required"),p.qZA(),p.qZA(),p.TgZ(15,"mat-form-field",7),p.TgZ(16,"mat-label"),p._uU(17,"Sub Category Slug"),p.qZA(),p._UZ(18,"input",9),p.TgZ(19,"mat-error"),p._uU(20,"This field is required"),p.qZA(),p.qZA(),p.TgZ(21,"mat-form-field",7),p.TgZ(22,"mat-label"),p._uU(23,"Category Name"),p.qZA(),p.TgZ(24,"mat-select",10),p.YNc(25,G,2,2,"mat-option",11),p.qZA(),p.qZA(),p.TgZ(26,"mat-form-field",7),p.TgZ(27,"mat-label"),p._uU(28,"Attribute"),p.qZA(),p.TgZ(29,"mat-select",12),p.YNc(30,H,2,2,"mat-option",11),p.qZA(),p.qZA(),p.TgZ(31,"button",13),p._uU(32),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngIf",e.isLoading),p.xp6(4),p.Q6J("ngModel",e.autoSlug),p.xp6(2),p.Q6J("formGroup",e.dataForm),p.xp6(18),p.Q6J("ngForOf",e.categories),p.xp6(5),p.Q6J("ngForOf",e.attributes),p.xp6(2),p.Oqu(e.subCategory?"Edit Category":"Add Category"))},directives:[o.O5,h.uh,R.oG,_.JJ,_.On,_._Y,_.JL,D.xw,D.Wh,_.sg,z.KE,z.hX,_.Fj,E.Nt,_.u,_.Q7,z.TO,Y.gD,o.sg,x.lW,j.$g,B.ey],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),t})();const V=[{path:"",component:U},{path:"add-new-sub-category",component:$},{path:"edit-sub-category/:id",component:$}];let W=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[a.Bz.forChild(V)],a.Bz]}),t})();var X=n(56861),K=n(77154);let tt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[o.ez,W,X.q,_.u5,_.UX,j.Cq,K.o9,M.JX,f.ef]]}),t})()},33817:(t,e,n)=>{"use strict";n.d(e,{q:()=>o});var o=function(t){return t[t.UN_AUTHORIZED=401]="UN_AUTHORIZED",t[t.EXISTS_OR_NOT_ACCEPT=406]="EXISTS_OR_NOT_ACCEPT",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.INPUT_VALIDATION_ERROR=422]="INPUT_VALIDATION_ERROR",t[t.DATABASE_ERROR=500]="DATABASE_ERROR",t}({})},81830:(t,e,n)=>{"use strict";n.d(e,{H:()=>c});var o=n(529),a=n(42693),i=n(48318),r=n(35366);const s=o.N.apiBaseLink+"/api/product-category/";let c=(()=>{class t{constructor(t){this.httpClient=t,this.categories=[]}addCategory(t){return this.httpClient.post(s+"add-category",t)}insertManyCategory(t){return this.httpClient.post(s+"add-multiple-category",t)}getAllCategory(t){if(t){let e=new a.LE;return e=e.append("pageSize",t.pageSize),e=e.append("page",t.currentPage),this.httpClient.get(s+"get-all-categories",{params:e})}return this.httpClient.get(s+"get-all-categories")}getCategoryByCategoryId(t){return this.httpClient.get(s+"get-category-by-category-id/"+t)}editCategoryData(t){return this.httpClient.put(s+"edit-category-by-category",t)}getCategoryBySearch(t){return this.httpClient.get(s+"get-category-by-search/"+t)}deleteCategory(t){return this.httpClient.delete(s+"delete-category-by-id/"+t)}getCategoryByCategorySlug(t){return this.httpClient.get(s+"get-category-by-category-slug/"+t)}getSearchCategories(t,e){const n=e;let o=new a.LE;return o=o.append("q",t),o=o.append("pageSize",e.pageSize),o=o.append("currentPage",e.currentPage),this.httpClient.post(s+"get-categories-by-search",n,{params:o})}getAllCategoryNoRepeat(t){return new i.y(e=>{if(this.categories.length>0)e.next({data:this.categories}),e.complete();else{let n=new a.LE;t&&(n=n.append("select",t)),this.httpClient.get(s+"get-all-categories",{params:n}).subscribe(t=>{this.categories=t.data,e.next({data:this.categories}),e.complete()},t=>{console.log(t)})}})}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(a.eN))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},36140:(t,e,n)=>{"use strict";n.d(e,{Q:()=>s});var o=n(529),a=n(42693),i=n(35366);const r=o.N.apiBaseLink+"/api/product-sub-category/";let s=(()=>{class t{constructor(t){this.httpClient=t}addSubCategory(t){return this.httpClient.post(r+"add-sub-category",t)}insertManySubCategory(t){return this.httpClient.post(r+"add-multiple-sub-category",t)}getAllSubCategory(t){if(t){let e=new a.LE;return e=e.append("pageSize",t.pageSize),e=e.append("page",t.currentPage),this.httpClient.get(r+"get-all-sub-categories",{params:e})}return this.httpClient.get(r+"get-all-sub-categories")}getSubCategoryByCategoryId(t){return this.httpClient.get(r+"get-sub-category-by-category-id/"+t)}editSubCategoryData(t){return this.httpClient.put(r+"edit-sub-category-by-sub-category",t)}getSubCategoryBySubCategoryId(t){return this.httpClient.get(r+"get-sub-category-by-sub-category-id/"+t)}getSubCategoryBySearch(t){return this.httpClient.get(r+"get-sub-category-by-search/"+t)}deleteSubCategory(t){return this.httpClient.delete(r+"delete-sub-category-by-id/"+t)}getSubCategoryBySubCategorySlug(t){return this.httpClient.get(r+"get-sub-category-by-sub-category-slug/"+t)}getSearchSubCategory(t,e){const n=e;let o=new a.LE;return o=o.append("q",t),o=o.append("pageSize",e.pageSize),o=o.append("currentPage",e.currentPage),this.httpClient.post(r+"get-sub-categories-by-search",n,{params:o})}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(a.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},80848:(t,e,n)=>{"use strict";n.d(e,{$:()=>r});var o=n(92935),a=n(35366),i=n(84369);let r=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.so),a.Y36(o.WI))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h1"),a._uU(4),a.qZA(),a.TgZ(5,"p"),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"div",3),a.TgZ(8,"button",4),a.NdJ("click",function(){return e.onDismiss()}),a._uU(9," Cancel "),a.qZA(),a.TgZ(10,"button",5),a.NdJ("click",function(){return e.onConfirm()}),a._uU(11," Confirm "),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Oqu(null==e.data?null:e.data.title),a.xp6(2),a.Oqu(null==e.data?null:e.data.message))},directives:[i.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),t})()},45510:(t,e,n)=>{"use strict";n.d(e,{_:()=>g});var o=n(92935),a=n(35366),i=n(33464),r=n(99624),s=n(77307),c=n(84369);let g=(()=>{class t{constructor(t,e,n,o){this.dialogRef=t,this.router=e,this.sanitizer=o,this.sanitizedBlobUrl=this.sanitizer.bypassSecurityTrustUrl(n.blobUrl),this.blobUrl=n.blobUrl,this.backupType=n.backupType;const a=new Date;this.filename=`${this.backupType}_${a.toISOString()}.json`}ngOnInit(){}close(){this.dialogRef.close()}download(){this.dialogRef.close()}viewInBrowser(){window.open(this.blobUrl),this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.so),a.Y36(i.F0),a.Y36(o.WI),a.Y36(r.H7))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-download-json-dialog"]],decls:21,vars:2,consts:[[1,"dialog-container"],[1,"header"],[1,"dialog-body"],[1,"circle"],[1,"dialog-action"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary","type","button",3,"href","download","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h2"),a._uU(3,"Download Data as Json File"),a.qZA(),a.qZA(),a.TgZ(4,"div",2),a.TgZ(5,"div",3),a.TgZ(6,"mat-icon"),a._uU(7,"file_download"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"div",4),a.TgZ(9,"button",5),a.NdJ("click",function(){return e.close()}),a.TgZ(10,"mat-icon"),a._uU(11,"close"),a.qZA(),a._uU(12," Cancel "),a.qZA(),a.TgZ(13,"a",6),a.NdJ("click",function(){return e.download()}),a.TgZ(14,"mat-icon"),a._uU(15,"download"),a.qZA(),a._uU(16," Download "),a.qZA(),a.TgZ(17,"button",7),a.NdJ("click",function(){return e.viewInBrowser()}),a.TgZ(18,"mat-icon"),a._uU(19,"visibility"),a.qZA(),a._uU(20," View "),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(13),a.Q6J("href",e.sanitizedBlobUrl,a.LSH)("download",e.filename))},directives:[s.Hw,c.lW,c.zs],styles:[".dialog-container[_ngcontent-%COMP%]{width:450px}.dialog-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-bottom:16px}.dialog-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:20px;color:#333;text-align:center;font-weight:600}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:100%;background:#1ee286;margin:0 auto;display:grid;place-items:center}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:56px;height:56px;font-size:56px;color:#00733d}.dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;grid-gap:12px;gap:12px}.dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:120px}"]}),t})()}}]);