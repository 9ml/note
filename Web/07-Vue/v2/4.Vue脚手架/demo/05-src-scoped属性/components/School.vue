<template>
  <div class="demo">
    <h2>名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: '北京大学北京大学北京大学',
        address: '北京市'
      }
    }
  }
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>
