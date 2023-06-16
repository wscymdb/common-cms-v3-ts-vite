<template>
  <div class="introduce">
    <el-link @click="goDetail" type="success">去详情</el-link>
    <br />
    <br />
    <br />
    <el-button @click="handleClick">json请求</el-button>
    <el-button @click="handleClick1">url encoded请求</el-button>
    <br />
    <br />
    <br />
    <div>请求结果：{{ requestRes }}</div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
import { test, demo } from '@/service/main/introduce/introduce'

const goDetail = () => {
  router.push('/edit/bd')
}
const requestRes = ref(null)

const handleClick = async () => {
  const data = await test()
  requestRes.value = data
}

const handleClick1 = async () => {
  const data = await demo()
  requestRes.value = data
}
</script>

<style scoped lang="less">
.introduce {
}
</style>
