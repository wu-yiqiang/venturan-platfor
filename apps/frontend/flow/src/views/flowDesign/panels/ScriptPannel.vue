<script setup lang="ts">
import type { ScriptNode } from '../nodes/type'
const scriptTypes = [
  {
    value: 'javaScript',
    label: 'javaScript'
  },
  // {
  //   value: 'python',
  //   label: 'python'
  // },
  // {
  //   value: 'shell',
  //   label: 'shell'
  // },
]
defineProps<{
  activeData: ScriptNode
}>()
</script>

<template>
  <el-form label-position="top">
    <el-form-item prop="name" label="节点名称">
      <el-input v-model="activeData.name" />
    </el-form-item>
    <el-form-item prop="scriptType" label="脚本类型">
      <el-select v-model="activeData.scriptType" placeholder="请选择脚本类型">
        <el-option v-for="item in scriptTypes" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-form-item>
    <el-form-item prop="activeData.scriptContent" label="脚本内容">
      <el-input v-model="activeData.scriptContent" :rows="6" type="textarea" placeholder="请输入脚本内容" />
    </el-form-item>
    <el-form-item prop="activeData.scriptContent" label="描述">
      <el-input v-model="activeData.scriptDescription" :rows="6" type="textarea" placeholder="请输入描述" />
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss"></style>
