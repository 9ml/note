<template>
  <div id="app">
    <Student name="Tom" sex="女" :age="18" />
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  }
}
</script>
