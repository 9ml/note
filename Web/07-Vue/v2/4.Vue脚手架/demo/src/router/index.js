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
              // path: 'details/:id/:title',
              path: 'details',
              component: Details,
              // props 的第一种写法，对象格式：该对象中的所有 key: value 都会以 props 的形式传给 Details 组件
              // props: { a: 1, b: 'Hello World' } // 数据写的死，较少使用

              // props 的第二种写法，值为布尔值：若布尔值为真，就会把该组件收到的所有 params 参数以 props 的形式传给 Details 组件
              // props: true

              // props 的第三种写法，值为函数
              // props($route) {
              //   return {
              //     id: $route.query.id,
              //     title: $route.query.title
              //   }
              // },
              // props 的第三种写法简写 => 结构赋值，值为函数
              // props({query}) {
              //   return {
              //     id: query.id,
              //     title: query.title
              //   }
              // },
              // props 的第三种写法简写 => 连续结构赋值，值为函数
              props({query: {id, title}}) {
                return { id, title }
              },

            }
          ]
        }
      ]
    }
  ]
})
