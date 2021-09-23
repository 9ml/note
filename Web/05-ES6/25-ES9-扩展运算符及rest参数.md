# 对象展开

> `ES9`扩展运算符及`rest`参数
> `rest`参数与`spread`扩展运算符在`ES6`中已经引入，不过`ES6`中只针对数组
> 在`ES9`中为对象提供了像数组一样的`rest`参数和扩展运算符

```javascript
function connect({host, port, ...user}) {
  console.log(host) // localhost
  console.log(port) // 3306
  console.log(user) // { username: 'root', username: 'root', type: 'master' }
}

connect({
  host: 'localhost',
  port: 3306,
  username: 'root',
  username: 'root',
  type: 'master'
})
```

- 对象合并

```javascript
let user = {
  name: '9ml',
  age: 18,
  sex: '男'
}
let info = {
  class: '三年二班',
  study: '物理',
  like: '女'
}

let userInfo = {...user, ...info}
```
