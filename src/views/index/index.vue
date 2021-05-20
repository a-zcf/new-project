<template>
  <div class="index">
    <img :src="indexBgk" class="index-bgk" />
    <div class="head">
      <img :src="infocard" class="infocard" />
      <ul>
        <li class="head-top">
          <img
            :src="shopIcon == '' || shopIcon == null ? Headless : shopIcon"
            class="head-portrait"
          />
          <div class="head-cont" v-if="suppCode === 0">
            <p class="shop-name">店铺名称：{{ shopName }}</p>
            <p>我的龙币：{{ longCoinNum }}</p>
            <p>消费者人数：{{ customerNum }}</p>
          </div>
          <div v-else>未登录</div>
        </li>
        <li class="head-bottom">
          <p>
            <span class="size">{{ cvisitNum }}</span>
            <span>今日访问量</span>
          </p>
          <p class="margin-lr">
            <span class="size">{{ totayOrderNum }}</span>
            <span>今日支付订单数</span>
          </p>
          <p>
            <span class="size">{{ todaySale }}</span>
            <span>今日支付金额</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="height">
        <van-notice-bar
          left-icon="volume-o"
          :text="noticeText"
          background="#ecf9ff"
          color="#1989fa"
          @click="noticeBar"
        />
        <ul>
          <li>
            <div class="roulik" @click="clickShopLoginUrl">
              <img src="../../assets/img/personalization.png" />
              <p>个性化设置</p>
            </div>
          </li>

          <li>
            <div to="" class="roulik" @click="microStore">
              <img src="../../assets/img/microStore.png" />
              <p>微店管理</p>
            </div>
          </li>

          <li>
            <router-link to="/customeradmin" class="roulik">
              <img src="../../assets/img/customer.png" />
              <p>客户管理</p>
            </router-link>
          </li>
          <li>
            <router-link to="/orderadmin" class="roulik">
              <img src="../../assets/img/order.png" />
              <p>订单管理</p>
            </router-link>
          </li>
          <li>
            <router-link to="/accountadmin" class="roulik">
              <img src="../../assets/img/account.png" />
              <p>账户管理</p>
            </router-link>
          </li>
          <li>
            <router-link to="/dataanalysis" class="roulik">
              <img src="../../assets/img/dataanalysis.png" />
              <p>数据分析</p>
            </router-link>
          </li>
          <li>
            <router-link to="/activityadmin" class="roulik">
              <img src="../../assets/img/activitya.png" />
              <p>活动管理</p>
            </router-link>
          </li>
          <li>
            <router-link to="/stock" class="roulik">
              <img src="../../assets/img/activitya.png" />
              <p>库存管理</p>
            </router-link>
          </li>
        </ul>
        <button class="but" @click="clickBatchBinding">扫码绑定</button>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="bar">
        <div class="gonggao">
          <h3>广西中烟管理平台隐私权政策</h3>
          <p>提示条款：</p>
          <p>
            您的信任对我们非常重要，我们深知个人信息对您的重要性，我们将按法律法规要求，采取相应的安全保护措施，尽力保护您的个人信息安全可控。鉴于此，积分商城服务提供者（或简称“我们”）制定本《隐私权政策》（下称“本政策/本隐私权政策”)并提醒您：
          </p>
          <p>
            本政策适用于积分商城提供的所有产品和服务，包括但不限于适用于电脑、移动智能终端的应用程序、网页、供第三方网站和应用程序使用的软件开发工具包（SDK）和应用程序编程接口（API）以及不断创新研发的产品及服务。
          </p>
          <p>
            我们及关联公司就其向您提供的产品或服务单独设立有隐私权政策的，则相应产品或服务适用相应隐私权政策。如我们及关联公司的产品或服务中使用了积分商城提供的产品或服务但未独立设立隐私权政策的，则本政策同样适用于该部分产品或服务。
          </p>
          <p>
            需要特别说明的是，本政策不适用于其他第三方向您提供的服务，第三方向您提供的服务适用其向您说明的隐私权政策。
            在使用积分商城各项产品或服务前，请您务必仔细阅读并透彻理解本政策，特别是以粗体/粗体下划线标识的条款，您应重点阅读，在确认充分理解并同意后再开始使用。如对本政策内容有任何疑问、意见或建议，您可通过平台提供的各种联系方式与我们联系。
          </p>
          <p class="date">生效日期：XX年XX月XX日</p>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import {
  notice,
  // slider,
  suppLier,
  getJssdkConfig,
  getThirdIndexUrl,
} from "../../api/api";
import wx from "weixin-js-sdk";
export default {
  name: "index",
  data() {
    return {
      noticeText: "",
      show: false,
      indexBgk: require("../../assets/img/indexBgk.png"),
      infocard: require("../../assets/img/infocard.png"),
      Headless: require("../../assets/img/Headless.png"),
      shopLoginUrl: "", // 跳转微店地址
      shopIcon: "", // 店铺头像
      shopName: "", //店铺名称
      customerNum: 0, //消费者人数
      longCoinNum: 0, //我的龙币
      cvisitNum: 0, //今日访问量
      totayOrderNum: 0, //今日订单总数
      todaySale: 0, // 今日支付金额
      shopUrl: "", // 微店地址
      suppCode: 0,
    };
  },
  mounted() {
    let that = this;
    that.$postRequest(suppLier).then((res) => {
      that.suppCode = res.data.code;
      if (res.data.code === 0) {
        let {
          shopIcon,
          shopName,
          customerNum,
          longCoinNum,
          cvisitNum,
          totayOrderNum,
          todaySale,
          shopUrl,
        } = res.data.data.indexData;
        that.shopIcon = shopIcon;
        that.shopName = shopName;
        that.customerNum = customerNum;
        that.longCoinNum = longCoinNum;
        that.cvisitNum = cvisitNum;
        that.totayOrderNum = totayOrderNum;
        that.todaySale = todaySale;
        that.shopUrl = shopUrl;
      } else {
      }
    });
    that.$postRequest(notice).then((res) => {
      if (res.data.code === 0) {
        // if (res.data.data.list.length <= 0) {
        // } else {
        //   let noticeList = res.data.data.list;
        //   noticeList.forEach((item) => {
        //     console.log("..." + item);
        //   });
        // }
        let noticeList = res.data.data.list;
        noticeList.forEach(function (item) {
          that.noticeText = item;
        });
      }
    });
    let url = location.href.split("#")[0];
    that.$postRequest(getJssdkConfig, { url: url }).then((res) => {
      if (res.data.code === 0) {
        let { appId, timestamp, nonceStr, signature } = res.data.data.config;
        wx.config({
          debug: false,
          appId: appId,
          timestamp: timestamp,
          nonceStr: nonceStr,
          signature: signature,
          jsApiList: ["scanQRCode"],
        });
        wx.ready(function () {});
        wx.error(function (res) {});
      }
    });

    that.$getRequest(getThirdIndexUrl).then((res) => {
      if (res.data.code == 0) {
        that.shopLoginUrl = res.data.data.shopLoginUrl;
      }
    });
  },
  methods: {
    clickBatchBinding() {
      let that = this;
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          that.$router.push({
            path: "/batchbinding",
            query: { result: result },
          });
        },
      });
    },
    clickShopLoginUrl() {
      window.location = this.shopLoginUrl;
    },
    microStore() {
      window.location =
        "http://thyrtest.gxtianhai.com.cn/retailmicrostoreui/index.html";
    },
    noticeBar() {
      this.show = true;
    },
  },
};
</script>

<style>
</style>