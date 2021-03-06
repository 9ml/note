const Router = require('koa-router')
const router = new Router()

// const { HttpException, ParameterException } = require('../../../core/http')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.post('/v1/:id/test', (ctx, next) => {
  const path = ctx.params  // 获取 url 路径中参数
  const query = ctx.request.query // 获取 url 拼接参数
  const header = ctx.request.header  // 获取请求头参数
  const body = ctx.request.body  // 获取 post 请求体参数

  const v = new PositiveIntegerValidator().validate(ctx)

  // sequelize 连接数据库 配置一些数据库的参数

  // const id = v.get('path.id.a.b.e', parsed = false)
  // console.log(id)
  // 已知错误
  if (true) {
    // const error = new Error('缺少参数')
    // error.errorCode = 10001
    // error.status = 400
    // error.requestUrl = `${ctx.method} ${ctx.path}`
    // throw error

    // 面向对象的方法，动态创建一个类
    // const error = new HttpException('缺少参数', 10001, 400)
    // throw error

    // throw new ParameterException()

    // throw new global.errors.ParameterException()
  }

  ctx.body = {
    path,
    query,
    header,
    body
  }

  // throw new Error('API Exception.')
})

module.exports = router
