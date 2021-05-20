<template>
  <div class="my-order">
    <back></back>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      id="mescroll"
    >
      <van-tabs v-model="active">
        <van-tab title="全部" name="">
          <ul>
            <li v-for="(item, index) in orderLists" :key="index">
              <p class="order-title">
                <span class="title-time">{{ item.createdTime }}</span
                ><span class="daifuk-text">{{ item.statusText }}</span>
              </p>
              <div
                class="list-content"
                v-for="it in item.orderGoodsList"
                :key="it.goodsId"
              >
                <img :src="it.img" class="cont-img" />
                <div class="con-text">
                  <p class="cont-name">{{ it.title }}</p>
                  <p class="jiage-number">
                    <span class="order-jiage">￥{{ it.transactionPrice }}</span
                    ><span class="order-number">x{{ it.num }}</span>
                  </p>
                </div>
              </div>
              <p class="order-but">
                <span class="fukuan"
                  >需付款:<b>￥{{ item.transactionPriceTotal }}</b></span
                >
                <span
                  class="quexiao-but"
                  v-if="item.status === '0'"
                  @click="cancelOrder(item.orderSn)"
                  >取消订单</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '0'"
                  @click="clickPayment"
                  >付款</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '2'"
                  @click="clickConfirmReceipt(item.orderSn)"
                  >确认收货</span
                >
              </p>
            </li>
          </ul>
        </van-tab>
        <van-tab title="待付款" name="0">
          <ul>
            <li v-for="(item, index) in orderLists" :key="index">
              <p class="order-title">
                <span class="title-time">{{ item.createdTime }}</span
                ><span class="daifuk-text">{{ item.statusText }}</span>
              </p>
              <div
                class="list-content"
                v-for="it in item.orderGoodsList"
                :key="it.goodsId"
              >
                <img :src="it.img" class="cont-img" />
                <div class="con-text">
                  <p class="cont-name">{{ it.title }}</p>
                  <p class="jiage-number">
                    <span class="order-jiage">￥{{ it.transactionPrice }}</span
                    ><span class="order-number">x{{ it.num }}</span>
                  </p>
                </div>
              </div>
              <p class="order-but">
                <span class="fukuan"
                  >需付款:<b>￥{{ item.transactionPriceTotal }}</b></span
                >
                <span
                  class="quexiao-but"
                  v-if="item.status === '0'"
                  @click="cancelOrder(item.orderSn)"
                  >取消订单</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '0'"
                  @click="clickPayment"
                  >付款</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '2'"
                  @click="clickConfirmReceipt(item.orderSn)"
                  >确认收货</span
                >
              </p>
            </li>
          </ul>
        </van-tab>
        <van-tab title="代发货" name="1"
          ><ul>
            <li v-for="(item, index) in orderLists" :key="index">
              <p class="order-title">
                <span class="title-time">{{ item.createdTime }}</span
                ><span class="daifuk-text">{{ item.statusText }}</span>
              </p>
              <div
                class="list-content"
                v-for="it in item.orderGoodsList"
                :key="it.goodsId"
              >
                <img :src="it.img" class="cont-img" />
                <div class="con-text">
                  <p class="cont-name">{{ it.title }}</p>
                  <p class="jiage-number">
                    <span class="order-jiage">￥{{ it.transactionPrice }}</span
                    ><span class="order-number">x{{ it.num }}</span>
                  </p>
                </div>
              </div>
              <p class="order-but">
                <span class="fukuan"
                  >需付款:<b>￥{{ item.transactionPriceTotal }}</b></span
                >
                <span
                  class="quexiao-but"
                  v-if="item.status === '0'"
                  @click="cancelOrder(item.orderSn)"
                  >取消订单</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '0'"
                  @click="clickPayment"
                  >付款</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '2'"
                  @click="clickConfirmReceipt(item.orderSn)"
                  >确认收货</span
                >
              </p>
            </li>
          </ul></van-tab
        >
        <van-tab title="已发货" name="2"
          ><ul>
            <li v-for="(item, index) in orderLists" :key="index">
              <p class="order-title">
                <span class="title-time">{{ item.createdTime }}</span
                ><span class="daifuk-text">{{ item.statusText }}</span>
              </p>
              <div
                class="list-content"
                v-for="it in item.orderGoodsList"
                :key="it.goodsId"
              >
                <img :src="it.img" class="cont-img" />
                <div class="con-text">
                  <p class="cont-name">{{ it.title }}</p>
                  <p class="jiage-number">
                    <span class="order-jiage">￥{{ it.transactionPrice }}</span
                    ><span class="order-number">x{{ it.num }}</span>
                  </p>
                </div>
              </div>
              <p class="order-but">
                <span class="fukuan"
                  >需付款:<b>￥{{ item.transactionPriceTotal }}</b></span
                >
                <span
                  class="quexiao-but"
                  v-if="item.status === '0'"
                  @click="cancelOrder(item.orderSn)"
                  >取消订单</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '0'"
                  @click="clickPayment"
                  >付款</span
                >
                <span
                  class="fukuan-but"
                  v-if="item.status === '2'"
                  @click="clickConfirmReceipt(item.orderSn)"
                  >确认收货</span
                >
              </p>
            </li>
          </ul></van-tab
        >
      </van-tabs>
    </mescroll-vue>
  </div>
</template>

<script>
import { orderPage, cancelOrder, receiptOrder } from "../../api/api";
export default {
  name: "myorder",
  data() {
    return {
      active: "",
      shopNo: "",
      orderLists: [],
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
      this.$getRequest(orderPage + this.shopNo, {
        current: page.num,
        size: page.size,
        status: this.active,
      }).then((res) => {
        if (res.data.code === 0) {
          let arr = res.data.data.records;
          if (page.num === 1) this.orderLists = [];
          this.orderLists = this.orderLists.concat(arr);
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        } else {
          mescroll.endErr();
        }
      });
      // .catch((res) => {
      //   this.mescroll.endErr();
      // });
    },
    // 取消订单
    cancelOrder(orderSn) {
      this.$postRequest(cancelOrder + orderSn).then((res) => {
        if (res.data.code === 0) {
          console.log(res);
        }
      });
    },
    // 付款
    clickPayment() {},
    // 确认收货
    clickConfirmReceipt(orderSn) {
      this.$postRequest(receiptOrder + orderSn).then((res) => {
        if (res.data.code === 0) {
          console.log(res);
        }
      });
    },
  },
};
</script>

<style>
</style>