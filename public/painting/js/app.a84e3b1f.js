(function(t){function e(e){for(var n,i,r=e[0],u=e[1],l=e[2],p=0,d=[];p<r.length;p++)i=r[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var u=a[r];0!==o[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},o={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var c=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),o=a.n(n);o.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=a("5c96"),s=a.n(o),i=(a("0fae"),a("bc3a")),r=a.n(i),u=(a("96cf"),a("1da1")),l=a("2f62");r.a.defaults.withCredentials=!0,n["default"].prototype.$axios=r.a;var c=function(){return new l["a"].Store({strict:!1,state:function(){return{user:{}}},mutations:{setInfo:function(t,e){t.user=e}},actions:{getInfo:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("https://www.bixiaohe.fun/user-info");case 2:return a=e.sent,t.commit("setInfo",a.data),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},setHistory:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/set-game",e);case 2:return a=t.sent,t.abrupt("return",a);case 4:case"end":return t.stop()}}),t)})))()},getHistory:function(t,e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.a.post("https://www.bixiaohe.fun/get-game",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}})},p=c,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},f=[],m={name:"App",components:{}},g=m,h=(a("034f"),a("2877")),w=Object(h["a"])(g,d,f,!1,null,null,null),v=w.exports,b=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("div",{staticClass:"main"},[a("div",{staticClass:"login"},[a("h1",[t._v("多人在线协同作画系统")]),a("div",{staticClass:"form"},[a("p",[t._v("账号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.id,expression:"loginForm.id"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.loginForm.id},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"id",e.target.value)}}}),a("p",{staticStyle:{"margin-top":"40px"}},[t._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.loginForm.password},on:{input:function(e){e.target.composing||t.$set(t.loginForm,"password",e.target.value)}}}),a("div",{staticClass:"submit"},[a("button",{staticClass:"signIn",staticStyle:{background:"rgb(94,160,246)","box-shadow":"0 0 10px rgb(94,160,246)"},on:{click:t.login}},[t._v(" 登 录 ")]),a("button",{staticClass:"register",staticStyle:{background:"rgb(141,81,117)","box-shadow":"0 0 10px rgb(141,81,117)"},on:{click:function(e){t.dialogForm=!0}}},[t._v(" 注 册 ")]),a("el-dialog",{attrs:{title:"注册",visible:t.dialogForm,modal:!0,width:"500px"},on:{"update:visible":function(e){t.dialogForm=e}}},[a("div",{staticClass:"sign-form"},[a("p",[t._v("账号")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.id,expression:"signForm.id"}],staticClass:"ipt",attrs:{type:"text"},domProps:{value:t.signForm.id},on:{input:function(e){e.target.composing||t.$set(t.signForm,"id",e.target.value)}}}),a("p",[t._v("密码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.password,expression:"signForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.signForm.password},on:{input:function(e){e.target.composing||t.$set(t.signForm,"password",e.target.value)}}}),a("p",[t._v("确认密码")]),a("input",{staticClass:"ipt",attrs:{type:"password"}}),a("div",{staticClass:"sign-submit"},[a("button",{staticStyle:{background:"rgb(94,160,246)"},on:{click:t.register}},[t._v("确定")]),a("button",{on:{click:function(e){t.dialogForm=!1}}},[t._v("取消")])])])])],1)])]),t._m(0)])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"img"},[n("img",{attrs:{src:a("bef0")}})])}],_={data:function(){return{dialogForm:!1,loginForm:{id:"",password:""},signForm:{id:"",password:""}}},methods:{register:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/insert",{id:this.signForm.id,password:this.signForm.password}).then((function(e){console.log("注册结果：",e),"0"===e.data.status?t.$message.error("账号已存在"):"1"===e.data.status&&(t.$message({message:"注册成功",type:"success"}),t.dialogForm=!1)})).catch((function(t){console.log(t)}))},login:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/login",{id:this.loginForm.id,password:this.loginForm.password}).then((function(e){console.log("登录结果：",e),"0"===e.data.status?t.$message.error("登录失败"):"1"===e.data.status&&(document.cookie="token="+"".concat(e.data.token)+";path=/",t.$router.push("/hall"))})).catch((function(t){console.log(t)}))}},mounted:function(){document.cookie="token=''"}},C=_,k=(a("913b"),Object(h["a"])(C,x,y,!1,null,"021c200c",null)),F=k.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"top-container"},[a("p",{staticStyle:{display:"inline-block",width:"200px",padding:"0",margin:"0",height:"50px",background:"#333333"}}),a("span",{staticStyle:{padding:"16px 36px"},on:{click:function(e){return t.$router.push("/main")}}},[a("i",{staticClass:"el-icon-s-home",staticStyle:{height:"18px","padding-right":"4px"}}),t._v(" 大厅 ")]),a("span",{on:{click:function(e){return t.$router.push("/history")}}},[a("i",{staticClass:"el-icon-date",staticStyle:{height:"18px","padding-right":"4px"}}),t._v(" 对战记录 ")]),a("span",{on:{click:function(e){return t.toChat()}}},[t._v(" 好友 ")]),a("el-input",{staticClass:"input"},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1)],1),a("div",{staticClass:"center-container"},[a("aside",{staticClass:"left-container"},[a("div",{staticStyle:{width:"60px",height:"60px","padding-left":"70px"}},[a("img",{staticClass:"head-img",staticStyle:{width:"60px"},attrs:{src:null==t.user.url?"https://www.bixiaohe.fun/img/default.jpg":"https://www.bixiaohe.fun"+t.user.url,alt:"点击修改个人信息"},on:{click:t.changeInfo}})]),a("p",[t._v("昵称 :"+t._s(t.user.name))]),a("p",[t._v("id :"+t._s(t.user.id))]),a("p",[t._v("地址 :"+t._s(t.user.address))])]),a("div",{staticClass:"main-card"},[a("router-view")],1)]),a("el-dialog",{staticStyle:{width:"1500px"},attrs:{visible:t.showDialog},on:{"update:visible":function(e){t.showDialog=e}}},[a("el-form",{ref:"upload",staticStyle:{margin:"40px 0 0 40px","text-align":"left",width:"300px"},attrs:{model:t.upload,rules:t.uploadRule,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"头像",prop:"url"}},[a("el-upload",{staticClass:"upload",attrs:{action:"https://www.bixiaohe.fun/upload-img",method:"post",name:"user","on-success":t.headUpload}},[t.upload.url?a("img",{staticClass:"upload-img",attrs:{src:"https://www.bixiaohe.fun"+t.upload.url}}):a("i",{staticClass:"el-icon-plus"})])],1),a("el-form-item",{attrs:{label:"昵称",prop:"name"}},[a("el-input",{attrs:{size:"small"},model:{value:t.upload.name,callback:function(e){t.$set(t.upload,"name",e)},expression:"upload.name"}})],1),a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{attrs:{size:"small"},model:{value:t.upload.address,callback:function(e){t.$set(t.upload,"address",e)},expression:"upload.address"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.uploadSubmit}},[t._v(" 修改 ")])],1)],1)],1)],1)},S=[],j=(a("b0c0"),{data:function(){return{user:{url:""},houseList:{},showDialog:!1,upload:{url:"",name:"",address:""},uploadRule:{url:[{required:!0,message:"请选择图片",trigger:"blur"}],name:[{required:!0,message:"昵称不能为空",trigger:"blur"}],address:[{required:!0,message:"地址不能为空",trigger:"blur"}]}}},methods:{getInfo:function(){var t=this;this.$store.dispatch("getInfo").then((function(e){if(1==e.status)window.location.href="https://www.bixiaohe.fun";else{for(var a in t.user=t.$store.state.user,window.console.log(t.user),t.upload)t.upload[a]=t.user[a];window.console.log("upload:",t.upload),t.$socket.emit("online",t.$store.state.user.id)}})).catch((function(t){window.console.log(t)}))},changeInfo:function(){this.showDialog=!0},headUpload:function(t){this.upload.url=t.url},uploadSubmit:function(){var t=this;this.$refs.upload.validate((function(e){if(!e)return!1;t.$axios.post("https://www.bixiaohe.fun/upload-info",t.upload).then((function(e){t.user.name=e.data.name,t.user.address=e.data.address,t.user.url=e.data.url,t.showDialog=!1}))}))},toChat:function(){window.open("https://www.bixiaohe.fun/chat")}},mounted:function(){this.getInfo()}}),O=j,P=(a("f323"),Object(h["a"])(O,$,S,!1,null,"31ea71ce",null)),I=P.exports;n["default"].use(b["a"]);var R=new b["a"]({routes:[{path:"/",component:F,meta:{title:"登录"}},{path:"/hall",component:I,meta:{title:"大厅"}}]});n["default"].use(l["a"]),r.a.defaults.withCredentials=!0,n["default"].prototype.$axios=r.a,n["default"].use(s.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(v)},router:R,store:p}).$mount("#app")},"85ec":function(t,e,a){},"913b":function(t,e,a){"use strict";var n=a("d06f"),o=a.n(n);o.a},af20:function(t,e,a){},bef0:function(t,e,a){t.exports=a.p+"img/login_bg.e800ce2e.jpg"},d06f:function(t,e,a){},f323:function(t,e,a){"use strict";var n=a("af20"),o=a.n(n);o.a}});