const urls = {
  login : '/user/login',
  WxPay: '/newsmokepay/api/wxPay/pay', // 支付参数获取接口
  PaySuccess: '/newsmokepay/api/wxPay/success', // 支付成功接口
  payUserinfo: '/newsmokepay/api/wxPay/payUserinfo', // 已支支付且 ismy=1用户信息接口
  commodityClassList: '/v1/store/classify/list', // 商品列表接口
  goodsList: '/v1/store/goods/page/', // 商品列表接口
  getBrandActivityinfo: '/newsmokepay/api/wxPay/getactivityinfo', // 商品列表接口
  getJssdkConfig: '/newsmokepay/api/getJssdkConfig', // 商品列表接口
}
module.exports = urls
