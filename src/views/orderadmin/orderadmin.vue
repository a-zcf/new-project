<template>
  <div class="orderadmin">
    <back></back>
    <div class="order-head">
      <div class="slide">
        <i class="iconfont icon-riqi"></i>
        <select class="tixian_select" v-model="getTime" @change="changeDay">
          <option v-for="(item, index) in dateList" :key="index" class="potion">
            {{ item }}
          </option>
        </select>
      </div>
      <p class="jine-lirun">
        <span class="jine">金额<b>￥5990</b></span>
        <!-- <span class="lirun">利润<b class="b2">￥499</b></span> -->
      </p>
    </div>
    <van-tabs v-model="active" class="tab-list" color="#378cff">
      <van-tab title="全部" class="tab-slide">
        <ul>
          <li>
            <p class="li-top">
              <span class="li-time">2021-05-04 00:00:00</span>
              <span class="daifukuan">待付款</span>
            </p>
            <div class="middle">
              <img src="../../assets/img/customer.png" />
              <div class="m-content">
                <p class="name">
                  真龙海韵真龙海韵真龙海韵真龙海韵真龙海韵真龙海韵真龙海韵真龙海韵
                </p>
                <p class="price">￥499</p>
              </div>
              <span class="number">x1</span>
            </div>
            <p class="li-bottom">
              <span class="shifu">实付款：</span>
              <span class="price-color">￥499</span>
            </p>
          </li>
          <li>
            <p class="li-top">
              <span class="li-time">2021-05-04 00:00:00</span>
              <span class="daifukuan">待付款</span>
            </p>
            <div class="middle">
              <img src="../../assets/img/customer.png" />
              <div class="m-content">
                <p class="name">真龙海韵</p>
                <p class="price">￥499</p>
              </div>
              <span class="number">x1</span>
            </div>
            <p class="li-bottom">
              <span class="shifu">实付款：</span>
              <span class="price-color">￥499</span>
            </p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="待付款">内容 2</van-tab>
      <van-tab title="待发货">内容 3</van-tab>
      <van-tab title="已发货">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import getDate from "../../utils/getDate";
export default {
  name: "orderadmin",
  data() {
    return {
      dateList: [],
      getTime: "",
      active: 0,
    };
  },
  mounted() {
    let that = this;
    that.dateList = getDate.getDateList().dateList.reverse();
    that.getTime = getDate.getDateList().getTime;
  },
  methods: {
    changeDay() {},
  },
};
</script>

<style>
</style>