<template>
  <section class='Topbar'>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary">Primary</el-button>
    <el-input-number v-model="num" :min="80" :step="step" :max="200" @change="handleScale" />
  </section>
</template>

<script setup lang='ts'>
const num = ref(100)
const step = 10
const handleScale = () => {}
</script>
<style scoped lang='scss'>
.Topbar {
  display: flex;
  padding: 20px;
  column-gap: 10px;
}
</style>