<template>
  <div class="demo">
    <h1>当前求和为：{{$store.state.sum}}</h1>
    <h1>当前求和X10为：{{$store.getters.bigSum}}</h1>
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
  export default {
    name: 'Count',
    data() {
      return {
        n: 1
      }
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
