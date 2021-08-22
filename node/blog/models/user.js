const mongoose = require('mongoose')

// 连接数据库
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true, useUnifiedTopology: true})

const Schema = mongoose.Schema

module.exports = mongoose.model('User', new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    default: Date.now // Date.now() 会即时调用，所以给了方法，表示如果没有传递 create_time，mongoose 会调用 default 指定的
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String,
    default: '/public/img/avatar.png'
  },
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1],
    default: -1
  },
  birthday: {
    type: Date
  },
  status: {
    type: Number,
    /**
     * 0：没有权限限制
     * 1：不可登录
     * 2：不可评论
     */
    enum: [0, 1, 2],
    default: 0
  }
}))
