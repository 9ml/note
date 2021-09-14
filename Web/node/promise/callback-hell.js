const fs = require('fs')

// 回调嵌套保证执行顺序
fs.readFile('./file/a.txt', 'utf8', (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
  fs.readFile('./file/b.txt', 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    console.log(data)
    fs.readFile('./file/c.txt', 'utf8', (err, data) => {
      if (err) {
        throw err
      }
      console.log(data)
    })
  })
})
