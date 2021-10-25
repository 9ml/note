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
      const myRef = (value) => {
        return customRef(() => {
          return {
            get() {

            },
            set() {
              
            }
          }
        })
      }

      let keywords = ref('Hello') // 使用 Vue 提供的 ref
      let keywords = myRef('Hello') // 使用 Vue 提供的 ref

      return {
        keywords
      }
    }
  }
</script>
