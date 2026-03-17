<template>
  <div class="store-list-page">
    <van-nav-bar title="附近门店" />
    
    <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
      <div 
        v-for="store in storeList" 
        :key="store.id" 
        class="store-card"
        @click="goToStoreDetail(store)"
      >
        <div class="store-img-box">
          <van-image :src="store.image" width="100%" height="100%" fit="cover" />
          <van-tag type="success" v-if="store.isOpen" class="status-tag">营业中</van-tag>
          <van-tag type="danger" v-else class="status-tag">休息中</van-tag>
        </div>
        <div class="store-info">
          <div class="store-name">{{ store.name }}</div>
          <div class="store-desc">{{ store.address }}</div>
          <div class="store-meta">
            <span class="distance">📍 {{ store.distance }}km</span>
            <span class="delivery">💰 ¥{{ store.minPrice }}起送</span>
            <span class="time">⏱️ {{ store.deliveryTime }}分钟</span>
          </div>
        </div>
        <van-icon name="arrow" class="arrow-icon" />
      </div>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import { useOrderStore } from '@/stores/orderStore';

const router = useRouter();
// const orderStore = useOrderStore();
const loading = ref(false);
const finished = ref(false);
const storeList = ref<any[]>([]);

const mockStores = [
  { id: 1, name: '星巴克 (万象城店)', address: '南山区万象城一楼L102', distance: 0.5, minPrice: 20, deliveryTime: 15, isOpen: true, image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
  { id: 2, name: '瑞幸咖啡 (科技园店)', address: '南山区科技南十二路', distance: 1.2, minPrice: 15, deliveryTime: 25, isOpen: true, image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg' },
  { id: 3, name: '喜茶 (海岸城店)', address: '南山区海岸城西街', distance: 2.0, minPrice: 18, deliveryTime: 30, isOpen: false, image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg' },
];

const onLoad = () => {
  setTimeout(() => {
    storeList.value.push(...mockStores);
    loading.value = false;
    finished.value = true;
  }, 500);
};

const goToStoreDetail = (store: any) => {
  
  router.push({name: 'Shop'});
};
</script>

<style lang="scss" scoped>
.store-list-page { background: #f7f8fa; min-height: 100vh; }
.store-card {
  background: #fff;
  margin: 12px;
  padding: 12px;
  border-radius: 8px;
  display: flex;
  position: relative;
  &:active { background: #f9f9f9; }
}
.store-img-box {
  width: 90px;
  height: 90px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 12px;
  position: relative;
  flex-shrink: 0;
}
.status-tag { position: absolute; bottom: 4px; left: 4px; font-size: 10px; padding: 2px 4px; }
.store-info { flex: 1; display: flex; flex-direction: column; justify-content: center; }
.store-name { font-size: 16px; font-weight: bold; color: #333; margin-bottom: 4px; }
.store-desc { font-size: 12px; color: #999; margin-bottom: 8px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.store-meta { font-size: 11px; color: #666; display: flex; gap: 8px; }
.arrow-icon { align-self: center; color: #ccc; }
</style>