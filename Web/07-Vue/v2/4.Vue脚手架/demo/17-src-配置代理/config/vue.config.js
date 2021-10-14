module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js'
    }
  },
  lintOnSave: false, // 关闭语法检查
  // 开启代理服务器 => 方式一
  // devServer: {
  //   proxy: 'https://www.baidu.com'
  // },
  // 开启代理服务器 => 方式二
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        pathRewrite: {'^/api': ''},
        ws: true, // 支持 websocket，默认 true
        changeOrigin: true // 控制请求头中的 host 值，默认 true
      },
      '/demo': {
        target: 'https://www.jd.com',
        pathRewrite: {'^/demo': ''},
        ws: true, // 支持 websocket，默认 true
        changeOrigin: true // 控制请求头中的 host 值，默认 true
      }
    }
  }
}
