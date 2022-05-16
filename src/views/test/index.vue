<template>
  <div>
    <label-checker
      v-model="serviceTypesRef"
      :options="serviceTypeOptions"
      :type="CHECKER_TYPE.CHECKBOX"
      show-all
    >
      <template #all>
        全 部
      </template>
    </label-checker>

    <div style="display:flex">
      <Checker
        :active="allActiveRef"
        @click.native="checkAll">
        全部
      </Checker>
      <Checker
        v-for="item in optionsRef"
        :key="item.value"
        :value="item.value"
        :active="isActive(item.value)"
        @click.native="check(item)">
        {{ item.label }}
      </Checker>


    </div>
  </div>

</template>

<script setup>
  import LabelChecker, {CHECKER_TYPE} from '../../components/label-checker/index.vue';
  import Checker from '../../components/checker/index.vue';
  import { useChecker } from '../../hooks/useChecker';

  const serviceTypesRef = ref([]);
  const serviceTypeOptions = [
    {
      value: 1,
      label: '服务内'
    },
    {
      value: 2,
      label: '服务内&服务外'
    },
    {
      value: 3,
      label: '服务外'
    },
    {
      value: 4,
      label: '空'
    }
  ];

  const {
    checkedRef,
    optionsRef,
    isActive,
    check,
    allActiveRef,
    checkAll
  } = useChecker(CHECKER_TYPE.CHECKBOX)
  optionsRef.value = serviceTypeOptions

</script>

<style scoped>

</style>
