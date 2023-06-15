import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHashHistory } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'
import constantRoutes from './constant_routes'
import hidden_route from './hidden_routes'

const router = createRouter({
  routes: constantRoutes,
  history: createWebHashHistory()
})

router.addRoute('main', hidden_route)

router.beforeEach((to, form, next) => {
  const { path } = to

  if (path !== '/login') {
    // 是否存在token
    const token = localCache.getCache(LOGIN_TOKEN)
    if (!token) return next('/login')

    // 进入main页面默认跳转路由的第一个
    if (path === '/main') return next(firstMenu?.path)

    return next()
  }

  next()
})
export default router
