<template>
  <div class="app">
    <h2>App组件</h2>
    <Suspense>
      <!-- 异步组件引入完成展示 -->
      <template v-slot:default>
        <Child />
      </template>
      <!-- 异步组件未引入完成时展示 -->
      <template v-slot:fallback>
        <h3>加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
  // 静态引入
  // import Child from './components/Child'
  // 引入定义异步组件的 API
  import { defineAsyncComponent } from 'vue'
  // 异步引入 动态引入
  const Child = defineAsyncComponent(() => import('./components/Child'))
  export default {
    name: 'App',
    components: {
      Child
    }
  }
</script>

<style>
  .app {
    background: gray;
    padding: 10px;
  }
</style>