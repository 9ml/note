<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>姓名：{{name}}</h2>
    <h2>性别：{{sex}}</h2>
    <h2>年龄：{{myAge}}</h2>
    <button @click="updateAge">修改年龄</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    // 简单声明接收
    // props: ['name', 'sex', 'age'],

    // 接收并对数据进行类型限制
    // props: {
    //   name: String,
    //   sex: String,
    //   age: Number
    // },
    // 接收并对数据进行类型、默认值、必要性的限制
    props: {
      name: {
        type: String, // 类型
        required: true // 必传
      },
      sex: {
        type: String, // 类型
        required: true // 必传
      },
      age: {
        type: Number, // 类型
        default: 99 // 默认
      }
    },

    data() {
      return {
        msg: 'Hello Wolrd',
        myAge: this.age
      }
    },
    methods: {
      updateAge() {
        this.myAge ++
      }
    },
  }
</script>
