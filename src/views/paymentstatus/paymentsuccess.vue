<template>
  <div class="paymentsuccess">
    <span class="iconfont icon-chenggong msgIcon"></span>
    <span class="msg_text1">支付成功！</span>
    <span class="msg_text2">感谢您使用真龙烟包支付！</span>
    <wx-open-launch-weapp
      id="launch-btn"
      username="gh_77d0b13f46ae"
      path="pages/home/home?hide=1"
    >
      <script type="text/wxtag-template">
        <div>
          <style>
            .btn{
              outline: none;
              display: block;
              background-color:#fff;
              border: 1px solid #4486ff;
              width: 200px;
              height: 50px;
              margin:160px auto auto auto;
              color: #4486ff;
              border-radius: 50px;
              font-size:16px;
            }
          </style>
          <button class="btn">领取会员权益</button>
        </div>
      </script>
    </wx-open-launch-weapp>
  </div>
</template>

<script>
import { getJssdkConfig } from "../../api/api";
import wx from "weixin-js-sdk";
export default {
  name: "paymentsuccess",
  data() {
    return {};
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
  methods: {},
};
</script>

<style>
</style>