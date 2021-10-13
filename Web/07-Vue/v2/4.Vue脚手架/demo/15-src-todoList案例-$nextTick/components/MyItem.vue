<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
      <!-- 使用 v-model 也能实现功能，但是不推荐使用，因为修改了 props 违法原则，引用类型所以 Vue 没有监测到 -->
      <!-- <input type="checkbox" v-model="item.done" /> -->
      <span v-show="!item.isEdit">{{item.title}}</span>
      <input
        type="text"
        v-show="item.isEdit"
        @blur="handleBlur(item, $event)"
        :value="item.title"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDel(item.id)">删除</button>
    <button class="btn btn-edit" v-show="!item.isEdit" @click="handleEdit(item)">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: 'MyItem',
    props: ['item'],
    methods: {
      // 触发全局事件总线
      handleCheck(id) {
        pubsub.publish('checkTodo', id)
      },
      // 触发全局事件总线
      handleDel(id) {
        if (confirm('确认删除吗？')) pubsub.publish('delTodo', id)
      },
      // 编辑
      handleEdit(i) {
        // i.isEdit = true
        // if (i.hasOwnPrototype('isEdit')) {
        //   i.isEdit = true
        // } else {
        //   console.log('追加了属性')
        //   this.$set(i, 'isEdit', true)
        // }
        i.hasOwnProperty('isEdit') ? i.isEdit = true : this.$set(i, 'isEdit', true)
        // setTimeout(() => {
        //   this.$refs.inputTitle.focus()
        // })
        // $nextTick 函数体内容会在DOM更新后执行
        this.$nextTick(() => {
          this.$refs.inputTitle.focus()
        })
      },
      handleBlur(i, e) {
        i.isEdit = false
        if (!e.target.value.trim()) return alert('修改内容不能为空')
        this.$bus.$emit('updateTodo', i.id, e.target.value)
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

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>