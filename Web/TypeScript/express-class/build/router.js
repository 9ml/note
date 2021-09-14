"use strict";
// import fs from 'fs'
// import path from 'path'
// import { Router, Request, Response, NextFunction } from 'express'
// import Crowller from './utils/crowller'
// import Analyzer from './utils/analyzer'
// import { getResponse } from './utils/util'
// interface RequestWithBody extends Request {
//   body: {
//     [key: string]: string | undefined // 范匹配
//   }
// }
// const checkLogin = (req: RequestWithBody, res: Response, next: NextFunction) => {
//   const isLogin = req.session ? req.session.login : undefined
//   if (isLogin) {
//     return next()
//   }
//   res.json(getResponse(null, '请先登录'))
// }
// const router = Router()
// router.get('/', () => {})
// router.post('/login', (req: RequestWithBody, res: Response) => {
//   const { password } = req.body
//   const isLogin = req.session ? req.session.login : undefined
//   if (isLogin) {
//     // res.send('已经登录')
//     res.json(getResponse(null, '已经登录'))
//   } else {
//     if (password === '123') {
//       if (req.session) {
//         req.session.login = true
//         return res.json(getResponse(true))
//         // return res.send('登录成功')
//       }
//       return res.json(getResponse(false, '登录过期'))
//     }
//     res.json(getResponse(false, '登录失败'))
//     // res.send('登录失败')
//   }
// })
// router.get('/data', checkLogin, (req: RequestWithBody, res: Response) => {
//   const url = 'http://www.dell-lee.com/'
//   const analyzer = Analyzer.getInstance()
//   new Crowller(url, analyzer)
//   res.json(getResponse(true))
//   // res.send('Success')
// })
// router.get('/show', checkLogin, (req: RequestWithBody, res: Response) => {
//   try {
//     const result = fs.readFileSync(path.resolve(__dirname, '../data/data.json'), 'utf-8')
//     res.json(getResponse(JSON.parse(result)))
//     // res.send(result)
//   } catch (error) {
//     res.json(getResponse(false, '数据不存在'))
//     // res.send('尚未爬取内容')
//   }
// })
// router.get('/logout', (req: RequestWithBody, res: Response) => {
//   if (req.session) {
//     req.session.login = undefined
//     // res.redirect('/')
//     res.json(getResponse(true))
//   }
// })
// export default router
