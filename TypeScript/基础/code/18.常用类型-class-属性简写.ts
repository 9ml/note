class Person {
  /* 简写前
  public name: string
  public age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  */

  // 简写后
  constructor(public name: string, public age: number) {
    
  }
}

export {}