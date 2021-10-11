<template>
  <div>
    <h2 @click="showName">姓名：{{name}}</h2>
    <h2>性别：{{age}}</h2>
  </div>
</template>

<script>
  import { show, data } from '../mixin'
  export default {
    name: 'Student',
    data() {
      return {
        name: '9ml',
        age: 18
      }
    },
    mixins: [show, data]
  }
</script>
