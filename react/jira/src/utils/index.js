import { useEffect, useState } from 'react'

export const isFalsy = value => value === 0 ? false : !value

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = obj => {
  // Object.assign({}, obj)
  const result = {...obj}
  Object.keys(result).forEach(key => {
    const value = result[key] // value 为 0 时会删除此属性
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback) => {
  useEffect(() => {
    callback()
  }, [])
}

// const debounce = (func, delay) => {
//   let timeout
//   return (...param) => {
//     if (timeout) {
//       clearTimeout(timeout)
//     }
//     timeout = setTimeout(function() {
//       func(...param)
//     }, delay)
//   }
// }

// const log = debounce(() => console.log('call'), 5000)

// log()
// log()
// log()

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounce] = useState(value)
  useEffect(() => {
    // 每次在 value 变化之后设置一个定时器
    const timeout = setTimeout(() => setDebounce(value), delay)
    // 每次在上一个 useEffect 处理完成以后再运行
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}
