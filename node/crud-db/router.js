/**
 * router.js 路由模块
 * 职责：
 *    处理路由
 *    根据不同的请求方法及路径处理响应
 */

const express = require('express')

const Student = require('./public/js/file')

// 1. 创建一个路由容器
const router = express.Router()

// 2. 把路由挂载到 router 路由容器中

// 首页数据渲染
router.get('/', (req, res) => {
  Student.find((err, data) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.render('index.html', {
      teachers: [],
      students: data
    })
  })
})

// 添加学生页面渲染
router.get('/add', (req, res) => {
  res.render('add.html')
})

// 添加学生
router.post('/add', (req, res) => {
  new Student(req.body).save((err) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.redirect('/')
  })
})

// 修改学生页面渲染
router.get('/edit', (req, res) => {
  Student.findById(req.query.id, (err, data) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.render('edit.html', {
      data
    })
  })
})

// 修改学生
router.post('/edit', (req, res) => {
  Student.findByIdAndUpdate(req.body.id, req.body, (err) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.redirect('/')
  })
})

// 删除学生
router.get('/delete', (req, res) => {
  Student.findByIdAndRemove(req.query.id, (err) => {
    if (err) {
      return res.status(500).send('Server Error')
    }
    res.redirect('/')
  })
})


// 3. 把 router 导出
module.exports = router
