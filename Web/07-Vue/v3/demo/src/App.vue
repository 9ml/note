<template>
  <div>
    <h1>
      User Info
    </h1>
    <h2>name: {{person.name}}</h2>
    <h2>age: {person.{age}}</h2>
    <h2>job.type: {{person.job.type}}</h2>
    <h2>job.salary: {{person.job.salary}}</h2>
    <h2>job.test: {{person.job.a.b.c}}</h2>
    <h2>hobby: {{person.hobby}}</h2>
    <button @click="changeInfo">Change</button>
  </div>
</template>

<script>
  import { reactive } from 'vue'
  export default {
    name: 'App',
    setup() {
      // 数据
      const person = reactive({
        name: 'Tom',
        age: 18,
        job: {
          type: 'WEB',
          salary: '30k',
          a: {
            b: {
              c: 666
            }
          }
        },
        hobby: ['抽烟', '喝酒', '烫头']
      })

      let changeInfo = () => {
        console.log(person)
        person.name = '9ml'
        person.age = 24
        person.job.type = 'UI'
        person.salary = '30k'
        person.a.b.c = 999
        person.hobby[0] = '学习'
      }

      return {
        person,
        changeInfo
      }
    }
  }
</script>
