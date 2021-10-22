<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum ++">+++</button>
    <hr />
    <h2>当前信息为：{{msg}}</h2>
    <button @click="msg += '!'">修改信息</button>
    <hr />
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}k</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age ++">修改年龄</button>
    <button @click="person.job.j1.salary ++">涨薪</button>
  </div>
</template>

<script>
  import { reactive, ref, watch, watchEffect } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)
      let msg = ref('Hello World')
      let person = reactive({
        name: 'Tom',
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })

      // 监视
      watch(sum, (newValue, oldValue) => {
        console.log('sum changed:', newValue, oldValue)
      }, { immediate: true })


      watchEffect(() => {
        const x1 = sum.value
        const x2 = person.job.j1.salary
        console.log('watchEffect 所指定的回调执行了')
      })

      return {
        sum,
        msg,
        person
      }
    }
  }
</script>
