<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <van-tabbar route v-if="$route.meta.tabbarShow">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/shoppingcart"
        icon="shopping-cart-o"
        :badge="totalCount"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item replace to="/my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //监听路由变化状态前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
      }
      this.$router.isBack = false;
    },
  },
  computed: {
    totalCount() {
      let totalCount = 0;
      this.$store.state.cartListData.forEach((item) => {
        totalCount += item.num;
      });
      return totalCount;
    },
  },
};
</script>

<style lang="less">
@import "./styles/index.less";
.slide-left-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.3s;
  position: absolute;
  top: 0;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-weight: 400;
  font-size: 14px;
  font-family: Helvetica, sans-serif;
  position: relative;
  html::-webkit-scrollbar {
    width: 0px;
  }
  a {
    text-decoration: none;
  }
  .child-view {
    will-change: transform;
    transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
    width: 100%;
    height: 100%;
    // padding-bottom: 100px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
    box-sizing: border-box;
  }
  .van-tabbar--fixed {
    border: 1px solid @eeColor;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    position: relative;
  }
  //异型屏要再多加一点头部
  @media screen and (max-aspect-ratio: 18/9) {
    #app {
    }
  }
  //iphone 6/6S/7/8 4.7英寸
  @media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    #app {
    }
  }
  //iphone 6+/6S+/7+/8+ 5.5英寸
  @media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
    #app {
    }
  }

  //iphone X
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    #app {
    }
  }

  //iphone XS MAX
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
    #app {
    }
  }

  //iphone XR
  @media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    #app {
    }
  }
}
</style>
