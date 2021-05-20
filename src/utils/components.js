import back from '../views/components/back.vue'
import acticitybut from '../views/components/acticitybut.vue'
const component = {
    install: function(Vue) {
        // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
        Vue.component('acticity-but', acticitybut) // 包
        Vue.component('back', back) // 返回
    }
}
export default component