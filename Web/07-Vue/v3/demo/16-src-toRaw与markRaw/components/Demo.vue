<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <h2>车：{{person.car}}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age ++">修改年龄</button>
    <button @click="job.j1.salary ++">涨薪</button>
    <hr>
    <h2>Sum：{{sum}}</h2>
    <button @click="sum ++">Sum++</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">添加车</button>
    <button @click="person.car.name += '!'">换车名</button>
    <button @click="person.car.price ++">改价格</button>
  </div>
</template>

<script>
  import { reactive, toRefs, ref, toRaw, markRaw } from 'vue'
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

      const showRawPerson = () => {
        console.log(person)
        console.log(toRaw(person))
        console.log(sum)
        console.log(toRaw(sum)) // undefined
      }

      const addCar = () => {
        let car = { name: 'BMW', price: 50 }
        // person.car = car
        person.car = markRaw(car)
      }

      return {
        ...toRefs(person),
        sum,
        person,
        showRawPerson,
        addCar
      }
    }
  }
</script>
