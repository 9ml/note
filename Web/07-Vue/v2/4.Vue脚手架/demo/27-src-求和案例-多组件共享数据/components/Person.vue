<template>
  <div>
    <h2 style="color: red;">Count组件的求和为：{{sum}}</h2>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="(p, _p) in userList" :key="_p">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
  // import { mapState } from 'vuex'
  import { nanoid } from 'nanoid'

  export default {
    name: 'Person',
    data() {
      return {
        name: ''
      }
    },
    computed: {
      // ...mapState(['userList'])
      userList() {
        return this.$store.state.userList
      },
      sum() {
        return this.$store.state.sum
      }
    },
    methods: {
      add() {
        const newPerson = { id: nanoid(), name: this.name }
        this.name = ''
        this.$store.commit('ADD_PERSON', newPerson)
      }
    }
  }
</script>

<style>

</style>