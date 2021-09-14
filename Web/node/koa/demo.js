const Koa = require('koa')

const app = new Koa()

// 应用程序对象  中间件
// 注册
// async：异步的终极解决方案
// 函数前添加 async 会将此函数的返回值包装成 Promise
// 洋葱模型：以 next() 为分界符
app.use(async (ctx, next) => {
  // ctx：上下文
  // next：下一个中间件函数
  console.log(1)
  // const a = next()
  // a.then(res => {
  //   console.log(res)  // 'Hello'
  // })

  // await 求值关键字，后面可以是表达式，不仅仅是 Promise
  // 阻塞线程
  const a = await next()  // 'Hello'
  console.log(a)  
  console.log(2)
})

app.use(async (ctx, next) => {
  console.log(3)

  // 常见异步请求：读写文件、http请求、操作数据库...
  const start = Date.now()
  const axios = require('axios')
  // const res = axios.get('http://7yue.pro') // 异步请求，没有阻塞线程
  const res = await axios.get('http://7yue.pro')  // 使用 await 会阻塞线程
  const end = Date.now()
  console.log(end - start)

  await next()
  console.log(4)
  return 'Hello'
})

/**
 * 增：post
 * 删：delete
 * 改：put
 * 查：get
 * 
 * 客户端版本兼容性：
 * API 携带版本号
 * 1. 路径
 * 2. 查询参数
 * 3. header
 * API 版本业务变动
 * 开闭原则：编程过程中，对代码的修改是关闭的，对代码的扩展是开发的。
 */

app.listen(3000, () => {
  console.log('Server is running.')
})

