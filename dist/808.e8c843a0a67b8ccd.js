"use strict";(self.webpackChunkshoe=self.webpackChunkshoe||[]).push([[808],{4808:(L,m,a)=>{a.r(m),a.d(m,{OrdersModule:()=>c});var f=a(6895),o=a(9132),e=a(4650);class u{constructor(){}ngOnInit(){}}u.\u0275fac=function(t){return new(t||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-add-update-orders"]],decls:2,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"p"),e._uU(1,"add-update-orders works!"),e.qZA())}});var g=a(4614);class d{constructor(t){this.baseService=t}addOrders(t){return this.baseService.post("orders",t)}updateOrders(t){return this.baseService.put("orders",t)}get(){return this.baseService.get("order/admin/all")}getByDeliveryStatus(t){return this.baseService.get(`order/admin/all/${t}`)}getActiveOrders(){return this.baseService.get("orders/active")}delete(t){return this.baseService.delete(`orders/${t}`)}}d.\u0275fac=function(t){return new(t||d)(e.LFG(g.b))},d.\u0275prov=e.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"});var y=a(2184);const b=function(){return[5,25,100]};class p{constructor(t,i){this.router=t,this.orderService=i,this.introText="Button actions and payloads come here in textual form",this.totalVolume=0,this.totalRides=0,this.data=[],this.footer="",this.columns=[{columnDef:"id",header:"#",cell:r=>`${r.id?r.id:""}`},{columnDef:"postal_code",header:"Pin Code",cell:r=>`${r.postal_code?r.postal_code:""}`},{columnDef:"email",header:"Email",cell:r=>`${r.email?r.email:""}`},{columnDef:"shipping_cost",header:"Shipping Cost",cell:r=>`${r.shipping_cost?r.shipping_cost:""}`},{columnDef:"delivery_type",header:"Delivery Type",cell:r=>`${r.delivery_type?r.delivery_type:""}`},{columnDef:"delivery_status",header:"Delivery Status",cell:r=>`${r.delivery_status?r.delivery_status:""}`},{columnDef:"payment_type",header:"Payment Type",cell:r=>`${r.payment_type?r.payment_type:""}`},{columnDef:"payment_status",header:"Payment Status",cell:r=>`${r.payment_status?r.payment_status:""}`},{columnDef:"grand_total",header:"Grand Total",cell:r=>`${r.grand_total?r.grand_total:""}`}],this.buttons=[{styleClass:"btn px-2",icon:"edit",payload:r=>`${r.id?r.id:""}`,action:"edit"},{styleClass:"btn px-2",icon:"update",payload:r=>`${r.id?r.id:""}`,action:"update"}]}ngOnInit(){this.getOrders()}buttonClick(t){"delete"===t[0]?this.orderService.delete(t[1]).subscribe(i=>{i&&this.getOrders()}):"update"===t[0]&&this.router.navigate(["admin/orders/orderlist/update",t[1]])}changeEvent(t){this.categoryService.updateFeature({feature:t[0].checked,id:t[1]}).subscribe(()=>{})}goToRoute(){this.router.navigate(["/admin/orders"])}getOrders(){this.orderService.get().subscribe(t=>{this.data=t})}onDeliveryStatusChange(t){this.orderService.getByDeliveryStatus(t.target.value).subscribe(i=>{this.data=i})}}p.\u0275fac=function(t){return new(t||p)(e.Y36(o.F0),e.Y36(d))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-order-list"]],decls:30,vars:10,consts:[[1,"d-flex","p-3","justify-content-between","align-items-center"],[1,"p-3"],[1,"form-group"],[1,"row"],[1,"col-4"],["name","Payment","id","paymentstatus",1,"form-select"],["value","payment_filter"],["value","paid"],["value","unpaid"],["name","delivery","id","deliverystatus",1,"form-select",3,"change"],["value","filter"],["value","order_placed"],["value","confirmed"],["value","processed"],["value","shipped"],[3,"columns","buttons","data","filter","filterPlaceholder","footer","pagination","pageSize","tableMinWidth","buttonClick","publishChangeEvent"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1"),e._uU(3,"Orders"),e.qZA()()(),e.TgZ(4,"div",1)(5,"form")(6,"div",2)(7,"div",3),e._UZ(8,"div",4),e.TgZ(9,"div",4)(10,"select",5)(11,"option",6),e._uU(12,"Filter my Payment Status"),e.qZA(),e.TgZ(13,"option",7),e._uU(14,"Paid"),e.qZA(),e.TgZ(15,"option",8),e._uU(16,"Unpaid"),e.qZA()()(),e.TgZ(17,"div",4)(18,"select",9),e.NdJ("change",function(s){return i.onDeliveryStatusChange(s)}),e.TgZ(19,"option",10),e._uU(20,"Filter by Delivery Status"),e.qZA(),e.TgZ(21,"option",11),e._uU(22,"Order Placed"),e.qZA(),e.TgZ(23,"option",12),e._uU(24,"Confirmed"),e.qZA(),e.TgZ(25,"option",13),e._uU(26,"Processed"),e.qZA(),e.TgZ(27,"option",14),e._uU(28,"Shipped"),e.qZA()()()()()()(),e.TgZ(29,"app-generic-table",15),e.NdJ("buttonClick",function(s){return i.buttonClick(s)})("publishChangeEvent",function(s){return i.changeEvent(s)}),e.qZA()),2&t&&(e.xp6(29),e.Q6J("columns",i.columns)("buttons",i.buttons)("data",i.data)("filter",!0)("filterPlaceholder","Filter any value")("footer",i.footer)("pagination",e.DdM(9,b))("pageSize",5)("tableMinWidth",400))},dependencies:[y.p]});var h=a(5754);function O(n,t){if(1&n&&(e.TgZ(0,"a",2,3),e._uU(2),e.qZA()),2&n){const i=t.$implicit,r=e.oxw();e.Q6J("routerLink",i.link)("active",r.activeLinkIndex===i.index),e.xp6(2),e.hij(" ",i.label,"")}}class v{constructor(t,i){this.router=t,this.activatedroute=i,this.navLinks=[],this.activeLinkIndex=-1,this.navLinks=[{label:"Orders",link:"./order-list",index:0}],this.activatedroute.url.subscribe(r=>{const s=this.navLinks.find(k=>`/admin/orders${k.link.split(".")[1]}`===this.router.url);s&&(this.activeLinkIndex=this.navLinks.indexOf(s))})}ngOnInit(){this.router.events.subscribe(t=>{if(t){const i=this.navLinks.find(r=>`/admin/order\n            \n            s${r.link.split(".")[1]}`===this.router.url);this.activeLinkIndex=i?this.navLinks.indexOf(i):0}})}}v.\u0275fac=function(t){return new(t||v)(e.Y36(o.F0),e.Y36(o.gz))},v.\u0275cmp=e.Xpm({type:v,selectors:[["app-orders"]],decls:4,vars:1,consts:[["mat-tab-nav-bar",""],["mat-tab-link","","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],["mat-tab-link","","routerLinkActive","",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(t,i){1&t&&(e.TgZ(0,"div")(1,"nav",0),e.YNc(2,O,3,3,"a",1),e.qZA()(),e._UZ(3,"router-outlet")),2&t&&(e.xp6(2),e.Q6J("ngForOf",i.navLinks))},dependencies:[f.sg,o.lC,o.rH,o.Od,h.vP,h.JV]});const C=[{path:"",component:v,children:[{path:"",redirectTo:"order-list",pathMatch:"full"},{path:"add-update-order",component:u},{path:"order-list",component:p}]}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[o.Bz.forChild(C),o.Bz]});var Z=a(6329),S=a(7392),T=a(9101);class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[f.ez,l,Z.m,S.Ps,T.ot,h.Nn]})}}]);