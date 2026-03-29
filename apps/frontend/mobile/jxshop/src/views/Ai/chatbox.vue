<template>
  <section class="Chatbox">
    {{ props?.content }}
  </section>
</template>
<script lang="ts" setup>
import { reactive, watch, computed, ref } from 'vue'
const props = defineProps({
  content: {
    type: String,
  default: ''
  }
})
</script>
<style lang="scss" scoped>
//.Chatbox{}
</style>
