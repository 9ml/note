import axios from 'axios'

export default {
  namespaced: true,
  actions: { 
    addPersonWang(context, value) {
      if (value.name.indexOf('王') === 0) {
        context.commit('ADD_PERSON', value)
      } else {
        alert('请添加姓王的人')
      }
    },
    getBaidu(context) {
      axios.get('http://localhost:8080/api').then(res=> {
        context.commit('ADD_PERSON', { id: '00000', name: '测试测试' })
      }, err => {
        console.log(err)
      })
    }
   },
  mutations: {
    ADD_PERSON(state, value) {
      state.userList = [value, ...state.userList]
    }
  },
  state: {
    userList: [
      { id: '001', name: 'Tom' }
    ]
  },
  getters: {
    firstPersonName(state) {
      return state.userList[0].name
    }
  }
}
