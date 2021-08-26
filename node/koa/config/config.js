module.exports = {
  environment: 'dev',  // prod 开发环境配置
  database: { // 数据库配置
    dbName: 'applet',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root'
  },
  security: {
    secretKey: '9ml', // 自定义 Token 令牌加密字段，建议越复杂越好，重要 不可丢失
    expiresIn: 60*60*24*30  // 令牌过期时间
  },
  weChat: {
    appId: 'wx0be486ed43033afa',
    appSecret: 'xxx',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}
