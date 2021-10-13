<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo" />
        <MyList :list="todos" />
        <MyFooter :list="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  mounted() {
    // 订阅消息
    this.checkTodoId = pubsub.subscribe('checkTodo', this.checkTodo)
    this.delTodoId = pubsub.subscribe('delTodo', this.delTodo)
    // 绑定全局事件总线
    this.$bus.$on('updateTodo', this.updateTodo)
  },
  beforeDestroy() {
    // 取消订阅
    pubsub.unsubscribe(this.checkTodoId)
    pubsub.unsubscribe(this.delTodoId)
    // 解绑事件总线
    this.$bus.$off('updateTodo')
  },
  watch: {
    /** 无法监视内部属性变化
      todos(val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
     */
    todos: {
      deep: true,
      handler(val) {
        localStorage.setItem('todos', JSON.stringify(val))
      }
    }
  },
  methods: {
    // 添加一个 todo
    addTodo(item) {
      this.todos = [item, ...this.todos]
    },
    // 勾选 | 取消勾选
    checkTodo(_, id) {
      this.todos.forEach(item => item.done = item.id === id ? !item.done : item.done)
    },
    // 删除
    delTodo(_, id) {
      this.todos = this.todos.filter(item => item.id !== id)
    },
    // 修改
    updateTodo(id, val) {
      this.todos.forEach(item => item.id === id ? item.title = val : '')
    },
    // （取消）全选
    checkAllTodo(done) {
      this.todos.forEach(item => item.done = done)
    },
    // 清除所有已完成
    clearAllTodo() {
      this.todos = this.todos.filter(item => !item.done)
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(115, 180, 206);
    margin-right: 5px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
