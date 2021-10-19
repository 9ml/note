<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <!-- 跳转传递 params 参数 => 字符串写法 -->
        <!-- <router-link :to="`/home/message/details/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 简化传递 params 参数 => 对象写法 注意：使用 params 传参不允许 path 跳转，只能使用 name 跳转 -->
        <!-- <router-link :to="{
          name: 'hello',
          params: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <router-link :to="{
          name: 'hello',
          query: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
        <button @click="pushShow(m)">PUSH查看</button>
        <button @click="replaceShow(m)">REPLACE查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Message',
    data() {
      return {
        msgList: [
          { id: '001', title: '消息001' },
          { id: '002', title: '消息002' },
          { id: '003', title: '消息003' }
        ]
      }
    },
    beforeDestroy() {
      console.log('Message即将销毁')
    },
    methods: {
      pushShow(m) {
        this.$router.push({
          name: 'hello',
          query: {
            id: m.id,
            title: m.title
          }
        })
      },
      replaceShow(m) {
        this.$router.replace({
          name: 'hello',
          query: {
            id: m.id,
            title: m.title
          }
        })
      }
    }
  }
</script>

<style>

</style>