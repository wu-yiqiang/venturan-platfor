import {
  createRouter,
  createWebHistory
} from 'vue-router'
import setPageTitle from '@/utils/set-page-title'
import routes from './routes'
import { useSysStore } from '@/store/modules/sysStore'

// const sysStore = useSysStore()
const router = createRouter({
  history: createWebHistory('/jxshop'),
  routes
})

router.beforeEach((to, _from, next) => {
  // console.log('tototo', sysStore)
  // const tokenInfo = sysStore.getTokenInfo();
  // if (tokenInfo && to.path !== '/login') {
  //   next('/login')
  // }
  // 路由缓存
  // 页面 title
  setPageTitle(to.meta.title)
  next()
})

export default router
