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
    parentId: null,
    name: '介绍',
    path: '/main/introduce',
    icon: 'Setting'
  },
  {
    id: 20000,
    name: '系统管理',
    type: 1,
    parentId: null,
    path: '/main/system',
    icon: 'Link',
    children: [
      {
        id: 20010,
        path: '/main/system/user',
        name: '用户管理',
        parentId: 20000,
        type: 2
      },
      {
        id: 20020,
        path: '/main/system/menu',
        name: '菜单管理',
        parentId: 20000,
        type: 2
      }
    ]
  },
  {
    id: 30000,
    name: '唱',
    type: 1,
    path: '/main/sing',
    icon: 'Promotion',
    parentId: null,
    children: [
      {
        id: 30010,
        path: '/main/sing/dance',
        name: '跳',
        type: 2,
        parentId: 30000,
        children: [
          {
            id: 30011,
            path: '/main/sing/dance/rap',
            name: 'rap',
            icon: 'Promotion',
            parentId: 30010,
            type: 3
          },
          {
            id: 30012,
            path: '/main/sing/dance/basketball',
            name: '篮球',
            icon: 'Promotion',
            parentId: 30010,
            type: 3
          }
        ]
      }
    ]
  }
]

export default menus
