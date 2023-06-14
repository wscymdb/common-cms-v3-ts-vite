<template>
  <div class="main-header-config">
    <div class="left">
      <el-icon size="20px" @click="full"><FullScreen /></el-icon>
    </div>
    <div class="right">
      <el-dropdown trigger="click" :popper-append-to-body="false">
        <span class="el-dropdown-link">
          <div class="avatar">
            {{ avatarName }}
          </div>
          {{ account.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>首页</el-dropdown-item>
            <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import { localCache } from '@/utils/cache'
import { computed } from 'vue'

const account = localCache.getCache('account')

const avatarName = computed(() => {
  const str: string = account.username.slice(0, 1)
  return str.toLocaleUpperCase()
})

const full = () => {
  const app = document.getElementById('app') as Element
  app.requestFullscreen()
}
const loginStore = useLoginStore()
const loginOut = () => {
  loginStore.loginOutAction()
}
</script>

<style scoped lang="less">
.main-header-config {
  display: flex;
  align-items: center;
  .left {
    margin-right: 10px;
    .el-icon {
      cursor: pointer;
    }
  }
  .el-dropdown-link {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    .avatar {
      width: 40px;
      height: 40px;
      margin-right: 6px;
      color: #fff;
      background-color: #ccc;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
      border-radius: 50%;
      border: 1px solid #ccc;
    }
  }
}
</style>
