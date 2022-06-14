<template>
  <div class="user">
    <h3>setup pinia测试</h3>
    <div>{{ age }}</div>
    <div>{{ age1 }}</div>
    <button @click="changeAge">changeAge</button>
    <button @click="changeAge2">changeAge2</button>
  </div>
</template>

<script>
  import { useUserStore } from "@/store/user";
  import { useAlarmStore } from "@/store/alarm";
  import { mapState, mapActions, mapWritableState } from "@/store/storeManager";
  const user =  useUserStore()
  const alarm = useAlarmStore()

  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState(user,["age"]),
      ...mapWritableState(user,{"age":"age1"}),
    },
    methods: {
      ...mapActions(user,['changeAge']),
      changeAge2(){
        this.age1 += 1
      }
    }
  }
</script>
