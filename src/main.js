import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/store'
import router from './router/index'
import assembly from './utils/components'
import MescrollVue from 'mescroll.js/mescroll'
import preventReClick from './utils/duplicateSubmission'
import './utils/rem'
import './assets/icon/iconfont.css'
import { getRequest, postRequest } from './utils/request'
Vue.use(Vuex)
Vue.component('mescroll-vue', MescrollVue)
import { 
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Stepper,
  Popup,
  RadioGroup,
  Radio,
  Field,
  Area,
  Toast
} from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Stepper);
Vue.use(Popup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Field);
Vue.use(Area);
Vue.use(Toast);

Vue.use(preventReClick)
Vue.use(assembly);
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
  router,
  store,
  render: h => h(App)
}).$mount('#app')
