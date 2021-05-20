<template>
  <div class="accountadmin">
    <back>
      <span slot="baocun" class="baocun" @click="preservationInfo">保存</span>
    </back>
    <div class="edit-content">
      <van-field
        type="text"
        class="vav-edit"
        :border="true"
        clearable
        v-model="supplierName"
        label="店铺名称"
        placeholder="请输入店铺名称"
      />
      <van-field
        type="text"
        class="vav-edit"
        :border="true"
        clearable
        v-model="contact"
        label="联系人"
        placeholder="请输入联系人"
      />
      <van-field
        type="tel"
        class="vav-edit"
        :border="true"
        clearable
        v-model="phone"
        label="电话"
        placeholder="请输入电话"
      />
      <van-field
        type="text"
        class="vav-edit"
        :border="true"
        clearable
        v-model="address"
        label="店铺位置"
        placeholder="请输入店铺位置"
      />
      <van-field
        v-model="announcement"
        label="店铺公告"
        type="textarea"
        placeholder="请输入店铺公告"
        class="textarea"
      />
      <p class="hdgg-text">活动公告：</p>
      <van-field
        type="text"
        :border="true"
        clearable
        v-model="name"
        label="输入名称"
        placeholder="请输活动入名称"
        class="vav-edit"
      />
      <van-field
        type="text"
        :border="true"
        clearable
        v-model="url"
        label="跳转链接"
        placeholder="请输入跳转链接"
        class="vav-edit"
      />
      <div class="add-img">
        <span>添加活动图片：</span>
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
      <div class="add-img" style="margin-bottom: 10px">
        <span>添加二维码：</span>
        <img
          :src="shopCodeImg"
          class="img"
          v-if="shopCodeImg != ''"
          @click="addCodeImage"
        />
        <div
          class="iconfont icon-shiliangzhinengduixiang58 shangchuan-but"
          v-if="shopCodeImg == ''"
          @click="addCodeImage"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  supplierInfo,
  supplierUpdate,
  fileUpload,
  getJssdkConfig,
} from "../../api/api";
import wx from "weixin-js-sdk"; // 微信jssdk
export default {
  name: "accountadmin",
  data() {
    return {
      supplierName: "", //店铺名称
      address: "", // 地址
      phone: "", // 联系手机
      contact: "", // 联系人
      announcement: "", // 公告内容
      url: "", // 活动链接
      name: "", // 活动名称
      headImg: "", // 活动头图
      shopCodeImg: "",
    };
  },
  mounted() {
    let that = this;
    that.$postRequest(supplierInfo).then((res) => {
      if (res.data.code === 0) {
        let {
          supplierName,
          address,
          phone,
          contact,
          announcement,
        } = res.data.data.supplierInfo;
        that.supplierName = supplierName;
        that.address = address;
        that.phone = phone;
        that.contact = contact;
        that.announcement = announcement;

        let { url, name, headImg } = res.data.data.supplierInfo.activity;
        that.url = url;
        that.name = name;
        that.headImg = headImg;

        that.shopCodeImg = res.data.data.supplierInfo.shopCodeImg;
      }
    });
    let url = location.href.split("#")[0];
    that
      .$postRequest(getJssdkConfig, { url: url })
      .then((res) => {
        if (res.data.code === 0) {
          let { appId, nonceStr, signature, timestamp } = res.data.data.config;
          wx.config({
            debug: false,
            appId: appId, // 必填，业微信的appID
            timestamp: timestamp, //生成签名的时间戳
            nonceStr: nonceStr, //必填，生成签名的随机串
            signature: signature, // 必填，签名
            jsApiList: [
              "chooseImage", // 选择图片
              "uploadImage", // 上传至微信服务器，会保存3天
              "downloadImage", // 下载图片
            ],
          });
          wx.error(function (res) {});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    preservationInfo() {
      let that = this;
      let panms = {
        supplierName: that.supplierName,
        address: that.address,
        phone: that.phone,
        contact: that.contact,
        announcement: that.announcement,
        activity: {
          url: that.url,
          name: that.name,
          headImg: that.headImg,
        },
        shopCodeImg: that.shopCodeImg,
      };
      that
        .$postRequest(supplierUpdate, panms)
        .then((res) => {
          if (res.data.code === 0) {
            that.$toast.success("保存成功");
            that.$router.push({ path: "/" });
          } else {
            that.$toast.fail("保存失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addImage() {
      let headImgAnCodeImg = true;
      this.addImg(headImgAnCodeImg);
    },
    addCodeImage() {
      let headImgAnCodeImg = false;
      this.addImg(headImgAnCodeImg);
    },
    addImg(headImgAnCodeImg) {
      let that = this;
      wx.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          let localIds = res.localIds;
          wx.uploadImage({
            localId: localIds.toString(),
            isShowProgressTips: 1,
            success: function (res) {
              var serverId = res.serverId;
              that
                .$postRequest(fileUpload, { mediaId: serverId })
                .then((res) => {
                  if (res.data.code === 0) {
                    if (headImgAnCodeImg === true) {
                      that.headImg = res.data.data.url;
                    } else {
                      that.shopCodeImg = res.data.data.url;
                    }
                  }
                });
            },
            fail: (err) => {
              alert("上传失败...");
            },
          });
        },
        fail: (err) => {
          alert("添加失败...");
        },
      });
    },
  },
};
</script>

<style>
</style>