webpackJsonp([11],{WLsK:function(n,s,e){(n.exports=e("FZ+f")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"purchasedetails.vue",sourceRoot:""}])},jmh9:function(n,s,e){var t=e("WLsK");"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);e("rjj0")("3a34daa8",t,!1,{})},r8B5:function(n,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=e("P9l9"),a={name:"purchasedetails",data:function(){return{list:[]}},mounted:function(){var n=this,s=n.$route.query.brandId,e=n.$route.query.userId;n.$postRequest(t.detailBrandList,{brandId:s,userId:e}).then(function(s){0===s.data.code&&(n.list=s.data.data)})},methods:{}},i=function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("div",{staticClass:"purchasedetails"},[e("back"),n._v(" "),e("div",{staticClass:"sell"},[e("ul",n._l(n.list,function(s,t){return e("li",{key:t},[e("div",{staticClass:"details-l"},[e("p",{staticClass:"goumai"},[n._v(n._s(s.brandName))]),n._v(" "),e("p",{staticClass:"zhifu-time"},[n._v("支付时间："+n._s(s.payTime))])]),n._v(" "),e("span",{staticClass:"details-r"},[n._v("x"+n._s("0"===s.orderType?"10":"1"))])])}),0)])],1)};i._withStripped=!0;var r={render:i,staticRenderFns:[]},u=r;var l=!1;var d=e("VU/8")(a,u,!1,function(n){l||e("jmh9")},null,null);d.options.__file="src/views/customeradmin/purchasedetails.vue";s.default=d.exports}});
//# sourceMappingURL=11.93cd9792faf995f21c30.js.map