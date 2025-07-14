interface Person {
  introduce: () => void
  getTime: () => string
}
type Constructor = new (...args: any[]) => {}

// 装饰器
function CustomString(target: Constructor) {
  target.prototype.toString = function() {
    return JSON.stringify(this)
  }
  // 封锁 target 的原型链属性
  Object.seal(target.prototype)
}

// 装饰器工厂
function LogInfo(n: number) {
  // 返回的是装饰器
  return function (target: Constructor) {
    target.prototype.introduce = function() {
      for (let i = 0; i < n; i++) {
        console.log(`我是${this.name}, 今年${this.age}岁`)
      }
    }
  }
}

// 装饰器
function LogTime<T extends Constructor>(target: T) {
  return class extends target {
    createTime: Date;
    constructor(...args: any[]) {
      super(...args)
      this.createTime = new Date()
    }
    getTime() {
      return `该对象创建时间为: ${this.createTime}`
    }
  }
}

@CustomString
@LogInfo(3)
@LogTime
class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
  speak() {
    console.log('Halo')
  }
}

const man = new Person('张三', 18)
man.speak()
console.log(man.toString())
man.introduce()
console.log(man.getTime())

export {}