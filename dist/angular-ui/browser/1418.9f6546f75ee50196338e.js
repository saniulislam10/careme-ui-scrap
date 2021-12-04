(self.webpackChunkangular_ui=self.webpackChunkangular_ui||[]).push([[1418],{61418:(n,t,o)=>{"use strict";o.r(t),o.d(t,{LoginModule:()=>b});var e=o(61116),i=o(33464),g=o(31041),r=o(35366),l=o(19195),a=o(31269),s=o(56507),c=o(99896),p=o(41293);function d(n,t){1&n&&(r.TgZ(0,"span",29),r._uU(1,"This field is required"),r.qZA())}function f(n,t){1&n&&(r.TgZ(0,"span",29),r._uU(1,"This field is required"),r.qZA())}const u=[{path:"",component:(()=>{class n{constructor(n,t,o,e,i){this.userService=n,this.spinner=t,this.fb=o,this.utilsService=e,this.uiService=i,this.isHiddenPass=!0}ngOnInit(){this.spinner.hide(),this.formData=this.fb.group({username:[null,g.kI.required],password:[null,g.kI.required]})}onSubmitForm(){return this.formData.invalid?(this.username.markAsTouched({onlySelf:!0}),void this.password.markAsTouched({onlySelf:!0})):this.utilsService.checkUserLoginInput(this.formData.value.username)?void(this.formData.value.password.length<6?this.uiService.warn("Password must be at lest 6 characters!"):(this.spinner.show(),this.userService.userLogin(this.formData.value))):(this.username.setErrors({invalid:!0}),void this.uiService.warn("Please enter a valid email or phone number"))}get username(){return this.formData.get("username")}get password(){return this.formData.get("password")}}return n.\u0275fac=function(t){return new(t||n)(r.Y36(l.K),r.Y36(a.t2),r.Y36(g.qu),r.Y36(s.F),r.Y36(c.F))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-login"]],decls:55,vars:6,consts:[[1,"login-area"],[1,"container"],[1,"login-details-start"],[1,"login-title","clearfix"],[1,"login-title-left"],[1,"login-title-right"],["routerLink","/registration"],[1,"login-details"],[1,"login-form"],[3,"formGroup","ngSubmit"],[1,"login-email"],["formControlName","username","type","tel","name","Phone No","placeholder","Please enter your phone number"],["class","invalid",4,"ngIf"],[1,"login-pass"],["formControlName","password","placeholder","Enter your password",3,"type"],[1,"view",3,"click"],[3,"ngClass"],[1,"forget"],["routerLink","/password-recovery"],[1,"login-btn"],["type","submit"],[1,"other-login"],[1,"other-login-details"],[1,"login-facebook",3,"click"],[1,"fab","fa-facebook-f"],[1,"login-google",3,"click"],[1,"fab","fa-google-plus-g"],["bdColor","rgba(0,0,0,0.25)","size","medium","color","#fff","type","ball-clip-rotate",2,"width","100vw","height","100vh",3,"fullScreen"],[2,"color","white"],[1,"invalid"]],template:function(n,t){1&n&&(r.TgZ(0,"section",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"div",4),r.TgZ(5,"h2"),r._uU(6,"Welcome to Esquire! Please login"),r.qZA(),r.qZA(),r.TgZ(7,"div",5),r.TgZ(8,"h3"),r._uU(9,"New member? "),r.TgZ(10,"a",6),r._uU(11,"Register now"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(12,"div",7),r.TgZ(13,"div",8),r.TgZ(14,"form",9),r.NdJ("ngSubmit",function(){return t.onSubmitForm()}),r.TgZ(15,"div",10),r.TgZ(16,"label"),r._uU(17,"Phone Number "),r.TgZ(18,"sup"),r._uU(19,"*"),r.qZA(),r.qZA(),r._UZ(20,"input",11),r.YNc(21,d,2,0,"span",12),r.qZA(),r.TgZ(22,"div",13),r.TgZ(23,"label"),r._uU(24,"Password "),r.TgZ(25,"sup"),r._uU(26,"*"),r.qZA(),r.qZA(),r._UZ(27,"input",14),r.TgZ(28,"span",15),r.NdJ("click",function(){return t.isHiddenPass=!t.isHiddenPass}),r._UZ(29,"i",16),r.qZA(),r.YNc(30,f,2,0,"span",12),r.qZA(),r.TgZ(31,"div",17),r.TgZ(32,"a",18),r._uU(33,"Forget password?"),r.qZA(),r.qZA(),r.TgZ(34,"div",19),r.TgZ(35,"button",20),r._uU(36,"login"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(37,"div",21),r.TgZ(38,"div",22),r.TgZ(39,"h3"),r._uU(40,"Or, login with"),r.qZA(),r.TgZ(41,"ul"),r.TgZ(42,"li"),r.TgZ(43,"a",23),r.NdJ("click",function(){return t.userService.FacebookAuth()}),r.TgZ(44,"span"),r._UZ(45,"i",24),r.qZA(),r._uU(46,"Facebook"),r.qZA(),r.qZA(),r.TgZ(47,"li"),r.TgZ(48,"a",25),r.NdJ("click",function(){return t.userService.GoogleAuth()}),r.TgZ(49,"span"),r._UZ(50,"i",26),r.qZA(),r._uU(51,"Google"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.TgZ(52,"ngx-spinner",27),r.TgZ(53,"p",28),r._uU(54," Loading... "),r.qZA(),r.qZA()),2&n&&(r.xp6(14),r.Q6J("formGroup",t.formData),r.xp6(7),r.Q6J("ngIf",t.username.touched&&t.username.invalid),r.xp6(6),r.Q6J("type",t.isHiddenPass?"password":"text"),r.xp6(2),r.Q6J("ngClass",t.isHiddenPass?"fa fa-eye":"fas fa-eye-slash"),r.xp6(1),r.Q6J("ngIf",t.password.touched&&t.password.invalid),r.xp6(22),r.Q6J("fullScreen",!0))},directives:[i.yS,g._Y,g.JL,g.sg,g.Fj,g.JJ,g.u,e.O5,e.mk,p.oO,a.Ro],styles:[".login-area[_ngcontent-%COMP%]{display:block;width:100%;box-sizing:border-box;background-color:#fff;padding-top:50px;margin-bottom:10vh}form[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{color:#d51a32;font-family:Open Sans,sans-serif;padding:8px 2px}.login-details-start[_ngcontent-%COMP%]{display:block;width:85%;margin:auto}.login-title[_ngcontent-%COMP%]{margin-bottom:50px;box-sizing:border-box}.login-title-left[_ngcontent-%COMP%]{float:left;width:60%}.login-title-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:500;font-size:24px;display:block;color:#747475;font-family:Open Sans,sans-serif;font-style:normal;line-height:22px;margin-bottom:5px;letter-spacing:.5px}.login-title-right[_ngcontent-%COMP%]{float:right;width:40%;text-align:right}.login-title-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-style:normal;font-size:16px;color:#000;display:block;line-height:20px}.login-title-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .login-title-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:400;font-family:Open Sans,sans-serif}.login-title-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#06b487;font-size:15px;display:inline-block}.login-details[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);width:100%;margin:0 auto;background:#fff;padding:45px 24px;box-shadow:0 4px 8px 0 #0003}.login-form[_ngcontent-%COMP%]{display:block;width:95%}.login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:block;width:100%;height:auto;box-sizing:border-box}.login-email[_ngcontent-%COMP%]{margin-bottom:30px;width:100%}.login-email[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#747475;font-weight:400;margin-bottom:10px;font-size:15px}.login-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-email[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;display:block;font-style:normal}.login-email[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:auto;box-sizing:border-box;border:1px solid #0000001a;padding:12px 15px;outline:none;font-size:14px;color:#00000080}input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #d51a32!important}.login-pass[_ngcontent-%COMP%]{margin-bottom:30px;width:100%;position:relative}.login-pass[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{color:#707171;font-style:normal;font-size:16px;position:absolute;top:40px;right:0;display:flex;align-items:center;justify-content:center;padding:5px 10px;box-sizing:border-box;cursor:pointer}.login-pass[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#747475;font-weight:400;margin-bottom:10px;font-size:15px}.login-pass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-pass[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;display:block;font-style:normal}.login-pass[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:auto;box-sizing:border-box;border:1px solid #0000001a;padding:12px 15px;outline:none;font-size:14px;color:#00000080}.forget[_ngcontent-%COMP%]{text-align:end;margin-top:-16px;margin-bottom:10px}.forget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#eb3e32;transition:color .2s}.forget[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#e71a0b}.login-btn[_ngcontent-%COMP%]{text-align:center}.login-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{max-width:140px;width:100%;color:#fff;font-weight:400;font-family:Open Sans,sans-serif;background-color:#06b487;text-align:center;padding:12px 5px;box-sizing:border-box;outline:none;border:1px solid #06b487;text-transform:uppercase;margin:auto;font-style:normal;font-size:16px;cursor:pointer;transition:all .3s linear}.login-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#027859}.other-login[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center;justify-content:center}.other-login-details[_ngcontent-%COMP%], .other-login[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{width:100%;text-align:center}.other-login[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:15px;color:#747475;font-family:Rubik,sans-serif;font-style:normal;display:block;font-weight:400;padding-bottom:30px}.other-login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.other-login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin-right:15px;margin-bottom:10px}.other-login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-right:0}.login-facebook[_ngcontent-%COMP%]{border:1px solid #3b5998;padding:9px 30px;box-sizing:border-box;font-style:normal;font-size:16px;font-weight:500;text-transform:capitalize;font-family:Open Sans,sans-serif;background-color:#fff;transform:skew(-15deg,0deg);box-shadow:3px 3px 5px #0000004d;cursor:pointer}.login-facebook[_ngcontent-%COMP%], .login-facebook[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .login-facebook[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#3b5998;transition:all .3s linear}.login-facebook[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin-right:10px}.login-facebook[_ngcontent-%COMP%]:hover{background-color:#3b5998;color:#fff}.login-facebook[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .login-facebook[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#fff}.login-google[_ngcontent-%COMP%]{border:1px solid #eb3e32;padding:9px 30px;box-sizing:border-box;font-style:normal;font-size:16px;font-weight:500;text-transform:capitalize;font-family:Open Sans,sans-serif;background-color:#fff;transform:skew(-15deg,0deg);box-shadow:3px 3px 5px #0000004d;cursor:pointer}.login-google[_ngcontent-%COMP%], .login-google[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .login-google[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#eb3e32;transition:all .3s linear}.login-google[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin-right:10px}.login-google[_ngcontent-%COMP%]:hover{background-color:#eb3e32;color:#fff}.login-google[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], .login-google[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#fff}.login-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:#06b487}@media (max-width:998px){.login-details[_ngcontent-%COMP%]{width:100%}}@media (max-width:925px){.login-details-start[_ngcontent-%COMP%]{width:95%}}@media (max-width:850px){.login-form[_ngcontent-%COMP%]{margin-bottom:30px;width:90%}.login-details[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);margin-bottom:30vh}.other-login[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:10px}}@media (max-width:450px){.login-title-left[_ngcontent-%COMP%], .login-title-right[_ngcontent-%COMP%]{float:none;width:100%;margin-bottom:20px}.login-title-right[_ngcontent-%COMP%]{text-align:left}.login-form[_ngcontent-%COMP%]{width:100%}.login-area[_ngcontent-%COMP%]{margin-bottom:0}.login-details[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr);margin-bottom:20vh}}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[i.Bz.forChild(u)],i.Bz]}),n})();var m=o(56861),_=o(75425);let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[e.ez,h,m.q,g.u5,_.m,g.UX]]}),n})()}}]);