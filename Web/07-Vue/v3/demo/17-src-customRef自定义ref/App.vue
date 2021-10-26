<template>
  <div>
    <input type="text" v-model="keywords" />
    <h3>{{keywords}}</h3>
  </div>
</template>

<script>
  import { ref, customRef } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 自定义 ref
      const myRef = (value, delay) => {
        let timer
        return customRef((track, trigger) => {
          return {
            get() {
              console.log(`监听到从myRef中读取了数据，返回了${value}`)
              track() // 通知 Vue 追踪数据的变化（在 return 之前提前告知 getter 这个 value 是有用的）
              return value
            },
            set(newValue) {
              console.log(`监听到从myRef中修改了数据，值为${newValue}`)
              clearTimeout(timer)
              timer = setTimeout(() => {
                value = newValue
                trigger() // 通知 Vue 去重新解析模板
              }, delay)
            }
          }
        })
      }

      // let keywords = ref('Hello') // 使用 Vue 提供的 ref
      let keywords = myRef('Hello', 500) // 使用自定义的 ref

      return {
        keywords
      }
    }
  }
</script>
