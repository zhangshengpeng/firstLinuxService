(function(t){function o(o){for(var n,r,a=o[0],l=o[1],c=o[2],p=0,d=[];p<a.length;p++)r=a[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(o);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],n=!0,a=1;a<e.length;a++){var l=e[a];0!==s[l]&&(n=!1)}n&&(i.splice(o--,1),t=r(r.s=e[0]))}return t}var n={},s={app:0},i=[];function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=o,a=a.slice();for(var c=0;c<a.length;c++)o(a[c]);var u=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("85ec"),s=e.n(n);s.a},"2b47":function(t,o,e){},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=e("5c96"),i=e.n(s),r=(e("0fae"),e("bc3a")),a=e.n(r),l=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],u={name:"App",components:{}},p=u,d=(e("034f"),e("2877")),g=Object(d["a"])(p,l,c,!1,null,null,null),m=g.exports,f=e("8c4f"),v=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"bg"},[e("div",{staticClass:"main"},[e("div",{staticClass:"login"},[e("h1",[t._v("多人在线协同作画系统")]),e("div",{staticClass:"form"},[e("p",[t._v("账号")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.id,expression:"loginForm.id"}],staticClass:"ipt",attrs:{type:"text",autocomplete:"off"},domProps:{value:t.loginForm.id},on:{input:function(o){o.target.composing||t.$set(t.loginForm,"id",o.target.value)}}}),e("p",{staticStyle:{"margin-top":"40px"}},[t._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.loginForm.password,expression:"loginForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.loginForm.password},on:{input:function(o){o.target.composing||t.$set(t.loginForm,"password",o.target.value)}}}),e("div",{staticClass:"submit"},[e("button",{staticClass:"signIn",staticStyle:{background:"rgb(94,160,246)","box-shadow":"0 0 10px rgb(94,160,246)"},on:{click:t.login}},[t._v(" 登 录 ")]),e("button",{staticClass:"register",staticStyle:{background:"rgb(141,81,117)","box-shadow":"0 0 10px rgb(141,81,117)"},on:{click:function(o){t.dialogForm=!0}}},[t._v(" 注 册 ")]),e("el-dialog",{attrs:{title:"注册",visible:t.dialogForm,modal:!0,width:"500px"},on:{"update:visible":function(o){t.dialogForm=o}}},[e("div",{staticClass:"sign-form"},[e("p",[t._v("账号")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.id,expression:"signForm.id"}],staticClass:"ipt",attrs:{type:"text"},domProps:{value:t.signForm.id},on:{input:function(o){o.target.composing||t.$set(t.signForm,"id",o.target.value)}}}),e("p",[t._v("密码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.signForm.password,expression:"signForm.password"}],staticClass:"ipt",attrs:{type:"password"},domProps:{value:t.signForm.password},on:{input:function(o){o.target.composing||t.$set(t.signForm,"password",o.target.value)}}}),e("p",[t._v("确认密码")]),e("input",{staticClass:"ipt",attrs:{type:"password"}}),e("div",{staticClass:"sign-submit"},[e("button",{staticStyle:{background:"rgb(94,160,246)"},on:{click:t.register}},[t._v("确定")]),e("button",{on:{click:function(o){t.dialogForm=!1}}},[t._v("取消")])])])])],1)])]),t._m(0)])])},b=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"img"},[n("img",{attrs:{src:e("bef0")}})])}],w={data:function(){return{dialogForm:!1,loginForm:{id:"",password:""},signForm:{id:"",password:""}}},methods:{register:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/insert",{id:this.signForm.id,password:this.signForm.password}).then((function(o){console.log("注册结果：",o),"0"===o.data.status?t.$message.error("账号已存在"):"1"===o.data.status&&(t.$message({message:"注册成功",type:"success"}),t.dialogForm=!1)})).catch((function(t){console.log(t)}))},login:function(){var t=this;this.$axios.post("https://www.bixiaohe.fun/login",{id:this.loginForm.id,password:this.loginForm.password}).then((function(o){console.log("登录结果：",o),"0"===o.data.status?t.$message.error("登录失败"):"1"===o.data.status&&(document.cookie="token=".concat(o.data.token))})).catch((function(t){console.log(t)}))}}},h=w,y=(e("6d88"),Object(d["a"])(h,v,b,!1,null,"7fc4b1dd",null)),F=y.exports;n["default"].use(f["a"]);var x=new f["a"]({routes:[{path:"/",component:F,meta:{title:"登录"}}]});n["default"].prototype.$axios=a.a,n["default"].use(i.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)},router:x}).$mount("#app")},"6d88":function(t,o,e){"use strict";var n=e("2b47"),s=e.n(n);s.a},"85ec":function(t,o,e){},bef0:function(t,o,e){t.exports=e.p+"img/login_bg.e800ce2e.jpg"}});