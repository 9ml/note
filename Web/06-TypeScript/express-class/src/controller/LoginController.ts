import { Request, Response } from 'express'
import 'reflect-metadata'

import { controller, get, post } from '../decorator'
import { getResponse } from '../utils/util'

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined // 范匹配
  }
}

@controller('v1')
export class LoginController {
  static isLogin(req: Request) {
    return !!(req.session ? req.session.login : undefined)
  }

  @post('/login')
  post(req: RequestWithBody, res: Response) {
    const { password } = req.body
    const isLogin = LoginController.isLogin(req)
    if (isLogin) {
      res.json(getResponse(null, '已经登录'))
    } else {
      if (password === '123') {
        if (req.session) {
          req.session.login = true
          return res.json(getResponse(true))
        }
        return res.json(getResponse(false, '登录过期'))
      }
      res.json(getResponse(false, '登录失败'))
    }
  }

  @get('/logout')
  logout(req: RequestWithBody, res: Response) {
    if (req.session) {
      req.session.login = undefined
      res.json(getResponse(true))
    }
  }


  @get('/')
  home(req: RequestWithBody, res: Response) {
    const isLogin = LoginController.isLogin(req)
    if (isLogin) {
      return res.send(`
        <html>
          <body>
            <a href="/data">爬取内容</a>
            <a href="/logout">退出登录</a>
          </body>
        </html>
      `)
    }
    res.send(`
    <html>
      <body>
        <form method="POST", action="/login">
          <input type="password" name="password" />
          <button>登录</button>
        </form>
      </body>
    </html>
    `)
  }
}
