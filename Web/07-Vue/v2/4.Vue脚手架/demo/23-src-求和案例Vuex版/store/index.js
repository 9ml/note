// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 应用 Vuex
Vue.use(Vuex)

// 创建 actions => 响应组件中的动作
const actions = {
  // add(context, value) {
  //   console.log('Actions.add', context, value)
  //   context.commit('ADD', value)
  // },
  // cut(context, value) {
  //   context.commit('CUT', value)
  // },
  addByOdd(context, value) {
    context.dispatch('demoA', value)
  },
  demoA(context, value) {
    context.dispatch('demoB', value)
  },
  demoB(context, value) {
    context.state.sum % 2 ? context.commit('ADD', value) : ''
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
  }
}

// 创建 state => 存储数据
const state = {
  sum: 0
}

// 创建并导出 store
export default new Vuex.Store({
  actions,
  mutations,
  state
})
