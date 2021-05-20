<template>
  <div class="header">
    <div class="back">
      <span @click="headerBack">
        <i class="iconfont icon-fanhui"></i>
        {{ title }}</span
      >
      <slot name="baocun"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "back",
  props: {
    back: {
      type: [String, Boolean],
      default: true,
    },
  },
  data() {
    return {
      title: "返回",
    };
  },
  methods: {
    headerBack() {
      if (!this.back) return;
      this.$router.go(-1); //返回上一层
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  overflow: hidden;
  background-color: #eeeeee;
  .back {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    // line-height: 80px;
    box-sizing: border-box;
    padding: 0px 8px;
    color: #0066cb;
    font-size: 30px;
    i {
      //   margin-right: 5px;
      font-size: 30px;
      font-weight: 600;
    }
  }
}
</style>