function decorator() {
  return function<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = '9ml'
      getName() {
        return this.name
      }
    }
  }
}

 
const Dec = decorator()(class {
  name: string
  constructor(name: string) {
    this.name = name
  }
})

const dec = new Dec('Tom')
console.log(dec.getName())
