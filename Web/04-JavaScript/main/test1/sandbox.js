/**
 * 沙箱：环境、黑盒。
 * 在一个虚拟的世界中模拟真实世界做实验，试验结果与真实世界的结果是一样的，但不会影响真实世界。
 */

(function () {
  var num = 10
  console.log(num)
})()

(function () {
  var num = 20
  console.log(num + 10)
}())
