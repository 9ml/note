// 安装：npm i express -S
// 引包
const express = require('express')

// 创建服务器应用程序：http.createServer()
const app = express()

// 公开指定目录
app.use('/public/', express.static('./public/'))

// 当服务器收到 get 请求 / 时执行回调处理函数
app.get('/', (req, res) => {
  res.send('Hello Express')
})

app.listen(3000, () => {
  console.log('App in running')
})
