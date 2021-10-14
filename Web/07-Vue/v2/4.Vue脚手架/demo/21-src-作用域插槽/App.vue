<template>
  <div class="root">
    <Category title="游戏">
      <template scope="datas">
        <ul>
          <li v-for="(g, _g) in datas.games" :key="_g">{{g}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template scope="{ games }">
        <ol>
          <li v-for="(g, _g) in games" :key="_g">{{g}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(g, _g) in games" :key="_g">{{g}}</h4>
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
