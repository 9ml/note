<template>
  <div class="demo">
    <button @click="show = !show">多个元素过渡切换</button>
    <transition-group name="hello" appear>
      <h1 v-show="show" key="1">Hello</h1>
      <h1 v-show="!show" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
// 多个元素过渡
export default {
  name: 'TransitionGroupDemo',
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
    /* transition: .5s linear; */
  }

  .hello-enter-active,
  .hello-leave-active {
    transition: .5s linear;
  }

  /* 进入的起点、离开的终点 */
  .hello-enter,
  .hello-leave-to {
    transform: translateX(-100%);
  }

  /* 进入的终点、离开的起点 */
  .hello-enter-to,
  .hello-leave {
    transform: translateX(0);
  }

  /* 离开的起点 */
  /* .hello-leave {
    transform: translateX(0);
  } */

  /* 离开的终点 */
  /* .hello-leave-to {
    transform: translateX(-100%);
  } */
</style>