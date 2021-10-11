<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <!-- 使用 v-model 也能实现功能，但是不推荐使用，因为修改了 props 违法原则，引用类型所以 Vue 没有监测到 -->
      <!-- <input type="checkbox" v-model="item.done" /> -->
      <span>{{item.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'MyItem',
    props: ['item', 'checkTodo'],
    methods: {
      handleCheck(id) {
        this.checkTodo(id)
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>