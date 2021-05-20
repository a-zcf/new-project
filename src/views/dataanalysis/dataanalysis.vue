<template >
  <div class="dataanalysis">
    <back></back>
    <div class="top-content">
      <span class="jinri">今日实时<i class="iconfont icon-guize"></i></span>
      <span class="end-time">截止{{ thisTime }}</span>
      <span class="refresh" @click="shuaXin">刷新</span>
    </div>
    <ul>
      <li @click="clickTab(1)">
        <p><span>本店访客</span><i class="iconfont icon-guize"></i></p>
        <p class="size">{{ visitNum }}</p>
      </li>
      <li @click="clickTab(2)">
        <p><span>支付人数</span><i class="iconfont icon-guize"></i></p>
        <p class="size">{{ payUserCount }}</p>
      </li>
      <li @click="clickTab(3)">
        <p><span>支付订单</span><i class="iconfont icon-guize"></i></p>
        <p class="size">{{ orderCount }}</p>
      </li>
      <li>
        <p><span>支付金额</span><i class="iconfont icon-guize"></i></p>
        <p class="size">{{ totalAmout }}</p>
      </li>
      <div
        class="active"
        :style="
          tabVal === 1
            ? transf01
            : '' || tabVal === 2
            ? transf02
            : '' || tabVal === 3
            ? transf03
            : ''
        "
      ></div>
    </ul>
    <div id="main" class="ech"></div>
  </div>
</template>

<script>
import { dataAnalyse, dataLinehart } from "../../api/api";
import getDate from "../../utils/getDate";
import * as echarts from "echarts/core";
import {
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  GridComponent,
  TitleComponent,
  TooltipComponent,
  LineChart,
  CanvasRenderer,
  LegendComponent,
]);
export default {
  name: "dataanalysis",
  data() {
    return {
      transf01:
        "transform: translateX(143%) translateX(-100%);transition-duration: 0.3s;",
      transf02:
        "transform: translateX(253%) translateX(-50%); transition-duration: 0.3s;",
      transf03:
        "transform: translateX(413%) translateX(-50%); transition-duration: 0.3s;",
      tabVal: 1,
      active: 0,
      visitNum: 0,
      payUserCount: 0,
      orderCount: 0,
      totalAmout: 0,
      timeList: [],
      numList: [],
      thisTime: "",
    };
  },
  mounted() {
    let that = this;
    that.thisTime = getDate.getDateList().thisTime;
    that.getDataAnalyse();
    that.getDataLinehart();
  },
  methods: {
    clickTab(val) {
      this.tabVal = val;
      this.getDataLinehart();
    },
    shuaXin() {
      this.thisTime = getDate.getDateList().thisTime;
      this.getDataAnalyse();
      this.getDataLinehart();
    },
    getDataAnalyse() {
      let that = this;
      that.$postRequest(dataAnalyse, { date: that.thisTime }).then((res) => {
        if (res.data.code === 0) {
          let {
            visitNum,
            payUserCount,
            orderCount,
            totalAmout,
          } = res.data.data;
          that.visitNum = visitNum;
          that.payUserCount = payUserCount;
          that.orderCount = orderCount;
          that.totalAmout = totalAmout;
        }
      });
    },
    getDataLinehart() {
      let that = this;
      console.log(that.tabVal);
      that
        .$postRequest(dataLinehart, {
          queryType: that.tabVal,
          date: that.thisTime,
        })
        .then((res) => {
          if (res.data.code === 0) {
            let arrList = res.data.data;
            that.timeList = [];
            that.numList = [];
            arrList.forEach((item) => {
              that.timeList.push(item.time);
              that.numList.push(item.num);
            });
            that.getEcharts(that.timeList, that.numList);
          }
        });
    },
    getEcharts(timeList, numList) {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        color: "#3a3a3a",
        grid: {
          top: "20%",
          left: "12%",
          right: "5%",
          bottom: "10%",
          containLabel: false, //grid 区域是否包含坐标轴的刻度标签
        },
        tooltip: {
          trigger: "axis", // axis   item   none三个值
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: "category",
          data: timeList,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: numList,
            type: "line",
            smooth: true,
            symbolSize: 7,
            itemStyle: {
              normal: {
                color: "#efc883", //折线点的颜色
                lineStyle: {
                  color: "#efc883", //折线的颜色
                },
                label: { show: true }, //是否在折线点上显示数字
              },
            },
            // 折线样式配置
            lineStyle: {
              normal: {
                color: "#efc883", //折线颜色
                shadowColor: "rgba(0, 0, 0, .3)", //阴影颜色
                shadowBlur: 5, //阴影虚化
                shadowOffsetY: 5, //阴影向下位移
                shadowOffsetX: 5, //阴影向右位移
              },
            },
          },
        ],
      };
      option && myChart.setOption(option);
    },
  },
};
</script>

<style>
</style>