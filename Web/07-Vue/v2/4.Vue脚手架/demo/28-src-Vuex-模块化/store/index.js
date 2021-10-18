// 引入 Vue
import Vue from 'vue'
// 引入 Vuex
import Vuex from 'vuex'
// 应用 Vuex
Vue.use(Vuex)


// 求和相关配置
// const countOptions = {
//   namespaced: true,
//   actions: {
//     addByOdd(context, value) {
//       context.state.sum %2 ? context.commit('ADD', value) : ''
//     },
//     addByWait(context, value) {
//       setTimeout(() => {
//         context.commit('ADD', value)
//       }, 1000)
//     }
//   },
//   mutations: {
//     ADD(state, value) {
//       console.log('Mutations.ADD', state, value)
//       state.sum += value
//     },
//     CUT(state, value) {
//       state.sum -= value
//     },
//   },
//   state: {
//     sum: 0,
//     name: 'Tom',
//     age: 18
//   },
//   getters: {
//     bigSum(state) {
//       return state.sum * 10
//     }
//   }
// }
import countOptions from './modules/count'


// 人员相关配置
// const personOptions = {
//   namespaced: true,
//   actions: { 
//     addPersonWang(context, value) {
//       if (value.name.indexOf('王') === 0) {
//         context.commit('ADD_PERSON', value)
//       } else {
//         alert('请添加姓王的人')
//       }
//     }
//    },
//   mutations: {
//     ADD_PERSON(state, value) {
//       state.userList = [value, ...state.userList]
//     }
//   },
//   state: {
//     userList: [
//       { id: '001', name: 'Tom' }
//     ]
//   },
//   getters: {
//     firstPersonName(state) {
//       return state.userList[0].name
//     }
//   }
// }
import personOptions from './modules/person'

// 创建并导出 store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
})
