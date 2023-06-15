// 此文件是用来自动生成路由和路由对应的vue组件的
// ymcli addroutecpns ./src/mock/route.ts ts
// 注意因为该项目使用的是ES的规范，所以在使用该自动化工具的时候需要改为CommonJS的导出规范，只有当创建路由的时候才使用所以无伤大雅
const routes = [
  {
    title: '介绍',
    name: 'introduce',
    dest: 'src/views/main/introduce'
  },
  {
    title: '用户管理',
    name: 'user',
    dest: 'src/views/main/system/user'
  },
  {
    title: '菜单管理',
    name: 'menu',
    dest: 'src/views/main/system/menu'
  },
  {
    title: 'rap',
    name: 'rap',
    dest: 'src/views/main/sing/dance/rap'
  },
  {
    title: '篮球',
    name: 'basketball',
    dest: 'src/views/main/sing/dance/basketball'
  },
  {
    title: '蹦迪',
    name: 'bd',
    dest: 'src/views/main/sing/dance/basketball/cpns'
  }
]

// module.exports = routes
