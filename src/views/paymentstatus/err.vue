<template>
  <div class="paymentsuccess err">
    <span class="iconfont icon-cuowu msgIcon msgIconRed"></span>
    <span class="msg_text1 msgIconRed">{{ errPaymentMsg }}</span>
    <span class="msg_text2">感谢您使用真龙烟包支付！</span>
  </div>
</template>

<script>
export default {
  name: "err",
  data() {
    return {
      errPaymentMsg: "",
    };
  },
  mounted() {
    this.errPaymentMsg = this.$route.query.message;
  },
  methods: {},
};
</script>

<style>
</style>