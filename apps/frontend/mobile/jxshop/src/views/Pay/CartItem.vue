<template>
  <div class="cart-item">
    <label class="checkbox-wrapper">
      <input type="checkbox" :checked="modelValue" @change="handleChange" class="checkbox-input" />
      <span class="checkbox-custom"></span>
    </label>
    <div class="item-content">
      <img :src="avatar(item?.fileName)" class="item-image" />
      <div class="item-info">
        <h3 class="item-title">{{ item?.name }}</h3>
        <div class="item-price">¥ {{ item?.price }}</div>
      </div>
      <van-stepper v-model="item.count" theme="round" :min="1" :max="item?.inventory" button-size="20" disable-input/>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  item: {
    type: Object as () => CartItem,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])
interface CartItem {
  id: number;
  name: string;
  price: number;
  fileName: string;
  inventory: number
}
const avatar = (fileName: string) => {
  if (!fileName) return ''
  return import.meta.env.VITE_STORAGE_BASE_URL + fileName
}
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit('update:modelValue', target.checked);
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  padding: 12px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-right: 16px;
    position: relative;

    .checkbox-input {
      opacity: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .checkbox-custom {
      width: 20px;
      height: 20px;
      border: 2px solid #ddd;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &::after {
        content: '';
        width: 8px;
        height: 4px;
        border: 2px solid white;
        border-top: none;
        border-right: none;
        transform: rotate(-45deg);
        opacity: 0;
        transition: opacity 0.2s;
      }
    }

    .checkbox-input:checked+.checkbox-custom {
      background-color: #f44;
      border-color: #f44;

      &::after {
        opacity: 1;
      }
    }
  }

  .item-content {
    display: flex;
    flex: 1;
    gap: 16px;
    justify-content: space-between;
    align-items: center;
    .item-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      background: #f5f5f5;
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      // justify-content: space-between;
      word-break: break-all;
      row-gap: 10px;
      .item-title {
        font-size: 13px;
        font-weight: 600;
        color: #333;
        margin: 0 0 8px 0;
        line-height: 1.4;
      } 

      .item-price {
        font-size: 13px;
        font-weight: bold;
        color: #f44;
      }
    }
  }
}
</style>