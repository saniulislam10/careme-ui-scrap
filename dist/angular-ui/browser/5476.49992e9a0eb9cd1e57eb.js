(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[5476],{55476:(t,n,e)=>{"use strict";e.r(n),e.d(n,{InstallationRepairModule:()=>y});var i=e(61116),o=e(33464),a=e(35366),l=e(32757),r=e(68183),p=e(31269),s=e(28070),c=e(9046);function g(t,n){if(1&t&&(a.ynx(0),a._UZ(1,"app-product-card-one",13),a.BQk()),2&t){const t=n.$implicit;a.xp6(1),a.Q6J("product",t)}}function d(t,n){if(1&t&&(a.TgZ(0,"div",8),a.TgZ(1,"div",9),a.TgZ(2,"h2"),a._uU(3),a.qZA(),a._UZ(4,"div",10),a.qZA(),a.TgZ(5,"div",11),a.YNc(6,g,2,1,"ng-container",12),a.qZA(),a.qZA()),2&t){const t=n.$implicit;a.xp6(3),a.Oqu(null==t?null:t.name),a.xp6(3),a.Q6J("ngForOf",null==t?null:t.products)}}const f=function(t){return{background:t}},h=[{path:":slug",component:(()=>{class t{constructor(t,n,e,i){this.activatedRoute=t,this.installationRepairService=n,this.installationRepairTypeService=e,this.spinner=i,this.installationRepairTypeSlug=null,this.installationRepairs=[]}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{this.installationRepairTypeSlug=t.get("slug"),this.getSingleInstallationRepairTypeBySlug(),this.getInstallationRepairBySlug()})}getInstallationRepairBySlug(){this.spinner.show(),this.installationRepairService.getInstallationRepairBySlug(this.installationRepairTypeSlug).subscribe(t=>{this.installationRepairs=t.data,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}getSingleInstallationRepairTypeBySlug(){this.installationRepairTypeService.getSingleInstallationRepairTypeBySlug(this.installationRepairTypeSlug).subscribe(t=>{this.installationRepairType=t.data},t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(o.gz),a.Y36(l.T),a.Y36(r.o),a.Y36(p.t2))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-installation-repair"]],decls:13,vars:9,consts:[[1,"offer-section-1"],[1,"offer-title",3,"ngStyle"],[1,"section1-container"],[1,"description"],[1,"description",3,"innerHTML"],[1,"container-fluid"],[1,"section-2","section-deal-of-day","section-md"],["class","container",4,"ngFor","ngForOf"],[1,"container"],[1,"deal-title"],[1,"line"],[1,"deal-on-play-view"],[4,"ngFor","ngForOf"],[3,"product"]],template:function(t,n){1&t&&(a.TgZ(0,"section",0),a.TgZ(1,"div",1),a.TgZ(2,"h2"),a._uU(3),a.qZA(),a.qZA(),a.TgZ(4,"div",2),a.TgZ(5,"div",3),a.TgZ(6,"p"),a._uU(7),a.qZA(),a.qZA(),a._UZ(8,"div",4),a.ALo(9,"safeHtmlCustom"),a.qZA(),a.qZA(),a.TgZ(10,"div",5),a.TgZ(11,"section",6),a.YNc(12,d,7,2,"div",7),a.qZA(),a.qZA()),2&t&&(a.xp6(1),a.Q6J("ngStyle",a.VKq(7,f,"url("+(null==n.installationRepairType?null:n.installationRepairType.image)+") no-repeat 0 0 / cover")),a.xp6(2),a.Oqu(null==n.installationRepairType?null:n.installationRepairType.title),a.xp6(4),a.Oqu(null==n.installationRepairType?null:n.installationRepairType.shortDescription),a.xp6(1),a.Q6J("innerHTML",a.lcZ(9,5,null==n.installationRepairType?null:n.installationRepairType.description),a.oJD),a.xp6(4),a.Q6J("ngForOf",n.installationRepairs))},directives:[i.PC,i.sg,s.j],pipes:[c.C],styles:['.section-2[_ngcontent-%COMP%]{box-sizing:border-box;margin-bottom:5vh;background-color:#fff}.deal-title[_ngcontent-%COMP%]{margin-bottom:3vh;box-sizing:border-box;padding:0 12px}.deal-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#000;font-style:normal;font-family:Open Sans,sans-serif;font-size:23px;font-weight:600;line-height:25px}.deal-title[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:1px;background:#e8e8e8;margin:12px 0 0}.container-fluid[_ngcontent-%COMP%]{padding:0;min-height:70vh}.container[_ngcontent-%COMP%]{margin-bottom:30px}@media (min-width:960px) and (max-width:1440px){.container-fluid[_ngcontent-%COMP%], .section1-container[_ngcontent-%COMP%]{width:88%!important;margin:auto}}.deal-of-the-day-view[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:15px 8px}.deal-of-the-day-view[_ngcontent-%COMP%]   .deal-of-the-card[_ngcontent-%COMP%]{border:1px solid #f4f4f4;width:100%}.deal-on-play-view[_ngcontent-%COMP%]{width:100%;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:15px 8px}@media (min-width:1410px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(6,1fr)}}@media (max-width:1150px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)!important}}@media (max-width:800px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)!important}}@media (max-width:600px){.deal-of-the-day-view[_ngcontent-%COMP%], .deal-on-play-view[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)!important}}.offer-section-1[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;margin-bottom:10vh}.offer-title[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;min-height:370px;background-position:50%;background-attachment:scroll;position:relative;z-index:10;margin-bottom:20px;text-align:center}.offer-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-family:Poppins,sans-serif;text-transform:capitalize!important;font-size:40px;display:block;line-height:50px;text-shadow:0 4px 4px #00000080;text-align:center}.offer-title[_ngcontent-%COMP%]:after{content:"";display:block;background-color:#0006;position:absolute;top:0;left:0;height:100%;width:100%;z-index:-10}.description[_ngcontent-%COMP%]{display:block;width:100%;text-align:center}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Open Sans,sans-serif;font-weight:600;font-style:normal;font-size:15px;display:block;line-height:28px}@media (max-width:600px){.offer-section-1[_ngcontent-%COMP%]{margin-bottom:6vh}.offer-title[_ngcontent-%COMP%]{min-height:320px}.offer-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px;line-height:45px}.description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:26px}}']}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[o.Bz.forChild(h)],o.Bz]}),t})();var m=e(42920),x=e(12231);let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[i.ez,u,m.l,x.D]]}),t})()}}]);