const { HttpException } = require('../core/httpException')
/**
 * 全局异常处理中间件
 * 1. 全局监听错误
 * 2. 输出一段有意义的提示信息
 * AOP 面向切面编程
 */
const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    /**
     * error 堆栈调用信息
     * error 简化 清晰明了的信息返回给前端
     * HTTP Status Code: 2xx,4xx,5xx...
     * message
     * error_code 开发者自己定义
     * request url 当前请求的 url
     * 
     * 已知型错误：数据类型错误，可判断并处理错误
     * 未知型错误：程序潜在错误，无意识，开发者不知道，如连接数据库不正确
     */
    // ctx.body = '服务器出错'
    // if (error.errorCode) {
    //   ctx.body = {
    //     msg: error.message,
    //     error_code: error.errorCode,
    //     request: error.requestUrl
    //   }
    //   ctx.status = error.status
    // }

    if (error instanceof HttpException) {
      ctx.body = {
        message: error.message,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.status
    }
  }
}

module.exports = catchError
