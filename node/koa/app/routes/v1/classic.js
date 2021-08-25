const Router = require('koa-router')

const { Auth } = require('../../../middlewares/auth')

const router = new Router({
  prefix: '/v1/classic'
})


router.get('/latest', new Auth().m ,async (ctx, next) => {
  /**
   * 权限
   * token 角色
   * 普通用户
   * 管理员
   * 权限分级 scope
   */
  ctx.body = ctx.auth
})



module.exports = router
