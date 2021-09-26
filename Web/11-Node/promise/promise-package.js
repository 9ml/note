// 封装 Promise API

const fs = require('fs')

function promiseReadFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

promiseReadFile('./file/a.txt')
  .then((res) => {
    console.log(res)
    return promiseReadFile('./file/b.txt')
  })
  .then((res) => {
    console.log(res)
    return promiseReadFile('./file/c.txt')
  })
  .then(res => {
    console.log(res)
  })
