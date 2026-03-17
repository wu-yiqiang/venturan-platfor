<!-- src/views/StoreView.vue -->
<template>
  <div class="store-page">
    <div class="store-header">
      <div class="back-btn" @click="$router.back()">
        <van-icon name="arrow-left" color="#fff" size="20" />
      </div>
      <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg" alt="门店横幅" class="banner-img" />
      <div class="store-name">超级美味·黄焖鸡米饭 (科技园店)</div>
    </div>
    <div class="product-list">
      <ProductItem v-for="item in products" :key="item.id" :item="item" @update-count="updateTotal" />
    </div>

    <!-- 底部结算栏 -->
    <div class="footer-bar">
      <div class="total">
        合计：<span class="amount">¥{{ total }}</span>
      </div>
      <button class="sum-btn" @click="goToCheckout">去结算</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import ProductItem from './ProductItem.vue';
import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
console.log("sdsd",sysStore.$state)
interface Product {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  sales: number;
  count: number;
}
 const products = ref<Product[]>([
      {
        id: 1,
        name: '招牌黄焖鸡米饭',
        desc: '鲜嫩鸡肉，浓郁汤汁，下饭神器',
        image: 'https://via.placeholder.com/80x80?text=Cat',
        price: 22.8,
        sales: 1200,
        count: 0,
      },
      {
        id: 2,
        name: '香菇滑鸡煲',
        desc: '精选香菇，滑嫩鸡肉',
        image: 'https://via.placeholder.com/80x80?text=iMac',
        price: 24.5,
        sales: 850,
        count: 0,
      },
      {
        id: 3,
        name: '麻辣肥牛煲',
        desc: '香辣过瘾，肥牛卷超多',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 0,
      },
      {
        id: 4,
        name: '66666',
        desc: '香辣过瘾，肥牛卷超多',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 0,
      },
      {
        id: 5,
        name: '7777',
        desc: '777',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 1,
      },
      {
        id: 6,
        name: '8888',
        desc: '888',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 1,
      },
      {
        id: 7,
        name: '999',
        desc: '9999',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 1,
      },
      {
        id: 10,
        name: '0000',
        desc: '000',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 1,
      },
      {
        id: 11,
        name: '9090',
        desc: '9090',
        image: 'https://via.placeholder.com/80x80?text=Phone',
        price: 28,
        sales: 600,
        count: 1,
      },
    ]);

const total = computed(() => {
  return products.value.reduce((sum, item) => sum + item.price * item.count, 0);
});

const updateTotal = () => {
  // 重新计算总价
};

const goToCheckout = () => {
  alert(`去结算，总价：¥${total.value}`);
};
</script>

<style lang="scss">
.store-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.store-header {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  .back-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    background-color: #333;
    border-radius: 50%;
    padding: 4px;
    display: grid;
    place-content: center;
  }
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .store-name {
    position: absolute;
    top: 70px;
    left: 16px;
    transform: translateY(-50%);
    color: white;
    font-size: 18px;
    font-weight: bold;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 4px 8px;
    border-radius: 4px;
  }
}

.product-list {
  padding: 16px;
  background-color: white;
  border-top: 1px solid #eee;
  overflow: auto;
}

.footer-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: white;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  .total {
    font-size: 16px;
    color: #333;

    .amount {
      color: #f44;
      font-weight: bold;
    }
  }

  .sum-btn {
    padding: 8px 20px;
    background-color: #f44;
    color: white;
    border: none;
    border-radius: 24px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #e00;
    }
  }
}
</style>