<template>
  <div>
    <van-popup v-model="show" :close-on-click-overlay="false" class="pou">
      <van-icon name="clear" @click="clickShowPopup" class="guanbi" />
      <ul class="ul">
        <!-- <li
          v-for="(item, index) in activityList"
          :key="index"
          
        >
          <p>{{ item.title }}</p>
          <img :src="item.img" @click="activityUrl(item.url)" />
        </li> -->
        <li style="min-height: 150px">
          <p>1、店铺积分活动</p>
          <p>2、店铺礼品券活动</p>
        </li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "activitylist",
  data() {
    return {};
  },
  props: {
    activityList: {
      type: Array,
      required: true,
    },
    show: {
      type: Boolean,
      required: true,
    },
  },
  mounted() {},
  methods: {
    clickShowPopup() {
      this.$emit("clickShowPopup", false);
    },
    activityUrl(url) {
      window.location.href = url;
    },
  },
};
</script>

<style>
.pou {
  width: 90%;
  border-radius: 15px;
  overflow: visible;
}
.ul {
  width: 100%;
  padding: 30px 20px;
  box-sizing: border-box;
  margin: auto;
  position: relative;
}
.ul li {
}
.ul li p {
  line-height: 50px;
}
.ul li img {
  width: 100%;
  height: 230px;
  margin: 15px 0px;
}
.guanbi {
  position: absolute;
  right: -30px;
  top: -40px;
  color: #4486ff;
  font-size: 60px;
}
</style>