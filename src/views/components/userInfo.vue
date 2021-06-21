<template>
  <div class="user-info">
    <!-- <img src="../../assets/img/bossinfo.png" class="info-img" /> -->
    <ul>
      <li class="img">
        <img :src="headImgUrl" />
      </li>
      <li class="tx-nc">
        <p class="wx-name text-left">{{ nickname }}</p>
        <!-- <p class="text-left but">消费会员</p> -->
        <wx-open-launch-weapp
          id="launch-btn"
          username="gh_77d0b13f46ae"
          path="pages/home/home"
        >
          <script type="text/wxtag-template">
            <div>
              <style>
                .btn{
                  background-color: red;
                  color: #fff;
                  border: none;
                  border-radius:50px;
                  font-size:13px;
                  margin-top:5px;
                }
              </style>
              <button class="btn">消费会员</button>
            </div>
          </script>
        </wx-open-launch-weapp>
      </li>
      <li class="margin" @click="myLongBi">
        <p>{{ longCoin }}</p>
        <p>我的龙币</p>
      </li>
      <li class="margin" @click="microStore">
        <p>{{ score }}</p>
        <p>我的积分</p>
      </li>
      <li style="margin-left: 5px" @click="microStore">
        <p>{{ cardCount }}</p>
        <p>我的卡券</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { payUserinfo, getJssdkConfig } from "../../api/api";
import wx from "weixin-js-sdk";
export default {
  name: "UserInfo",
  data() {
    return {
      nickname: "",
      headImgUrl: "",
      score: "",
      cardCount: "",
      longCoin: "",
    };
  },
  props: {
    orderId: {
      type: String,
      required: true,
    },
  },
  watch: {
    orderId: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.getPayUserinfo(newVal);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    let url = location.href.split("#")[0];
    this.$postRequest(getJssdkConfig, { url: url }).then((res) => {
      if (res.data.code === 0) {
        let { appId, timestamp, nonceStr, signature } = res.data.data.config;
        wx.config({
          debug: false,
          appId: appId,
          timestamp: timestamp,
          nonceStr: nonceStr,
          signature: signature,
          jsApiList: ["openProductSpecificView"],
          openTagList: ["wx-open-launch-weapp"],
        });
        wx.ready(function () {
          var btn = document.getElementById("launch-btn");
          btn.addEventListener("launch", function (e) {});
          btn.addEventListener("error", function (e) {
            console.log("fail", e.detail);
          });
        });
        wx.error(function (res) {});
      }
    });
  },
  methods: {
    getPayUserinfo(orderId) {
      this.$postRequest(payUserinfo, { orderId: orderId }).then((res) => {
        if (res.data.code === 0) {
          let { nickname, headImgUrl, score, cardCount, longCoin } =
            res.data.data.userinfo;
          this.nickname = nickname;
          this.headImgUrl = headImgUrl;
          this.score = score;
          this.cardCount = cardCount;
          this.longCoin = longCoin;
        }
      });
    },
    myLongBi() {
      window.location.href =
        "http://thyrtest.gxtianhai.com.cn/zlnewpro/frontpage/score/scoreLogin";
    },
    microStore() {
      let shopNo = localStorage.getItem("shopNo");
      if (shopNo !== "") {
        window.location.href =
          "https://thyrtest.gxtianhai.com.cn/storeui/index.html?shopNo=" +
          shopNo;
      }
    },
  },
};
</script>

<style>
</style>