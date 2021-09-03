
/**
 * 访问器的装饰器，参数与方法的相同
 * get
 * set
 */

 function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = false
}

class TestB {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  get name() {
    return this._name
  }
  @visitDecorator
  set name(name: string) {
    this._name = name
  }
}

const testB = new TestB('9ml')
// testB.name = '123'
console.log(testB.name)
