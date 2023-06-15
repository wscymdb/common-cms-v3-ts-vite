<template>
  <template v-for="menu in props.menus">
    <el-sub-menu
      :index="menu.id + ''"
      :key="menu.id"
      v-if="menu.children && menu.children.length && !menu.hidden"
    >
      <template #title>
        <el-icon v-if="menu.icon">
          <component :is="menu.icon"></component>
        </el-icon>
        <span>{{ menu.name }}</span>
      </template>
      <main-menu-item :menus="menu.children"></main-menu-item>
    </el-sub-menu>
    <el-menu-item
      :index="menu.id + ''"
      :key="menu.id + 'sub'"
      :route="menu.path"
      v-else-if="menu.path && !menu.hidden"
    >
      <el-icon v-if="menu.icon">
        <component :is="menu.icon"></component>
      </el-icon>
      <span> {{ menu.name }}</span>
    </el-menu-item>
  </template>
</template>

<script setup lang="ts">
interface IMenu {
  id: number | string
  name: string
  type: 1 | 2 | 3
  path: string
  icon?: string
  hidden: boolean
  children?: IMenu[]
}
interface IPros {
  menus: IMenu[]
}
const props = defineProps<IPros>()
</script>

<style scoped lang="less"></style>
