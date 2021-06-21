<template>
  <div class="user-payment">
    <!-- <div class="slide"> -->
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      id="mescroll"
    >
      <whole-package
        :supplierData="supplierData"
        :smokeData="smokeData"
        v-if="strip == 1"
      >
        <div
          class="yin-zhang01"
          slot="yinzhang"
          :style="
            smokeData.imgUrl == '' || smokeData.imgUrl == null
              ? 'display: none;'
              : ''
          "
        >
          正品
        </div>
      </whole-package>
      <strip
        v-if="strip == 0"
        :supplierData="supplierData"
        :smokeData="smokeData"
      >
        <div
          class="yin-zhang02"
          slot="yinzhang"
          :style="
            smokeData.imgUrl == '' || smokeData.imgUrl == null
              ? 'display: none;'
              : ''
          "
        >
          正品
        </div>
      </strip>
      <boss-infor :supplierData="supplierData"></boss-infor>
      <van-swipe
        class="my-swipe"
        :autoplay="5000"
        indicator-color="#4486ff"
        v-if="activityList.length !== 0"
      >
        <van-swipe-item v-for="(item, index) in activityList" :key="index">
          <p class="swipe-title">{{ item.title }}</p>
          <!-- <img
            :src="item.img"
            class="guangao-img"
            @click="activityUrl(item.url)"
          /> -->
          <img :src="item.img" class="guangao-img" @click="showPopup()" />
        </van-swipe-item>
      </van-swipe>

      <tab-list
        @changeList="changeList"
        :list="list"
        :goodLists="goodLists"
      ></tab-list>
    </mescroll-vue>
    <activity-list
      :activityList="activityList"
      :show="show"
      @clickShowPopup="clickShowPopup($event)"
    ></activity-list>
    <!-- </div> -->
    <div class="footer">
      <span class="price"><b>零售价￥：</b>{{ amount }}</span>
      <span class="pay-but" @click="onBridgeReady">立即支付</span>
    </div>
  </div>
</template>

<script>
import {
  WxPay,
  commodityClassList,
  goodsList,
  getBrandActivityinfo,
} from "../../api/api";
import wx from "weixin-js-sdk";
export default {
  name: "payment",
  data() {
    return {
      // kongimg: require("../../assets/img/kongimg.png"),
      supplierData: {},
      smokeData: {},
      active: 1,
      show: false,
      codeStr: "",
      strip: "",
      // announcementList: [], // 广告文字

      appId: 0,
      timeStamp: "",
      nonceStr: "",
      package: "",
      signType: "",
      paySign: "",
      // orderId: 0,
      amount: 0,
      url: "", // 点击跳转的链接
      title: "", // 活动名称
      img: "", // 活动配图
      list: [],
      goodLists: [],
      mescroll: null,
      mescrollDown: {
        use: false,
      },
      mescrollUp: {
        callback: this.upCallback,
        noMoreSize: 1,
        page: {
          num: 0,
          size: 10,
          time: null,
        },
        empty: {
          warpId: "mescroll",
          tip: "暂无相关数据",
        },
        htmlNodata: '<p class="upwarp-nodata">-- 已加载完 --</p>',
        htmlLoading:
          '<p class="mescroll-bottom"><span class="upwarp-progress mescroll-rotate"></span><span class="upwarp-tip">加载中...</span></p>',
      },
      area: "",
      activityList: [],
      show: false,
    };
  },
  mounted() {
    const query = this.$qs.parse(location.search.substring(1));
    if (this.$store.state.token === "") {
      this.$store.commit(types.LOGIN, query.token);
    }
    this.codeStr = query.c;
    this.strip = query.t;
    this.area = query.area;
    this.getWxPay();
    this.$getRequest(commodityClassList).then((res) => {
      if (res.data.code === 0) {
        this.list = res.data.data;
      }
    });
  },
  methods: {
    changeList(name) {
      this.active = name;
      this.mescroll.resetUpScroll();
    },
    getWxPay() {
      if (this.codeStr == "") {
        this.$toast.fail("无效的二维码，请重新扫码！");
        return;
      }

      this.$postRequest(WxPay, { codeStr: this.codeStr }).then((res) => {
        if (res.data.code === 0) {
          this.supplierData = res.data.data.supplierData;
          this.smokeData = res.data.data.smokeData;

          let { url, title, img, shopNo } = res.data.data.activity;
          this.url = url;
          this.title = title;
          this.img = img;
          localStorage.setItem("shopNo", shopNo);

          let {
            appId,
            timeStamp,
            nonceStr,
            signType,
            paySign,
            packageValue,
            orderId,
            amount,
          } = res.data.data.payConfig;
          this.appId = appId;
          this.timeStamp = timeStamp;
          this.nonceStr = nonceStr;
          this.package = packageValue;
          this.signType = signType;
          this.paySign = paySign;
          // this.orderId = orderId;
          this.amount = amount;
          this.brandActivityinfo(orderId);
          // this.announcementList = res.data.data.announcementList;
        } else if (
          res.data.code === 1006 ||
          (res.data.code === 1005 && res.data.data.ismy == "1")
        ) {
          this.$router.push({
            path: "/paid",
            query: { codeStr: this.codeStr, strip: this.strip },
          });
        } else if (res.data.code === 1005 && res.data.data.ismy == "0") {
          this.$router.push({
            path: "/nonpayment",
            query: { codeStr: this.codeStr, strip: this.strip },
          });
        } else if (res.data.code === 1002) {
          this.$router.push({
            path: "/detailimg",
            query: { detailImg: res.data.data.smokeData.detailImg },
          });
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback(page, mescroll) {
      let that = this;
      setTimeout(function () {
        let shopNo = localStorage.getItem("shopNo");
        that
          .$getRequest(goodsList + shopNo + "/" + that.active, {
            current: page.num,
            size: page.size,
          })
          .then((res) => {
            if (res.data.code === 0) {
              let arr = res.data.data.records;
              if (page.num === 1) that.goodLists = [];
              that.goodLists = that.goodLists.concat(arr);
              that.$nextTick(() => {
                mescroll.endSuccess(arr.length);
                if (that.active === "3") {
                  mescroll.removeEmpty();
                }
              });
            } else {
              mescroll.endErr();
            }
          });
      }, 500);
    },

    onBridgeReady() {
      let that = this;
      WeixinJSBridge.invoke(
        "getBrandWCPayRequest",
        {
          appId: that.appId, // 公众号名称，由商户传入
          timeStamp: that.timeStamp, // 时间戳，
          nonceStr: that.nonceStr, // 随机串
          package: that.package,
          signType: that.signType, // 微信签名方式：
          paySign: that.paySign, // 微信签名
        },
        function (res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            // let orderId = that.orderId;
            that.$router.push({
              path: "/paymentsuccess",
            });
          } else if (res.err_msg == "get_brand_wcpay_request:fail") {
            that.$toast.fail("支付失败！");
          }
        }
      );
    },
    brandActivityinfo(orderId) {
      this.$postRequest(getBrandActivityinfo, {
        orderId: orderId,
        area: this.area,
      }).then((res) => {
        if (res.data.code === 0) {
          this.activityList = res.data.data.activityList;
        }
      });
    },
    // activityUrl(url) {
    //   window.location.href = url;
    // },
    clickDjtz() {
      let that = this;
      window.location.href = that.url;
    },
    payDetails() {
      this.show = false;
    },
    showPopup() {
      this.show = true;
    },
    clickShowPopup(data) {
      this.show = data;
    },
  },
};
</script>

<style>
</style>