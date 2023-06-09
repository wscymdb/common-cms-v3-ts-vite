import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'

// 先注册store 因为store里会动态加载路由
createApp(App).use(Store).use(Router).mount('#app')
