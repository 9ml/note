<template>
  <div class="app">
    <h2>App组件</h2>
    <Child />
  </div>
</template>

<script>
  import Child from './components/Child'
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