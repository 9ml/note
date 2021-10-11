<template>
  <div>
    <h2 @click="showName">名称：{{name}}</h2>
    <h2>地址：{{address}}}</h2>
  </div>
</template>

<script>
  import { show, data } from '../mixin'
  export default {
    name: 'School',
    data() {
      return {
        name: '北京大学',
        address: '北京市'
      }
    },
    mixins: [show, data]
  }
</script>
