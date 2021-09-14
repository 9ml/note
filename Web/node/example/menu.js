const http = require('http')
const fs = require('fs')

const server = http.createServer()
const wwwDir = 'D:/workspace'

server.on('request', (req, res) => {
  let filePath = '/index.html'
  if (req.url !== '/') {
    filePath = req.url
  }

  fs.readFile(wwwDir + filePath, (err, data) => {
    if (err) {
      return  res.end('404NotFound')
    }
    res.end(data)
  })
})

server.listen(3000, () => {
  console.log('Server is running...')
})
