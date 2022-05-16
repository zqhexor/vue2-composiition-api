<template>
  <ul class="custom-checker">
    <checker-item v-if="showAll" :active="allActiveRef" @check="checkAll">
      <slot name="all">
        全部
      </slot>
    </checker-item>

    <slot>
      <checker-item
        v-for="option in options"
        :key="option.value"
        :active="isActive(option.value)"
        :disabled="option.disabled"
        :value="option.value"
        @check="check"
      >
        {{ option.label }}
      </checker-item>
    </slot>
  </ul>
</template>

<script>
export const CHECKER_TYPE = {
  RADIO: 'radio',
  CHECKBOX: 'checkbox'
};
</script>
<script setup>
import CheckerItem from './checker-item';
const props = defineProps({
  value: [String, Number, Array], // 值
  options: { // 选项{label:'选项1',value:'1',disabled:true}
    type: Array,
    default: () => []
  },
  type: { // 类型
    type: String,
    default: 'checkbox',
    validator: function (value) {
      return ['radio', 'checkbox'].includes(value);
    }
  },
  min: { // 最小选中数
    type: Number,
    default: 0
  },
  max: { // 最大选中数
    type: Number
  },
  showAll: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['input', 'change']);

const isRadio = props.type === 'radio';

// 可用选项
const enabledOptionsRef = computed(()=>props.options.filter((option) => option.disabled !== true));

// 最大选项默认值
const maxDefaultRef = computed(()=>{
  if (props.showAll) {
    return enabledOptionsRef.value.length;
  } else {
    return props.max || enabledOptionsRef.value.length;
  }
});

// 当前选项
const currentRef = computed({
  get() {
    return props.value;
  },
  set(val) {
    emit('input', val);
  }
});

const isActive = (value) => {
  return isRadio ? currentRef.value === value : currentRef.value.includes(value);
};

const checkAll = () => {
  if (currentRef.value.length === enabledOptionsRef.value.length) {
    currentRef.value = [];
  } else {
    currentRef.value = enabledOptionsRef.value.map((item) => item.value);
  }
};

const allActiveRef = computed(() => currentRef.value.length === enabledOptionsRef.value.length);

/**
 * 点击选项选择
 */
function check(value) {
  if (isRadio) {
    checkRadio(value);
  } else {
    checkCheckbox(value);
  }
}

function checkRadio(value) {
  currentRef.value = value;
}

function checkCheckbox(value) {
  const valueLen = currentRef.value.length;
  const max = maxDefaultRef.value;
  const min = props.min;

  const index = currentRef.value.indexOf(value);

  if (index > -1) {
    (valueLen > min) && currentRef.value.splice(index, 1);
  } else {
    (valueLen < max) && currentRef.value.push(value);
  }
}

watch(currentRef, (value)=>{
  emit('change', value);
});

</script>
