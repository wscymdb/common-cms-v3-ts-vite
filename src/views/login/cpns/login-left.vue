<template>
  <div class="login-left">
    <div class="top">
      <div class="logo">
        <img src="@/assets/vue.svg" alt="" />
      </div>
      <div class="slogan">welcome to cms</div>
    </div>
    <div class="center">
      <login-left-item></login-left-item>
    </div>
    <div class="bottom">
      还没有账户吗？<span @click="handleClick" class="help">联系管理员</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
import loginLeftItem from './login-left-item.vue'

const handleClick = () => {
  ElNotification({
    title: '提示',
    message: '管理员不在😁'
  })
}
</script>

<style scoped lang="less">
.login-left {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  .top {
    display: flex;
    align-items: center;
    height: 50px;
    .slogan {
      font-weight: 700;
      font-size: 16px;
    }
  }
  .center {
    flex: 1;
    padding: 20px 40px;
    .login-left-item {
      margin-top: 40%;
    }
  }
  .bottom {
    font-size: 14px;
    text-align: center;
    height: 70px;
    line-height: 70px;
    .help {
      color: blue;
      cursor: pointer;
    }
  }
}
</style>
