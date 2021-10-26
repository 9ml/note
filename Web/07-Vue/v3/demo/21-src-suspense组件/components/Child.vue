<template>
  <div class="child">
    <h2>Child组件</h2>
    <h3>{{sum}}</h3>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'Child',
    async setup() {
      let sum = ref(0)
      // 模拟异步
      let p = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ sum })
        }, 3000)
      })
      return await p
    }
  }
</script>

<style>
  .child {
    background: skyblue;
    padding: 10px;
  }
</style>