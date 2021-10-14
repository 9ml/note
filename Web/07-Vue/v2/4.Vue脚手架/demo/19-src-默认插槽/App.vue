<template>
  <div class="root">
    <Category title="美食">
      <img src="https://cdn.jsdelivr.net/gh/9ml/cdn@main/images/note/components-a.jpg" alt="" />
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="(g, _g) in games" :key="_g">{{g}}</li>
      </ul>
    </Category>
    <Category title="电脑">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" alt="" />
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
