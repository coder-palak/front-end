"use strict";(self.webpackChunkshoe=self.webpackChunkshoe||[]).push([[580],{580:(E,P,n)=>{n.r(P),n.d(P,{AdminModule:()=>g});var v=n(6895),s=n(9132),t=n(4650),I=n(1135),x=n(4614),O=n(8811);class d{constructor(o,a,l){this.router=o,this.baseService=a,this.afAuth=l,this.loginState=new I.X(!1)}signIn(o){return this.baseService.post("login/admin",o)}setLoginState(o){this.loginState.next(o)}getLoginState(){return this.loginState.asObservable()}getState(){return!!localStorage.getItem("ad_token")}setStorage(o){localStorage.setItem("ad_token",o.data.token.token),this.router.navigate(["/admin/dashboard"])}}d.\u0275fac=function(o){return new(o||d)(t.LFG(s.F0),t.LFG(x.b),t.LFG(O.zQ))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});var c=n(3267),u=n(4633);const S=function(e){return[e]};function A(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"a",2),t.NdJ("click",function(){const k=t.CHM(a).$implicit,w=t.oxw();return t.KtG(w.activeLink=k.link)}),t.TgZ(1,"span",3),t._uU(2),t.qZA()()}if(2&e){const a=o.$implicit;t.Q6J("routerLink",t.VKq(2,S,a.link)),t.xp6(2),t.hij(" ",a.name," ")}}class r{constructor(){this.showMenu=!1,this.links=[{name:"Dashboard",link:"dashboard"},{name:"Products",link:"products"},{name:"Customers",link:"customers"},{name:"Orders",link:"orders"},{name:"WebSite Setup",link:"website-home"},{name:"Marketing",link:"marketing"},{name:"Uploaded Files",link:"uploaded-files"},{name:"Settings",link:"settings"}]}ngOnInit(){}}r.\u0275fac=function(o){return new(o||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-side-nav"]],decls:2,vars:1,consts:[["color","primary"],["mat-list-item","","class","side_nav","routerLinkActive","active mat-elevation-z5",3,"routerLink","click",4,"ngFor","ngForOf"],["mat-list-item","","routerLinkActive","active mat-elevation-z5",1,"side_nav",3,"routerLink","click"],[1,"text"]],template:function(o,a){1&o&&(t.TgZ(0,"mat-nav-list",0),t.YNc(1,A,3,4,"a",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngForOf",a.links))},dependencies:[v.sg,s.rH,s.Od,u.Hk,u.Tg],styles:[".side_nav.active[_ngcontent-%COMP%]{background-color:#111827;color:#fff!important}.side_nav.active[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#fff!important}"]});class m{constructor(o,a){this.router=a,this.sideNavOpened=!0,this.sideNavMode="side",localStorage.getItem("ad_token")&&o.setLoginState(!0)}ngOnInit(){}}m.\u0275fac=function(o){return new(o||m)(t.Y36(d),t.Y36(s.F0))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-admin"]],decls:7,vars:2,consts:[["id","admin",1,"example-container"],[1,"sidenav","mat-elevation-z4",3,"mode","opened"],["snav",""],["fullscreen","",1,"main"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"mat-sidenav-container")(2,"mat-sidenav",1,2),t._UZ(4,"app-side-nav"),t.qZA(),t.TgZ(5,"mat-sidenav-content",3),t._UZ(6,"router-outlet"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("mode",a.sideNavMode)("opened",a.sideNavOpened))},dependencies:[s.lC,c.JX,c.TM,c.Rh,r],styles:["button[_ngcontent-%COMP%]{border-radius:50%}footer[_ngcontent-%COMP%]{color:#fff}li[_ngcontent-%COMP%]{float:left;text-align:center}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;text-align:center;padding:16px;text-decoration:none;color:#000;font-size:larger}p[_ngcontent-%COMP%]{color:#000;font-size:x-small}ul[_ngcontent-%COMP%]{list-style:none}li[_ngcontent-%COMP%]{display:inline-block}svg[_ngcontent-%COMP%]{width:96px}@media (max-width: 800px){li[_ngcontent-%COMP%]{display:contents}}.content[_ngcontent-%COMP%]{width:100%;min-height:100vh;position:relative;overflow-x:hidden}.scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;opacity:0;transition:all .2s ease-in-out}.show-scroll[_ngcontent-%COMP%]{opacity:1}.transition[_ngcontent-%COMP%]{transition:opacity 1s ease-in-out,margin-left .5s ease-in-out;margin-left:1500px;width:200px;opacity:0}.transition[_ngcontent-%COMP%]{opacity:100;margin-left:0}.z-in[_ngcontent-%COMP%]{z-index:0}.layout-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;inset:0}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]{flex:1;background:#fafafa}.layout-container[_ngcontent-%COMP%]   .sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{width:250px;background:#fff;overflow:hidden}.sidenav[_ngcontent-%COMP%]{width:300px;background:#fff;overflow:hidden}  .mat-drawer-container{position:relative!important}.main[_ngcontent-%COMP%]{height:100vh!important}"]});var y=n(5412),T=n(7961),i=n(4006);class p{constructor(o,a,l){this.dialogRef=o,this.loaderService=a,this.fb=l,this.products=[],this.operationType="Add",this.sizes=[1,2,3,4,5,6,7,8,9,10,11]}ngOnInit(){}}p.\u0275fac=function(o){return new(o||p)(t.Y36(y.so),t.Y36(T.D),t.Y36(i.QS))},p.\u0275cmp=t.Xpm({type:p,selectors:[["app-create-item"]],decls:0,vars:0,template:function(o,a){},styles:[".mat-form-field[_ngcontent-%COMP%]{width:100%}"]});class C{constructor(o,a){this.loaderService=o,this._dialog=a,this.products=[],this.shopItems=[],this.columns=[{name:"Name",dataKey:"Name"},{name:"Brand",dataKey:"Brand"},{name:"Price",dataKey:"Price"},{name:"Path",dataKey:"Path"},{name:"Size",dataKey:"Size"},{name:"Category",dataKey:"Product_category"}]}ngOnInit(){}addItem(){this._dialog.open(p).afterClosed().subscribe(o=>{})}}C.\u0275fac=function(o){return new(o||C)(t.Y36(T.D),t.Y36(y.uw))},C.\u0275cmp=t.Xpm({type:C,selectors:[["app-shoe-item"]],decls:0,vars:0,template:function(o,a){}});const Z=["aForm"];function F(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," Email is required. "),t.qZA())}function L(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," Invalid "),t.qZA())}function U(e,o){if(1&e&&(t.TgZ(0,"div",10),t.YNc(1,F,2,0,"div",11),t.YNc(2,L,2,0,"div",11),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.f.email.errors&&a.f.email.errors.required),t.xp6(1),t.Q6J("ngIf",a.f.email.errors&&a.f.email.errors.email)}}function D(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," Password is required. "),t.qZA())}function N(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," Password should be Minimum 6 characters "),t.qZA())}function J(e,o){1&e&&(t.TgZ(0,"div"),t._uU(1," Password should not be more than 20 charcters "),t.qZA())}function Y(e,o){if(1&e&&(t.TgZ(0,"div",10),t.YNc(1,D,2,0,"div",11),t.YNc(2,N,2,0,"div",11),t.YNc(3,J,2,0,"div",11),t.qZA()),2&e){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.f.password.errors&&a.f.password.errors.required),t.xp6(1),t.Q6J("ngIf",a.f.password.errors&&a.f.password.errors.minlength),t.xp6(1),t.Q6J("ngIf",a.f.password.errors&&a.f.password.errors.maxlength)}}class M{constructor(o,a,l){this.fb=o,this.router=a,this.authService=l,this.createForm()}createForm(){this.myGroup=this.fb.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.maxLength(20),i.kI.minLength(6)]]})}ngOnInit(){}get f(){return this.myGroup.controls}signIn(){if(this.myGroup.valid){const o={...this.myGroup.value};this.authService.signIn(o).subscribe(a=>{a&&(this.authService.setLoginState(!0),this.authService.setStorage(a))},a=>{})}}}M.\u0275fac=function(o){return new(o||M)(t.Y36(i.QS),t.Y36(s.F0),t.Y36(d))},M.\u0275cmp=t.Xpm({type:M,selectors:[["app-auth"]],viewQuery:function(o,a){if(1&o&&t.Gf(Z,5),2&o){let l;t.iGM(l=t.CRH())&&(a.aForm=l.first)}},decls:16,vars:3,consts:[[1,"bg"],[1,"container","mt-5","animate__animated","animate__fadeIn"],[1,"child"],[1,"p-3","fw-bold"],[1,"text-center","p-3",3,"formGroup"],[1,"form-group"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","password","placeholder","Password","formControlName","password",1,"form-control"],[1,"btn","btn-primary","w-100",3,"click"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1",3),t._uU(4,"Sign In"),t.qZA(),t.TgZ(5,"form",4)(6,"div",5),t._UZ(7,"input",6),t.YNc(8,U,3,2,"div",7),t.qZA(),t.TgZ(9,"div",5),t._UZ(10,"input",8),t.YNc(11,Y,4,3,"div",7),t.qZA(),t._UZ(12,"br"),t.TgZ(13,"p")(14,"button",9),t.NdJ("click",function(){return a.signIn()}),t._uU(15," Sign In "),t.qZA()()()()()()),2&o&&(t.xp6(5),t.Q6J("formGroup",a.myGroup),t.xp6(3),t.Q6J("ngIf",a.f.email.touched&&a.f.email.invalid),t.xp6(3),t.Q6J("ngIf",a.f.password.touched&&a.f.password.invalid))},dependencies:[v.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]});class h{constructor(o,a,l){this.router=o,this.afAuth=a,this.authService=l}canActivate(o,a){return!!this.authService.getState()||(this.router.navigate(["prossedda/login"]),!1)}}h.\u0275fac=function(o){return new(o||h)(t.LFG(s.F0),t.LFG(O.zQ),t.LFG(d))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"});const K=[{path:"",component:m,canActivate:[h],children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"products",loadChildren:()=>Promise.all([n.e(308),n.e(872),n.e(375),n.e(520)]).then(n.bind(n,5520)).then(e=>e.ProductsModule)},{path:"orders",loadChildren:()=>Promise.all([n.e(308),n.e(309),n.e(808)]).then(n.bind(n,4808)).then(e=>e.OrdersModule)},{path:"marketing",loadChildren:()=>Promise.all([n.e(308),n.e(309),n.e(772)]).then(n.bind(n,772)).then(e=>e.MarketingModule)},{path:"website-home",loadChildren:()=>Promise.all([n.e(308),n.e(309),n.e(375),n.e(102)]).then(n.bind(n,8102)).then(e=>e.WebsiteHomeModule)},{path:"dashboard",loadChildren:()=>Promise.all([n.e(637),n.e(413)]).then(n.bind(n,5413)).then(e=>e.DashboardModule)},{path:"customers",loadChildren:()=>Promise.all([n.e(308),n.e(80)]).then(n.bind(n,80)).then(e=>e.CustomersModule)},{path:"items",component:C},{path:"orders",loadChildren:()=>Promise.all([n.e(308),n.e(309),n.e(808)]).then(n.bind(n,4808)).then(e=>e.OrdersModule)},{path:"marketing",loadChildren:()=>Promise.all([n.e(308),n.e(309),n.e(772)]).then(n.bind(n,772)).then(e=>e.MarketingModule)}]},{path:"login",component:M}];class f{}f.\u0275fac=function(o){return new(o||f)},f.\u0275mod=t.oAB({type:f}),f.\u0275inj=t.cJS({imports:[s.Bz.forChild(K),s.Bz]});var B=n(7238),z=n(3683),G=n(8255),Q=n(7392),R=n(7314),W=n(9549),X=n(4144),j=n(4385),H=n(3848),$=n(6329),V=n(9101),b=n(529);class g{}g.\u0275fac=function(o){return new(o||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[v.ez,b.JF,f,i.u5,i.UX,z.g0,G.Tx,Q.Ps,V.ot,R.KP,W.lN,X.c,c.SJ,j.LD,u.ie,H.Nh,$.m,B.IJ]})},6329:(E,P,n)=>{n.d(P,{m:()=>r});var v=n(6895),s=n(9549),t=n(671),I=n(8739),x=n(7392),O=n(4144),d=n(3162),c=n(9101),u=n(4006),S=n(455),A=n(4650);class r{}r.\u0275fac=function(y){return new(y||r)},r.\u0275mod=A.oAB({type:r}),r.\u0275inj=A.cJS({imports:[v.ez,u.UX,s.lN,t.p0,I.TU,d.Cv,c.ot,x.Ps,O.c,S.rP,s.lN]})}}]);