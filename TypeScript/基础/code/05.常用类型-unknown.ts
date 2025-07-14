// 设置 a 的类型为 unknown
let a: unknown

// 以下对 a 赋值均正常
a = 100
a = 'Halo'
a = false

// 设置 x 的数据类型为 string
let x: string

// x = a // 不能将类型“unknown”分配给类型“string”。

// 第一种方法: 判断类型
if (typeof a === 'string') {
  x = a
}

// 第二种方法: 类型断言
x = a as string
x = <string>a


// ==================================
let strA: string
strA = 'Halo'
strA.toUpperCase() // 无警告

let strB: any
strB = 'Halo'
strB.toUpperCase() // 无警告

let strC: unknown
strC = 'Halo';
// strC.toUpperCase() // 警告: “strC”的类型为“未知”

// 使用类型断言强制指定 strC 的类型为 string
(strC as string).toUpperCase() // 无警告

export {}
