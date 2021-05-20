<template>
  <div class="product-details">
    <back></back>
    <img :src="img" class="details-img" />
    <div class="details-content">
      <p class="details-name">
        {{ title }}
      </p>
      <p class="monthly-sales">月售{{ salesMonth }}</p>
      <p class="price-stepper">
        <span class="price"
          >￥<span class="size">{{ price }}</span></span
        ><van-stepper
          v-model="value"
          theme="round"
          min="0"
          button-size="22"
          disable-input
          @plus="plusCart"
          @minus="minsuCart"
        />
      </p>
    </div>
    <div class="footer-but">
      <div class="total-price">
        <span class="gongji">共计：</span><span>￥</span
        ><span class="price">{{ totalAmount }}</span>
      </div>
      <div class="but">
        <span class="add-cart" @click="clickAddCart">加入购物车</span>
        <span class="settlement">去结算</span>
      </div>
    </div>
  </div>
</template>

<script>
import { goodsDetail, addCart } from "../../api/api";
import Qs from "qs";
const qy = Qs.parse(location.search.substring(1));
export default {
  name: "productdetails",
  data() {
    return {
      indexBgk: require("../../assets/img/indexBgk.png"),
      value: 0,
      title: "",
      img: "",
      price: 0,
      salesMonth: "",
      currentStock: "",
      totalAmount: 0,
      goodsId: 0,
      shopNo: "",
    };
  },
  mounted() {
    let that = this;
    that.shopNo = localStorage.getItem("shopNo");
    that.goodsId = that.$route.query.goodsId;
    that
      .$getRequest(goodsDetail, { shopNo: that.shopNo, goodsId: that.goodsId })
      .then((res) => {
        if (res.data.code === 0) {
          let { title, img, price, salesMonth, currentStock } = res.data.data;
          that.title = title;
          that.img = img;
          that.price = price;
          that.salesMonth = salesMonth;
          that.currentStock = currentStock;
        }
      });
  },
  methods: {
    plusCart() {
      this.totalAmount = this.price * this.value + this.price;
    },
    minsuCart() {
      this.totalAmount = this.price * this.value - this.price;
    },
    clickAddCart() {
      let that = this;
      if (that.value === 0) {
        that.$toast("请选择商品！");
        return false;
      }
      that
        .$postRequest(addCart, {
          goodsId: that.goodsId,
          shopNo: that.shopNo,
          num: that.value,
        })
        .then((res) => {
          if (res.data.code === 0) {
            that.goodsId = "";
            that.value = 0;
            that.totalAmount = 0;
            that.$toast.success("成功加入购物车");
          } else {
            that.$toast.fail("添加失败");
          }
        });
    },
  },
};
</script>

<style>
</style>