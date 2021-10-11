<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{age}}</h2>
    <input type="text" v-binds:value="x" />
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
