<template>
  <div>
    <Demo v-if="isShowDemo"></Demo>
    <button @click="isShowDemo = !isShowDemo">切换隐藏显示</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components: {
      Demo
    },
    setup() {
      let isShowDemo = ref(true)
      return {
        isShowDemo
      }
    }
  }
</script>
