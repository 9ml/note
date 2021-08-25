class HttpException extends Error {
  constructor(message = '请求成功', errorCode = 10000, status = 200, ) {
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

module.exports = {
  HttpException,
  ParameterException
}
