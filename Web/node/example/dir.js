const fs = require('fs')

// 读取目录
fs.readdir('D:/workspace', (err, files) => {
  if (err) {
    return console.log('目录不存在')
  }
  console.log(files)
})
