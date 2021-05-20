<template>
  <div class="order-confirm">
    <back></back>
    <van-tabs>
      <van-tab title="上门配送">
        <div class="order-list">
          <div class="address" v-if="addressData != null" @click="adsList">
            <p class="xingming-dianhua">
              <span class="recipients">{{ recipients }}</span>
              <span class="phone">{{ phone }}</span>
            </p>
            <p class="address-text">
              <i class="iconfont icon-dizhi1 dizhi"></i>
              <span class="text">
                <span>{{ ads }}</span>
              </span>
              <i class="iconfont icon-gengduo gengduo"></i>
            </p>
            <p class="xu-xian"></p>
          </div>
          <p class="wudianzhi" @click="addAddress" v-else>
            <i class="iconfont icon-ic_join_dialing_norm addicon"></i
            >添加收货地址
          </p>

          <ul>
            <li v-for="(item, index) in goodsList" :key="index">
              <!-- <p class="title-name">真龙烟酒店</p> -->
              <div class="shangpin-content">
                <img :src="item.img" class="shangpin-img" />
                <div class="con">
                  <p class="con-p">
                    <span class="name">{{ item.title }}</span
                    ><span class="number">x{{ item.num }}</span>
                  </p>
                  <p class="jiage">
                    <span>￥</span
                    ><span class="jiage-numder">{{ item.price }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="到店自取"
        ><ul>
          <li v-for="(item, index) in goodsList" :key="index">
            <!-- <p class="title-name">真龙烟酒店</p> -->
            <div class="shangpin-content">
              <img :src="item.img" class="shangpin-img" />
              <div class="con">
                <p class="con-p">
                  <span class="name">{{ item.title }}</span
                  ><span class="number">x{{ item.num }}</span>
                </p>
                <p class="jiage">
                  <span>￥</span
                  ><span class="jiage-numder">{{ item.price }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul></van-tab
      >
    </van-tabs>
    <!-- <footer-but :text="text"></footer-but> -->
    <div class="footer">
      <div class="left">
        <span class="gongji">共计:</span>
        <span class="jiage"
          >￥<b>{{ totalPrice }}</b></span
        >
      </div>
      <div class="right">确认支付</div>
    </div>
  </div>
</template>

<script>
import { defaultAddress } from "../../api/api";
export default {
  name: "orderconfirm",
  data() {
    return {
      indexBgk: require("../../assets/img/indexBgk.png"),
      goodsList: [],
      addressData: {},
      recipients: "",
      phone: "",
      ads: "",
    };
  },
  mounted() {
    let that = this;
    that.goodsList = JSON.parse(that.$route.query.goodsList);
    that.$getRequest(defaultAddress).then((res) => {
      if (res.data.code === 0) {
        that.addressData = res.data.data;
        let {
          recipients,
          phone,
          province,
          city,
          county,
          detailAddress,
        } = res.data.data;
        that.recipients = recipients;
        that.phone = phone;
        that.ads = province + city + county + detailAddress;
      }
    });
  },
  methods: {
    addAddress() {
      this.$router.push({ path: "/addaddress" });
    },
    adsList() {
      this.$router.push({ path: "/addressadmin" });
    },
  },
  computed: {
    totalPrice() {
      let that = this;
      let totalPrice = 0;
      that.goodsList.forEach((item) => {
        totalPrice += item.price * item.num;
      });
      return totalPrice;
    },
  },
};
</script>

<style>
</style>