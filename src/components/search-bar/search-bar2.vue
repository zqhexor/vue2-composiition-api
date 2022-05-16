<template>
  <div>
    <input
      v-model="inputValue"
      class="search-input2"
      @keyup.enter="search"
    /><button @click="search">search</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<script setup>
// import { computed, watch, onMounted } from '@vue/composition-api'
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["on-search"]);
const vm = getCurrentInstance();
console.log(vm);
console.log(vm.setupContext.listeners);
console.log(useAttrs());
console.log(useSlots());
const inputValue = computed({
  get: () => props.value,
  set: (value) => emit("input", value),
});

const stop = watch(
  inputValue,
  (val, oldValue) => {
    console.log(val, oldValue);
  },
  {
    immediate: true,
  }
);

onMounted(() => {
  console.log("----onMounted----");
});

const search = () => {
  emit("on-search", inputValue.value);
};

const focus = () => {
  document.querySelector(".search-input2").focus();
  stop();
};

defineExpose({
  focus,
});
</script>

<style scoped>
</style>
