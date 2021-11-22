<template>
  <ul>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
  export default {
    name: 'Newsssss',
    data() {
      return {
        opacity: 1
      }
    },
    // mounted() {
    //   this.timer = setInterval(() => {
    //     console.log('#')
    //     this.opacity -= 0.01
    //     if (this.opacity <= 0) this.opacity = 1
    //   }, 20)
    // },
    // 路由组件被 keep-alive 缓存了，不会执行销毁生命周期，定时器一直存在
    // beforeDestroy() {
    //   console.log('News即将销毁')
    //   clearInterval(this.timer)
    // },

    // 激活生命周期
    activated() {
      console.log('News激活了')
      this.timer = setInterval(() => {
        console.log('#')
        this.opacity -= 0.01
        if (this.opacity <= 0) this.opacity = 1
      }, 20)
    },
    // 失活生命周期
    deactivated() {
      console.log('News失活了')
      clearInterval(this.timer)
    }
  }
</script>

<style>

</style>