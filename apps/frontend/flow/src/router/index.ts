import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
import Bpmn from '@/views/bpmn/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bpmn',
      name: 'Bpmn',
      component: Bpmn
    }
  ]
})

export default router
