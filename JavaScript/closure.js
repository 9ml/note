/**
 * 闭包
 * 概念：函数A中有一个函数B，函数B中可以访问函数A中的变量或者数据，此时就形成了闭包。
 * 模式：1. 函数模式的闭包。2. 对象模式的闭包。
 * 作用：缓存数据，延迟作用域链。
 * 优点：缓存数据。
 * 缺点：缓存数据，没有及时的释放，占用内存空间。
 * 应用：
 * 如果想要缓存数据，就把这个数据放在外层的函数和里层的函数之间。
 */

// // 函数模式的闭包：函数中有一个函数
// function fn1() {
//   var num = 10
//   function fn2() {
//     console.log(num)
//   }
//   fn2()
// }
// fn1()

// // 对象模式的闭包：函数中有一个对象
// function fn3() {
//   var num = 20
//   var obj = {
//     age: num
//   }
//   console.log(obj.age)
// }
// fn3()

// function f1() {
//   var num = 10
//   return function () {
//     console.log(num)
//   }
// }
// f1()() // 10

// function f2() {
//   var num = 100
//   return {
//     age: num
//   }
// }
// console.log(f2().age) // 100

