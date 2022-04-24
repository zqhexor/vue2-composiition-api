import { defineStore } from "pinia";
export const useUserStore = defineStore("user", () => {
  const firstName = ref("HexOr");
  const lastName = ref("Zeng");
  const age = ref(16)
  const getName = computed(() => {
    return firstName.value + " " + lastName.value;
  });
  const changeAge = () => {
    age.value++
  }
  return {
    firstName,
    lastName,
    getName,
    age,
    changeAge
  };
});
