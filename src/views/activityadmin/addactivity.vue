<template>
  <div class="add-activity">
    <back></back>
    <div class="add-contert">
      <div class="act-name">
        <table>
          活动名称：
        </table>
        <van-field
          v-model="activityName"
          placeholder="请输入活动名称"
          clearable
        />
      </div>
      <div class="act-type">
        <table>
          活动类型：
        </table>
        <van-radio-group v-model="radio" direction="horizontal">
          <van-radio name="1">送积分</van-radio>
          <van-radio name="2">送优惠券</van-radio>
        </van-radio-group>
      </div>
      <van-field
        v-model="integral"
        type="digit"
        label="积分数量："
        placeholder="请输入赠送积分数量"
        class="integral"
        clearable
        v-if="radio == 1"
      />
      <div class="cell" v-if="radio == 2">
        <van-cell
          title="赠送卡券："
          is-link
          :value="cardName"
          @click="clickCoupon"
        >
        </van-cell>
      </div>

      <div class="cell">
        <van-cell
          title="赠送对象："
          is-link
          value="选择人员"
          @click="clickGive"
        >
        </van-cell>
      </div>
    </div>
    <div class="give-object">
      <ul>
        <li v-for="(item, index) in result" :key="index">
          <span class="name">{{ item.nickname }}</span>
          <span
            class="iconfont icon-guanbi1 guanbi"
            @click="clickDelete(index)"
          ></span>
        </li>
      </ul>
    </div>
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      class="popup-list"
    >
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <input
            type="checkbox"
            :value="item"
            v-model="result"
            id="listInput"
          />
          <span>{{ item.nickname }}</span>
        </li>
      </ul>
    </van-popup>

    <van-popup
      v-model="show1"
      closeable
      close-icon="close"
      position="bottom"
      class="popup-list"
    >
      <label v-for="item in dataList" :key="item.id" class="label"
        ><input
          type="radio"
          :value="item.cardId"
          @change="getRadioVal(item.cardName)"
          v-model="radioVal"
        />{{ item.cardName }}</label
      >
    </van-popup>
    <acticity-but
      :text="text"
      v-click.native="clickAddShopActivity"
    ></acticity-but>
  </div>
</template>

<script>
import { customerList, shopCardList, addShopActivity } from "../../api/api";
export default {
  name: "addactivity",
  data() {
    return {
      text: "提交",
      activityName: "",
      radio: "1",
      // couponRadio: 0,
      integral: "",
      show: false,
      show1: false,
      result: [],
      list: [],
      dataList: [],
      // coupon: 0,
      radioVal: "",
      cardName: "",
    };
  },
  mounted() {
    let that = this;
    let url = location.href.split("#")[0];
    that.$getRequest(shopCardList, { url: url }).then((res) => {
      if (res.data.code === 0) {
        that.dataList = res.data.data;
      }
    });
    that
      .$postRequest(customerList, { pageNo: 1, pageSize: 100 })
      .then((res) => {
        if (res.data.code === 0) {
          that.list = res.data.data.list;
        }
      });
  },
  methods: {
    clickGive() {
      this.show = true;
    },
    clickCoupon() {
      this.show1 = true;
    },
    clickDelete(index) {
      this.result.splice(index, 1);
    },
    getRadioVal(cardName) {
      this.cardName = cardName;
      if (cardName != "" || cardName != null) {
        this.show1 = false;
      }
    },
    clickAddShopActivity() {
      let that = this;
      if (that.activityName == "" || that.activityName == null) {
        that.$toast("标题不能为空！");
        return false;
      }
      if (
        (that.radio == 1 && that.integral == "") ||
        (that.radio == 1 && that.integral == null)
      ) {
        that.$toast("积分数量不能为空！");
        return false;
      }
      if (
        (that.radio == 2 && that.radioVal == "") ||
        (that.radio == 2 && that.radioVal == null)
      ) {
        that.$toast("请选择赠送卡券！");
        return false;
      }
      if (that.result.length == 0) {
        that.$toast("请选择赠送对象");
        return false;
      }
      let params = {
        title: that.activityName,
        cardId: that.radioVal,
        userList: that.result,
        activityType: that.radio, //活动类型（1赠送积分 2赠送卡券）
        giveScore: that.integral, //积分值（activityType=='1'时需要）
      };
      that.$postRequest(addShopActivity, params).then((res) => {
        if (res.data.code === 0) {
          that.activityName = "";
          that.result = [];
          that.integral = "";
          that.$toast.success("添加成功");
          that.$router.go(-1); //返回上一层
        } else {
          that.$toast.fail(res.data.msg);
        }
      });
    },
  },
};
</script>

<style>
</style>