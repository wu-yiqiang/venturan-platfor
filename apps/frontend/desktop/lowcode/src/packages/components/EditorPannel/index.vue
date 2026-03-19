<template>
  <section class="EditorPannel">
   <ButtonTab :tabs="tabs" >
    <template #form>
      宽度: {{form?.width}}   <el-input-number v-model="form.width" :step="10" />
px
            高度: {{form?.height}}px
        <el-input-number v-model="form.height" :step="10" />
    </template>
   </ButtonTab>
  </section>
</template>
<script lang="ts" setup>
import ButtonTab from '@/components/ButtonTab/index.vue'
const props = defineProps({
  block: {
    type: Object,
    default: () => {}
  },
  form: {
    type: Object,
    default: () => {}
  }
})
const tabs = [
  { label: '表单属性', value: 'form' },
  { label: '通用属性', value: 'common' },
  { label: '私有属性', value: 'private' }
]
console.log("block", props.block)
</script>
<style lang="scss" scoped>
.EditorPannel{
  width: 300px;
  background-color: #fff;
  border-radius: 4px;
  padding: 14px;
}
</style>
