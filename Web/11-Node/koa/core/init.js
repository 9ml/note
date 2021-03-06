const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManager {
  static initCore(app) {
    // 入口方法
    InitManager.app = app
    InitManager.initLoadRoutes()
    InitManager.loadHttpException()
    InitManager.loadConfig()
  }

  static initLoadRoutes() {
    // 导入此目录下所有模块，visit 表示每当加载一个模块时都会调用这个函数，并将这个模块作为参数传递过去
    requireDirectory(module, `${process.cwd()}/app/routes`, {
      visit: whenLoadModule
    })

    function whenLoadModule(router) {
      if (router instanceof Router) {
        InitManager.app.use(router.routes())
      }
    }
  }

  // 全局挂载 loadHttpException 方便但不推荐
  static loadHttpException() {
    global.errors = require('./httpException')
  }

  // 全局挂载 config 配置文件
  static loadConfig(path = '') {
    const configPath = path || `${process.cwd()}/config/config`
    global.config = require(configPath)
  }
}

module.exports = InitManager
