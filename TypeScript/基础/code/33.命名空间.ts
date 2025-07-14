namespace aa {
  export class Person {
    constructor(
      public name: string,
      public age: number
    ){ }
  }
}

namespace bb {
  export class Person {
    constructor(
      public gender: string,
      public email: string
    ) {}
  }
}

let p1 = new aa.Person('张三', 18)
let p2 = new bb.Person('男', '123@qq.com')

export {}
