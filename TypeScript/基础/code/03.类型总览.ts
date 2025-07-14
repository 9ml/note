let strA: string // 官方推荐写法
strA = 'Halo'
// strA = new String("World") // 不能将类型“String”分配给类型“string”。 “string”是基元，但“String”是包装器对象。如可能首选使用“string”

let strB: String
strB = 'Halo'
strB = new String("World")

console.log(typeof strA) // string
console.log(typeof strB) // object

export {}
