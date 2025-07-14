function CustomString(target: Function) {
  target.prototype.toString = function() {
    return JSON.stringify(this)
  }
  // 封锁 target 的原型链属性
  Object.seal(target.prototype)
}


@CustomString
class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const man = new Person('张三', 18)
// console.log(man.toString()) // [object Object]
// console.log(JSON.stringify(man)) // "{"name": "张三", "age": 18}"

console.log(man.toString()) // "{"name": "张三", "age": 18}"

interface Person {
  x: number
}
// 封锁后不能向原型上添加属性
Person.prototype.x = 99

export {}
