/**
 * session 状态 现在使用不多
 * token 令牌
 * REST
 * 
 * 登录 email pwd
 * token jwt 无意义字符串 携带数据
 * uid jwt
 * 令牌获取 颁布令牌
 * 
 */
const Router = require('koa-router')

const { TokenValidator, NotEmptyValidator } = require('../../validators/validator')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')
const { generateToken } = require('../../../core/util')
const { Auth } = require('../../../middlewares/auth')
const WeChatManage = require('../../services/wechat')

const router = Router({
  prefix: '/v1/token'  // 指定路由前缀
})

router.post('/', async (ctx) => {
  const v = await new TokenValidator().validate(ctx)
  /**
   * API 权限 公开
   * token 过期 不合法
   * 
   * 
   * 业务逻辑
   * 1. 在 API 接口编写
   * 2. Model 分层 写业务逻辑
   * 
   * 业务分层 Model，Service 分层
   * ThinkPHP Model Service Logic
   * Java Model DTO
   */
  let token
  // 登录类型判断
  switch (v.get('body.type')) {
    case LoginType.USER_MINI_PROGRAM:
      token = await WeChatManage.codeToToken(v.get('body.account'))
      break;
    case LoginType.USER_EMAIL:
      token = await emailLogin(v.get('body.account'), v.get('body.secret'))
      break;
    default:
      throw new global.errors.ParameterException('没有相应的处理函数')
  }
  ctx.body = {
    token
  }
})

router.post('/verify', async (ctx, next) => {
  const v = await new NotEmptyValidator().validate(ctx)
  const result = Auth.verifyToken(v.get('body.token'))
  ctx.body = {
    result
  }
})

async function emailLogin(account, secret) {
  const user = await User.verifyEmailPassword(account, secret)
  return generateToken(user.id, Auth.USER)
}

module.exports = router
