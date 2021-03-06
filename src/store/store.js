import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    token: 'null',
    supplierId: '',
    cartListData:[]
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    cartList(state,data){
      state.cartListData = data
    }
  }
})
