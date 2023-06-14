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
    name: '首页',
    path: '/main/index',
    icon: 'Setting'
  },
  {
    id: 20000,
    name: '系统管理',
    type: 1,
    path: '/main/system',
    icon: 'Link',
    children: [
      {
        id: 20010,
        path: '/main/system/user',
        name: '用户管理',
        type: 2
      }
    ]
  },
  {
    id: 30000,
    name: '老大',
    type: 1,
    path: '/main/one',
    icon: 'Promotion',
    children: [
      {
        id: 30010,
        path: '/main/one/two',
        name: '老二',
        type: 2,
        children: [
          {
            id: 30011,
            path: '/main/one/two/three',
            name: '老三',
            icon: 'Promotion',
            type: 3
          }
        ]
      }
    ]
  }
]

export default menus
