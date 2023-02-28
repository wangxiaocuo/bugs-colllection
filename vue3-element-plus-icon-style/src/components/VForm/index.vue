<script>
import VCascader from './src/components/VCascader.vue'

export default {
  name: 'VForm',
  // 内置组件都可以传递给 <component> 的 is，但是如果想通过名称传递则必须先对其进行注册
  // https://cn.vuejs.org/api/built-in-special-elements.html#component
  // https://cn.vuejs.org/guide/essentials/component-basics.html#dynamic-components
  components: {
    VCascader
  }
}
</script>

<script setup>
const formValue = reactive({})

defineProps({
  fields: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['change', 'enter'])
</script>

<template>
  <el-form class="w-full overflow-hidden" ref="formRef" :model="formValue">
    <el-form-item
      v-for="field in fields"
      :key="field.key"
      v-bind="field.formItem"
      :prop="field.key">
      <slot :name="field.key">
        <component
          v-if="field.type"
          v-bind="field.provide"
          v-model="formValue[field.key]"
          :is="field.type" />
      </slot>
    </el-form-item>
  </el-form>
</template>
