<script setup>
// 如果手动引入没有问题
// import { ElIcon } from 'element-plus'

const props = defineProps({
  buttons: {
    type: Array,
  },
  row: {
    type: Object
  },
  content: {
    type: String
  }
})

const emit = defineEmits(['action'])

function handleCommand(eventFnName) {
  if (eventFnName) {
    emit('action', eventFnName, props.row)
  }
}
</script>

<template>
  <div v-if="props.buttons?.length">
    <el-dropdown placement="bottom-end" @command="handleCommand">
      <el-button>
        操作
        <el-icon class="el-icon--right">
          <icon-ep-arrow-down />
        </el-icon>
      </el-button>
    </el-dropdown>
  </div>
  <span v-else>
    {{ props.content }}
  </span>
</template>

<style scoped></style>
