<template>
  <div class="batchbinding">
    <back></back>
    <div class="roll">
      <ul>
        <li v-for="(item, index) in preData" :key="index">
          <span class="barnName">{{ item.brandName }}</span>
          <span class="number">x{{ item.num }}</span>
          <p v-show="show" class="brandCode">{{ item.brandCode }}</p>
          <input
            class="price"
            v-model="item.price"
            placeholder="0"
            @input="changePrice($event)"
            :show-clear="true"
          />
        </li>
      </ul>
    </div>
    <div class="footer-but">
      <div class="but">
        <img src="../../assets/img/xuanxiang.png" class="but-bgk" />
        <img
          src="../../assets/img/addImg.png"
          class="but-icon"
          @click="clickContinueBinding"
        />
        <div class="l-r">
          <button @click="clickOkBinding">可支付绑定</button>
          <button @click="clickSmokeBindNoneedpay">不可支付绑定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  smokeInfo,
  smokeBind,
  smokeBindNoneedpay,
  getJssdkConfig,
} from "../../api/api";
import wx from "weixin-js-sdk";
import back from "../components/back.vue";
// var map = new Map();
export default {
  components: { back },
  name: "batchbinding",
  data() {
    return {
      show: false,
      num: 0,
      price: 0,
      list: [],
      preData: [],
    };
  },
  mounted() {
    let that = this;
    that.result = that.$route.query.result;
    that.getSmokeInfo();
    let url = location.href.split("#")[0];
    that.$postRequest(getJssdkConfig, { url: url }).then((res) => {
      if (res.data.code === 0) {
        let { appId, timestamp, nonceStr, signature } = res.data.data.config;
        wx.config({
          debug: false,
          appId: appId, // 必填，业微信的appID
          timestamp: timestamp, // ，生成签名的时间戳
          nonceStr: nonceStr, // 必填，生成签名的随机串
          signature: signature, // 必填，签名
          jsApiList: ["scanQRCode"],
        });
        wx.ready(function () {});
        wx.error(function (res) {});
      }
    });
  },
  methods: {
    getSmokeInfo() {
      let that = this;
      that.$postRequest(smokeInfo, { codeStr: that.result }).then((res) => {
        if (res.data.code === 0) {
          if (this.list.length == 0) {
            let smokeInfoList = res.data.data.smokeInfo;
            smokeInfoList.num = 1;
            that.list.push(smokeInfoList);
            that.preData.push(smokeInfoList);
          } else {
            let arr = that.list;
            let has = false;
            arr.forEach((item, index, arr) => {
              if (item.codeId == res.data.data.smokeInfo.codeId) {
                has = true;
              }
            });
            if (has) {
              that.$toast("不可以重复扫同一二维码哦！");
              return;
            }
            that.list.push(res.data.data.smokeInfo);
            let arrTo = that.preData;
            let hasTo = false;
            arrTo.forEach((item, index, arrTo) => {
              if (item.brandCode == res.data.data.smokeInfo.brandCode) {
                hasTo = true;
                item.num = item.num + 1;
                that.preData.splice(index, item);
              }
            });
            if (!hasTo) {
              let arrList = res.data.data.smokeInfo;
              arrList.num = 1;
              that.preData.push(arrList);
            }
          }
        } else {
          that.$toast.fail(res.data.msg);
        }
      });
    },
    changePrice(event) {
      let indexBrandCode = event.currentTarget.parentNode.getElementsByTagName(
        "p"
      )[0].innerHTML;
      const length = this.list.length;
      for (let index = 0; index < length; index++) {
        const element = this.list[index];
        if (element.brandCode == indexBrandCode) {
          element.price = event.currentTarget.value;
          this.list.splice(index, element);
        }
      }
    },
    clickContinueBinding() {
      let that = this;
      wx.scanQRCode({
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          that.result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
          that.getSmokeInfo();
        },
      });
    },
    clickOkBinding() {
      let that = this;
      if (that.list.length === 0) {
        that.$toast.fail("没有可绑定的数据，请先扫码。");
        return;
      }
      const length = that.list.length;
      for (let index = 0; index < length; index++) {
        const element = that.list[index];
        if (element.price <= 0 || element.price === "") {
          that.$toast.fail("价格不能小于零");
          return;
        }
      }
      that.$postRequest(smokeBind, { list: that.list }).then((res) => {
        if (res.data.code === 0) {
          that.$toast.success("绑定成功");
          that.$router.push({ path: "/bindingsuccess" });
        } else {
          that.$toast.fail(res.data.msg);
        }
      });
    },
    clickSmokeBindNoneedpay() {
      let that = this;
      if (that.list.length === 0) {
        that.$toast.fail("没有可绑定的数据，请先扫码。");
        return;
      }
      const length = that.list.length;
      for (let index = 0; index < length; index++) {
        const element = that.list[index];
        if (element.price <= 0 || element.price === "") {
          that.$toast.fail("价格不能小于零");
          return;
        }
      }
      that.$postRequest(smokeBindNoneedpay, { list: that.list }).then((res) => {
        if (res.data.code === 0) {
          that.$toast.success("绑定成功");
          that.$router.push({ path: "/bindingsuccess" });
        } else {
          that.$toast.fail(res.data.msg);
        }
      });
    },
  },
};
</script>

<style>
</style>