// 在 Node 中提供了一个核心模块：http，此模块可以很轻松的构建一个WEB服务器。


// 1. 加载 http 核心模块
const http = require('http')

// 2. 使用 http.createServer() 方法创建一个 Web 服务器实例
const server = http.createServer()

// 3. 提供服务：对数据的服务
// 发起请求 -> 接收请求 -> 处理请求 -> 发送响应
// 注册 request 请求事件：当客户端发起请求，就会触发服务器的 request 请求事件，执行回调处理函数。
// request 请求事件处理函数需要接收两个参数： request：请求对象；response：响应对象
server.on('request', function(request, response) {
  console.log('收到请求, 请求路径是：' + request.url)

  // response 对象有一个 write 方法，可以给客户端发送响应数据，可以多次使用，但是最后一定要使用 end 来结束响应，否则客户端会一直等待。
  // response.write('hello')
  // response.write(' NodeJS')
  response.end(request.url)
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log('服务器启动成功，可以通过 http://127.0.0.1:3000/ 进行访问')
})
