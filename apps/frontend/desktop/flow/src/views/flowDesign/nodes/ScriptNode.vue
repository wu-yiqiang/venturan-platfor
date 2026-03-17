<script setup lang="ts">
import Node from './Node.vue'
import type { ScriptNode } from './type'
import type { Ref } from 'vue'
import type { ErrorInfo } from './type'

const props = defineProps<{
  node: ScriptNode
}>()
const { nodesError } = inject<{
  nodesError: Ref<Recordable<ErrorInfo[]>>
}>('flowDesign', { nodesError: ref({}) })
const content = ref<string>('')
watchEffect(() => {
    const { id, scriptType } = props.node
    if (scriptType) {
        content.value = scriptType + '脚本'
    }
//   const errors: ErrorInfo[] = []
//   const { id, name, waitType, unit, duration, timeDate } = props.node
//   if (waitType === 'date') {
//     content.value = `等至 ${timeDate || '?'}`
//     if (!timeDate) {
//       errors.push({ id: id, name: name, message: '未设置等待时间' })
//     }
//   } else if (waitType === 'duration') {
//     content.value = `等待 ${duration} ${unitMap[unit]}`
//     if (duration <= 0) {
//       errors.push({ id: id, name: name, message: '未设置等待时长' })
//     }
//   }
//   // 记录错误
//   if (errors.length > 0) {
//     nodesError.value[id] = errors
//   } else {
//     delete nodesError.value[id]
//   }
})
</script>

<template>
  <Node v-bind="$attrs" icon="script" color="#6b2fcb" :node="node">
    <el-text>{{ content }}</el-text>
  </Node>
</template>

<style scoped lang="scss"></style>
