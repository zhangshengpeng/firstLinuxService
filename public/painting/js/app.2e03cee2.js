(function(t){function e(e){for(var s,a,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var s={},n={app:0},i=[];function a(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=s,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(o,s,function(e){return t[e]}.bind(null,s));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var s=o("85ec"),n=o.n(s);n.a},"1eb4":function(t,e,o){},"439c":function(t,e,o){},"4e67":function(t,e,o){"use strict";var s=o("439c"),n=o.n(s);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var s=o("2b0e"),n=o("5c96"),i=o.n(n),a=(o("0fae"),o("bc3a")),r=o.n(a),l=o("5132"),c=o.n(l),u=(o("96cf"),o("1da1")),d=o("2f62");r.a.defaults.withCredentials=!0,s["default"].prototype.$axios=r.a;var p=function(){return new d["a"].Store({strict:!1,state:function(){return{user:{}}},mutations:{setInfo:function(t,e){t.user=e}},actions:{getInfo:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("https://www.bixiaohe.fun/user-info");case 2:return o=e.sent,t.commit("setInfo",o.data),e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))()},setHistory:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/set-game",e);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})))()},getHistory:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/get-game",e);case 2:return o=t.sent,t.abrupt("return",o.data);case 4:case"end":return t.stop()}}),t)})))()}}})},f=p,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},m=[],g={name:"App",components:{}},v=g,w=(o("034f"),o("2877")),b=Object(w["a"])(v,h,m,!1,null,null,null),y=b.exports,x=o("8c4f"),k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bg"},[o("div",{staticClass:"main"},[o("div",{staticClass:"login"},[o("h1",[t._v("多人在线协同作画系统")]),o("div",{staticClass:"form"},[o("p",[t._v("账号")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.id,expression:"loginForm.id"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.loginForm.id},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"id",e.target.value)}}}),o("p",{staticStyle:{"margin-top":"40px"}},[t._v("密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),o("div",{staticClass:"submit"},[o("button",{staticClass:"signIn",staticStyle:{background:"rgb(94,160,246)","box-shadow":"0 0 10px rgb(94,160,246)"},on:{click:t.login}},[t._v(" 登 录 ")]),o("button",{staticClass:"register",staticStyle:{background:"rgb(141,81,117)","box-shadow":"0 0 10px rgb(141,81,117)"},on:{click:function(e){t.dialogForm=!0}}},[t._v(" 注 册 ")]),o("el-dialog",{attrs:{title:"注册",visible:t.dialogForm,modal:!0,width:"500px"},on:{"update:visible":function(e){t.dialogForm=e}}},[o("div",{staticClass:"sign-form"},[o("p",[t._v("账号")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.id,expression:"signForm.id"}],staticClass:"ipt",attrs:{type:"text"},domProps:{value:t.signForm.id},on:{input:function(e){e.target.composing||t.$set(t.signForm,"id",e.target.value)}}}),o("p",[t._v("密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.password,expression:"signForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.signForm.password},on:{input:function(e){e.target.composing||t.$set(t.signForm,"password",e.target.value)}}}),o("p",[t._v("确认密码")]),o("input",{staticClass:"ipt",attrs:{type:"password"}}),o("div",{staticClass:"sign-submit"},[o("button",{staticStyle:{background:"rgb(94,160,246)"},on:{click:t.register}},[t._v("确定")]),o("button",{on:{click:function(e){t.dialogForm=!1}}},[t._v("取消")])])])])],1)])]),t._m(0)])])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"img"},[s("img",{attrs:{src:o("bef0")}})])}],$={data:function(){return{dialogForm:!1,loginForm:{id:"",password:""},signForm:{id:"",password:""}}},methods:{register:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/insert",{id:this.signForm.id,password:this.signForm.password}).then((function(e){console.log("注册结果：",e),"0"===e.data.status?t.$message.error("账号已存在"):"1"===e.data.status&&(t.$message({message:"注册成功",type:"success"}),t.dialogForm=!1)})).catch((function(t){console.log(t)}))},login:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/login",{id:this.loginForm.id,password:this.loginForm.password}).then((function(e){console.log("登录结果：",e),"0"===e.data.status?t.$message.error("登录失败"):"1"===e.data.status&&(document.cookie="token="+"".concat(e.data.token)+";path=/",t.$socket.emit("online",t.$store.state.user.id),t.$router.push("/hall"))})).catch((function(t){console.log(t)}))}},mounted:function(){document.cookie="token=''"}},I=$,_=(o("4e67"),Object(w["a"])(I,k,C,!1,null,"918d5728",null)),S=_.exports,z=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("header",{staticClass:"top-container"},[o("p",{staticStyle:{display:"inline-block",width:"200px",padding:"0",margin:"0",height:"50px",background:"#333333"}}),o("span",{staticStyle:{padding:"16px 36px"},on:{click:function(e){return t.$router.push("/hall")}}},[o("i",{staticClass:"el-icon-s-home",staticStyle:{height:"18px","padding-right":"4px"}}),t._v(" 大厅 ")]),o("span",{on:{click:function(e){return t.$router.push("/history")}}},[o("i",{staticClass:"el-icon-date",staticStyle:{height:"18px","padding-right":"4px"}}),t._v(" 绘画记录 ")]),o("span",{on:{click:function(e){return t.toChat()}}},[t._v(" 好友 ")]),o("el-input",{staticClass:"input"},[o("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),o("div",{staticClass:"center-container"},[o("aside",{staticClass:"left-container"},[o("div",{staticStyle:{width:"60px",height:"60px","padding-left":"70px"}},[o("img",{staticClass:"head-img",staticStyle:{width:"60px"},attrs:{src:null==t.user.url?"https://www.bixiaohe.fun/img/default.jpg":"https://www.bixiaohe.fun"+t.user.url,alt:"点击修改个人信息"},on:{click:t.changeInfo}})]),o("p",[t._v("昵称 :"+t._s(t.user.name))]),o("p",[t._v("id :"+t._s(t.user.id))]),o("p",[t._v("地址 :"+t._s(t.user.address))])]),o("div",{staticClass:"main-card"},[o("router-view")],1)]),o("el-dialog",{staticStyle:{width:"1500px"},attrs:{visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[o("el-form",{ref:"upload",staticStyle:{margin:"40px 0 0 40px","text-align":"left",width:"300px"},attrs:{model:t.upload,rules:t.uploadRule,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"头像",prop:"url"}},[o("el-upload",{staticClass:"upload",attrs:{action:"https://www.bixiaohe.fun/upload-img",method:"post",name:"user","on-success":t.headUpload}},[t.upload.url?o("img",{staticClass:"upload-img",attrs:{src:"https://www.bixiaohe.fun"+t.upload.url}}):o("i",{staticClass:"el-icon-plus"})])],1),o("el-form-item",{attrs:{label:"昵称",prop:"name"}},[o("el-input",{attrs:{size:"small"},model:{value:t.upload.name,callback:function(e){t.$set(t.upload,"name",e)},expression:"upload.name"}})],1),o("el-form-item",{attrs:{label:"地址",prop:"address"}},[o("el-input",{attrs:{size:"small"},model:{value:t.upload.address,callback:function(e){t.$set(t.upload,"address",e)},expression:"upload.address"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.uploadSubmit}},[t._v(" 修改 ")])],1)],1)],1)],1)},F=[],E=(o("b0c0"),{data:function(){return{user:{url:""},houseList:{},showDialog:!1,upload:{url:"",name:"",address:""},uploadRule:{url:[{required:!0,message:"请选择图片",trigger:"blur"}],name:[{required:!0,message:"昵称不能为空",trigger:"blur"}],address:[{required:!0,message:"地址不能为空",trigger:"blur"}]}}},methods:{getInfo:function(){var t=this;this.$store.dispatch("getInfo").then((function(e){if(1==e.status)window.location.href="https://www.bixiaohe.fun";else{for(var o in t.user=t.$store.state.user,window.console.log(t.user),t.upload)t.upload[o]=t.user[o];window.console.log("upload:",t.upload),t.$socket.emit("online",t.$store.state.user.id)}})).catch((function(t){window.console.log(t)}))},changeInfo:function(){this.showDialog=!0},headUpload:function(t){this.upload.url=t.url},uploadSubmit:function(){var t=this;this.$refs.upload.validate((function(e){if(!e)return!1;t.$axios.post("https://www.bixiaohe.fun/upload-info",t.upload).then((function(e){t.user.name=e.data.name,t.user.address=e.data.address,t.user.url=e.data.url,t.showDialog=!1}))}))},toChat:function(){window.open("https://www.bixiaohe.fun/chat")}},mounted:function(){this.getInfo()}}),j=E,P=(o("e175"),Object(w["a"])(j,z,F,!1,null,"c1e2561e",null)),R=P.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"main-container"}},[t.roomList.length?t._e():o("div",{staticClass:"no-room"},[t._v(" 暂无房间 ")]),t._l(t.roomList,(function(e,s){return o("div",{key:s,staticClass:"room-container"},[o("el-card",{attrs:{"body-style":{padding:"10px"}}},[o("div",{staticClass:"image"},[o("img",{staticClass:"room-img",attrs:{src:"https://www.bixiaohe.fun/img/"+("1"===e.type?"battle.jpg":"paint.jpg")}})]),o("div",{staticClass:"text",staticStyle:{padding:"14px"}},[o("div",[o("p",[t._v("房间号: "+t._s(e.houseId))]),o("p",[t._v("玩家："+t._s(t._f("users")(e.user)))])])]),o("div",{staticClass:"bottom clearfix"},[o("el-button",{staticClass:"button",attrs:{type:"primary",round:""},on:{click:function(o){return t.goRoom(e)}}},[t._v("进入画室")])],1)])],1)})),o("div",{staticClass:"createRoom"},[o("el-button",{staticStyle:{transform:"translate(-100%, 0)"},attrs:{round:""},on:{click:t.createRoom}},[t._v("创建画室")])],1),o("el-dialog",{attrs:{title:"提示",visible:t.showJoin,width:"30%"},on:{"update:visible":function(e){t.showJoin=e}}},[o("span",[t._v("你有正在进行中的游戏，是否进入该房间")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.quit}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.backHouse}},[t._v("确 定")])],1)])],2)},L=[],B=(o("4160"),o("a15b"),o("d81d"),o("159b"),{filters:{type:function(t){switch(t){case"1":return"猜拳";case"2":return"画室"}},users:function(t){var e=t.map((function(t){return t.name}));return e.join(" | ")}},data:function(){return{roomList:[],type:"",showJoin:!1,houseId:""}},sockets:{houseList:function(t){var e=this;this.roomList=t,t.forEach((function(t){t.user.forEach((function(o){o.id==e.$store.state.user.id&&(e.houseId=t.houseId,e.type=t.type,window.console.log("房间号：",e.houseId),e.showJoin=!0)}))})),window.console.log("房间列表"),window.console.log(this.roomList)},createHouse:function(t){var e=this;window.console.log("接收参数",t),t.forEach((function(t){t.user[0].id==e.$store.state.user.id&&(e.$store.commit("setInfo",t.user[0]),"2"==e.type&&e.$router.push("/hall/paint?houseId=".concat(t.houseId)))}))},leave:function(t){window.console.log(t)}},methods:{test:function(){this.$socket.emit("action",[{x:1,y:2}])},createRoom:function(){var t={type:"2",userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url};this.$socket.emit("createHouse",t)},goRoom:function(t){this.$socket.emit("addUser",{houseId:t.houseId,userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url}),"1"===t.type?this.$router.push("/battle?houseId=".concat(t.houseId)):"2"===t.type?this.$router.push("/paint?houseId=".concat(t.houseId)):"3"===t.type?this.$router.push("/click?houseId=".concat(t.houseId)):"4"===t.type&&this.$router.push("/mali?houseId=".concat(t.houseId))},backHouse:function(){"1"==this.type?this.$router.push("/battle?houseId=".concat(this.houseId)):"2"==this.type?this.$router.push("/paint?houseId=".concat(this.houseId)):"3"==this.type&&this.$router.push("/click?houseId=".concat(this.houseId))},quit:function(){this.showJoin=!1,this.$socket.emit("userLeave",{houseId:this.houseId,userId:this.$store.state.user.id})}},mounted:function(){window.console.log("初始化"),this.$socket.emit("houseList")}}),q=B,T=(o("9086"),Object(w["a"])(q,O,L,!1,null,null,null)),J=T.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"users"},t._l(t.list,(function(e,s){return o("div",{key:s,staticClass:"user"},[o("div",{staticClass:"head"},[o("img",{attrs:{src:"https://www.bixiaohe.fun/"+e.url}})]),o("div",{staticClass:"name"},[t._v(t._s(e.name))])])})),0),o("div",{staticStyle:{display:"flex",border:"1px solid #999999","font-size":"14px",color:"#dddddd"}},[o("div",{staticClass:"tools"},[o("canvas",{attrs:{id:"color",width:"200",height:"200"}}),o("div",{staticClass:"color-number"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.pen.color,expression:"pen.color"}],domProps:{value:t.pen.color},on:{input:function(e){e.target.composing||t.$set(t.pen,"color",e.target.value)}}})]),o("div",[t._v(" 色板 "),o("div",{staticClass:"color-block"},[o("div",{staticClass:"blk1",on:{click:function(e){return t.colorBlock("#d83741")}}}),o("div",{staticClass:"blk2",on:{click:function(e){return t.colorBlock("#af26b9")}}}),o("div",{staticClass:"blk3",on:{click:function(e){return t.colorBlock("#413bda")}}}),o("div",{staticClass:"blk4",on:{click:function(e){return t.colorBlock("#12c0db")}}}),o("div",{staticClass:"blk5",on:{click:function(e){return t.colorBlock("#22db2a")}}}),o("div",{staticClass:"blk6",on:{click:function(e){return t.colorBlock("#c5d229")}}}),o("div",{staticClass:"blk7",on:{click:function(e){return t.colorBlock("#d1540f")}}}),o("div",{staticClass:"blk8",on:{click:function(e){return t.colorBlock("#ffffff")}}})])]),o("div",{staticClass:"pen"},[t._v(" 画笔 "),o("div",{staticClass:"pen-list"},t._l(t.pens,(function(e,s){return o("div",{key:s,style:{background:e.bg},on:{click:function(e){return t.changeSize(s)}}},[o("div",{staticClass:"pen-size",style:{background:t.bg,width:e.size,height:e.size}})])})),0),o("el-slider",{attrs:{max:"50"},on:{change:function(e){return t.changeSize(t.pen.size)}},model:{value:t.pen.size,callback:function(e){t.$set(t.pen,"size",e)},expression:"pen.size"}})],1),o("div",[t._v(" 透明度 "),o("el-slider",{attrs:{max:"10"},on:{change:function(e){return t.changePellucidity(t.pen.pellucidity)}},model:{value:t.pen.pellucidity,callback:function(e){t.$set(t.pen,"pellucidity",e)},expression:"pen.pellucidity"}})],1)]),o("canvas",{ref:"canvas",attrs:{id:"canv",width:"1000",height:"800"}})])])},U=[],X=(o("cb29"),o("fb6a"),o("d3b7"),o("25f0"),{data:function(){return{user:this.$store.state.user,draw:!1,list:[this.$store.state.user],pen:{color:"#6b2d96",size:1,pellucidity:10},initPoint:{offsetX:1,offsetY:1},pens:[{size:"1px",bg:""},{size:"2px",bg:""},{size:"4px",bg:""},{size:"6px",bg:""},{size:"8px",bg:""},{size:"10px",bg:""},{size:"12px",bg:""},{size:"14px",bg:""},{size:"16px",bg:""}],bg:"#dddddd"}},sockets:{ac:function(t){window.console.log(t);var e=document.getElementById("canv"),o=e.getContext("2d");o.strokeStyle=t.pen.color,o.fillStyle=t.pen.color,o.lineWidth=t.pen.size,1===t.arr.length?(o.beginPath(),o.moveTo(t.arr[0].x,t.arr[0].y),o.arc(t.arr[0].x,t.arr[0].y,t.pen.size/2,0,2*Math.PI,!0),o.fill()):t.arr.forEach((function(t){o.lineTo(t.x,t.y),o.stroke()})),o.beginPath(),o.fillStyle=this.pen.color,o.lineWidth=this.pen.size},RoomInit:function(t){var e=document.getElementById("canv"),o=e.getContext("2d"),s=new Image;s.src=t,s.onload=function(){o.drawImage(s,0,0,1e3,800)}},addUser:function(t){window.console.log("addUser",t),this.list=t.user},houseList:function(t){var e=this;t.forEach((function(t){t.houseId==e.$route.query.houseId&&(e.list=t.user)}))}},methods:{canvInit:function(){var t=this,e=[],o=document.getElementById("color"),s=o.getContext("2d");s.beginPath();var n=s.createLinearGradient(0,0,0,160);n.addColorStop(0,"#f00"),n.addColorStop(1/6,"#f0f"),n.addColorStop(2/6,"#00f"),n.addColorStop(.5,"#0ff"),n.addColorStop(4/6,"#0f0"),n.addColorStop(5/6,"#ff0"),n.addColorStop(1,"#f00"),s.fillStyle=n,s.fillRect(0,0,20,160),o.addEventListener("mousedown",d,!1);var i=document.getElementById("canv"),a=i.getContext("2d");function r(o){var s=o.offsetX,n=o.offsetY;this.draw=!0,a.fillStyle=t.pen.color,a.strokeStyle=t.pen.color,a.lineWidth=t.pen.size,window.console.log("鼠标按下：",t.pen),a.arc(s,n,t.pen.size/2,0,2*Math.PI,!0),a.fill(),a.beginPath(),a.moveTo(s,n),e.push({x:s,y:n})}function l(){this.draw=!1,a.beginPath(),t.$socket.emit("action",{houseId:t.$route.query.houseId,arr:e,pen:t.pen}),e=[]}function c(o){var s=o.offsetX,n=o.offsetY;!0===this.draw&&(e.push({x:s,y:n}),a.fillStyle=t.pen.color,a.lineWidth=t.pen.size,a.lineTo(s,n),a.stroke())}function u(){this.draw=!1}function d(e){var o=s.getImageData(e.offsetX,e.offsetY,1,1);if(t.pen.color=t.rgb(o.data),e.offsetX<20){var n=s.createLinearGradient(30,0,170,0);n.addColorStop(1,t.pen.color),n.addColorStop(0,"white"),s.fillStyle=n,s.fillRect(30,0,190,160);var i=s.createLinearGradient(30,0,30,140);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),s.fillStyle=i,s.fillRect(30,0,190,160)}(e.offsetX>20||1===e.offsetX)&&(s.fillStyle=t.pen.color,s.fillRect(0,170,20,20),a.strokeStyle=t.pen.color)}a.lineCap="round",a.fillStyle="#fff",a.fillRect(0,0,1e3,800),i.addEventListener("mousedown",r,!1),i.addEventListener("mouseup",l,!1),i.addEventListener("mousemove",c,!1),i.addEventListener("mouseout",u,!1),d(this.initPoint)},rgb:function(t){var e=(1<<24)+65536*t[0]+256*t[1]+t[2];return e=e.toString(16),"#"+e.slice(1)},colorBlock:function(t){this.pen.color=t;var e=document.getElementById("color"),o=e.getContext("2d"),s=document.getElementById("canv"),n=s.getContext("2d");o.fillStyle=t,o.fillRect(0,170,20,20),n.strokeStyle=this.pen.color},changeSize:function(t){var e=this;this.pen.size=t+1;var o=document.getElementById("canv"),s=o.getContext("2d");s.lineWidth=t+1,this.pens.forEach((function(o,s){e.pens[s].bg=s===t?"#aaaaaa":""})),s.globalAlpha=.1*this.pen.pellucidity}},mounted:function(){var t=this;this.canvInit(),this.$nextTick((function(){t.$socket.emit("RoomInit",{houseId:t.$route.query.houseId,userId:t.$store.state.user.id})}))}}),D=X,H=(o("991b"),Object(w["a"])(D,N,U,!1,null,"9c51bad0",null)),M=H.exports;s["default"].use(x["a"]);var W=new x["a"]({routes:[{path:"/",component:S,meta:{title:"登录"}},{path:"/hall",component:R,meta:{title:"大厅"},children:[{path:"/",component:J},{path:"/paint",component:M,meta:"画室"}]}]});s["default"].use(d["a"]),s["default"].use(new c.a({debug:!1,connection:"wss://www.bixiaohe.fun"})),r.a.defaults.withCredentials=!0,s["default"].prototype.$axios=r.a,s["default"].use(i.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(y)},router:W,store:f}).$mount("#app")},"85ec":function(t,e,o){},9086:function(t,e,o){"use strict";var s=o("b586"),n=o.n(s);n.a},"991b":function(t,e,o){"use strict";var s=o("1eb4"),n=o.n(s);n.a},b586:function(t,e,o){},bef0:function(t,e,o){t.exports=o.p+"img/login_bg.e800ce2e.jpg"},c42d:function(t,e,o){},e175:function(t,e,o){"use strict";var s=o("c42d"),n=o.n(s);n.a}});