import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import ('@/views/index/index');
const DataAnalysis = () => import ('@/views/dataanalysis/dataanalysis');
const ShopAdmin = () => import ('@/views/shopadmin/shopadmin');
const OrderAdmin = () => import ('@/views/orderadmin/orderadmin');
const CommodityAdmin = () => import ('@/views/commodityadmin/commodityadmin');
const AddCommodity = () => import ('@/views/commodityadmin/addcommodity');
const EditCommodity = () => import ('@/views/commodityadmin/editcommodity');
const MarketExten = () => import ('@/views/marketexten/marketexten');
const CouponSettings = () => import ('@/views/marketexten/couponsettings');

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'index', component: Index, meta: {title: '首页',}},
    {path: '/dataanalysis', name: 'dataanalysis', component: DataAnalysis, meta: {title: '数据分析',}},
    {path: '/shopadmin', name: 'shopadmin', component: ShopAdmin, meta: {title: '店铺管理'}},
    {path: '/orderadmin', name: 'orderadmin', component: OrderAdmin, meta: {title: '订单管理'}},
    {path: '/commodityadmin', name: 'commodityadmin', component: CommodityAdmin, meta: {title: '商品管理'}},
    {path: '/addcommodity', name: 'addcommodity', component: AddCommodity, meta: {title: '添加商品'}},
    {path: '/editcommodity', name: 'editcommodity', component: EditCommodity, meta: {title: '编辑商品'}},
    {path: '/marketexten', name: 'marketexten', component: MarketExten, meta: {title: '推广营销'}},
    {path: '/couponsettings', name: 'couponsettings', component: CouponSettings, meta: {title: '优惠券设置'}},
  ]
})
