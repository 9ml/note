<template>
  <div class="demo">
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{age}}</h2>
    <button @click="sendStudentName">向父组件传递学生名称</button>
    <button @click="unbind">解绑sendStudentName事件</button>
    <button @click="death">销毁当前Student组件实例</button>
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
        // 触发 Student 组件实例对象中的 getStudentName 事件
        this.$emit('getStudentName', this.name)
      },
      unbind() {
        this.$off('getStudentName') // 解绑单个自定义事件
        // this.$off(['getStudentName', 'xxxx']) // 解绑多个自定义事件
        // this.$off() // 解绑所有自定义事件
      },
      death() {
        this.$destroy() // 销毁当前Student组件实例，销毁后所有Student实例的自定义事件全都不奏效
      }
    },
  }
</script>

<style scoped>
.demo {
  background-color: orange;
  margin-top: 20px;
  padding: 5px;
}
</style>
