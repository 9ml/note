import Vue from 'vue'
import App from './App.vue'
// 引入
import vueResource from 'vue-resource'
// 使用
Vue.use(vueResource)
// 关闭生产环境提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
