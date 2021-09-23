# async & await

> `async`和`await`两种语法结合可以让异步代码像同步代码一样

## async

- `async`函数的返回值为`Promise`对象
  - 如果返回的结果不是一个`Promise`对象，则这个函数的返回结果是一个成功的`Promise`
- `Promise`对象的结果由`async`函数执行的返回值决定

```javascript
async function fn() {
  // 返回一个字符串，不是一个 Promise 对象，结果就是一个成功的 Promise
  return 'Hello'
  // 抛出错误，返回的结果是一个失败的 Promise
  throw new Error('出错了')
  // 返回的是一个 Promise 对象
  return new Promise((resolve, reject) => {
    resolve('成功')
    reject('失败')
  })
}
// 调用 then 方法
fn().then(res => {
  console.log(res)
}, err => {
  console.log(err)
})
```

## await

- `await`必须写在`async`函数中
- `await`右侧的表达式一般为`Promise`对象
- `await`返回的是`Promise`成功的值
- `await`的`Promise`失败了就会抛出异常，需要通过`try...catch`捕获处理

```javascript
// 创建 Promise 对象
const p = new Promise((resolve, reject) => {
  // resolve('成功')
  reject('失败')
})
// await 要放在 async 函数中
async function fn() {
  try {
    let res = await p
    console.log(res) // 成功
  } catch(err) {
    console.log(err) // 失败
  }
}
```
