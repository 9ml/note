const express = require('express')
const md5 = require('blueimp-md5')

const router = express.Router()

const User = require('./models/user')

// 首页渲染
router.get('/', (req, res) => {
  // 读取用户登录状态
  res.render('index.html', {
    user: req.session.user
  })
})

// 登录页渲染
router.get('/login', (req, res) => {
  res.render('login.html')
})

// 处理登录请求
router.post('/login', async (req, res) => {
  try {
    if (!await User.findOne({ email: req.body.email })) {
      return res.status(200).json({
        error: 1,
        message: '邮箱不存在'
      })
    }

    await User.findOne({
      email: req.body.email,
      password: md5(md5(req.body.password))
    }).then(data => {
      if (!data) {
        return res.status(200).json({
          error: 2,
          message: '密码不正确'
        })
      }

      // 登录成功，记录登录状态
      req.session.user = data
      return res.status(200).json({
        error: 0,
        message: '登录成功'
      })
    })
  } catch(err) {
    res.status(500).json({
      error: 500,
      message: err.message
    })
  }
})

// 注册页渲染
router.get('/register', (req, res) => {
  res.render('register.html')
})

// 处理注册请求
router.post('/register', async (req, res) => {
  try {
    if (await User.findOne({ email: req.body.email })) {
      return res.status(200).json({
        error: 1,
        message: '邮箱已存在'
      })
    }

    if (await User.findOne({ name: req.body.name })) {
      return res.status(200).json({
        error: 2,
        message: '用户名已存在'
      })
    }

    // 对密码进行 MD5 重复加密
    req.body.password = md5(md5(req.body.password))
    await new User(req.body).save().then(data => {
      // 注册成功，通过 session 记录用户的登录状态
      req.session.user = data
    })
    res.status(200).json({
      error: 0,
      message: '注册成功'
    })
    // 服务端重定向只对同步请求有效，对异步请求无效
    // res.redirect('/')

    // 注册成功，通过 session 记录用户的登录状态
    // req.session.isLogin = true
    // req.session.user = req.body

  } catch (err) {
    res.status(500).json({
      error: 500,
      message: err.message
    })
  }
})

// 退出登录
router.get('/logout', (req, res) => {
  // 清除登录状态
  req.session.user = null
  // 重定向到登录页
  res.redirect('/login')
})

router.get('/error', (req, res) => {
  res.render('error.html')
})

router.get('/details', (req, res) => {
  res.render('details.html')
})

// router.post('/register', (req, res) => {
//   User.findOne({
//     $or: [
//       { email: req.body.email },
//       { name: req.body.name }
//     ]    
//   }, (err, data) => {
//     if (err) {
//       return res.status(500).json({
//         error: 500,
//         message: '服务端错误'
//       })
//     }
//     console.log(data)
//     // 邮箱或昵称已存在
//     if (data) {
//       return res.status(200).json({
//         error: 1,
//         message: '用户名或邮箱已存在'
//       })
//     }
//     // 对密码进行 MD5 重复加密
//     req.body.password = md5(md5(req.body.password))
//     new User(req.body).save((err, data) => {
//       if (err) {
//         return res.status(500).json({
//           error: 500,
//           message: '服务端错误'
//         })
//       }
//       res.status(200).json({
//         error: 0,
//         message: '注册成功'
//      })
//     })
//   })
// })

module.exports = router
