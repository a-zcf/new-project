<template>
  <div class="strip">
    <img src="../../assets/img/topinfo.png" class="strip-bgk" />
    <slot name="yinzhang"></slot>
    <img
      :src="
        smokeData.imgUrl == '' || smokeData.imgUrl == null
          ? kongimg
          : smokeData.imgUrl
      "
      class="strip-img"
    />
    <ul>
      <li style="border-bottom: 1px solid #fff">
        <div class="left">
          <img src="../../assets/img/pinming.png" class="img" />
          <div class="con-text01">
            <p class="title">品名</p>
            <p class="text ellipsis">
              {{ smokeData.name }}
            </p>
          </div>
        </div>
        <div class="rigth">
          <img src="../../assets/img/chushoudianpu.png" class="img" />
          <div class="con-text02">
            <p class="title">出售店铺</p>
            <p class="text ellipsis">
              {{ supplierData.name }}
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/img/shenfenzhenghao.png" class="img" />
          <div class="con-text01">
            <p class="title">卷烟身份证号</p>
            <p class="text">{{ smokeData.smokeBrandCode }}</p>
          </div>
        </div>
        <div class="rigth">
          <img src="../../assets/img/xukezheng.png" class="img" />
          <div class="con-text02">
            <p class="title">专卖许可证</p>
            <p class="text">{{ supplierData.licence }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "strip",
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