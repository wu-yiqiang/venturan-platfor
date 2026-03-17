<script setup lang='ts'>
import type { Tab } from './types';
const props = defineProps<{
  tabs: Tab[]
}>()
</script>

<template>
  <section class='ButtonTab'>
    <el-tabs class="el-segmented">
      <el-tab-pane v-for="(tab, index) in tabs" :key="index" :label="tab?.label" >
        <slot :name="tab?.value" />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<style scoped lang='scss'>
@import '@/styles/el-segmented.scss';

.ButtonTab {
  position: sticky;
  .el-tabs {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: inherit;
    .el-tabs__header {
      position: sticky;
    }
    :deep(.el-tabs__content) {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;
      padding: var(--padding-width);
    }
    :deep(.el-tabs__item) {
      flex: 1;
    }
  }
}
</style>