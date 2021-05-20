<template>
  <div class="purchasedetails">
    <back></back>
    <div class="sell">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <div class="details-l">
            <p class="goumai">{{ item.brandName }}</p>
            <p class="zhifu-time">支付时间：{{ item.payTime }}</p>
          </div>
          <span class="details-r"
            >x{{ item.orderType === "0" ? "10" : "1" }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { detailBrandList } from "../../api/api";
export default {
  name: "purchasedetails",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    let that = this;
    let brandId = that.$route.query.brandId;
    let userId = that.$route.query.userId;
    that
      .$postRequest(detailBrandList, { brandId: brandId, userId: userId })
      .then((res) => {
        if (res.data.code === 0) {
          that.list = res.data.data;
        }
      });
  },
  methods: {},
};
</script>

<style>
</style>