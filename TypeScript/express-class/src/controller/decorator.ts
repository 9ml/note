import { Router } from 'express'

export const router = Router()

enum Method {
  get = 'get',
  post = 'post'
}

export function controller(target: any) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    const method: Method = Reflect.getMetadata('method', target.prototype, key)
    const handler = target.prototype[key]
    if (path && method && handler) {
      router[method](path, handler)
    }
  }
}

// export function get(path: string) {
//   return function(target: any, key: string) {
//     Reflect.defineMetadata('path', path, target, key)
//     Reflect.defineMetadata('method', 'get', target, key)
//   }
// }

// export function post(path: string) {
//   return function(target: any, key: string) {
//     Reflect.defineMetadata('path', path, target, key)
//     Reflect.defineMetadata('method', 'post', target, key)
//   }
// }

function getRequestDecorator(type: string) {
  return function(path: string) {
    return function(target: any, key: string) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', type, target, key)
    }
  }
}

export const get = getRequestDecorator('get')
export const post = getRequestDecorator('post')
export const put = getRequestDecorator('put')
export const del = getRequestDecorator('delete')
