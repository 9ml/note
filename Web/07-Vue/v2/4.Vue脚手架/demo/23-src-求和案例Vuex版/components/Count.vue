<template>
  <div class="demo">
    <h1>当前求和为：{{$store.state.sum}}</h1>
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
        // this.$store.dispatch('add', this.n)
        this.$store.commit('ADD', this.n)
      },
      decrement() {
        // this.$store.dispatch('cut', this.n)
        this.$store.commit('CUT', this.n)
      },
      incrementByOdd() {
        // this.$store.state.sum % 2 ? this.$store.dispatch('add', this.n) : ''
        this.$store.dispatch('addByOdd', this.n)
      },
      incrementByWait() {
        // setTimeout(() => {
        //   this.$store.dispatch('add', this.n)
        // }, 1000)
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
