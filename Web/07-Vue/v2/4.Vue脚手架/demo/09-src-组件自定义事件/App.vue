<template>
  <div class="app">
    <h1>Hello,{{name}}</h1>
    <!-- 通过父组件给子组件传递函数类型的 props 实现：子 => 父传递数据 -->
    <School :getSchoolName="getSchoolName" />
    <!-- 给组件的实例对象绑定事件 -->
    <!-- 通过父组件给子组件绑定自定义事件实现：子 => 父传递数据 => 第一种写法：事件绑定 -->
    <!-- <Student @getStudentName="getStudentNameDemo" /> -->
    <!-- 通过父组件给子组件绑定自定义事件实现：子 => 父传递数据 => 第二种写法：ref -->
    <Student ref="student" />
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    getSchoolName(name) {
      console.log('getSchoolName:', name)
    },
    getStudentNameDemo(name) {
      console.log('getStudentName:', name)
      this.name = name
    },
    demo() {
      alert('111')
    }
  },
  mounted() {
    // setTimeout(() => {
      // this.$refs.student.$on('getStudentName', this.getStudentNameDemo) // 绑定自定义事件
      // this.$refs.student.$once('getStudentName', this.getStudentNameDemo) // 绑定自定义事件 => 一次性
      this.$refs.student.$on('getStudentName', function(name) {
        console.log(name) // this 指向是 Student 组件的实例对象
      })
    // }, 5000)
  }
}
</script>

<style scoped>
  .app {
    background-color: lightblue;
    padding: 10px;
  }
</style>
