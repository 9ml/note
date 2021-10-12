<template>
  <div class="demo">
    <h2>名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
      return {
        name: '北京大学',
        address: '北京市'
      }
    },
    mounted() {
      this.$bus.$on('hello', data => console.log('收到数据', data)) 
    },
    beforeDestroy() {
      this.$bus.$off('hello')
    },
  }
</script>

<style scoped>
.demo {
  background-color: skyblue;
  margin-top: 20px;
  padding: 5px;
}
</style>
