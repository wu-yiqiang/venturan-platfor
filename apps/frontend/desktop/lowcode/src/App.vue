<script setup lang="ts">
import { ref } from 'vue';
import data from './components/data.json';
import Editor from './packages/editor.vue';
import { cloneDeep } from 'lodash-es';
const formState = ref(cloneDeep(data));
</script>

<template>
  <div class="app">
    <Editor v-model:value="formState"/>
  </div>
</template>

<style scoped lang="scss">
.app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
