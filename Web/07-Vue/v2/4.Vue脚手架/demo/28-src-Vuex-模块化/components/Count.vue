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
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementByOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementByWait(n)">等一等再加</button>
    <h2 style="color: red;">Person组件总人数：{{userList.length}}</h2>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: 'Count',
    data() {
      return {
        n: 1
      }
    },
    computed: {
      ...mapState('countAbout', ['sum', 'name', 'age']),
      ...mapState('personAbout', ['userList']),
      ...mapGetters('countAbout', ['bigSum'])
    },
    methods: {
      ...mapMutations('countAbout', {increment: 'ADD', decrement: 'CUT'}),
      ...mapActions('countAbout', {incrementByOdd: 'addByOdd', incrementByWait: 'addByWait'})
    },
  }
</script>

<style>
  button {
    margin-left: 10px;
  }
</style>
