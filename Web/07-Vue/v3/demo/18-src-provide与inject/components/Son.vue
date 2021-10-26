<template>
  <div class="son">
    <h2>Son组件（孙）{{car.name}}---{{car.price}}</h2>
  </div>
</template>

<script>
  import { inject } from 'vue'
  export default {
    name: 'Son',
    setup() {
      let car = inject('car')
      return { car }
    }
  }
</script>

<style>
  .son {
    background: sienna;
    padding: 10px;
  }
</style>