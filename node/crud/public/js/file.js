/**
 * 操作文件数据模块
 * 操作文件中的数据
 * 
 * 如果需要获取一个函数中异步操作的结果，必须通过回调函数来获取 Day04-14
 */

const fs = require('fs')

// 读取
exports.read = (url, callback) => {
  fs.readFile(url, 'utf8', (err, data) => {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data))
  })
}

// 保存
exports.save = () => {
  
}

// 修改
exports.update = () => {
  
}

// 删除
exports.delete = () => {
  
}
