<template>
  <div>
    <h2>名称：{{name | mySlice}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="msg">Hello World</button>
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
