"use strict";(self.webpackChunkshoe=self.webpackChunkshoe||[]).push([[80],{80:(E,D,l)=>{l.r(D),l.d(D,{CustomersModule:()=>f});var t=l(6895),g=l(9132),i=l(4650),c=l(4614);class m{constructor(a){this.baseService=a}getUsers(){return this.baseService.get("users")}}m.\u0275fac=function(a){return new(a||m)(i.LFG(c.b))},m.\u0275prov=i.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var v=l(2184);const y=function(){return[5,25,100]};class d{constructor(a,u){this.router=a,this.userService=u,this.introText="Button actions and payloads come here in textual form",this.totalVolume=0,this.totalRides=0,this.data=[],this.footer="",this.columns=[{columnDef:"id",header:"#",cell:r=>`${r.id?r.id:""}`},{columnDef:"name",header:"Name",cell:r=>`${r.name?r.name:""}`},{columnDef:"email",header:"Image",cell:r=>`${r.email?r.email:""}`},{columnDef:"phone",header:"Phone",cell:r=>`${r.phone?r.phone:""}`}],this.buttons=[]}ngOnInit(){this.userService.getUsers().subscribe(a=>{this.data=a.data})}applyFilter(a){this.totalVolume=0,this.totalRides=0,this.footer=`Total volume: ${this.totalVolume}m\xb3 / trips: ${this.totalRides}`}buttonClick(a){}goToRoute(){this.router.navigate(["/admin/website-home/add/carousel"])}}d.\u0275fac=function(a){return new(a||d)(i.Y36(g.F0),i.Y36(m))},d.\u0275cmp=i.Xpm({type:d,selectors:[["app-customers"]],decls:7,vars:10,consts:[[1,"p-3"],[1,"form-group"],["placeholder","Filter",1,"form-control"],[3,"columns","buttons","data","filter","filterPlaceholder","footer","pagination","pageSize","tableMinWidth","filteredData","buttonClick"]],template:function(a,u){1&a&&(i.TgZ(0,"div",0)(1,"h2"),i._uU(2,"Customers"),i.qZA(),i._UZ(3,"br"),i.TgZ(4,"div",1),i._UZ(5,"input",2),i.qZA()(),i.TgZ(6,"app-generic-table",3),i.NdJ("filteredData",function(b){return u.applyFilter(b)})("buttonClick",function(b){return u.buttonClick(b)}),i.qZA()),2&a&&(i.xp6(6),i.Q6J("columns",u.columns)("buttons",u.buttons)("data",u.data)("filter",!0)("filterPlaceholder","Filter any value")("footer",u.footer)("pagination",i.DdM(9,y))("pageSize",5)("tableMinWidth",400))},dependencies:[v.p]});const M=[{path:"",component:d}];class p{}p.\u0275fac=function(a){return new(a||p)},p.\u0275mod=i.oAB({type:p}),p.\u0275inj=i.cJS({imports:[g.Bz.forChild(M),g.Bz]});var S=l(6329);class f{}f.\u0275fac=function(a){return new(a||f)},f.\u0275mod=i.oAB({type:f}),f.\u0275inj=i.cJS({imports:[t.ez,S.m,p]})},2184:(E,D,l)=>{l.d(D,{p:()=>x});var t=l(4650),g=l(8739),i=l(6308),c=l(671),m=l(6895),v=l(9101),y=l(7392),d=l(455);function M(e,o){if(1&e&&(t.TgZ(0,"th",13),t._uU(1),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",n.header," ")}}function p(e,o){if(1&e&&(t.ynx(0),t._uU(1),t.BQk()),2&e){const n=t.oxw().$implicit,s=t.oxw().$implicit;t.xp6(1),t.hij(" ",s.cell(n)," ")}}function S(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-slide-toggle",15),t.NdJ("change",function(w){t.CHM(n);const h=t.oxw().$implicit,C=t.oxw().$implicit,T=t.oxw();return t.KtG(T.publishChangeEvent.emit([w,h.id,C.columnDef]))}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw().$implicit,s=t.oxw().$implicit;t.xp6(1),t.Q6J("checked",s.cell(n))}}function f(e,o){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"mat-slide-toggle",15),t.NdJ("change",function(w){t.CHM(n);const h=t.oxw().$implicit,C=t.oxw().$implicit,T=t.oxw();return t.KtG(T.publishChangeEvent.emit([w,h.id,C.columnDef]))}),t.qZA(),t.BQk()}if(2&e){const n=t.oxw().$implicit,s=t.oxw().$implicit;t.xp6(1),t.Q6J("checked",s.cell(n))}}function _(e,o){if(1&e&&(t.ynx(0),t._UZ(1,"img",16),t.BQk()),2&e){const n=t.oxw().$implicit,s=t.oxw().$implicit;t.xp6(1),t.Q6J("src",s.cell(n),t.LSH)}}function a(e,o){if(1&e&&(t.TgZ(0,"td",14),t.YNc(1,p,2,1,"ng-container",8),t.YNc(2,S,2,1,"ng-container",8),t.YNc(3,f,2,1,"ng-container",8),t.YNc(4,_,2,1,"ng-container",8),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf","path"!==n.columnDef&&"published"!==n.columnDef&&"featured"!==n.columnDef&&"best_seller"!==n.columnDef),t.xp6(1),t.Q6J("ngIf","published"===n.columnDef||"best_seller"===n.columnDef),t.xp6(1),t.Q6J("ngIf","featured"===n.columnDef),t.xp6(1),t.Q6J("ngIf","path"===n.columnDef)}}function u(e,o){if(1&e&&(t.ynx(0)(1,10),t.YNc(2,M,2,1,"th",11),t.YNc(3,a,5,4,"td",12),t.BQk()()),2&e){const n=o.$implicit;t.xp6(1),t.s9C("matColumnDef",n.columnDef)}}function r(e,o){1&e&&t._UZ(0,"th",21)}function b(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",24)(1,"button",25),t.NdJ("click",function(){const h=t.CHM(n).$implicit,C=t.oxw(),T=C.$implicit,A=C.index,B=t.oxw(2);return t.KtG(B.buttonClick.emit([h.action,h.payload(T),A]))}),t.TgZ(2,"mat-icon"),t._uU(3),t.qZA()()()}if(2&e){const n=o.$implicit;t.xp6(1),t.Tol(n.styleClass),t.xp6(2),t.Oqu(n.icon)}}const G=function(e){return{height:"80px","min-width":e}};function Z(e,o){if(1&e&&(t.TgZ(0,"td",22),t.YNc(1,b,4,4,"div",23),t.qZA()),2&e){const n=t.oxw(2);t.Q6J("ngStyle",t.VKq(2,G,"calc(55px * "+n.buttons.length+")")),t.xp6(1),t.Q6J("ngForOf",n.buttons)}}function P(e,o){1&e&&(t.ynx(0,17)(1,18),t.YNc(2,r,1,0,"th",19),t.YNc(3,Z,2,4,"td",20),t.BQk()())}function Q(e,o){if(1&e&&(t.TgZ(0,"td",28)(1,"strong"),t._uU(2),t.qZA()()),2&e){const n=t.oxw(2);t.xp6(2),t.Oqu(n.footer)}}function F(e,o){1&e&&(t.ynx(0,26),t.YNc(1,Q,3,1,"td",27),t.BQk())}function J(e,o){1&e&&t._UZ(0,"tr",29)}function R(e,o){1&e&&t._UZ(0,"tr",30)}function U(e,o){1&e&&t._UZ(0,"tr",32)}const N=function(){return["disclaimer"]};function $(e,o){1&e&&(t.ynx(0),t.YNc(1,U,1,0,"tr",31),t.BQk()),2&e&&(t.xp6(1),t.Q6J("matFooterRowDef",t.DdM(1,N)))}const O=function(e){return{"min-width":e}};class x{constructor(){this.columns=[],this.buttons=[],this.data=[],this.filter=!1,this.filterPlaceholder="Filter",this.footer=null,this.pagination=[],this.tableMinWidth=500,this.filteredData=new t.vpe,this.buttonClick=new t.vpe,this.publishChangeEvent=new t.vpe}ngOnChanges(o){this.data&&o.data&&(this.dataSource=new c.by(this.data),this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.displayedColumns=[...this.columns.map(n=>n.columnDef)],this.buttons.length>0&&(this.displayedColumns=[...this.displayedColumns,"actions"]))}applyFilter(o){this.dataSource.filter=o.trim().toLowerCase(),this.filteredData.emit(this.dataSource.filteredData),this.dataSource.paginator&&this.dataSource.paginator.firstPage(),this.dataSource.sort=this.sort}}x.\u0275fac=function(o){return new(o||x)},x.\u0275cmp=t.Xpm({type:x,selectors:[["app-generic-table"]],viewQuery:function(o,n){if(1&o&&(t.Gf(g.NW,7),t.Gf(i.YE,7)),2&o){let s;t.iGM(s=t.CRH())&&(n.paginator=s.first),t.iGM(s=t.CRH())&&(n.sort=s.first)}},inputs:{columns:"columns",buttons:"buttons",data:"data",filter:"filter",filterPlaceholder:"filterPlaceholder",footer:"footer",pagination:"pagination",pageSize:"pageSize",tableMinWidth:"tableMinWidth"},outputs:{filteredData:"filteredData",buttonClick:"buttonClick",publishChangeEvent:"publishChangeEvent"},features:[t.TTD],decls:10,vars:15,consts:[[1,"container-fluid","p-3"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource","ngStyle"],[4,"ngFor","ngForOf"],["class","d-flex",4,"ngIf"],["matColumnDef","disclaimer",4,"ngIf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[4,"ngIf"],[3,"pageSizeOptions","pageSize","ngStyle"],[3,"matColumnDef"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["color","primary",1,"example-margin",3,"checked","change"],["alt","baner","height","75px",3,"src"],[1,"d-flex"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","class","d-flex",3,"ngStyle",4,"matCellDef"],["mat-header-cell",""],["mat-cell","",1,"d-flex",3,"ngStyle"],["class","btn-group p-1",4,"ngFor","ngForOf"],[1,"btn-group","p-1"],["mat-icon-button","",3,"click"],["matColumnDef","disclaimer"],["mat-footer-cell","","colspan","100%",4,"matFooterCellDef"],["mat-footer-cell","","colspan","100%"],["mat-header-row",""],["mat-row",""],["mat-footer-row","","class","example-second-footer-row",4,"matFooterRowDef"],["mat-footer-row","",1,"example-second-footer-row"]],template:function(o,n){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2),t.YNc(3,u,4,1,"ng-container",3),t.YNc(4,P,4,0,"ng-container",4),t.YNc(5,F,2,0,"ng-container",5),t.YNc(6,J,1,0,"tr",6),t.YNc(7,R,1,0,"tr",7),t.YNc(8,$,2,2,"ng-container",8),t.qZA(),t._UZ(9,"mat-paginator",9),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("dataSource",n.dataSource)("ngStyle",t.VKq(11,O,+n.tableMinWidth+"px")),t.xp6(1),t.Q6J("ngForOf",n.columns),t.xp6(1),t.Q6J("ngIf",n.buttons.length>0),t.xp6(1),t.Q6J("ngIf",n.footer),t.xp6(1),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("ngIf",n.footer),t.xp6(1),t.Q6J("pageSizeOptions",n.pagination)("pageSize",n.pageSize)("ngStyle",t.VKq(13,O,+n.tableMinWidth+"px")))},dependencies:[m.sg,m.O5,m.PC,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.mD,c.Ke,c.ge,c.ev,c.yh,c.XQ,c.Gk,c.Q2,g.NW,v.RK,y.Hw,d.Rr],styles:["table[_ngcontent-%COMP%], mat-paginator[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}mat-icon[_ngcontent-%COMP%]{font-size:18px}.table-buttons__field[_ngcontent-%COMP%]{min-width:200px}.mat-header-cell[_ngcontent-%COMP%]{background:#111827;color:#fff}img[_ngcontent-%COMP%]{object-fit:cover;text-align:center}"]})}}]);