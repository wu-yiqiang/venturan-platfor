<script setup lang="ts">
import type { BranchNode } from './type'
import ParalleGatewayNode from './ParalleGatewayNode.vue';

defineProps<{
  node: BranchNode
}>()
</script>

<template>
  <ParalleGatewayNode v-bind="$attrs" :node="node">
    <template #default="{ addNode, readOnly }">
      <el-button type="primary" :disabled="readOnly" @click="addNode('parallelBranch', node)" plain round
        >添加并行分支</el-button
      >
    </template>
  </ParalleGatewayNode>
</template>

<style scoped lang="scss"></style>
