<template>
  <Demo @hello="showHelloMsg" msg="Hello World">
    <!-- <span>9ml</span> -->
    <!-- vue3 废弃了 slot="" -->
    <template v-slot:test> 
      <div>
        Tom
      </div>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components: {
      Demo
    },
    setup() {
      const showHelloMsg = (value) => {
        alert('Hello World：' + value)
      }

      return {
        showHelloMsg
      }
    }
  }
</script>
