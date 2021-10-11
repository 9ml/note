import Vue from 'vue'
import App from './App.vue'
// 关闭生产环境提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // render: (createElement) => {
  //   console.log(typeof createElement)
  //   return createElement('h1', 'Hello')
  // }
}).$mount('#app')
