import { useEffect, useState } from 'react'

export const isFalsy = (value: unknown) => value === 0 ? false : !value

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (obj: object) => {
  // Object.assign({}, obj)
  const result = {...obj}
  Object.keys(result).forEach(key => {
    // @ts-ignore
    const value = result[key] // value 为 0 时会删除此属性
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: () => void) => {
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

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debounceValue, setDebounce] = useState(value)
  useEffect(() => {
    // 每次在 value 变化之后设置一个定时器
    const timeout = setTimeout(() => setDebounce(value), delay)
    // 每次在上一个 useEffect 处理完成以后再运行
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debounceValue
}

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number)=> {
      const copy = [...value]
      copy.splice(index, 1)
      setValue(copy)
    }
  }
}
