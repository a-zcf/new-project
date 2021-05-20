import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/store'
import router from './router/index'
import component from './utils/components'
import MescrollVue from 'mescroll.js/mescroll'
import Qs from 'qs'
import './utils/rem'
import './assets/icon/iconfont.css'
import { getRequest, postRequest } from './utils/request'
Vue.use(Vuex)
Vue.component('mescroll-vue', MescrollVue)
import { 
  Field,
  Tab, 
  Tabs,
  DropdownMenu, 
  DropdownItem,
  RadioGroup, 
  Radio,
  Switch,
  Cell,
  Calendar,
  Icon
} from 'vant';
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Switch);
Vue.use(Cell);
Vue.use(Calendar);
Vue.use(Icon);

Vue.use(component);
Vue.config.productionTip = false
Vue.prototype.$getRequest = getRequest // get请求
Vue.prototype.$postRequest = postRequest // post请求
Vue.prototype.$qs = Qs

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
