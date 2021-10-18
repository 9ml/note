<template>
  <h2>About组件</h2>
</template>

<script>
  export default {
    name: 'About',
    mounted() {
      console.log('About组件挂载完毕')
    },
    beforeDestroy() {
      console.log('About组件即将销毁')
    }
  }
</script>

<style>

</style>