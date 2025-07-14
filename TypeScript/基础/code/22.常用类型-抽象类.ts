// 声明抽象类
abstract class Package {
  // 构造器
  constructor(public weight: number) {}
  // 声明抽象方法
  abstract calculate(): number
  // 具体方法
  printPackage() {
    console.log(`包裹重量为: ${this.weight}kg, 运费为: ${this.calculate()}元`)
  }
}

// 标准
class StandardPackage extends Package {
  constructor(
    weight: number,
    public unitPrice: number
  ) {
    super(weight)
  }
  calculate(): number {
    return this.weight * this.unitPrice
  }
}

const sp = new StandardPackage(10, 5)
sp.printPackage()


// 特快
class ExpressPackage extends Package {
  constructor(
    weight: number,
    public unitPrice: number,
    public additional: number,
  ) {
    super(weight)
  }
  calculate(): number {
    if (this.weight > 10) {
      return 10 * this.unitPrice + (this.weight - 10) * this.additional
    }
    return this.weight * this.unitPrice
  }
}

const ep = new ExpressPackage(16, 10, 2)
ep.printPackage()


export {}