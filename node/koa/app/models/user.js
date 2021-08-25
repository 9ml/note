const { Sequelize, Model } = require('sequelize')

// sequelize 重命名为 db
const { sequelize: db } = require('../../core/db')

class User extends Model { }

User.init({
  // 主键，关系型数据库。不能重复，不能为空。推荐 数字类型方便读写，不要使用字符串
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true, // 设为主键
    autoIncrement: true,  // 自动递增
  },
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
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
