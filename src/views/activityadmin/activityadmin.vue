<template>
  <div class="activityadmin">
    <back></back>
    <div class="sell">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">
          <div class="title">
            <p>活动名称：{{ item.title }}</p>
          </div>
          <div class="list-content">
            <div class="cont-l">
              <p>总赠送人数：{{ item.totalUser }}</p>
              <p v-if="item.activityType == '1'">
                总赠送积分：{{ item.totalScore }}
              </p>
              <p class="time">{{ item.createTime }}</p>
            </div>
            <!-- <span class="cont-r">详情</span> -->
          </div>
        </li>
      </ul>
    </div>
    <acticity-but :text="text" @click.native="addActivity"></acticity-but>
  </div>
</template>
 
<script>
import { shopActivityList } from "../../api/api";
export default {
  name: "activityadmin",
  data() {
    return {
      text: "添加活动",
      dataList: [],
    };
  },
  mounted() {
    let that = this;
    let url = location.href.split("#")[0];
    that.$getRequest(shopActivityList, { url: url }).then((res) => {
      if (res.data.code === 0) {
        that.dataList = res.data.data;
      }
    });
  },
  methods: {
    addActivity() {
      this.$router.push({
        path: "/addactivity",
      });
    },
  },
};
</script>

<style>
</style>