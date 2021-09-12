let arr = [100, 21, 30, 55, 98, 76]

// 排序
// arr.sort()

// 升序
arr.sort(function (x, y) {
  if (x > y) {
    return 1
  } else if (x === y) {
    return 0
  } else {
    return -1
  }
})

console.log(arr)
