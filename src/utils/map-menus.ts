import type { RouteRecordRaw } from 'vue-router'

/**
 * 将菜单映射成路由
 * @param menus
 * @returns
 */
export const mapMenusToRoutes = (menus: any[]) => {
  const menusCopy = menus.map((item) => item)
  // 加载本地所有的路由
  const localRoutes: RouteRecordRaw[] = loadLocalRoutes()

  // 根据菜单匹配正确的路由
  const routes: RouteRecordRaw[] = []

  findTrueRoute(menusCopy, localRoutes, routes, null)

  return routes
}

export let firstMenu: Record<string, any> | null = null

/**
 * 根据菜单匹配路路由
 * @param menus
 * @param localRoutes
 * @param routes
 * @param fatherMenu 父路由 为了做/main/one/two/three每层都能重定向最后一层用的
 * @returns
 */
function findTrueRoute(
  menus: any[],
  localRoutes: RouteRecordRaw[],
  routes: RouteRecordRaw[],
  fatherMenu: any
) {
  const menu = menus.shift()
  if (!menu) return
  if (menu) {
    const route = localRoutes.find((item) => item.path === menu.path)

    // 因为本项目可以支持最多三层菜单
    //  /main/one/two/three
    // 希望输入 /main/one  /main/one  都跳转到/main/one/two/three
    // 这些用户是无法感知的但是我们开发者可以知道输入也能跳转，所以这步骤即使不写也没问题
    if (menu.type === 2 && menu.children && menu.children.length) {
      routes.push({ path: fatherMenu.path, redirect: menu.path })
    }
    if (route) {
      // 次步是为了
      // 比如这样一个路径 /main/one/two 跳转的是two页面
      // 但是我们如果手动在url中输入/main/one 希望可以跳转到/main/one/two

      const exists = routes.find((item) => item.path === menu.url)
      if (!exists && fatherMenu) routes.push({ path: fatherMenu.path, redirect: menu.path })

      routes.push(route)

      // 查找所有路由中的第一个
      if (!firstMenu) firstMenu = route
    }

    if (menu.children && menu.children.length) {
      findTrueRoute(menu.children, localRoutes, routes, menu)
    }
  }

  findTrueRoute(menus, localRoutes, routes, menu)
}

// 加载本地路由文件
function loadLocalRoutes() {
  const localRoutes: RouteRecordRaw[] = []

  const files: Record<string, any> = import.meta.glob('../router/main/**/*.ts', {
    eager: true
  })

  for (let file in files) {
    let module = files[file].default
    localRoutes.push(module)
  }

  return localRoutes
}

/**
 * 根据路径找到菜单  为了解决当点击某个菜单后 刷新页面 虽然还在当前页面 但是当前页面的高亮却不在当前页面了
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
  let breadcrumbs: IBreadcrumbs[] = []
  for (let menu of menus) {
    if (menu.children) {
      for (let subMenu of menu.children) {
        if (subMenu.children) {
          for (let lastMenu of subMenu.children) {
            if (lastMenu.path === path) {
              breadcrumbs = [
                { name: menu.name, path: menu.path },
                { name: subMenu.name, path: subMenu.path },
                { name: lastMenu.name, path: lastMenu.path }
              ]
            }
          }
        } else {
          if (subMenu.path === path) {
            breadcrumbs = [
              { name: menu.name, path: menu.path },
              { name: subMenu.name, path: subMenu.path }
            ]
          }
        }
      }
    } else {
      breadcrumbs = [{ name: menu.name, path: menu.path }]
    }
  }
  return breadcrumbs
}
