/**
 * Promise async await 三者是不分家的，async await 必须要有 Promise 支持
 * 如果一个异步函数返回的是一个 Promise，就可以使用 async await 来简化异常链条，异步的异常处理就与同步没有区别
 * 如果一个函数使用了 async await，那么所有的函数都需要使用 async await 
 * Koa 库 包 都是已经封装好的 Promise
 */
 async function fn1() {
  try {
    await fn2()
  } catch (error) {
    console.log(error)
  }
}

async function fn2() {
  try {
    await fn3()
  } catch (error) {
    console.log(error)
  }
}

function fn3 () {
  // 无法抛出异常
  // await setTimeout(function() {
  //   throw new Error('error')
  // }, 1000)

  return new Promise((resolve, reject) => {
    setTimeout(function() {
      const r = Math.random()
      if (r < 0.5) {
        reject('error')
      }
    }, 1000)
  })
}
