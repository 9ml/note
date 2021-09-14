// 异常链条
// return false | null 会丢失异常信息

/**
 * 全局异常处理：监听异常机制
 */

function fn1() {
  try {
    fn2()
  } catch (error) {
    throw error
  }
}

function fn2() {
   // 判断异常
  // const err = fn3()
  // if (!err) { }
  try {
    fn3()
  } catch (error) {
    throw error
  }
}

console.log(fn3())

function fn3() {
  // return false
  // 代码大全2
  // try {
  //   // console.log(1/0);
  //   console.log(1/a)
  // } catch (error) {
  //   throw error
  // }
  // return 'success'

  // try catch 只对同步有效
  setTimeout(function() {
    throw new Error('error')
  }, 1000)
}

// 分为三种情况：
// 1. 没有发生异常，正确返回结果
// 2. 没有发生异常，不需要返回结果
// 3. 发生了异常


// 函数设计
// 1. 判断出异常，return false | null
// 2. throw err
