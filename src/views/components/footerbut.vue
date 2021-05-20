<template>
  <div class="footer">
    <div class="left">
      <span class="gongji">共计:</span>
      <span class="jiage"
        >￥<b>{{ totalPrice }}</b></span
      >
    </div>
    <div class="right" @click="clickSubmit">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: "footerbut",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clickSubmit() {
      this.$emit("clickSubmit");
    },
  },
};
</script>

<style>
</style>