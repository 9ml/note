<template>
  <div id="root">
    <AnimationDemo />
    <TransitionDemo />
    <TransitionGroupDemo />
    <AnimateDemo />
  </div>
</template>

<script>
import AnimationDemo from './components/AnimationDemo'
import TransitionDemo from './components/TransitionDemo'
import TransitionGroupDemo from './components/TransitionGroupDemo'
import AnimateDemo from './components/AnimateDemo'
export default {
  name: 'App',
  components: {
    AnimationDemo,
    TransitionDemo,
    TransitionGroupDemo,
    AnimateDemo
  }
}
</script>

<style>
  .demo {
    margin-bottom: 50px;
  }
</style>
