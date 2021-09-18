# 对象添加Symbol类型的属性

> 给对象中添加`Symbol`类型的属性和方法，表示独一无二的

- 向对象中添加方法：`up、down`
  - 假设不知道对象`game`对象中有什么属性和方法，需要添加两新方法，不破坏对象原有的属性和方法

```javascript
let game = {
  name: '俄罗斯方块',
  age: 10,
  up() {
    console.log('向上')
  },
  down() {
    console.log('向下')
  }
}

// 声明一个对象
let methods = {
  up: Symbol(),
  down: Symbol()
}

// 添加方法
// 类似于 game['up']
game[methods.up] = function() {
   console.log('我可以向上移动')
}
game[methods.down] = function() {
   console.log('我可以向下移动')
}

// 调用
game[methods.up] // 我可以向上移动

let paly = {
  name: '9ml',
  [Symbol('say')]: function() {
    console.log('干净卫生')
  }
}
```

- [`Symbol`内置值](https://blog.csdn.net/c__dreamer/article/details/81873087)
