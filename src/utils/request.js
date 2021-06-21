import axios from 'axios'
import { Toast } from 'vant'
import store from '../store/store'
import * as types from '../store/types'
import Qs from 'qs'
import {baseUrl} from './env'
const query = Qs.parse(location.search.substring(1)) // 获取url链接参数
// const red_url = baseUrl+'/payfront/h5login/login?redirect_url=' // 登陆地址url
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
    // Toast.fail(response.data.msg);
    // window.location.href = red_url + url
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
