(function(t){function e(e){for(var s,r,a=e[0],u=e[1],l=e[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],s=!0,a=1;a<o.length;a++){var u=o[a];0!==i[u]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1:function(t,e){},1263:function(t,e,o){},1484:function(t,e,o){"use strict";var s=o("5c92"),i=o.n(s);i.a},1812:function(t,e,o){"use strict";var s=o("1263"),i=o.n(s);i.a},"252e":function(t,e,o){"use strict";var s=o("5fe1"),i=o.n(s);i.a},"2b8c":function(t,e,o){"use strict";var s=o("5905"),i=o.n(s);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var s=o("5132"),i=o.n(s),n=o("bc3a"),r=o.n(n),a=(o("96cf"),o("3b8d")),u=o("2f62"),l=function(){return new u["a"].Store({strict:!1,state:function(){return{user:{}}},mutations:{getInfo:function(t,e){t.user=e}},actions:{getInfo:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("https://www.bixiaohe.fun/user-info");case 2:return o=t.sent,e.commit("getInfo",o.data),t.abrupt("return",o);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setHistory:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,o){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/set-game",o);case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)})));function e(e,o){return t.apply(this,arguments)}return e}(),getHistory:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,o){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/get-game",o);case 2:return s=t.sent,t.abrupt("return",s.data);case 4:case"end":return t.stop()}}),t)})));function e(e,o){return t.apply(this,arguments)}return e}()}})},c=l,d=o("8bbf"),h=o.n(d),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",{staticClass:"top-container"},[o("p",{staticStyle:{display:"inline-block",width:"200px",padding:"0",margin:"0",height:"50px",background:"#333333"}}),o("span",{staticStyle:{padding:"16px 36px"},on:{click:function(e){return t.$router.push("/main")}}},[o("i",{staticClass:"el-icon-s-home",staticStyle:{height:"18px","padding-right":"4px"}}),t._v("\n      大厅\n    ")]),o("span",{on:{click:function(e){return t.$router.push("/history")}}},[o("i",{staticClass:"el-icon-date",staticStyle:{height:"18px","padding-right":"4px"}}),t._v("\n      对战记录\n    ")]),o("span",{on:{click:function(e){return t.toChat()}}},[t._v("\n      好友\n    ")]),o("el-input",{staticClass:"input"},[o("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),o("div",{staticClass:"center-container"},[o("aside",{staticClass:"left-container"},[o("div",{staticStyle:{width:"60px",height:"60px","padding-left":"70px"}},[o("img",{staticClass:"head-img",staticStyle:{width:"60px"},attrs:{src:null==t.user.url?"https://www.bixiaohe.fun/img/default.jpg":"https://www.bixiaohe.fun"+t.user.url,alt:"点击修改个人信息"},on:{click:t.changeInfo}})]),o("p",[t._v("昵称 :"+t._s(t.user.name))]),o("p",[t._v("id :"+t._s(t.user.id))]),o("p",[t._v("地址 :"+t._s(t.user.address))])]),o("div",{staticClass:"main-card"},[o("router-view")],1)]),o("el-dialog",{staticStyle:{width:"1500px"},attrs:{visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[o("el-form",{ref:"upload",staticStyle:{margin:"40px 0 0 40px","text-align":"left",width:"300px"},attrs:{model:t.upload,rules:t.uploadRule,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"头像",prop:"url"}},[o("el-upload",{staticClass:"upload",attrs:{action:"https://www.bixiaohe.fun/upload-img",method:"post",name:"user","on-success":t.headUpload}},[t.upload.url?o("img",{staticClass:"upload-img",attrs:{src:"https://www.bixiaohe.fun"+t.upload.url}}):o("i",{staticClass:"el-icon-plus"})])],1),o("el-form-item",{attrs:{label:"昵称",prop:"name"}},[o("el-input",{attrs:{size:"small"},model:{value:t.upload.name,callback:function(e){t.$set(t.upload,"name",e)},expression:"upload.name"}})],1),o("el-form-item",{attrs:{label:"地址",prop:"address"}},[o("el-input",{attrs:{size:"small"},model:{value:t.upload.address,callback:function(e){t.$set(t.upload,"address",e)},expression:"upload.address"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.uploadSubmit}},[t._v("\n            修改\n          ")])],1)],1)],1)],1)},f=[],m=(o("7f7f"),{data:function(){return{user:{url:""},houseList:{},showDialog:!1,upload:{url:"",name:"",address:""},uploadRule:{url:[{required:!0,message:"请选择图片",trigger:"blur"}],name:[{required:!0,message:"昵称不能为空",trigger:"blur"}],address:[{required:!0,message:"地址不能为空",trigger:"blur"}]}}},methods:{getInfo:function(){var t=this;this.$store.dispatch("getInfo").then((function(e){if(1==e.status)window.location.href="https://www.bixiaohe.fun";else{for(var o in t.user=t.$store.state.user,window.console.log(t.user),t.upload)t.upload[o]=t.user[o];window.console.log("upload:",t.upload),t.$socket.emit("online",t.$store.state.user.id)}})).catch((function(t){window.console.log(t)}))},changeInfo:function(){this.showDialog=!0},headUpload:function(t){this.upload.url=t.url},uploadSubmit:function(){var t=this;this.$refs.upload.validate((function(e){if(!e)return!1;t.$axios.post("https://www.bixiaohe.fun/upload-info",t.upload).then((function(e){t.user.name=e.data.name,t.user.address=e.data.address,t.user.url=e.data.url,t.showDialog=!1}))}))},toChat:function(){window.open("https://www.bixiaohe.fun/chat")}},mounted:function(){this.getInfo(),document.cookie="token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE1NzQxNDQ2MTksImV4cCI6MTU3NDIzMTAxOX0.Wl857zRQUUClgCbaKZGq00HOi7hEJ-_3E4I74sM9ppc"}}),v=m,b=(o("5c0b"),o("2877")),g=Object(b["a"])(v,p,f,!1,null,null,null),w=g.exports,y=o("8c4f"),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"main-container"}},[t.roomList.length?t._e():o("div",{staticClass:"no-room"},[t._v(" 暂无房间 ")]),t._l(t.roomList,(function(e,s){return o("div",{key:s,staticClass:"room-container"},[o("el-card",{attrs:{"body-style":{padding:"10px"}}},[o("div",{staticClass:"image"},[o("img",{staticClass:"room-img",attrs:{src:"https://www.bixiaohe.fun/img/timg (7).jpg"}})]),o("div",{staticClass:"text",staticStyle:{padding:"14px"}},[o("div",[o("p",[t._v("房间号: "+t._s(e.houseId))]),o("p",[t._v("类型："+t._s(t._f("type")(e.type)))]),o("p",[t._v("玩家："+t._s(t._f("users")(e.user)))])])]),o("div",{staticClass:"bottom clearfix"},[o("el-button",{staticClass:"button",attrs:{type:"primary",round:""},on:{click:function(o){return t.goRoom(e)}}},[t._v("进入房间")])],1)])],1)})),o("div",{staticClass:"createRoom"},[o("el-button",{staticStyle:{transform:"translate(-100%, 0)"},attrs:{round:""},on:{click:function(e){t.dialogVisible=!0}}},[t._v("创建房间")])],1),o("el-dialog",{attrs:{title:"创建房间",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("span",[t._v("类型：")]),o("el-select",{attrs:{placeholder:"请选择"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.options,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.createRoom}},[t._v("确 定")])],1)],1),o("el-dialog",{attrs:{title:"提示",visible:t.showJoin,width:"30%"},on:{"update:visible":function(e){t.showJoin=e}}},[o("span",[t._v("你有正在进行中的游戏，是否进入该房间")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.quit}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.backHouse}},[t._v("确 定")])],1)])],2)},x=[],k=(o("ac6a"),{filters:{type:function(t){switch(t){case"1":return"猜拳"}},users:function(t){var e=t.map((function(t){return t.name}));return e.join(" | ")}},data:function(){return{roomList:[],dialogVisible:!1,options:[{value:"1",label:"石头剪刀布",disabled:!1},{value:"2",label:"多人画室",disabled:!1},{value:"3",label:"双扣(暂未开放)",disabled:!0}],type:"",showJoin:!1,houseId:""}},sockets:{houseList:function(t){var e=this;this.roomList=t,t.forEach((function(t){t.user.forEach((function(o){o.id==e.$store.state.user.id&&(e.houseId=t.houseId,e.showJoin=!0)}))})),window.console.log("房间列表"),window.console.log(this.roomList)},createHouse:function(t){var e=this;window.console.log("接收参数",t),t.forEach((function(t){t.user[0].id==e.$store.state.user.id?(e.$store.commit("getInfo",t.user[0]),"1"==e.type&&e.$router.push("/battle?houseId=".concat(t.houseId))):"2"==e.type&&e.$router.push("/paint?houseId=".concat(t.houseId))}))},leave:function(t){window.console.log(t)}},methods:{test:function(){this.$socket.emit("action",[{x:1,y:2}])},createRoom:function(){var t={type:this.type,userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url};this.$socket.emit("createHouse",t)},goRoom:function(t){this.$socket.emit("addUser",{houseId:t.houseId,userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url}),"1"===t.type?this.$router.push("/battle?houseId=".concat(t.houseId)):"2"===t.type&&this.$router.push("/paint?houseId=".concat(t.houseId))},backHouse:function(){"1"==this.type?this.$router.push("/battle?houseId=".concat(this.houseId)):"2"==this.type&&this.$router.push("/paint?houseId=".concat(this.houseId))},quit:function(){this.showJoin=!1,this.$socket.emit("userLeave",{houseId:this.houseId,userId:this.$store.state.user.id})}},mounted:function(){window.console.log("初始化"),this.$socket.emit("houseList")}}),I=k,C=(o("1812"),Object(b["a"])(I,_,x,!1,null,null,null)),$=C.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"battle"}},[o("el-button",{attrs:{icon:"el-icon-arrow-left",disabled:!!t.isReady},on:{click:t.quit}},[t._v("\n    离开\n  ")]),o("div",{staticClass:"main"},[o("div",{staticClass:"left"},[o("div",{staticClass:"card"},[o("img",{attrs:{src:"https://www.bixiaohe.fun/"+t.user.url}}),o("p",[t._v("昵称:"+t._s(t.user.name))]),o("p",[t._v("状态:"+t._s(t._f("state")(t.user.state))),t.user.state?o("i",{staticClass:"el-icon-success"}):t._e()]),t.user.operation&&0!=t.user.operation?o("p",[t._v("已确定"),o("i",{staticClass:"el-icon-success"})]):t._e()])]),o("div",{staticClass:"fight"},[""!=t.result?o("div",[o("p",{staticStyle:{"font-weight":"500"}},[t._v("对战结果")]),o("p",[t._v("我方："+t._s(t._f("operation")(t.user.operation)))]),o("p",[t._v("玩家 "+t._s(t.other.name)+"："+t._s(t._f("operation")(t.other.operation)))]),o("p",[t._v(t._s(t.result))]),o("div",[o("el-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("再来一局")]),o("el-button",{on:{click:t.quit}},[t._v("退出")])],1)]):t._e()]),o("div",{staticClass:"right"},[o("div",{staticClass:"card"},[t.other.name?o("div",[o("img",{attrs:{src:"https://www.bixiaohe.fun/"+t.other.url}}),o("p",[t._v("昵称: "+t._s(t.other.name))]),o("p",[t._v("状态:"+t._s(t._f("state")(t.other.state))),t.other.state?o("i",{staticClass:"el-icon-success"}):t._e()]),0!=t.other.operation?o("p",[t._v("已确定"),t.user.state?o("i",{staticClass:"el-icon-success"}):t._e()]):t._e()]):o("div",[o("img",{attrs:{src:"https://www.bixiaohe.fun/img/default.jpg"}}),o("p",[t._v("等待玩家加入...")])])])])]),!t.bothReady&&t.isAgain?o("div",{staticClass:"ready"},[o("el-button",{staticStyle:{"font-size":"18px"},attrs:{icon:t.isReady?"el-icon-circle-check":"",type:t.isReady?"primary":""},on:{click:t.ready}},[t._v("\n      "+t._s(t.readyButton)+"\n    ")])],1):o("div",{staticClass:"operation"},t._l(t.button,(function(e,s){return o("el-button",{key:s,attrs:{disabled:e.state,type:e.type},on:{click:function(o){return t.done(e,s)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)],1)},R=[],E={filters:{state:function(t){return 1==t?"已准备":0==t?"未准备":void 0},operation:function(t){switch(t){case 1:return"石头";case 2:return"剪刀";case 3:return"布"}}},data:function(){return{user:this.$store.state.user,other:{},readyButton:"准备",isReady:!1,bothReady:!1,isAgain:!0,button:[{name:"石头",value:1,state:!1,type:""},{name:"剪刀",value:2,state:!1,type:""},{name:"布",value:3,state:!1,type:""}],result:""}},methods:{ready:function(){"准备"===this.readyButton?(this.readyButton="准备中",this.isReady=!0,this.$socket.emit("ready",{userId:this.user.id,houseId:this.$route.query.houseId,state:1})):(this.readyButton="准备",this.isReady=!1,this.$socket.emit("ready",{userId:this.user.id,houseId:this.$route.query.houseId,state:0}))},quit:function(){this.$socket.emit("userLeave",{houseId:this.$route.query.houseId,userId:this.$store.state.user.id}),this.$router.push("/main")},done:function(t,e){this.button[e].type="success",this.$socket.emit("done",{houseId:this.$route.query.houseId,userId:this.$store.state.user.id,operation:t.value}),this.button.forEach((function(t){t.state=!0}))},init:function(){this.$socket.emit("ready",{userId:this.user.id,houseId:this.$route.query.houseId,state:0}),this.isReady=!1,this.isAgain=!0,this.bothReady=!1,this.readyButton="准备",this.result="",this.button.forEach((function(t){t.type="",t.state=!1}))}},sockets:{ready:function(t){var e=this;window.console.log("状态",t);var o=!0;t.user.forEach((function(t){0==t.state&&(o=!1),t.id!=e.user.id?e.other=t:t.id==e.user.id&&(e.$store.commit("getInfo",t),e.user=t)})),t.user.length>1&&(this.bothReady=o),window.console.log(o,this.bothReady)},addUser:function(t){var e=this;window.console.log("addUser",t),t.user.forEach((function(t){t.id!=e.user.id?e.other=t:t.id==e.user.id&&(e.$store.commit("getInfo",t),e.user=t)}))},houseList:function(t){var e=this;window.console.log("房间状态变化"),t.forEach((function(t){t.houseId==e.$route.query.houseId&&1==t.user.length&&(e.other={},window.console.log("other",e.other))}))},operation:function(t){var e=this;window.console.log("出拳结果",t),t.user.forEach((function(t){t.id==e.user.id?(e.$store.commit("getInfo",t),e.user=t):t.id==e.other.id&&(e.other=t)})),0!=this.user.operation&&0!=this.other.operation&&(this.user.operation==this.other.operation?this.result="平局~":this.user.operation<this.other.operation?this.user.operation+1==this.other.operation?this.result="".concat(this.user.name,"获胜~"):this.result="".concat(this.other.name,"获胜~"):this.user.operation>this.other.operation&&(this.other.operation+1==this.user.operation?this.result="".concat(this.other.name,"获胜~"):this.result="".concat(this.user.name,"获胜~")),this.isAgain=!1,this.$store.dispatch("setHistory",{userA:this.user.id,userB:this.other.id,userAOperation:this.user.operation,userBOperation:this.other.operation,houseId:this.$route.query.houseId,type:1}))}},mounted:function(){window.console.log(this.user)}},z=E,O=(o("2b8c"),Object(b["a"])(z,S,R,!1,null,null,null)),B=O.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main"},[o("div",{staticStyle:{height:"500px",width:"1000px"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"true",data:t.tableData}},[o("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("date")(e.row.date))+"\n        ")]}}])}),o("el-table-column",{attrs:{label:"房间id",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.houseId)+"\n        ")]}}])}),o("el-table-column",{attrs:{label:"房间类型",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("type")(e.row.type))+"\n        ")]}}])}),o("el-table-column",{attrs:{label:"我方出拳",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("operation")(e.row.userAOperation))+"\n        ")]}}])}),o("el-table-column",{attrs:{prop:"userB",label:"玩家id"}}),o("el-table-column",{attrs:{label:"玩家出拳"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("operation")(e.row.userBOperation))+"\n        ")]}}])})],1)],1),o("div",{ref:"canvas1",staticStyle:{width:"600px",height:"400px"},attrs:{id:"echart"}})])},L=[],q=o("3eba");o("c037"),o("007d"),o("627c"),o("d28f");var P={filters:{type:function(t){if(1==t)return"猜拳"},operation:function(t){switch(t){case"1":return"石头";case"2":return"剪刀";case"3":return"布"}},date:function(t){return null==t?"-":t.slice(0,19)}},data:function(){return{tableData:[],operations:[0,0,0]}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,o=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getHistory",{userA:this.$store.state.user.id});case 2:this.tableData=t.sent,this.tableData.reverse(),e=this.tableData.map((function(t){return t.userAOperation})),e.forEach((function(t){1==t?o.operations[0]++:2==t?o.operations[1]++:3==t&&o.operations[2]++})),this.drawChart(),window.console.log(this.operations);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),drawChart:function(){var t=q.init(this.$refs.canvas1),e={title:{text:"出拳统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["石头","剪刀","布"]},series:[{name:"次数",type:"pie",radius:"70%",center:["50%","60%"],data:[{value:this.operations[0],name:"石头"},{value:this.operations[1],name:"剪刀"},{value:this.operations[2],name:"布"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};t.setOption(e)}},mounted:function(){this.getData()}},D=P,J=(o("1484"),Object(b["a"])(D,j,L,!1,null,null,null)),U=J.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"users"},t._l(t.list,(function(e,s){return o("div",{key:s,staticClass:"user"},[o("div",{staticClass:"head"},[o("img",{attrs:{src:"https://www.bixiaohe.fun/"+e.url}})]),o("div",{staticClass:"name"},[t._v(t._s(e.name))])])})),0),o("div",{staticStyle:{display:"flex",border:"1px solid #999999","font-size":"14px",color:"#dddddd"}},[o("div",{staticClass:"tools"},[o("canvas",{attrs:{id:"color",width:"200",height:"200"}}),o("div",{staticClass:"color-number"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.pen.color,expression:"pen.color"}],domProps:{value:t.pen.color},on:{input:function(e){e.target.composing||t.$set(t.pen,"color",e.target.value)}}})]),o("div",[t._v("\n          色板\n          "),o("div",{staticClass:"color-block"},[o("div",{staticClass:"blk1",on:{click:function(e){return t.colorBlock("#d83741")}}}),o("div",{staticClass:"blk2",on:{click:function(e){return t.colorBlock("#af26b9")}}}),o("div",{staticClass:"blk3",on:{click:function(e){return t.colorBlock("#413bda")}}}),o("div",{staticClass:"blk4",on:{click:function(e){return t.colorBlock("#12c0db")}}}),o("div",{staticClass:"blk5",on:{click:function(e){return t.colorBlock("#22db2a")}}}),o("div",{staticClass:"blk6",on:{click:function(e){return t.colorBlock("#c5d229")}}}),o("div",{staticClass:"blk7",on:{click:function(e){return t.colorBlock("#d1540f")}}}),o("div",{staticClass:"blk8",on:{click:function(e){return t.colorBlock("#ffffff")}}})])]),o("div",{staticClass:"pen"},[t._v("\n          画笔\n          "),o("div",{staticClass:"pen-list"},t._l(t.pens,(function(e,s){return o("div",{key:s,style:{background:e.bg},on:{click:function(e){return t.changeSize(s)}}},[o("div",{staticClass:"pen-size",style:{background:t.bg,width:e.size,height:e.size}})])})),0),o("el-slider",{attrs:{max:"50"},on:{change:function(e){return t.changeSize(t.pen.size)}},model:{value:t.pen.size,callback:function(e){t.$set(t.pen,"size",e)},expression:"pen.size"}})],1)]),o("canvas",{ref:"canvas",attrs:{id:"canv",width:"1000",height:"820"}})])])},A=[],M=(o("6b54"),o("6c7b"),{data:function(){return{user:this.$store.state.user,draw:!1,list:[this.$store.state.user],pen:{color:"#6b2d96",size:1},initPoint:{offsetX:1,offsetY:1},pens:[{size:"1px",bg:""},{size:"2px",bg:""},{size:"4px",bg:""},{size:"6px",bg:""},{size:"8px",bg:""},{size:"10px",bg:""},{size:"12px",bg:""},{size:"14px",bg:""},{size:"16px",bg:""}],bg:"#dddddd"}},sockets:{ac:function(t){window.console.log("笔画"),window.console.log(t),this.pen=t.pen;var e=document.getElementById("canv"),o=e.getContext("2d");o.strokeStyle=t.pen.color,o.fillStyle=t.pen.color,o.lineWidth=t.pen.size,t.arr.forEach((function(t,e){o.lineTo(t.x,t.y),0===e&&(o.arc(t.x,t.y,0,0,2*Math.PI,!0),o.stroke(),window.console.log("执行fill")),o.stroke()})),o.beginPath()},RoomInit:function(t){var e=document.getElementById("canv"),o=e.getContext("2d"),s=new Image;s.src=t,window.console.log("base64",t),setTimeout((function(){o.drawImage(s,0,0,1e3,820)}),2e3)},addUser:function(t){var e=this;window.console.log("addUser",t),t.user.forEach((function(t){t.id!=e.user.id?e.other=t:t.id==e.user.id&&(e.$store.commit("getInfo",t),e.user=t)}))}},methods:{canvInit:function(){var t=this,e=[],o=document.getElementById("color"),s=o.getContext("2d");s.beginPath();var i=s.createLinearGradient(0,0,0,160);i.addColorStop(0,"#f00"),i.addColorStop(1/6,"#f0f"),i.addColorStop(2/6,"#00f"),i.addColorStop(.5,"#0ff"),i.addColorStop(4/6,"#0f0"),i.addColorStop(5/6,"#ff0"),i.addColorStop(1,"#f00"),s.fillStyle=i,s.fillRect(0,0,20,160),o.addEventListener("mousedown",d,!1);var n=document.getElementById("canv"),r=n.getContext("2d");function a(o){var s=o.offsetX,i=o.offsetY;this.draw=!0,r.arc(s,i,t.pen.size/2,0,2*Math.PI,!0),r.fillStyle=t.pen.color,r.fill(),r.beginPath(),r.moveTo(s,i),e.push({x:s,y:i})}function u(){this.draw=!1,r.beginPath(),t.$socket.emit("action",{houseId:t.$route.query.houseId,arr:e,pen:t.pen}),e=[]}function l(t){var o=t.offsetX,s=t.offsetY;!0===this.draw&&(e.push({x:o,y:s}),r.lineTo(o,s),r.stroke())}function c(){this.draw=!1}function d(e){var o=s.getImageData(e.offsetX,e.offsetY,1,1);if(t.pen.color=t.rgb(o.data),e.offsetX<20){var i=s.createLinearGradient(30,0,170,0);i.addColorStop(1,t.pen.color),i.addColorStop(0,"white"),s.fillStyle=i,s.fillRect(30,0,190,160);var n=s.createLinearGradient(30,0,30,140);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),s.fillStyle=n,s.fillRect(30,0,190,160)}(e.offsetX>20||1===e.offsetX)&&(s.fillStyle=t.pen.color,s.fillRect(0,170,20,20),r.strokeStyle=t.pen.color)}r.lineCap="round",r.fillStyle="#fff",r.fillRect(0,0,1e3,820),n.addEventListener("mousedown",a,!1),n.addEventListener("mouseup",u,!1),n.addEventListener("mousemove",l,!1),n.addEventListener("mouseout",c,!1),d(this.initPoint)},rgb:function(t){var e=(1<<24)+65536*t[0]+256*t[1]+t[2];return e=e.toString(16),"#"+e.slice(1)},colorBlock:function(t){this.pen.color=t;var e=document.getElementById("color"),o=e.getContext("2d"),s=document.getElementById("canv"),i=s.getContext("2d");o.fillStyle=t,o.fillRect(0,170,20,20),i.strokeStyle=this.pen.color},changeSize:function(t){var e=this;this.pen.size=t+1;var o=document.getElementById("canv"),s=o.getContext("2d");s.lineWidth=t+1,this.pens.forEach((function(o,s){e.pens[s].bg=s===t?"#aaaaaa":""}))}},mounted:function(){this.canvInit(),this.$socket.emit("RoomInit",{houseId:this.$route.query.houseId,userId:this.$store.state.user.id})}}),T=M,H=(o("252e"),Object(b["a"])(T,X,A,!1,null,"47f4f875",null)),V=H.exports;h.a.use(y["a"]);var N=new y["a"]({routes:[{path:"/",redirect:"/main"},{path:"/main",component:$,meta:{title:"对战大厅"}},{path:"/battle",component:B,meta:{title:"猜拳"}},{path:"/paint",component:V,meta:{title:"画室"}},{path:"/history",component:U,meta:{title:"历史记录"}}]}),G=o("28dd");r.a.defaults.withCredentials=!0,h.a.prototype.$axios=r.a,h.a.use(u["a"]),h.a.use(new i.a({debug:!0,connection:"https://www.bixiaohe.fun"})),h.a.use(G["a"]),h.a.config.productionTip=!1,N.beforeEach((function(t,e,o){t.meta.title&&(document.title=t.meta.title),o()})),new h.a({render:function(t){return t(w)},router:N,store:c}).$mount("#app")},5905:function(t,e,o){},"5c0b":function(t,e,o){"use strict";var s=o("e332"),i=o.n(s);i.a},"5c92":function(t,e,o){},"5fe1":function(t,e,o){},"8bbf":function(t,e){t.exports=Vue},e332:function(t,e,o){}});