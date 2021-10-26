<template>
  <div class="son">
    <h2>Son组件</h2>
    <Dialog />
  </div>
</template>

<script>
  import Dialog from './Dialog'
  export default {
    name: 'Son',
    components: {
      Dialog
    }
  }
</script>

<style>
  .son {
    background: sienna;
    padding: 10px;
  }
</style>