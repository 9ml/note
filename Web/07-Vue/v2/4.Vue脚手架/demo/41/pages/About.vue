<template>
  <h2>About组件</h2>
</template>

<script>
  export default {
    name: 'About',
    // 通过路由规则，进入该组件时调用
    beforeRouteEnter (to, from, next) {
      console.log('About----beforeRouteEnter', to, from)
      to.meta.isAuth ? localStorage.getItem('user') === '9ml' ? next() : alert('当前账户无权限') : next()
    },
    // 通过路由规则，离开该组件时调用
    beforeRouteLeave (to, from, next) {
      console.log('About----beforeRouteLeave', to, from)
      next()
    }
  }
</script>

<style>

</style>