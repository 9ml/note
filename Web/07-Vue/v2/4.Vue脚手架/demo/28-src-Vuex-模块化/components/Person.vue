<template>
  <div>
    <h2 style="color: red;">Count组件的求和为：{{sum}}</h2>
    <h3 style="color: red;">列表中第一个人的名字：{{firstPersonName}}</h3>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button> <button @click="addWang">添加一个姓王的人</button> <button @click="addTest">添加测试</button>
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
        return this.$store.state.personAbout.userList
      },
      sum() {
        return this.$store.state.countAbout.sum
      },
      firstPersonName() {
        return this.$store.getters['personAbout/firstPersonName']
      }
    },
    methods: {
      add() {
        const newPerson = { id: nanoid(), name: this.name }
        this.name = ''
        this.$store.commit('personAbout/ADD_PERSON', newPerson)
      },
      addWang() {
        const newPerson = { id: nanoid(), name: this.name }
        this.name = ''
        this.$store.dispatch('personAbout/addPersonWang', newPerson)
      },
      addTest() {
        this.$store.dispatch('personAbout/getBaidu')
      }
    }
  }
</script>

<style>

</style>