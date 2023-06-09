<template>
  <div class="login-right">
    <div class="video">
      <video src="@/assets/video/jg.mp4" autoplay muted loop></video>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.login-right {
  width: 100%;
  height: 100%;
  background-color: saddlebrown;
  &::before {
    content: '';
    display: table;
  }
  .video {
    margin-top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
  }
}
</style>
