import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

import './controller/LoginController'
import { router } from './controller/decorator'

// import router from './router'

/**
 * 问题
 * 1. express 库的类型定义文件 .d.ts 文件类型描述不准确
 * 2. 当使用中间件时，对 req 或者 res 做了修改之后，实际上的类型并不能改变。
 */

const app = express()

// bodyParser 必须卸载 router 路由的前面
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'session',
  keys: ['9ml'],
  maxAge: 24 * 60 * 60 * 1000 //  24hours
}))

app.use((req: Request, res: Response, next: NextFunction) => {
  req.name = 'Tom'
  next()
})

app.use(router)

app.listen(3000, () => {
  console.log('Server is running.')
})
