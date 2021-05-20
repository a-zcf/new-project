import axios from 'axios'
import { Toast } from 'vant'
import store from '../store/store'
import * as types from '../store/types'
import Qs from 'qs'
const query = Qs.parse(location.search.substring(1)) // 获取url链接参数
import {baseUrl} from './env'
const red_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxccb43a09acc5a5c8&redirect_uri=http://thyrtest.gxtianhai.com.cn/crowdweb/thirdInterface/getUserInfos&response_type=code&state=aHR0cDovL3RoeXJ0ZXN0Lmd4dGlhbmhhaS5jb20uY24vbmV3c21va2VwYXkvbG9naW4vbWF5b3JBdXRob3JMb2dpbg--&scope=snsapi_userinfo#wechat_redirect' // 登陆地址url

axios.defaults.withCredentials = false

axios.interceptors.request.use(config => {
  store.commit(types.LOGIN, query.token);
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8'
  }
  if (store.state.token) {
    config.headers.accessToken = `${store.state.token}`;
  }else{
    window.location.href = red_url
  }
  return config
},
err => {
  return Promise.resolve(err)
})

axios.interceptors.response.use(response => {
  if (response.data.code === 0) {
    return response
  } else if (response.data.code === 1000) {
    // let url = location.href
    store.commit(types.LOGOUT)
    // Toast.fail(response.data.msg);
    window.location.href = red_url
  } else {

  }
  return response
},

error => {
  if(error.response){
  }
  return Promise.reject(error.response)
})

export const postRequest = (url, params) => {
  return axios({
    method: 'post',
    url: `${baseUrl}${url}`,
    data: params,
    dataType: 'jsonp',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export const getRequest = (url,params) => {
  return axios({
    method: 'get',
    url: `${baseUrl}${url}`,
    params:params,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
