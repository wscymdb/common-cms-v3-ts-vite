import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

import { fileURLToPath, URL } from 'node:url'

// 自动引入element plus组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//自动引入element样式插件
// 按需引入的element 消息提示的样式是不会引入的 所以使用这个库
import ElementPlus from 'unplugin-element-plus/vite'
//设置组件名称插件
import DefineOptions from 'unplugin-vue-define-options/vite'

// 根据环境读取.env文件的内容
const env = loadEnv(process.env.NODE_ENV, process.cwd())

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),

    DefineOptions(),
    ElementPlus({
      // options
    })
  ],
  server: {
    open: true,
    proxy: {
      [env.VITE_BASE_API]: {
        target: env.VITE_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(env.VITE_BASE_API, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
