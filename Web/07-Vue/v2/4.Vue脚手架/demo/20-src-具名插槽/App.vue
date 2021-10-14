<template>
  <div class="root">
    <Category title="美食">
      <img slot="center" src="https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/components-a.jpg" alt="" />
      <a slot="footer" href="https://www.baidu.com">更多</a>
    </Category>
    <Category title="游戏">
      <ul slot="center">
        <li v-for="(g, _g) in games" :key="_g">{{g}}</li>
      </ul>
      <a slot="footer" href="https://www.baidu.com">单机游戏</a>
      <a slot="footer" href="https://www.baidu.com">网络游戏</a>
    </Category>
    <Category title="电脑">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" alt="" />
      <!-- 使用 template 标签可以使用 v-slot:xxx 写法 -->
      <template v-slot:footer>
        <a href="https://www.baidu.com">经典</a>
        <a href="https://www.baidu.com">热门</a>
        <a href="https://www.baidu.com">推荐</a>
        <h4>Hello World</h4>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category'
  export default {
    name: 'App',
    components: {
      Category
    },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾', '牛排'],
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
        films: ['《教父》', '《后天》', '《战狼》', '《怒火》']
      }
    }
  }
</script>

<style scoped>
  .root {
    display: flex;
    justify-content: space-around;
  }
  img,
  video {
    width: 100%;
  }
</style>
