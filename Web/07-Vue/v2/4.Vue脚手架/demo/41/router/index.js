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
const router = new VueRouter({
  mode: 'history',
  routes: [
    // 一级路由
    {
      name: 'aboutName',
      path: '/about',
      component: About,
      meta: {
        isAuth: true,
        title: '关于'
      }
    },
    {
      name: 'homeName',
      path: '/home',
      component: Home,
      meta: {
        title: '主页'
      },
      children: [
        {
          name: 'newsName',
          path: 'news',
          component: News,
          meta: {
            isAuth: true,
            title: '新闻'
          }
        },
        {
          name: 'messageName',
          path: 'message',
          component: Message,
          meta: {
            isAuth: true,
            title: '消息'
          },
          children: [
            {
              name: 'detailsName',
              path: 'details',
              component: Details,
              meta: {
                isAuth: true,
                title: '详情'
              },
              props({query: {id, title}}) {
                return { id, title }
              }
            }
          ]
        }
      ]
    }
  ]
})

export default router
