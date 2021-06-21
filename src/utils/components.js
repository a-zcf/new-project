import WholePackage from '../views/components/wholePackage.vue'
import BossInfor from '../views/components/bossInfor.vue'
import UserInfo from '../views/components/userInfo.vue'
import TabList from '../views/components/tablist.vue'
import Strip from '../views/components/strip.vue'
import Activitylist from '../views/components/activitylist.vue'
const component = {
    install: function(Vue) {
        // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
        Vue.component('whole-package', WholePackage) // 包
        Vue.component('boss-infor', BossInfor) // 店铺老板信息
        Vue.component('user-info', UserInfo) // 用户信息
        Vue.component('tab-list', TabList) // 商品列表
        Vue.component('strip', Strip) // 条烟
        Vue.component('activity-list', Activitylist) // 活动广告图
    }
}
export default component