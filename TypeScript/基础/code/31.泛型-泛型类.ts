class Person<T> {
  constructor(
    public name: string,
    public age: number,
    public other: T
  ) {}
  speak() {
    console.log(`我叫${this.name}, 今年${this.age}岁`)
    console.log(this.other)
  }
}

const manA = new Person<number>('张三', 18, 250)

type Job = {
  title: string,
  company: string
}

const manB = new Person<Job>('李四', 10, {title: 'XXX', company: '哈哈哈'})

export {}
