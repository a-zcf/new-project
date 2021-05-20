<template>
  <div class="transition"></div>
</template>

<script>
import { isBind } from "../../api/api";
export default {
  name: "transition",
  data() {
    return {};
  },
  mounted() {
    let that = this;
    that.$postRequest(isBind).then((res) => {
      if (res.data.code === 0) {
        let getIsBind = res.data.data.isBind;
        if (getIsBind === true) {
          that.$router.push({
            path: "/index",
          });
        } else {
          that.$router.push({
            path: "/login",
          });
        }
      }
    });
  },
  methods: {},
};
</script>

<style>
</style>