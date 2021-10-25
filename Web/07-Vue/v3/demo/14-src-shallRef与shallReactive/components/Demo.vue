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
    <hr>
    <h2>SumObj：{{sumObj1.x}}</h2>
    <button @click="sumObj1.x ++">SumObj++</button>
  </div>
</template>

<script>
  import { reactive, toRefs, shallowReactive, shallowRef, ref } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      // 数据
      // let person = shallowReactive({ // 只考虑对象中第一层属性的数据
      let person = reactive({
        name: 'Tom',
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })

      let sum = shallowRef(0)
      let sumObj1 = ref({ // 不能处理对象类型的响应式
        x: 0
      })
      let sumObj2 = shallowRef({ // 不能处理对象类型的响应式
        x: 0
      })
      console.log(sumObj1)
      console.log(sumObj2)

      return {
        ...toRefs(person),
        sum,
        sumObj1
      }
    }
  }
</script>
