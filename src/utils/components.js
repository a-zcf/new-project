import back from '../views/components/back.vue'
import acticitybut from '../views/components/acticitybut.vue'
import footerbut from '../views/components/footerbut.vue'
const assembly = {
    install: function(Vue) {
        // 注册并获取组件，然后在main.js中引用，在Vue.use()就可以了
        Vue.component('acticity-but', acticitybut) // 提交按钮
        Vue.component('back', back) // 返回
        Vue.component('footer-but', footerbut) // 页脚
    }
}
export default assembly