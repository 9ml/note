class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  set name(value) {
    this._name = value
  }
  get name() {
    return this._name
  }
}

class Student extends Person {
  logInfo() {
    console.log(this.name)
  }
}

const p = new Student('Tom')
p.logInfo()

export {}