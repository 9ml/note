<template>
  <div>
    <button @click="isShow = true">弹窗</button>
    <teleport to="body">
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>弹窗</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis veniam eius. Adipisci quisquam nam suscipit architecto accusantium nemo iure! Fugit deleniti fuga quam omnis eaque, veritatis neque delectus maxime?</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'Dialog',
    setup() {
      let isShow = ref(false)

      return {
        isShow
      }
    }
  }
</script>

<style>
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .4);
  }
  .dialog {
    width: 300px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: pink;
  }
</style>