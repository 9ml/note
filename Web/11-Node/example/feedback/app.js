const http = require('http')
const fs = require('fs')
const template = require('art-template')
const url = require('url')

let comments = [
  {
    name: '张三',
    msg: '今天天气不错',
    date: '2020-09-02'
  },
  {
    name: '张四',
    msg: '明天天气不错',
    date: '2020-09-03'
  },
  {
    name: '张五',
    msg: '今天天气不错',
    date: '2020-09-04'
  },
  {
    name: '张六',
    msg: '今天天气不错',
    date: '2020-09-05'
  }
]

http.createServer((req, res) => {
  let parseObj = url.parse(req.url, true)
  let pathName = parseObj.pathname  // 不包含路径拼接的内容
  if (pathName === '/') {
    fs.readFile('./views/index.html', (err, data) => {
      if (err) {
        return res.end('404NotFound')
      }

      let htmlStr = template.render(data.toString(), {
        comments
      })
      res.end(htmlStr)
    })
  } else if (pathName === '/post') {
    fs.readFile('./views/post.html', (err, data) => {
      if (err) {
        return res.end('404NotFound')
      }
      res.end(data)
    })
  } else if (pathName.indexOf('/public/') === 0) {  // 统一处理 开放 public 目录
    fs.readFile('.' + pathName, (err, data) => {
      if (err) {
        return res.end('404NotFound')
      }
      res.end(data)
    })
  } else if (pathName === '/postComment') {
    // console.log('收到表单请求', parseObj.query)
    // res.end(JSON.stringify(parseObj.query))

    let getComment = parseObj.query
    getComment.date = new Date()
    comments.unshift(getComment)
    // 服务端重定向：1. 状态码设置 302 临时重定向。2. 在响应头中通过 Location 告诉客户端往哪重定向
    // 如果客户端发现接收到服务器响应的状态码是302，就会自动去响应头的 Location，然后对改地址发起新的请求
    // res.writeHead(302, {
    //   'Location': '/'
    // })
    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  } else {
    res.end('找不到此页面')
  }
}).listen(3000, () => {
  console.log('Server is running...')
})
