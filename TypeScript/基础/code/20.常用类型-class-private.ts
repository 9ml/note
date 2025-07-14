class Person {
  constructor(
    public name: string,
    public age: number,
    private IDCard: string
  ) {}
  getInfo() {
    return `我叫${this.name}, 今年${this.age}岁`
  }
  private getPrivateInfo() {
    // 类内部可以访问
    return `身份证号码: ${this.IDCard}`
  }
  getFullInfo() {
    return `${this.getInfo()}, ${this.getPrivateInfo()}`
  }
}

const man = new Person('Tom', 18, '110114567544323454')
// 类外部无法访问
// man.IDCard
// man.getPrivateInfo()

class Student extends Person {
  study() {
    // 子类无法访问
    // console.log(this.IDCard)
    // this.getPrivateInfo()
  }
}

export {}