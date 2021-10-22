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
  import { reactive, ref, watch } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      // 数据
      let sum = ref(0)
      let msg = ref('Hello World')
      let person = ref({
        name: 'Tom',
        age: 18,
        job: {
          j1: {
            salary: 20
          }
        }
      })

      // sum 变化时是 sum.value 变化，所以 watch 可以监测到 sum 的变化，且 sum.value 表示这个值，watch 不能直接监视一个值
      watch(sum, (newValue, oldValue) => {
        console.log('sum changed:', newValue, oldValue)
      })
      // person 变化时是 person.value 中的 Proxy 中的属性发生变化，所以 watch 不能监听到，这里需要监听 person.value 的值
      // watch(person.value, (newValue, oldValue) => {
      //   console.log('person changed:', newValue, oldValue)
      // })
      // 获取开启深度监视
      watch(person, (newValue, oldValue) => {
        console.log('person changed:', newValue, oldValue)
      }, { deep: true })

      return {
        sum,
        msg,
        person
      }
    }
  }
</script>
