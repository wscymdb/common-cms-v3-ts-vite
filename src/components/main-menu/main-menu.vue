<template>
  <div class="main-menu">
    <div class="info">
      <div class="logo">
        <img src="@/assets/vue.svg " alt="" />
      </div>
      <div class="title">YM-CMS</div>
    </div>
    <el-menu router :default-active="defaultActive" :collapse="mainStore.isCollapse">
      <main-menu-item :menus="routes"></main-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import mainMenuItem from './main-menu-item.vue'
import { computed } from 'vue'
import { mapPathToMenu } from '@/utils/map-menus'
import { useRoute } from 'vue-router'
import { USER_MENUS } from '@/global/constants'
import useMainStore from '@/store/main/main'

const route = useRoute()
const mainStore = useMainStore()

const routes = (localCache.getCache(USER_MENUS) || []) as any[]

// 获取哪个菜单默认选中 不设置页面刷新的时候会有问题
const defaultActive = computed(() => {
  return mapPathToMenu(route.path, routes)
})
</script>

<style scoped lang="less">
.main-menu {
  .info {
    display: flex;
    align-items: center;
    padding: 10px 3px;
    flex-wrap: nowrap;

    .logo {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .title {
      white-space: nowrap;
    }
  }
}
</style>
