import Vue from 'vue'
import App from './App.vue'
// 关闭生产环境提示
Vue.config.productionTip = false
// 引入插件
import plugins from './plugins'
// 使用插件
Vue.use(plugins)

new Vue({
  render: h => h(App)
}).$mount('#app')
