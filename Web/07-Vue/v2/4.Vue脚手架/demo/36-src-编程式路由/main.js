import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 关闭生产环境提示
Vue.config.productionTip = false

// 应用
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
