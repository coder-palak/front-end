"use strict";(self.webpackChunkshoe=self.webpackChunkshoe||[]).push([[308],{6308:(A,m,s)=>{s.d(m,{JX:()=>b,YE:()=>v});var a=s(4650),f=s(1281),d=s(3238),_=s(7579),S=(s(7340),s(6895));const u=new a.OlP("MAT_SORT_DEFAULT_OPTIONS"),p=(0,d.dB)((0,d.Id)(class{}));let v=(()=>{class i extends p{get direction(){return this._direction}set direction(e){this._direction=e}get disableClear(){return this._disableClear}set disableClear(e){this._disableClear=(0,f.Ig)(e)}constructor(e){super(),this._defaultOptions=e,this.sortables=new Map,this._stateChanges=new _.x,this.start="asc",this._direction="",this.sortChange=new a.vpe}register(e){this.sortables.set(e.id,e)}deregister(e){this.sortables.delete(e.id)}sort(e){this.active!=e.id?(this.active=e.id,this.direction=e.start?e.start:this.start):this.direction=this.getNextSortDirection(e),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(e){if(!e)return"";let o=function g(i,r){let e=["asc","desc"];return"desc"==i&&e.reverse(),r||e.push(""),e}(e.start||this.start,e?.disableClear??this.disableClear??!!this._defaultOptions?.disableClear),h=o.indexOf(this.direction)+1;return h>=o.length&&(h=0),o[h]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return i.\u0275fac=function(e){return new(e||i)(a.Y36(u,8))},i.\u0275dir=a.lG2({type:i,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],active:["matSortActive","active"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[a.qOj,a.TTD]}),i})(),l=(()=>{class i{constructor(){this.changes=new _.x}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=a.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const D={provide:l,deps:[[new a.FiY,new a.tp0,l]],useFactory:function w(i){return i||new l}};let b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.oAB({type:i}),i.\u0275inj=a.cJS({providers:[D],imports:[S.ez,d.BQ]}),i})()}}]);