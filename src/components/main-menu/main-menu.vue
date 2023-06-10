<template>
  <div class="main-menu">
    <div class="info">
      <div class="logo">
        <img src="@/assets/vue.svg " alt="" />
      </div>
      <div class="title">YM-CMS</div>
    </div>
    <el-menu router default-active="2" class="el-menu-vertical-demo">
      <main-menu-item :menus="routes"></main-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import mainMenuItem from './main-menu-item.vue'
import routes from '@/mock/router'
</script>

<style scoped lang="less">
.main-menu {
  .info {
    display: flex;
    align-items: center;
    padding: 10px 3px;
  }
}
</style>
