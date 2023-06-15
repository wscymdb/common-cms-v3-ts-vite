import type { RouteRecordRaw } from 'vue-router'

/**
 * 本文件加载的是本项目的所有动态路由
 * 规定 只要是在router下的所有路由文件都是需要权限的
 * 也就是在router文件夹下所有的路由文件都是需要通过后端给的权限然后动态加载的
 */
function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []

  const files: Record<string, any> = import.meta.glob('../router/*/**/*.ts', {
    eager: true
  })

  for (let file in files) {
    let module = files[file].default
    localRoutes.push(module)
  }

  return localRoutes
}

const dynamicRoute = loadLocalRoutes()

export default dynamicRoute
