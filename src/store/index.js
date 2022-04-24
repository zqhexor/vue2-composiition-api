import { defineStore } from 'pinia'
export const useStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
      name: "HexOr",
      isAdmin: true,
    };
  },
  getters: {
    doubleCount: (state) => state.counter * 2,
    doubleCountPlusOne() {
      // autocompletion ✨
      return this.doubleCount + 1;
    },
  },
  actions: {
    setName(name){
      this.name = name
    },
  },
});
