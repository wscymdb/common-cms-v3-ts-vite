<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumb">
      <el-breadcrumb-item :to="{ path: item.path }">{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { USER_MENUS } from '@/global/constants'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { mapPathToBreadcrumbs } from '@/utils/map-menus'

const userMenus = localCache.getCache(USER_MENUS) || []

const route = useRoute()

const breadcrumb = computed(() => {
  return mapPathToBreadcrumbs(route.path, userMenus)
})
</script>

<style scoped lang="less">
.main-header-breadcrumb {
}
</style>
