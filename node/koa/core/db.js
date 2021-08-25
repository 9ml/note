const Sequelize = require('sequelize')

const { dbName, host, port, user, password } = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql', // 指定数据库类型
  host,
  port,
  logging: true,  // 在控制台打印数据表信息
  timezone: '+08:00', // 设置时区
  define: {
    // 自动生成 createdAt 和 updatedAt 字段，建议设置为 true
    timestamps: true,
    // 自动生成删除时间字段 deletedAt
    paranoid: true,
    // 字段重命名
    // createdAt: 'created_at',
    // updatedAt: 'updated_at',
    // deletedAt: 'deleted_at',
    // 将所有驼峰命名转换成下划线，数据库建议使用下划线格式
    underscored: true
  }
})

sequelize.sync({
  // 设置 true 运行项目将删除原来的表重新创建表，建议设置为 false
  force: false
})

module.exports = {
  sequelize
}
