function State(target: object, propertyKey: string) {
  // let value: any
  let key = `__${propertyKey}`
  Object.defineProperty(target, propertyKey, {
    get() {
      // return value
      return this[key]
    },
    set(v) {
      console.log(`${propertyKey}的最新值是: ${v}`)
      this[key] = v
      // value = v
    },
    enumerable: true, // 可枚举性
    configurable: true // 可配置性
  })
}

class Person {
  name: string
  @State age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const man1 = new Person('张三', 18)
const man2 = new Person('李四', 20)

man1.age = 30
man2.age = 40
// console.log(man1.age, man2.age) // 40, 40
console.log(man1.age, man2.age) // 30, 40

export {}