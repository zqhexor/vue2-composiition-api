<template>
  <div class="user">
    <h3>setup pinia测试</h3>
    <div>{{ age }}</div>
    <button @click="changeAge">changeAge</button>
    <button @click="changeAge1">直接改变age</button>
  </div>
</template>

<script setup>
import  { useUserStore }  from "@/store/user";
const userStore = useUserStore();
console.log(userStore);
const { age } = userStore

const changeAge = () => {
  userStore.changeAge();
};

const changeAge1 = () => {
  age.value += 1
};

</script>
