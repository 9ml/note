/**
 * 闭包小案例：产生多个相同的随机数
 */

function numRandom() {
  var num = parseInt(Math.random() * 10 + 1)
  console.log(num)
}
// 三次不同的随机数
numRandom()
numRandom()
numRandom()







function random() {
  var num = parseInt(Math.random() * 10 + 1);
  return function () {
    console.log(num)
  }
}
var getNum = random()
// 三次相同的随机数
getNum()
getNum()
getNum()

