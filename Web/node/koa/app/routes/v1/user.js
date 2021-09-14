const Router = require('koa-router')

const { RegisterValidator } = require('../../validators/validator')
const { User } = require('../../models/user')

const router = Router({
  prefix: '/v1/user'  // 指定路由前缀
})

// 注册
router.post('/register', async (ctx) => {
  // 中间件只会在项目初始化时实例化一次
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    email: v.get('body.email'),
    password: v.get('body.password'),
    nickname: v.get('body.nickname')
  }
  await User.create(user)
  throw new global.errors.Success()
})

module.exports = router
