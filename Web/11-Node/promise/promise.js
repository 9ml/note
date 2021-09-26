// 为了解决以上编码的回调地狱嵌套，在 ES6 中新增了一个 API，Promise
// Promise 是一个构造函数

const fs = require("fs")

console.log(1)
// 1. 创建 Promise 容器，给别人一个承诺
// Promise 容器一旦创建就开始执行里面的代码，本身不是异步，里面的任务是异步的
let p1 = new Promise((resolve, reject) => {
  console.log(2)
  fs.readFile('./file/a.txt', 'utf8', (err, data) => {
    console.log(3)
    if (err) {
      // 承诺容器中的任务失败了
      // console.log(err)
      // 把容器的 Pending 状态改为 Rejected：失败
      reject(err)
    }
    // 承诺容器中的任务成功了
    // console.log(data)
    // 把容器的 Pending 状态改为 resolved：成功
    resolve(data)
  })
})

let p2 = new Promise((resolve, reject) => {
  fs.readFile('./file/b.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
})

let p3 = new Promise((resolve, reject) => {
  fs.readFile('./file/c.txt', 'utf8', (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(data)
  })
})

// p1 就是那个承诺
// 当 p1 成功了，然后（then）做指定的操作
// then 方法接收的 function 就是 Promise 容器中的 resolve 函数
p1.then((res) => {
  console.log(res)
  // 当前函数中 return 的结果就可以在后面的 .then 函数中接收到
  // return 'hello'
  // 可以 return 一个 Promise 对象，当 return 一个 Promise 对象时，后续的 then 函数的参数会作为 p2 的 resolve
  return p2
}, (err) => { // err 就是 Promise 容器中的 reject 函数
  console.log(err)
}).then(res => {
  console.log(res)
  return p3
}).then(res => {
  console.log(res)
})





console.log(4)
