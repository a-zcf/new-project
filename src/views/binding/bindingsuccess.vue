<template>
  <div class="bindingsuccess">
    <back></back>
    <div class="prompt_text">
      <span class="num">{{ count }}</span
      >秒后转至首页
    </div>
    <span class="iconfont icon-chenggong msgIcon"></span>
    <span class="msg_text1">绑定成功！</span>
    <span class="msg_text2">现在用户可以自行扫码支付了！</span>
    <button
      :gradients="['#1D62F0', '#19D5FD']"
      class="preservation"
      @click="returnIndex"
    >
      返回首页
    </button>
  </div>
</template>

<script>
export default {
  name: "bindingsuccess",
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.goIndex();
  },
  methods: {
    //  3秒后返回首页
    goIndex() {
      const TIME_COUNT = 5;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
          if (this.count > 1 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
            this.$router.push({ path: "/index" });
          }
        }, 1000);
      }
    },
    returnIndex() {
      clearInterval(this.timer);
      this.$router.push({ path: "/index" });
    },
  },
};
</script>

<style>
</style>