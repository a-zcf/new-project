webpackJsonp([5],{opN5:function(n,t,a){(n.exports=a("FZ+f")(!0)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"nonpayment.vue",sourceRoot:""}])},qtm9:function(n,t,a){var s=a("opN5");"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);a("rjj0")("1e58a11b",s,!1,{})},v8Li:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("bOdI"),e=a.n(s),i=a("P9l9"),o={name:"nonpayment",data:function(){var n;return n={active:0,kongimg:a("/Ec+"),supplierData:{},smokeData:{},orderId:"",codeStr:"",strip:""},e()(n,"active",1),e()(n,"url",""),e()(n,"title",""),e()(n,"img",""),e()(n,"list",[]),e()(n,"goodLists",[]),e()(n,"mescroll",null),e()(n,"mescrollDown",{use:!1}),e()(n,"mescrollUp",{callback:this.upCallback,noMoreSize:1,page:{num:0,size:10,time:null},empty:{warpId:"mescroll",tip:"暂无相关数据"},htmlNodata:'<p class="upwarp-nodata">-- 已加载完 --</p>',htmlLoading:'<p class="mescroll-bottom"><span class="upwarp-progress mescroll-rotate"></span><span class="upwarp-tip">加载中...</span></p>'}),n},mounted:function(){var n=this;this.codeStr=this.$route.query.codeStr,this.strip=this.$route.query.strip,this.getWxPay(),this.$getRequest(i.commodityClassList).then(function(t){0===t.data.code&&(n.list=t.data.data)})},methods:{onClick:function(n){this.active=n,this.mescroll.resetUpScroll()},mescrollInit:function(n){this.mescroll=n},upCallback:function(n,t){var a=this;setTimeout(function(){var s=localStorage.getItem("shopNo");a.$getRequest(i.goodsList+s+"/"+a.active,{current:n.num,size:n.size}).then(function(s){if(0===s.data.code){var e=s.data.data.records;1===n.num&&(a.goodLists=[]),a.goodLists=a.goodLists.concat(e),a.$nextTick(function(){t.endSuccess(e.length)})}else t.endErr()})},500)},getWxPay:function(){var n=this;""!=this.codeStr?this.$postRequest(i.WxPay,{codeStr:this.codeStr}).then(function(t){if(1005===t.data.code||1006===t.data.code){n.supplierData=t.data.data.supplierData,n.smokeData=t.data.data.smokeData;var a=t.data.data.activity,s=a.url,e=a.title,i=a.img,o=a.shopNo;localStorage.setItem("shopNo",o),n.url=s,n.title=e,n.img=i,n.orderId=t.data.data.payConfig.orderId}else n.$toast.fail(t.data.message)}):this.$toast.fail("无效的二维码，请重新扫码！")},clickDjtz:function(){window.location=this.url}}},l=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"user-payment"},[a("mescroll-vue",{ref:"mescroll",attrs:{down:n.mescrollDown,up:n.mescrollUp,id:"mescroll"},on:{init:n.mescrollInit}},[1==n.strip?a("whole-package",{attrs:{supplierData:n.supplierData,smokeData:n.smokeData}},[a("div",{staticClass:"yin-zhang01",style:""==n.smokeData.imgUrl||null==n.smokeData.imgUrl?"display: none;":"",attrs:{slot:"yinzhang"},slot:"yinzhang"},[n._v("\n        正品\n      ")])]):n._e(),n._v(" "),0==n.strip?a("strip",{attrs:{supplierData:n.supplierData,smokeData:n.smokeData}},[a("div",{staticClass:"yin-zhang02",style:""==n.smokeData.imgUrl||null==n.smokeData.imgUrl?"display: none;":"",attrs:{slot:"yinzhang"},slot:"yinzhang"},[n._v("\n        正品\n      ")])]):n._e(),n._v(" "),a("boss-infor",{attrs:{supplierData:n.supplierData}}),n._v(" "),a("img",{staticClass:"guanggao-img",attrs:{src:""==n.img||null==n.img?n.kongimg:n.img},on:{click:n.clickDjtz}}),n._v(" "),a("tab-list",{attrs:{list:n.list,goodLists:n.goodLists},on:{onClick:n.onClick}})],1),n._v(" "),n._m(0)],1)};l._withStripped=!0;var r={render:l,staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"footer01"},[t("p",[this._v("温馨提示：")]),this._v(" "),t("p",[this._v("本二维码是广西中烟终端管理条包管理平台，用于...")])])}]},c=r;var p=!1;var u=a("VU/8")(o,c,!1,function(n){p||a("qtm9")},null,null);u.options.__file="src/views/nonpayment/nonpayment.vue";t.default=u.exports}});
//# sourceMappingURL=5.eaec9f380b9ad506abbb.js.map