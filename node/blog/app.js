const express = require('express')
const path = require('path')

const app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/login', (req, res) => {
  res.render('login.html')
})

app.get('/register', (req, res) => {
  res.render('register.html')
})

app.get('/error', (req, res) => {
  res.render('error.html')
})

app.get('/details', (req, res) => {
  res.render('details.html')
})

app.listen(3000, () => {
  console.log('Server is running.')
})
