<template>
  <div class="about">
    <h3>选项式pinia测试</h3>
    <h1>{{ message }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{ counter }}---{{ counterRef }}</div>
    <div>
      {{ doubleCountPlusOne }}
    </div>
    <button @click="add">add</button><button @click="add1">add1</button>
    <button @click="reset">reset</button>
    <button @click="changeName">changeName</button>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
// import { ref, onMounted } from '@vue/composition-api'
// pinia
const message = ref("good");
const store = useStore();
console.log(store);
const { counter } = storeToRefs(store);
const counterRef = computed(() => store.counter);
const add = () => {
  store.counter++;
};
const add1 = () => {
  store.$patch((state) => {
    state.counter++;
  });
};
const reset = () => {
  store.$reset();
};
const changeName = () => {
  store.setName('hexor')
};

const doubleCountPlusOne = computed(() => store.doubleCountPlusOne);
onMounted(() => {});
</script>
