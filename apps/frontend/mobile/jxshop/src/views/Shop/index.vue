<template>
  <div class="topbar">
    <div class="back-btn" @click="$router.back()">
      <van-icon name="arrow-left" color="#fff" size="20" />
      
    </div>
    <div class="tilte">门店</div>
      <div></div>
  </div>
  <div class="takeout-page">
    <div class="shop-header" :style="{ backgroundImage: `url(${shopInfo.banner})` }">
      <div class="header-overlay"></div>
      <div class="header-content">
        <div class="shop-info-row">
          <h1 class="shop-name">{{ shopInfo.name }}</h1>
        </div>
        <!-- <div class="shop-meta-row">
          <span class="meta-item">🚚 {{ shopInfo.deliveryFee }}元配送费</span>
          <span class="meta-item">⏱️ {{ shopInfo.deliveryTime }}分钟</span>
          <span class="meta-item">💰 ¥{{ shopInfo.minPrice }}起送</span>
        </div>
        <div class="shop-notice" @click="showNotice = true">
          <van-icon name="bullhorn-o" />
          <span class="notice-text">{{ shopInfo.notice }}</span>
          <van-icon name="arrow" />
        </div> -->
      </div>
    </div>

    <!-- 2. 主体内容：左右双栏联动 -->
    <div class="main-container">
      <div class="category-sidebar">
        <div v-for="(cat, index) in menuData" :key="cat.id"
          :class="['sidebar-item', { active: activeCategoryId === cat.id }]" @click="scrollToCategory(cat.id)">
          <div class="item-name">{{ cat.name }}</div>
          <!-- <van-badge 
            v-if="getCategoryCount(cat.id) > 0" 
            :content="getCategoryCount(cat.id)" 
            class="sidebar-badge" 
          /> -->
        </div>
      </div>

      <!-- 右侧：商品列表 -->
      <div class="product-list-wrapper" ref="productListRef" @scroll="handleScroll">
        <div v-for="cat in menuData" :key="cat.id" :id="'cat-' + cat.id" class="category-section">
          <div class="section-title">{{ cat?.name }}</div>

          <div v-for="product in cat.products" :key="product.id" class="product-card">
            <div class="prod-left">
              <van-image :src="product.image" width="75px" height="75px" fit="cover" class="prod-img" />
            </div>
            <div class="prod-right">
              <div class="prod-name">{{ product.name }}</div>
              <div class="prod-desc">{{ product.description }}</div>
              <div class="prod-sales">月售{{ product.sales }}</div>
              <div class="prod-bottom">
                <div class="prod-price">
                  <span class="symbol">¥</span>
                  <span class="value">{{ product.price }}</span>
                  <span class="origin-price" v-if="product.originalPrice">¥{{ product.originalPrice }}</span>
                </div>

                <!-- 加减控件 -->
                <van-stepper v-model="cartMap[product.id]" min="0" integer button-size="22" input-width="24"
                  theme="round" @change="updateCart(product, $event)" class="custom-stepper" />
              </div>
            </div>
          </div>
        </div>
        <!-- 底部占位，防止被购物车遮挡 -->
        <div style="height: 60px;"></div>
      </div>
    </div>

    <!-- 3. 底部购物车栏 -->
    <div class="cart-bar-wrapper">
      <van-submit-bar :price="totalPrice * 100" button-text="去结算" button-type="primary" @submit="onSubmit"
        class="custom-submit-bar">
        <template #icon>
          <div class="cart-icon-container" @click="toggleCartPopup">
            <van-badge :content="totalCount" :max="99" class="cart-badge">
              <div class="cart-icon-bg">
                <van-icon name="shopping-cart-o" size="26" color="#fff" />
              </div>
            </van-badge>
            <!-- 差值提示 -->
            <div class="delivery-tip" v-if="totalPrice < shopInfo.minPrice && totalCount > 0">
              还差 ¥{{ (shopInfo.minPrice - totalPrice).toFixed(2) }} 起送
            </div>
          </div>
        </template>
        <template #label>
          <span class="selected-text">已选 {{ totalCount }} 件</span>
        </template>
      </van-submit-bar>
    </div>

    <!-- 4. 购物车详情弹窗 -->
    <van-popup v-model:show="isCartOpen" position="bottom" round style="height: 45%">
      <div class="cart-popup">
        <div class="popup-header">
          <span class="title">购物车</span>
          <span class="clear-btn" @click="clearCart" v-if="totalCount > 0">清空购物车</span>
        </div>
        <div class="popup-list">
          <div v-for="item in cartItemList" :key="item.id" class="popup-item">
            <div class="item-info">
              <div class="item-name">{{ item.name }}</div>
              <div class="item-price">¥{{ (item.price * item.count).toFixed(2) }}</div>
            </div>
            <van-stepper v-model="cartMap[item.id]" min="0" integer button-size="18"
              @change="updateCart(item, $event)" />
          </div>
        </div>
        <!-- 优惠券占位 -->
        <div class="coupon-area">
          <div class="coupon-item">
            <span>🧧 满20减2元</span>
            <van-icon name="arrow" />
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 5. 公告弹窗 -->
    <van-dialog v-model:show="showNotice" title="店铺公告" confirm-button-text="知道了" show-cancel-button>
      <p style="padding: 10px; line-height: 1.6; color: #666;">
        {{ shopInfo.noticeDetail || shopInfo.notice }}
        <br><br>
        温馨提示：本店所有食材均为当日采购，请放心食用。
      </p>
    </van-dialog>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, nextTick, onMounted } from 'vue';
import { showToast, showNotify } from 'vant';

const shopInfo = {
  id: 1,
  name: '超级美味·黄焖鸡米饭 (科技园店)',
  rating: 4.8,
  monthSales: '2000+',
  deliveryFee: 0,
  deliveryTime: 30,
  minPrice: 20,
  notice: '全场满50减10，新用户首单立减15元！',
  noticeDetail: '1. 全场满50减10\n2. 新用户首单立减15元\n3. 收藏店铺送饮料一瓶\n4. 营业时间：10:00 - 22:00',
  banner: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'
};

const menuData = [
  {
    id: 1,
    name: '人气热销',
    products: [
      { id: 101, name: '招牌黄焖鸡米饭', description: '鲜嫩鸡肉，浓郁汤汁，下饭神器', price: 22.8, originalPrice: 28, sales: 1200, tags: ['热销'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
      { id: 102, name: '香菇滑鸡煲', description: '精选香菇，滑嫩鸡肉', price: 24.5, sales: 850, tags: [], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg' },
      { id: 103, name: '麻辣肥牛煲', description: '香辣过瘾，肥牛卷超多', price: 28.0, sales: 600, tags: ['辣'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg' },
    ]
  },
  {
    id: 2,
    name: '超值套餐',
    products: [
      { id: 201, name: '单人豪华套餐', description: '黄焖鸡 + 可乐 + 煎蛋', price: 29.9, sales: 500, tags: ['套餐'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
      { id: 202, name: '双人分享餐', description: '大份黄焖鸡 + 2份米饭 + 2杯饮料', price: 45.0, originalPrice: 55, sales: 320, tags: ['套餐'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg' },
    ]
  },
  {
    id: 3,
    name: '精美小食',
    products: [
      { id: 301, name: '卤味鸡爪', description: '软糯脱骨，入味三分', price: 12.0, sales: 400, tags: [], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg' },
      { id: 302, name: '拍黄瓜', description: '清爽解腻', price: 8.0, sales: 200, tags: ['素'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg' },
      { id: 303, name: '五常大米饭', description: '优质东北大米', price: 2.0, sales: 5000, tags: [], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
    ]
  },
  {
    id: 4,
    name: '清爽饮品',
    products: [
      { id: 401, name: '冰镇可乐', description: '快乐肥宅水', price: 3.5, sales: 1500, tags: ['冷饮'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg' },
      { id: 402, name: '酸梅汤', description: '自制消暑', price: 5.0, sales: 800, tags: ['推荐'], image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg' },
    ]
  }
];

// --- 状态管理 ---

const activeCategoryId = ref(1);
const productListRef = ref<HTMLElement | null>(null);
const isCartOpen = ref(false);
const showNotice = ref(false);

// 购物车数据：{ [productId]: count }
const cartMap = reactive<Record<any, number>>({});

// --- 核心计算逻辑 ---
const lastCategoryId = computed(() => {
  return menuData[menuData.length - 1]?.id
})
// 获取购物车中完整的商品列表
const cartItemList = computed(() => {
  const list: any[] = [];
  menuData.forEach(cat => {
    cat.products.forEach(prod => {
      const count = cartMap[prod.id] || 0;
      if (count > 0) {
        list.push({ ...prod, count });
      }
    });
  });
  return list;
});

// 总数量
const totalCount = computed(() => {
  return Object.values(cartMap).reduce((sum, count) => sum + count, 0);
});

// 总金额
const totalPrice = computed(() => {
  return cartItemList.value.reduce((sum, item) => sum + (item.price * item.count), 0);
});

// 获取某分类的已选数量
const getCategoryCount = (catId: number) => {
  const cat = menuData.find(c => c.id === catId);
  if (!cat) return 0;
  return cat.products.reduce((sum, p) => sum + (cartMap[p.id] || 0), 0);
};

// --- 交互方法 ---

// 更新购物车
const updateCart = (product: any, newValue: number | boolean) => {
  const count = typeof newValue === 'boolean' ? (newValue ? 1 : 0) : newValue;
  if (count > 0) {
    cartMap[product.id] = count;
  } else {
    delete cartMap[product.id];
  }
};

// 清空购物车
const clearCart = () => {
  Object.keys(cartMap).forEach(key => delete cartMap[key]);
  isCartOpen.value = false;
  showToast('购物车已清空');
};

// 切换购物车弹窗
const toggleCartPopup = () => {
  if (totalCount.value === 0) {
    showToast('购物车是空的哦~');
    return;
  }
  isCartOpen.value = !isCartOpen.value;
};

// 左侧点击跳转
const scrollToCategory = (catId: number) => {
  activeCategoryId.value = catId;
  const element = document.getElementById(`cat-${catId}`);
  if (element && productListRef.value) {
    productListRef.value.scrollTo({
      top: element.offsetTop - 200,
      behavior: 'smooth'
    });
  }
};

// 右侧滚动监听 (自动高亮左侧)
const handleScroll = () => {
  if (!productListRef.value) return;
  nextTick(() => {
    const scrollTop = productListRef.value?.scrollTop ?? 0;
    const threshold = 220;
    for (let i = menuData.length - 1; i >= 0; i--) {
      const cat = menuData[i];
      const element = document.getElementById(`cat-${cat.id}`);
      if (element) {
        const offsetTop = element.offsetTop;
        if (scrollTop + threshold >= offsetTop) {
          if (activeCategoryId.value !== cat.id) {
            console.log("casda", activeCategoryId.value, cat.id)
            if (activeCategoryId.value !== lastCategoryId.value) {
              activeCategoryId.value = cat.id;

            }
          }

          break;
        }
      }
    }
  })
};

// 结算
const onSubmit = () => {
  if (totalPrice.value < shopInfo.minPrice) {
    showNotify({
      type: 'warning',
      message: `还差 ¥${(shopInfo.minPrice - totalPrice.value).toFixed(2)} 才起送哦`,
      duration: 2000
    });
    return;
  }

  showNotify({
    type: 'success',
    message: `下单成功！共 ${totalCount.value} 件，合计 ¥${totalPrice.value.toFixed(2)}`,
    duration: 2000
  });

  // 模拟跳转
  setTimeout(() => {
    clearCart();
  }, 1500);
};

onMounted(() => {
  // 初始化
});
</script>

<style lang="scss" scoped>
.topbar {
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.takeout-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
}

/* --- 头部区域 --- */
.shop-header {
  position: relative;
  height: 160px;
  background-size: cover;
  background-position: center;
  color: #fff;
  flex-shrink: 0;

  .header-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  }

  .header-content {
    position: relative;
    z-index: 1;
    padding: 40px 16px 12px;

    .shop-info-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 8px;

      .shop-name {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
      }
    }

    .shop-meta-row {
      font-size: 12px;
      opacity: 0.9;
      margin-bottom: 8px;

      .meta-item {
        margin-right: 12px;
      }
    }

    .shop-notice {
      display: flex;
      align-items: center;
      font-size: 12px;
      background: rgba(255, 255, 255, 0.1);
      padding: 4px 8px;
      border-radius: 12px;
      width: fit-content;

      .notice-text {
        margin: 0 6px;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .back-btn {
    position: absolute;
    top: 35px;
    left: 16px;
    z-index: 2;
    padding: 8px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
   
  }
}

/* --- 主体双栏 --- */
.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
  background: #fff;
}

.category-sidebar {
  width: 88px;
  background: #f8f8f8;
  overflow-y: auto;
  flex-shrink: 0;
  scrollbar-width: none;

  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Chrome/Safari */

  .sidebar-item {
    padding: 16px 8px;
    font-size: 13px;
    color: #666;
    text-align: center;
    position: relative;
    cursor: pointer;
    transition: background 0.2s;

    &.active {
      background: #fff;
      color: #333;
      font-weight: bold;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 60%;
        width: 4px;
        background: var(--van-primary-color);
        border-radius: 0 4px 4px 0;
      }
    }

    .sidebar-badge {
      position: absolute;
      top: 6px;
      right: 6px;
      transform: scale(0.85);

      :deep(.van-badge__content) {
        background: #ff4d4f;
        font-size: 9px;
        padding: 2px 4px;
        min-width: 14px;
        height: 14px;
      }
    }
  }
}

.product-list-wrapper {
  flex: 1;
  overflow-y: auto;
  background: #fff;
  padding: 0 12px;
  scroll-behavior: smooth;

  .category-section {
    .section-title {
      font-size: 14px;
      font-weight: bold;
      color: #333;
      padding: 16px 0 10px;
      position: sticky;
      top: 0;
      background: #fff;
      z-index: 10;
    }

    .product-card {
      display: flex;
      margin-bottom: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #f5f5f5;

      .prod-left {
        position: relative;
        margin-right: 12px;
        flex-shrink: 0;

        .prod-img {
          border-radius: 6px;
          background: #f9f9f9;
        }

        .promo-tag {
          position: absolute;
          top: -4px;
          left: -4px;
          transform: scale(0.8);
        }
      }

      .prod-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .prod-name {
          font-size: 15px;
          font-weight: 500;
          color: #333;
          margin-bottom: 4px;
        }

        .prod-desc {
          font-size: 11px;
          color: #999;
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .prod-sales {
          font-size: 10px;
          color: #ccc;
          margin-bottom: 6px;
        }

        .prod-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .prod-price {
            color: #ff4d4f;
            font-weight: bold;

            .symbol {
              font-size: 12px;
            }

            .value {
              font-size: 18px;
            }

            .origin-price {
              font-size: 11px;
              color: #999;
              text-decoration: line-through;
              margin-left: 4px;
              font-weight: normal;
            }
          }
          .custom-stepper {
            :deep(.van-stepper__minus),
            :deep(.van-stepper__plus) {
              width: 22px;
              height: 22px;
              background-color: #fff;
              border-color: #ffcd00;
              color: #ffcd00;
            }

            :deep(.van-stepper__input) {
              width: 24px;
              height: 22px;
              font-size: 12px;
              color: #333;
            }

            :deep(.van-stepper__minus--disabled),
            :deep(.van-stepper__plus--disabled) {
              border-color: #eee;
              color: #eee;
              background: #fff;
            }
          }
        }
      }
    }
  }
}

/* --- 底部购物车栏 --- */
.cart-bar-wrapper {
  flex-shrink: 0;
  z-index: 100;

  .custom-submit-bar {
    background: #fff;

    :deep(.van-submit-bar__text) {
      flex: 1;
      text-align: left;
      padding-left: 0;
      margin-left: 8px;
    }

    .cart-icon-container {
      position: relative;
      margin-right: 8px;

      .cart-icon-bg {
        width: 46px;
        height: 46px;
        background: #333;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        border: 2px solid #444;
      }

      .cart-badge {
        position: absolute;
        top: -5px;
        right: -5px;

        :deep(.van-badge__content) {
          background: #ff4d4f;
          border: 1px solid #fff;
          font-size: 10px;
          min-width: 16px;
          height: 16px;
        }
      }

      .delivery-tip {
        position: absolute;
        top: -24px;
        left: 50%;
        transform: translateX(-50%);
        background: #333;
        color: #fff;
        font-size: 10px;
        padding: 2px 8px;
        border-radius: 10px;
        white-space: nowrap;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          border-width: 4px 4px 0;
          border-style: solid;
          border-color: #333 transparent transparent;
        }
      }
    }

    .selected-text {
      font-size: 12px;
      color: #666;
    }

    :deep(.van-submit-bar__button) {
      font-weight: normal;
    }
  }
}

/* --- 弹窗样式 --- */
.cart-popup {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    .title {
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    .clear-btn {
      font-size: 13px;
      color: #999;
    }
  }

  .popup-list {
    flex: 1;
    overflow-y: auto;

    .popup-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #f5f5f5;

      .item-info {
        flex: 1;
      }

      .item-name {
        font-size: 14px;
        color: #333;
        margin-bottom: 4px;
      }

      .item-price {
        font-size: 13px;
        color: #ff4d4f;
      }
    }
  }

  .coupon-area {
    margin-top: 16px;
    border-top: 1px dashed #eee;
    padding-top: 12px;

    .coupon-item {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: #ff976a;
      padding: 4px 0;
    }
  }
}
</style>