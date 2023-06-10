<template>
  <div class="main-menu-item">
    <template v-for="menu in props.menus">
      <el-sub-menu
        :index="menu.id"
        :key="menu.id"
        v-if="menu.children && menu.children.length && menu.sidebar"
      >
        <template #title>
          <el-icon v-if="menu.meta.icon">
            <component :is="menu.meta.icon"></component>
          </el-icon>
          <span>{{ menu.meta.title }}</span>
        </template>
        <main-menu-item :menus="menu.children"></main-menu-item>
      </el-sub-menu>
      <el-menu-item :index="menu.path" :key="menu.id + 'sub'" v-else-if="menu.sidebar">
        <el-icon v-if="menu.meta.icon">
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <span> {{ menu.meta.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { RouteComponent, RouteMeta } from 'vue-router'
interface IRouteMeta extends RouteMeta {
  title: string
}
declare type RawRouteComponent = RouteComponent | Lazy<RouteComponent>

declare type Lazy<T> = () => Promise<T>

interface IRouteRecordRaw {
  id: string
  path: string
  name: string | null | undefined
  meta: IRouteMeta
  sidebar: boolean
  component: RawRouteComponent
  children?: IRouteRecordRaw[]
}
interface IPros {
  menus: IRouteRecordRaw[]
}
const props = defineProps<IPros>()
</script>

<style scoped lang="less">
.main-menu-item {
}
</style>
