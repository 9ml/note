// 定义 Constructor 类型, 其含义是构造类型
type Constructor = new (...args: any[]) => {}

interface User {
  getTime(): string
}

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

@LogTime
class User {
  constructor(
    public name: string,
    public age: number
  ) {}
  speak() {
    console.log(`我是${this.name}, 今年${this.age}岁`)
  }
}

const man = new User('张三', 17)
console.log(man.getTime())

export {}
