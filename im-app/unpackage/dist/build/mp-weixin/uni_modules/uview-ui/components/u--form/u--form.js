(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u--form/u--form"],{"5e5f":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var r=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"7f02":function(t,e,n){"use strict";n.r(e);var u=n("5e5f"),r=n("7f1b");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);var o,a=n("f0c5"),s=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);e["default"]=s.exports},"7f1b":function(t,e,n){"use strict";n.r(e);var u=n("904b"),r=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=r.a},"904b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(n("d036"));function r(t){return t&&t.__esModule?t:{default:t}}var i=function(){Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-form/u-form")]).then(function(){return resolve(n("7945"))}.bind(null,n)).catch(n.oe)},o={name:"u-form",mixins:[t.$u.mpMixin,u.default,t.$u.mixin],components:{uvForm:i},created:function(){this.children=[]},methods:{setRules:function(t){this.$refs.uForm.setRules(t)},validate:function(){return this.setMpData(),this.$refs.uForm.validate()},validateField:function(t,e){return this.setMpData(),this.$refs.uForm.validateField(t,e)},resetFields:function(){return this.setMpData(),this.$refs.uForm.resetFields()},clearValidate:function(t){return this.setMpData(),this.$refs.uForm.clearValidate(t)},setMpData:function(){this.$refs.uForm.children=this.children}}};e.default=o}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u--form/u--form-create-component',
    {
        'uni_modules/uview-ui/components/u--form/u--form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7f02"))
        })
    },
    [['uni_modules/uview-ui/components/u--form/u--form-create-component']]
]);
