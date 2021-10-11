<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点击输出DOM</button>
    <RefDemo ref="refDemo" />
  </div>
</template>

<script>
import RefDemo from './components/RefDemo.vue'

export default {
  name: 'App',
  components: {
    RefDemo
  },
  data() {
    return {
      msg: 'Hello World'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title) // 真实 DOM 元素
      console.log(this.$refs.btn) // 真实 DOM 元素
      console.log(this.$refs.refDemo) // 组件的实例对象
    }
  },
}
</script>
