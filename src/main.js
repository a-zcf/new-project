import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/store'
import './assets/icon/iconfont.css'
import MescrollVue from 'mescroll.js/mescroll'
import component from './utils/components'
import { getRequest, postRequest } from './utils/request'
Vue.use(Vuex)
Vue.component('mescroll-vue', MescrollVue)

import {
  NoticeBar,
  Toast,
  Tab, 
  Tabs
} from 'vant';
Vue.use(NoticeBar);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(component);

Vue.config.productionTip = false
Vue.prototype.$getRequest = getRequest // get请求
Vue.prototype.$postRequest = postRequest // post请求

router.beforeEach((to, from, next) => {
  // 路由发生改变修改页面的title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
