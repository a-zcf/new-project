<template>
  <div class="paymentsuccess">
    <span class="iconfont icon-chenggong msgIcon"></span>
    <span class="msg_text1">支付成功！</span>
    <span class="msg_text2">感谢您使用真龙烟包支付！</span>
    <!-- <div class="activity">
      <h3>{{ title }}</h3>
      <img :src="img" @click="onImg" />
    </div> -->
  </div>
</template>

<script>
// import { PaySuccess } from "../../api/api";
export default {
  name: "paymentsuccess",
  data() {
    return {
      // orderId: "",
      // url: "", // 点击跳转的链接
      // title: "", // 活动名称
      // img: "", // 活动配图
    };
  },
  created() {},
  mounted() {
    // this.orderId = this.$route.query.orderId;
    // this.$postRequest(PaySuccess, { orderId: this.orderId }).then((res) => {
    //   if (res.data.code == 0) {
    //     let { url, title, img } = res.data.data.activity;
    //     this.url = url;
    //     this.title = title;
    //     this.img = img;
    //   }
    // });
  },
  methods: {
    // onImg() {
    //   window.location.href = this.url;
    // },
  },
};
</script>

<style>
</style>