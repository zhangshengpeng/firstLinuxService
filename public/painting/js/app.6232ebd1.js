(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(i=!1)}i&&(n.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},o={app:0},n=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(s,i,function(e){return t[e]}.bind(null,i));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("85ec"),o=s.n(i);o.a},1707:function(t,e,s){},1990:function(t,e,s){},"2bdd":function(t,e,s){"use strict";var i=s("fd6f"),o=s.n(i);o.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),o=s("5c96"),n=s.n(o),a=(s("0fae"),s("bc3a")),r=s.n(a),c=s("5132"),l=s.n(c),u=(s("96cf"),s("1da1")),d=s("2f62");r.a.defaults.withCredentials=!0,i["default"].prototype.$axios=r.a;var p=function(){return new d["a"].Store({strict:!1,state:function(){return{user:{}}},mutations:{setInfo:function(t,e){t.user=e}},actions:{getInfo:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("https://www.bixiaohe.fun/user-info");case 2:return s=e.sent,t.commit("setInfo",s.data),e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))()},setHistory:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/set-game",e);case 2:return s=t.sent,t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)})))()},getHistory:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/get-game",e);case 2:return s=t.sent,t.abrupt("return",s.data);case 4:case"end":return t.stop()}}),t)})))()}}})},f=p,h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},m=[],g={name:"App",components:{}},v=g,w=(s("034f"),s("2877")),b=Object(w["a"])(v,h,m,!1,null,null,null),y=b.exports,x=s("8c4f"),k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg"},[s("div",{staticClass:"main"},[s("div",{staticClass:"login"},[s("h1",[t._v("多人在线协同作画系统")]),s("div",{staticClass:"form"},[s("p",[t._v("账号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.id,expression:"loginForm.id"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.loginForm.id},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"id",e.target.value)}}}),s("p",{staticStyle:{"margin-top":"40px"}},[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),s("div",{staticClass:"submit"},[s("button",{staticClass:"signIn",staticStyle:{background:"rgb(94,160,246)","box-shadow":"0 0 10px rgb(94,160,246)"},on:{click:t.login}},[t._v(" 登 录 ")]),s("button",{staticClass:"register",staticStyle:{background:"rgb(141,81,117)","box-shadow":"0 0 10px rgb(141,81,117)"},on:{click:function(e){t.dialogForm=!0}}},[t._v(" 注 册 ")]),s("el-dialog",{attrs:{title:"注册",visible:t.dialogForm,modal:!0,width:"500px"},on:{"update:visible":function(e){t.dialogForm=e}}},[s("div",{staticClass:"sign-form"},[s("p",[t._v("账号")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.id,expression:"signForm.id"}],staticClass:"ipt",attrs:{type:"text"},domProps:{value:t.signForm.id},on:{input:function(e){e.target.composing||t.$set(t.signForm,"id",e.target.value)}}}),s("p",[t._v("密码")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.password,expression:"signForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.signForm.password},on:{input:function(e){e.target.composing||t.$set(t.signForm,"password",e.target.value)}}}),s("p",[t._v("确认密码")]),s("input",{staticClass:"ipt",attrs:{type:"password"}}),s("div",{staticClass:"sign-submit"},[s("button",{staticStyle:{background:"rgb(94,160,246)"},on:{click:t.register}},[t._v("确定")]),s("button",{on:{click:function(e){t.dialogForm=!1}}},[t._v("取消")])])])])],1)])]),t._m(0)])])},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"img"},[i("img",{attrs:{src:s("bef0")}})])}],_={data:function(){return{dialogForm:!1,loginForm:{id:"",password:""},signForm:{id:"",password:""}}},methods:{register:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/insert",{id:this.signForm.id,password:this.signForm.password}).then((function(e){console.log("注册结果：",e),"0"===e.data.status?t.$message.error("账号已存在"):"1"===e.data.status&&(t.$message({message:"注册成功",type:"success"}),t.dialogForm=!1)})).catch((function(t){console.log(t)}))},login:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/login",{id:this.loginForm.id,password:this.loginForm.password}).then((function(e){console.log("登录结果：",e),"0"===e.data.status?t.$message.error("登录失败"):"1"===e.data.status&&(document.cookie="token="+"".concat(e.data.token)+";path=/",t.$socket.emit("online",t.$store.state.user.id),t.$router.push("/hall"))})).catch((function(t){console.log(t)}))}},mounted:function(){document.cookie="token=''"}},$=_,S=(s("b3fe"),Object(w["a"])($,k,C,!1,null,"1a3ca1a6",null)),I=S.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"top-container"},[s("p",{staticStyle:{display:"inline-block",width:"200px",padding:"0",margin:"0",height:"50px",background:"#333333"}}),s("span",{staticStyle:{padding:"16px 36px"},on:{click:function(e){return t.$router.push("/hall")}}},[s("i",{staticClass:"el-icon-s-home",staticStyle:{height:"18px","padding-right":"4px"}}),t._v(" 大厅 ")]),s("span",{on:{click:function(e){return t.$router.push("/history")}}},[s("i",{staticClass:"el-icon-date",staticStyle:{height:"18px","padding-right":"4px"}}),t._v(" 绘画记录 ")]),s("span",{on:{click:function(e){return t.toChat()}}},[t._v(" 好友 ")]),s("el-input",{staticClass:"input"},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),s("div",{staticClass:"center-container"},[s("aside",{staticClass:"left-container"},[s("div",{staticStyle:{width:"60px",height:"60px","padding-left":"70px"}},[s("img",{staticClass:"head-img",staticStyle:{width:"60px"},attrs:{src:null==t.user.url?"https://www.bixiaohe.fun/img/default.jpg":"https://www.bixiaohe.fun"+t.user.url,alt:"点击修改个人信息"},on:{click:t.changeInfo}})]),s("p",[t._v("昵称 :"+t._s(t.user.name))]),s("p",[t._v("id :"+t._s(t.user.id))]),s("p",[t._v("地址 :"+t._s(t.user.address))])]),s("div",{staticClass:"main-card"},[s("router-view")],1)]),s("el-dialog",{staticStyle:{width:"1500px"},attrs:{visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[s("el-form",{ref:"upload",staticStyle:{margin:"40px 0 0 40px","text-align":"left",width:"300px"},attrs:{model:t.upload,rules:t.uploadRule,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"头像",prop:"url"}},[s("el-upload",{staticClass:"upload",attrs:{action:"https://www.bixiaohe.fun/upload-img",method:"post",name:"user","on-success":t.headUpload}},[t.upload.url?s("img",{staticClass:"upload-img",attrs:{src:"https://www.bixiaohe.fun"+t.upload.url}}):s("i",{staticClass:"el-icon-plus"})])],1),s("el-form-item",{attrs:{label:"昵称",prop:"name"}},[s("el-input",{attrs:{size:"small"},model:{value:t.upload.name,callback:function(e){t.$set(t.upload,"name",e)},expression:"upload.name"}})],1),s("el-form-item",{attrs:{label:"地址",prop:"address"}},[s("el-input",{attrs:{size:"small"},model:{value:t.upload.address,callback:function(e){t.$set(t.upload,"address",e)},expression:"upload.address"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.uploadSubmit}},[t._v(" 修改 ")])],1)],1)],1),s("el-drawer",{attrs:{title:"好友列表","with-header":!1,size:"700px",visible:t.showChat},on:{"update:visible":function(e){t.showChat=e}}},[s("div",[s("chat")],1)])],1)},z=[],E=(s("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"flex-box"},[i("div",{staticClass:"contact"},[i("ul",[t.contactors.length?t._e():i("li",{staticStyle:{background:"none",color:"#aaaaaa","justify-content":"center"}},[t._v("暂无好友")]),t._l(t.contactors,(function(e,s){return i("li",{key:s,class:s===t.isActive?"active":"",on:{click:function(i){return t.handelclick(e,s)}}},[i("img",{staticClass:"head-img",attrs:{src:"https://www.bixiaohe.fun"+e.url}}),i("span",{staticStyle:{width:"60px"}},[t._v(t._s(e.name))]),i("span",{class:e.isNew?"new-msg":""}),i("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:s===t.isActive,expression:"index === isActive"}],staticClass:"operation",attrs:{size:"small"},on:{command:t.operation}},[i("span",[i("i",{staticClass:"el-icon-more"})]),i("el-dropdown-menu",[i("el-dropdown-item",{staticStyle:{background:"#fff"},attrs:{command:"check"}},[t._v("查看")]),i("el-dropdown-item",{staticStyle:{background:"#fff"},attrs:{command:e.id}},[t._v("删除好友")])],1)],1)],1)}))],2),i("ul",[i("li",{staticClass:"add",on:{click:t.add}},[i("img",{staticClass:"head-img",attrs:{src:s("bf5a")}}),i("span",{staticStyle:{"padding-top":"10px"}},[t._v("添加好友")])])])]),i("div",{directives:[{name:"show",rawName:"v-show",value:0===t.page,expression:"page === 0"}],staticClass:"message"},[i("window",{attrs:{info:t.friend,messages:t.messages,userinfo:t.user},on:{newMsg:t.ding}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:1===t.page,expression:"page === 1"}]},[i("el-form",{staticStyle:{margin:"40px 0 0 40px","text-align":"left"},attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"id"}},[i("el-input",{attrs:{size:"small"},model:{value:t.addId,callback:function(e){t.addId=e},expression:"addId"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.addSubmit}},[t._v("添加")])],1)],1)],1)])])}),F=[],O=(s("4160"),s("159b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:""!==t.info.id,expression:"info.id!==''"}]},[i("div",{staticClass:"head"},[t._v(" "+t._s(t.info.name)+" ")]),i("div",{staticClass:"main"},[i("div",{ref:"chatContainer",staticClass:"message"},t._l(t.messages,(function(e,s){return i("div",{key:s},[i("message",{attrs:{msg:e,user:t.userinfo,friend:t.info}})],1)})),0)]),i("div",{staticClass:"foot"},[i("el-upload",{staticClass:"upload",attrs:{action:"/img",name:"img","show-file-list":!1,"on-success":t.sendImg}},[i("img",{staticClass:"foot-img",attrs:{src:s("ba75")}})]),i("el-popover",{attrs:{placement:"top-start",trigger:"hover",width:"300"}},[i("div",{staticClass:"emoji-item"},t._l(t.emojis,(function(e,s){return i("img",{key:s,attrs:{src:"https://www.bixiaohe.fun/"+e.src},on:{click:function(e){return t.sendEmoji(s)}}})})),0),i("img",{staticClass:"emoji",attrs:{slot:"reference",src:s("aa48")},slot:"reference"})]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textarea,expression:"textarea"}],domProps:{value:t.textarea},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handelSubmit(e)},input:function(e){e.target.composing||(t.textarea=e.target.value)}}}),t._v(" "),i("button",{on:{click:t.handelSubmit}},[t._v("发送")])],1)])}),P=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.msg.say==t.user.id?s("div",[s("div",{staticStyle:{"text-align":"center","font-size":"0.8em",color:"rgb(109,110,106)"}},[t._v(" "+t._s(t.msg.time)+" ")]),s("div",{staticStyle:{display:"inline-block"}},[s("div",{staticStyle:{float:"left"}},[t.user.url?s("img",{staticStyle:{width:"40px",height:"40px","border-radius":"50%"},attrs:{src:"https://www.bixiaohe.fun"+t.user.url}}):t._e()]),s("div",{staticStyle:{"padding-left":"50px"}},[s("p",{staticStyle:{margin:"0","padding-bottom":"8px"}},[t._v(" "+t._s(t.user.name)+" ")]),s("div",{staticStyle:{"background-color":"rgb(0,163,120)",padding:"10px","border-radius":"8px",color:"white"}},[t.msg.url?s("img",{staticClass:"img",attrs:{src:"https://www.bixiaohe.fun"+t.msg.url}}):t._e(),t.msg.src?s("img",{staticClass:"img",staticStyle:{width:"50px",height:"50px"},attrs:{src:t.msg.src}}):t._e(),t._v(" "+t._s(t.msg.message)+" ")])])])]):s("div",[s("div",[s("div",{staticStyle:{"text-align":"center","font-size":"0.8em",color:"rgb(109,110,106)"}},[t._v(" "+t._s(t.msg.time)+" ")]),s("div",{staticStyle:{display:"block",overflow:"hidden"}},[s("div",{staticStyle:{display:"inline-block",float:"right"}},[s("div",{staticStyle:{float:"right"}},[t.friend.url?s("img",{staticStyle:{width:"40px",height:"40px","border-radius":"50%"},attrs:{src:"https://www.bixiaohe.fun"+t.friend.url}}):t._e()]),s("div",{staticStyle:{float:"right","padding-right":"10px"}},[s("div",{staticStyle:{overflow:"hidden"}},[s("p",{staticStyle:{margin:"0",float:"right","padding-bottom":"8px"}},[t._v(" "+t._s(t.friend.name)+" ")])]),s("div",{staticStyle:{"background-color":"rgb(51,73,94)",padding:"10px","border-radius":"8px",color:"white"}},[t.msg.url?s("img",{staticClass:"img",attrs:{src:"https://www.bixiaohe.fun"+t.msg.url}}):t._e(),t.msg.src?s("img",{staticClass:"img",staticStyle:{width:"50px",height:"50px"},attrs:{src:t.msg.src}}):t._e(),t._v(" "+t._s(t.msg.message)+" ")])])])])])])])},R=[],N={name:"Message",props:{msg:{type:Object,default:function(){return{}}},user:{type:Object,default:function(){return{}}},friend:{type:Object,default:function(){return{}}}}},B=N,A=(s("cdae"),Object(w["a"])(B,L,R,!1,null,null,null)),M=A.exports,T={components:{message:M},props:{info:{type:Object,default:function(){return{}}},messages:{type:Array,default:function(){return[]}},userinfo:{type:Object,default:function(){return{}}}},data:function(){return{textarea:"",emojis:[{src:"/img/emoji/00.gif"},{src:"/img/emoji/01.gif"},{src:"/img/emoji/02.gif"},{src:"/img/emoji/03.gif"},{src:"/img/emoji/04.gif"},{src:"/img/emoji/05.gif"},{src:"/img/emoji/06.gif"},{src:"/img/emoji/07.gif"},{src:"/img/emoji/08.gif"},{src:"/img/emoji/09.gif"},{src:"/img/emoji/10.gif"},{src:"/img/emoji/11.gif"},{src:"/img/emoji/12.gif"},{src:"/img/emoji/13.gif"},{src:"/img/emoji/14.gif"},{src:"/img/emoji/15.gif"}]}},updated:function(){var t=this;this.$nextTick((function(){var e=t.$refs.chatContainer;e.scrollTop=e.scrollHeight}))},methods:{handelSubmit:function(){if("\n"!==this.textarea&&""!==this.textarea){var t=new Date,e=t.toLocaleString(),s={to:this.info.id,time:e,message:this.textarea,say:this.userinfo.id};this.$socket.emit("message",s),this.textarea=""}},sendImg:function(t){var e=new Date,s=e.toLocaleString(),i={to:this.info.id,time:s,url:t.imgUrl,say:this.userinfo.id};this.$socket.emit("message",i)},sendEmoji:function(t){var e=new Date,s=e.toLocaleString(),i={to:this.info.id,time:s,src:this.emojis[t].src,say:this.userinfo.id};this.$socket.emit("message",i)}},sockets:{message:function(t){t.say===this.info.id||t.say===this.userinfo.id?(t.say===this.info.id&&this.$emit("newMsg",t.say),this.messages.push(t)):this.$emit("newMsg",t.say)}}},q=T,D=(s("2bdd"),Object(w["a"])(q,O,P,!1,null,"18de0ed4",null)),U=D.exports,H={components:{window:U},props:{},data:function(){return{user:this.$store.state.user,friend:{id:"",name:"",url:""},contactors:[],isActive:"0",page:0,addId:"",isNew:[]}},computed:{messages:function(){return this.contactors[this.isActive]?this.contactors[this.isActive].messages:[]}},mounted:function(){this.getFriend()},methods:{getFriend:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/friend-info").then((function(e){t.contactors=e.data,t.contactors.forEach((function(e,s){t.$set(t.contactors[s],"isNew",!1)}))})).catch((function(t){console.log(t)}))},add:function(){this.page=1,console.log(this.page)},handelclick:function(t,e){var s=this;this.isActive=e,this.friend=t,this.page=0,this.contactors[e].isNew=!1,this.$axios.post("https://www.bixiaohe.fun/history",{userId:this.user.id,friendId:t.id}).then((function(t){console.log(t),s.$set(s.contactors[e],"messages",t.data)})).catch((function(t){console.log(t)}))},ding:function(t){var e=this;this.isActive!==t&&this.contactors.forEach((function(s,i){s.id===t&&(e.contactors[i].isNew=!0)}))},operation:function(t){"check"===t?console.log(t):this.$axios.post("https://www.bixiaohe.fun/friend",{friend_id:t,user_id:this.user.id,operation:"delete"}).then((function(t){console.log(t)}))},addSubmit:function(){var t=this;this.addId==this.user.id?this.$message({showClose:!0,message:"不能添加自己为好友",type:"error"}):this.$axios.post("https://www.bixiaohe.fun/friend",{operation:"add",friend_id:this.addId,user_id:this.user.id}).then((function(e){1==e.data.status?t.$message({showClose:!0,message:"该用户不存在！",type:"error"}):2==e.data.status?t.$message({showClose:!0,message:"你们已经是好友",type:"warning"}):0==e.data.status?t.$message({showClose:!0,message:"添加成功",type:"success"}):t.$message({showClose:!0,message:"添加失败",type:"warning"})}))}}},J=H,X=(s("9255"),Object(w["a"])(J,E,F,!1,null,null,null)),W=X.exports,Y={components:{chat:W},data:function(){return{user:{url:""},houseList:{},showDialog:!1,showChat:!1,upload:{url:"",name:"",address:""},uploadRule:{url:[{required:!0,message:"请选择图片",trigger:"blur"}],name:[{required:!0,message:"昵称不能为空",trigger:"blur"}],address:[{required:!0,message:"地址不能为空",trigger:"blur"}]}}},methods:{getInfo:function(){var t=this;this.$store.dispatch("getInfo").then((function(e){if(1==e.status)window.location.href="https://www.bixiaohe.fun";else{for(var s in t.user=t.$store.state.user,null==t.user.url&&t.$notify({title:"提示",message:"点击头像可修改个人信息",duration:5e3}),window.console.log(t.user),t.upload)t.upload[s]=t.user[s];window.console.log("upload:",t.upload),t.$socket.emit("online",t.$store.state.user.id)}})).catch((function(t){window.console.log(t)}))},changeInfo:function(){this.showDialog=!0},headUpload:function(t){this.upload.url=t.url},uploadSubmit:function(){var t=this;this.$refs.upload.validate((function(e){if(!e)return!1;t.$axios.post("https://www.bixiaohe.fun/upload-info",t.upload).then((function(e){t.user.name=e.data.name,t.user.address=e.data.address,t.user.url=e.data.url,t.showDialog=!1}))}))},toChat:function(){this.showChat=!0}},mounted:function(){this.getInfo()}},G=Y,K=(s("f2dc"),Object(w["a"])(G,j,z,!1,null,"484d99c4",null)),Q=K.exports,V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main-container"}},[t.roomList.length?t._e():s("div",{staticClass:"no-room"},[t._v(" 暂无房间 ")]),t._l(t.roomList,(function(e,i){return s("div",{key:i,staticClass:"room-container"},[s("el-card",{attrs:{"body-style":{padding:"10px"}}},[s("div",{staticClass:"image"},[s("img",{staticClass:"room-img",attrs:{src:"https://www.bixiaohe.fun/img/"+("1"===e.type?"battle.jpg":"paint.jpg")}})]),s("div",{staticClass:"text",staticStyle:{padding:"14px"}},[s("div",[s("p",[t._v("房间号: "+t._s(e.houseId))]),s("p",[t._v("玩家："+t._s(t._f("users")(e.user)))])])]),s("div",{staticClass:"bottom clearfix"},[s("el-button",{staticClass:"button",attrs:{type:"primary",round:""},on:{click:function(s){return t.goRoom(e)}}},[t._v("进入画室")])],1)])],1)})),s("div",{staticClass:"createRoom"},[s("el-button",{staticStyle:{transform:"translate(-100%, 0)"},attrs:{round:""},on:{click:t.createRoom}},[t._v("创建画室")])],1),s("el-dialog",{attrs:{title:"提示",visible:t.showJoin,width:"30%"},on:{"update:visible":function(e){t.showJoin=e}}},[s("span",[t._v("你有正在进行中的游戏，是否进入该房间")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.quit}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.backHouse}},[t._v("确 定")])],1)])],2)},Z=[],tt=(s("a15b"),s("d81d"),{filters:{type:function(t){switch(t){case"1":return"猜拳";case"2":return"画室"}},users:function(t){var e=t.map((function(t){return t.name}));return e.join(" | ")}},data:function(){return{roomList:[],type:"",showJoin:!1,houseId:""}},sockets:{houseList:function(t){var e=this;this.roomList=t,t.forEach((function(t){t.user.forEach((function(s){s.id==e.$store.state.user.id&&(e.houseId=t.houseId,e.type=t.type,window.console.log("房间号：",e.houseId),e.showJoin=!0)}))})),window.console.log("房间列表"),window.console.log(this.roomList)},createHouse:function(t){var e=this;window.console.log("接收参数",t),t.forEach((function(t){t.user[0].id==e.$store.state.user.id&&(e.$store.commit("setInfo",t.user[0]),"2"==e.type&&e.$router.push("/paint?houseId=".concat(t.houseId)))}))},leave:function(t){window.console.log(t)}},methods:{test:function(){this.$socket.emit("action",[{x:1,y:2}])},createRoom:function(){var t={type:"2",userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url};this.$socket.emit("createHouse",t)},goRoom:function(t){this.$socket.emit("addUser",{houseId:t.houseId,userId:this.$store.state.user.id,userName:this.$store.state.user.name,userUrl:this.$store.state.user.url}),"1"===t.type?this.$router.push("/battle?houseId=".concat(t.houseId)):"2"===t.type?this.$router.push("/paint?houseId=".concat(t.houseId)):"3"===t.type?this.$router.push("/click?houseId=".concat(t.houseId)):"4"===t.type&&this.$router.push("/mali?houseId=".concat(t.houseId))},backHouse:function(){"1"==this.type?this.$router.push("/battle?houseId=".concat(this.houseId)):"2"==this.type?this.$router.push("/paint?houseId=".concat(this.houseId)):"3"==this.type&&this.$router.push("/click?houseId=".concat(this.houseId))},quit:function(){this.showJoin=!1,this.$socket.emit("userLeave",{houseId:this.houseId,userId:this.$store.state.user.id})}},mounted:function(){window.console.log("初始化"),this.$socket.emit("houseList")}}),et=tt,st=(s("9086"),Object(w["a"])(et,V,Z,!1,null,null,null)),it=st.exports,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"users"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"user"},[s("div",{staticClass:"head"},[s("img",{attrs:{src:"https://www.bixiaohe.fun/"+e.url}})]),s("div",{staticClass:"name"},[t._v(t._s(e.name))])])})),0),s("div",{staticStyle:{display:"flex",border:"1px solid #999999","font-size":"14px",color:"#dddddd"}},[s("div",{staticClass:"tools"},[s("canvas",{attrs:{id:"color",width:"200",height:"200"}}),s("div",{staticClass:"color-number"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.pen.color,expression:"pen.color"}],domProps:{value:t.pen.color},on:{input:function(e){e.target.composing||t.$set(t.pen,"color",e.target.value)}}})]),s("div",[t._v(" 色板 "),s("div",{staticClass:"color-block"},[s("div",{staticClass:"blk1",on:{click:function(e){return t.colorBlock("#d83741")}}}),s("div",{staticClass:"blk2",on:{click:function(e){return t.colorBlock("#af26b9")}}}),s("div",{staticClass:"blk3",on:{click:function(e){return t.colorBlock("#413bda")}}}),s("div",{staticClass:"blk4",on:{click:function(e){return t.colorBlock("#12c0db")}}}),s("div",{staticClass:"blk5",on:{click:function(e){return t.colorBlock("#22db2a")}}}),s("div",{staticClass:"blk6",on:{click:function(e){return t.colorBlock("#c5d229")}}}),s("div",{staticClass:"blk7",on:{click:function(e){return t.colorBlock("#d1540f")}}}),s("div",{staticClass:"blk8",on:{click:function(e){return t.colorBlock("#ffffff")}}})])]),s("div",{staticClass:"pen"},[t._v(" 画笔 "),s("div",{staticClass:"pen-list"},t._l(t.pens,(function(e,i){return s("div",{key:i,style:{background:e.bg},on:{click:function(e){return t.changeSize(i)}}},[s("div",{staticClass:"pen-size",style:{background:t.bg,width:e.size,height:e.size}})])})),0),s("el-slider",{attrs:{max:"50"},on:{change:function(e){return t.changeSize(t.pen.size)}},model:{value:t.pen.size,callback:function(e){t.$set(t.pen,"size",e)},expression:"pen.size"}})],1),s("div",[t._v(" 透明度 "),s("el-slider",{attrs:{max:"10"},on:{change:function(e){return t.changePellucidity(t.pen.pellucidity)}},model:{value:t.pen.pellucidity,callback:function(e){t.$set(t.pen,"pellucidity",e)},expression:"pen.pellucidity"}})],1),s("div",[s("el-button",{on:{click:t.save}},[t._v(" 保存画板 ")])],1)]),s("canvas",{ref:"canvas",attrs:{id:"canv",width:"1000",height:"800"}})])])},nt=[],at=(s("cb29"),s("fb6a"),s("d3b7"),s("25f0"),{data:function(){return{user:this.$store.state.user,paintingId:-1,draw:!1,list:[this.$store.state.user],pen:{color:"#6b2d96",size:1,pellucidity:10},initPoint:{offsetX:1,offsetY:1},pens:[{size:"1px",bg:""},{size:"2px",bg:""},{size:"4px",bg:""},{size:"6px",bg:""},{size:"8px",bg:""},{size:"10px",bg:""},{size:"12px",bg:""},{size:"14px",bg:""},{size:"16px",bg:""}],bg:"#dddddd"}},sockets:{ac:function(t){window.console.log(t);var e=document.getElementById("canv"),s=e.getContext("2d");s.strokeStyle=t.pen.color,s.fillStyle=t.pen.color,s.lineWidth=t.pen.size,1===t.arr.length?(s.beginPath(),s.moveTo(t.arr[0].x,t.arr[0].y),s.arc(t.arr[0].x,t.arr[0].y,t.pen.size/2,0,2*Math.PI,!0),s.fill()):t.arr.forEach((function(t){s.lineTo(t.x,t.y),s.stroke()})),s.beginPath(),s.fillStyle=this.pen.color,s.lineWidth=this.pen.size},RoomInit:function(t){var e=document.getElementById("canv"),s=e.getContext("2d"),i=new Image;console.log(t),i.src=t,i.onload=function(){s.drawImage(i,0,0,1e3,800)}},addUser:function(t){window.console.log("addUser",t),this.list=t.user},houseList:function(t){var e=this;t.forEach((function(t){t.houseId==e.$route.query.houseId&&(e.list=t.user)}))}},methods:{canvInit:function(){var t=this,e=[],s=document.getElementById("color"),i=s.getContext("2d");i.beginPath();var o=i.createLinearGradient(0,0,0,160);o.addColorStop(0,"#f00"),o.addColorStop(1/6,"#f0f"),o.addColorStop(2/6,"#00f"),o.addColorStop(.5,"#0ff"),o.addColorStop(4/6,"#0f0"),o.addColorStop(5/6,"#ff0"),o.addColorStop(1,"#f00"),i.fillStyle=o,i.fillRect(0,0,20,160),s.addEventListener("mousedown",d,!1);var n=document.getElementById("canv"),a=n.getContext("2d");function r(s){var i=s.offsetX,o=s.offsetY;this.draw=!0,a.fillStyle=t.pen.color,a.strokeStyle=t.pen.color,a.lineWidth=t.pen.size,window.console.log("鼠标按下：",t.pen),a.arc(i,o,t.pen.size/2,0,2*Math.PI,!0),a.fill(),a.beginPath(),a.moveTo(i,o),e.push({x:i,y:o})}function c(){this.draw=!1,a.beginPath(),t.$socket.emit("action",{houseId:t.$route.query.houseId,arr:e,pen:t.pen}),e=[]}function l(s){var i=s.offsetX,o=s.offsetY;!0===this.draw&&(e.push({x:i,y:o}),a.fillStyle=t.pen.color,a.lineWidth=t.pen.size,a.lineTo(i,o),a.stroke())}function u(){this.draw=!1}function d(e){var s=i.getImageData(e.offsetX,e.offsetY,1,1);if(t.pen.color=t.rgb(s.data),e.offsetX<20){var o=i.createLinearGradient(30,0,170,0);o.addColorStop(1,t.pen.color),o.addColorStop(0,"white"),i.fillStyle=o,i.fillRect(30,0,190,160);var n=i.createLinearGradient(30,0,30,140);n.addColorStop(0,"rgba(0,0,0,0)"),n.addColorStop(1,"rgba(0,0,0,1)"),i.fillStyle=n,i.fillRect(30,0,190,160)}(e.offsetX>20||1===e.offsetX)&&(i.fillStyle=t.pen.color,i.fillRect(0,170,20,20),a.strokeStyle=t.pen.color)}a.lineCap="round",a.fillStyle="#fff",a.fillRect(0,0,1e3,800),n.addEventListener("mousedown",r,!1),n.addEventListener("mouseup",c,!1),n.addEventListener("mousemove",l,!1),n.addEventListener("mouseout",u,!1),d(this.initPoint)},rgb:function(t){var e=(1<<24)+65536*t[0]+256*t[1]+t[2];return e=e.toString(16),"#"+e.slice(1)},colorBlock:function(t){this.pen.color=t;var e=document.getElementById("color"),s=e.getContext("2d"),i=document.getElementById("canv"),o=i.getContext("2d");s.fillStyle=t,s.fillRect(0,170,20,20),o.strokeStyle=this.pen.color},changeSize:function(t){var e=this;this.pen.size=t+1;var s=document.getElementById("canv"),i=s.getContext("2d");i.lineWidth=t+1,this.pens.forEach((function(s,i){e.pens[i].bg=i===t?"#aaaaaa":""})),i.globalAlpha=.1*this.pen.pellucidity},save:function(){for(var t=[],e=0;e<5;e++)this.list[e]?t[e]=this.list[e].id:t[e]=0;this.$socket.emit("saveCanv",{houseId:this.$route.query.houseId,paintingId:this.paintingId,users:t})}},mounted:function(){var t=this;this.canvInit(),this.$nextTick((function(){t.$socket.emit("RoomInit",{houseId:t.$route.query.houseId,userId:t.$store.state.user.id})}))}}),rt=at,ct=(s("845a"),Object(w["a"])(rt,ot,nt,!1,null,"0848f8ee",null)),lt=ct.exports;i["default"].use(x["a"]);var ut=new x["a"]({routes:[{path:"/",component:I,meta:{title:"登录"}},{path:"/hall",component:Q,meta:{title:"大厅"},children:[{path:"/",component:it},{path:"/paint",component:lt,meta:"画室"}]}]});i["default"].use(d["a"]),i["default"].use(new l.a({debug:!1,connection:"wss://www.bixiaohe.fun"})),r.a.defaults.withCredentials=!0,i["default"].prototype.$axios=r.a,i["default"].use(n.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(y)},router:ut,store:f}).$mount("#app")},"845a":function(t,e,s){"use strict";var i=s("892d"),o=s.n(i);o.a},"85ec":function(t,e,s){},"892d":function(t,e,s){},9086:function(t,e,s){"use strict";var i=s("b586"),o=s.n(i);o.a},9255:function(t,e,s){"use strict";var i=s("1707"),o=s.n(i);o.a},aa48:function(t,e,s){t.exports=s.p+"img/emoji.023847ab.png"},b3fe:function(t,e,s){"use strict";var i=s("eebb"),o=s.n(i);o.a},b586:function(t,e,s){},ba75:function(t,e,s){t.exports=s.p+"img/img.bdc30cf8.png"},bef0:function(t,e,s){t.exports=s.p+"img/login_bg.e800ce2e.jpg"},bf5a:function(t,e,s){t.exports=s.p+"img/add3.2ea5a63b.png"},cdae:function(t,e,s){"use strict";var i=s("fd1f"),o=s.n(i);o.a},eebb:function(t,e,s){},f2dc:function(t,e,s){"use strict";var i=s("1990"),o=s.n(i);o.a},fd1f:function(t,e,s){},fd6f:function(t,e,s){}});