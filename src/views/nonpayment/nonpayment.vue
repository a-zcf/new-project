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
      <img
        :src="img == '' || img == null ? kongimg : img"
        class="guanggao-img"
        @click="clickDjtz"
      />
      <!-- <img src="../../assets/img/head-1.png" class="guanggao-img" /> -->

      <tab-list
        @onClick="onClick"
        :list="list"
        :goodLists="goodLists"
      ></tab-list>
    </mescroll-vue>
    <!-- </div> -->
    <div class="footer01">
      <p>温馨提示：</p>
      <p>本二维码是广西中烟终端管理条包管理平台，用于...</p>
    </div>
  </div>
</template>

<script>
import { WxPay, commodityClassList, goodsList } from "../../api/api";
export default {
  name: "nonpayment",
  data() {
    return {
      active: 0,
      kongimg: require("../../assets/img/kongimg.png"),
      supplierData: {},
      smokeData: {},
      orderId: "",
      codeStr: "",
      strip: "",
      active: 1,

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
    };
  },
  mounted() {
    this.codeStr = this.$route.query.codeStr;
    this.strip = this.$route.query.strip;
    this.getWxPay();
    this.$getRequest(commodityClassList).then((res) => {
      if (res.data.code === 0) {
        this.list = res.data.data;
      }
    });
  },
  methods: {
    onClick(name) {
      this.active = name;
      this.mescroll.resetUpScroll();
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
              });
            } else {
              mescroll.endErr();
            }
          });
      }, 500);
    },
    getWxPay() {
      if (this.codeStr == "") {
        this.$toast.fail("无效的二维码，请重新扫码！");
        return;
      }

      this.$postRequest(WxPay, { codeStr: this.codeStr }).then((res) => {
        if (res.data.code === 1005 || res.data.code === 1006) {
          this.supplierData = res.data.data.supplierData;
          this.smokeData = res.data.data.smokeData;

          let { url, title, img, shopNo } = res.data.data.activity;
          localStorage.setItem("shopNo", shopNo);
          this.url = url;
          this.title = title;
          this.img = img;

          this.orderId = res.data.data.payConfig.orderId;
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    },
    clickDjtz() {
      let that = this;
      window.location = that.url;
    },
  },
};
</script>

<style>
</style>