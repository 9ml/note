const http = require('http')

const server = http.createServer()

server.on('request', function(req, res) {
  res.end(req.url)
})

server.listen(3000, function() {
  console.log('服务器启动成功，请访问http://127.0.0.1:3000/')
})
