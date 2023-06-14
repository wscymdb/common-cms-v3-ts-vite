<template>
  <div class="main-header">
    <div class="chagne-icon">chagne-icon</div>
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
</script>

<style scoped lang="less">
.main-header {
  display: flex;
  align-items: center;
  height: 100%;
  .header-content {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 8px;
  }
}
</style>
