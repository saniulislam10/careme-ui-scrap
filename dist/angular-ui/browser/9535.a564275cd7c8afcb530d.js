(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[9535],{83588:(t,e,n)=>{"use strict";n.d(e,{j:()=>a});var o=n(79996);function a(...t){const e=t.length;if(0===e)throw new Error("list of properties cannot be empty.");return n=>(0,o.U)(function(t,e){return n=>{let o=n;for(let a=0;a<e;a++){const e=null!=o?o[t[a]]:void 0;if(void 0===e)return;o=e}return o}}(t,e))(n)}},89535:(t,e,n)=>{"use strict";n.r(e),n.d(e,{WarrantyDashboardModule:()=>Q});var o=n(61116),a=n(56861),i=n(87672),r=n(31041),c=n(77154),s=n(31269),l=n(29282),d=n(33464),g=n(80848),u=n(70653),p=n(31153),h=n(45510),m=n(83588),b=n(47701),f=n(98720),_=n(44689),P=n(35366),O=n(92935),Z=n(78863),x=n(99896),C=n(68370),M=n(56507),w=n(77307),y=n(7436),q=n(84369),T=n(41293);const A=["searchForm"],v=["searchInput"],U=function(t){return["edit-warranty",t]};function S(t,e){if(1&t){const t=P.EpF();P.TgZ(0,"tr"),P.TgZ(1,"td"),P._uU(2),P.qZA(),P.TgZ(3,"td"),P._uU(4),P.qZA(),P.TgZ(5,"td"),P._uU(6),P.qZA(),P.TgZ(7,"td"),P._uU(8),P.qZA(),P.TgZ(9,"td"),P._uU(10),P.qZA(),P.TgZ(11,"td"),P._uU(12),P.qZA(),P.TgZ(13,"td"),P._uU(14),P.qZA(),P.TgZ(15,"td"),P._uU(16),P.ALo(17,"date"),P.qZA(),P.TgZ(18,"td"),P._uU(19),P.qZA(),P.TgZ(20,"td"),P.TgZ(21,"button",27),P.NdJ("click",function(){const e=P.CHM(t).$implicit;return P.oxw().openConfirmDialog(e._id)}),P.TgZ(22,"mat-icon"),P._uU(23,"delete"),P.qZA(),P.qZA(),P.TgZ(24,"button",28),P.TgZ(25,"mat-icon"),P._uU(26,"edit"),P.qZA(),P.qZA(),P.qZA(),P.qZA()}if(2&t){const t=e.$implicit;P.xp6(1),P.uIk("data-label","Invoice No"),P.xp6(1),P.Oqu(t.invoiceNumber),P.xp6(1),P.uIk("data-label","Activation Date"),P.xp6(1),P.Oqu(t.activationDate),P.xp6(1),P.uIk("data-label","Product Name"),P.xp6(1),P.Oqu(t.productName),P.xp6(1),P.uIk("data-label","SKU"),P.xp6(1),P.Oqu(t.sku),P.xp6(1),P.uIk("data-label","Warranty Period"),P.xp6(1),P.Oqu(t.warrantyPeriod),P.xp6(1),P.uIk("data-label","Customer Name"),P.xp6(1),P.Oqu(t.customerName),P.xp6(1),P.uIk("data-label","Customer Phone"),P.xp6(1),P.Oqu(t.customerPhoneNo),P.xp6(1),P.uIk("data-label","Last Download"),P.xp6(1),P.Oqu(t.lastDownload?P.lcZ(17,20,t.lastDownload):"N/A"),P.xp6(2),P.uIk("data-label","Total Download"),P.xp6(1),P.Oqu(t.totalDownload?t.totalDownload:"N/A"),P.xp6(1),P.uIk("data-label","Actions"),P.xp6(4),P.Q6J("routerLink",P.VKq(22,U,t._id))}}const N=function(){return["add-new-warranty"]},k=function(t,e,n){return{itemsPerPage:t,currentPage:e,totalItems:n}};let D=(()=>{class t{constructor(t,e,n,o,a,i,r,c){this.dialog=t,this.warrantyService=e,this.uiService=n,this.reloadService=o,this.spinner=a,this.utilsService=i,this.router=r,this.activatedRoute=c,this.warranties=[],this.holdPrevData=[],this.dataTypeFormat="excel",this.currentPage=1,this.totalProducts=0,this.productsPerPage=24,this.totalProductsStore=0,this.searchProducts=[],this.isLoading=!1,this.isSelect=!1,this.searchQuery=null}ngOnInit(){this.reloadService.refreshWarrantyList$.subscribe(()=>{this.getAllWarranty()}),this.subAcRoute=this.activatedRoute.queryParams.subscribe(t=>{this.currentPage=t&&t.page?t.page:1,this.getAllWarranty()})}ngAfterViewInit(){this.subForm=this.searchForm.valueChanges.pipe((0,m.j)("searchTerm"),(0,b.b)(200),(0,f.x)(),(0,_.w)(t=>{if(this.searchQuery=t,""===this.searchQuery||null===this.searchQuery||!this.searchQuery.trim())return this.searchProducts=[],this.warranties=this.holdPrevData,this.totalProducts=this.totalProductsStore,this.searchProducts=[],this.searchQuery=null,u.E;this.isLoading=!0;const e={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};return this.warrantyService.getSearchWarranty(t,e)})).subscribe(t=>{this.isLoading=!1,this.searchProducts=t.data,this.warranties=this.searchProducts,this.totalProducts=t.count,this.currentPage=1,this.router.navigate([],{queryParams:{page:this.currentPage}})},t=>{this.isLoading=!1})}openConfirmDialog(t){this.dialog.open(g.$,{maxWidth:"400px",data:{title:"Confirm Delete",message:"Are you sure you want delete this category?"}}).afterClosed().subscribe(e=>{e&&(console.log("Data should be deleted"),this.deleteWarranty(t))})}openConfirmUploadDialog(t){this.dialog.open(g.$,{maxWidth:"400px",data:{title:"Import Data!",message:"Warning! All the existing data will be replace"}}).afterClosed().subscribe(e=>{e&&this.insertManyWarranty(t)})}getAllWarranty(){this.spinner.show();const t={pageSize:this.productsPerPage.toString(),currentPage:this.currentPage.toString()};this.warrantyService.getAllWarranty(t).subscribe(t=>{this.warranties=t.data,this.totalProducts=t.count,this.holdPrevData=t.data,this.totalProductsStore=t.count,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}insertManyWarranty(t){this.spinner.show(),this.warrantyService.insertManyWarranty(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshWarrantyList$(),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}deleteWarranty(t){this.spinner.show(),this.warrantyService.deleteWarranty(t).subscribe(t=>{this.uiService.success(t.message),this.reloadService.needRefreshWarrantyList$(),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}onPageChanged(t){this.router.navigate([],{queryParams:{page:t}})}onFileChange(t){let e=null,n=null;const o=new FileReader,a=t.target.files[0];"excel"===this.dataTypeFormat?(o.onload=t=>{e=p.read(o.result,{type:"binary"}),n=e.SheetNames.reduce((t,n)=>(t[n]=p.utils.sheet_to_json(e.Sheets[n]),t),{});const a=n.warranties.map(t=>{const e=t.invoiceNumber.toString().trim(),n=t.customerPhoneNo.toString().trim(),o=this.getModifyPhoneNo(n);return Object.assign(Object.assign({},t),{invoiceNumber:e,customerPhoneNo:o,activationDate:this.excelDateToJSDate(t.activationDate)})});console.log(a),this.openConfirmUploadDialog(a)},o.readAsBinaryString(a)):(o.readAsText(a,"UTF-8"),o.onload=()=>{const t=JSON.parse(o.result.toString()).map(t=>{const e=t.invoiceNumber.toString().trim();return Object.assign(Object.assign({},t),{invoiceNumber:e,activationDate:this.excelDateToJSDate(t.activationDate)})});this.openConfirmUploadDialog(t)},o.onerror=t=>{console.log(t)})}exportDataToFile(){"json"===this.dataTypeFormat?this.exportAsAJson():this.exportToExcel()}exportToExcel(){this.spinner.show(),this.warrantyService.getAllWarranty().subscribe(t=>{const e=t.data.map(t=>({invoiceNumber:t.invoiceNumber,activationDate:t.activationDate,warrantyPeriod:t.warrantyPeriod,productName:t.productName,sku:t.sku,customerName:t.customerName,customerPhoneNo:t.customerPhoneNo,totalDownload:t.totalDownload,lastDownload:t.lastDownload})),n=this.utilsService.getDateString(new Date),o=p.utils.json_to_sheet(e),a=p.utils.book_new();p.utils.book_append_sheet(a,o,"warranties"),p.writeFile(a,`Warranty_Backup_${n}.xlsx`),this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}exportAsAJson(){this.warrantyService.getAllWarranty().subscribe(t=>{const e=new Blob([JSON.stringify(t.data,null,2)],{type:"application/json"});this.dialog.open(h._,{maxWidth:"500px",data:{blobUrl:window.URL.createObjectURL(e),backupType:"tags"}})},t=>{console.log(t)})}excelDateToJSDate(t){if("string"==typeof t)return t;{const e=Math.floor(t-25569),n=new Date(86400*e*1e3),o=t-Math.floor(t)+1e-7;let a=Math.floor(86400*o);const i=a%60;a-=i;const r=Math.floor(a/3600),c=Math.floor(a/60)%60,s=new Date(n.getFullYear(),n.getMonth(),n.getDate(),r,c,i);return this.utilsService.getDateString(s)}}getModifyPhoneNo(t){return"88"===t.slice(0,2)?t.substring(2):"0"!==t.slice(0,1)?"0"+t:t}ngOnDestroy(){this.subAcRoute&&this.subAcRoute.unsubscribe(),this.subForm&&this.subForm.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(P.Y36(O.uw),P.Y36(Z.F),P.Y36(x.F),P.Y36(C.f),P.Y36(s.t2),P.Y36(M.F),P.Y36(d.F0),P.Y36(d.gz))},t.\u0275cmp=P.Xpm({type:t,selectors:[["app-warranty-dashboard"]],viewQuery:function(t,e){if(1&t&&(P.Gf(A,5),P.Gf(v,5)),2&t){let t;P.iGM(t=P.CRH())&&(e.searchForm=t.first),P.iGM(t=P.CRH())&&(e.searchInput=t.first)}},decls:65,vars:27,consts:[[1,"filter-area"],[1,"search","search-area"],[1,"search-form"],["searchForm","ngForm"],["type","text","placeholder","Search here...","name","searchTerm","autocomplete","off","ngModel","","required","",2,"background","aliceblue"],["searchInput",""],[1,"icon"],[1,"top-action"],[1,"select-area"],["aria-label","Select an option",3,"ngModel","ngModelChange"],["value","excel"],[1,"main"],["mat-raised-button","","color","primary",3,"routerLink"],["mat-raised-button","","color","accent",2,"margin-left","12px",3,"click"],["mat-raised-button","","color","warn",2,"margin-left","12px",3,"click"],["fxHide","","type","file",3,"accept","change"],["pickInput",""],[1,"header"],[1,"center-square"],[1,"table-container"],[1,"table-head"],["scope","col"],[4,"ngFor","ngForOf"],[1,"pagination-container"],[1,"product-pagination",3,"autoHide","maxSize","pageChange"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],["mat-mini-fab","","color","warn",2,"margin-right","5px",3,"click"],["mat-mini-fab","",3,"routerLink"]],template:function(t,e){if(1&t){const t=P.EpF();P.TgZ(0,"div",0),P.TgZ(1,"div",1),P.TgZ(2,"form",2,3),P._UZ(4,"input",4,5),P.TgZ(6,"div",6),P.TgZ(7,"mat-icon"),P._uU(8,"search"),P.qZA(),P.qZA(),P.qZA(),P.qZA(),P.qZA(),P.TgZ(9,"div",7),P.TgZ(10,"div",8),P.TgZ(11,"mat-radio-group",9),P.NdJ("ngModelChange",function(t){return e.dataTypeFormat=t}),P.TgZ(12,"mat-radio-button",10),P.TgZ(13,"span"),P._uU(14,"Excel"),P.qZA(),P.qZA(),P.qZA(),P.qZA(),P.TgZ(15,"div",11),P.TgZ(16,"button",12),P.TgZ(17,"mat-icon"),P._uU(18,"add"),P.qZA(),P._uU(19," Add New Warranty "),P.qZA(),P.TgZ(20,"button",13),P.NdJ("click",function(){return e.exportDataToFile()}),P.TgZ(21,"mat-icon"),P._uU(22,"file_download"),P.qZA(),P._uU(23),P.qZA(),P.TgZ(24,"button",14),P.NdJ("click",function(){return P.CHM(t),P.MAs(29).click()}),P.TgZ(25,"mat-icon"),P._uU(26,"file_upload"),P.qZA(),P._uU(27),P.qZA(),P.TgZ(28,"input",15,16),P.NdJ("change",function(t){return e.onFileChange(t)}),P.qZA(),P.qZA(),P.qZA(),P.TgZ(30,"div",17),P.TgZ(31,"h2"),P._uU(32,"Warranty List"),P.qZA(),P.qZA(),P._UZ(33,"hr",18),P.TgZ(34,"div",19),P.TgZ(35,"table"),P.TgZ(36,"thead"),P.TgZ(37,"tr",20),P.TgZ(38,"th",21),P._uU(39),P.qZA(),P.TgZ(40,"th",21),P._uU(41),P.qZA(),P.TgZ(42,"th",21),P._uU(43),P.qZA(),P.TgZ(44,"th",21),P._uU(45),P.qZA(),P.TgZ(46,"th",21),P._uU(47),P.qZA(),P.TgZ(48,"th",21),P._uU(49),P.qZA(),P.TgZ(50,"th",21),P._uU(51),P.qZA(),P.TgZ(52,"th",21),P._uU(53),P.qZA(),P.TgZ(54,"th",21),P._uU(55),P.qZA(),P.TgZ(56,"th",21),P._uU(57),P.qZA(),P.qZA(),P.qZA(),P.YNc(58,S,27,24,"tr",22),P.ALo(59,"paginate"),P.qZA(),P.qZA(),P.TgZ(60,"div",23),P.TgZ(61,"pagination-controls",24),P.NdJ("pageChange",function(t){return e.onPageChanged(t)}),P.qZA(),P.qZA(),P.TgZ(62,"ngx-spinner",25),P.TgZ(63,"p",26),P._uU(64," Loading... "),P.qZA(),P.qZA()}2&t&&(P.xp6(11),P.Q6J("ngModel",e.dataTypeFormat),P.xp6(5),P.Q6J("routerLink",P.DdM(22,N)),P.xp6(7),P.hij(" ","json"===e.dataTypeFormat?"Export as Json":"Export as Excel"," "),P.xp6(4),P.hij(" ","json"===e.dataTypeFormat?"Import Json":"Import Excel"," "),P.xp6(1),P.Q6J("accept","json"===e.dataTypeFormat?"application/JSON":".xlsx, .xls, .csv"),P.xp6(11),P.Oqu("Invoice No"),P.xp6(2),P.Oqu("Activation Date"),P.xp6(2),P.Oqu("Product Name"),P.xp6(2),P.Oqu("SKU"),P.xp6(2),P.Oqu("Warranty Period"),P.xp6(2),P.Oqu("Customer Name"),P.xp6(2),P.Oqu("Customer Phone"),P.xp6(2),P.Oqu("Last Download"),P.xp6(2),P.Oqu("Total Download"),P.xp6(2),P.Oqu("Actions"),P.xp6(1),P.Q6J("ngForOf",P.xi3(59,19,e.warranties,P.kEZ(23,k,e.productsPerPage,e.currentPage,e.totalProducts))),P.xp6(3),P.Q6J("autoHide",!0)("maxSize",15),P.xp6(1),P.Q6J("fullScreen",!0))},directives:[r._Y,r.JL,r.F,r.Fj,r.JJ,r.On,r.Q7,w.Hw,y.VQ,y.U0,q.lW,d.rH,T.b8,o.sg,l.LS,s.Ro],pipes:[l._s,o.uU],styles:[".table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;border:1px solid #ccc;border-collapse:collapse;margin:0;padding:0;width:100%;table-layout:fixed;font-size:16px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#fff}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:75px;height:75px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:24px;margin:.5em 0 .75em;font-weight:700}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#f8f8f8;border:1px solid #ddd;padding:.35em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.625em;text-align:center;word-wrap:anywhere}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:14px;text-transform:uppercase;background-color:#2d2d2d;color:#dbe9ff}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:100%;height:45px;border:none;outline:none;font-size:16px;font-weight:700;padding:0 15px;box-sizing:border-box;overflow:hidden;background:#b9d8fb}@media screen and (min-width:670px) and (max-width:850px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}@media screen and (max-width:600px){.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin:0 auto;border:0}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:125px;height:125px;object-fit:contain}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%]{font-size:1.3em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{border:none;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border-bottom:3px solid #ddd;display:block;margin-bottom:.625em}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;font-family:Open Sans,sans-serif;display:block;font-size:14.5px;text-align:right}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:before{content:attr(data-label);float:left;font-weight:700;font-size:13px;text-transform:uppercase;color:#2d2d2d}.table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{border-bottom:0}.table-container[_ngcontent-%COMP%]   .input-in-table[_ngcontent-%COMP%]{width:200px;height:42px;background:#b9d8fb}.table-container[_ngcontent-%COMP%]   .td-input-md[_ngcontent-%COMP%]:before{margin-top:14px}}.search[_ngcontent-%COMP%]{width:100%;max-width:400px;position:relative;z-index:1299!important}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%;border-radius:8px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:45px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#ffeaff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.color[_ngcontent-%COMP%]{background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   input.sm[_ngcontent-%COMP%]{width:100%;height:38px;outline:none;border:none;padding:0 60px 0 20px;font-size:17px;background:#f0f8ff}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{height:55px;line-height:55px;font-size:24px;width:70px}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{position:absolute;top:0;right:0;text-align:center;color:#fff;background:#ef3688;border:none;cursor:pointer}.search[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .icon.sm[_ngcontent-%COMP%]{height:38px;line-height:38px;font-size:30px;width:40px}.filter-area[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin:12px 12px 24px 0}.top-action[_ngcontent-%COMP%]{margin-top:16px;padding-right:16px;display:flex;justify-content:space-between}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]{padding-left:16px}.top-action[_ngcontent-%COMP%]   .select-area[_ngcontent-%COMP%]   .mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}.top-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif}.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .pagination-container[_ngcontent-%COMP%]{text-align:center}"]}),t})();var I=n(33817),F=n(61613),W=n(35965),J=n(13070),R=n(9550),z=n(69024);const E=["templateForm"];let j=(()=>{class t{constructor(t,e,n,o,a,i,r){this.fb=t,this.activatedRoute=e,this.uiService=n,this.warrantyService=o,this.utilsService=a,this.storageService=i,this.spinner=r,this.autoSlug=!0,this.isLoading=!1}ngOnInit(){this.dataForm=this.fb.group({invoiceNumber:[null,r.kI.required],activationDate:[null,r.kI.required],warrantyPeriod:[null,r.kI.required],productName:[null,r.kI.required],sku:[null,r.kI.required],customerName:[null,r.kI.required],customerPhoneNo:[null,r.kI.required]}),this.activatedRoute.paramMap.subscribe(t=>{this.id=t.get("id"),this.id&&this.getWarrantyByWarrantyId()})}onSubmit(){if(this.dataForm.invalid)return void this.uiService.warn("Please complete all the required fields");const t=Object.assign(Object.assign({},this.dataForm.value),{invoiceNumber:this.dataForm.value.invoiceNumber.trim(),activationDate:this.utilsService.getDateString(this.dataForm.value.activationDate)});this.warranty?this.editWarrantyData(Object.assign(Object.assign({},t),{_id:this.warranty._id})):this.addWarranty(t)}addWarranty(t){this.spinner.show(),this.warrantyService.addWarranty(t).subscribe(t=>{this.uiService.success(t.message),this.templateForm.resetForm(),this.spinner.hide()},t=>{this.spinner.hide(),this.uiService.warn("This invoice number already exists"),t.error.statusCode===I.q.EXISTS_OR_NOT_ACCEPT&&this.dataForm.controls.invoiceNumber.setErrors({incorrect:!0})})}getWarrantyByWarrantyId(){this.spinner.show(),this.warrantyService.getWarrantyByWarrantyId(this.id).subscribe(t=>{t.data&&(this.dataForm.patchValue(t.data),this.warranty=t.data,this.spinner.hide())},t=>{console.log(t),this.spinner.hide()})}editWarrantyData(t){this.spinner.show(),this.warrantyService.editWarrantyData(t).subscribe(t=>{this.uiService.success(t.message),this.spinner.hide()},t=>{console.log(t),this.spinner.hide()})}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(P.Y36(r.qu),P.Y36(d.gz),P.Y36(x.F),P.Y36(Z.F),P.Y36(M.F),P.Y36(F.V),P.Y36(s.t2))},t.\u0275cmp=P.Xpm({type:t,selectors:[["app-add-new-warranty"]],viewQuery:function(t,e){if(1&t&&P.Gf(E,5),2&t){let t;P.iGM(t=P.CRH())&&(e.templateForm=t.first)}},decls:57,vars:6,consts:[[1,"header-dialog"],["mat-dialog-title",""],["autocomplete","off","fxLayout","column","fxLayoutAlign","space-around center",3,"formGroup","ngSubmit"],["templateForm","ngForm"],["appearance","outline"],["formControlName","invoiceNumber","matInput","","placeholder","Enter invoice number","required",""],["appearance","outline",3,"click"],["readonly","","formControlName","activationDate","matInput","","placeholder","Select activation date",3,"matDatepicker"],["matSuffix","",3,"for"],["activationDate",""],["formControlName","productName","matInput","","placeholder","Enter product name","required",""],["formControlName","sku","matInput","","placeholder","Enter product sku","required",""],["formControlName","customerName","matInput","","placeholder","Enter customer name","required",""],["formControlName","customerPhoneNo","matInput","","placeholder","Enter customer phone no","required",""],["matInput","","placeholder","Enter warranty period","type","text","formControlName","warrantyPeriod",3,"rows"],["mat-raised-button","","color","primary","type","submit"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"]],template:function(t,e){if(1&t){const t=P.EpF();P.TgZ(0,"div"),P.TgZ(1,"div",0),P.TgZ(2,"h1",1),P._uU(3,"Warranty"),P.qZA(),P.qZA(),P.TgZ(4,"form",2,3),P.NdJ("ngSubmit",function(){return e.onSubmit()}),P.TgZ(6,"mat-form-field",4),P.TgZ(7,"mat-label"),P._uU(8,"Invoice Number"),P.qZA(),P._UZ(9,"input",5),P.TgZ(10,"mat-error"),P._uU(11,"This field is required"),P.qZA(),P.qZA(),P.TgZ(12,"mat-form-field",6),P.NdJ("click",function(){return P.CHM(t),P.MAs(18).open()}),P.TgZ(13,"mat-label"),P._uU(14,"Activation Date"),P.qZA(),P._UZ(15,"input",7),P._UZ(16,"mat-datepicker-toggle",8),P._UZ(17,"mat-datepicker",null,9),P.TgZ(19,"mat-error"),P._uU(20,"This field is required"),P.qZA(),P.qZA(),P.TgZ(21,"mat-form-field",4),P.TgZ(22,"mat-label"),P._uU(23,"Product Name"),P.qZA(),P._UZ(24,"input",10),P.TgZ(25,"mat-error"),P._uU(26,"This field is required"),P.qZA(),P.qZA(),P.TgZ(27,"mat-form-field",4),P.TgZ(28,"mat-label"),P._uU(29,"SKU"),P.qZA(),P._UZ(30,"input",11),P.TgZ(31,"mat-error"),P._uU(32,"This field is required"),P.qZA(),P.qZA(),P.TgZ(33,"mat-form-field",4),P.TgZ(34,"mat-label"),P._uU(35,"Customer Name"),P.qZA(),P._UZ(36,"input",12),P.TgZ(37,"mat-error"),P._uU(38,"This field is required"),P.qZA(),P.qZA(),P.TgZ(39,"mat-form-field",4),P.TgZ(40,"mat-label"),P._uU(41,"Customer Phone No"),P.qZA(),P._UZ(42,"input",13),P.TgZ(43,"mat-error"),P._uU(44,"This field is required"),P.qZA(),P.qZA(),P.TgZ(45,"mat-form-field",4),P.TgZ(46,"mat-label"),P._uU(47,"Warranty Period"),P.qZA(),P.TgZ(48,"textarea",14),P._uU(49,"      "),P.qZA(),P.TgZ(50,"mat-error"),P._uU(51,"This field is required"),P.qZA(),P.qZA(),P.TgZ(52,"button",15),P._uU(53),P.qZA(),P.qZA(),P.qZA(),P.TgZ(54,"ngx-spinner",16),P.TgZ(55,"p",17),P._uU(56," Loading... "),P.qZA(),P.qZA()}if(2&t){const t=P.MAs(18);P.xp6(4),P.Q6J("formGroup",e.dataForm),P.xp6(11),P.Q6J("matDatepicker",t),P.xp6(1),P.Q6J("for",t),P.xp6(32),P.Q6J("rows",4),P.xp6(5),P.Oqu(e.warranty?"Edit Warranty":"Add Warranty"),P.xp6(1),P.Q6J("fullScreen",!0)}},directives:[O.uh,r._Y,r.JL,W.xw,W.Wh,r.sg,J.KE,J.hX,r.Fj,R.Nt,r.JJ,r.u,r.Q7,J.TO,z.hl,z.nW,J.R9,z.Mq,q.lW,s.Ro],styles:[".header-dialog[_ngcontent-%COMP%]{margin:10px 0;width:100%;display:flex;align-items:center;justify-content:center;grid-gap:15px;gap:15px}form[_ngcontent-%COMP%]{width:450px;margin:20px auto}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}"]}),t})();const L=[{path:"",component:D},{path:"add-new-warranty",component:j},{path:"edit-warranty/:id",component:j}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=P.oAB({type:t}),t.\u0275inj=P.cJS({imports:[[d.Bz.forChild(L)],d.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=P.oAB({type:t}),t.\u0275inj=P.cJS({imports:[[o.ez,Y,a.q,i.Cq,r.u5,r.UX,c.o9,s.ef,l.JX]]}),t})()},33817:(t,e,n)=>{"use strict";n.d(e,{q:()=>o});var o=function(t){return t[t.UN_AUTHORIZED=401]="UN_AUTHORIZED",t[t.EXISTS_OR_NOT_ACCEPT=406]="EXISTS_OR_NOT_ACCEPT",t[t.NOT_FOUND=404]="NOT_FOUND",t[t.INPUT_VALIDATION_ERROR=422]="INPUT_VALIDATION_ERROR",t[t.DATABASE_ERROR=500]="DATABASE_ERROR",t}({})},80848:(t,e,n)=>{"use strict";n.d(e,{$:()=>r});var o=n(92935),a=n(35366),i=n(84369);let r=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}ngOnInit(){}onConfirm(){this.dialogRef.close(!0)}onDismiss(){this.dialogRef.close(!1)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.so),a.Y36(o.WI))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-confirm-dialog"]],decls:12,vars:2,consts:[[1,"dialog-container"],[1,"confirm-dialog-area"],[1,"info"],[1,"actions-around"],["mat-raised-button","","color","warn","type","button",1,"btn-round",3,"click"],["mat-raised-button","","color","primary","type","button",1,"btn-round",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h1"),a._uU(4),a.qZA(),a.TgZ(5,"p"),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"div",3),a.TgZ(8,"button",4),a.NdJ("click",function(){return e.onDismiss()}),a._uU(9," Cancel "),a.qZA(),a.TgZ(10,"button",5),a.NdJ("click",function(){return e.onConfirm()}),a._uU(11," Confirm "),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(4),a.Oqu(null==e.data?null:e.data.title),a.xp6(2),a.Oqu(null==e.data?null:e.data.message))},directives:[i.lW],styles:[".dialog-container[_ngcontent-%COMP%]{width:350px}.btn-round[_ngcontent-%COMP%]{margin:auto;width:150px;padding:5px;font-size:16px;border-radius:50px}.actions-around[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;margin-top:25px}.actions-around[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span{color:#fff}@media only screen and (max-device-width:599px){.dialog-container[_ngcontent-%COMP%]{width:95%;margin:0 auto}.btn-round[_ngcontent-%COMP%]{margin:auto;width:130px;padding:5px;font-size:14.5px;border-radius:50px}.btn-round[_ngcontent-%COMP%]:first-child{margin-right:10px}}"]}),t})()},45510:(t,e,n)=>{"use strict";n.d(e,{_:()=>l});var o=n(92935),a=n(35366),i=n(33464),r=n(99624),c=n(77307),s=n(84369);let l=(()=>{class t{constructor(t,e,n,o){this.dialogRef=t,this.router=e,this.sanitizer=o,this.sanitizedBlobUrl=this.sanitizer.bypassSecurityTrustUrl(n.blobUrl),this.blobUrl=n.blobUrl,this.backupType=n.backupType;const a=new Date;this.filename=`${this.backupType}_${a.toISOString()}.json`}ngOnInit(){}close(){this.dialogRef.close()}download(){this.dialogRef.close()}viewInBrowser(){window.open(this.blobUrl),this.dialogRef.close()}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(o.so),a.Y36(i.F0),a.Y36(o.WI),a.Y36(r.H7))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-download-json-dialog"]],decls:21,vars:2,consts:[[1,"dialog-container"],[1,"header"],[1,"dialog-body"],[1,"circle"],[1,"dialog-action"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary","type","button",3,"href","download","click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"h2"),a._uU(3,"Download Data as Json File"),a.qZA(),a.qZA(),a.TgZ(4,"div",2),a.TgZ(5,"div",3),a.TgZ(6,"mat-icon"),a._uU(7,"file_download"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(8,"div",4),a.TgZ(9,"button",5),a.NdJ("click",function(){return e.close()}),a.TgZ(10,"mat-icon"),a._uU(11,"close"),a.qZA(),a._uU(12," Cancel "),a.qZA(),a.TgZ(13,"a",6),a.NdJ("click",function(){return e.download()}),a.TgZ(14,"mat-icon"),a._uU(15,"download"),a.qZA(),a._uU(16," Download "),a.qZA(),a.TgZ(17,"button",7),a.NdJ("click",function(){return e.viewInBrowser()}),a.TgZ(18,"mat-icon"),a._uU(19,"visibility"),a.qZA(),a._uU(20," View "),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(13),a.Q6J("href",e.sanitizedBlobUrl,a.LSH)("download",e.filename))},directives:[c.Hw,s.lW,s.zs],styles:[".dialog-container[_ngcontent-%COMP%]{width:450px}.dialog-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{margin-bottom:16px}.dialog-container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-size:20px;color:#333;text-align:center;font-weight:600}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:100%;background:#1ee286;margin:0 auto;display:grid;place-items:center}.dialog-container[_ngcontent-%COMP%]   .dialog-body[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:56px;height:56px;font-size:56px;color:#00733d}.dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;grid-gap:12px;gap:12px}.dialog-container[_ngcontent-%COMP%]   .dialog-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:120px}"]}),t})()}}]);