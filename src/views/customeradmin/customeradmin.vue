<template>
  <div class="customeradmin">
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      id="mescroll"
    >
      <back></back>
      <div class="cus-content">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <img :src="item.headImgUrl" />
            <div class="name-jifen">
              <p class="name">{{ item.nickname }}</p>
              <p class="jifen">目前积分：{{ item.score }}分</p>
            </div>
            <i
              class="iconfont icon-guanli1"
              @click="customerInfo(item.userId)"
            ></i>
          </li>
        </ul>
      </div>
    </mescroll-vue>
  </div>
</template>

<script>
import { customerList } from "../../api/api";
export default {
  name: "customeradmin",
  data() {
    return {
      list: [],
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
  },
  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback(page, mescroll) {
      this.$postRequest(customerList, {
        pageNo: page.num,
        pageSize: page.size,
      }).then((res) => {
        if (res.data.code === 0) {
          let arr = res.data.data.list;
          if (page.num === 1) this.list = [];
          this.list = this.list.concat(arr);
          this.$nextTick(() => {
            this.mescroll.endSuccess(arr.length);
          });
        } else {
          this.mescroll.endErr();
        }
      });
    },
    customerInfo(userId) {
      this.$router.push({ path: "/adminpage", query: { userId: userId } });
    },
  },
};
</script>

<style>
</style>