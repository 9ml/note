const { Sequelize, Model } = require('sequelize')
const bcrypt = require('bcryptjs')

// sequelize 重命名为 db
const { sequelize: db } = require('../../core/db')

class User extends Model {
  static async verifyEmailPassword(email, plainPassword) {
    const user = await User.findOne({
      where: { email }
    })
    if (!user) {
      throw new global.errors.NotFound('账号不存在')
    }
    // user.password === plainPassword 查询的用户密码是加密过的
    const correct = bcrypt.compareSync(plainPassword, user.password)
    if (!correct) {
      throw new global.errors.AuthFailed('密码不正确')
    }
    return user
  }

  static async getUserByOpenId(openid) {
    const user = await User.findOne({
      where: { openid }
    })
    return user
  }

  static async registerByOpenId(openid) {
    return await User.create({
      nickname: '微信用户',
      openid
    })
  }

}

User.init({
  // 主键，关系型数据库。不能重复，不能为空。推荐 数字类型方便读写，不要使用字符串
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true, // 设为主键
    autoIncrement: true,  // 自动递增
  },
  nickname: Sequelize.STRING,
  email: {
    type: Sequelize.STRING(128),
    unique: true
  },
  password: {
    // 设计模式：观察者模式 ES6 Reflect Vue
    type: Sequelize.STRING,
    set(val) {  // set 函数 Model 中方法
      const salt = bcrypt.genSaltSync(10) // 计算机生成盐的成本，数字越大成本和时间越大
      // 加密不同，彩虹攻击
      const pwd = bcrypt.hashSync(val, salt)
      this.setDataValue('password', pwd)  // 保存到数据库
    }
  },
  openid: {
    type: Sequelize.STRING(64),
    unique: true // 设置唯一
  }
}, {
  sequelize: db
  // 设置表名
  // tableName: 'users'
})

// 数据迁移 SQL 更新 有风险

module.exports = {
  User
}
