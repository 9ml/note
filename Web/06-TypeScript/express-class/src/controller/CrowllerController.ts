import fs from 'fs'
import path from 'path'
import { Request, Response, NextFunction } from 'express'
import 'reflect-metadata'

import Crowller from '../utils/crowller'
import Analyzer from '../utils/analyzer'

import { controller, use, get } from '../decorator'
import { getResponse } from '../utils/util'

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined // 范匹配
  }
}

const checkLogin = (req: RequestWithBody, res: Response, next: NextFunction): void => {
  const isLogin = !!(req.session ? req.session.login : undefined)
  if (isLogin) {
    return next()
  }
  res.json(getResponse(null, '请先登录'))
}

@controller('v1')
export class CrowllerController {

  @get('/data')
  @use(checkLogin)
  data(req: RequestWithBody, res: Response): void {
    const url = 'http://www.dell-lee.com/'
    const analyzer = Analyzer.getInstance()
    new Crowller(url, analyzer)
    res.json(getResponse(true))
  }

  @get('/show')
  @use(checkLogin)
  show(req: RequestWithBody, res: Response): void {
      try {
      const result = fs.readFileSync(path.resolve(__dirname, '../../data/data.json'), 'utf-8')
      res.json(getResponse(JSON.parse(result)))
    } catch (error) {
      res.json(getResponse(false, '数据不存在'))
    }
  }
}
