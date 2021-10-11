<template>
  <div class="demo">
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: '9ml',
        age: 18
      }
    }
  }
</script>

<style scoped>
.demo {
  background-color: orange;
}
</style>
