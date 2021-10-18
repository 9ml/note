// 创建整个应用的路由器

// 引入路由
import VueRouter from "vue-router"

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Details from '../pages/Details.vue'

// 创建路由并导出
export default new VueRouter({
  routes: [
    // 一级路由
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              name: 'hello',
              path: 'details/:id/:title',
              component: Details
            }
          ]
        }
      ]
    }
  ]
})
