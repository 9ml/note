<template>
  <div>
    <h1> User Info </h1>
    姓：<input type="text" v-model="person.firstName" /><br><br>
    名：<input type="text" v-model="person.lastName" />
    <h2>全名：{{person.fullName}}</h2>
    全名(修改)：<input type="text" v-model="person.fullName">
  </div>
</template>

<script>
  import { reactive, computed } from 'vue'
  export default {
    name: 'Demo',
    // Vue2.x 的计算属性
    // computed: {
    //   fullName() {
    //     return `${this.person.firstName}-${this.person.lastName}`
    //   }
    // },
    setup() {
      // 数据
      const person = reactive({
        firstName: '张',
        lastName: '三'
      })
      // 计算属性 => 简写，不考虑计算属性被修改的情况
      // let fullName = computed(() => {
      //   return `${person.firstName}-${person.lastName}`
      // })
      // person.fullName = computed(() => {
      //   return `${person.firstName}-${person.lastName}`
      // })

      // 计算属性 => 完整写法，考虑计算属性被修改的情况
      person.fullName = computed({
        get() {
          return `${person.firstName}-${person.lastName}`
        },
        set(value) {
          const newArr = value.split('-')
          person.firstName = newArr[0]
          person.lastName = newArr[1]
        }
      })



      return {
        person,
        // fullName
      }
    }
  }
</script>
