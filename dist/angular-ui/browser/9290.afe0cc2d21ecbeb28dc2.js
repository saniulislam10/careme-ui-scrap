(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[9290],{83588:(t,e,n)=>{"use strict";n.d(e,{j:()=>i});var o=n(79996);function i(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return n=>(0,o.U)(function(t,e){return n=>{let o=n;for(let i=0;i<e;i++){const e=null!=o?o[t[i]]:void 0;if(void 0===e)return;o=e}return o}}(t,e))(n)}},99290:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ProductAuthenticatorsModule:()=>E});var o=n(61116),i=n(33464),r=n(70653),a=n(83588),c=n(47701),s=n(98720),d=n(44689),u=n(80848),l=n(31153),g=n(35366),h=n(92935),p=n(50927),m=n(99896),f=n(68370),b=n(31269),P=n(56507),_=n(31041),C=n(77307),x=n(7436),M=n(84369),O=n(41293),A=n(29282);const Z=["searchForm"],v=["searchInput"],w=function(t){return["edit-product-authenticator",t]};function T(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"tr"),g.TgZ(1,"td"),g._uU(2),g.qZA(),g.TgZ(3,"td"),g._uU(4),g.qZA(),g.TgZ(5,"td"),g.TgZ(6,"button",27),g.NdJ("click",function(){const e=g.CHM(t).$implicit;return g.oxw().openConfirmDialog(e._id)}),g.TgZ(7,"mat-icon"),g._uU(8,"delete"),g.qZA(),g.qZA(),g.TgZ(9,"button",28),g.TgZ(10,"mat-icon"),g._uU(11,"edit"),g.qZA(),g.qZA(),g.qZA(),g.qZA()}if(2&t){const t=e.$implicit;g.xp6(1),g.uIk("data-label","IMEI"),g.xp6(1),g.Oqu(t.imei?t.imei:"N/A"),g.xp6(1),g.uIk("data-label","SN"),g.xp6(1),g.Oqu(t.sn?t.sn:"N/A"),g.xp6(1),g.uIk("data-label","Actions"),g.xp6(4),g.Q6J("routerLink",g.VKq(6,w,t._id))}}const q=function(){return["add-new-product-authenticator"]},y=function(t,e,n){return{itemsPerPage:t,currentPage:e,totalItems:n}};let S=(()=>{class t{constructor(t,e,n,o,i,r,a,c){this.dialog=t,this.productAuthenticatorService=e,this.uiService=n,this.reloadService=o,this.spinner=i,this.utilsService=r,this.router=a,this.activatedRoute=c,this.productAuthenticators=[],this.holdPrevData=[],this.dataTypeFormat="excel",this.currentPage=1,this.totalProducts=0,this.productsPerPage=24,this.totalProductsStore=0,this.searchProducts=[],this.isLoading=!1,this.isSelect=!1,this.searchQuery=null}ngOnInit(){this.reloadService.refreshWarrantyList$.subscribe(()=>{this.getAllProductAuthenticator()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(t=>{this.currentPage=t&&t.page?t.page:1,this.getAllProductAuthenticator()})}ngAfterViewInit(){this.subForm=this.searchForm.valueChanges.pipe((0,a.j)("searchTerm"),(0,c.b)(200),(0,s.x)(),(0,d.w)(t=>{if(this.searchQuery=t,""===this.searchQuery||null===this.searchQuery||!this.searchQuery.trim())return this.searchProducts=[],this.productAuthenticators=this.holdPrevData,this.totalProducts=this.totalProductsStore,this.searchProducts=[],this.searchQuery=null,r.E;this.isLoading=!0;const e={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};return this.productAuthenticatorService.getSearchProductAuthenticator(t,e)})).subscribe(t=>{this.isLoading=!1,this.searchProducts=t.data,this.productAuthenticators=this.searchProducts,this.totalProducts=t.count,this.currentPage=1,this.router.navigate([],{queryParams:{page:this.currentPage}})},t=>{this.isLoading=!1})}openConfirmDialog(t){this.dialog.open(u.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{e&&(console.log("Data should be deleted"),this.deleteProductAuthenticator(t))})}openConfirmUploadDialog(t){this.dialog.open(u.$,{maxWidth:"400px",data:{title:"Import Data!",message:"Warning! All the existing data will be replace"}}).afterClosed().subscribe(e=>{e&&this.insertManyProductAuthenticator(t)})}getAllProductAuthenticator(){this.spinner.show();const t={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.productAuthenticatorService.getAllProductAuthenticator(t).subscribe(t=>{this.productAuthenticators=t.data,this.totalProducts=t.count,this.holdPrevData=t.data,this.totalProductsStore=t.count,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}insertManyProductAuthenticator(t){this.spinner.show(),this.productAuthenticatorService.insertManyProductAuthenticator(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshWarrantyList$(),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}deleteProductAuthenticator(t){this.spinner.show(),this.productAuthenticatorService.deleteProductAuthenticator(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshWarrantyList$(),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}onPageChanged(t){this.router.navigate([],{queryParams:{page:t}})}onFileChange(t){let e=null,n=null;const o=new FileReader,i=t.target.files[0];"excel"===this.dataTypeFormat?(o.onload=t=>{e=l.read(o.result,{type:"binary"}),n=e.SheetNames.reduce((t,n)=>(t[n]=l.utils.sheet_to_json(e.Sheets[n]),t),{});const i=n.productAuthenticators.map(t=>({imei:t.imei?t.imei.toString().trim():"",sn:t.sn?t.sn.toString().trim():""}));console.log(i),this.openConfirmUploadDialog(i)},o.readAsBinaryString(i)):(o.readAsText(i,"UTF-8"),o.onload=()=>{const t=JSON.parse(o.result.toString()).map(t=>{const e=t.invoiceNumber.toString().trim();return Object.assign(Object.assign({},t),{invoiceNumber:e,activationDate:this.excelDateToJSDate(t.activationDate)})});this.openConfirmUploadDialog(t)},o.onerror=t=>{console.log(t)})}exportDataToFile(){"excel"===this.dataTypeFormat&&this.exportToExcel()}exportToExcel(){this.spinner.show(),this.productAuthenticatorService.getAllProductAuthenticator().subscribe(t=>{const e=t.data.map(t=>({imei:t.imei,sn:t.sn})),n=this.utilsService.getDateString(new Date),o=l.utils.json_to_sheet(e),i=l.utils.book_new();l.utils.book_append_sheet(i,o,"productAuthenticators"),l.writeFile(i,`Product_Authenticator_Backup_${n}.xlsx`),this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}excelDateToJSDate(t){if("string"==typeof t)return t;{const e=Math.floor(t-25569),n=new Date(86400*e*1e3),o=t-Math.floor(t)+1e-7;let i=Math.floor(86400*o);const r=i%60;i-=r;const a=Math.floor(i/3600),c=Math.floor(i/60)%60,s=new Date(n.getFullYear(),n.getMonth(),n.getDate(),a,c,r);return this.utilsService.getDateString(s)}}getModifyPhoneNo(t){return"88"===t.slice(0,2)?t.substring(2):"0"!==t.slice(0,1)?"0"+t:t}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subForm&&this.subForm.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(h.uw),g.Y36(p.s),g.Y36(m.F),g.Y36(f.f),g.Y36(b.t2),g.Y36(P.F),g.Y36(i.F0),g.Y36(i.gz))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-product-authenticators"]],viewQuery:function(t,e){if(1&t&&(g.Gf(Z,5),g.Gf(v,5)),2&t){let t;g.iGM(t=g.CRH())&&(e.searchForm=t.first),g.iGM(t=g.CRH())&&(e.searchInput=t.first)}},decls:51,vars:20,consts:[[1,"filter-area"],[1,"search","search-area"],[1,"search-form"],["searchForm","ngForm"],["type","text","placeholder","Search here...","name","searchTerm","autocomplete","off","ngModel","","required","",2,"background","aliceblue"],["searchInput",""],[1,"icon"],[1,"top-action"],[1,"select-area"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["value","excel"],[1,"main"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","accent",2,"margin-left","12px",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","12px",3,"click"],["fxHide","","type","file",3,"accept","change"],["pickInput",""],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"pagination-container"],[1,"product-pagination",3,"autoHide","maxSize","pageChange"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"click"],["mat-mini-fab","",3,"routerLink"]],template:function(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"div",0),g.TgZ(1,"div",1),g.TgZ(2,"form",2,3),g._UZ(4,"input",4,5),g.TgZ(6,"div",6),g.TgZ(7,"mat-icon"),g._uU(8,"search"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(9,"div",7),g.TgZ(10,"div",8),g.TgZ(11,"mat-radio-group",9),g.NdJ("ngModelChange",function(t){return e.dataTypeFormat=t}),g.TgZ(12,"mat-radio-button",10),g.TgZ(13,"span"),g._uU(14,"Excel"),g.qZA(),g.qZA(),g.qZA(),g.qZA(),g.TgZ(15,"div",11),g.TgZ(16,"button",12),g.TgZ(17,"mat-icon"),g._uU(18,"add"),g.qZA(),g._uU(19," Add New Product Authenticator "),g.qZA(),g.TgZ(20,"button",13),g.NdJ("click",function(){return e.exportDataToFile()}),g.TgZ(21,"mat-icon"),g._uU(22,"file_download"),g.qZA(),g._uU(23),g.qZA(),g.TgZ(24,"button",14),g.NdJ("click",function(){return g.CHM(t),g.MAs(29).click()}),g.TgZ(25,"mat-icon"),g._uU(26,"file_upload"),g.qZA(),g._uU(27),g.qZA(),g.TgZ(28,"input",15,16),g.NdJ("change",function(t){return e.onFileChange(t)}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(30,"div",17),g.TgZ(31,"h2"),g._uU(32,"Product Authenticators"),g.qZA(),g.qZA(),g._UZ(33,"hr",18),g.TgZ(34,"div",19),g.TgZ(35,"table"),g.TgZ(36,"thead"),g.TgZ(37,"tr",20),g.TgZ(38,"th",21),g._uU(39),g.qZA(),g.TgZ(40,"th",21),g._uU(41),g.qZA(),g.TgZ(42,"th",21),g._uU(43),g.qZA(),g.qZA(),g.qZA(),g.YNc(44,T,12,8,"tr",22),g.ALo(45,"paginate"),g.qZA(),g.qZA(),g.TgZ(46,"div",23),g.TgZ(47,"pagination-controls",24),g.NdJ("pageChange",function(t){return e.onPageChanged(t)}),g.qZA(),g.qZA(),g.TgZ(48,"ngx-spinner",25),g.TgZ(49,"p",26),g._uU(50," Loading... "),g.qZA(),g.qZA()}2&t&&(g.xp6(11),g.Q6J("ngModel",e.dataTypeFormat),g.xp6(5),g.Q6J("routerLink",g.DdM(15,q)),g.xp6(7),g.hij(" ","json"===e.dataTypeFormat?"Export as Json":"Export as Excel"," "),g.xp6(4),g.hij(" ","json"===e.dataTypeFormat?"Import Json":"Import Excel"," "),g.xp6(1),g.Q6J("accept","json"===e.dataTypeFormat?"application/JSON":".xlsx, .xls, .csv"),g.xp6(11),g.Oqu("IMEI"),g.xp6(2),g.Oqu("SN"),g.xp6(2),g.Oqu("Actions"),g.xp6(1),g.Q6J("ngForOf",g.xi3(45,12,e.productAuthenticators,g.kEZ(16,y,e.productsPerPage,e.currentPage,e.totalProducts))),g.xp6(3),g.Q6J("autoHide",!0)("maxSize",15),g.xp6(1),g.Q6J("fullScreen",!0))},directives:[_._Y,_.JL,_.F,_.Fj,_.JJ,_.On,_.Q7,C.Hw,x.VQ,x.U0,M.lW,i.rH,O.b8,o.sg,A.LS,b.Ro],pipes:[A._s],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.search[_ngcontent-%COMP%]{width:100%;max-width:400px;position:relative;z-index:1299!important}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;border-radius:8px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:45px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#ffeaff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.color[_ngcontent-%COMP%]{background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.sm[_ngcontent-%COMP%]{width:100%;height:38px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:55px;line-height:55px;font-size:24px;width:70px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;color:#fff;background:#ef3688;border:none;cursor:pointer}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{height:38px;line-height:38px;font-size:30px;width:40px}.filter-area[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:12px 12px 24px 0}.top-action[_ngcontent-%COMP%]{margin-top:16px;padding-right:16px;display:flex;justify-content:space-between}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]{padding-left:16px}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .pagination-container[_ngcontent-%COMP%]{text-align:center}"]}),t})();var F=n(61613),k=n(35965),U=n(13070),D=n(9550);const J=["templateForm"];let z=(()=>{class t{constructor(t,e,n,o,i,r,a){this.fb=t,this.activatedRoute=e,this.uiService=n,this.productAuthenticatorService=o,this.utilsService=i,this.storageService=r,this.spinner=a,this.autoSlug=!0,this.isLoading=!1}ngOnInit(){this.dataForm=this.fb.group({imei:[null],sn:[null]}),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getProductAuthenticatorById()})}onSubmit(){if(this.dataForm.invalid)return void this.uiService.warn("Please complete all the required fields");if(!this.dataForm.value.imei.trim()&&!this.dataForm.value.sn.trim())return void this.uiService.warn("Please complete at least one field");console.log(this.dataForm.value);const t={imei:this.dataForm.value.imei.trim(),sn:this.dataForm.value.sn.trim()};this.productAuthenticator?this.editProductAuthenticatorData(Object.assign(Object.assign({},t),{_id:this.productAuthenticator._id})):this.addProductAuthenticator(t)}addProductAuthenticator(t){this.spinner.show(),this.productAuthenticatorService.addProductAuthenticator(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.spinner.hide()},t=>{this.spinner.hide(),this.uiService.warn("This imei or sn already exists")})}getProductAuthenticatorById(){this.spinner.show(),this.productAuthenticatorService.getProductAuthenticatorById(this.id).subscribe(t=>{t.data&&(this.dataForm.patchValue(t.data),this.productAuthenticator=t.data,this.spinner.hide())},t=>{console.log(t),this.spinner.hide()})}editProductAuthenticatorData(t){this.spinner.show(),this.productAuthenticatorService.editProductAuthenticatorData(t).subscribe(t=>{this.uiService.success(t.message),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(g.Y36(_.qu),g.Y36(i.gz),g.Y36(m.F),g.Y36(p.s),g.Y36(P.F),g.Y36(F.V),g.Y36(b.t2))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-add-new-product-authenticator"]],viewQuery:function(t,e){if(1&t&&g.Gf(J,5),2&t){let t;g.iGM(t=g.CRH())&&(e.templateForm=t.first)}},decls:23,vars:3,consts:[[1,"header-dialog"],["mat-dialog-title",""],["autocomplete","off","fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],["appearance","outline"],["formControlName","imei","matInput","","placeholder","Enter imei number"],["formControlName","sn","matInput","","placeholder","Enter sn"],["mat-raised-button","","color","primary","type","submit"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"]],template:function(t,e){1&t&&(g.TgZ(0,"div"),g.TgZ(1,"div",0),g.TgZ(2,"h1",1),g._uU(3,"Product Authenticator"),g.qZA(),g.qZA(),g.TgZ(4,"form",2,3),g.NdJ("ngSubmit",function(){return e.onSubmit()}),g.TgZ(6,"mat-form-field",4),g.TgZ(7,"mat-label"),g._uU(8,"IMEI"),g.qZA(),g._UZ(9,"input",5),g.TgZ(10,"mat-error"),g._uU(11,"This field is required"),g.qZA(),g.qZA(),g.TgZ(12,"mat-form-field",4),g.TgZ(13,"mat-label"),g._uU(14,"SN"),g.qZA(),g._UZ(15,"input",6),g.TgZ(16,"mat-error"),g._uU(17,"This field is required"),g.qZA(),g.qZA(),g.TgZ(18,"button",7),g._uU(19),g.qZA(),g.qZA(),g.qZA(),g.TgZ(20,"ngx-spinner",8),g.TgZ(21,"p",9),g._uU(22," Loading... "),g.qZA(),g.qZA()),2&t&&(g.xp6(4),g.Q6J("formGroup",e.dataForm),g.xp6(15),g.Oqu(e.productAuthenticator?"Edit Data":"Add Data"),g.xp6(1),g.Q6J("fullScreen",!0))},directives:[h.uh,_._Y,_.JL,k.xw,k.Wh,_.sg,U.KE,U.hX,_.Fj,D.Nt,_.JJ,_.u,U.TO,M.lW,b.Ro],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),t})();const I=[{path:"",component:S},{path:"add-new-product-authenticator",component:z},{path:"edit-product-authenticator/:id",component:z}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[i.Bz.forChild(I)],i.Bz]}),t})();var j=n(56861),Y=n(87672),L=n(77154);let E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[o.ez,N,j.q,Y.Cq,_.u5,_.UX,L.o9,b.ef,A.JX]]}),t})()},80848:(t,e,n)=>{"use strict";n.d(e,{$:()=>a});var o=n(92935),i=n(35366),r=n(84369);let a=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(o.so),i.Y36(o.WI))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"h1"),i._uU(4),i.qZA(),i.TgZ(5,"p"),i._uU(6),i.qZA(),i.qZA(),i.TgZ(7,"div",3),i.TgZ(8,"button",4),i.NdJ("click",function(){return e.onDismiss()}),i._uU(9," Cancel "),i.qZA(),i.TgZ(10,"button",5),i.NdJ("click",function(){return e.onConfirm()}),i._uU(11," Confirm "),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(4),i.Oqu(null==e.data?null:e.data.title),i.xp6(2),i.Oqu(null==e.data?null:e.data.message))},directives:[r.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),t})()}}]);