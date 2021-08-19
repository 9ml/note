/**
 * 操作文件数据模块
 * 操作文件中的数据
 * 
 * 如果需要获取一个函数中异步操作的结果，必须通过回调函数来获取 Day04-14
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true})
// mongoose.set('useFindAndModify', false);

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    enum: [0, 1],
    default: 0
  },
  age: {
    type: Number,
    required: true
  },
  sign: {
    type: String
  }
})

module.exports = mongoose.model('Student', studentSchema)
