<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>姓名： {{ name }}</div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from '@vue/composition-api'

export default {
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
