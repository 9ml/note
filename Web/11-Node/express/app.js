// 安装：npm i express -S
// 引包
const express = require('express')

// 创建服务器应用程序：http.createServer()
const app = express()

// 引入
const bodyParser = require('body-parser')

// 配置 bodyParser
app.use(bodyParser.urlencoded({ extended: false }))

// const urlencodedParser = require('body-parser').urlencoded({ extended: false })

app.use(bodyParser.json())

// 公开指定目录：当以 /public/ 开头时，去 ./public/ 目录中查找对接的资源
app.use('/public/', express.static('./public/'))

// 第一个参数省略时，可以通过省略 /public/ 的方式来访问查找对接的资源
// app.use(express.static('./public/'))

// 配置使用 art-template 模板引擎
// 表示当渲染以 .xxx 文件时，使用 express-art-template 模板引擎，默认是 .art 文件，为便捷可使用 .html 文件
app.engine('html', require('express-art-template'))

// express 为 response 提供了一个 render 方法，默认不可以使用，但是配置了模板引擎可以使用
// 即：res.render('html模板名',{ 模板数据 })
// 注意：第一个参数不能写路径，默认会在项目中 views 目录查找此模板文件

// 当服务器收到 get 请求 / 时执行回调处理函数
app.get('/', (req, res) => {
  // res.send('Hello Express')
  res.render('404.html')
})

app.get('/admin', (req, res) => {
  res.render('admin/index.html', {
    title: 'Admin Page'
  })
  // 路由重定向
  // res.redirect('/')
})

app.get('/post', (req, res) => {
  res.render('post.html', {
    title: 'Admin Page'
  })
})

app.post('/post', (req, res) => {
  console.log(req.body)
  res.send(req.body)
  // 1. 获取数据
  // 2. 处理
  // 3. 发送响应
})

app.listen(3000, () => {
  console.log('App in running')
})
