<template>
  <div class="demo">
    <button @click="show = !show">动画实现动起来</button>
    <transition name="hello" appear>
      <h1 v-show="show">Hello World</h1>
    </transition>
  </div>
</template>

<script>
// 动画
export default {
  name: 'AnimationDemo',
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

  .hello-enter-active {
    animation: demos 1s;
  }

  .hello-leave-active {
    animation: demos 1s reverse;
  }

  @keyframes demos {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>