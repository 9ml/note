<template>
  <div class="app">
    <h2>App组件（祖）{{name}} --- {{price}}</h2>
    <Child />
  </div>
</template>

<script>
  import { provide, reactive, toRefs } from 'vue'
  import Child from './components/Child'
  export default {
    name: 'App',
    components: {
      Child
    },
    setup() {
      let car = reactive({ name: '奔驰', price: '50W' })
      provide('car', car) // 给自己的后代组件传递数据
      return { ...toRefs(car) }
    }
  }
</script>

<style>
  .app {
    background: gray;
    padding: 10px;
  }
</style>