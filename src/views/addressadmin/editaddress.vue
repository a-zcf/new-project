<template>
  <div class="add-address">
    <back></back>
    <van-field v-model="name" label="收货人" placeholder="请输入收货人姓名" />
    <van-field
      v-model="phone"
      type="tel"
      label="手机号"
      placeholder="请输入收货人电话"
    />
    <van-field
      readonly
      clickable
      label="选择区域"
      :value="valueArea"
      placeholder="请选择所在地区"
      @click="showPopup"
      right-icon="arrow"
    />
    <van-field
      v-model="adrress"
      type="text"
      label="详细地址"
      clearable
      placeholder="街道门牌、楼层房间号等信息"
    />
    <van-popup v-model="show" position="bottom" close-on-click-overlay>
      <van-area
        :area-list="areaList"
        :columns-num="colNum"
        @cancel="cancelFn"
        @confirm="confirmFn"
        title="请选择区域"
        value="450000"
      />
    </van-popup>
    <acticity-but :text="text" v-click.native="clickEditAddres"></acticity-but>
  </div>
</template>

<script>
import { updateAddress } from "../../api/api";
import AeraInfo from "../../utils/area";
export default {
  name: "editaddress",
  data() {
    return {
      name: "",
      phone: "",
      valueArea: "",
      colNum: 3, // 显示列数，3-省市区，2-省市，1-省
      show: false,
      areaList: AeraInfo,
      adrress: "",
      text: "保存地址",
      countyCode: "",
      addressId: 0,
    };
  },
  mounted() {
    let that = this;
    let {
      addressId,
      recipients,
      phone,
      province,
      city,
      county,
      detailAddress,
      countyId,
    } = that.$route.query;
    that.addressId = addressId;
    that.name = recipients;
    that.phone = phone;
    that.valueArea = province + "-" + city + "-" + county;
    that.adrress = detailAddress;
    that.countyCode = countyId;
  },
  methods: {
    // 显示地区
    showPopup() {
      this.show = true;
    },
    // 隐藏选择地区取消按钮
    cancelFn() {
      this.show = false;
    },
    // 选择地区确定按钮
    confirmFn(event) {
      this.show = false;
      this.arrArea = event;
      this.province = event[0].name;
      this.city = event[1].name;
      this.county = event[2].name;
      this.countyCode = event[2].code;
      let addrInfo = event[0].name + "-" + event[1].name + "-" + event[2].name;
      this.valueArea = addrInfo;
    },
    clickEditAddres() {
      let that = this;
      console.log(that.countyCode);
      if (that.name === "") {
        that.$toast("请填写收货人姓名！");
        return false;
      }
      if (that.phone === "") {
        that.$toast("请填写收货人号码！");
        return false;
      }
      if (that.valueArea === "") {
        that.$toast("请选择收货地址！");
        return false;
      }
      if (that.adrress === "") {
        that.$toast("请填写详细收货地址！");
        return false;
      }
      let params = {
        addressId: that.addressId,
        countyId: that.countyCode,
        detailAddress: that.adrress,
        phone: that.phone,
        recipients: that.name,
      };
      that.$postRequest(updateAddress, params).then((res) => {
        if (res.data.code === 0) {
          that.name = "";
          that.phone = "";
          that.adrress = "";
          that.countyCode = "";
          that.valueArea = "";
          that.$toast.success("成功修改收货地址");
          that.$router.push({ path: "/addressadmin" });
        }
      });
    },
  },
};
</script>

<style>
</style>