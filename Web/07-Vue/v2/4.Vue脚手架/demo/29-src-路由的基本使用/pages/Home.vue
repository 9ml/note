<template>
  <h2>Home组件</h2>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      console.log('Home组件挂载完毕')
    },
    beforeDestroy() {
      console.log('Home组件即将销毁')
    }
  }
</script>

<style>

</style>