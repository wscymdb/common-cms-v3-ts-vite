<template>
  <div class="introduce">
    <h1>
      <el-link @click="goDetail" type="success">去详情</el-link>
    </h1>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

const goDetail = () => {
  router.push('/edit/bd')
}
</script>

<style scoped lang="less">
.introduce {
}
</style>
