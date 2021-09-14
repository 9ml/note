const util = require('util')

const axios = require('axios')

const { User } = require('../models/user')
const { generateToken } = require('../../core/util')
const { Auth } = require('../../middlewares/auth')

class WeChatManage {
  static async codeToToken(code) {
    // email
    // code 小程序生成 微信
    // openid 唯一标识 鉴定

    // 显示注册
    // 唯一标识
    // code appId appSecret
    const url = util.format(global.config.weChat.loginUrl, global.config.weChat.appId, global.config.weChat.appSecret, code)
    const result = await axios.get(url)
    if (result.status !== 200) {
      throw new global.errors.AuthFailed('openid获取失败')
    }
    const errcode = result.data.errcode
    // const errMsg = result.data.errmsg
    if (errcode) {
      throw new global.errors.AuthFailed('openid获取失败：' + code)
    }
    /**
     * openid
     * 建立档案 注册
     */
    let user = await User.getUserByOpenId(result.data.openid)
    if (!user) {
      user = await User.registerByOpenId(result.data.openid)
    }
    return generateToken(user.id, Auth.USER)
  }
}

module.exports = WeChatManage
