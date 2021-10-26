<template>
  <div class="app">
    <h2>App组件</h2>
  </div>
</template>

<script>
  import { ref, reactive, toRefs, readonly, isRef, isReactive, isReadonly, isProxy } from 'vue'
  export default {
    name: 'App',
    setup() {
      let car = reactive({ name: '奔驰', price: '50W' })
      let sum = ref(0)
      let car2 = readonly(car)

      console.log(isRef(sum))
      console.log(isReactive(car))
      console.log(isReadonly(car2))
      console.log(isProxy(car))
      console.log(isProxy(sum))

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