(function(t){function e(e){for(var o,r,a=e[0],u=e[1],l=e[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);c&&c(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,a=1;a<s.length;a++){var u=s[a];0!==i[u]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var o={},i={app:0},n=[];function r(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=o,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(s,o,function(e){return t[e]}.bind(null,o));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=u;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1:function(t,e){},1263:function(t,e,s){},1484:function(t,e,s){"use strict";var o=s("5c92"),i=s.n(o);i.a},"15bd":function(t,e,s){},1812:function(t,e,s){"use strict";var o=s("1263"),i=s.n(o);i.a},"2b8c":function(t,e,s){"use strict";var o=s("5905"),i=s.n(o);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("5132"),i=s.n(o),n=s("bc3a"),r=s.n(n),a=(s("96cf"),s("3b8d")),u=s("2f62"),l=function(){return new u["a"].Store({strict:!1,state:function(){return{user:{}}},mutations:{setInfo:function(t,e){t.user=e}},actions:{getInfo:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("https://www.bixiaohe.fun/user-info");case 2:return s=t.sent,e.commit("setInfo",s.data),t.abrupt("return",s);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),setHistory:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,s){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/set-game",s);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}(),getHistory:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(e,s){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/get-game",s);case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})));function e(e,s){return t.apply(this,arguments)}return e}()}})},c=l,d=s("8bbf"),h=s.n(d),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"top-container"},[s("p",{staticStyle:{display:"inline-block",width:"200px",padding:"0",margin:"0",height:"50px",background:"#333333"}}),s("span",{staticStyle:{padding:"16px 36px"},on:{click:function(e){return t.$router.push("/main")}}},[s("i",{staticClass:"el-icon-s-home",staticStyle:{height:"18px","padding-right":"4px"}}),t._v("\n      大厅\n    ")]),s("span",{on:{click:function(e){return t.$router.push("/history")}}},[s("i",{staticClass:"el-icon-date",staticStyle:{height:"18px","padding-right":"4px"}}),t._v("\n      对战记录\n    ")]),s("span",{on:{click:function(e){return t.toChat()}}},[t._v("\n      好友\n    ")]),s("el-input",{staticClass:"input"},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),s("div",{staticClass:"center-container"},[s("aside",{staticClass:"left-container"},[s("div",{staticStyle:{width:"60px",height:"60px","padding-left":"70px"}},[s("img",{staticClass:"head-img",staticStyle:{width:"60px"},attrs:{src:null==t.user.url?"https://www.bixiaohe.fun/img/default.jpg":"https://www.bixiaohe.fun"+t.user.url,alt:"点击修改个人信息"},on:{click:t.changeInfo}})]),s("p",[t._v("昵称 :"+t._s(t.user.name))]),s("p",[t._v("id :"+t._s(t.user.id))]),s("p",[t._v("地址 :"+t._s(t.user.address))])]),s("div",{staticClass:"main-card"},[s("router-view")],1)]),s("el-dialog",{staticStyle:{width:"1500px"},attrs:{visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[s("el-form",{ref:"upload",staticStyle:{margin:"40px 0 0 40px","text-align":"left",width:"300px"},attrs:{model:t.upload,rules:t.uploadRule,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"头像",prop:"url"}},[s("el-upload",{staticClass:"upload",attrs:{action:"https://www.bixiaohe.fun/upload-img",method:"post",name:"user","on-success":t.headUpload}},[t.upload.url?s("img",{staticClass:"upload-img",attrs:{src:"https://www.bixiaohe.fun"+t.upload.url}}):s("i",{staticClass:"el-icon-plus"})])],1),s("el-form-item",{attrs:{label:"昵称",prop:"name"}},[s("el-input",{attrs:{size:"small"},model:{value:t.upload.name,callback:function(e){t.$set(t.upload,"name",e)},expression:"upload.name"}})],1),s("el-form-item",{attrs:{label:"地址",prop:"address"}},[s("el-input",{attrs:{size:"small"},model:{value:t.upload.address,callback:function(e){t.$set(t.upload,"address",e)},expression:"upload.address"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.uploadSubmit}},[t._v("\n            修改\n          ")])],1)],1)],1)],1)},f=[],m=(s("7f7f"),{data:function(){return{user:{url:""},houseList:{},showDialog:!1,upload:{url:"",name:"",address:""},uploadRule:{url:[{required:!0,message:"请选择图片",trigger:"blur"}],name:[{required:!0,message:"昵称不能为空",trigger:"blur"}],address:[{required:!0,message:"地址不能为空",trigger:"blur"}]}}},methods:{getInfo:function(){var t=this;this.$store.dispatch("getInfo").then((function(e){if(1==e.status)window.location.href="https://www.bixiaohe.fun";else{for(var s in t.user=t.$store.state.user,window.console.log(t.user),t.upload)t.upload[s]=t.user[s];window.console.log("upload:",t.upload),t.$socket.emit("online",t.$store.state.user.id)}})).catch((function(t){window.console.log(t)}))},changeInfo:function(){this.showDialog=!0},headUpload:function(t){this.upload.url=t.url},uploadSubmit:function(){var t=this;this.$refs.upload.validate((function(e){if(!e)return!1;t.$axios.post("https://www.bixiaohe.fun/upload-info",t.upload).then((function(e){t.user.name=e.data.name,t.user.address=e.data.address,t.user.url=e.data.url,t.showDialog=!1}))}))},toChat:function(){window.open("https://www.bixiaohe.fun/chat")}},mounted:function(){this.getInfo(),document.cookie="token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE1NzQxNDQ2MTksImV4cCI6MTU3NDIzMTAxOX0.Wl857zRQUUClgCbaKZGq00HOi7hEJ-_3E4I74sM9ppc"}}),v=m,b=(s("5c0b"),s("2877")),g=Object(b["a"])(v,p,f,!1,null,null,null),w=g.exports,y=s("8c4f"),_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main-container"}},[t.roomList.length?t._e():s("div",{staticClass:"no-room"},[t._v(" 暂无房间 ")]),t._l(t.roomList,(function(e,o){return s("div",{key:o,staticClass:"room-container"},[s("el-card",{attrs:{"body-style":{padding:"10px"}}},[s("div",{staticClass:"image"},[s("img",{staticClass:"room-img",attrs:{src:"https://www.bixiaohe.fun/img/"+("1"===e.type?"battle.jpg":"paint.jpg")}})]),s("div",{staticClass:"text",staticStyle:{padding:"14px"}},[s("div",[s("p",[t._v("房间号: "+t._s(e.houseId))]),s("p",[t._v("类型："+t._s(t._f("type")(e.type)))]),s("p",[t._v("玩家："+t._s(t._f("users")(e.user)))])])]),s("div",{staticClass:"bottom clearfix"},[s("el-button",{staticClass:"button",attrs:{type:"primary",round:""},on:{click:function(s){return t.goRoom(e)}}},[t._v("进入房间")])],1)])],1)})),s("div",{staticClass:"createRoom"},[s("el-button",{staticStyle:{transform:"translate(-100%, 0)"},attrs:{round:""},on:{click:function(e){t.dialogVisible=!0}}},[t._v("创建房间")])],1),s("el-dialog",{attrs:{title:"创建房间",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("span",[t._v("类型：")]),s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.options,(function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value,disabled:t.disabled}})})),1),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.createRoom}},[t._v("确 定")])],1)],1),s("el-dialog",{attrs:{title:"提示",visible:t.showJoin,width:"30%"},on:{"update:visible":function(e){t.showJoin=e}}},[s("span",[t._v("你有正在进行中的游戏，是否进入该房间")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.quit}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.backHouse}},[t._v("确 定")])],1)])],2)},x=[],k=(s("ac6a"),{filters:{type:function(t){switch(t){case"1":return"猜拳";case"2":return"画室"}},users:function(t){var e=t.map((function(t){return t.name}));return e.join(" | ")}},data:function(){return{roomList:[],dialogVisible:!1,options:[{value:"1",label:"石头剪刀布",disabled:!1},{value:"2",label:"多人画室",disabled:!1},{value:"3",label:"双扣(暂未开放)",disabled:!0}],type:"",showJoin:!1,houseId:""}},sockets:{houseList:function(t){var e=this;this.roomList=t,t.forEach((function(t){t.user.forEach((function(s){s.id==e.$store.state.user.id&&(e.houseId=t.houseId,e.showJoin=!0)}))})),window.console.log("房间列表"),window.console.log(this.roomList)},createHouse:function(t){var e=this;window.console.log("接收参数",t),t.forEach((function(t){t.user[0].id==e.$store.state.user.id&&(e.$store.commit("setInfo",t.user[0]),"1"==e.type?e.$router.push("/battle?houseId=".concat(t.houseId)):"2"==e.type&&e.$router.push("/paint?houseId=".concat(t.houseId)))}))},leave:function(t){window.console.log(t)}},methods:{test:function(){this.$socket.emit("action",[{x:1,y:2}])},createRoom:function(){var t={type:this.type,userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url};this.$socket.emit("createHouse",t)},goRoom:function(t){this.$socket.emit("addUser",{houseId:t.houseId,userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url}),"1"===t.type?this.$router.push("/battle?houseId=".concat(t.houseId)):"2"===t.type&&this.$router.push("/paint?houseId=".concat(t.houseId))},backHouse:function(){"1"==this.type?this.$router.push("/battle?houseId=".concat(this.houseId)):"2"==this.type&&this.$router.push("/paint?houseId=".concat(this.houseId))},quit:function(){this.showJoin=!1,this.$socket.emit("userLeave",{houseId:this.houseId,userId:this.$store.state.user.id})}},mounted:function(){window.console.log("初始化"),this.$socket.emit("houseList")}}),I=k,C=(s("1812"),Object(b["a"])(I,_,x,!1,null,null,null)),$=C.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"battle"}},[s("el-button",{attrs:{icon:"el-icon-arrow-left",disabled:!!t.isReady},on:{click:t.quit}},[t._v("\n    离开\n  ")]),s("div",{staticClass:"main"},[s("div",{staticClass:"left"},[s("div",{staticClass:"card"},[s("img",{attrs:{src:"https://www.bixiaohe.fun/"+t.user.url}}),s("p",[t._v("昵称:"+t._s(t.user.name))]),s("p",[t._v("状态:"+t._s(t._f("state")(t.user.state))),t.user.state?s("i",{staticClass:"el-icon-success"}):t._e()]),t.user.operation&&0!=t.user.operation?s("p",[t._v("已确定"),s("i",{staticClass:"el-icon-success"})]):t._e()])]),s("div",{staticClass:"fight"},[""!=t.result?s("div",[s("p",{staticStyle:{"font-weight":"500"}},[t._v("对战结果")]),s("p",[t._v("我方："+t._s(t._f("operation")(t.user.operation)))]),s("p",[t._v("玩家 "+t._s(t.other.name)+"："+t._s(t._f("operation")(t.other.operation)))]),s("p",[t._v(t._s(t.result))]),s("div",[s("el-button",{attrs:{type:"primary"},on:{click:t.init}},[t._v("再来一局")]),s("el-button",{on:{click:t.quit}},[t._v("退出")])],1)]):t._e()]),s("div",{staticClass:"right"},[s("div",{staticClass:"card"},[t.other.name?s("div",[s("img",{attrs:{src:"https://www.bixiaohe.fun/"+t.other.url}}),s("p",[t._v("昵称: "+t._s(t.other.name))]),s("p",[t._v("状态:"+t._s(t._f("state")(t.other.state))),t.other.state?s("i",{staticClass:"el-icon-success"}):t._e()]),0!=t.other.operation?s("p",[t._v("已确定"),t.user.state?s("i",{staticClass:"el-icon-success"}):t._e()]):t._e()]):s("div",[s("img",{attrs:{src:"https://www.bixiaohe.fun/img/default.jpg"}}),s("p",[t._v("等待玩家加入...")])])])])]),!t.bothReady&&t.isAgain?s("div",{staticClass:"ready"},[s("el-button",{staticStyle:{"font-size":"18px"},attrs:{icon:t.isReady?"el-icon-circle-check":"",type:t.isReady?"primary":""},on:{click:t.ready}},[t._v("\n      "+t._s(t.readyButton)+"\n    ")])],1):s("div",{staticClass:"operation"},t._l(t.button,(function(e,o){return s("el-button",{key:o,attrs:{disabled:e.state,type:e.type},on:{click:function(s){return t.done(e,o)}}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),1)],1)},R=[],z={filters:{state:function(t){return 1==t?"已准备":0==t?"未准备":void 0},operation:function(t){switch(t){case 1:return"石头";case 2:return"剪刀";case 3:return"布"}}},data:function(){return{user:this.$store.state.user,other:{},readyButton:"准备",isReady:!1,bothReady:!1,isAgain:!0,button:[{name:"石头",value:1,state:!1,type:""},{name:"剪刀",value:2,state:!1,type:""},{name:"布",value:3,state:!1,type:""}],result:""}},methods:{ready:function(){"准备"===this.readyButton?(this.readyButton="准备中",this.isReady=!0,this.$socket.emit("ready",{userId:this.user.id,houseId:this.$route.query.houseId,state:1})):(this.readyButton="准备",this.isReady=!1,this.$socket.emit("ready",{userId:this.user.id,houseId:this.$route.query.houseId,state:0}))},quit:function(){this.$socket.emit("userLeave",{houseId:this.$route.query.houseId,userId:this.$store.state.user.id}),this.$router.push("/main")},done:function(t,e){this.button[e].type="success",this.$socket.emit("done",{houseId:this.$route.query.houseId,userId:this.$store.state.user.id,operation:t.value}),this.button.forEach((function(t){t.state=!0}))},init:function(){this.$socket.emit("ready",{userId:this.user.id,houseId:this.$route.query.houseId,state:0}),this.isReady=!1,this.isAgain=!0,this.bothReady=!1,this.readyButton="准备",this.result="",this.button.forEach((function(t){t.type="",t.state=!1}))}},sockets:{ready:function(t){var e=this;window.console.log("状态",t);var s=!0;t.user.forEach((function(t){0==t.state&&(s=!1),t.id!=e.user.id?e.other=t:t.id==e.user.id&&(e.$store.commit("setInfo",t),e.user=t)})),t.user.length>1&&(this.bothReady=s),window.console.log(s,this.bothReady)},addUser:function(t){var e=this;window.console.log("addUser",t),t.user.forEach((function(t){t.id!=e.user.id?e.other=t:t.id==e.user.id&&(e.$store.commit("setInfo",t),e.user=t)}))},houseList:function(t){var e=this;window.console.log("房间状态变化"),t.forEach((function(t){t.houseId==e.$route.query.houseId&&1==t.user.length&&(e.other={},window.console.log("other",e.other))}))},operation:function(t){var e=this;window.console.log("出拳结果",t),t.user.forEach((function(t){t.id==e.user.id?(e.$store.commit("setInfo",t),e.user=t):t.id==e.other.id&&(e.other=t)})),0!=this.user.operation&&0!=this.other.operation&&(this.user.operation==this.other.operation?this.result="平局~":this.user.operation<this.other.operation?this.user.operation+1==this.other.operation?this.result="".concat(this.user.name,"获胜~"):this.result="".concat(this.other.name,"获胜~"):this.user.operation>this.other.operation&&(this.other.operation+1==this.user.operation?this.result="".concat(this.other.name,"获胜~"):this.result="".concat(this.user.name,"获胜~")),this.isAgain=!1,this.$store.dispatch("setHistory",{userA:this.user.id,userB:this.other.id,userAOperation:this.user.operation,userBOperation:this.other.operation,houseId:this.$route.query.houseId,type:1}))}},mounted:function(){window.console.log(this.user)}},E=z,O=(s("2b8c"),Object(b["a"])(E,S,R,!1,null,null,null)),B=O.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticStyle:{height:"500px",width:"1000px"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"true",data:t.tableData}},[s("el-table-column",{attrs:{label:"日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("date")(e.row.date))+"\n        ")]}}])}),s("el-table-column",{attrs:{label:"房间id",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(e.row.houseId)+"\n        ")]}}])}),s("el-table-column",{attrs:{label:"房间类型",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("type")(e.row.type))+"\n        ")]}}])}),s("el-table-column",{attrs:{label:"我方出拳",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("operation")(e.row.userAOperation))+"\n        ")]}}])}),s("el-table-column",{attrs:{prop:"userB",label:"玩家id"}}),s("el-table-column",{attrs:{label:"玩家出拳"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("operation")(e.row.userBOperation))+"\n        ")]}}])})],1)],1),s("div",{ref:"canvas1",staticStyle:{width:"600px",height:"400px"},attrs:{id:"echart"}})])},L=[],q=s("3eba");s("c037"),s("007d"),s("627c"),s("d28f");var D={filters:{type:function(t){if(1==t)return"猜拳"},operation:function(t){switch(t){case"1":return"石头";case"2":return"剪刀";case"3":return"布"}},date:function(t){return null==t?"-":t.slice(0,19)}},data:function(){return{tableData:[],operations:[0,0,0]}},methods:{getData:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getHistory",{userA:this.$store.state.user.id});case 2:this.tableData=t.sent,this.tableData.reverse(),e=this.tableData.map((function(t){return t.userAOperation})),e.forEach((function(t){1==t?s.operations[0]++:2==t?s.operations[1]++:3==t&&s.operations[2]++})),this.drawChart(),window.console.log(this.operations);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),drawChart:function(){var t=q.init(this.$refs.canvas1),e={title:{text:"出拳统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["石头","剪刀","布"]},series:[{name:"次数",type:"pie",radius:"70%",center:["50%","60%"],data:[{value:this.operations[0],name:"石头"},{value:this.operations[1],name:"剪刀"},{value:this.operations[2],name:"布"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};t.setOption(e)}},mounted:function(){this.getData()}},P=D,J=(s("1484"),Object(b["a"])(P,j,L,!1,null,null,null)),U=J.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"users"},t._l(t.list,(function(e,o){return s("div",{key:o,staticClass:"user"},[s("div",{staticClass:"head"},[s("img",{attrs:{src:"https://www.bixiaohe.fun/"+e.url}})]),s("div",{staticClass:"name"},[t._v(t._s(e.name))])])})),0),s("div",{staticStyle:{display:"flex",border:"1px solid #999999","font-size":"14px",color:"#dddddd"}},[s("div",{staticClass:"tools"},[s("canvas",{attrs:{id:"color",width:"200",height:"200"}}),s("div",{staticClass:"color-number"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pen.color,expression:"pen.color"}],domProps:{value:t.pen.color},on:{input:function(e){e.target.composing||t.$set(t.pen,"color",e.target.value)}}})]),s("div",[t._v("\n          色板\n          "),s("div",{staticClass:"color-block"},[s("div",{staticClass:"blk1",on:{click:function(e){return t.colorBlock("#d83741")}}}),s("div",{staticClass:"blk2",on:{click:function(e){return t.colorBlock("#af26b9")}}}),s("div",{staticClass:"blk3",on:{click:function(e){return t.colorBlock("#413bda")}}}),s("div",{staticClass:"blk4",on:{click:function(e){return t.colorBlock("#12c0db")}}}),s("div",{staticClass:"blk5",on:{click:function(e){return t.colorBlock("#22db2a")}}}),s("div",{staticClass:"blk6",on:{click:function(e){return t.colorBlock("#c5d229")}}}),s("div",{staticClass:"blk7",on:{click:function(e){return t.colorBlock("#d1540f")}}}),s("div",{staticClass:"blk8",on:{click:function(e){return t.colorBlock("#ffffff")}}})])]),s("div",{staticClass:"pen"},[t._v("\n          画笔\n          "),s("div",{staticClass:"pen-list"},t._l(t.pens,(function(e,o){return s("div",{key:o,style:{background:e.bg},on:{click:function(e){return t.changeSize(o)}}},[s("div",{staticClass:"pen-size",style:{background:t.bg,width:e.size,height:e.size}})])})),0),s("el-slider",{attrs:{max:"50"},on:{change:function(e){return t.changeSize(t.pen.size)}},model:{value:t.pen.size,callback:function(e){t.$set(t.pen,"size",e)},expression:"pen.size"}})],1)]),s("canvas",{ref:"canvas",attrs:{id:"canv",width:"1000",height:"820"}})])])},A=[],T=(s("6b54"),s("6c7b"),{data:function(){return{user:this.$store.state.user,draw:!1,list:[this.$store.state.user],pen:{color:"#6b2d96",size:1},initPoint:{offsetX:1,offsetY:1},pens:[{size:"1px",bg:""},{size:"2px",bg:""},{size:"4px",bg:""},{size:"6px",bg:""},{size:"8px",bg:""},{size:"10px",bg:""},{size:"12px",bg:""},{size:"14px",bg:""},{size:"16px",bg:""}],bg:"#dddddd"}},sockets:{ac:function(t){window.console.log(t);var e=document.getElementById("canv"),s=e.getContext("2d");s.strokeStyle=t.pen.color,s.fillStyle=t.pen.color,s.lineWidth=t.pen.size,t.arr.forEach((function(t){s.lineTo(t.x,t.y),s.stroke()})),s.beginPath(),s.fillStyle=this.pen.color,s.lineWidth=this.pen.size},RoomInit:function(t){var e=document.getElementById("canv"),s=e.getContext("2d"),o=new Image;o.src=t,o.onload=function(){s.drawImage(o,0,0,1e3,820)}},addUser:function(t){window.console.log("addUser",t),this.list=t.user},houseList:function(t){var e=this;t.forEach((function(t){t.houseId==e.$route.query.houseId&&(e.list=t.user)}))}},methods:{canvInit:function(){var t=this,e=[],s=document.getElementById("color"),o=s.getContext("2d");o.beginPath();var i=o.createLinearGradient(0,0,0,160);i.addColorStop(0,"#f00"),i.addColorStop(1/6,"#f0f"),i.addColorStop(2/6,"#00f"),i.addColorStop(.5,"#0ff"),i.addColorStop(4/6,"#0f0"),i.addColorStop(5/6,"#ff0"),i.addColorStop(1,"#f00"),o.fillStyle=i,o.fillRect(0,0,20,160),s.addEventListener("mousedown",d,!1);var n=document.getElementById("canv"),r=n.getContext("2d");function a(s){var o=s.offsetX,i=s.offsetY;this.draw=!0,r.fillStyle=t.pen.color,r.strokeStyle=t.pen.color,r.lineWidth=t.pen.size,window.console.log("鼠标按下：",t.pen),r.arc(o,i,t.pen.size/2,0,2*Math.PI,!0),r.fill(),r.beginPath(),r.moveTo(o,i),e.push({x:o,y:i})}function u(){this.draw=!1,r.beginPath(),t.$socket.emit("action",{houseId:t.$route.query.houseId,arr:e,pen:t.pen}),e=[]}function l(s){var o=s.offsetX,i=s.offsetY;!0===this.draw&&(e.push({x:o,y:i}),r.fillStyle=t.pen.color,r.lineWidth=t.pen.size,r.lineTo(o,i),r.stroke())}function c(){this.draw=!1}function d(e){var s=o.getImageData(e.offsetX,e.offsetY,1,1);if(t.pen.color=t.rgb(s.data),e.offsetX<20){var i=o.createLinearGradient(30,0,170,0);i.addColorStop(1,t.pen.color),i.addColorStop(0,"white"),o.fillStyle=i,o.fillRect(30,0,190,160);var n=o.createLinearGradient(30,0,30,140);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),o.fillStyle=n,o.fillRect(30,0,190,160)}(e.offsetX>20||1===e.offsetX)&&(o.fillStyle=t.pen.color,o.fillRect(0,170,20,20),r.strokeStyle=t.pen.color)}r.lineCap="round",r.fillStyle="#fff",r.fillRect(0,0,1e3,820),n.addEventListener("mousedown",a,!1),n.addEventListener("mouseup",u,!1),n.addEventListener("mousemove",l,!1),n.addEventListener("mouseout",c,!1),d(this.initPoint)},rgb:function(t){var e=(1<<24)+65536*t[0]+256*t[1]+t[2];return e=e.toString(16),"#"+e.slice(1)},colorBlock:function(t){this.pen.color=t;var e=document.getElementById("color"),s=e.getContext("2d"),o=document.getElementById("canv"),i=o.getContext("2d");s.fillStyle=t,s.fillRect(0,170,20,20),i.strokeStyle=this.pen.color},changeSize:function(t){var e=this;this.pen.size=t+1;var s=document.getElementById("canv"),o=s.getContext("2d");o.lineWidth=t+1,this.pens.forEach((function(s,o){e.pens[o].bg=o===t?"#aaaaaa":""}))}},mounted:function(){var t=this;this.canvInit(),this.$nextTick((function(){t.$socket.emit("RoomInit",{houseId:t.$route.query.houseId,userId:t.$store.state.user.id})}))}}),H=T,M=(s("78c0"),Object(b["a"])(H,X,A,!1,null,"3c663f4c",null)),V=M.exports;h.a.use(y["a"]);var N=new y["a"]({routes:[{path:"/",redirect:"/main"},{path:"/main",component:$,meta:{title:"对战大厅"}},{path:"/battle",component:B,meta:{title:"猜拳"}},{path:"/paint",component:V,meta:{title:"画室"}},{path:"/history",component:U,meta:{title:"历史记录"}}]}),W=s("28dd");r.a.defaults.withCredentials=!0,h.a.prototype.$axios=r.a,h.a.use(u["a"]),h.a.use(new i.a({debug:!0,connection:"https://www.bixiaohe.fun"})),h.a.use(W["a"]),h.a.config.productionTip=!1,N.beforeEach((function(t,e,s){t.meta.title&&(document.title=t.meta.title),s()})),new h.a({render:function(t){return t(w)},router:N,store:c}).$mount("#app")},5905:function(t,e,s){},"5c0b":function(t,e,s){"use strict";var o=s("e332"),i=s.n(o);i.a},"5c92":function(t,e,s){},"78c0":function(t,e,s){"use strict";var o=s("15bd"),i=s.n(o);i.a},"8bbf":function(t,e){t.exports=Vue},e332:function(t,e,s){}});