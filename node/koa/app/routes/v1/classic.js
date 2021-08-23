const Router = require('koa-router')
const router = new Router()

router.post('/v1/:id/test', (ctx, next) => {
  const path = ctx.params  // 获取 url 路径中参数
  const query = ctx.request.query // 获取 url 拼接参数
  const headers = ctx.request.header  // 获取请求头参数
  const body = ctx.request.body  // 获取 post 请求体参数
  ctx.body = {
    path,
    query,
    headers,
    body
  }
})

module.exports = router
