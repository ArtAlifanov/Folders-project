(function(e){function n(n){for(var r,a,s=n[0],u=n[1],i=n[2],d=0,f=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(n);while(f.length)f.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var s=t[a];0!==c[s]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},a={app:0},c={app:0},o=[];function s(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ac059":"246f6a8a","chunk-2d0bdedb":"77bd6a30","chunk-2d0c04f2":"e96c5f61","chunk-2d0d3dcd":"746d22b7","chunk-2d0d7e59":"7235134c","chunk-4f6466ba":"a2c546f8","chunk-6a25436d":"99567b65","chunk-309e2d41":"11411f7c","chunk-15324750":"ccb0b397","chunk-7796d4dc":"ecc3ef46","chunk-2d0efc9e":"9face784","chunk-b867aca0":"b9bfbca7","chunk-4923019c":"12bee368","chunk-296b930d":"54aeda50","chunk-2d79539e":"5b01f057","chunk-3c226fd2":"37f662ab","chunk-4618c715":"6e46402d","chunk-c1027ae4":"5f5f5434","chunk-d6b42374":"6bbbfa48","chunk-e619a058":"4d069d95","chunk-32e7ccdd":"3ff85be0","chunk-5dfd9ffe":"282dde80","chunk-5f68636d":"879278a6","chunk-c81fc566":"63ab7611","chunk-0ab9aa56":"ca17ee30","chunk-7f66024a":"0f41dfcb","chunk-c8190d7e":"fa5f0d7a"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-4f6466ba":1,"chunk-6a25436d":1,"chunk-309e2d41":1,"chunk-15324750":1,"chunk-7796d4dc":1,"chunk-b867aca0":1,"chunk-4923019c":1,"chunk-296b930d":1,"chunk-2d79539e":1,"chunk-3c226fd2":1,"chunk-4618c715":1,"chunk-c1027ae4":1,"chunk-d6b42374":1,"chunk-e619a058":1,"chunk-32e7ccdd":1,"chunk-5dfd9ffe":1,"chunk-5f68636d":1,"chunk-c81fc566":1,"chunk-0ab9aa56":1,"chunk-7f66024a":1,"chunk-c8190d7e":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0ac059":"31d6cfe0","chunk-2d0bdedb":"31d6cfe0","chunk-2d0c04f2":"31d6cfe0","chunk-2d0d3dcd":"31d6cfe0","chunk-2d0d7e59":"31d6cfe0","chunk-4f6466ba":"85e964b6","chunk-6a25436d":"6f907001","chunk-309e2d41":"82f91157","chunk-15324750":"501b58bd","chunk-7796d4dc":"b5f23f44","chunk-2d0efc9e":"31d6cfe0","chunk-b867aca0":"c56f8479","chunk-4923019c":"166f4541","chunk-296b930d":"e7083407","chunk-2d79539e":"abbe7727","chunk-3c226fd2":"eae174a1","chunk-4618c715":"b802985d","chunk-c1027ae4":"540603b8","chunk-d6b42374":"d59c8198","chunk-e619a058":"ac6459a8","chunk-32e7ccdd":"a89a48e1","chunk-5dfd9ffe":"8ddd8dd4","chunk-5f68636d":"e7083407","chunk-c81fc566":"a45f630b","chunk-0ab9aa56":"bd453e8b","chunk-7f66024a":"a3677acd","chunk-c8190d7e":"9196ef73"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var i=o[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===c))return n()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){i=f[s],d=i.getAttribute("data-href");if(d===r||d===c)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var r=n&&n.target&&n.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),t(o)},l.href=c;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=c[e]=[n,t]}));n.push(r[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(e);var f=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,t[1](f)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},4678:function(e,n,t){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("router-view")},c=[],o={name:"App"},s=o,u=(t("034f"),t("2877")),i=Object(u["a"])(s,a,c,!1,null,null,null),d=i.exports,f=(t("99af"),t("45fc"),t("8c4f")),l=(t("d3b7"),[{path:"/login",name:"Login",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-c81fc566"),t.e("chunk-7f66024a")]).then(t.bind(null,"ac2a"))}},{path:"/register",name:"Register",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-c81fc566"),t.e("chunk-0ab9aa56")]).then(t.bind(null,"1348"))}},{path:"/resetpassword",name:"ResetPassword",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-5dfd9ffe")]).then(t.bind(null,"c1bd"))}},{path:"/policy",name:"Policy",component:function(){return t.e("chunk-2d0bdedb").then(t.bind(null,"2da4"))},meta:{breadcrumbs:[{name:"Policy"}]}},{path:"/passwordForgot",name:"passwordForgot",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-296b930d")]).then(t.bind(null,"37cb"))},meta:{breadcrumbs:[{name:"Forgot Password"}]}},{path:"/setPassword",name:"SetPassword",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-5f68636d")]).then(t.bind(null,"a1bf"))},meta:{breadcrumbs:[{name:"Set Password"}]}}]),m=l,h=t("2909"),p=[{path:"categories",name:"Categories",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-309e2d41"),t.e("chunk-7796d4dc"),t.e("chunk-2d0efc9e")]).then(t.bind(null,"9a33"))}},{path:"category",name:"emptyCategory",redirect:"categories"},{path:"category/:id",name:"Category",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-309e2d41"),t.e("chunk-7796d4dc"),t.e("chunk-b867aca0")]).then(t.bind(null,"37b0"))}}],b=p,g=function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-309e2d41"),t.e("chunk-3c226fd2")]).then(t.bind(null,"a4f6"))},k=[{path:"/",name:"Home",meta:{requiresAuth:!0},redirect:"inventory/categories",component:g,children:[{path:"/inventory",name:"Inventory",redirect:"inventory/categories",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-309e2d41"),t.e("chunk-15324750")]).then(t.bind(null,"95c6"))},children:Object(h["a"])(b),meta:{breadcrumbs:[{name:"Inventory"}]}},{path:"/item/createItem",name:"CreateItem",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-309e2d41"),t.e("chunk-c1027ae4")]).then(t.bind(null,"4f1a"))}},{path:"/item/editItem",name:"EditItem",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-309e2d41"),t.e("chunk-e619a058")]).then(t.bind(null,"e8af"))}},{path:"/editFolder",name:"EditFolder",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-309e2d41"),t.e("chunk-d6b42374")]).then(t.bind(null,"a27f"))}},{path:"/createFolder",name:"CreateFolder",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-309e2d41"),t.e("chunk-2d79539e")]).then(t.bind(null,"90ee"))}},{path:"/activityhistory",name:"ActivityHistory",component:function(){return t.e("chunk-2d0d3dcd").then(t.bind(null,"5f28"))},meta:{breadcrumbs:[{name:"Activity History"}]}},{path:"/tags",name:"Tags",component:function(){return t.e("chunk-2d0ac059").then(t.bind(null,"1884"))},meta:{breadcrumbs:[{name:"Tags"}]}},{path:"/users",name:"Users",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-309e2d41"),t.e("chunk-4618c715")]).then(t.bind(null,"ed81"))},meta:{breadcrumbs:[{name:"Users"}]}},{path:"/import",name:"Import",component:function(){return t.e("chunk-2d0d7e59").then(t.bind(null,"7989"))},meta:{breadcrumbs:[{name:"Import"}]}},{path:"/usersettings",name:"UserSettings",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-6a25436d"),t.e("chunk-4923019c"),t.e("chunk-32e7ccdd")]).then(t.bind(null,"3a73"))},meta:{breadcrumbs:[{name:"User Settings"}]}},{path:"/help",name:"HelpCenter",component:function(){return t.e("chunk-2d0c04f2").then(t.bind(null,"40dd"))},meta:{breadcrumbs:[{name:"Help Center"}]}},{path:"*",name:"not-found",component:function(){return Promise.all([t.e("chunk-4f6466ba"),t.e("chunk-c8190d7e")]).then(t.bind(null,"9703"))},meta:{breadcrumbs:[{name:"Not Found"}]}}]}],v=k,j=t("bc3a"),y=t.n(j),w={node:"production",isTest:!1,isProduction:!0,isDevelopment:!1,token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IndvcmsuZ3JvdXA4MzExQGdtYWlsLmNvbSIsImlkIjo4MywiZXhwIjoxNjExMzkxMjAwLCJpYXQiOjE2MDYyMDcyMDB9.QlB7u-a4Qz9WnCWVYrbhhB7VXE_EAYsARu64SFV1nWM",apiBaseUrl:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_BASE_URL},I=w.apiBaseUrl,P={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};r["a"].use(f["a"]);var S=v.concat(m),O=new f["a"]({routes:S,mode:"history"});O.beforeEach((function(e,n,t){if(e.matched.some((function(e){return e.meta.requiresAuth}))){if(localStorage.getItem("token"))return void t();if("/resetpassword"===e.path)O.push({name:"ResetPassword"});else if("/forgotPassword"===e.path){var r={email:e.query.email,token:e.query.token};y.a.post(I+"password/recovery",r,P).then((function(e){console.log("tokenConfirm",e),200===e.data.error.type?(localStorage.setItem("verificationData",JSON.stringify(r)),t({name:"passwordForgot"})):(console.log("Failed"),t({name:"Login"}))}))}else if("/invite/accept"===e.path){var a={email:e.query.email,token:e.query.token};y.a.post(I+"invite/accept",a,P).then((function(e){console.log("tokenConfirm",e),200===e.data.error.type?(localStorage.setItem("verificationData1",JSON.stringify(a)),t({name:"SetPassword"})):(console.log("Failed"),t({name:"Login"}))}))}else"/policy"===e.path?O.push({name:"Policy"}):t({name:"Login"})}else t()}));var x=O,U=t("2f62"),C=(t("4160"),t("159b"),t("96cf"),t("1da1")),z=localStorage.getItem("token");y.a.defaults.headers.common={Authorization:"Bearer ".concat(z)};var A={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},R=w.apiBaseUrl,L={getToken:function(){var e=localStorage.getItem("token");y.a.defaults.headers.common={Authorization:"Bearer ".concat(e)}},login:function(e){return y.a.post(R+"login",e)},register:function(e){return y.a.post(R+"register",e)},update:function(e){return this.getToken(),y.a.post(R+"profile/edit",e)},reset:function(e){return y.a.get(R+"password/recovery",e)},inviteUser:function(e){return y.a.post(R+"invite/add",e,A)},getInvitedUsers:function(){return this.getToken(),y.a.post(R+"invite/list",A)},editInvitedUser:function(e){return y.a.post(R+"invite/edit",e,A)},delInvitedUser:function(e){var n={userId:e};return y.a.post(R+"invite/delete",n,A)},resetPwdReq:function(e){return y.a.get(R+"password/recovery?email="+e,A)},tokenConfirm:function(e){return y.a.post(R+"password/recovery",e,A)},resetPassword:function(e){return y.a.post(R+"password/set",e)}},T=function(e){return 200===e.data.error.type},E=t("c1df"),N=t.n(E),F=!0,M={user:{},status:"",error:"",invitedUsers:[]},D={set:function(e,n){var t=n.type,r=n.val;e[t]=r},inviteUser:function(e,n){var t={name:n.firstName+" "+n.lastName,email:n.email,role:n.role};e.invitedUsers.push(t)}},_={login:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=e.commit,t.next=3,L.login(n).then((function(e){if(T(e)){var n=e.data.data.token;localStorage.setItem("token",n),localStorage.setItem("curUserData",JSON.stringify(e.data.data)),a("set",{type:"user",val:e.data.data}),y.a.defaults.headers.common.Authorization=n,x.push({name:"Inventory"}).then((function(){}))}else 200!==e.data.error.type&&a("set",{type:"error",val:e.data.error.message});return e})).catch((function(e){r("setLoading",!1),localStorage.removeItem("token"),console.log(e)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},register:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,a=e.commit,t.next=3,L.register(n).then((function(e){if(T(e)){r("setLoading",!0);var n=e.data.data.token;localStorage.setItem("token",n),localStorage.setItem("curUserData",JSON.stringify(e.data.data)),a("set",{type:"user",val:e.data.data}),y.a.defaults.headers.common.Authorization=n,x.push({name:"Inventory"}).then((function(){}))}return r("setLoading",!1),e})).catch((function(e){r("setLoading",!1),localStorage.removeItem("token"),console.log(e)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},getInvitedUsers:function(e){var n=e.dispatch;e.commit;L.getInvitedUsers().then((function(e){T(e)&&(n("setLoading",!0),n("resToPayload",e)),n("setLoading",!1)})).catch((function(e){n("setLoading",!1),console.log(e)}))},update:function(e,n){var t=e.dispatch,r=e.commit;L.update(n).then((function(e){T(e)&&(t("setLoading",!0),localStorage.setItem("curUserData",JSON.stringify(e.data.data)),r("set",{type:"user",val:e.data.data}),x.push({name:"Inventory"}).then((function(){}))),t("setLoading",!1)})).catch((function(e){t("setLoading",!1),console.log(e)}))},resToPayload:function(e,n){var t=e.commit,r=[];n.data.data.forEach((function(e){var n={id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,role:e.role,dateAdded:null==e.created?"-":N()(e.created).format("MM/DD/YYYY"),lastActive:null==e.lastVisit?"-":N()(e.lastvisit).format("MM/DD/YYYY"),inviteStatus:e.inviteStatus};r.push(n)})),t("set",{type:"invitedUsers",val:r})},inviteUser:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,e.commit,t.next=3,L.inviteUser(n).then((function(e){if(T(e))return r("setLoading",!0),r("resToPayload",e),e}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},updateUser:function(e,n){var t=e.dispatch;e.commit;L.editInvitedUser(n).then((function(e){T(e)&&(t("setLoading",!0),t("resToPayload",e))}))},delInvitedUser:function(e,n){var t=e.dispatch;e.commit;L.delInvitedUser(n).then((function(e){T(e)&&(t("setLoading",!0),t("resToPayload",e))}))},logout:function(e){var n=e.dispatch;e.commit;return new Promise((function(e,t){n("setLoading",!1),localStorage.removeItem("token"),localStorage.removeItem("curUserData"),delete y.a.defaults.headers.common.Authorization,e()}))},resetPwdReq:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch,e.commit,t.next=3,L.resetPwdReq(n.email).then((function(e){if(T(e))return e}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},tokenConfirm:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch,e.commit,t.next=3,L.tokenConfirm(n).then((function(e){if(T(e))return e}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},resetPassword:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch,e.commit,t.next=3,L.resetPassword(n).then((function(e){if(T(e))return e}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},removeErrors:function(e){e.dispatch;var n=e.commit;n("set",{type:"error",val:""})}},B={user:function(e){return e.user},invitedUsers:function(e){return e.invitedUsers},error:function(e){return e.error}},q={namespaced:F,state:M,getters:B,actions:_,mutations:D},J=(t("7db0"),t("b0c0"),localStorage.getItem("token"));console.log("token",J),y.a.defaults.headers.common={Authorization:"Bearer ".concat(J)};var Y={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},V=w.apiBaseUrl,H={getToken:function(){var e=localStorage.getItem("token");console.log("token",e),y.a.defaults.headers.common={Authorization:"Bearer ".concat(e)}},createItem:function(e){return y.a.post(V+"addItem",e,Y)},createFolder:function(e){return y.a.post(V+"category/add",e,Y)},editFolder:function(e){return y.a.post(V+"category/update",e,Y)},getInventory:function(e){return this.getToken(),y.a.post(V+"v1/user",Y)},getCategories:function(e){return this.getToken(),y.a.post(V+"inventory",e,Y)},uploadImage:function(e){var n={"Content-Type":"multipart/form-data"};return y.a.post(V+"image/upload",e,n)}},W=!0,X={categories:[],error:""},Q={set:function(e,n){var t=n.type,r=n.val;e[t]=r}},G={createItem:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a,c,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,e.commit,t.next=3,r("getInventory");case 3:a=t.sent,c=a.inventoryId[0],o=1,s={inventoryId:c,categoryId:o,name:n.name,images:n.images,description:n.notes,quantity:parseInt(n.quantity),price:parseInt(n.price)},H.createItem(s).then((function(e){T(e)&&console.log("success")}));case 8:case"end":return t.stop()}}),t)})))()},getInventory:function(e){return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,e.commit,n.next=3,H.getInventory().then((function(e){T(e)}));case 3:case"end":return n.stop()}}),n)})))()},getCategories:function(e){return Object(C["a"])(regeneratorRuntime.mark((function n(){var t,r,a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.dispatch,t=e.commit,r=JSON.parse(localStorage.getItem("curUserData")),a=r.inventories[0],c={id:a},n.next=6,H.getCategories(c).then((function(e){if(T(e))return console.log("getCategories",e.data.data.categories),t("set",{type:"categories",val:e.data.data.categories}),e.data.data.categories;200!==e.data.error.type&&t("set",{type:"error",val:e.data.error.message})})).catch((function(e){console.log("err",e)}));case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()},createFolder:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch,e.commit,r=JSON.parse(localStorage.getItem("curUserData")),a=r.inventories[0],console.log("payload",a,n.folder.id),c={},c=""===n.folder?{inventoryId:a,name:n.name,image:n.images[0]?n.images[0]:"",description:n.notes}:{inventoryId:a,name:n.name,image:n.images[0]?n.images[0]:"",description:n.notes,parentId:n.folder.id},console.log("tmpPayload",c),t.abrupt("return",H.createFolder(c).then((function(e){if(T(e))return console.log("success"),x.push({name:"Inventory"}).then((function(){})),e})));case 8:case"end":return t.stop()}}),t)})))()},editFolder:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch,e.commit,console.log("editPayload",n),t.abrupt("return",H.editFolder(n).then((function(e){if(T(e))return console.log("success"),x.push({name:"Inventory"}).then((function(){})),e})));case 3:case"end":return t.stop()}}),t)})))()},uploadImage:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dispatch,e.commit,console.log("imageFormdata",n),t.next=4,H.uploadImage(n).then((function(e){if(T(e))return console.log("success",e),e.data.data.filename}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))()}},Z={categories:function(e){return e.categories},categoryById:function(e){return function(n){return e.categories.find((function(e){return e.id===n}))}},computers:function(e){return e.categories.find((function(e){return"Computers"===e.name}))}},$={namespaced:W,state:X,getters:Z,actions:G,mutations:Q},K={message:{error:"",success:""}},ee={setMessage:function(e,n){var t=n.type,r=n.text;e.message[t]=r,"success"===t?e.message.error="":e.message.success="",setTimeout((function(){e.message.error="",e.message.success=""}),5e3)}},ne={setMessage:function(e,n){var t=e.commit;t("setMessage",{type:n.type,text:n.text})}},te={successMessage:function(e){return e.message.success},errorMessage:function(e){return e.message.error}},re={state:K,getters:te,actions:ne,mutations:ee},ae=!0;r["a"].use(U["a"]);var ce=new U["a"].Store({namespaced:ae,modules:{user:q,inventory:$,messages:re},state:{loading:!1},mutations:{set:function(e,n){var t=n.type,r=n.val;e[t]=r}},actions:{setLoading:function(e,n){var t=e.commit;t("set",{type:"loading",val:n})}},getters:{loading:function(e){return e.loading}}}),oe=t("f309");r["a"].use(oe["a"]);var se=new oe["a"]({icons:{iconfont:"mdi"}}),ue=t("a65d"),ie=t.n(ue),de=t("caf9");r["a"].config.productionTip=!1,r["a"].use(se),r["a"].use(de["a"]),r["a"].use(ie.a,{position:"bottom-center",duration:3e3}),new r["a"]({router:x,store:ce,vuetify:se,render:function(e){return e(d)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.64c99185.js.map