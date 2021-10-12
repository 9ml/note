<template>
  <ul class="todo-main">
    <MyItem
      v-for="i in list"
      :key="i.id"
      :item="i"
      :checkTodo="checkTodo"
      :delTodo="delTodo"
    />
  </ul>
</template>

<script>
  import MyItem from './MyItem'
  export default {
    name: 'MyList',
    props: ['list', 'checkTodo', 'delTodo'],
    components: { MyItem }
  }
</script>

<style scoped>
  /*list*/
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>