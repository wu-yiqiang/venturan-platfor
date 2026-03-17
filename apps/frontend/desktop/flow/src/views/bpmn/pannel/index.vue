<template>
  <section class='Pannel'>
    <ButtonTab :tabs="tabs" activeKey="class1" >
      <template #common>
        class1
      </template>
       <template #form>
        class2
      </template>
      <template #permission>
        class3
      </template>
      <template #class4>
        class4
      </template>
    </ButtonTab>
  </section>
</template>

<script setup lang='ts'>
import ButtonTab from '@/components/ButtonTab/index.vue'
const tabs = [
  {label: '通用属性', value: 'common' },
  {label: '表单权限', value: 'form'},
  {label: '操作权限', value: 'permission'},
  // {label: '分类4', value: 'class4'},
]
</script>
<style scoped lang='scss'>
.Pannel {
  padding: 20px;
  width: fit-content;
  width: 400px;
  background-color: white;
  overflow: auto;
  border-radius: 4px;
}
</style>