<script setup>
const props = defineProps({
  modelValue: {
    type: Array
  }
})
const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const control = ref()
defineExpose({
  $control: control
})
</script>

<template>
  <el-cascader v-model="value" ref="control" />
</template>

<style scoped></style>
