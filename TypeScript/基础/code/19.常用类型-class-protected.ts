class Person {
  constructor(
    protected name: string,
    protected age: number
  ) {}
  protected getDetail() {
    // 类内部可以访问
    return `我叫${this.name}, 今年${this.age}岁`
  }
  introduce() {
    console.log(this.getDetail())
  }
}

const man = new Person('Tom', 18)

// 类外部无法访问
// man.name
// man.age
// man.getDetail()

class Student extends Person {
  study() {
    this.introduce()
    // 子类可以访问
    console.log(`${this.name}正在学习...`)
  }
}

export {}