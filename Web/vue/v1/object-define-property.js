let num = 19

let person = {
  name: 'Tom',
  sex: '男',
  // age: num
}

// num = 20
// console.log(person.age) // 19，如何让 age 跟随 num 的变化而变化？

// 双向数据绑定
Object.defineProperty(person, 'age', {
  value: 18, // 设置 age: 18 属性，默认不可枚举（遍历）、不可修改、不可删除
  enumerable: true, // 控制属性是否可以被枚举 默认 false
  writable: true, // 控制属性是否可以被修改 默认 false
  configurable: true, // 控制属性是否可以被删除 默认 false

  // 当读取 person 的 age 属性时，get 函数（getter）就会被调用，返回值就是 age 的值
  get: function() {
    return num
  },

  // 当修改 person 的 age 属性时，set 函数（setter）就会被调用，且会受到修改的具体值
  set: function(value) {
    console.log('修改 age', value)
    num = value
  }
})


// 数据代理：通过一个对象代理另一个对象中属性的操作：读/写

let obj1 = {x: 100}
let obj2 = {y: 200}

Object.defineProperty(obj2, 'x', {
  get() {
    return obj1.x
  },
  set(value) {
    obj1.x = value
  }
})
