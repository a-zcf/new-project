<template>
  <div class="index">
    <back></back>
    <img :src="indexBgk" class="index-bgk" />
    <div class="head">
      <img :src="infocard" class="infocard" />
      <ul>
        <li class="head-top">
          <img src="../../assets/img/customer.png" class="head-portrait" />
          <div class="head-cont">
            <p>微信昵称：南宁市真龙旗舰店</p>
            <p>店铺名称：南宁市真龙旗舰店南宁市真龙旗舰店南宁市真龙旗舰店</p>
          </div>
        </li>
        <li class="head-bottom">
          <p>
            <span class="size">19966</span>
            <span>今日访问量</span>
          </p>
          <p class="margin-lr">
            <span class="size">98333</span>
            <span>今日支付订单数</span>
          </p>
          <p>
            <span class="size">99</span>
            <span>今日支付金额</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="height">
        <ul>
          <li>
            <router-link to="/shopadmin" class="roulik">
              <img src="../../assets/img/microStore.png" />
              <p>店铺管理</p>
            </router-link>
          </li>

          <li>
            <router-link to="/commodityadmin" class="roulik">
              <img src="../../assets/img/commodityAdmin.png" />
              <p>商品管理</p>
            </router-link>
          </li>
          <li>
            <router-link to="/orderadmin" class="roulik">
              <img src="../../assets/img/order.png" />
              <p>订单管理</p>
            </router-link>
          </li>
          <li>
            <router-link to="" class="roulik">
              <img src="../../assets/img/preview.png" />
              <p>店铺预览</p>
            </router-link>
          </li>
          <li>
            <router-link to="/marketexten" class="roulik">
              <img src="../../assets/img/account.png" />
              <p>营销推广</p>
            </router-link>
          </li>
          <li>
            <router-link to="/dataanalysis" class="roulik">
              <img src="../../assets/img/dataanalysis.png" />
              <p>数据分析</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      indexBgk: require("../../assets/img/indexBgk.png"),
      infocard: require("../../assets/img/infocard.png"),
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style>
</style>