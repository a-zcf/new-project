<template>
  <div class="shopping-cart">
    <div class="slide">
      <ul>
        <li v-for="(item, index) in cartListData" :key="index">
          <img :src="item.img" class="shangpin-img" />
          <div class="right-content">
            <p class="">
              <span class="name">{{ item.title }}</span>
              <i
                class="iconfont icon-delete delete"
                @click="clickDelete(item.cartId)"
              ></i>
            </p>
            <p class="jiage-addshangpin">
              <span class="jiage"
                >￥<b>{{ item.price }}</b></span
              >
              <!-- <input :value="item.num" @input="changeCart($event, index)" /> -->
              <van-stepper
                v-model="item.num"
                theme="round"
                button-size="22"
                disable-input
                @plus="plusAddCart(item.goodsId)"
                @minus="minusCart(item.goodsId)"
              />
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- <footer-but
      :text="text"
      :totalPrice="totalPrice"
      @clickSubmit="clickJieSuan"
    ></footer-but> -->
    <div class="footer">
      <div class="left">
        <span class="gongji">共计:</span>
        <span class="jiage"
          >￥<b>{{ totalPrice }}</b></span
        >
      </div>
      <div class="right" @click="clickJieSuan">结算</div>
    </div>
  </div>
</template>

<script>
import {
  cartList,
  addCart,
  reduceCart,
  cartDelete,
  createOrder,
} from "../../api/api";
export default {
  name: "shoppingcart",
  data() {
    return {
      indexBgk: require("../../assets/img/indexBgk.png"),
      value: 0,
      shopNo: "",
      cartListData: [],
      shopNo: "",
    };
  },
  mounted() {
    let that = this;
    that.shopNo = localStorage.getItem("shopNo");
    that.shopNo = localStorage.getItem("shopNo");
    that.getcartList();
  },
  methods: {
    getcartList() {
      let that = this;
      that.$getRequest(cartList + that.shopNo).then((res) => {
        if (res.data.code === 0) {
          that.cartListData = res.data.data;
          that.$store.commit("cartList", res.data.data);
        }
      });
    },
    clickJieSuan() {
      // let goodsList = [];
      // this.cartListData.forEach((item) => {
      //   delete item.cartId;
      //   delete item.img;
      //   delete item.price;
      //   delete item.title;
      //   goodsList.push(item);
      // });
      if (this.cartListData.length !== 0) {
        this.$router.push({
          path: "/orderconfirm",
          query: { goodsList: JSON.stringify(this.cartListData) },
        });
      } else {
        this.$toast("您还没选择商品哦！");
      }

      // this.$postRequest(createOrder,{}).then((res) => {
      //   if (res.data.code === 0) {
      //     this.$toast.success("提交成功！");
      //   }
      // });
    },
    plusAddCart(goodsId) {
      this.$postRequest(addCart, {
        goodsId: goodsId,
        num: 1,
        shopNo: this.shopNo,
      }).then((res) => {
        if (res.data.code === 0) {
        }
      });
    },
    minusCart(goodsId) {
      this.$postRequest(reduceCart, {
        goodsId: goodsId,
        num: 1,
        shopNo: this.shopNo,
      }).then((res) => {
        if (res.data.code === 0) {
        }
      });
    },
    clickDelete(cartId) {
      this.$postRequest(cartDelete + cartId).then((res) => {
        if (res.data.code === 0) {
          this.getcartList();
        } else {
          this.$toast.fail("删除失败！");
        }
      });
    },
  },
  computed: {
    totalPrice() {
      let that = this;
      let totalPrice = 0;
      that.cartListData.forEach((item) => {
        totalPrice += item.price * item.num;
      });
      return totalPrice;
    },
  },
};
</script>

<style>
</style>