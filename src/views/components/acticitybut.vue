<template>
  <div class="footer-but">
    <button class="but">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Acticitybut",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="less">
.footer-but {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  .but {
    width: 80%;
    height: 40px;
    border-radius: 50px;
    margin: 10px 0% 0% 10%;
    background-image: linear-gradient(to bottom, #81b6ff, #378cff);
    color: #fff;
    border: none;
  }
}
</style>