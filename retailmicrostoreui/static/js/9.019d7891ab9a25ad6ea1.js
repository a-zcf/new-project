webpackJsonp([9],{gkb1:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"coupon-settings"},[t("back"),n._v(" "),t("div",{staticClass:"settings-content"},[t("van-field",{attrs:{placeholder:"请输入优惠券名称",border:!1,clearable:""},model:{value:n.coupon,callback:function(e){n.coupon=e},expression:"coupon"}}),n._v(" "),t("van-cell",{attrs:{center:"",title:"券类型是否有门槛：",border:!1},scopedSlots:n._u([{key:"right-icon",fn:function(){return[t("van-switch",{attrs:{size:"24"},model:{value:n.checked,callback:function(e){n.checked=e},expression:"checked"}})]},proxy:!0}])}),n._v(" "),t("van-field",{attrs:{type:"number",placeholder:"请输入优惠券面额",border:!1,label:"券面额：",clearable:""},model:{value:n.denomination,callback:function(e){n.denomination=e},expression:"denomination"}}),n._v(" "),t("van-field",{attrs:{placeholder:"设置使用条件",border:!1,label:"使用条件：",clearable:""},model:{value:n.condition,callback:function(e){n.condition=e},expression:"condition"}}),n._v(" "),t("van-field",{attrs:{type:"digit",placeholder:"输入优惠券数量",border:!1,label:"券库存：",clearable:""},model:{value:n.stock,callback:function(e){n.stock=e},expression:"stock"}}),n._v(" "),t("van-field",{attrs:{type:"digit",placeholder:"限领数量",border:!1,label:"每人限领：",clearable:""},model:{value:n.limitedCollection,callback:function(e){n.limitedCollection=e},expression:"limitedCollection"}}),n._v(" "),t("div",{staticClass:"date-cale"},[t("van-cell",{attrs:{title:"开始时间：",value:n.startDate},on:{click:function(e){n.show=!0}},scopedSlots:n._u([{key:"right-icon",fn:function(){return[t("van-icon",{attrs:{name:"arrow",size:"18",color:"#8f8c8c"}})]},proxy:!0}])})],1),n._v(" "),t("div",{staticClass:"date-cale"},[t("van-cell",{attrs:{title:"结束时间：",value:n.endDate},on:{click:function(e){n.show1=!0}},scopedSlots:n._u([{key:"right-icon",fn:function(){return[t("van-icon",{attrs:{name:"arrow",size:"18",color:"#8f8c8c"}})]},proxy:!0}])})],1),n._v(" "),t("van-calendar",{on:{confirm:n.onConfirmStart},model:{value:n.show,callback:function(e){n.show=e},expression:"show"}}),n._v(" "),t("van-calendar",{on:{confirm:n.onConfirmEnd},model:{value:n.show1,callback:function(e){n.show1=e},expression:"show1"}})],1),n._v(" "),t("acticity-but",{attrs:{text:n.text}})],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]},i=a;var c=!1;var l=t("VU/8")({name:"couponsettings",data:function(){return{coupon:"",checked:0,denomination:"",condition:"",stock:"",limitedCollection:"",startDate:"",endDate:"",show:!1,show1:!1,text:"提交"}},mounted:function(){},methods:{formatDate:function(n){return n.getFullYear()+"/"+(n.getMonth()+1)+"/"+n.getDate()},onConfirmStart:function(n){this.show=!1,this.startDate=this.formatDate(n)},onConfirmEnd:function(n){this.show1=!1,this.endDate=this.formatDate(n)}}},i,!1,function(n){c||t("oUDd")},null,null);l.options.__file="src/views/marketexten/couponsettings.vue";e.default=l.exports},"i3/z":function(n,e,t){(n.exports=t("FZ+f")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"couponsettings.vue",sourceRoot:""}])},oUDd:function(n,e,t){var o=t("i3/z");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);t("rjj0")("ab6d8222",o,!1,{})}});
//# sourceMappingURL=9.019d7891ab9a25ad6ea1.js.map