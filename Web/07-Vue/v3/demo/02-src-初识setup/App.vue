<template>
  <div>
    <h1>
      User Info
    </h1>
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <button @click="sayHi">Speak</button>
  </div>
</template>

<script>
  // import { h } from 'vue'
  export default {
    name: 'App',
    // 测试 setup ，暂不考虑响应式的问题
    setup() {
      // 数据
      let name = ref('Tom')
      let age = ref(18)

      // 方法
      let sayHi = () => {
        alert(`Hello, my name is ${name}, my age is ${age}`)
      }

      // 返回一个对象 常用
      return {
        name,
        age,
        sayHi
      }

      // 返回一个渲染函数 了解
      // return () => h('h1', 'Hello World')
    }
  }
</script>
