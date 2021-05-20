import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('@/views/home/home');
const ProductDetails = () => import ('@/views/home/productdetails');
const OrderConfirm = () => import ('@/views/home/orderconfirm');
const PaySuccess = () => import ('@/views/home/paysuccess');
const ShoppingCart = () => import ('@/views/shoppingcart/shoppingcart');
const My = () => import ('@/views/my/my');
const MyOrder = () => import ('@/views/my/myorder');
const PointsDetails = () => import ('@/views/my/pointsdetails');
const AddressAdmin = () => import ('@/views/addressadmin/addressadmin');
const AddAddress = () => import ('@/views/addressadmin/addaddress');
const EditAddress = () => import ('@/views/addressadmin/editaddress');

Vue.use(Router)
export default new Router({
  routes: [
    {path: '/', name: 'home', component: Home, meta: {title: '首页',tabbarShow:true}},
    {path: '/productdetails', name: 'productdetails', component: ProductDetails, meta: {title: '商品详情'}},
    {path: '/orderconfirm', name: 'orderconfirm', component: OrderConfirm, meta: {title: '确认订单'}},
    {path: '/paysuccess', name: 'paysuccess', component: PaySuccess, meta: {title: '支付成功'}},
    {path: '/shoppingcart', name: 'shoppingcart', component: ShoppingCart, meta: {title: '购物车',tabbarShow:true}},
    {path: '/my', name: 'my', component: My, meta: {title: '我的',tabbarShow:true}},
    {path: '/pointsdetails', name: 'pointsdetails', component: PointsDetails, meta: {title: '积分明细'}},
    {path: '/myorder', name: 'myorder', component: MyOrder, meta: {title: '我的订单'}},
    {path: '/addressadmin', name: 'addressadmin', component: AddressAdmin, meta: {title: '地址管理'}},
    {path: '/addaddress', name: 'addaddress', component: AddAddress, meta: {title: '添加收货地址'}},
    {path: '/editaddress', name: 'editaddress', component: EditAddress, meta: {title: '编辑地址'}},
  ]
})
