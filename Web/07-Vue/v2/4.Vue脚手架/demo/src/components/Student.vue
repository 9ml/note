<template>
  <div class="demo">
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{age}}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
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
    },
    methods: {
      sendStudentName() {
        this.$bus.$emit('hello', this.name)
      }
    }
  }
</script>

<style scoped>
.demo {
  background-color: orange;
  margin-top: 20px;
  padding: 5px;
}
</style>
