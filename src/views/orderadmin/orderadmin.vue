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
        <span class="jine"
          >金额<b class="b1">￥{{ totalAmount }}</b></span
        >
        <span class="lirun"
          >利润<b class="b2">￥{{ totalProfilt }}</b></span
        >
      </p>
    </div>
    <div class="roll">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <p>
            <span class="name">{{ item.brandName }}</span>
            <span class="numbre">x1</span>
            <span class="price">￥{{ item.amount }}</span>
          </p>
          <p class="time">{{ item.time }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { saleRecord } from "../../api/api";
import getDate from "../../utils/getDate";
export default {
  name: "orderadmin",
  data() {
    return {
      dateList: [],
      getTime: "",
      totalAmount: 0,
      totalProfilt: 0,
      list: [],
    };
  },
  mounted() {
    let that = this;
    that.dateList = getDate.getDateList().dateList.reverse();
    that.getTime = getDate.getDateList().getTime;
    that.getSaleRecord();
  },
  methods: {
    changeDay() {
      this.getSaleRecord();
    },
    getSaleRecord() {
      let that = this;
      that.$postRequest(saleRecord, { startDate: that.getTime }).then((res) => {
        if (res.data.code === 0) {
          let { totalAmount, totalProfilt } = res.data.data.saleRecord;
          that.totalAmount = totalAmount;
          that.totalProfilt = totalProfilt;
          that.list = res.data.data.saleRecord.list;
        }
      });
    },
  },
};
</script>

<style>
</style>