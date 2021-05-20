<template>
  <div class="whole-package">
    <img src="../../assets/img/topinfo.png" class="package-bgk" />
    <!-- <div class="yin-zhang">正品</div> -->
    <slot name="yinzhang"></slot>
    <img
      :src="
        smokeData.imgUrl == '' || smokeData.imgUrl == null
          ? kongimg
          : smokeData.imgUrl
      "
      class="smoke-img"
    />
    <div class="right-con">
      <ul>
        <li>
          <img src="../../assets/img/pinming.png" class="smoke-icon" />
          <div class="right-content">
            <p class="title">品名</p>
            <p class="text">{{ smokeData.name }}</p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/shenfenzhenghao.png" class="smoke-icon" />
          <div class="right-content">
            <p class="title">卷烟身份证号</p>
            <p class="text">{{ smokeData.smokeBrandCode }}</p>
          </div>
        </li>
        <li>
          <img src="../../assets/img/chushoudianpu.png" class="smoke-icon" />
          <div class="right-content">
            <p class="title">出售店铺</p>
            <p class="text">{{ supplierData.name }}</p>
          </div>
        </li>
        <li style="border: none">
          <img src="../../assets/img/xukezheng.png" class="smoke-icon" />
          <div class="right-content">
            <p class="title">专卖许可证</p>
            <p class="text">{{ supplierData.licence }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "WholePackage",
  data() {
    return {
      kongimg: require("../../assets/img/kongimg.png"),
    };
  },
  props: {
    supplierData: {
      type: Object,
      required: true,
    },
    smokeData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>