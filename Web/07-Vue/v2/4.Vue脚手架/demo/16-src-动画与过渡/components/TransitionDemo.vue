<template>
  <div class="demo">
    <button @click="show = !show">过渡实现动起来</button>
    <transition name="hello" appear>
      <h1 v-show="show">Hello World</h1>
    </transition>
  </div>
</template>

<script>
// 过渡
export default {
  name: 'TransitionDemo',
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