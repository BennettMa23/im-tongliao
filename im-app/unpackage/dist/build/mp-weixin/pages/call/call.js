(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/call/call"],{"15af":function(e,t,n){"use strict";n.r(t);var r=n("3075"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},1769:function(e,t,n){"use strict";(function(e){n("ae7e");r(n("66fd"));var t=r(n("ac09"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},3075:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{src:""}},onLoad:function(t){var n=e.getWindowInfo();this.src="/hybrid/html/index.html?wid="+n.screenWidth+"&hei="+n.screenHeight+"&from="+t.from+"&type="+t.type+"&uid="+e.getStorageSync("im-userid"),plus.navigator.setFullscreen(!1),plus.camera.getCamera(),setTimeout((function(){e.setStorageSync("auth",!0),e.setStorageSync("okAuto",!0)}),3e3)},methods:{}};t.default=n}).call(this,n("543d")["default"])},ac09:function(e,t,n){"use strict";n.r(t);var r=n("fe15"),u=n("15af");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);var c,o=n("f0c5"),i=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);t["default"]=i.exports},fe15:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},a=[]}},[["1769","common/runtime","common/vendor"]]]);