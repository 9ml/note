<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList :list="todos" :checkTodo="checkTodo" :delTodo="delTodo" />
        <MyFooter :list="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo" />
      </div>
    </div>
  </div>
</template>

<script>
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
    checkTodo(id) {
      this.todos.forEach(item => item.done = item.id === id ? !item.done : item.done)
    },
    // 删除
    delTodo(id) {
      this.todos = this.todos.filter(item => item.id !== id)
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
