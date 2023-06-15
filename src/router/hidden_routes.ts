import type { RouteRecordRaw } from 'vue-router'

/**
 * 该文件是隐藏路由 也就是不显示在侧边栏的路由，
 * 比如在系统管理页面下，有一个查看详情按钮，点击会跳转到详情页面 但是这个查看详情页面不需要以菜单的形式展示在侧边栏
 */

const hidden_route: RouteRecordRaw = {
  path: '/edit',
  name: 'edit',
  children: [
    {
      path: 'bd',
      name: 'bd',
      component: () => import('@/views/main/sing/dance/basketball/cpns/bd.vue')
    }
  ]
}

export default hidden_route
