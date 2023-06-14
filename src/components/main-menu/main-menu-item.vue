<template>
  <div class="main-menu-item">
    <template v-for="menu in props.menus">
      <el-sub-menu
        :index="menu.id + ''"
        :key="menu.id"
        v-if="menu.children && menu.children.length"
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
        v-else-if="menu.path"
      >
        <el-icon v-if="menu.icon">
          <component :is="menu.icon"></component>
        </el-icon>
        <span> {{ menu.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script setup lang="ts">
interface IMenu {
  id: number | string
  name: string
  type: 1 | 2 | 3
  path: string
  icon?: string
  children?: IMenu[]
}
interface IPros {
  menus: IMenu[]
}
const props = defineProps<IPros>()
</script>

<style scoped lang="less">
.main-menu-item {
}
</style>
