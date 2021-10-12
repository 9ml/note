<template>
  <div class="demo">
    <h2>名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
    <button @click="sendSchoolName">向父组件传递学校名称</button>
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
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
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
