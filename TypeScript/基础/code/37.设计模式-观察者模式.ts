// 定义协议, 谁监听就要遵循这个规范
interface IObserver {
  nameChangeed: (newName: string) => void
}

class Person {
  private _name: string
  // 观察者数组
  observers: IObserver[]
  constructor(name: string, observers: IObserver[]) {
    this._name = name
    this.observers = observers
  }

  get name() {
    return this._name
  }

  set name(v) {
    this._name = v
    // 发生变化时遍历观察者数组, 给数组中的每一个观察者发送通知
    for(let i of this.observers) {
      i.nameChangeed(this._name)
    }
  }
}

class Test implements IObserver {
  nameChangeed(newName: string) {
    console.log(`监听到变化, name变为: ${newName}`)
  }
}

// 实例化传入观察者
let p = new Person('张三', [new Test()])
p.name = '李四'
// 监听到变化, name变为: 李四

export {}
