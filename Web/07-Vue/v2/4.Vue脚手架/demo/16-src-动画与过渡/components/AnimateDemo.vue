<template>
  <div class="demo">
    <button @click="show = !show">第三方实现切换</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="show" key="1">Hello</h1>
      <h1 v-show="!show" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
// 第三方 animate.css
import 'animate.css'
export default {
  name: 'AnimateDemo',
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
  h1 {
    background-color: skyblue;
  }
</style>