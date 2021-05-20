<template>
  <div class="add-commodity">
    <back></back>
    <div class="add-content">
      <van-field
        type="text"
        :border="false"
        clearable
        v-model="supplierName"
        placeholder="请输入店铺名称"
        style=""
      />
      <div class="add-img">
        <span>上传商品图片</span>
        <img
          :src="headImg"
          class="img"
          v-if="headImg != ''"
          @click="addImage"
        />
        <div
          class="iconfont icon-shiliangzhinengduixiang58 shangchuan-but"
          v-if="headImg == ''"
          @click="addImage"
        ></div>
      </div>
      <van-field
        v-model="price"
        type="number"
        label="价格"
        clearable
        placeholder="给商品定个好价格"
      />
      <van-field
        v-model="stock"
        type="digit"
        label="库存"
        clearable
        placeholder="设置合理库存避免超卖"
      />
      <van-field
        v-model="commodityID"
        label="商品编号"
        clearable
        placeholder="请输入商品条形码"
      />
      <div class="leibie">
        <table>
          商品类别
        </table>
        <van-dropdown-menu active-color="#378cff" direction="up">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
      </div>
      <div class="shangjia-radio">
        <table>
          是否上架
        </table>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">上架</van-radio>
          <van-radio name="2">暂不上架</van-radio>
        </van-radio-group>
      </div>
    </div>
    <acticity-but :text="text" @click.native="addCommodity"></acticity-but>
  </div>
</template>

<script>
export default {
  name: "editcommodity",
  data() {
    return {
      supplierName: "",
      headImg: "", // 店铺头像
      price: "",
      stock: "",
      commodityID: "",
      value1: 0,
      option1: [
        { text: "全部商品小吃零食", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
        { text: "活动商品", value: 3 },
        { text: "活动商品", value: 4 },
        { text: "活动商品", value: 5 },
        { text: "活动商品", value: 6 },
        { text: "活动商品", value: 9 },
        { text: "活动商品", value: 11 },
      ],
      radio: 0,
      text: "提交",
    };
  },
  mounted() {},
  methods: {
    addImage() {},
    changeCategory() {},
  },
};
</script>

<style>
</style>