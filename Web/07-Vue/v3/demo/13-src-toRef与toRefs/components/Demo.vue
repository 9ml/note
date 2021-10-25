<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.j1.salary ++">涨薪</button>
  </div>
</template>

<script>
  import { reactive, toRef, toRefs } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      // 数据
      let person = reactive({
        name: 'Tom',
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })

      const name1 = person.name
      console.log('直接赋值的name：', name1) // Tom

      const name2 = toRef(person, 'name')
      console.log('通过toRef的name：', name2) // RefImpl

      const x = toRefs(person)
      console.log('toRefs', x)

      return {
        // name: toRef(person, 'name'),
        // age: toRef(person, 'age'),
        // salary: toRef(person.job.j1, 'salary')
        ...toRefs(person)
      }
    }
  }
</script>
