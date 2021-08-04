// npm install art-template
// 加载模板引擎
const template = require('art-template')
const http = require('http')
const fs = require('fs')

// template.render('模板字符串', 替换对象)

// let tplStr = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>大家好，我叫{{ name }}</h1>
//   </body>
//   </html>
// `
// let ret = template.render(tplStr, { name: 'Jack' })

// console.log(ret)

const server = http.createServer()

fs.readFile('./template.html', (err, data) => {
  if (err) {
    return console.log('文件读取失败')
  }
  // 默认读取到的 data 是二进制数据，而模板引擎的 render 方法需要接收字符串
  let ret = template.render(data.toString(), {
    name: 'Jack'
  })

  server.on('request', (req, res) => {
    if (req.url === '/') {
      res.end(ret)
    }
  })
})

server.listen(3000, () => {
  console.log('Server is running...')
})


