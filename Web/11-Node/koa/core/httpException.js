class HttpException extends Error {
  constructor(message = 'OK', errorCode = 0, status = 200, ) {
    super()
    this.message = message
    this.errorCode = errorCode
    this.status = status
  }
}

class ParameterException extends HttpException {
  constructor(message, errorCode) {
    super()
    this.message = message || '参数错误'
    this.errorCode = errorCode || 10001
    this.status = 400
  }
}

class Success extends HttpException {
  constructor(message, errorCode) {
    super()
    this.code = 201
    this.message = message || 'OK',
    this.errorCode = errorCode || 0
  }
}

class NotFound extends HttpException {
  constructor(message, errorCode) {
    super()
    this.code = 404
    this.message = message || '资源未找到',
    this.errorCode = errorCode || 10000
  }
}

class AuthFailed extends HttpException {
  constructor(message, errorCode) {
    super()
    this.code = 401
    this.message = message || '授权失败',
    this.errorCode = errorCode || 10004
  }
}

class Forbbiden extends HttpException {
  constructor(message, errorCode) {
    super()
    this.code = 403
    this.message = message || '禁止访问',
    this.errorCode = errorCode || 10006
  }
}

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed,
  Forbbiden
}
