const url = require('url')

let obj = url.parse('http://127.0.0.1:3000/post?name=张三&msg=今天天气不错', true)

console.log(obj.query)
