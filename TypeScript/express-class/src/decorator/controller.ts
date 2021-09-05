import { RequestHandler } from 'express'
import router from '../router'
import { Methods } from './request'

export function controller(root: string) {
  return function(target: new (...args: any[]) => any) {
    for (let key in target.prototype) {
      const path: string = Reflect.getMetadata('path', target.prototype, key)
      const method: Methods = Reflect.getMetadata('method', target.prototype, key)
      const middleware: RequestHandler = Reflect.getMetadata('middleware', target.prototype, key)
      const handler = target.prototype[key]
      const fullPath = root === '/' ? path : `${root}${path}`
      if (path && method) {
        if (middleware) {
          return router[method](fullPath, middleware, handler)
        }
        router[method](fullPath, handler)
      }
    }
  }
}
