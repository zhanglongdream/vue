webpackJsonp([7],{146:function(n,t,a){a(193);var e=a(23)(a(175),a(209),"data-v-82afdf44",null);n.exports=e.exports},172:function(n,t,a){"use strict";var e={Config:function(n){window.wx.config({appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["startRecord","stopRecord","playVoice","onVoicePlayEnd","uploadVoice"]})}};t.a=e},175:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(24),o=a(39),i=a(172);t.default={name:"home",data:function(){return{data:"",titleIndex:null,titleContent:["音乐小天使","小小音乐家"],contentAngel:[],contentMusicians:[],dialogAngel:!1,angelOneHomeWorkIndex:null,angelOneHomeWorkName:null,titleArray:[],angelHomework:[],classId:"",errorDefault:!1,errorMessage:"",titleMessage:""}},computed:{},methods:{changeContene:function(n,t){var a=this;if(this.titleIndex!==n){n&&(this.titleIndex=n,this.titleMessage=t);var i={ctl:"main",act:"getClassList",packageId:this.titleIndex};e.a.GET(o.a,i).then(function(n){a.contentAngel=n.data})}},homeWorks:function(n){var t=this;this.classId=n;var a={ctl:"main",act:"getPacakgeList",classId:this.classId};e.a.GET(o.a,a).then(function(n){t.angelHomework=n.data,t.dialogAngel=!0})},homeWorkNo:function(){this.dialogAngel=!1,this.angelOneHomeWorkIndex=null},homeWorkYes:function(){var n=this;if(this.angelOneHomeWorkIndex||"0"===this.angelOneHomeWorkIndex){var t={ctl:"main",act:"pushWork",classId:this.classId,courseId:this.angelOneHomeWorkIndex};e.a.GET(o.a,t).then(function(t){1015===t.status?(n.errorMessage="未按顺序布置作业",n.errorDefault=!0,setTimeout(function(){n.errorDefault=!1},1e3)):-1===t.status||0===t.status&&(n.dialogAngel=!1,n.angelOneHomeWorkIndex=null,n.errorMessage=n.angelOneHomeWorkName+"作业已布置",n.errorDefault=!0,setTimeout(function(){n.errorDefault=!1},1e3))})}},angelOneHomeWork:function(n){"1"!==n.status&&(this.angelOneHomeWorkIndex=n.id,this.angelOneHomeWorkName=n.name)},goWorks:function(n,t,a,o){var i={classId:n,name:t,courseId:a,packageId:o};e.a.setStore("classGo",i),this.$router.push({path:"/musicians"})}},mounted:function(){var n=this;if(!this.$store.state.Home.wxConfig.appId){var t;t=(window.location.href.indexOf("code"),location.href.split("#")[0]);var a={ctl:"teacher",act:"getSignPackage",url:t};e.a.GET(o.a,a).then(function(t){n.$store.dispatch("HOME_WXCONFIG",t.data),i.a.Config(t.data)})}},created:function(){var n=this;e.a.setDocTitle("知音宝贝-教师版");var t={ctl:"main",act:"getPackages"};e.a.GET(o.a,t).then(function(t){n.titleArray=t.data,n.titleIndex=t.data[0].id,n.titleMessage=t.data[0].name,console.log(n.titleIndex),n.changeContene()})},destroyed:function(){}}},185:function(n,t,a){t=n.exports=a(142)(!0),t.push([n.i,'.titleheader[data-v-82afdf44]{height:1.28rem;background:#fff}.titleheader li[data-v-82afdf44]{height:100%;font-family:PingFangSC-Regular;font-size:.48rem;color:#999;width:50%}.content-angel li[data-v-82afdf44]{height:2.4rem;padding:0 .45333rem;padding-top:.4rem;background:#fff;margin-bottom:.26667rem}.content-angel li .two[data-v-82afdf44]{font-size:12px;color:#b3b3b3;width:100%;text-align:left;margin-top:.29333rem}.content-angel li .one div:first-child p[data-v-82afdf44]:nth-child(1){font-family:PingFangSC-Regular;font-size:.4rem;color:#333}.content-angel li .one div:first-child p[data-v-82afdf44]:nth-child(2){font-family:PingFangSC-Regular;font-size:12px;color:#666;margin-top:.37333rem}.content-angel li .one div:nth-child(2) button[data-v-82afdf44]{height:.85333rem;width:1.92rem;font-family:PingFangSC-Regular;font-size:12px;color:#fff}.content-angel li .one div:nth-child(2) button[data-v-82afdf44]:first-child{background:#f39724;border-radius:2px;margin-right:.37333rem}.content-angel li .one div:nth-child(2) button[data-v-82afdf44]:nth-child(2){background:#27a88f;border-radius:2px}.changeTitle[data-v-82afdf44]{color:#1e82d2!important;position:relative}.changeTitle[data-v-82afdf44]:after{position:absolute;bottom:0;content:"";height:.10667rem;width:3.2rem;left:50%;z-index:10;margin-left:-1.6rem;background:#1e82d2;border-radius:100px}.buttonOne[data-v-82afdf44]{background:#cacaca!important;color:#999!important}@media screen and (max-width:320px){.content-angel li[data-v-82afdf44]{padding:0 6px;padding-top:.4rem}.content-angel li div:nth-child(2) button[data-v-82afdf44]:first-child{margin-right:6px}}.dialogAngel[data-v-82afdf44]{position:fixed;z-index:1000;width:8.16rem;left:50%;top:1.28rem;border-radius:4px}.dialogAngel .dialogTitle[data-v-82afdf44]{height:1.22667rem;width:100%;font-family:PingFangSC-Regular;font-size:.4rem;color:#333;background:#fff;border-radius:4px 4px 0 0}.dialogAngel ul[data-v-82afdf44]{background:#f2f2f2;width:100%;padding:.32rem;padding-bottom:0;overflow:auto}.dialogAngel ul li[data-v-82afdf44]{background:#fff;width:2.29333rem;height:1.12rem;margin-bottom:.32rem;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;border-radius:5px;font-family:PingFangSC-Regular;font-size:.37333rem;color:#666}.dialogAngel .button[data-v-82afdf44]{width:100%;border-top:1px solid #dedede;background:#fff;height:1.22667rem;border-radius:0 0 4px 4px}.dialogAngel .button button[data-v-82afdf44]{width:50%;font-size:17px;color:#0076ff;height:100%}.dialogAngel .button button[data-v-82afdf44]:first-child{font-family:PingFangSC-Regular;border-right:1px solid #dedede}.dialogAngel .button button[data-v-82afdf44]:nth-child(2){font-family:PingFangSC-Medium}.dialogClick[data-v-82afdf44]{color:#2083d2!important;border:1px solid #2083d2!important}.dialogNoClick[data-v-82afdf44]{background:#ccc!important;color:#fff!important}.ulHeighr[data-v-82afdf44]{height:7.52rem}',"",{version:3,sources:["/Users/longzhang/Documents/知音/知音宝贝/web/teacher/src/views/home/task.vue"],names:[],mappings:"AACA,8BACE,eAAgB,AAChB,eAAiB,CAClB,AACD,iCACI,YAAa,AACb,+BAAgC,AAChC,iBAAmB,AACnB,WAAe,AACf,SAAW,CACd,AACD,mCACE,cAAe,AACf,oBAAsB,AACtB,kBAAoB,AACpB,gBAAiB,AACjB,uBAA0B,CAC3B,AACD,wCACI,eAAgB,AAChB,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAuB,CAC1B,AACD,uEACI,+BAAgC,AAChC,gBAAkB,AAClB,UAAe,CAClB,AACD,uEACI,+BAAgC,AAChC,eAAgB,AAChB,WAAe,AACf,oBAAuB,CAC1B,AACD,gEACI,iBAAmB,AACnB,cAAe,AACf,+BAAgC,AAChC,eAAgB,AAChB,UAAe,CAClB,AACD,4EACI,mBAAoB,AACpB,kBAAmB,AACnB,sBAAyB,CAC5B,AACD,6EACI,mBAAoB,AACpB,iBAAmB,CACtB,AACD,8BACE,wBAA0B,AAC1B,iBAAmB,CACpB,AACD,oCACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,iBAAmB,AACnB,aAAc,AACd,SAAU,AACV,WAAY,AACZ,oBAAqB,AACrB,mBAAoB,AACpB,mBAAqB,CACxB,AACD,4BACE,6BAA+B,AAC/B,oBAA0B,CAC3B,AACD,oCACA,mCACI,cAAe,AACf,iBAAoB,CACvB,AACD,uEACM,gBAAkB,CACvB,CACA,AACD,8BACE,eAAgB,AAChB,aAAc,AACd,cAAe,AACf,SAAU,AACV,YAAa,AACb,iBAAmB,CACpB,AACD,2CACI,kBAAmB,AACnB,WAAY,AACZ,+BAAgC,AAChC,gBAAkB,AAClB,WAAe,AACf,gBAAoB,AACpB,yBAA2B,CAC9B,AACD,iCACI,mBAAoB,AACpB,WAAY,AACZ,eAAiB,AACjB,iBAAkB,AAClB,aAAe,CAClB,AACD,oCACM,gBAAoB,AACpB,iBAAkB,AAClB,eAAgB,AAChB,qBAAuB,AACvB,0BAA2B,AAC3B,uBAAwB,AACxB,sBAAuB,AACvB,qBAAsB,AACtB,kBAAmB,AACnB,+BAAgC,AAChC,oBAAsB,AACtB,UAAe,CACpB,AACD,sCACI,WAAY,AACZ,6BAA8B,AAC9B,gBAAoB,AACpB,kBAAmB,AACnB,yBAA2B,CAC9B,AACD,6CACM,UAAW,AACX,eAAgB,AAChB,cAAe,AACf,WAAa,CAClB,AACD,yDACM,+BAAgC,AAChC,8BAAgC,CACrC,AACD,0DACM,6BAA+B,CACpC,AACD,8BACE,wBAA0B,AAC1B,kCAAqC,CACtC,AACD,gCACE,0BAA4B,AAC5B,oBAAuB,CACxB,AACD,2BACE,cAAgB,CACjB",file:"task.vue",sourcesContent:["\n.titleheader[data-v-82afdf44] {\n  height: 1.28rem;\n  background: #fff;\n}\n.titleheader li[data-v-82afdf44] {\n    height: 100%;\n    font-family: PingFangSC-Regular;\n    font-size: 0.48rem;\n    color: #999999;\n    width: 50%;\n}\n.content-angel li[data-v-82afdf44] {\n  height: 2.4rem;\n  padding: 0 0.45333rem;\n  padding-top: 0.4rem;\n  background: #fff;\n  margin-bottom: 0.26667rem;\n}\n.content-angel li .two[data-v-82afdf44] {\n    font-size: 12px;\n    color: #b3b3b3;\n    width: 100%;\n    text-align: left;\n    margin-top: 0.29333rem;\n}\n.content-angel li .one div:nth-child(1) p[data-v-82afdf44]:nth-child(1) {\n    font-family: PingFangSC-Regular;\n    font-size: 0.4rem;\n    color: #333333;\n}\n.content-angel li .one div:nth-child(1) p[data-v-82afdf44]:nth-child(2) {\n    font-family: PingFangSC-Regular;\n    font-size: 12px;\n    color: #666666;\n    margin-top: 0.37333rem;\n}\n.content-angel li .one div:nth-child(2) button[data-v-82afdf44] {\n    height: 0.85333rem;\n    width: 1.92rem;\n    font-family: PingFangSC-Regular;\n    font-size: 12px;\n    color: #FFFFFF;\n}\n.content-angel li .one div:nth-child(2) button[data-v-82afdf44]:nth-child(1) {\n    background: #F39724;\n    border-radius: 2px;\n    margin-right: 0.37333rem;\n}\n.content-angel li .one div:nth-child(2) button[data-v-82afdf44]:nth-child(2) {\n    background: #27A88F;\n    border-radius: 2px;\n}\n.changeTitle[data-v-82afdf44] {\n  color: #1E82D2 !important;\n  position: relative;\n}\n.changeTitle[data-v-82afdf44]:after {\n    position: absolute;\n    bottom: 0;\n    content: '';\n    height: 0.10667rem;\n    width: 3.2rem;\n    left: 50%;\n    z-index: 10;\n    margin-left: -1.6rem;\n    background: #1E82D2;\n    border-radius: 100px;\n}\n.buttonOne[data-v-82afdf44] {\n  background: #CACACA !important;\n  color: #999999 !important;\n}\n@media screen and (max-width: 320px) {\n.content-angel li[data-v-82afdf44] {\n    padding: 0 6px;\n    padding-top: 0.4rem;\n}\n.content-angel li div:nth-child(2) button[data-v-82afdf44]:nth-child(1) {\n      margin-right: 6px;\n}\n}\n.dialogAngel[data-v-82afdf44] {\n  position: fixed;\n  z-index: 1000;\n  width: 8.16rem;\n  left: 50%;\n  top: 1.28rem;\n  border-radius: 4px;\n}\n.dialogAngel .dialogTitle[data-v-82afdf44] {\n    height: 1.22667rem;\n    width: 100%;\n    font-family: PingFangSC-Regular;\n    font-size: 0.4rem;\n    color: #333333;\n    background: #FFFFFF;\n    border-radius: 4px 4px 0 0;\n}\n.dialogAngel ul[data-v-82afdf44] {\n    background: #F2F2F2;\n    width: 100%;\n    padding: 0.32rem;\n    padding-bottom: 0;\n    overflow: auto;\n}\n.dialogAngel ul li[data-v-82afdf44] {\n      background: #FFFFFF;\n      width: 2.29333rem;\n      height: 1.12rem;\n      margin-bottom: 0.32rem;\n      -webkit-border-radius: 5px;\n      -moz-border-radius: 5px;\n      -ms-border-radius: 5px;\n      -o-border-radius: 5px;\n      border-radius: 5px;\n      font-family: PingFangSC-Regular;\n      font-size: 0.37333rem;\n      color: #666666;\n}\n.dialogAngel .button[data-v-82afdf44] {\n    width: 100%;\n    border-top: 1px solid #DEDEDE;\n    background: #FFFFFF;\n    height: 1.22667rem;\n    border-radius: 0 0 4px 4px;\n}\n.dialogAngel .button button[data-v-82afdf44] {\n      width: 50%;\n      font-size: 17px;\n      color: #0076FF;\n      height: 100%;\n}\n.dialogAngel .button button[data-v-82afdf44]:nth-child(1) {\n      font-family: PingFangSC-Regular;\n      border-right: 1px solid #DEDEDE;\n}\n.dialogAngel .button button[data-v-82afdf44]:nth-child(2) {\n      font-family: PingFangSC-Medium;\n}\n.dialogClick[data-v-82afdf44] {\n  color: #2083D2 !important;\n  border: 1px solid #2083D2 !important;\n}\n.dialogNoClick[data-v-82afdf44] {\n  background: #ccc !important;\n  color: #fff !important;\n}\n.ulHeighr[data-v-82afdf44] {\n  height: 7.52rem;\n}\n"],sourceRoot:""}])},193:function(n,t,a){var e=a(185);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a(143)("5bed8a6f",e,!0)},209:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{attrs:{id:"task"}},[a("ul",{staticClass:"space-center titleheader borderPX"},n._l(n.titleArray,function(t,e){return a("li",{staticClass:"space-center",class:{changeTitle:n.titleIndex==t.id},on:{click:function(a){n.changeContene(t.id,t.name)}}},[n._v(n._s(t.name))])})),n._v(" "),a("ul",{staticClass:"content-angel marginNavigation"},n._l(n.contentAngel,function(t,e){return a("li",[a("div",{staticClass:"one space-between"},[a("div",[a("p",[n._v(n._s(t.className))]),n._v(" "),a("p",[n._v("作业进度："+n._s(t.courseName))])]),n._v(" "),a("div",[a("button",{on:{click:function(a){n.goWorks(t.classId,t.courseName,t.courseId,t.packageId)}}},[n._v("查看作业")]),a("button",{on:{click:function(a){n.homeWorks(t.classId)}}},[n._v("布置作业")])])]),n._v(" "),a("div",{staticClass:"two"},[n._v(n._s(t.schoolName))])])})),n._v(" "),n.dialogAngel?a("div",{staticClass:"dialogAngel transformTranslate"},[a("button",{staticClass:"dialogTitle"},[n._v(n._s(n.titleMessage)+"作业安排")]),n._v(" "),a("ul",{staticClass:"flex-wrap",class:{ulHeighr:n.angelHomework.length>15}},n._l(n.angelHomework,function(t,e){return a("li",{staticClass:"space-center",class:[{dialogClick:t.id===n.angelOneHomeWorkIndex},{dialogNoClick:"1"==t.status}],on:{click:function(a){n.angelOneHomeWork(t)}}},[n._v(n._s(t.name))])})),n._v(" "),a("div",{staticClass:"button space-between"},[a("button",{on:{click:n.homeWorkNo}},[n._v("取消")]),n._v(" "),a("button",{on:{click:n.homeWorkYes}},[n._v("确定")])])]):n._e(),n._v(" "),n.dialogAngel?a("div",{staticClass:"dialog-bg"}):n._e(),n._v(" "),n.errorDefault?a("div",{staticClass:"errprMessageDialog transformTranslateAll"},[n._v(n._s(n.errorMessage))]):n._e(),n._v(" "),a("navigation")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=7.50429c49006559d572fb.js.map