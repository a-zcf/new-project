<template>
  <div class="boss-info">
    <img src="../../assets/img/bossinfo.png" class="boss-bgk" />
    <img
      :src="
        supplierData.codeImg == '' || supplierData.codeImg == null
          ? kongimg
          : supplierData.codeImg
      "
      class="img"
    />
    <div class="personal-info">
      <p class="p1">
        <span class="left"
          ><i class="iconfont icon-lianxiren1"></i> <span>联系人</span>
        </span>
        <span>{{ supplierData.boss }}</span>
      </p>
      <p>
        <span class="left"
          ><i class="iconfont icon-shouji"></i> <span>电话</span></span
        ><span>{{ supplierData.phone }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BossInfo",
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
  },
};
</script>

<style lang="scss">
</style>