<template>
  <div class="login">
    <div class="left">
      <login-left></login-left>
    </div>
    <div class="right">
      <login-right></login-right>
    </div>
  </div>
</template>

<script setup lang="ts">
import loginLeft from './cpns/login-left.vue'
import loginRight from './cpns/login-right.vue'
</script>

<style scoped lang="less">
.login {
  display: flex;
  max-width: 80%;
  height: 100vh;
  margin: auto;
  .left {
    width: 40%;
  }
  .right {
    width: 60%;
  }
}
</style>
