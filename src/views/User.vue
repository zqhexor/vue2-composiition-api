<template>
  <div class="user">
    <h3>setup pinia测试</h3>
    <div>{{ age }}</div>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script setup>
import  {useUserStore}  from "@/store/user";
import { storeToRefs } from "pinia";
// import { ref } from '@vue/composition-api'

const userStore = useUserStore();
console.log(userStore);

const { age } = userStore

const changeAge = () => {
  userStore.changeAge();
};

</script>

<!--<script>-->
  <!--import { useUserStore } from "@/store/user";-->
  <!--import { useAlarmStore } from "@/store/alarm";-->
  <!--import { mapState, mapActions } from "@/store/storeManager";-->
  <!--import { storeToRefs } from "pinia";-->
  <!--const user =  useUserStore()-->
  <!--const alarm = useAlarmStore()-->

  <!--export default {-->
    <!--data() {-->
      <!--return {-->

      <!--}-->
    <!--},-->
    <!--computed: {-->
      <!--...mapState(user,["age"])-->
    <!--},-->
    <!--methods: {-->
      <!--...mapActions(user,['changeAge'])-->
    <!--}-->
  <!--}-->
<!--</script>-->
