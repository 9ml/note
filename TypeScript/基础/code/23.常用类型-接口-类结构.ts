// PersonInterface 接口
interface PersonInterface {
  name: string
  age: number
  speak(n: number): string
}

class Person implements PersonInterface {
  constructor(
    public name: string,
    public age: number
  ) {}

  speak(n: number): string {
    console.log(n)
    return `我叫${this.name}, 今年${this.age}岁`
  }
}

const man = new Person('Tom', 18)
man.speak(3)

export {}