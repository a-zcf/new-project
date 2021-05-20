
<template>
  <div class="stock">
    <back></back>
    <div class="head-title">
      <span>烟品规格</span>
      <span>激活数量</span>
      <span>已支付</span>
    </div>
    <div class="sell">
      <ul class="ul-list">
        <li v-for="(item, index) in list" :key="index">
          <span class="span brandName">{{ item.brandName }}</span>
          <div class="span color">
            <span class="number">{{ item.number }}</span>
            <router-link
              :to="{
                path: '/stockdetailed',
                query: { brandCode: item.brandCode },
              }"
              class="mingxi"
              ><span class="detailed">明细</span></router-link
            >
          </div>
          <span class="span yizhifu">{{ item.payed }}</span>
        </li>
      </ul>
    </div>
    <div class="list-null" v-if="list.length == 0">
      <div class="conter">
        <i class="iconfont icon-zanwushuju"></i>
        <p>空空如也~~</p>
      </div>
    </div>
  </div>
</template>

<script>
import { activateRecord } from "../../api/api";
export default {
  name: "stock",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    let that = this;
    that.$postRequest(activateRecord).then((res) => {
      if (res.data.code === 0) {
        that.list = res.data.data.list;
      }
    });
  },
  methods: {},
};
</script>

<style>
</style>