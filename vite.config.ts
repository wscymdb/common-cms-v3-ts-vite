import { defineConfig } from 'vite'
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

// https://vitejs.dev/config/

const pathSrc = path.resolve(__dirname, 'src')
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
    open: true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
