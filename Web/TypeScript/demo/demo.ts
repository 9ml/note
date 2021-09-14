// 静态类型
let num = 123
// num = '123'

/**
 * 编译时提示错误
 * 语法提示
 * 直观的看出类型声明
 */
// type Point = {
//   x: number,
//   y: number
// }
interface Point {
  x: number,
  y: number
}

function demo(data: Point): number {
  return Math.sqrt(data.x ** 2 + data.y ** 2)
}

let res = demo({x: 1, y:13})
console.log(res)

function add({x, y}: {x: number, y: number}): number {
  return x + y
}

console.log(add({x: 1, y: 2}))


const func1 = (str: string) => {
  return +str
}

const func2: (str: string) => number = (str) => {
  return +str
}

console.log(func2('123.2'))


const arr2:(number | string)[] = [1, '2', 3]
const objArr: { name: string, age: number }[] = [ {name: 'Tom', age: 18} ]


const user = ['Dell', 'male', 18]



