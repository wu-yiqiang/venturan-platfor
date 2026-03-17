<script setup lang="ts">
import type { EndNode } from '../nodes/type'
import ExecutionListener from './ExecutionListener.vue'
const activeName = ref('taskListen')
defineProps<{
  activeData: EndNode
}>()
</script>

<template>
  <el-tabs v-model="activeName" class="el-segmented">
    <el-tab-pane label="执行监听器" name="taskListen">
      <ExecutionListener :node="activeData" />
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped lang="scss"></style>
