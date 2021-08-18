const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 1. 连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// 2. 设计文档结构
const userSchema = new Schema({
  username: {
    type: String,
    required: true  // 约束，限制必填
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

// 3. 将文档结构发布为模型
/**
 * mongoose.model 方法用来将一个架构发布为模型
 * 第一个参数：传入一个大写名词单数用来表示你的集合名称，mongoose 会自动将大写名词的字符串生成小写复数的集合名词，例如 User 会生成 users
 * 第二个参数：架构 Schema
 * 返回值：模型构造函数
 */
const User = mongoose.model('User', userSchema);

// 4. 根据这个构造函数操作 User 集合中的数据（增删改查）

// // 增
// const admin = new User({
//   username: '小二',
//   password: '123456',
//   email: '123456@qq.com'
// })

// // 保存到数据库
// admin.save().then(() => { console.log('success') })


// // 查询所有
// User.find().then(res => { console.log(res) })
// // 条件查询
// User.find({
//   username: '小米'
// }).then(res => {
//   console.log(res)
// })
// // 多条件查询 + 查找一个
// User.findOne({
//   username: '小二',
//   password: '123456'
// }).then(res => {
//   console.log(res)
// })


// // 删除
// User.remove({
//   username: '小米'
// }).then(_ => {
//   console.log('success')
// })

// 更新数据
User.findByIdAndUpdate('611ccd6e777e743a484123ef', {
  password: '654321'
}, (err, data) => {
  if (err) {
    console.log(err)
    console.log('失败')
  } else {
    console.log(data)
    console.log('成功')
  }
}).then(res => {
  console.log(res)
})
