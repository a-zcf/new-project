
<template>
  <div class="stockdetailed">
    <back></back>
    <div class="detailed-title">
      <span>烟品规格</span>
      <span>激活时间</span>
      <span>激活数量/条</span>
    </div>
    <div class="sell">
      <ul class="detailed-list">
        <li v-for="(item, index) in list" :key="index">
          <span class="brandName">{{ item.brandName }}</span>
          <span class="time">{{ item.time }}</span>
          <span class="number">{{ item.number }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { brandActivateRecord } from "../../api/api";
export default {
  name: "stockdetailed",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    let that = this;
    let brandCode = that.$route.query.brandCode;
    console.log(brandCode);
    that
      .$postRequest(brandActivateRecord, { brandCode: brandCode })
      .then((res) => {
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