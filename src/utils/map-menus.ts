import type { RouteRecordRaw } from 'vue-router'
import dynamicRoutes from '@/router/dynamic_routes'

/**
 * 将菜单映射成路由
 * @param menus
 * @returns
 */
export const mapMenusToRoutes = (menus: any[]) => {
  // 根据菜单匹配正确的路由
  const routes: RouteRecordRaw[] = []

  findTrueRoute(menus, routes)

  return routes
}

export let firstMenu: Record<string, any> | null = null

/**
 * 根据菜单匹配路路由
 * @param menus
 * @param localRoutes
 * @param routes

 */
function findTrueRoute(menus: any[], routes: RouteRecordRaw[]) {
  for (let menu of menus) {
    if (menu.children && menu.children.length) findTrueRoute(menu.children, routes)
    const route = dynamicRoutes.find((item) => item.path === menu.path)
    if (route) {
      routes.push(route)

      if (!firstMenu) firstMenu = route
    } else {
      // 添加重定向路由
      // 因为菜单至多支持三级菜单 那么手动输入url的时候如果输入一、二级菜单，重定向三级菜单
      if (menu.children && menu.children.length) {
        if (menu.redirect) routes.push({ path: menu.path, redirect: menu.redirect })
      }
    }
  }
}

/**
 * 根据路径找到菜单  为了解决当点击某个菜单后 刷新页面 虽然还在当前页面 但是菜单激活项不是当前页面
 * @param path
 * @param menus
 * @returns
 */
export function mapPathToMenu(path: string, menus: any[]) {
  const flatUserMenu: any[] = []
  findChildren(menus, flatUserMenu)

  const menu = flatUserMenu.find((item) => item.path === path)
  if (menu) return menu.id + ''
}

function findChildren(menu: any, arr: any[]) {
  if (menu instanceof Array) {
    for (let item of menu) {
      if (item.children && item.children.length) findChildren(item.children, arr)
      arr.push(item)
    }
  } else {
    arr.push(menu)
  }
}

interface IBreadcrumbs {
  name: string
  path: string
}
/**
 * 将路径转成面包屑
 * @param path
 * @param menus
 * @returns
 */
export function mapPathToBreadcrumbs(path: string, menus: any[]) {
  const breadcrumbs = findTrueBreadcrumbs(path, menus)
  if (!breadcrumbs) return null

  const breadcrumbsList: IBreadcrumbs[] = breadcrumbs.split(',').map((item) => {
    const [name, path] = item.split('-')
    return { name, path }
  })

  return breadcrumbsList
}

//
function findTrueBreadcrumbs(path: string, menus: any[]): string | null {
  for (let menu of menus) {
    let trueMenu
    if (menu.path === path) return `${menu.name}-${menu.path}`
    if (menu.children && menu.children.length) {
      trueMenu = findTrueBreadcrumbs(path, menu.children)
    }
    if (trueMenu) return `${menu.name}-${menu.path}` + ',' + trueMenu
  }
  return null
}
