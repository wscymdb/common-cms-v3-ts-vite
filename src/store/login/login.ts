import { defineStore } from 'pinia'
import type { IAccountLogin } from '@/types/login'
import { localCache } from '@/utils/cache'
import { LOGIN_ACCOUNT, LOGIN_TOKEN, USER_MENUS } from '@/global/constants'
import router from '@/router'
import menu from '@/mock/menu'
import { mapMenusToRoutes } from '@/utils/map-menus'

interface ILoginAction {
  loginAction: (params: IAccountLogin) => void
  getUserMenuTreeAction: () => void
  loadLoclInfosAction: () => void
  loginOutAction: () => void
}

const useLoginStore = defineStore<string, Record<string, any>, {}, ILoginAction>('login', {
  state() {
    return {
      name: 'loginStore',
      userMenus: [],
      account: null,
      token: null
    }
  },
  actions: {
    async loginAction(params: IAccountLogin) {
      // 网路请求
      // todo
      // 缓存用户信息
      localCache.setCache(LOGIN_ACCOUNT, params)
      // 缓存token
      localCache.setCache(LOGIN_TOKEN, Date.now())
      // 获取用户菜单权限
      await this.getUserMenuTreeAction()
      // 动态添加路由
      const routes = mapMenusToRoutes(this.userMenus)
      console.log(routes)

      routes.forEach((route) => router.addRoute('main', route))

      router.push('/')
    },
    // 获取角色菜单
    async getUserMenuTreeAction() {
      return new Promise((resolve) => {
        setTimeout(() => {
          localCache.setCache(USER_MENUS, menu)
          this.userMenus = menu
          resolve()
        }, 300)
      })
    },
    // 当用户登录之后在main页面刷新，那么注册的路由就会没有了，就不能正确的跳转
    // 在注册pinia之后调用这个函数 就可以重新注册了
    loadLoclInfosAction() {
      const token = localCache.getCache(LOGIN_TOKEN)
      const account = localCache.getCache('account')
      const userMenus = localCache.getCache(USER_MENUS)

      if (token && account && userMenus) {
        this.token = token
        this.account = account
        this.userMenus = userMenus
      }

      // 动态添加路由
      const routes = mapMenusToRoutes(this.userMenus)
      routes.forEach((route) => router.addRoute('main', route))
    },
    loginOutAction() {
      localCache.clear()
      router.push('/login')
    }
  }
})

export default useLoginStore
