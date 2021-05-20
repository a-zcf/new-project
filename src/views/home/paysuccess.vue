<template>
  <div class="pay-success">
    <div class="top-img">
      <img :src="paySuccess" class="paySuccess" />
      <div class="orderInfo">
        <div class="orderInfo-con">
          <img :src="orderInfo" class="orderInfo-img" />
          <p class="pay-jine">
            <span class="fuhao">￥</span>
            <span class="jine">260</span>
          </p>
          <div class="dingdan-info">
            <p>订单编号：02165265526</p>
            <p class="margin">下单时间：2021.05.12 00:00:00</p>
            <p>配送地址：真龙烟酒店真龙烟酒店真龙烟酒店真龙</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-but">
      <button class="fanhui">返回首页</button>
      <button class="ckorder">查看订单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "paysuccess",
  data() {
    return {
      paySuccess: require("../../assets/img/paySuccess.png"),
      orderInfo: require("../../assets/img/orderInfo.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>