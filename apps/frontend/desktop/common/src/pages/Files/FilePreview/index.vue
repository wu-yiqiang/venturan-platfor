<template>
  <section class="FilePreview">
    <file-viewer :url="docUrl" :options="{toolbar: false}"/>
  </section>
</template>
<script lang="ts" setup>
// import FileViewer from '@flyfish-group/file-viewer3'
import {  ref } from 'vue'
const docUrl = ref('https://viewer.flyfish.dev/example/word.docx')
</script>
<style lang="scss" scoped>
.FilePreview{
  color: red;
  height: 70vh;
}
</style>
