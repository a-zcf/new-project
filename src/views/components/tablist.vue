<template>
  <van-tabs v-model="active" class="tab" @change="changeList">
    <van-tab
      v-for="(item, index) in list"
      :key="index"
      :title="item.classifyName"
      :name="item.classifyId"
    >
      <ul v-if="item.classifyType !== 2">
        <li v-for="(it, index) in goodLists" :key="index">
          <img :src="it.img" @click="clickUrl()" />
          <p class="titel-name">{{ it.title }}</p>
          <!-- <p class="yueshou">月售{{ it.goodsId }}</p> -->
          <p class="price">
            <span
              ><b>￥{{ it.price }}</b></span
            ><span></span>
          </p>
        </li>
      </ul>
      <div
        v-if="item.classifyType === 2"
        class="huodong-list"
        @click="huodongBut"
      >
        <div class="left-huodong">
          <p class="tit">竞猜过“足”瘾</p>
          <p class="bot-text">燃烧吧！欧洲杯</p>
        </div>
        <img src="../../assets/img/huodongImg01.jpg" class="huodongImg" />
      </div>
    </van-tab>
    <!-- <van-tab title="团购">内容 2</van-tab>
    <van-tab title="特价">内容 3</van-tab>
    <van-tab title="活动">内容 4</van-tab> -->
  </van-tabs>
</template>

<script>
export default {
  name: "TabList",
  data() {
    return {
      active: 1,
      spNo: "",
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    goodLists: {
      type: Array,
      required: true,
    },
    // shopNo: {
    //   type: String,
    //   required: true,
    // },
  },
  // watch: {
  //   shopNo: {
  //     handler(newVal, oldVal) {
  //       if (newVal) {
  //         // console.log(newVal);
  //         this.spNo = newVal;
  //       }
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },
  mounted() {},
  methods: {
    changeList(name) {
      this.$emit("changeList", name);
    },
    clickUrl() {
      let shopNo = localStorage.getItem("shopNo");
      window.location.href =
        "http://thyrtest.gxtianhai.com.cn/storeui/index.html?shopNo=" + shopNo;
    },
    huodongBut() {
      window.location.href =
        "http://activitypro.gxtianhai.cn/game/index.html?v1=2021&v3=2021";
    },
  },
};
</script>

<style>
</style>