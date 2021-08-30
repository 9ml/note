// 排序：每个文件都有 名字、大小、时间，都可以按照某个属性的值排序

function File(name, size, time) {
  this.name = name
  this.size = size
  this.time = time
}

let fn1 = new File('jack.mp4', '300M', '1996-06-24')
,   fn2 = new File('tom.mp4', '360M', '2007-01-24')
,   fn3 = new File('sun.mp4', '260M', '2012-12-21')
,   arr = [fn1, fn2, fn3]

function fn(attr) {
  return function getSort(x, y) {
    if (x[attr] > y[attr]) {
      return -1
    } else if (x[attr] === y[attr]) {
      return 0
    } else {
      return 1
    }
  }
}

arr.sort(fn('size'))

console.log(arr)
