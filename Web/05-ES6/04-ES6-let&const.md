# Let&Const

## Let

- 不能重复声明

```javascript
let age = 18
let age = 20 // 报错
```

- 块级作用域
  - 全局：`window`全局
  - 函数：函数体中
  - `eval`：`ES5`严格模式中
  - 块级作用域：`if、else、while、for`

```javascript
{
  let age = 18
}

console.log(age) // 报错
```

- 不存在变量提升
  - 声明但未赋值时会保存在临时死区中

```javascript
console.log(age) // 报错
let age = 18
```

- 不影响作用域链

```javascript
{
  let age = 18
  function fn() {
    console.log(age)
  }
  fn() // 18
}
```

## Const

> 常量：值不能修改的量

- 必须要有初始值

```javascript
const A // 报错
```

- 一般情况下常量名使用大写
  - 潜规则
- 常量的值不能修改
- 块级作用域
- 对于数组和对象的元素修改，不算对常量的修改，不会报错

```javascript
const TEAM = [1, 2, 3, 4]
TEAM.push(5) // 指向地址并没有改变，不会报错
```
