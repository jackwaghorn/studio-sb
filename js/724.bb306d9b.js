"use strict";(self["webpackChunksb_v1"]=self["webpackChunksb_v1"]||[]).push([[724],{7724:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var o=r(3396);const n={key:1,class:"mobile-project-item"};function i(e,t,r,i,a,c){const d=(0,o.up)("ProjectNav"),s=(0,o.up)("ProjectContent");return(0,o.wg)(),(0,o.iD)("div",null,[a.mobile?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(d,{key:0,loaded:a.dataLoaded,title:c.currentTitle,date:c.currentDate,projects:a.projects,onInfo:c.scrollLeft,onChangeproject:c.changeProject,onHovering:c.changeHover},null,8,["loaded","title","date","projects","onInfo","onChangeproject","onHovering"])),a.mobile?((0,o.wg)(),(0,o.iD)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.projects,((e,t)=>((0,o.wg)(),(0,o.j4)(s,{mobile:a.mobile,key:t,index:t,loaded:a.dataLoaded,info:a.showInfo,current:e},null,8,["mobile","index","loaded","info","current"])))),128))])):((0,o.wg)(),(0,o.j4)(s,{blur:a.blurContent,mobile:a.mobile,key:a.currentProject,loaded:a.dataLoaded,info:a.showInfo,current:a.currentProject},null,8,["blur","mobile","loaded","info","current"]))])}var a={data(){return{showInfo:!1,dataLoaded:!1,projects:[],currentProject:[],mobile:!0,blurContent:!1}},methods:{getContent(e){this.$prismic.client.getByUID("category",e).then((e=>{this.projects=e.data.body,this.currentProject=this.projects[0],this.dataLoaded=!0}))},scrollLeft(e){this.showInfo=e},changeProject(e){this.dataLoaded=!1,this.currentProject=e,this.dataLoaded=!0},changeHover(e){this.blurContent=e},screenSize(){window.innerWidth<768?this.mobile=!0:this.mobile=!1}},computed:{currentTitle(){return this.dataLoaded?this.currentProject.primary.project_title[0].text:""},currentDate(){return this.dataLoaded?this.currentProject.primary.date:""}},created(){this.screenSize(),this.getContent(this.$route.params.uid),window.addEventListener("resize",this.screenSize)}},c=r(89);const d=(0,c.Z)(a,[["render",i]]);var s=d,l={__name:"CategoryView",setup(e){return(e,t)=>((0,o.wg)(),(0,o.j4)(s))}};const u=l;var h=u}}]);
//# sourceMappingURL=724.bb306d9b.js.map