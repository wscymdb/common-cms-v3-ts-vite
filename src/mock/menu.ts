import type { IMenu } from '@/types/mock-menu'

/**
 * type的枚举
 * 1  一级菜单
 * 2  二级菜单
 * 3  三级菜单
 */
const menus: IMenu[] = [
  {
    id: 10000,
    type: 1,
    name: '介绍',
    path: '/main/introduce',
    hidden: false,
    icon: 'Setting'
  },
  {
    id: 20000,
    name: '系统管理',
    type: 1,
    hidden: false,
    path: '/main/system',
    redirect: '/main/system/user',
    icon: 'Link',
    children: [
      {
        id: 20010,
        hidden: false,
        path: '/main/system/user',
        name: '用户管理',
        type: 2
      },
      {
        id: 20020,
        hidden: false,
        path: '/main/system/menu',
        name: '菜单管理',
        type: 2
      }
    ]
  },

  {
    id: 30000,
    hidden: false,
    name: '唱',
    type: 1,
    path: '/main/sing',
    redirect: '/main/sing/dance',
    icon: 'Promotion',
    children: [
      {
        id: 30010,
        hidden: false,
        path: '/main/sing/dance',
        redirect: '/main/sing/dance/rap',
        name: '跳',
        type: 2,
        children: [
          {
            id: 30011,
            hidden: false,
            path: '/main/sing/dance/rap',
            name: 'rap',
            icon: 'Promotion',
            type: 3
          },
          {
            id: 30012,
            hidden: false,
            path: '/main/sing/dance/basketball',
            name: '篮球',
            icon: 'Promotion',
            type: 3
          }
        ]
      }
    ]
  }
]

export default menus
