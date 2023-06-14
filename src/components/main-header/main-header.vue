<template>
  <div class="main-header">
    <div class="chagne-icon" @click="changeCollapse">
      <el-icon> <component :is="mainStore.isCollapse ? 'expand' : 'fold'" /> </el-icon>
    </div>
    <div class="header-content">
      <div class="left">
        <mainHeaderBreadcrumb></mainHeaderBreadcrumb>
      </div>
      <div class="right">
        <main-header-config></main-header-config>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import mainHeaderConfig from './cpns/main-header-config.vue'
import mainHeaderBreadcrumb from './cpns/main-header-breadcrumb.vue'
import useMainStore from '@/store/main/main'

const mainStore = useMainStore()

const changeCollapse = () => {
  mainStore.changeCollapseActions()
}
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  height: 100%;
  .chagne-icon {
    font-size: 20px;
    cursor: pointer;
  }
  .header-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  }
}
</style>
