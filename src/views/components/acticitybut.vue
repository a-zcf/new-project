<template>
  <div class="footer-but01">
    <div class="but">
      <p>
        <slot name="icon"></slot>
        <span>{{ text }}</span>
      </p>
    </div>
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
.footer-but01 {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  .but {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    width: 80%;
    height: 40px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    background-color: #3d8fff;
  }
}
</style>