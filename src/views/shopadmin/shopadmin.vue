<template>
  <div class="shopadmin">
    <back>
      <span slot="baocun"> 编辑 </span>
    </back>
    <van-field
      type="text"
      :border="false"
      clearable
      v-model="supplierName"
      label="店铺名称"
      placeholder="请输入店铺名称"
    />
    <van-field
      type="text"
      :border="false"
      clearable
      v-model="contact"
      label="联系人"
      placeholder="请输入联系人"
    />
    <van-field
      type="tel"
      :border="false"
      clearable
      v-model="phone"
      label="电话"
      placeholder="请输入电话"
    />
    <van-field
      type="text"
      :border="false"
      clearable
      v-model="address"
      label="店铺位置"
      placeholder="请输入店铺位置"
    />
    <div class="add-img">
      <span>店铺头像：</span>
      <img :src="headImg" class="img" v-if="headImg != ''" @click="addImage" />
      <div
        class="iconfont icon-shiliangzhinengduixiang58 shangchuan-but"
        v-if="headImg == ''"
        @click="addImage"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopadmin",
  data() {
    return {
      supplierName: "",
      contact: "",
      phone: "",
      address: "",
      headImg: "", // 店铺头像
    };
  },
  mounted() {},
  methods: {
    addImage() {},
  },
};
</script>

<style>
</style>