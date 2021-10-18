export default {
  namespaced: true,
  actions: {
    addByOdd(context, value) {
      context.state.sum %2 ? context.commit('ADD', value) : ''
    },
    addByWait(context, value) {
      setTimeout(() => {
        context.commit('ADD', value)
      }, 1000)
    }
  },
  mutations: {
    ADD(state, value) {
      console.log('Mutations.ADD', state, value)
      state.sum += value
    },
    CUT(state, value) {
      state.sum -= value
    },
  },
  state: {
    sum: 0,
    name: 'Tom',
    age: 18
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }
}
