const {
  Validator,
  Rule
} = require('../../core/_validator_v2')

const { LoginType } = require('../lib/enum')

const { User } = require('../models/user')

class PositiveIntegerValidator extends Validator {
  constructor() {
    super()
    this.id = [
      new Rule('isInt', '必须是正整数', { min: 1 })
    ]
  }
}

class RegisterValidator extends Validator {
  constructor() {
    super()
    this.email = [
      new Rule('isEmail', '邮箱格式不正确')
    ]
    this.password = [
      new Rule('isLength', '密码至少6个字符，最多32个字符', { min: 6, max: 32 }),
      new Rule('matches', '密码必须包含数字及字母组合', '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]')
    ]
    this.rePassword = this.password
    this.nickname = [
      new Rule('isLength', '昵称至少2个字符，最多16个字符', { min: 2, max: 32 })
    ]
  }

  validatePassword(val) {
    const pwd1 = val.body.password
    const pwd2 = val.body.rePassword

    if (pwd1 !== pwd2) {
      throw new Error('两次密码不一致')
    }
  }

  async validateEmail(val) {
    const email = val.body.email
    const user = await User.findOne({
      where: { email: email }
    })

    if (user) {
      throw new Error('邮箱已存在')
    }
  }
}

class TokenValidator extends Validator {
  constructor() {
    super()
    this.account = [
      new Rule('isLength', '不符合账号规则', { min: 4, max: 32 })
    ]
    this.secret = [
      /**
       * 是必须传入的吗？
       * web 账号 + 密码
       * 登录多元化，小程序 密码
       * 微信 打开小程序 微信已经校验用户
       * WEB：account secret
       * 小程序登录：account
       * 手机号登录
       * 
       * 1. 可以为空 不传
       * 2. 传 校验
       */
      new Rule('isOptional'), // 可为空
      new Rule('isLength', '至少6个字符密码', { min: 6, max: 128}) // 校验
    ]
  }
  // type 枚举
  validateLoginType(val) {
    if (!val.body.type) {
      throw new Error('登录类型为必需参数')
    }
    if (!LoginType.isThisType(val.body.type)) {
      throw new Error('登录类型不合法')
    }
  }
}

class NotEmptyValidator extends Validator {
  constructor() {
    super()
    this.token = [
      new Rule('isLength', '不允许为空', { min: 1 })
    ]
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
  TokenValidator,
  NotEmptyValidator
}
