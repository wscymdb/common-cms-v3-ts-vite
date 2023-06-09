import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import ElementIcon from './global/register-icons'
import 'normalize.css'
import '@/assets/css/common.less'
// 先注册store 因为store里会动态加载路由
createApp(App).use(Store).use(Router).use(ElementIcon).mount('#app')
