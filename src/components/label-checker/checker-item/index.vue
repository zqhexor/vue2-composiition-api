<template>
  <li
    class="checker-item"
    :class="{'checker-item_active': active, 'checker-item_disabled': disabled}"
    @click="clickHandler()"
  >
    <slot />
  </li>
</template>

<script setup>
const props = defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(['check']);

// 点击事件
function clickHandler() {
  if (props.disabled === true) {
    return;
  }
  emit('check', props.value);
}
</script>
<style lang="less" scoped>
.checker-item {
  position: relative;
  color: #666666;
  font-size: 12px;
  line-height: 16px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  padding: 8px 15px;
  background: white;
  border: 1px solid #CCCCCC;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 12px;

  &:hover {
    color: #2E6BE6;
  }

  &.checker-item_active {
    color: #2E6BE6;
    background: #E6EEFF;
    border: 1px solid #2E6BE6;

    &::after {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      position: absolute;
      right: -1px;
      top: -1px;
      background: url('~@/assets/checked.svg') center/contain no-repeat;
    }
  }

  &.checker-item_disabled {
    color: #666666;
    background: #F2F2F2;
    border-color: #E6E6E6;

    &:hover {
      color: #666666;
      cursor: no-drop;
    }
  }
}

</style>
