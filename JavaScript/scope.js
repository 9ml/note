/**
 * 变量：局部变量和全局变量
 * 作用域：变量的使用范围，局部作用域、全局作用域
 * JS 中没有块级作用域：一对大括号中定义的变量
 * 函数中定义的变量是局部变量
 * 
 * 
 * 
 * 
 */

while (true) {
  var num1 = 10
  break;
}
console.log(num1) // 10

{
  var num2 = 100
}
console.log(num2) // 100

if (true) {
  var num3 = 1000
}
console.log(num3) // 1000

function fn() {
  var num4 = 10000
}
// console.log(num4) // ReferenceError: num4 is not defined


/**
 * 作用域链：变量的使用从里到外层层的搜索，搜索到了就可以直接使用
 */

var num5 = 20 // 作用域链级别：0
function fn1() {
  var num5 = 200 // 作用域链级别：1
  fn2()
  function fn2() {
    // var num5 = 2000 // 作用域链级别：2
    console.log(num5) // 2000 // 200
  }
}

fn1()

/**
 * 预解析：在浏览器解析代码之前，把变量的声明和函数的声明提前（提升）到该作用域的最上面
 */

console.log(num6)
var num6 = 30 // undefined

fc1() // Hello World
function fc1() {
  console.log('Hello World')
}

// var fc2 提前了
fc2() // TypeError: fc2 is not a function
var fc2 = function () {
  console.log('111111')
}
