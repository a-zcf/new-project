<template>
  <div class="commodityadmin">
    <back></back>
    <van-tabs v-model="active" color="#378cff">
      <van-tab title="上架中">
        <ul>
          <li>
            <div class="list-content">
              <img src="../../assets/img/customer.png" />
              <div class="cont">
                <p class="name">
                  卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮
                </p>
                <p class="price">￥9.90</p>
                <p class="kucun-xiaoliang">
                  <span class="kucun">库存：990</span>
                  <span>销量：199</span>
                </p>
              </div>
            </div>
            <p class="bottom-con">
              <span class="iconfont icon-bianji" @click="edicCommodity"></span>
              <span class="shanchu">下架</span>
            </p>
          </li>
          <li>
            <div class="list-content">
              <img src="../../assets/img/customer.png" />
              <div class="cont">
                <p class="name">
                  卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮
                </p>
                <p class="price">￥9.90</p>
                <p class="kucun-xiaoliang">
                  <span class="kucun">库存：990</span>
                  <span>销量：199</span>
                </p>
              </div>
            </div>
            <p class="bottom-con">
              <span class="iconfont icon-bianji"></span>
              <span>下架</span>
            </p>
          </li>
          <li>
            <div class="list-content">
              <img src="../../assets/img/customer.png" />
              <div class="cont">
                <p class="name">
                  卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮
                </p>
                <p class="price">￥9.90</p>
                <p class="kucun-xiaoliang">
                  <span class="kucun">库存：990</span>
                  <span>销量：199</span>
                </p>
              </div>
            </div>
            <p class="bottom-con">
              <span class="iconfont icon-bianji"></span>
              <span>下架</span>
            </p>
          </li>
          <li>
            <div class="list-content">
              <img src="../../assets/img/customer.png" />
              <div class="cont">
                <p class="name">
                  卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮
                </p>
                <p class="price">￥9.90</p>
                <p class="kucun-xiaoliang">
                  <span class="kucun">库存：990</span>
                  <span>销量：199</span>
                </p>
              </div>
            </div>
            <p class="bottom-con">
              <span class="iconfont icon-bianji"></span>
              <span>下架</span>
            </p>
          </li>
          <li>
            <div class="list-content">
              <img src="../../assets/img/customer.png" />
              <div class="cont">
                <p class="name">
                  卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮
                </p>
                <p class="price">￥9.90</p>
                <p class="kucun-xiaoliang">
                  <span class="kucun">库存：990</span>
                  <span>销量：199</span>
                </p>
              </div>
            </div>
            <p class="bottom-con">
              <span class="iconfont icon-bianji"></span>
              <span>下架</span>
            </p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="已下架"
        ><ul>
          <li>
            <div class="list-content">
              <img src="../../assets/img/customer.png" />
              <div class="cont">
                <p class="name">
                  卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮卫龙辣条5包包邮
                </p>
                <p class="price">￥9.90</p>
                <p class="kucun-xiaoliang">
                  <span class="kucun">库存：990</span>
                  <span>销量：199</span>
                </p>
              </div>
            </div>
            <p class="bottom-con">
              <span class="iconfont icon-bianji"></span>
              <span class="iconfont icon-shanchu shanchu"></span>
            </p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
    <acticity-but :text="text" @click.native="addCommodity"></acticity-but>
  </div>
</template>

<script>
export default {
  name: "commodityadmin",
  data() {
    return {
      active: 0,
      text: "添加商品",
    };
  },
  mounted() {},
  methods: {
    addCommodity() {
      this.$router.push({ path: "/addcommodity" });
    },
    edicCommodity() {
      this.$router.push({ path: "/editcommodity" });
    },
  },
};
</script>

<style>
</style>