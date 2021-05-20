<template>
  <div class="login">
    <img class="bgimg" src="../../assets/img/loginbgk.png" />
    <div class="top"></div>
    <div class="head">
      <div class="input margin-top">
        <label
          class="iconfont icon-jiandingjigouxinxihuoquanxukezhenghao"
        ></label>
        <van-field
          v-model="licence"
          placeholder="请输入您的有效许可证号"
          clearable
        />
      </div>
      <div class="input">
        <label class="iconfont icon-shouji"></label>
        <van-field v-model="phone" placeholder="请输入您的有效号码" clearable />
      </div>
      <button @click="clickBinding">确认</button>
    </div>
  </div>
</template>

<script>
import { supplierBind } from "../../api/api";
export default {
  name: "login",
  data() {
    return {
      licence: "",
      phone: "",
    };
  },
  mounted() {},
  methods: {
    clickBinding() {
      let that = this;
      if (
        that.licence === "" ||
        that.licence === null ||
        typeof that.licence === undefined
      ) {
        that.$toast("请输入您的有效许可证号");
        return false;
      }
      if (
        that.phone === "" ||
        that.phone === null ||
        typeof that.phone === undefined
      ) {
        that.$toast("请输入您的有效号码");
        return false;
      }
      let patrn = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!patrn.test(that.phone)) {
        that.$toast("请输入正确的号码");
        return false;
      }
      that
        .$postRequest(supplierBind, {
          licence: that.licence,
          phone: that.phone,
        })
        .then((res) => {
          if (res.data.code === 0) {
            that.$toast.success("绑定成功");
            that.licence = "";
            that.phone = "";
            window.location = res.data.data.authUrl;
          } else {
            that.licence = "";
            that.phone = "";
            that.$toast.fail(res.data.msg);
          }
        });
    },
  },
};
</script>

<style>
</style>