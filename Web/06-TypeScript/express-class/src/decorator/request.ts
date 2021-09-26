import { CrowllerController, LoginController } from '../controller'

export enum Methods {
  get = 'get',
  post = 'post',
  put = 'put',
  del = 'delete'
}

function getRequestDecorator(type: Methods) {
  return function(path: string) {
    return function(target: CrowllerController | LoginController, key: string) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', type, target, key)
    }
  }
}

export const get = getRequestDecorator(Methods.get)
export const post = getRequestDecorator(Methods.post)
export const put = getRequestDecorator(Methods.put)
export const del = getRequestDecorator(Methods.del)
