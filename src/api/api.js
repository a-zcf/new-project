const urls = {
  login:'/security/mp/login', // 登录接口
  shopInfo:'/store/shop/info/', // 店铺信息接口
  classifyList:'/store/classify/list', // 商品分类列表接口
  goodsList:'/store/goods/page/', //分页查询商品列表接口
  goodsDetail:'/store/goods/detail', //商品详情接口
  addCart:'/store/cart/add', //加入购物车接口
  reduceCart:'/store/cart/reduce', //从购物车减少商品接口
  cartList:'/store/cart/list/', //加入购物车列表接口
  cartDelete:'/store/cart/delete/', //删除购物车商品接口
  orderPage:'/store/order/page/', //订单列表接口
  cancelOrder:'/store/order/cancel/', //取消订单接口
  receiptOrder:'/store/order/receipt/', //确认收货接口
  createOrder:'/store/order/create', //提交订单接口
  defaultAddress: '/address/wx-user-address/default', // 获取默认地址接口
  saveAddress: '/address/wx-user-address/save', // 保存用户地址数据接口
  addressList: '/address/wx-user-address/list', // 用户地址列表接口
  deleteAddress: '/address/wx-user-address/delete/', // 删除地址接口
  updateAddress: '/address/wx-user-address/update', // 修改用户地址接口
  cardList: '/store/card/list/', // 优惠券列表接口
  scoreFlow: '/store/score/score-flow/', // 积分明细接口
}
module.exports = urls
