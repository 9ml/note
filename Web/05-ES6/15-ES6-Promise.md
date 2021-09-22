# Promise

> `Promise`是`ES6`引入的异步编程的新解决方案
> 语法上`Promise`是一个构造函数，用来封装异步操作并可以获取其成功或失败的结果

- `Promise`构造函数：`Promise(excutor){}`
- `Promise.prototype.then()`方法
- `Promise.prototype.catch()`方法

## 实例化

- 实例化`Promise`对象
  - `pending`
  - `fulfilled`
  - `rejected`

```javascript
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('数据读取成功')
    // reject('数据读取失败')
  }, 1000)
})

p.then(res => {
  console.log(res)
}, err => {
  console.error(err)
})
```

## then

> `then`方法的返回结果是`Promise`对象，对象的状态由回调函数的执行结果决定

- 如果回调函数中返回的结果是非`Promise`类型的属性，状态码为成功，返回值为成功对象的值

```javascript
p.then(res => {
  console.log(res)
  return '123'
}, err => {
  console.error(err)
})

console.log(p) // 123
```

- 如果回调函数中返回的结果是`Promise`类型的对象

```javascript
p.then(res => {
  console.log(res)
  return new Promise((resolve, reject) => {
    resolve('成功')
  })
}, err => {
  console.error(err)
}).then(res => {
  console.log(res)
})
```

## catch

```javascript
p.catch(err => {
  console.error(err)
})
```
