const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  let url = req.url
  if (url === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        return res.end('404NotFound')
      }
      res.end(data)
    })
  } else if (url.indexOf('/public/') !== -1) {  // 统一处理 开放 public 目录
    fs.readFile('.' + url, (err, data) => {
      if (err) {
        return res.end('404NotFound')
      }
      res.end(data)
    })
  }
}).listen(3000, () => {
  console.log('Server is running...')
})
