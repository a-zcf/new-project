import Vue from 'vue'
import Router from 'vue-router'
const Transition = () => import ('@/views/transition/transition')
const Index = () => import ('@/views/index/index')
const Login = () => import ('@/views/login/login')
const DataAnalysis = () => import ('@/views/dataanalysis/dataanalysis')
const OrderaAmin = () => import ('@/views/orderadmin/orderadmin')
const ActivityAdmin = () => import ('@/views/activityadmin/activityadmin')
const AddActivity = () => import ('@/views/activityadmin/addactivity')
const CustomerAdmin = () => import ('@/views/customeradmin/customeradmin')
const AdminPage = () => import ('@/views/customeradmin/adminpage')
const PurchaseDetails = () => import ('@/views/customeradmin/purchasedetails')
const Batchbinding = () => import ('@/views/binding/batchbinding')
const Bindingsuccess = () => import ('@/views/binding/bindingsuccess')
const AccountAdmin = () => import ('@/views/accountadmin/accountadmin')
const Stock = () => import ('@/views/stock/stock')
const StockDetailed = () => import ('@/views/stock/stockdetailed')
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'transition', component: Transition, meta: {title: '广西中烟终端管理平台'}},
    {path: '/index', name: 'index', component: Index, meta: {title: '首页'}},
    {path: '/login', name: 'login', component: Login, meta: {title: '广西中烟终端管理平台'}},
    {path: '/dataanalysis', name: 'dataanalysis', component: DataAnalysis, meta: {title: '数据分析'}},
    {path: '/orderadmin', name: 'orderadmin', component: OrderaAmin, meta: {title: '订单管理'}},
    {path: '/activityadmin', name: 'activityadmin', component: ActivityAdmin, meta: {title: '活动管理'}},
    {path: '/addactivity', name: 'addactivity', component: AddActivity, meta: {title: '添加活动'}},
    {path: '/customeradmin', name: 'customeradmin', component: CustomerAdmin, meta: {title: '客户管理'}},
    {path: '/adminpage', name: 'adminpage', component: AdminPage, meta: {title: '客户信息管理'}},
    {path: '/purchasedetails', name: 'purchasedetails', component: PurchaseDetails, meta: {title: '购买明细'}},
    {path: '/batchbinding', name: 'batchbinding', component: Batchbinding, meta: {title: '批量绑定'}},
    {path: '/bindingsuccess', name: 'bindingsuccess', component: Bindingsuccess, meta: {title: '绑定成功'}},
    {path: '/accountadmin', name: 'accountadmin', component: AccountAdmin, meta: {title: '账户管理'}},
    {path: '/stock', name: 'stock', component: Stock, meta: {title: '库存管理'}},
    {path: '/stockdetailed', name: 'stockdetailed', component: StockDetailed, meta: {title: '库存管理明细'}},
  ]
})
