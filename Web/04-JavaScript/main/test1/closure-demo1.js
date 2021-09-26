/**
 * 闭包小案例
 */

// function fn1() {
//   var num = 10
//   num ++
//   return num
// }
// // 每次调用 num 都重新声明
// // fn1() // 11
// // fn1() // 11
// // fn1() // 11
// console.log(fn1()) // 11
// console.log(fn1()) // 11
// console.log(fn1()) // 11

function fn2() {
  var num = 10
  return function () {
    num ++
    return num
  }
}

// fn2 函数只调用了一次，但里面的匿名函数执行了三次
var ff = fn2()
console.log(ff()) // 11 调用的是 fn2 函数中的匿名函数
console.log(ff()) // 12 调用的是 fn2 函数中的匿名函数
console.log(ff()) // 13 调用的是 fn2 函数中的匿名函数
