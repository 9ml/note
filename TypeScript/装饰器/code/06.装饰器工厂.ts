type Constructor = new (...args: any[]) => {}

interface Person {
  introduce(): void
}

// 装饰器工厂, 接收一个参数 n, 返回一个类装饰器
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

@LogInfo(3)
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
man.introduce()

export {}