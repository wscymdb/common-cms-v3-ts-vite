import { createPinia } from 'pinia'
import type { App } from 'vue'
import useLoginStore from './login/login'

const pinia = createPinia()

function registerPinia(app: App) {
  app.use(pinia)
  const loginStore = useLoginStore()
  loginStore.loadLoclInfosAction()
}

export default registerPinia
