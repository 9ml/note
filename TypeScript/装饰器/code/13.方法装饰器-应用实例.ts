function Logger(_target: object, propertyKey: string, descriptor: PropertyDescriptor) {
  // 存储原始方法
  const original = descriptor.value
  // 替换原始方法
  descriptor.value = function(...args: any[]) {
    console.log(`${propertyKey}开始执行...`)
    // 执行原函数
    const res = original.call(this, ...args)
    console.log(`${propertyKey}执行完毕...`)
    return res
  }
}

function Validate(maxAge: number) {
  return function(_target: object, _propertyKey: string, descriptor: PropertyDescriptor) {
    // 保存原始方法
    const original = descriptor.value
    // 替换原始方法
    descriptor.value = function(...args: any[]) {
      if (args[0] > maxAge) {
        throw new Error('年龄非法!')
      }
      return original.apply(this, args)
    }
  }
}

class Person {
  constructor(
    public name: string,
    public age: number
  ) { }
  // 实例方法
  @Logger speak() {
    console.log(`我是${this.name}, 今年${this.age}岁`)
  }
  // 静态方法
  @Validate(120) static isAdult(age: number) {
    return age >= 18
  }
}

const man = new Person('张三', 20)
man.speak()

export {}