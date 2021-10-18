// 创建整个应用的路由器

// 引入路由
import VueRouter from "vue-router"

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 创建路由并导出
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
