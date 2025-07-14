class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

let value = 99
// 使用 Object.defineProperty 给 Person 原型添加 age 属性, 并配置对应的 get 和 set 方法
Object.defineProperty(Person.prototype, 'age', {
  get() {
    return value
  },
  set(v) {
    value = v
  },
})

const man = new Person('张三', 16)

console.log(man)

export {}