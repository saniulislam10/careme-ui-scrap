(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[8474],{18474:(t,n,i)=>{"use strict";i.r(n),i.d(n,{BlogModule:()=>b});var o=i(61116),e=i(33464),s=i(35366),l=i(71445);const c=function(t){return["/blog/",t]};function a(t,n){if(1&t&&(s.TgZ(0,"div",4),s.TgZ(1,"div",5),s._UZ(2,"img",6),s.qZA(),s.TgZ(3,"div",7),s.TgZ(4,"h2"),s._uU(5),s.qZA(),s.qZA(),s.TgZ(6,"div",8),s.TgZ(7,"p"),s._uU(8),s.qZA(),s.qZA(),s.TgZ(9,"div",9),s.TgZ(10,"a",10),s._uU(11,"Read Article"),s.qZA(),s.qZA(),s.qZA()),2&t){const t=n.$implicit;s.Q6J("routerLink",s.VKq(5,c,null==t?null:t.slug)),s.xp6(2),s.Q6J("src",t.image?t.image:"/assets/images/placeholder/test.png",s.LSH),s.xp6(3),s.Oqu(t.title),s.xp6(3),s.Oqu(t.shortDescription),s.xp6(2),s.Q6J("routerLink",s.VKq(7,c,null==t?null:t.slug))}}let g=(()=>{class t{constructor(t){this.blogService=t,this.allBlogs=[]}ngOnInit(){this.getAllBlogs()}getAllBlogs(){this.blogService.getAllBlogs().subscribe(t=>{this.allBlogs=t.data},t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(l.Z))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-blog"]],decls:4,vars:1,consts:[[1,"section-2","blog-container"],[1,"container"],[1,"section2-main"],["class","card",3,"routerLink",4,"ngFor","ngForOf"],[1,"card",3,"routerLink"],[1,"card-img"],["alt","bussiness-english.jpg",3,"src"],[1,"card-title"],[1,"card-description"],[1,"card-btn"],[3,"routerLink"]],template:function(t,n){1&t&&(s.TgZ(0,"section",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.YNc(3,a,12,9,"div",3),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(3),s.Q6J("ngForOf",n.allBlogs))},directives:[o.sg,e.rH,e.yS],styles:[".blog-container[_ngcontent-%COMP%]{width:100%;max-width:559px;margin:0 auto;padding:36px 0}.section-2[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;margin-bottom:40px}.section2-main[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:auto;grid-gap:20px 15px}.card[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box}.card-img[_ngcontent-%COMP%]{display:block;margin-bottom:10px;border-radius:7px;overflow:hidden}.card-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;min-height:200px;border-radius:6px;transition:all .3s linear}.card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.card-title[_ngcontent-%COMP%]{display:block;margin-bottom:6px}.card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-style:normal;font-family:Poppins,sans-serif;font-size:20px;display:block;line-height:27px;color:#020554}.card-description[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.card-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#757575;font-style:normal;font-family:Poppins,sans-serif;font-size:14.6px;display:block;line-height:20px;font-weight:400}.card-btn[_ngcontent-%COMP%]{display:block;width:100%}.card-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#fff;font-family:Poppins,sans-serif;font-size:16px;display:block;max-width:140px;padding:6px 0;text-align:center;color:#020554;text-transform:capitalize;font-weight:500;border-radius:5px;transition:all .1s linear;border:2px solid #7029fa}.card-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#7029fa;color:#fff;box-shadow:inset 0 2px 3px 0 #00000080}@media (max-width:1150px){.section2-main[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width:900px){.section2-main[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width:600px){.section2-main[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}"]}),t})();var r=i(31269),p=i(9046);const d=[{path:"",component:g},{path:":slug",component:(()=>{class t{constructor(t,n,i){this.blogService=t,this.activatedRoute=n,this.spinner=i,this.blogSlug=null}ngOnInit(){this.activatedRoute.paramMap.subscribe(t=>{this.blogSlug=t.get("slug"),this.getSingleBlogBySlug()})}getSingleBlogBySlug(){this.spinner.show(),this.blogService.getSingleBlogBySlug(this.blogSlug).subscribe(t=>{this.blog=t.data,this.spinner.hide()},t=>{this.spinner.hide(),console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(l.Z),s.Y36(e.gz),s.Y36(r.t2))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-blog-details"]],decls:11,vars:5,consts:[[1,"section-1","blog-container"],[1,"container"],[1,"blog-img"],["alt","",3,"src"],[1,"section1-main"],[1,"section1-title"],[1,"section1-description",3,"innerHTML"],[1,"body"]],template:function(t,n){1&t&&(s.TgZ(0,"section",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s._UZ(3,"img",3),s.qZA(),s.TgZ(4,"div",4),s.TgZ(5,"div",5),s.TgZ(6,"h2"),s._uU(7),s.qZA(),s.qZA(),s._UZ(8,"div",6),s.ALo(9,"safeHtmlCustom"),s.qZA(),s.qZA(),s.qZA(),s._UZ(10,"div",7)),2&t&&(s.xp6(3),s.Q6J("src",null==n.blog?null:n.blog.image,s.LSH),s.xp6(4),s.Oqu(n.blog.title),s.xp6(1),s.Q6J("innerHTML",s.lcZ(9,3,null==n.blog?null:n.blog.body),s.oJD))},pipes:[p.C],styles:['.blog-container[_ngcontent-%COMP%]{max-width:1000px;width:100%;margin:25vh auto auto}.blog-img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;margin-bottom:30px}.blog-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{min-height:280px;width:100%;max-height:450px;height:100%}.section-1[_ngcontent-%COMP%]{width:100%;min-height:500px;height:100%;box-sizing:border-box;background-size:cover;background-attachment:scroll;background-repeat:no-repeat;max-height:100%;background-position:50%;display:flex;align-items:center;justify-content:flex-start;position:relative;z-index:10;margin-bottom:30px}.section-1[_ngcontent-%COMP%]:after{content:"";position:absolute;width:100%;height:100%;top:0;background:linear-gradient(0deg,#ffffffb3,#ffffff80,#0000,#0000);z-index:-10}.section1-main[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box}.section1-title[_ngcontent-%COMP%]{display:block;margin-bottom:15px}.section1-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;font-style:normal;font-family:Poppins,sans-serif;font-size:43px;display:block;line-height:55px;color:#020554}.section1-description[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box;margin-bottom:30px}.section1-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#757575;font-style:normal;font-family:Poppins,sans-serif;font-size:16px;display:block;line-height:24px;font-weight:400}.section1-btn[_ngcontent-%COMP%]{display:block;width:100%}.section1-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#7029fa;font-family:Poppins,sans-serif;font-size:18px;display:block;max-width:180px;padding:12px 0;text-align:center;color:#fff;text-transform:capitalize;font-weight:500;border-radius:5px;box-shadow:inset 0 2px 3px 0 #00000080;transition:all .1s linear;border:1px solid #7029fa}.section1-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transform:scale(1.03)}@media (max-width:500px){.section1-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px;line-height:45px}}@media (max-width:400px){.section1-title[_ngcontent-%COMP%]{margin-bottom:10px}.section1-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px;line-height:37px}.section1-description[_ngcontent-%COMP%]{margin-bottom:20px}.section1-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;line-height:22px}.section1-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:16px}}']}),t})()}];let h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[e.Bz.forChild(d)],e.Bz]}),t})();var m=i(12231);let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,h,m.D]]}),t})()}}]);