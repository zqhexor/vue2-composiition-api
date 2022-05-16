<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <search-bar
      ref="searchComp"
      v-model="inputRef"
      @on-search="handleSearch"
    ></search-bar>
    <div>搜索值： {{ searchRef }}</div>
    <button @click="focus">input聚焦</button>
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import SearchBar from "@/components/search-bar/search-bar2.vue";
// import { ref } from "@vue/composition-api";
import { useNow, useDateFormat } from '@vueuse/core'
const searchComp = ref(null);
const searchRef = ref("");

const inputRef = ref("");
const handleSearch = (value) => {
  searchRef.value = value;
};

const focus = () => {
  searchComp.value.focus();
};

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
console.log('测试vueUse',formatted)
</script>
