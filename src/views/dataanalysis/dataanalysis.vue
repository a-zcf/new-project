<template >
  <div class="dataanalysis">
    <back></back>
    <div class="top-content">
      <span class="jinri">今日实时<i class="iconfont icon-guize"></i></span>
      <span class="end-time">截止2021-04-29 14:00:00</span>
      <span class="refresh">刷新</span>
    </div>
    <ul>
      <li @click="clickTab(0)">
        <p><span>本店访客</span><i class="iconfont icon-guize"></i></p>
        <p class="size">0000</p>
      </li>
      <li @click="clickTab(1)">
        <p><span>支付人数</span><i class="iconfont icon-guize"></i></p>
        <p class="size">00000</p>
      </li>
      <li @click="clickTab(2)">
        <p><span>支付订单</span><i class="iconfont icon-guize"></i></p>
        <p class="size">0</p>
      </li>
      <li>
        <p><span>支付金额</span><i class="iconfont icon-guize"></i></p>
        <p class="size">0</p>
      </li>
      <div
        class="active"
        :style="
          tabVal === 0
            ? transf01
            : '' || tabVal === 1
            ? transf02
            : '' || tabVal === 2
            ? transf03
            : ''
        "
      ></div>
    </ul>
    <div id="main" class="ech"></div>
  </div>
</template>

<script>
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
      tabVal: 0,
      active: 0,
    };
  },
  mounted() {
    this.getEcharts();
  },
  methods: {
    clickTab(val) {
      this.tabVal = val;
    },
    getEcharts() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        color: "#3a3a3a",
        grid: {
          top: "20%",
          left: "12%",
          right: "2%",
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
          data: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [0, 1, 2, 3, 133],
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