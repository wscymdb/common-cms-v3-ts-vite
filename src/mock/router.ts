import { IRouteRecordRaw } from '@/types/route'

const routes: IRouteRecordRaw[] = [
  {
    id: '1',
    path: '/main',
    name: 'main',
    meta: {
      title: '主页',
      icon: 'location' //非必填
    },
    sidebar: true, // 是否显示在侧边栏
    component: () => import('@/views/demo/demo.vue'),
    // children也是非必填
    children: [
      {
        id: '12',
        path: '/home',
        name: 'home',
        sidebar: true,
        meta: {
          title: '主页'
        },
        children: [
          {
            id: '123',
            path: '/home',
            name: 'home',
            sidebar: true,
            meta: {
              title: '主页'
            },
            component: () => import('@/views/demo/demo.vue')
          }
        ],
        component: () => import('@/views/demo/demo.vue')
      }
    ]
  },
  {
    id: '2',
    path: '/graph',
    name: 'graph',
    meta: {
      title: '图'
    },
    sidebar: true, // 是否显示在侧边栏
    component: () => import('@/views/demo/demo.vue')
  }
]

export default routes
