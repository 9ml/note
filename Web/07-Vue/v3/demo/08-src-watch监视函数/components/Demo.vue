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
    // Vue2.x 监视
    // watch: {
    //   // 简写
    //   sum(newVal, oldVal) {
    //     console.log('sum changed:', newVal, oldVal)
    //   }
    //   // 完整
    //   sum: {
    //     immediate: true, // 立即执行
    //     deep: true, // 深度监视
    //     handler(newVal, oldVal) {
    //       console.log('sum changed:', newVal, oldVal)
    //     }
    //   }
    // },

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

      //1. 监视 ref 定义的一个响应式数据
      // watch(sum, (newVal, oldVal) => {
      //   console.log('sum changed:', newVal, oldVal)
      // }, {immediate: true})

      //2. 监视 ref 定义的多个响应式数据
      // watch([sum, msg], (newVal, oldVal) => {
      //   console.log('sum or msg changed:', newVal, oldVal)
      // }, {immediate: true})

      /**
       * 3. 监视 reactive 定义的一个响应式数据 = 全部属性
       * 
       * 注意：
       *  1. 此处无法正确的获得 oldVal
       *  2. 强制开启了深度监视 - deep 配置无效
       * 
       */
      // watch(person, (newVal, oldVal) => {
      //   console.log('person changed:', newVal, oldVal)
      // }, {deep: false}) // 此处的 deep 配置无效

      //4. 监视 reactive 定义的一个响应式数据 = 某个属性
      // watch(() => person.age, (newVal, oldVal) => {
      //   console.log('person.age changed:', newVal, oldVal)
      // })

      //5. 监视 reactive 定义的一个响应式数据 = 某些属性
      // watch([() => person.name, () => person.age], (newVal, oldVal) => {
      //   console.log('person.name or person.age changed:', newVal, oldVal)
      // })
      // watch(() => [person.name, person.age], (newVal, oldVal) => {
      //   console.log('person.name or person.age changed:', newVal, oldVal)
      // })

      // 特殊情况 监视 reactive 定义的一个响应式数据中的对象类型
      watch(() => person.job, (newVal, oldVal) => {
        console.log('person.job changed:', newVal, oldVal)
      }, {deep: true}) // 此处监视的是 reactive 定义的响应式数据中所定义的对象中的某个属性，需要配置 deep: true 才可监视


      return {
        sum,
        msg,
        person
      }
    }
  }
</script>
