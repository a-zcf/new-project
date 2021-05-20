<template>
  <div class="points-details">
    <back></back>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      id="mescroll"
    >
      <ul>
        <li v-for="(item, index) in scoreFlowList" :key="index">
          <p class="title">
            <span class="title-name">{{ item.sourcesTitle }}</span>
            <span class="title-number">x1</span>
          </p>
          <p class="time-icon">
            <img src="../../assets/img/time.png" class="icon" />
            <span class="time">{{ item.createdTime }}</span>
          </p>
          <p class="address-icon">
            <img src="../../assets/img/addressicon.png" class="icon" />
            <span class="address-text">{{ item.shopName }}</span>
            <span class="jifen">+{{ item.changeScore }}</span>
          </p>
        </li>
      </ul>
    </mescroll-vue>
  </div>
</template>

<script>
import { scoreFlow } from "../../api/api";
export default {
  name: "pointsdetails",
  data() {
    return {
      shopNo: "",
      scoreFlowList: [],
      mescroll: null,
      mescrollDown: {
        use: false,
      },
      mescrollUp: {
        callback: this.upCallback,
        noMoreSize: 1,
        page: {
          num: 0,
          size: 10,
          time: null,
        },
        empty: {
          warpId: "mescroll",
          tip: "暂无相关数据",
        },
        htmlNodata: '<p class="upwarp-nodata">-- 已加载完 --</p>',
        htmlLoading:
          '<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中...</p>',
      },
    };
  },
  mounted() {
    let that = this;
    that.shopNo = localStorage.getItem("shopNo");
  },
  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback(page, mescroll) {
      this.$getRequest(scoreFlow + this.shopNo, {
        current: page.num,
        size: page.size,
      }).then((res) => {
        if (res.data.code === 0) {
          let arr = res.data.data.records;
          if (page.num === 1) this.scoreFlowList = [];
          this.scoreFlowList = this.scoreFlowList.concat(arr);
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        } else {
          mescroll.endErr();
        }
      });
    },
  },
};
</script>

<style>
</style>