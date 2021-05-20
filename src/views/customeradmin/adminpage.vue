<template>
  <div class="adminpage">
    <back>
      <span slot="baocun" class="head-baocun" @click="clickBaocun">保存</span>
    </back>
    <div class="essential-info">
      <p class="title-info">
        <span class="l-h"></span>
        <span>基本信息</span>
      </p>
    </div>
    <van-field
      v-model="realname"
      label="姓名："
      placeholder="请输入姓名"
      clearable
    />
    <van-field
      v-model="phone"
      type="digit"
      label="电话："
      placeholder="请输入电话"
      clearable
    />
    <van-field
      v-model="address"
      label="地址："
      placeholder="请输入地址"
      clearable
      style="border-bottom: none"
    />
    <div class="essential-info">
      <p class="title-info">
        <span class="l-h"></span>
        <span>备注标签</span>
      </p>
    </div>
    <van-field
      v-model="remark"
      rows="1"
      autosize
      type="textarea"
      placeholder="备注"
      class="remarks"
    />
    <div class="essential-info">
      <p class="title-info">
        <span class="l-h"></span>
        <span>购买明细</span>
      </p>
    </div>
    <div class="detailed-list">
      <ul>
        <li v-for="(item, index) in detailList" :key="index">
          <span class="name">{{ item.brandName }}</span>
          <span class="pack-numder">{{ item.countNum }}包</span>
          <span class="detailed" @click="purchaseDetails(item.brandId)"
            >明细</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { customerMng, updateCustomer } from "../../api/api";
export default {
  name: "adminpage",
  data() {
    return {
      realname: "",
      phone: "",
      address: "",
      remark: "",
      userId: 0,
      detailList: [],
    };
  },
  mounted() {
    let that = this;
    that.userId = that.$route.query.userId;
    that.$postRequest(customerMng, { userId: that.userId }).then((res) => {
      if (res.data.code === 0) {
        that.detailList = res.data.data.detailList;
        let {
          realname,
          phone,
          address,
          remark,
          score,
        } = res.data.data.customerInfo;
        that.realname = realname;
        that.phone = phone;
        that.address = address;
        that.remark = remark;
        that.score = score;
      }
    });
  },
  methods: {
    clickBaocun() {
      let params = {
        realname: this.realname,
        phone: this.phone,
        address: this.address,
        remark: this.remark,
        userId: this.userId,
      };
      this.$postRequest(updateCustomer, params).then((res) => {
        if (this.realname == "" || this.realname == null) {
          this.$toast("请输入姓名");
          return false;
        }
        if (this.phone == "" || this.phone == null) {
          this.$toast("请输入电话");
          return false;
        }
        if (this.address == "" || this.address == null) {
          this.$toast("请输入地址");
          return false;
        }
        if (this.remark == "" || this.remark == null) {
          this.$toast("请输入备注");
          return false;
        }
        if (res.data.code === 0) {
          this.realname = "";
          this.phone = "";
          this.address = "";
          this.remark = "";
          this.$toast.success("保存成功");
          this.$router.go(-1);
        }
      });
    },
    purchaseDetails(brandId) {
      this.$router.push({
        path: "/purchasedetails",
        query: { brandId: brandId, userId: this.userId },
      });
    },
  },
};
</script>

<style>
</style>