/**
 * 递归：函数中调用函数本身，递归一定要有结束的条件，否则就是死循环。
 * 轻易不要使用，效率低
 */
// var i = 0
// function fn(params) {
//   i ++
//   if (i < 5) {
//     fn()
//   }
//   console.log('111111111')
// }

// fn()

// 求 n 个数字的和
var sum1 = 0
for(var i = 1;i <= 5;i++){
  sum1 += i
}
console.log(sum1)

var sum2 = 0
function sumFn(num) {
  sum2 += num
  num --
  if (num > 0) {
    sumFn(num)
  }
}
sumFn(5)
console.log(sum2)

function getSum(n) {
  if (n == 1) {
    return 1
  }
  return n + getSum(n - 1)
}
console.log(getSum(5))

// 递归案例：求一个数字各个位数上的数字的和：123 = 1 + 2 + 3 = 6
function getEverySum(x) {
  if (x < 10) {
    return x
  }
  return x%10 + getEverySum(parseInt(x / 10))
}

console.log(getEverySum(23))

// 递归实现斐波那契数列
function getFib(x) {
  if (x == 1 || x == 2) {
    return x
  }
  return getFib(x - 1) + getFib(x - 2)
}
