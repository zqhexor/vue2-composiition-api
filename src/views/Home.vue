<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>姓名： {{ name }}</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from '@vue/composition-api'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    const name = ref('小松菜奈')
    return {
      name
    }
  }
}
</script>
