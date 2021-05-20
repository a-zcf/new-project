<template>
  <div class="user-info">
    <!-- <img src="../../assets/img/bossinfo.png" class="info-img" /> -->
    <ul>
      <li class="img">
        <img :src="headImgUrl" />
      </li>
      <li class="tx-nc">
        <p class="text-left">HI~</p>
        <p class="wx-name text-left">{{ nickname }}</p>
      </li>
      <li class="margin">
        <p>{{ longCoin }}</p>
        <p>我的龙币</p>
      </li>
      <li class="margin">
        <p>{{ score }}</p>
        <p>我的积分</p>
      </li>
      <li style="margin-left: 5px">
        <p>{{ cardCount }}</p>
        <p>我的卡券</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { payUserinfo } from "../../api/api";
export default {
  name: "UserInfo",
  data() {
    return {
      nickname: "",
      headImgUrl: "",
      score: "",
      cardCount: "",
      longCoin: "",
    };
  },
  props: {
    orderId: {
      type: String,
      required: true,
    },
  },
  watch: {
    orderId: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.getPayUserinfo(newVal);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {},
  methods: {
    getPayUserinfo(orderId) {
      this.$postRequest(payUserinfo, { orderId: orderId }).then((res) => {
        if (res.data.code === 0) {
          let {
            nickname,
            headImgUrl,
            score,
            cardCount,
            longCoin,
          } = res.data.data.userinfo;
          this.nickname = nickname;
          this.headImgUrl = headImgUrl;
          this.score = score;
          this.cardCount = cardCount;
          this.longCoin = longCoin;
        }
      });
    },
  },
};
</script>

<style>
</style>