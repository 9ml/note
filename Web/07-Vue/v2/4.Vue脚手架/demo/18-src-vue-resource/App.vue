<template>
  <div id="root">
    <button @click="getInfoBD">获取百度信息</button>
    <br />
    <br />
    <button @click="getInfoJD">获取京东信息</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    getInfoBD() {
      this.$http.get('http://localhost:8080/api').then(res => {
        console.log('请求成功', res)
      }, err => {
        console.log('请求失败', err)
      })
    },
    getInfoJD() {
      this.$http.get('http://localhost:8080/demo').then(res => {
        console.log('请求成功', res)
      }, err => {
        console.log('请求失败', err)
      })
    }
  },
}
</script>
