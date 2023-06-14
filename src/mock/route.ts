// 此文件是用来自动生成路由和路由对应的vue组件的
// ymcli addroutecpns ./src/mock/route.ts v3t
// 注意因为该项目使用的是ES的规范，所以在使用该自动化工具的时候需要改为CommonJS的导出规范，只有当创建路由的时候才使用所以无伤大雅
const routes = [
  {
    title: '首页',
    name: 'index',
    dest: 'src/views/main/index'
  },
  {
    title: '用户管理',
    name: 'user',
    dest: 'src/views/main/system/user'
  },
  {
    title: '老三',
    name: 'world',
    dest: 'src/views/main/one/two/three'
  }
]

// module.exports = routes
