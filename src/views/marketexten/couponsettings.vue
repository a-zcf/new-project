<template>
  <div class="coupon-settings">
    <back></back>
    <div class="settings-content">
      <van-field
        v-model="coupon"
        placeholder="请输入优惠券名称"
        :border="false"
        clearable
      />
      <van-cell center title="券类型是否有门槛：" :border="false">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>
      <van-field
        v-model="denomination"
        type="number"
        placeholder="请输入优惠券面额"
        :border="false"
        label="券面额："
        clearable
      />
      <van-field
        v-model="condition"
        placeholder="设置使用条件"
        :border="false"
        label="使用条件："
        clearable
      />
      <van-field
        v-model="stock"
        type="digit"
        placeholder="输入优惠券数量"
        :border="false"
        label="券库存："
        clearable
      />
      <van-field
        v-model="limitedCollection"
        type="digit"
        placeholder="限领数量"
        :border="false"
        label="每人限领："
        clearable
      />
      <div class="date-cale">
        <van-cell title="开始时间：" :value="startDate" @click="show = true">
          <template #right-icon>
            <van-icon name="arrow" size="18" color="#8f8c8c" />
          </template>
        </van-cell>
      </div>
      <div class="date-cale">
        <van-cell title="结束时间：" :value="endDate" @click="show1 = true">
          <template #right-icon>
            <van-icon name="arrow" size="18" color="#8f8c8c" />
          </template>
        </van-cell>
      </div>
      <van-calendar v-model="show" @confirm="onConfirmStart" />
      <van-calendar v-model="show1" @confirm="onConfirmEnd" />
    </div>
    <acticity-but :text="text"></acticity-but>
  </div>
</template>

<script>
export default {
  name: "couponsettings",
  data() {
    return {
      coupon: "",
      checked: 0,
      denomination: "",
      condition: "",
      stock: "",
      limitedCollection: "",
      startDate: "",
      endDate: "",
      show: false,
      show1: false,
      text: "提交",
    };
  },
  mounted() {},
  methods: {
    formatDate(date) {
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirmStart(date) {
      this.show = false;
      this.startDate = this.formatDate(date);
    },
    onConfirmEnd(date) {
      this.show1 = false;
      this.endDate = this.formatDate(date);
    },
  },
};
</script>

<style>
</style>