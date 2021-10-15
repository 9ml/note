<template>
  <div class="demo">
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和X10为：{{bigSum}}</h3>
    <h3>我是{{name}}，今年{{age}}岁</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementByOdd">当前求和为奇数再加</button>
    <button @click="incrementByWait">等一等再加</button>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'Count',
    data() {
      return {
        n: 1
      }
    },
    computed: {
      /**手动编写计算属性获取 $store.state 中的数据
      sum() {
        return this.$store.state.sum
      },
      name() {
        return this.$store.state.name
      },
      age() {
        return this.$store.state.age
      },
       */
      // 借助 mapState 生成计算属性，从 state 中读取数据 => 对象写法
      // ...mapState({sum: 'sum', name: 'name', age: 'age'}),
      // 借助 mapState 生成计算属性，从 state 中读取数据 => 数组写法：数组属性名要与 state 中的属性名一致
      ...mapState(['sum', 'name', 'age']),


      // 手动编写计算属性获取 $store.getters 中的数据
      // bigSum() {
      //   return this.$store.getters.bigSum
      // }
      
      // 借助 mapGetters 生成计算属性，从 getters 中读取数据 => 对象写法
      // ...mapGetters({bigSum: 'bigSum'}), 
      
      // 借助 mapGetters 生成计算属性，从 getters 中读取数据 => 数组写法
      ...mapGetters(['bigSum']),
      
    },
    methods: {
      increment() {
        this.$store.commit('ADD', this.n)
      },
      decrement() {
        this.$store.commit('CUT', this.n)
      },
      incrementByOdd() {
        this.$store.dispatch('addByOdd', this.n)
      },
      incrementByWait() {
        this.$store.dispatch('addByWait', this.n)
      }
    },
  }
</script>

<style>
  button {
    margin-left: 10px;
  }
</style>
