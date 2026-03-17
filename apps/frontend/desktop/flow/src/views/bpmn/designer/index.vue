<template>
  <section class='Designer'>
      <div id="bpmncanvas" ref="bpmncanvas" class="bpmncanvas"></div>
      <section class='Palette' id="Palette"></section>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import customIconProviderModule from './customIconProvider';
import { xmlStr } from './datas';
const bpmncanvas = ref()
onMounted(async () => {
  const modeler = new BpmnModeler({
    container: bpmncanvas.value,
    propertiesPanel: {
      parent: '#Palette'
    },
    additionalModules: [customIconProviderModule]
  });
  try {
    await modeler.importXML(xmlStr);
  } catch (err) {
    console.error('初始化错误:', err);
  }
});
</script>

<style scoped lang='scss'>
.Designer {
  flex: 1;
  .bpmncanvas {
    height: 100%;
    background-color: #f3f3f3;
    border-radius: 6px;
    :focus {
      border: none !important;
      outline: none !important;
    }
    :deep(.bjs-powered-by) {
      display: none;
    }
  }
}
</style>