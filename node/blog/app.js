const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')

const router = require('./router')

const app = express()


// 动态绝对路径
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))  // 配置默认目录（默认即是 views）

// 配置解析表单 POST 请求体中间件
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Express 框架默认不支持 Session 和 Cookie
// 需要借助第三方中间件：express-session 来解决
// npm i express-session
// 通过 req.session 来访问和设置 Session 成员
// 添加 session 数据：req.session.foo = 'bar'
// 访问 session 数据：req.session.foo
app.use(session({
  secret: 'my-blog', // 自定义加密字符串，会在原有加密基础上和这个字符串拼接加密，提高安全性
  resave: false,
  saveUninitialized: true // 无论是否使用 session，都默认分配一把钥匙
}))

app.use(router)

// 配置 404 处理中间件
app.use((req, res) => {
  res.render('404.html')
})

// 配置全局错误处理中间件
app.use((err, req, res, next) => {
  res.status(500).json({
    error: 500,
    message: err.message
  })
})

app.listen(3000, () => {
  console.log('Server is running.')
})
