webpackJsonp([0],{VX41:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t("P9l9"),a=(t("fxnj"),t("mw3O")),o=t.n(a).a.parse(location.search.substring(1)),r={name:"payment",data:function(){return{kongimg:t("/Ec+"),supplierData:{},smokeData:{},active:1,show:!1,codeStr:"",strip:"",appId:"",timeStamp:"",nonceStr:"",package:"",signType:"",paySign:"",orderId:"",amount:0,url:"",title:"",img:"",list:[],goodLists:[],mescroll:null,mescrollDown:{use:!1},mescrollUp:{callback:this.upCallback,noMoreSize:1,page:{num:0,size:10,time:null},empty:{warpId:"mescroll",tip:"暂无相关数据"},htmlNodata:'<p class="upwarp-nodata">-- 已加载完 --</p>',htmlLoading:'<p class="mescroll-bottom"><span class="upwarp-progress mescroll-rotate"></span><span class="upwarp-tip">加载中...</span></p>'}}},mounted:function(){var e=this;this.codeStr=o.c,this.strip=o.t,this.getWxPay(),this.$getRequest(i.commodityClassList).then(function(n){0===n.data.code&&(e.list=n.data.data)})},methods:{onClick:function(e){this.active=e,this.mescroll.resetUpScroll()},getWxPay:function(){var e=this;""!=this.codeStr?this.$postRequest(i.WxPay,{codeStr:this.codeStr}).then(function(n){if(0===n.data.code){e.supplierData=n.data.data.supplierData,e.smokeData=n.data.data.smokeData;var t=n.data.data.activity,i=t.url,a=t.title,o=t.img,r=t.shopNo;e.url=i,e.title=a,e.img=o,localStorage.setItem("shopNo",r);var s=n.data.data.payConfig,c=s.appId,d=s.timeStamp,l=s.nonceStr,p=s.signType,u=s.paySign,m=s.packageValue,f=s.orderId,g=s.amount;e.appId=c,e.timeStamp=d,e.nonceStr=l,e.package=m,e.signType=p,e.paySign=u,e.orderId=f,e.amount=g}else 1006===n.data.code||1005===n.data.code&&"1"==n.data.data.ismy?e.$router.push({path:"/paid",query:{codeStr:e.codeStr,strip:e.strip}}):1005===n.data.code&&"0"==n.data.data.ismy?e.$router.push({path:"/nonpayment",query:{codeStr:e.codeStr,strip:e.strip}}):1002===n.data.code?e.$router.push({path:"/detailimg",query:{detailImg:n.data.data.smokeData.detailImg}}):e.$toast.fail(n.data.msg)}):this.$toast.fail("无效的二维码，请重新扫码！")},mescrollInit:function(e){this.mescroll=e},upCallback:function(e,n){var t=this;setTimeout(function(){var a=localStorage.getItem("shopNo");t.$getRequest(i.goodsList+a+"/"+t.active,{current:e.num,size:e.size}).then(function(i){if(0===i.data.code){var a=i.data.data.records;1===e.num&&(t.goodLists=[]),t.goodLists=t.goodLists.concat(a),t.$nextTick(function(){n.endSuccess(a.length)})}else n.endErr()})},500)},onBridgeReady:function(){var e=this;WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},function(n){if("get_brand_wcpay_request:ok"==n.err_msg){var t=e.orderId;e.$router.push({path:"/paymentsuccess",query:{orderId:t}})}else"get_brand_wcpay_request:fail"==n.err_msg&&e.$toast.fail("支付失败！")})},clickDjtz:function(){window.location=this.url},payDetails:function(){this.show=!1}}},s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"user-payment"},[t("mescroll-vue",{ref:"mescroll",attrs:{down:e.mescrollDown,up:e.mescrollUp,id:"mescroll"},on:{init:e.mescrollInit}},[1==e.strip?t("whole-package",{attrs:{supplierData:e.supplierData,smokeData:e.smokeData}},[t("div",{staticClass:"yin-zhang01",style:""==e.smokeData.imgUrl||null==e.smokeData.imgUrl?"display: none;":"",attrs:{slot:"yinzhang"},slot:"yinzhang"},[e._v("\n        正品\n      ")])]):e._e(),e._v(" "),0==e.strip?t("strip",{attrs:{supplierData:e.supplierData,smokeData:e.smokeData}},[t("div",{staticClass:"yin-zhang02",style:""==e.smokeData.imgUrl||null==e.smokeData.imgUrl?"display: none;":"",attrs:{slot:"yinzhang"},slot:"yinzhang"},[e._v("\n        正品\n      ")])]):e._e(),e._v(" "),t("boss-infor",{attrs:{supplierData:e.supplierData}}),e._v(" "),t("img",{staticClass:"guanggao-img",attrs:{src:""==e.img||null==e.img?e.kongimg:e.img},on:{click:e.clickDjtz}}),e._v(" "),t("tab-list",{attrs:{list:e.list,goodLists:e.goodLists},on:{onClick:e.onClick}})],1),e._v(" "),t("div",{staticClass:"footer"},[t("span",{staticClass:"price"},[e._v("￥"+e._s(e.amount))]),e._v(" "),t("span",{staticClass:"pay-but",on:{click:e.onBridgeReady}},[e._v("立即支付")])])],1)};s._withStripped=!0;var c={render:s,staticRenderFns:[]},d=c;var l=!1;var p=t("VU/8")(r,d,!1,function(e){l||t("bmRh")},null,null);p.options.__file="src/views/payment/payment.vue";n.default=p.exports},bmRh:function(e,n,t){var i=t("dWzf");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t("rjj0")("44779b0c",i,!1,{})},dWzf:function(e,n,t){(e.exports=t("FZ+f")(!0)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"payment.vue",sourceRoot:""}])},fxnj:function(e,n){var t;t=window,e.exports=function(e,n){if(!e.jWeixin){var t,i={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},a=function(){var e={};for(var n in i)e[i[n]]=n;return e}(),o=e.document,r=o.title,s=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),d=!(!c.match("mac")&&!c.match("win")),l=-1!=s.indexOf("wxdebugger"),p=-1!=s.indexOf("micromessenger"),u=-1!=s.indexOf("android"),m=-1!=s.indexOf("iphone")||-1!=s.indexOf("ipad"),f=(t=s.match(/micromessenger\/(\d+\.\d+\.\d+)/)||s.match(/micromessenger\/(\d+\.\d+)/))?t[1]:"",g={initStartTime:L(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},h={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:m?1:u?2:-1,clientVersion:f,url:encodeURIComponent(location.href)},v={},y={_completes:[]},S={state:0,data:{}};A(function(){g.initEndTime=L()});var I=!1,k=[],_={config:function(n){b("config",v=n);var t=!1!==v.check;A(function(){if(t)x(i.config,{verifyJsApiList:D(v.jsApiList),verifyOpenTagList:D(v.openTagList)},function(){y._complete=function(e){g.preVerifyEndTime=L(),S.state=1,S.data=e},y.success=function(e){h.isPreVerifyOk=0},y.fail=function(e){y._fail?y._fail(e):S.state=-1};var e=y._completes;return e.push(function(){!function(){if(!(d||l||v.debug||f<"6.0.2"||h.systemType<0)){var e=new Image;h.appId=v.appId,h.initTime=g.initEndTime-g.initStartTime,h.preVerifyTime=g.preVerifyEndTime-g.preVerifyStartTime,_.getNetworkType({isInnerInvoke:!0,success:function(n){h.networkType=n.networkType;var t="https://open.weixin.qq.com/sdk/report?v="+h.version+"&o="+h.isPreVerifyOk+"&s="+h.systemType+"&c="+h.clientVersion+"&a="+h.appId+"&n="+h.networkType+"&i="+h.initTime+"&p="+h.preVerifyTime+"&u="+h.url;e.src=t}})}}()}),y.complete=function(n){for(var t=0,i=e.length;t<i;++t)e[t]();y._completes=[]},y}()),g.preVerifyStartTime=L();else{S.state=1;for(var e=y._completes,n=0,a=e.length;n<a;++n)e[n]();y._completes=[]}}),_.invoke||(_.invoke=function(n,t,i){e.WeixinJSBridge&&WeixinJSBridge.invoke(n,C(t),i)},_.on=function(n,t){e.WeixinJSBridge&&WeixinJSBridge.on(n,t)})},ready:function(e){0!=S.state?e():(y._completes.push(e),!p&&v.debug&&e())},error:function(e){f<"6.0.2"||(-1==S.state?e(S.data):y._fail=e)},checkJsApi:function(e){x("checkJsApi",{jsApiList:D(e.jsApiList)},(e._complete=function(e){if(u){var n=e.checkResult;n&&(e.checkResult=JSON.parse(n))}e=function(e){var n=e.checkResult;for(var t in n){var i=a[t];i&&(n[i]=n[t],delete n[t])}return e}(e)},e))},onMenuShareTimeline:function(e){M(i.onMenuShareTimeline,{complete:function(){x("shareTimeline",{title:e.title||r,desc:e.title||r,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){M(i.onMenuShareAppMessage,{complete:function(n){"favorite"===n.scene?x("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):x("sendAppMessage",{title:e.title||r,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){M(i.onMenuShareQQ,{complete:function(){x("shareQQ",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){M(i.onMenuShareWeibo,{complete:function(){x("shareWeiboApp",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){M(i.onMenuShareQZone,{complete:function(){x("shareQZone",{title:e.title||r,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){x("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){x("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){x("startRecord",{},e)},stopRecord:function(e){x("stopRecord",{},e)},onVoiceRecordEnd:function(e){M("onVoiceRecordEnd",e)},playVoice:function(e){x("playVoice",{localId:e.localId},e)},pauseVoice:function(e){x("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){x("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){M("onVoicePlayEnd",e)},uploadVoice:function(e){x("uploadVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadVoice:function(e){x("downloadVoice",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},translateVoice:function(e){x("translateVoice",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},chooseImage:function(e){x("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(e){if(u){var n=e.localIds;try{n&&(e.localIds=JSON.parse(n))}catch(e){}}},e))},getLocation:function(e){},previewImage:function(e){x(i.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){x("uploadImage",{localId:e.localId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},downloadImage:function(e){x("downloadImage",{serverId:e.serverId,isShowProgressTips:0==e.isShowProgressTips?0:1},e)},getLocalImgData:function(e){!1===I?(I=!0,x("getLocalImgData",{localId:e.localId},(e._complete=function(e){if(I=!1,0<k.length){var n=k.shift();wx.getLocalImgData(n)}},e))):k.push(e)},getNetworkType:function(e){x("getNetworkType",{},(e._complete=function(e){e=function(e){var n=e.errMsg;e.errMsg="getNetworkType:ok";var t=e.subtype;if(delete e.subtype,t)e.networkType=t;else{var i=n.indexOf(":"),a=n.substring(i+1);switch(a){case"wifi":case"edge":case"wwan":e.networkType=a;break;default:e.errMsg="getNetworkType:fail"}}return e}(e)},e))},openLocation:function(e){x("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){x(i.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(e){delete e.type},e))},hideOptionMenu:function(e){x("hideOptionMenu",{},e)},showOptionMenu:function(e){x("showOptionMenu",{},e)},closeWindow:function(e){x("closeWindow",{},e=e||{})},hideMenuItems:function(e){x("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){x("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){x("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){x("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){x("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(e){if(m){var n=e.resultStr;if(n){var t=JSON.parse(n);e.resultStr=t&&t.scan_code&&t.scan_code.scan_result}}},e))},openAddress:function(e){x(i.openAddress,{},(e._complete=function(e){e=function(e){return e.postalCode=e.addressPostalCode,delete e.addressPostalCode,e.provinceName=e.proviceFirstStageName,delete e.proviceFirstStageName,e.cityName=e.addressCitySecondStageName,delete e.addressCitySecondStageName,e.countryName=e.addressCountiesThirdStageName,delete e.addressCountiesThirdStageName,e.detailInfo=e.addressDetailInfo,delete e.addressDetailInfo,e}(e)},e))},openProductSpecificView:function(e){x(i.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var n=e.cardList,t=[],a=0,o=n.length;a<o;++a){var r=n[a],s={card_id:r.cardId,card_ext:r.cardExt};t.push(s)}x(i.addCard,{card_list:t},(e._complete=function(e){var n=e.card_list;if(n){for(var t=0,i=(n=JSON.parse(n)).length;t<i;++t){var a=n[t];a.cardId=a.card_id,a.cardExt=a.card_ext,a.isSuccess=!!a.is_succ,delete a.card_id,delete a.card_ext,delete a.is_succ}e.cardList=n,delete e.card_list}},e))},chooseCard:function(e){x("chooseCard",{app_id:v.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(e){e.cardList=e.choose_card_info,delete e.choose_card_info},e))},openCard:function(e){for(var n=e.cardList,t=[],a=0,o=n.length;a<o;++a){var r=n[a],s={card_id:r.cardId,code:r.code};t.push(s)}x(i.openCard,{card_list:t},e)},consumeAndShareCard:function(e){x(i.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){x(i.chooseWXPay,P(e),e)},openEnterpriseRedPacket:function(e){x(i.openEnterpriseRedPacket,P(e),e)},startSearchBeacons:function(e){x(i.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){x(i.stopSearchBeacons,{},e)},onSearchBeacons:function(e){M(i.onSearchBeacons,e)},openEnterpriseChat:function(e){x("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){x("launchMiniProgram",{targetAppId:e.targetAppId,path:function(e){if("string"==typeof e&&0<e.length){var n=e.split("?")[0],t=e.split("?")[1];return n+=".html",void 0!==t?n+"?"+t:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){x("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(e){if(u){var n=e.extraData;if(n)try{e.extraData=JSON.parse(n)}catch(n){e.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},A(function(){x("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){A(function(){x("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){A(function(){x("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){A(function(){x("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){A(function(){x("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){A(function(){x("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(n){A(function(){n({miniprogram:"miniprogram"===e.__wxjs_environment})})}}},w=1,T={};return o.addEventListener("error",function(e){if(!u){var n=e.target,t=n.tagName,i=n.src;if(("IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t)&&-1!=i.indexOf("wxlocalresource://")){e.preventDefault(),e.stopPropagation();var a=n["wx-id"];if(a||(a=w++,n["wx-id"]=a),T[a])return;T[a]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(e){n.src=e.localData}})})}}},!0),o.addEventListener("load",function(e){if(!u){var n=e.target,t=n.tagName;if(n.src,"IMG"==t||"VIDEO"==t||"AUDIO"==t||"SOURCE"==t){var i=n["wx-id"];i&&(T[i]=!1)}}},!0),n&&(e.wx=e.jWeixin=_),_}function x(n,t,i){e.WeixinJSBridge?WeixinJSBridge.invoke(n,C(t),function(e){V(n,e,i)}):b(n,i)}function M(n,t,i){e.WeixinJSBridge?WeixinJSBridge.on(n,function(e){i&&i.trigger&&i.trigger(e),V(n,e,t)}):b(n,i||t)}function C(e){return(e=e||{}).appId=v.appId,e.verifyAppId=v.appId,e.verifySignType="sha1",e.verifyTimestamp=v.timestamp+"",e.verifyNonceStr=v.nonceStr,e.verifySignature=v.signature,e}function P(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function V(e,n,t){"openEnterpriseChat"!=e&&"openBusinessView"!==e||(n.errCode=n.err_code),delete n.err_code,delete n.err_desc,delete n.err_detail;var i=n.errMsg;i||(i=n.err_msg,delete n.err_msg,i=function(e,n){var t=e,i=a[t];i&&(t=i);var o="ok";if(n){var r=n.indexOf(":");"confirm"==(o=n.substring(r+1))&&(o="ok"),"failed"==o&&(o="fail"),-1!=o.indexOf("failed_")&&(o=o.substring(7)),-1!=o.indexOf("fail_")&&(o=o.substring(5)),"access denied"!=(o=(o=o.replace(/_/g," ")).toLowerCase())&&"no permission to execute"!=o||(o="permission denied"),"config"==t&&"function not exist"==o&&(o="ok"),""==o&&(o="fail")}return n=t+":"+o}(e,i),n.errMsg=i),(t=t||{})._complete&&(t._complete(n),delete t._complete),i=n.errMsg||"",v.debug&&!t.isInnerInvoke&&alert(JSON.stringify(n));var o=i.indexOf(":");switch(i.substring(o+1)){case"ok":t.success&&t.success(n);break;case"cancel":t.cancel&&t.cancel(n);break;default:t.fail&&t.fail(n)}t.complete&&t.complete(n)}function D(e){if(e){for(var n=0,t=e.length;n<t;++n){var a=e[n],o=i[a];o&&(e[n]=o)}return e}}function b(e,n){if(!(!v.debug||n&&n.isInnerInvoke)){var t=a[e];t&&(e=t),n&&n._complete&&delete n._complete,console.log('"'+e+'",',n||"")}}function L(){return(new Date).getTime()}function A(n){p&&(e.WeixinJSBridge?n():o.addEventListener&&o.addEventListener("WeixinJSBridgeReady",n,!1))}}(t)}});
//# sourceMappingURL=0.fe7c1808f42900ce06e3.js.map