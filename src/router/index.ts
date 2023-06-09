import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'test',
    component: () => import('@/views/demo/demo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, form, next) => {
  console.log(to)
  const { path } = to

  if (path !== '/login') {
    // 是否存在token
    const token = localCache.getCache(LOGIN_TOKEN)
    if (!token) return next('/login')

    //

    return next()
  }

  next()
})
export default router
