interface CalcInterface {
  cacl: (x: number, y: number) => number
}

class Person {
  // 代理
  delegate: CalcInterface;
  constructor(delegate: CalcInterface) {
    this.delegate = delegate
  }
  // 计算
  getRes(a: number, b: number) {
    let res = this.delegate.cacl(a, b)
    console.log(res)
  }
}

class DoneA implements CalcInterface {
  cacl(x: number, y: number) {
    return x + y
  }
}

class DoneB implements CalcInterface {
  cacl(x: number, y: number) {
    return x - y
  }
}

// 创建实例传入代理
const man = new Person(new DoneA())
man.getRes(3, 4)

export {}
