<template>
  <div class="demo">
    <h1>store:{{ loginStore.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'

// 设置组件的名字
defineOptions({
  name: 'demo123'
})

const loginStore = useLoginStore()
</script>

<style scoped lang="less">
.demo {
}
</style>
