<template>
  <div class="about">
    <h1>{{ message }} </h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
// import { ref } from '@vue/composition-api'

const message = ref('good')

</script>
