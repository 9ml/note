import Vue from 'vue'
import App from './App.vue'
import { show, data } from './mixin'
// 关闭生产环境提示
Vue.config.productionTip = false
// 全局混合
Vue.mixin(show)
Vue.mixin(data)

new Vue({
  render: h => h(App),
  // render: (createElement) => {
  //   console.log(typeof createElement)
  //   return createElement('h1', 'Hello')
  // }
}).$mount('#app')
