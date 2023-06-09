import { defineStore } from 'pinia'
import type { IAccountLogin } from '@/types/login'
import { localCache } from '@/utils/cache'
import { LOGIN_ACCOUNT, LOGIN_TOKEN } from '@/global/constants'
import router from '@/router'

const useLoginStore = defineStore('login', {
  state() {
    return {
      name: 'loginStore'
    }
  },
  actions: {
    loginAction(params: IAccountLogin) {
      localCache.setCache(LOGIN_ACCOUNT, params)
      localCache.setCache(LOGIN_TOKEN, Date.now())
      router.push('/')
    }
  }
})

export default useLoginStore
