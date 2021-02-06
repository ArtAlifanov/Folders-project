(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f66024a"],{"17bd":function(t,e,s){},"40c0":function(t,e,s){},9231:function(t,e,s){"use strict";s("40c0")},ac2a:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"login-container",attrs:{justify:"center"}},[a("v-col",{staticStyle:{padding:"unset"},attrs:{sm:"12",md:"6",cols:"12"}},[a("v-img",{staticClass:"sign-img",attrs:{src:s("6761")}})],1),a("v-col",{staticStyle:{padding:"unset"},attrs:{sm:"12",md:"6",cols:"12"}},[a("v-card",{staticClass:"login-card",attrs:{align:"center"}},[a("v-card-title",{staticClass:"login-title"},[t._v("Britecheck")]),a("v-card-subtitle",{staticClass:"login-subtitle"},[t._v("Inventory"),a("sup",[t._v("®")])]),a("v-card-text",{staticClass:"login-welcome"},[t._v("Welcome back! Please login to your account")]),a("LoginForm",{staticClass:"login-form"})],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{attrs:{flat:""}},[s("v-form",{ref:"form",staticClass:"login--form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("div",{staticClass:"row"},[t.errMsg?s("v-col",{staticClass:"login-errMsg",attrs:{cols:"12"}},[t._v(" Login failed. Please try again. ")]):t._e()],1),s("v-card-text",[s("div",{attrs:{align:"left"}},[s("span",{staticClass:"label-field",staticStyle:{"font-weight":"600"}},[t._v("Email")]),s("v-text-field",{staticClass:"login-email-input",attrs:{rules:t.emailRules,placeholder:"Email...",pt:"5",required:"","append-icon":t.isValidatedEmail?"mdi-checkbox-marked-circle":"","append-outer-icon":0==t.emailErrCnt||t.isValidatedEmail?"":"mdi-alert-circle"},on:{blur:t.isValidatedEmailMethod},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-spacer"),s("span",{staticClass:"label-field",staticStyle:{"font-weight":"600"}},[t._v("Password")]),s("v-text-field",{staticClass:"login-pass-input",attrs:{"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",rules:[t.passwordRules.required],type:t.showPassword?"text":"password",name:"password",hint:"",placeholder:"Password",required:"","append-outer-icon":0==t.pwdErrCnt?"":t.isValidatedPass?"mdi-checkbox-marked-circle":"mdi-alert-circle"},on:{blur:t.isValidatedPassMethod,"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"remember-forgot"},[s("v-checkbox",{staticClass:"rememeber-label",attrs:{value:"1",label:"Remember Me",color:"#12ba81",type:"checkbox"},nativeOn:{click:function(e){return t.changecolor(e)}},scopedSlots:t._u([{key:"label",fn:function(){return[s("div",{staticClass:"white"},[s("span",{staticClass:"rememberMe",style:[t.color_checkbox?{color:"#413967"}:{color:"#12ba81"}]},[t._v(" Remember me ")])])]},proxy:!0}]),model:{value:t.rememberMe,callback:function(e){t.rememberMe=e},expression:"rememberMe"}}),s("v-spacer"),s("router-link",{staticClass:"subtitle-2",attrs:{to:"/resetpassword"}},[t._v("Forgot password")])],1)]),s("v-row",[s("v-col",{staticClass:"d-flex justify-end flex-row",staticStyle:{display:"flex","justify-content":"flex-end"},attrs:{cols:"12",md:"6"}},[s("v-btn",{staticClass:"login-btn",attrs:{loading:t.loading,disabled:!t.valid,height:"48"},on:{click:t.validate}},[t._v("LogIn")])],1),s("v-col",{staticClass:"d-flex justify-start",staticStyle:{display:"flex","justify-content":"flex-start"},attrs:{cols:"12",md:"6"}},[s("v-btn",{staticClass:"signup-btn",attrs:{depressed:"",height:"48"},on:{click:function(e){return t.$router.push({name:"Register"})}}},[t._v("Sign Up")])],1)],1),s("v-spacer"),s("v-card-text",{staticClass:"text-center terms-policy"},[s("router-link",{staticClass:"subtitle-2",attrs:{to:"/policy"}},[t._v("Terms of use. Privacy Policy")])],1)],1)],1)},l=[],o=(s("96cf"),s("1da1")),n={name:"LoginForm",data:function(){return{rememberMe:!1,showPassword:!1,valid:!0,errMsg:!1,emailErrCnt:0,pwdErrCnt:0,email:"",password:"",color_checkbox:!0,passwordRules:{required:function(t){return!!t||"Required"},min:function(t){return t.length>=6||"Min 6 characters"}},nameRules:[function(t){return!!t||"This field is Required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}]}},computed:{loading:function(){return this.$store.getters.loading},errors:function(){return this.$store.getters.error},isError:function(){return!!this.$store.getters.error&&(console.log("isError",this.$store.getters),!0)},isValidatedEmail:function(){var t=/\S+@\S+\.\S+/;return null!==this.email&&t.test(this.email)},isValidatedPass:function(){var t=/^.{1,}$/;return null!==this.password&&t.test(this.password)}},mounted:function(){setInterval(this.removeErrors,5e3)},watch:{isValidatedEmail:{deep:!0,handler:function(t){this.emailErrCnt++}},isValidatedPass:{deep:!0,handler:function(t){this.pwdErrCnt++}}},methods:{isValidatedEmailMethod:function(){var t=/\S+@\S+\.\S+/;""!==this.email||t.test(this.email)||this.emailErrCnt++},isValidatedPassMethod:function(){var t=/^.{1,}$/;""!==this.password||t.test(this.password)||(this.pwdErrCnt=1)},validate:function(){this.$refs.form.validate()&&this.login()},changecolor:function(){this.color_checkbox=!this.color_checkbox},login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/login",{email:t.email,password:t.password}).then((function(e){500===e.data.error.type?t.errMsg=!0:t.errMsg=!1}));case 2:case"end":return e.stop()}}),e)})))()},removeErrors:function(){this.$store.dispatch("user/removeErrors")}}},c=n,d=(s("ccd0"),s("2877")),u=s("6544"),m=s.n(u),f=s("8336"),p=s("b0af"),v=s("99d9"),h=s("ac7c"),g=s("62ad"),b=s("4bd4"),w=s("0fd9"),C=s("2fa4"),x=s("8654"),y=Object(d["a"])(c,i,l,!1,null,"e59280fa",null),k=y.exports;m()(y,{VBtn:f["a"],VCard:p["a"],VCardText:v["c"],VCheckbox:h["a"],VCol:g["a"],VForm:b["a"],VRow:w["a"],VSpacer:C["a"],VTextField:x["a"]});var V={name:"Login",components:{LoginForm:k}},E=V,_=(s("9231"),s("adda")),M=Object(d["a"])(E,a,r,!1,null,null,null);e["default"]=M.exports;m()(M,{VCard:p["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCol:g["a"],VImg:_["a"],VRow:w["a"]})},ccd0:function(t,e,s){"use strict";s("17bd")}}]);
//# sourceMappingURL=chunk-7f66024a.0f41dfcb.js.map