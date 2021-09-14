const Router = require('koa-router')
const router = new Router()

router.get('/v1/book', (ctx, next) => {
  ctx.body = {
    msg: 'book'
  }
})

module.exports = router
