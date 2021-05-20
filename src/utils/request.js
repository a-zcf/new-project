import axios from 'axios'
import { Toast } from 'vant'
import store from '../store/store'
import * as types from '../store/types'
import {baseUrl} from './env'
import {getCookieVal} from '../utils/getCookie'
import Qs from 'qs'

const query = Qs.parse(location.search.substring(1)) // 获取url链接参数

axios.defaults.withCredentials = false

axios.interceptors.request.use(config => {
  // store.commit(types.LOGIN, query.token);
  // let cooToken = getCookieVal('session-token')
  // localStorage.setItem('shopNo',query.shopNo)
  config.data = JSON.stringify(config.data)
  config.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'session-token':'3kn9v9t7dyqycev1vvlprpm6w0g0d2bn0udf79nrqkbh2u96ddyc3zgw4rymglua46blcvb4rl'
    // 'session-token':'334gv2nwrukeyev1vvlrhahge8g7m2bn0udf79nrqkbh2u96ddyc3zgw4rymglua46blcvb4rl'
  }
  // if (cooToken) {
  //   // config.headers.accessToken = `${store.state.token}`;
  // }else{
  //   window.location.href = 'https://zl.haiyunzy.com/v1/security/mp/login?redirect_uri=https://zl.haiyunzy.com/store'
  // }
  return config
},
err => {
  return Promise.resolve(err)
})

axios.interceptors.response.use(response => {
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
    dataType: 'json',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export const getRequest = (url,params) => {
  return axios({
    method: 'get',
    params:params,
    url: `${baseUrl}${url}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
