<template>
  <div class="demo">
    <h2>名称：{{name}}</h2>
    <h2>地址：{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
      return {
        name: '北京大学',
        address: '北京市'
      }
    },
    mounted() {
      // 订阅消息
      // this.$bus.$on('hello', data => console.log('收到数据', data))
      this.pubId = pubsub.subscribe('hello', (name, data) => console.log(`收到数据...消息名：${name}，数据：${data}`))
    },
    beforeDestroy() {
      // 解绑消息
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    },
  }
</script>

<style scoped>
.demo {
  background-color: skyblue;
  margin-top: 20px;
  padding: 5px;
}
</style>
