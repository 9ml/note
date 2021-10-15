// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 应用 Vuex
Vue.use(Vuex)

// 创建 actions => 响应组件中的动作
const actions = {
  addByOdd(context, value) {
    context.state.sum %2 ? context.commit('ADD', value) : ''
  },
  addByWait(context, value) {
    setTimeout(() => {
      context.commit('ADD', value)
    }, 1000)
  }
}

// 创建 mutations => 操作 state 中的数据
const mutations = {
  ADD(state, value) {
    console.log('Mutations.ADD', state, value)
    state.sum += value
  },
  CUT(state, value) {
    state.sum -= value
  },
  ADD_PERSON(state, value) {
    state.userList = [value, ...state.userList]
  }
}

// 创建 state => 存储数据
const state = {
  sum: 0,
  name: 'Tom',
  age: 18,
  userList: [
    { id: '001', name: 'Tom' }
  ]
}

// 创建 getters => 加工 state 中的数据
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}

// 创建并导出 store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
