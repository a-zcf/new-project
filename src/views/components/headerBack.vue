<template>
  <div class="header">
    <!-- <div class="back">
      <span @click="headerBack">
        <i class="iconfont icon-fanhui"></i>
        {{ title }}</span
      >
    </div> -->
  </div>
</template>

<script>
export default {
  name: "header-back",
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

<style >
.header {
  height: 100px !important;
}
/* .header {
  width: 100%;
  overflow: hidden;
  background-color: #eeeeee;
  .back {
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
    padding: 0px 8px;
    color: #0066cb;
    font-size: 16px;
    i {
      margin-right: 5px;
    }
  }
} */
</style>