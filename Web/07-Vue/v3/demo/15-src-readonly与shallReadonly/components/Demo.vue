<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.j1.salary ++">涨薪</button>
    <hr>
    <h2>Sum：{{sum}}</h2>
    <button @click="sum ++">Sum++</button>
  </div>
</template>

<script>
  import { reactive, toRefs, ref, readonly, shallowReadonly } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)
      let person = reactive({
        name: 'Tom',
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })

      // person = readonly(person)
      // person = shallowReadonly(person)
      // sum = readonly(sum)
      // sum = shallowReadonly(sum)

      return {
        ...toRefs(person),
        sum
      }
    }
  }
</script>
