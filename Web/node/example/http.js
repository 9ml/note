// 在 Node 中提供了一个核心模块：http，此模块可以很轻松的构建一个WEB服务器。

// 1. 加载 http 核心模块
const http = require('http')
const fs = require('fs')

// 2. 使用 http.createServer() 方法创建一个 Web 服务器实例
const server = http.createServer()

// 3. 提供服务：对数据的服务
// 发起请求 -> 接收请求 -> 处理请求 -> 发送响应
// 注册 request 请求事件：当客户端发起请求，就会触发服务器的 request 请求事件，执行回调处理函数。
// request 请求事件处理函数需要接收两个参数： request：请求对象；response：响应对象
server.on('request', function(request, response) {
  // 设置编码：Content-Type 用来设置发送的数据类型。
  // 文件类型对照表：https://tool.oschina.net/commons
  // 不同的资源文件对应的 Content-Type 是不一样的
  // 一般只为字符数据指定编码，图片不需要指定编码
  // response.setHeader('Content-Type', 'text/plain; charset=utf-8')
  // console.log('收到请求, 请求路径是：' + request.url)

  // response 对象有一个 write 方法，可以给客户端发送响应数据，可以多次使用，但是最后一定要使用 end 来结束响应，否则客户端会一直等待。
  // response.write('hello')
  // response.write(' NodeJS')
  // response.end(request.url)

  // url：统一资源定位符，最终是要对应到一个资源的
  if (request.url == '/') {
    // 读取文件
    fs.readFile('./index.html', function(err, data) {
      if (err) {
        response.setHeader('Content-Type', 'text/plain; charset=utf-8')
        response.end('文件读取失败，请稍后再试')
      } else {
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.end(data)
      }
    })
  } else {
    // response.end 只支持二进制和字符串两种数据类型
    response.end('111')
  }
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 进行访问')
})
