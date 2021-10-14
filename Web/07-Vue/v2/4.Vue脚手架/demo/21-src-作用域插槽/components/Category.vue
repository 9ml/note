<template>
  <div class="demo">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽 => 挖个坑，等着组件的使用者填充使用 -->
    <slot :games="games">当组件使用者没有传递具体的结构时展示</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽']
      }
    }
  }
</script>

<style>
  h3 {
    text-align: center;
    background:orange;
  }
  .demo {
    width: 200px;
    height: 300px;
    background: skyblue;
  }
</style>