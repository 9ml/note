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
      ...mapState(['sum', 'name', 'age']),
      ...mapGetters(['bigSum'])
    },
    methods: {
      // 手动写方法调用
      // increment() {
      //   this.$store.commit('ADD', this.n)
      // },
      // decrement() {
      //   this.$store.commit('CUT', this.n)
      // },

      // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations 执行方法 => 对象写法
      ...mapMutations({increment: 'ADD', decrement: 'CUT'}),
      // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations 执行方法 => 数组写法
      // ...mapMutations('ADD', 'CUT'),

      // 手动写方法调用
      // incrementByOdd() {
      //   this.$store.dispatch('addByOdd', this.n)
      // },
      // incrementByWait() {
      //   this.$store.dispatch('addByWait', this.n)
      // }

      // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions 执行方法 => 对象写法
      ...mapActions({incrementByOdd: 'addByOdd', incrementByWait: 'addByWait'}),
      // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions 执行方法 => 数组写法
      // ...mapActions(['addByOdd', 'addByWait'])
    },
  }
</script>

<style>
  button {
    margin-left: 10px;
  }
</style>
