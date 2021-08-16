/**
 * router.js 路由模块
 * 职责：
 *    处理路由
 *    根据不同的请求方法及路径处理响应
 */

const fs = require('fs')
const express = require('express')

const handleFile = require('./public/js/file')

// 1. 创建一个路由容器
const router = express.Router()

// 2. 把路由挂载到 router 路由容器中

// 首页数据渲染
router.get('/', (req, res) => {
  // readFile 第二个参数是可选的，utf8 编码格式，也可以通过 data.toString() 转换
  // fs.readFile('./db.json', 'utf8', (err, data) => {
  //   if (err) {
  //     return res.status(500).send('Server Error')
  //   }
  //   res.render('index.html', {
  //     teachers: JSON.parse(data).teachers,
  //     students: JSON.parse(data).students
  //   })
  // })

  handleFile.read('./db.json', (err, data) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.render('index.html', {
      teachers: data.teachers,
      students: data.students
    })
  })
})

// 添加学生页面渲染
router.get('/add', (req, res) => {
  res.render('add.html')
})

// 添加学生
router.post('/add', (req, res) => {
  console.log(req.body)
})

// 3. 把 router 导出
module.exports = router


// 自己封装函数，推荐使用 express 提供的方法，如上 ↑
// module.exports = (app) => {
//   app.get('/', (req, res) => {
//     // readFile 第二个参数是可选的，utf8 编码格式，也可以通过 data.toString() 转换
//     fs.readFile('./db.json', 'utf8', (err, data) => {
//       if (err) {
//         return res.status(500).send('Server Error')
//       }
//       res.render('index.html', {
//         teachers: JSON.parse(data).teachers,
//         students: JSON.parse(data).students
//       })
//     })
//   })
// }
