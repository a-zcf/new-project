<template>
  <div class="detailimg">
    <img :src="detailImg" />
  </div>
</template>

<script>
export default {
  name: "detailimg",
  data() {
    return {
      detailImg: "",
    };
  },
  mounted() {
    this.detailImg = this.$route.query.detailImg;
  },
  methods: {},
};
</script>

<style>
</style>