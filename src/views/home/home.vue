<template>
  <div class="home">
    <!-- <div class="sell"> -->
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
      id="mescroll"
    >
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1989fa">
        <van-swipe-item>
          <img :src="indexBgk" class="home-headImg" />
        </van-swipe-item>
      </van-swipe>
      <div class="shop-infor">
        <img :src="infocard" class="infocard-bgk" />
        <img :src="shopIcon" class="shop-headimg" />
        <div class="shopinfor-content">
          <p class="shop-name">
            {{ shopName }}
          </p>
          <p class="phone">
            <i class="iconfont icon-dianhua1"></i
            ><span>{{ contactPhone }}</span>
          </p>
          <p class="address">
            <i class="iconfont icon-dizhi1"></i><span>{{ address }}</span>
          </p>
        </div>
        <div class="shop-coupon">
          <img :src="coupon" class="couponimg" />
          <p class="money-p">
            <span class="symbol">￥</span><span class="money">5</span>
          </p>
          <p class="coupon-text">满100元使用</p>
          <p class="lingqu-but">立即领取</p>
        </div>
      </div>
      <van-tabs v-model="active" class="tabs" @change="changeGoodsList">
        <van-tab
          v-for="(item, index) in classList"
          :key="index"
          :title="item.classifyName"
          :name="item.classifyId"
        >
          <ul>
            <li v-for="it in goodLists" :key="it.goodsId">
              <img
                :src="it.img"
                class="commodity-img"
                @click="clickCommodity(it.goodsId)"
              />
              <p class="commodity-name">
                {{ it.title }}
              </p>
              <p class="price-addicon">
                <span class="price">￥{{ it.price }}</span
                ><span
                  class="iconfont icon-add-fill-hover addicon"
                  @click="clickAddCart(it.goodsId)"
                ></span>
              </p>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </mescroll-vue>
    <!-- </div> -->
  </div>
</template>

<script>
import { shopInfo, classifyList, goodsList, addCart } from "../../api/api";
import Qs from "qs";
const query = Qs.parse(location.search.substring(1));
export default {
  name: "home",
  data() {
    return {
      indexBgk: require("../../assets/img/indexBgk.png"),
      infocard: require("../../assets/img/infocard.png"),
      coupon: require("../../assets/img/coupon.png"),
      active: 1,
      shopName: "",
      contactName: "",
      contactPhone: "",
      shopIcon: "",
      address: "",
      shopNo: "",
      classList: [],
      goodLists: [],
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
    localStorage.setItem("shopNo", query.shopNo);
    that.shopNo = localStorage.getItem("shopNo");
    that.$getRequest(shopInfo + that.shopNo).then((res) => {
      if (res.data.code === 0) {
        let {
          shopName,
          contactName,
          contactPhone,
          shopIcon,
          address,
        } = res.data.data;
        that.shopName = shopName;
        that.contactName = contactName;
        that.contactPhone = contactPhone;
        that.shopIcon = shopIcon;
        that.address = address;
      }
    });
    that.$getRequest(classifyList).then((res) => {
      if (res.data.code === 0) {
        that.classList = res.data.data;
      }
    });
  },
  methods: {
    clickCommodity(goodsId) {
      this.$router.push({
        path: "/productdetails",
        query: { goodsId: goodsId },
      });
    },
    changeGoodsList(name) {
      this.active = name;
      this.mescroll.resetUpScroll();
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    upCallback(page, mescroll) {
      this.$getRequest(goodsList + this.shopNo + "/" + this.active, {
        current: page.num,
        size: page.size,
      }).then((res) => {
        if (res.data.code === 0) {
          let arr = res.data.data.records;
          if (page.num === 1) this.goodLists = [];
          this.goodLists = this.goodLists.concat(arr);
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length);
          });
        } else {
          mescroll.endErr();
        }
      });
    },
    clickAddCart(goodsId) {
      this.$postRequest(addCart, {
        goodsId: goodsId,
        num: 1,
        shopNo: this.shopNo,
      }).then((res) => {
        if (res.data.code === 0) {
        }
      });
    },
  },
};
</script>

<style>
</style>