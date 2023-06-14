<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside :width="mainStore.isCollapse ? '60px' : '200px'">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header>
          <main-header></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainHeader from '@/components/main-header/main-header.vue'
import mainMenu from '@/components/main-menu/main-menu.vue'
import useMainStore from '@/store/main/main'

const mainStore = useMainStore()
</script>

<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  .main-container {
    height: 100%;
  }
  .el-aside {
    // height: 100%;
    background-color: #ddebfd;
    transition: width 0.3s linear;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .el-header {
    background-color: #fff;
  }
  .el-main {
    background-color: #eef5fe;
  }
}
</style>
