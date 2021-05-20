<template>
  <div class="my">
    <div class="my-head">
      <img src="../../assets/img/myheadbgk.png" class="head-bgk" />
      <img src="../../assets/img/indexBgk.png" class="myheadimg" />
      <p class="my-name">测试平台</p>
    </div>
    <div class="list">
      <ul>
        <li>
          <router-link to="/myorder" class="router">
            <img src="../../assets/img/ordericon.png" class="ordericon" />
            <span class="conte">我的订单</span
            ><i class="iconfont icon-gengduo gengduo"></i>
          </router-link>
        </li>
        <li @click="clickCoupon">
          <div class="router">
            <img src="../../assets/img/couponicon.png" class="couponicon" />
            <span class="conte">我的优惠券</span
            ><i class="iconfont icon-gengduo gengduo"></i>
          </div>
        </li>
        <li>
          <router-link to="/addressadmin" class="router">
            <img src="../../assets/img/addressicon.png" class="addressicon" />
            <span class="conte">地址管理</span
            ><i class="iconfont icon-gengduo gengduo"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/pointsdetails" class="router">
            <img src="../../assets/img/integralicon.png" class="integralicon" />
            <span class="conte">我的积分</span
            ><i class="iconfont icon-gengduo gengduo"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <van-popup
      v-model="show"
      position="bottom"
      closeable
      close-icon="close"
      class="popup"
    >
      <ul>
        <li v-for="item in cardListData" :key="item.cardUniqueId">
          <img
            :src="item.status === 0 ? paidImg : tobepaidImg"
            class="coupon-img"
          />
          <div class="left-coupon">
            <span class="fuhao">￥</span>
            <span class="money">{{ item.cardValue }}</span>
          </div>
          <div class="miaoshu">
            <p class="manjian">满{{ item.totalAmount }}元可用</p>
            <p class="time-youxiao">有效期至：{{ item.endTime }}</p>
          </div>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
import { cardList } from "../../api/api";
export default {
  name: "my",
  data() {
    return {
      cardListData: [],
      show: false,
      tobepaidImg: require("../../assets/img/tobepaid.png"),
      paidImg: require("../../assets/img/paid.png"),
    };
  },
  mounted() {
    let that = this;
    let shopNo = localStorage.getItem("shopNo");
    that.$getRequest(cardList + shopNo).then((res) => {
      if (res.data.code === 0) {
        that.cardListData = res.data.data;
      }
    });
  },
  methods: {
    clickCoupon() {
      this.show = true;
    },
  },
};
</script>

<style>
</style>