(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[9310],{29310:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ProductAuthenticatorModule:()=>k});var i=n(31041),a=n(61116),o=n(35366),c=n(33464),r=n(99896),s=n(50927),g=n(56507),p=n(61613),h=n(31269);let d=(()=>{class t{constructor(){this.captchaText=""}setCaptchaText(t){this.captchaText=t}get captchaTxt(){return this.captchaText}resetCaptchaText(){this.captchaText=""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=n(13070),u=n(9550);const f=["captchaTxtView"];let m=(()=>{class t{constructor(t){this.bridgeService=t,this.allCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9]}ngOnInit(){this.getCaptcha()}getCaptcha(){for(let e=0;e<5;e++){const t=this.allCharacters[Math.floor(Math.random()*this.allCharacters.length)];this.captchaTxtView.nativeElement.innerText+=` ${t}`}const t=this.captchaTxtView.nativeElement.innerText.replace(/\s/g,"");this.bridgeService.setCaptchaText(t)}refreshCaptcha(){this.captchaTxtView.nativeElement.innerText="",this.getCaptcha()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(d))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-image-captcha"]],viewQuery:function(t,e){if(1&t&&o.Gf(f,7),2&t){let t;o.iGM(t=o.CRH())&&(e.captchaTxtView=t.first)}},decls:8,vars:0,consts:[[1,"wrapper"],[1,"captcha-area"],[1,"captcha-img"],["src","/assets/images/captcha/captcha-bg.jpg","alt",""],[1,"captcha"],["captchaTxtView",""],["type","button",1,"reload-btn",3,"click"],[1,"fas","fa-redo-alt"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._UZ(3,"img",3),o._UZ(4,"span",4,5),o.qZA(),o.TgZ(6,"button",6),o.NdJ("click",function(){return e.refreshCaptcha()}),o._UZ(7,"i",7),o.qZA(),o.qZA(),o.qZA())},styles:['.wrapper[_ngcontent-%COMP%]{width:100%}.wrapper[_ngcontent-%COMP%]   .captcha-area[_ngcontent-%COMP%]{display:flex;height:50px;align-items:center;justify-content:space-between}.captcha-area[_ngcontent-%COMP%]   .captcha-img[_ngcontent-%COMP%]{flex:1;height:100%;-webkit-user-select:none;user-select:none;background:#000;border-radius:5px;position:relative}.captcha-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-radius:5px;opacity:.95}.captcha-img[_ngcontent-%COMP%]   .captcha[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;width:100%;color:#fff;font-size:20px;text-align:center;letter-spacing:6px;transform:translate(-50%,-50%);text-shadow:0 0 2px #b1b1b1;font-family:"Noto Serif",serif}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none;border:none;color:#ef3688;cursor:pointer;background:#fff;border-radius:5px;transition:all .3s ease}.captcha-area[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]{width:40px;height:100%;font-size:18px}.captcha-area[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:transform .3s ease}.captcha-area[_ngcontent-%COMP%]   .reload-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]{transform:rotate(15deg)}']}),t})();var x=n(84369),C=n(41293);const _=["templateForm"];function Z(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",12),o.TgZ(1,"div",13),o.TgZ(2,"h3"),o._uU(3,"Please enter IMEI or S/N"),o.qZA(),o.qZA(),o.TgZ(4,"form",14,15),o.NdJ("ngSubmit",function(){return o.CHM(t),o.oxw().onSubmit()}),o.TgZ(6,"div",16),o.TgZ(7,"div",17),o.TgZ(8,"mat-form-field",18),o.TgZ(9,"mat-label"),o._uU(10,"IMEI or S/N"),o.qZA(),o._UZ(11,"input",19),o.TgZ(12,"mat-error"),o._uU(13,"This field is required"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(14,"div",20),o.TgZ(15,"mat-form-field",18),o.TgZ(16,"mat-label"),o._uU(17,"Please enter verification code"),o.qZA(),o._UZ(18,"input",21),o.TgZ(19,"mat-error"),o._uU(20,"This field is required"),o.qZA(),o.qZA(),o.TgZ(21,"div",22),o._UZ(22,"app-image-captcha"),o.qZA(),o.qZA(),o.TgZ(23,"div",23),o.TgZ(24,"button",24),o._uU(25,"Verify"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=o.oxw();o.xp6(4),o.Q6J("formGroup",t.dataForm),o.xp6(7),o.Q6J("minLength",5)("maxLength",20),o.xp6(7),o.Q6J("minLength",5)("maxLength",5)}}function b(t,e){1&t&&o._UZ(0,"i",34)}function M(t,e){1&t&&o._UZ(0,"i",35)}function v(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"Congratulation! you can be assured the product you have purchased is the official product"),o.qZA())}function O(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1,"Sorry! you can be assured the product you have purchased is not the official product"),o.qZA())}function P(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"div",12),o.TgZ(1,"div",13),o.TgZ(2,"h3"),o._uU(3,"This is a"),o.qZA(),o.qZA(),o.TgZ(4,"div",25),o.TgZ(5,"div",26),o.TgZ(6,"div",27),o.YNc(7,b,1,0,"i",28),o.YNc(8,M,1,0,"i",29),o.qZA(),o.TgZ(9,"div",30),o.YNc(10,v,2,0,"p",31),o.YNc(11,O,2,0,"p",31),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"div",32),o.TgZ(13,"button",33),o.NdJ("click",function(){return o.CHM(t),o.oxw().onBack()}),o._uU(14,"Back"),o.qZA(),o.qZA(),o.qZA()}if(2&t){const t=o.oxw();o.xp6(5),o.Q6J("ngClass",t.isAuthenticate?"success":"wrong"),o.xp6(2),o.Q6J("ngIf",t.isAuthenticate),o.xp6(1),o.Q6J("ngIf",!t.isAuthenticate),o.xp6(2),o.Q6J("ngIf",t.isAuthenticate),o.xp6(1),o.Q6J("ngIf",!t.isAuthenticate)}}const w=[{path:"",component:(()=>{class t{constructor(t,e,n,i,a,o,c,r){this.fb=t,this.activatedRoute=e,this.uiService=n,this.productAuthenticatorService=i,this.utilsService=a,this.storageService=o,this.spinner=c,this.bridgeService=r,this.autoSlug=!0,this.isLoading=!1,this.isAuthenticate=!1,this.showMessageContainer=!1}ngOnInit(){this.dataForm=this.fb.group({imei:[null,i.kI.required],verifyCode:[null,i.kI.required]})}onSubmit(){var t;this.dataForm.invalid?this.uiService.warn("Please complete all the required fields"):(null===(t=this.bridgeService)||void 0===t?void 0:t.captchaTxt)===this.dataForm.value.verifyCode.trim()?this.checkProductAuthenticate({imeiOrSn:this.dataForm.value.imei}):this.uiService.warn("Your given captcha input is invalid")}checkProductAuthenticate(t){this.spinner.show(),this.productAuthenticatorService.checkProductAuthenticate(t).subscribe(t=>{this.spinner.hide(),this.showMessageContainer=!0,this.isAuthenticate=t.success,this.templateForm.resetForm(),this.bridgeService.resetCaptchaText()},t=>{this.spinner.hide(),this.uiService.warn("This imei or sn not exists")})}onBack(){this.showMessageContainer=!1,this.isAuthenticate=!1}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(i.qu),o.Y36(c.gz),o.Y36(r.F),o.Y36(s.s),o.Y36(g.F),o.Y36(p.V),o.Y36(h.t2),o.Y36(d))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-product-authenticator"]],viewQuery:function(t,e){if(1&t&&o.Gf(_,5),2&t){let t;o.iGM(t=o.CRH())&&(e.templateForm=t.first)}},decls:21,vars:2,consts:[[1,"product-authentication-area"],[1,"authentication-main-area"],[1,"authentication-main"],[1,"authentication-title"],[1,"authentication-card"],["class","authentication-left-side",4,"ngIf"],[1,"authentication-right-side"],[1,"right-side-title"],[1,"right-side-details"],[1,"method-1"],[1,"imei-img"],["src","/assets/images/imei/imei-label.png","alt",""],[1,"authentication-left-side"],[1,"left-side-title"],["autocomplete","off",3,"formGroup","ngSubmit"],["templateForm","ngForm"],[1,"form"],[1,"input-1"],["appearance","outline"],["matInput","","placeholder","IMEI or S/N","value","","formControlName","imei","required","",3,"minLength","maxLength"],[1,"input-2"],["matInput","","placeholder","Please enter verification code","formControlName","verifyCode","required","",3,"minLength","maxLength"],[1,"captcha-view"],[1,"sub-btn"],["mat-button","","type","submit"],[1,"message-view"],[1,"mgs-card",3,"ngClass"],[1,"left-icon"],["class","fas fa-check-circle",4,"ngIf"],["class","fas fa-times-circle",4,"ngIf"],[1,"right-txt"],[4,"ngIf"],[1,"sub-btn",2,"margin-top","12px"],["mat-button","","type","button",3,"click"],[1,"fas","fa-check-circle"],[1,"fas","fa-times-circle"]],template:function(t,e){1&t&&(o.TgZ(0,"section",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"h3"),o._uU(5,"Verify your phone purchase"),o.qZA(),o.qZA(),o.TgZ(6,"div",4),o.YNc(7,Z,26,5,"div",5),o.YNc(8,P,15,5,"div",5),o.TgZ(9,"div",6),o.TgZ(10,"div",7),o.TgZ(11,"h3"),o._uU(12,"Where is my IMEI and S/N?"),o.qZA(),o.qZA(),o.TgZ(13,"div",8),o.TgZ(14,"div",9),o.TgZ(15,"p"),o._uU(16,"Method 1"),o.qZA(),o.TgZ(17,"p"),o._uU(18,"Find the code sticker on the back of device, or packaging box"),o.qZA(),o.qZA(),o.TgZ(19,"div",10),o._UZ(20,"img",11),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(7),o.Q6J("ngIf",!e.showMessageContainer),o.xp6(1),o.Q6J("ngIf",e.showMessageContainer))},directives:[a.O5,i._Y,i.JL,i.sg,l.KE,l.hX,u.Nt,i.Fj,i.JJ,i.u,i.Q7,l.TO,m,x.lW,a.mk,C.oO],styles:[".product-authentication-area[_ngcontent-%COMP%]{display:block;width:100%;padding:20px;box-sizing:border-box;margin-top:25vh;margin-bottom:5vh}.authentication-main-area[_ngcontent-%COMP%]{display:block;max-width:1050px;width:100%;margin:auto}.authentication-title[_ngcontent-%COMP%]{display:block;margin-bottom:25px}.authentication-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#454545;font-weight:600;font-style:normal;font-family:Open Sans,sans-serif;display:block;font-size:20px;line-height:28px}.authentication-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;padding:30px;box-sizing:border-box;box-shadow:3px 3px 6px #ddd,-3px -3px 6px #ddd;min-height:350px;place-items:center}.authentication-card[_ngcontent-%COMP%]   .authentication-left-side[_ngcontent-%COMP%]{width:100%}.left-side-title[_ngcontent-%COMP%], .right-side-title[_ngcontent-%COMP%]{display:block;margin-bottom:20px}.left-side-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .right-side-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#454545;font-weight:600;font-style:normal;font-family:Open Sans,sans-serif;display:block;font-size:17px;line-height:25px}.form[_ngcontent-%COMP%]{display:block;width:100%;height:auto}.input-2[_ngcontent-%COMP%]{display:flex;grid-gap:5px;gap:5px}.input-2[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.input-2[_ngcontent-%COMP%]   .captcha-view[_ngcontent-%COMP%]{width:200px;margin-top:5px}.form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{display:block;width:100%;margin-bottom:8px}.form[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-style:normal;font-weight:500} .form .mat-form-field-appearance-outline .mat-form-field-outline-thick{color:#be0101}.sub-btn[_ngcontent-%COMP%]{margin-top:10px}.sub-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;color:#fff;background-color:#be0101;font-family:Open Sans,sans-serif;font-style:normal;max-width:150px;width:100%;padding:5px 12px;box-sizing:border-box;font-size:15px}.message-view[_ngcontent-%COMP%]{width:100%}.message-view[_ngcontent-%COMP%]   .mgs-card[_ngcontent-%COMP%]{width:92%;padding:20px 12px;display:flex;flex-direction:row;grid-gap:8px;gap:8px;align-items:center}.message-view[_ngcontent-%COMP%]   .mgs-card.success[_ngcontent-%COMP%]{border:1px solid #02a802;color:#02a802}.message-view[_ngcontent-%COMP%]   .mgs-card.wrong[_ngcontent-%COMP%]{border:1px solid #c9080f;color:#c9080f}.message-view[_ngcontent-%COMP%]   .mgs-card[_ngcontent-%COMP%]   .left-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:36px}.message-view[_ngcontent-%COMP%]   .mgs-card[_ngcontent-%COMP%]   .right-txt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#3c3c3c;font-family:Open Sans,sans-serif;font-size:15px;font-weight:600}.authentication-right-side[_ngcontent-%COMP%]{padding-left:30px;border-left:1px solid #eee}.right-side-details[_ngcontent-%COMP%]{display:block;width:100%}.right-side-details[_ngcontent-%COMP%]   .imei-img[_ngcontent-%COMP%]{width:160px}.right-side-details[_ngcontent-%COMP%]   .imei-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.method-1[_ngcontent-%COMP%], .method-2[_ngcontent-%COMP%]{margin-bottom:15px}.right-side-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#000;font-family:Open Sans,sans-serif;font-style:normal;font-weight:500;font-size:15px;line-height:24px;margin-bottom:8px}@media (max-width:830px){.authentication-card[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}.authentication-right-side[_ngcontent-%COMP%]{border:none;border-top:1px solid #eee;padding:20px 0 0}}@media only screen and (max-width:599px){.input-2[_ngcontent-%COMP%]{flex-direction:column-reverse;margin-top:-8px}}"]}),t})()}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[c.Bz.forChild(w)],c.Bz]}),t})();var A=n(56861),q=n(77154);let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez]]}),t})(),k=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.ez,T,A.q,i.UX,q.o9,y]]}),t})()}}]);