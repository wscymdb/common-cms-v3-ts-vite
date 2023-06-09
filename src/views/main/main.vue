<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <main-header></main-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainHeader from '@/components/main-header/main-header.vue'
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
  }
  .el-header {
    background-color: #fff;
  }
  .el-main {
    background-color: #eef5fe;
  }
}
</style>
