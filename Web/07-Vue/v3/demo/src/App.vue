<template>
  <div>
    <h1>
      User Info
    </h1>
    <h2>name: {{name}}</h2>
    <h2>age: {{age}}</h2>
    <h2>job.type: {{job.type}}</h2>
    <h2>job.salary: {{job.salary}}</h2>
    <button @click="changeInfo">Change</button>
  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: 'App',
    setup() {
      let name = ref('Tom')
      let age = ref(18)
      let job = ref({
        type: 'WEB',
        salary: '30k'
      })


      let changeInfo = () => {
        name.value = '9ml'
        age.value = 19
        job.value.type = 'UI'
        job.value.type = '60k'
        console.log(name, age)
      }

      return {
        name,
        age,
        changeInfo,
        job
      }
    }
  }
</script>
