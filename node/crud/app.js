/**
 * 单一模块职责
 * 
 * app.js 入口模块
 * 职责：
 *    创建服务
 *    相关配置
 *    挂载路由
 *    监听端口
 */

const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))
app.engine('html', require('express-art-template'))


// router(app)  // 自己封装函数使用，详见 router.js 注释部分
// express 提供的方法：把路由挂载到 app 服务中
app.use(router)

app.listen(3000, () => {
  console.log('Server is running...')
})
