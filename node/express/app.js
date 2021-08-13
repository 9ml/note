// 安装：npm i express -S
// 引包
const express = require('express')

// 创建服务器应用程序：http.createServer()
const app = express()

// 公开指定目录：当以 /public/ 开头时，去 ./public/ 目录中查找对接的资源
app.use('/public/', express.static('./public/'))

// 第一个参数省略时，可以通过省略 /public/ 的方式来访问查找对接的资源
// app.use(express.static('./public/'))

// 当服务器收到 get 请求 / 时执行回调处理函数
app.get('/', (req, res) => {
  res.send('Hello Express')
})   

app.listen(3000, () => {
  console.log('App in running')
})
