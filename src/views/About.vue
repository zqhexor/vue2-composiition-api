<template>
  <div class="about">
    <h3>选项式pinia测试</h3>
    <h1>{{ message }}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>{{ counter }}---{{ counterRef }}</div>
    <div>
      {{ doubleCountPlusOne }}
    </div>
    <button @click="add">add</button><button @click="add">add1</button>
    <button @click="reset">reset</button>
    <button @click="changeName">changeName</button>
    <br>
    {{age1}}
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "@/store";
import { storeToRefs } from "pinia";
// import { ref, onMounted } from '@vue/composition-api'

// 自定义状态管理
import { useUserStore } from "@/store/user";
const user = useUserStore()
const {age: age1} = user;

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
