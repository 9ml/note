<template>
  <div>
    <ul>
      <li v-for="m in msgList" :key="m.id">
        <!-- 跳转传递 query 参数 => 字符串写法 -->
        <!-- <router-link :to="`/home/message/details?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 跳转传递 query 参数 => 对象写法 -->
        <router-link :to="{
          path: '/home/message/details',
          query: {
            id: m.id,
            title: m.title
          }
        }">{{m.title}}</router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr>
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
    }
  }
</script>

<style>

</style>