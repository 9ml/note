// 显式的any: 明确声明 a 是 any
let a: any
a = 100
a = 'Halo'
a = false

// 隐式的any: 没有明确的表示 b 的类型是 any, TS 主动推断出的 any
let b

b = 100
b = 'Halo'
b = false

// 注意: any 类型的变量可以赋值给任意类型的变量
let x: string

x = a
console.log(x) // false

export {}
