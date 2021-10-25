<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum ++">+++</button>
  </div>
</template>

<script>
  import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
  export default {
    name: 'Demo',
    setup() {
      console.log('---setup---')
      // 数据
      let sum = ref(0)
      // 通过组合式 API 的形式去使用生命周期钩子
      onBeforeMount(() => { console.log('---onBeforeMount---') })
      onMounted(() => { console.log('---onMounted---') })
      onBeforeUpdate(() => { console.log('---onBeforeUpdate---') })
      onUpdated(() => { console.log('---onUpdated---') })
      onBeforeUnmount(() => { console.log('---onBeforeUnmount---') })
      onUnmounted(() => { console.log('---onUnmounted---') })
      return {
        sum
      }
    },
    // 通过配置项的形式使用生命周期
    //#region 
    /*
    beforeCreate() {
      console.log('---beforeCreate---')
    },
    created() {
      console.log('---created---')
    },
    beforeMount() {
      console.log('---beforeMount---')
    },
    mounted() {
      console.log('---mounted---')
    },
    beforeUpdate() {
      console.log('---beforeUpdate---')
    },
    updated() {
      console.log('---updated---')
    },
    // beforeDestroy() {
    //   console.log('---beforeDestroy---')
    // },
    // destroyed() {
    //   console.log('---destroyed---')
    // },
    beforeUnmount() {
      console.log('---beforeUnmount---')
    },
    unmounted() {
      console.log('---unmounted---')
    }
    */
    //#endregion
  }
</script>
