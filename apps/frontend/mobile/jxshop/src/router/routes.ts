import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: Layout,
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '主页',
          bottomTab: true
        }
      },
      {
        path: 'shop',
        name: 'Shop',
        component: () => import('@/views/Shop/index.vue'),
        meta: {
          title: '购买',
          bottomTab: false
        }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/Orders/index.vue'),
        meta: {
          title: '订单',
          bottomTab: false
        }
      },
      {
        path: 'ai',
        name: 'AI',
        component: () => import('@/views/Ai/index.vue'),
        meta: {
          title: 'AI助手',
          bottomTab: false
        }
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/User/index.vue'),
        meta: {
          title: '用户信息',
          bottomTab: false
        }
      },
      {
        path: 'avatar',
        name: 'Avatar',
        component: () => import('@/views/User/avatar.vue'),
        meta: {
          title: '头像编辑',
          bottomTab: false
        }
      },
      {
        path: 'my',
        name: 'My',
        component: () => import('@/views/My/index.vue'),
        meta: {
          title: '我的',
          noCache: true,
          bottomTab: true
        }
      }
    ]
  },
  // 404 页面
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    meta: {
      title: '页面未找到',
      noCache: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录',
      noCache: true
    }
  },
  {
    path: '/orders-details',
    name: 'OrderDetails',
    component: () => import('@/views/Orders/details.vue'),
    meta: {
      title: '代付详情',
      bottomTab: false
    }
  }
]

export default routes
