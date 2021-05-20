import Vue from 'vue'
import Router from 'vue-router'
const Payment = () => import ('@/views/payment/payment')
const Paid = () => import ('@/views/paid/paid')
const Nonpayment = () => import ('@/views/nonpayment/nonpayment')
const Detailimg = () => import ('@/views/paymentstatus/detailimg')
const Err = () => import ('@/views/paymentstatus/err')
const Paymentsuccess = () => import ('@/views/paymentstatus/paymentsuccess')
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'payment', component: Payment, meta: {title: '未支付'}},
    {path: '/paid', name: 'paid', component: Paid, meta: {title: '已支付'}},
    {path: '/nonpayment', name: 'nonpayment', component: Nonpayment, meta: {title: '已支付'}},
    {path: '/detailimg', name: 'detailimg', component: Detailimg, meta: {title: '未绑定零售户'}},
    {path: '/err', name: 'err', component: Err, meta: {title: '错误'}},
    {path: '/paymentsuccess', name: 'paymentsuccess', component: Paymentsuccess, meta: {title: '支付成功'}},
  ]
})
