<template>
  <div class="user">
    <h3>setup pinia测试</h3>
    <div>{{ age }}</div>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";
// import { ref, onMounted } from '@vue/composition-api'

const userStore = useUserStore();
console.log(userStore);

const { age } = storeToRefs(userStore);

const changeAge = () => {
  userStore.changeAge()
}

onMounted(() => {});
</script>
