<template>
  <div class="address-admin">
    <back></back>
    <div class="">
      <ul>
        <li v-for="item in adsListData" :key="item.addressId">
          <p class="name-phone">
            <span class="name">{{ item.recipients }}</span>
            <span class="phone">{{ item.phone }}</span>
          </p>
          <p class="address-text">
            {{
              item.province +
              " " +
              item.city +
              " " +
              item.county +
              " " +
              item.detailAddress
            }}
          </p>
          <p class="xu-xian"></p>
          <div class="guanli-dizhi">
            <div class="radio">
              <span
                :class="
                  item.defaultFlag == 1
                    ? 'iconfont icon-chenggong color'
                    : 'border'
                "
                @click="changeDefaultFlag(item.addressId, item.defaultFlag)"
              ></span>
              <span>设置为默认地址</span>
            </div>
            <span @click="clickEditAddress(item)"
              ><i class="iconfont icon-bianji edit"></i>编辑</span
            >
            <span @click="clickDeleteAddress(item.addressId)"
              ><i class="iconfont icon-delete delete"></i>删除</span
            >
          </div>
        </li>
      </ul>
    </div>
    <acticity-but :text="text" @click.native="addAddress">
      <i
        slot="icon"
        class="iconfont icon-ic_join_dialing_norm"
        style="font-size: 20px"
      ></i
    ></acticity-but>
  </div>
</template>

<script>
import { addressList, defaultAddress, deleteAddress } from "../../api/api";
export default {
  name: "addressadmin",
  data() {
    return {
      radio: 1,
      text: "新增收货地址",
      adsListData: [],
    };
  },
  mounted() {
    this.getAddressList();
  },
  methods: {
    addAddress() {
      this.$router.push({ path: "/addaddress" });
    },
    getAddressList() {
      let that = this;
      that.$getRequest(addressList).then((res) => {
        if (res.data.code === 0) {
          that.adsListData = res.data.data;
        }
      });
    },
    changeDefaultFlag(addressId, defaultFlag) {
      if (defaultFlag == 1) {
        return false;
      } else {
        this.$postRequest(defaultAddress + "/" + addressId).then((res) => {
          if (res.data.code === 0) {
            this.getAddressList();
          }
        });
      }
    },
    clickDeleteAddress(addressId) {
      this.$postRequest(deleteAddress + addressId).then((res) => {
        if (res.data.code === 0) {
          this.$toast.success("删除成功！");
          this.getAddressList();
        } else {
          this.$toast.fail("删除失败！");
        }
      });
    },
    clickEditAddress(item) {
      this.$router.push({
        path: "/editaddress",
        query: item,
      });
    },
  },
};
</script>

<style>
</style>