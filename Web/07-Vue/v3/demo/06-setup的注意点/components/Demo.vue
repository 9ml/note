<template>
  <div>
    <h1>
      User Info
    </h1>
    <h2>name: {{person.name}}</h2>
    <h2>age: {{person.age}}</h2>
    <button @click="handleTestEmit">Emit</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    name: 'Demo',
    // beforeCreate() {
    //   console.log('---beforeCreate---', this)
    // },
    props: ['msg'],
    emits: ['hello'],
    setup(props, context) {
      // console.log('---setup---', this)
      // console.log(props, context)
      // console.log(context.atrrs) // 相当于 Vue2 中的 $atrrs
      // console.log(context.emit) // 触发自定义事件
      console.log(context.slots) // 插槽
      // 数据
      const person = reactive({
        name: 'Tom',
        age: 18
      })

      const handleTestEmit = () => {
        context.emit('hello', 666)
      }

      return {
        person,
        handleTestEmit
      }
    }
  }
</script>
