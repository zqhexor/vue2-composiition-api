// import { defineStore } from "pinia";
import { defineStore } from "@/store/storeManager";
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

// class useUserStore {
//   firstName = ref("HexOr");
//   lastName = ref("Zeng");
//   age = ref(16)
//   getName = computed(() => {
//     return this.firstName.value + " " + this.lastName.value;
//   });
//   changeAge = () => {
//     this.age.value++
//   }
// }
//
// export default new useUserStore()

