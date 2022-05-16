<template>
  <div>
    <input
      v-model="inputValue"
      class="search-input"
      @keyup.enter="search"
    /><button @click="search">search</button>
  </div>
</template>

<script>
// import { computed, watch, onMounted } from '@vue/composition-api'
export default {
  name: "SearchBar",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  components: {},
  setup(props, { attrs, listeners, slots, emit }) {
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

    function focus() {
      document.querySelector(".search-input").focus();
      stop();
    }

    return {
      inputValue,
      search,
      focus,
    };
  },
};
</script>

<style scoped>
</style>
